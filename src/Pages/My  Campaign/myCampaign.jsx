import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  // Fetch user's campaigns
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/campaigns?email=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch campaigns");
          }
          return res.json();
        })
        .then((data) => {
          setCampaigns(data);
          setLoading(false); // Stop loading after data is fetched
        })
        .catch((err) => {
          console.error("Error fetching campaigns:", err);
          Swal.fire("Error", "Unable to load campaigns. Please try again later.", "error");
          setLoading(false);
        });
    }
  }, [user?.email]);

  // Delete a campaign
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete campaign");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              setCampaigns(campaigns.filter((campaign) => campaign._id !== id)); // Update UI
            }
          })
          .catch((err) => {
            console.error("Error deleting campaign:", err);
            Swal.fire("Error", "Unable to delete the campaign. Please try again.", "error");
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-t-4 border-b-4 border-teal-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-teal-700">My Campaigns</h1>
      {campaigns.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any campaigns yet.</p>
      ) : (
        <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-lg">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Min Donation</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Deadline</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr
                  key={campaign._id}
                  className="hover:bg-teal-100 bg-white drop-shadow-md transition-colors duration-200"
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {campaign.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{campaign.type}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    ${campaign.minimumDonation}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 flex gap-2 justify-center">
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <Link to={`/updateCampaign/${campaign._id}`}>
                      <button className="inline-block rounded bg-teal-500 px-4 py-2 text-xs font-medium text-white hover:bg-teal-600">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;

import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

const AllCampaign = () => {
  const campaigns = useLoaderData(); // Use loaded data directly
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // Ascending by default

  useEffect(() => {
    setSortedCampaigns([...campaigns]); // Initialize with loaded campaigns
    setLoading(false); // Simulating loading state for better UX
  }, [campaigns]);

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedCampaigns].sort((a, b) => {
      return newOrder === "asc"
        ? a.minimumDonation - b.minimumDonation
        : b.minimumDonation - a.minimumDonation;
    });
    setSortedCampaigns(sorted);
    setSortOrder(newOrder);
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
      <h1 className="text-2xl font-bold mb-6 text-center text-teal-700">
        All Campaigns
      </h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleSort}
          className="flex items-center font-semibold bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-amber-500 transition-colors duration-200"
        >
          {sortOrder === "asc" ? (
            <FaSortAmountUp className="mr-2" />
          ) : (
            <FaSortAmountDown className="mr-2" />
          )}
          Sort by Min Donation
        </button>
      </div>

      <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-lg">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Min Donation</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Deadline</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedCampaigns.map((campaign) => (
              <tr
                key={campaign._id}
                className="hover:bg-teal-100 bg-white drop-shadow-md transition-colors duration-200"
              >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {campaign.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {campaign.type}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ${campaign.minimumDonation}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={`/campaignDetails/${campaign._id}`}>
                    <button className="inline-block rounded bg-teal-600 px-4 py-2 text-xs font-medium text-white hover:bg-teal-700">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;

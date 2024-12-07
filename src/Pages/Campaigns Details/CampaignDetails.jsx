import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const campaignDetails = useLoaderData(); // Campaign data loaded from the server
  const { user } = useContext(AuthContext); // Get logged-in user details

  const { image, title, description, type, minimumDonation, _id, deadline } = campaignDetails;

  const handleDonate = () => {
    const donationData = {
      image,
      title,
      description,
      type,
      minimumDonation,
      deadline,
      _id,
      userEmail: user.email,
      userName: user.displayName,
      donatedAt: new Date().toISOString(),
    };

    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            title: "Donation Complete",
            text: `${title} donation successfully added.`,
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Something Went Wrong",
          text: `Unable to complete the donation for ${title}.`,
          icon: "error",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center items-center">
      <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 px-4 md:px-6 lg:px-8 mx-auto">
  <img
    src={image}
    alt={title}
    className="h-64 rounded-md   w-full object-cover transition-transform duration-300 hover:scale-105"
  />
  <div className="p-6">
    <h2 className="text-2xl font-bold text-teal-600 mb-4">{title}</h2>
    <p className="text-gray-700 mb-3">{description}</p>
    <div className="mb-4">
      <p className="text-gray-800">
        <span className="font-bold">Type:</span> {type}
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Minimum Donation:</span> ${minimumDonation}
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Deadline:</span>{" "}
        {new Date(deadline).toLocaleDateString()}
      </p>
    </div>
    <button
      onClick={handleDonate}
      className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    >
      Donate
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default CampaignDetails;

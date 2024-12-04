import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationItemsDetails = () => {
  const [campaign, setCampaign] = useState({});
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  const { id } = useParams();
  const campaignDetails = useLoaderData();

  useEffect(() => {
    const findCampaignDetails = campaignDetails?.find(
      (service) => service.id === parseInt(id)
    );
    setCampaign(findCampaignDetails);
  }, [id, campaignDetails]);

  const { title, image, description, status, contactInfo, division } = campaign;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      notes: "",
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto" >
      {campaign && (
        <>
          {/* Campaign Details */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <p className="text-sm">
                  <span className="font-medium">Division:</span> {division}
                </p>
                <p
                  className={`text-sm ${
                    status === "Ongoing" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  <span className="font-medium">Status:</span> {status}
                </p>
                <p className="text-sm col-span-2 sm:col-span-1">
                  <span className="font-medium">Contact:</span> {contactInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Donation Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                >
                  Quantity of Items
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="  focus:border-blue-500 focus:ring-blue-500 p-3 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  placeholder="e.g., 2 jackets, 3 blankets"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="itemType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Item Type
                </label>
                <input
                  type="text"
                  id="itemType"
                  name="itemType"
                  value={formData.itemType}
                  onChange={handleInputChange}
                  className=" focus:border-blue-500 p-3 focus:ring-blue-500  mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  placeholder="e.g., blanket, jacket, sweater"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pickupLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  className=" focus:border-blue-500 p-3 focus:ring-blue-500 sm:text-sm mt-1 w-full rounded-md border-gray-200 shadow-sm"
                  placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Add any extra details..."
                />
              </div>
              <button onSubmit={handleFormSubmit}
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white text-center font-medium rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Submit Donation
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default DonationItemsDetails;

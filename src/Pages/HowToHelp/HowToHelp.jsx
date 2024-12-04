import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import donateImg from "../../assets/donate.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HowToHelp = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [isDedicated, setIsDedicated] = useState(false);
  const [donationType, setDonationType] = useState("once"); // Tracks the active button: 'once' or 'monthly'
  const [designation, setDesignation] = useState("most-needed"); // Tracks the dropdown value

  const handleDonate = (e) => {
    e.preventDefault();

    // Validation for all fields
    if (!donationAmount || Number(donationAmount) <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    if (!designation) {
      toast.error("Please select a designation.");
      return;
    }

    // Display success message
    const donationFrequency = donationType === "once" ? "one-time" : "monthly";
    toast.success(
      `Thank you for your ${donationFrequency} donation of ৳${donationAmount}!`
    );

    // Reset the form fields
    setDonationAmount("");
    setIsDedicated(false);
    setDesignation("most-needed");
  };

  return (
    <div className="">
        <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-blue-800">How to Help</h1>
        <p className="text-gray-700 mt-2 text-lg">
          Discover the ways you can support our mission to bring warmth and hope <br />
          to vulnerable communities this winter. Every contribution makes a
          difference.
        </p>
      </div>
       <div className="min-h-screen flex items-center justify-center gap-3 px-4">
      {/* Page Title and Description */}
    
      <div className="max-w-6xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="p-8 bg-blue-50 flex flex-col justify-center items-center" data-aos="fade-right" data-aos-duration="2000">
          <img src={donateImg} alt="Donation" className="rounded-md mb-6" />
          <h2 className="text-2xl font-bold text-blue-800 mb-4">WinterCare</h2>
          <p className="text-gray-700 text-base mb-4">
            Every individual deserves warmth. WinterCare connects donors with
            vulnerable communities, ensuring everyone has access to essential
            winter clothing.
          </p>
          <p className="text-gray-700 mb-6">
            Your contributions can bring warmth and hope to those in need.
            Donate now and make an impact today.
          </p>
          <div className="flex gap-4 text-blue-600 text-sm">
            <a href="#" className="hover:underline">
              View Our Impact
            </a>
            <a href="#" className="hover:underline">
              Get in Touch
            </a>
            <a href="#" className="hover:underline">
              Volunteer with Us
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaLock className="text-green-500" /> Secure donation
          </h3>
          <form onSubmit={handleDonate}>
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => setDonationType("once")}
                className={`py-2 px-4 rounded-md border ${
                  donationType === "once"
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500"
                } hover:bg-blue-100`}
              >
                Give once
              </button>
              <button
                type="button"
                onClick={() => setDonationType("monthly")}
                className={`py-2 px-4 rounded-md border ${
                  donationType === "monthly"
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500"
                } hover:bg-blue-100`}
              >
                Monthly
              </button>
            </div>
            {/* Donation Options */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {["7000", "3500", "2000", "750", "400", "180"].map(
                (amount, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setDonationAmount(amount)}
                    className={`py-2 px-4 rounded-md border ${
                      donationAmount === amount
                        ? "bg-blue-500 text-white"
                        : "border-gray-300 text-gray-800"
                    } hover:bg-blue-100`}
                  >
                    ৳{amount}
                  </button>
                )
              )}
            </div>
            {/* Custom Amount */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4">
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 outline-none px-2"
              />
              <span className="text-gray-600">BDT</span>
            </div>
            {/* Dedicate Checkbox */}
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="dedicate"
                checked={isDedicated}
                onChange={(e) => setIsDedicated(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="dedicate" className="text-gray-800 text-sm">
                Dedicate this donation
              </label>
            </div>
            {/* Designate Dropdown */}
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-6 text-gray-600"
            >
              <option value="most-needed">
                Designate to wherever most needed
              </option>
              <option value="specific-campaign">Specific campaign</option>
            </select>
            {/* Donate Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
   
  );
};

export default HowToHelp;

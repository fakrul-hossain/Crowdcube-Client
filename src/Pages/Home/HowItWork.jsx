import React, { useState } from "react";

const HowItWorks = () => {
  // State to track the selected button
  const [selectedTab, setSelectedTab] = useState("mission");

  // Content for each button
  const content = {
    mission:
      "Our mission is to ensure that no one has to face the harshness of winter without proper clothing. We connect donors with volunteers to facilitate the distribution of winter essentials.",
    vision:
      "We envision a world where communities come together to support each other, creating a sustainable system of aid during challenging seasons like winter.",
    history:
      "Winter Donation started as a grassroots initiative and has grown into a platform that serves vulnerable communities across Bangladesh, ensuring they stay warm during winter.",
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right" data-aos-duration="2000">
            <p className="text-sm text-[#0066FF] font-medium uppercase mb-2">
              Get to Know
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our platform makes it easy for donors to contribute winter
              essentials to those in need. Here's how you can join hands in
              making a difference this winter.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setSelectedTab("mission")}
                className={`px-4 py-2 rounded-lg shadow-md font-medium ${
                  selectedTab === "mission"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-purple-700`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setSelectedTab("vision")}
                className={`px-4 py-2 rounded-lg shadow-md font-medium ${
                  selectedTab === "vision"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-purple-700`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setSelectedTab("history")}
                className={`px-4 py-2 rounded-lg shadow-md  font-medium ${
                  selectedTab === "history"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-purple-700`}
              >
                Our History
              </button>
            </div>

            {/* Display Content Based on Selected Tab */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {content[selectedTab]}
            </p>
          </div>

          {/* Image & Points */}
          <div className="relative flex flex-col items-center" data-aos="fade-left" data-aos-duration="2000">
            <img
              src="https://i.ibb.co/3hF2gv0/pexels-gustavo-fring-7156175.jpg"
              alt="How It Works"
              className="rounded-full shadow-lg w-72 h-72 object-cover mb-6"
            />
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Register or log in to browse donation campaigns.
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Select a campaign and contribute clothing items.
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Drop off items at designated collection points.
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Volunteers distribute the items to those in need.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

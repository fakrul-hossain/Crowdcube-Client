import React from 'react';
import { NavLink } from 'react-router-dom';

const DonationItems = ({campaign}) => {

    const {title, image, description, status, contactInfo, division,id } = campaign


    return (
        <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-sm">
            <span className="font-medium">Division:</span> {division}
          </p>
          <p className={`text-sm ${status === "Ongoing" ? "text-green-600" : "text-yellow-600"}`}>
            <span className="font-medium">Status:</span> {status}
          </p>
          <p className="text-sm">
            <span className="font-medium">Contact:</span> {contactInfo}
          </p>
        </div>
       <NavLink to={`/campaignDetails/${id}`}>
       <button
          className="mt-4 w-full py-2 px-4 bg-[#0066FF] text-white text-center font-medium rounded-md hover:bg-opacity-90 transition duration-300"
        >
          Donate Now
        </button>
       </NavLink>
      </div>
    </div>
        </div>
    );
};

export default DonationItems;
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const FundraiserInfo = () => {
  const fundraiser = {
    title:
      "Appeal for financial assistance for the family of Sunil Yadav, IITD Alum",
    raised: 224651,
    goal: 1000000,
    donorsCount: 61,
    category: "Social",
    startDate: "Wed, Aug 28, 2024",
    endDate: "Sat, Sep 28, 2024",
    coordinators: [
      {
        name: "Maneesh Jaiswal",
        email: "president@iitdalumni.com",
        phone: "8130089758",
      },
      {
        name: "Rakesh Kumar Bansal",
        email: "rakesh.bansal64@gmail.com",
        phone: "9811132080",
      },
    ],
  };

  return (
    <div className="max-w-xs mx-auto bg-white border rounded-lg shadow-lg -translate-y-24">
      {/* Fundraiser Image */}
      <img
        src="/1.jpeg"
        alt="Fundraiser"
        className="w-full h-56 object-cover rounded-t-lg"
      />

      {/* Fundraiser Info */}
      <div className="p-4">
        {/* Fundraiser Goal */}
        <p className="text-sm font-semibold text-gray-800">
          INR {fundraiser.raised.toLocaleString("en-IN")} raised of INR{" "}
          {fundraiser.goal.toLocaleString("en-IN")} goal
        </p>

        {/* Progress Bar */}
        <div className="relative pt-1 my-2">
          <div className="overflow-hidden h-2 text-xs flex bg-gray-300">
            <div
              style={{
                width: `${(fundraiser.raised / fundraiser.goal) * 100}%`,
              }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            ></div>
          </div>
        </div>

        {/* Donor Count */}
        <p className="text-gray-600 text-sm">
          {fundraiser.donorsCount} people have donated so far.
        </p>

        {/* Donate Button */}
        <Link to="/donation-page">
        
        <button className="w-full py-2 px-4 bg-purple-400 hover:bg-purple-600 text-white font-semibold rounded mt-4">
          DONATE NOW
        </button>
        </Link>

        {/* Fundraiser Details */}
        <div className="mt-4 text-sm">
          <p>
            <span className="font-bold">Category: </span>
            {fundraiser.category}
          </p>
          <p>
            <span className="font-bold">Start Date: </span>
            {fundraiser.startDate}
          </p>
          <p>
            <span className="font-bold">End Date: </span>
            {fundraiser.endDate}
          </p>
        </div>

        {/* Project Coordinators */}
        <div className="mt-6">
          <h3 className="font-bold mb-2">📞 Project Co-ordinators</h3>

          {fundraiser.coordinators.map((coordinator, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{coordinator.name}</p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-purple-600" />
                {coordinator.email}
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-purple-600" />
                {coordinator.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundraiserInfo;

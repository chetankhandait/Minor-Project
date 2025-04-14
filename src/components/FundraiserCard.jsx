import React from "react";

import { Link } from "react-router-dom";

const FundraiserCard = ({ fundraiser }) => {
  const progressPercentage = (
    (fundraiser.collectedAmount / fundraiser.amount) *
    100
  ).toFixed(2);

  return (
    <Link to={`/fundraiser/${fundraiser.id}`}>
      <div className="bg-white shadow-md rounded-md p-4 flex items-start space-x-4 max-w-4xl mb-6 ">
        <div className="w-32 h-32">
          <img
            src={fundraiser.img}
            alt={fundraiser.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1 p-3">
          <h3 className="text-lg font-semibold text-puple-600">
            {fundraiser.title}
          </h3>
          <p className="text-sm font-semibold text-black">
            {fundraiser.category}
          </p>
          <p className="text-sm mt-2 text-gray-600">
            INR {fundraiser.collectedAmount.toLocaleString()} raised of INR{" "}
            {fundraiser.amount.toLocaleString()} goal
          </p>
          <div className="relative pt-1 mt-2">
            <div className="overflow-hidden h-1.5 text-xs flex       bg-gray-300">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {fundraiser.donors.length} people have donated so far.
          </p>
        </div>
      </div>
    </Link>
  );
};

const FundraisersList = ({ fundraisers }) => {
  return (
    <div>
      {fundraisers.map((fundraiser) => (
        <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
      ))}
    </div>
  );
};

export default FundraisersList;

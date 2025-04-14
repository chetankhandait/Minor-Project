import React, { useState } from "react";
import { Link } from "react-router-dom";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleInputChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donationAmount) {
      // Add any logic if needed before confirming
      console.log("Donation Amount:", donationAmount);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 border rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Make a Donation</h1>

      <form onSubmit={handleSubmit}>
        {/* Donation Amount Input */}
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Enter Donation Amount (INR)
        </label>
        <input
          type="number"
          value={donationAmount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          required
        />

        {/* Predefined donation amounts */}
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 rounded-lg"
            onClick={() => setDonationAmount(500)}
          >
            500 INR
          </button>
          <button 
            type="button"
            className="py-2 px-4 bg-gray-200 rounded-lg"
            onClick={() => setDonationAmount(1000)}
          >
            1000 INR
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 rounded-lg"
            onClick={() => setDonationAmount(2500)}
          >
            2500 INR
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 rounded-lg"
            onClick={() => setDonationAmount(5000)}
          >
            5000 INR
          </button>
        </div>

        {/* Confirmation button */}
        <Link to={`/confirmation-page?amount=${donationAmount}`}>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
          >
            Proceed to Confirmation
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DonationPage;

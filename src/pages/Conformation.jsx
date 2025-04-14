import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const donationAmount = params.get("amount");

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // Ensure all fields are filled
    if (!name || !email || !accountNo || !ifscCode) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      // You can add logic to handle form submission here
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 border rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Confirm Donation</h1>

      <div className="mb-4 text-center">
        <p className="text-xl font-semibold">
          You are donating: <span className="text-purple-600">INR {donationAmount}</span>
        </p>
      </div>

      {/* Donor's Name */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      {/* Donor's Email */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Your Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      {/* Donor's Account Number */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Account Number
        </label>
        <input
          type="text"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          placeholder="Enter account number"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      {/* Donor's IFSC Code */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          IFSC Code
        </label>
        <input
          type="text"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          placeholder="Enter IFSC code"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 text-red-600 text-sm font-semibold">
          {error}
        </div>
      )}

      {/* Final Confirmation */}
      <div className="text-center">
        <Link to="/thank-you" onClick={handleSubmit}>
          <button className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">
            Confirm & Donate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;

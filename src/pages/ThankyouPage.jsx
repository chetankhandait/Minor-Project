import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer for 2 seconds to automatically navigate to another page
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to homepage after 2 seconds
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 border rounded-lg shadow-lg mt-10 text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-6 flex flex-col  items-center">
        <img src="/tick.png" alt="Success" width={100} />
        Thank You for Your Donation!
      </h1>
      <p className="text-gray-700 text-lg">
        Your contribution helps us move closer to our goal. You will receive an
        email confirmation shortly.
      </p>
    </div>
  );
};

export default ThankYouPage;

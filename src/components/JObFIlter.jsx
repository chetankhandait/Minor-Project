import React, { useState } from "react";

const Filters = () => {
  const [stipend, setStipend] = useState(0);

  return (
    <div className="p-4 w-full rounded-lg border-2 bg-white">
      <h1 className="text-lg font-semibold flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
        Filters
      </h1>

      {/* Profile Input */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Profile</label>
        <input type="text" placeholder="e.g. Marketing" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
      </div>

      {/* Location Input */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" placeholder="e.g. Delhi" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
      </div>

      {/* Checkbox options */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Work from home</label>
        <input type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
      </div>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Part-time</label>
        <input type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
      </div>

      {/* Stipend Slider */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Desired minimum monthly stipend (₹)</label>
        <input type="range" min="0" max="10000" step="1000" value={stipend} onChange={(e) => setStipend(e.target.value)} className="w-full mt-2" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>
        </div>
      </div>

      {/* Toggle for more filters */}
      <button className="mt-4 text-sm text-purple-600">View less filters &uarr;</button>

      {/* Additional filters */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Starting from (or after)</label>
        <input type="date" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Max. duration (months)</label>
        <select className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
          <option>Choose duration</option>
          <option>1 Month</option>
          <option>2 Months</option>
          <option>3 Months</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

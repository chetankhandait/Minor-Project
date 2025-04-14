import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarAlt,
  FaTimes,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const EventManagement = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    setIsFormVisible(false); // Close the form
    setShowPopup(true); // Show the success popup

    // Automatically close the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <aside className="w-full max-w-xs p-4 border-r">
        <h2 className="text-lg font-semibold">DATE</h2>

        {/* Date Pickers */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Events Starting
            </label>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="today"
                className="border rounded p-2 w-full"
              />
              <FaCalendarAlt className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Events Ending
            </label>
            <div className="relative">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select date"
                className="border rounded p-2 w-full"
              />
              <FaCalendarAlt className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded mb-6">
          Apply
        </button>

        {/* Filters */}
        <div>
          <label className="block font-semibold mb-2">Filters</label>
          <div>
            {["In-Person", "Online", "Reunions"].map((label, idx) => (
              <label key={idx} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Event Type */}
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Event Type</h4>
          {["Career", "Service", "Social", "Learn"].map((label, idx) => (
            <label key={idx} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              {label}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content: Events List */}
      <main className="w-3/4 p-6 bg-gray-50 relative">
        {/* Create Event Button in Top-Right Corner */}
        <button
          className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => setIsFormVisible(true)}
        >
          Create Event
        </button>

        {/* Events List */}
        <h2 className="text-3xl font-semibold mb-8 flex items-center">
          <span className="text-purple-600 mr-2">
            <MdEvent className="w-6 h-6" />
          </span>
          12 Events
        </h2>

        {/* Event Items */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Conference of JEC Engineers
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                BANGLORE
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            IN-PERSON
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Batch 1998 Meet Offline
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                JEC JASHAN HALL
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                JEC JASHN HALL
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-center w-16 h-16 bg-gray-100 shadow-xl px-4">
              <div className="text-purple-600 font-semibold text-sm">SEP</div>
              <div className="text-2xl font-bold">9</div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-[#00306d] leading-tight text-wrap">
                Class Connections Call - September 2024
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-2 mb-4">
                MIT ALUMNI ASSOCIATION
              </p>
              <p className="text-sm text-gray-600">
                Monday, September 9, 11:00am - 2:30pm (America/New_York)
              </p>
            </div>
          </div>
          <button className="mt-4 text-purple-600 font-semibold">
            MORE INFO & RSVP
            <FaChevronDown className="w-4 h-4 inline-block ml-1" />
          </button>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ml-6">
            Online
          </span>
        </div>

        {/* Create Event Form Modal */}
        {isFormVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
              {/* Cancel Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsFormVisible(false)}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-semibold mb-4">Create Event</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="flex justify-center items-center gap-8">
                  <div>
                    {/* Event Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Event Name
                      </label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>

                    {/* Event Heading */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Event Heading
                      </label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  {/* Event Description */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Event Description
                      </label>
                      <textarea
                        className="border rounded p-2 w-full"
                        rows="4"
                        required
                      />
                    </div>
                    {/* Event Date */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Event Date
                      </label>
                      <input
                        type="date"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>
                    {/* Location */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Location
                      </label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center">
            <FaCheckCircle className="w-12 h-12 mr-4" />
            <span>Request successfully sent to college!</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default EventManagement;

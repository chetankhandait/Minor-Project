import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdGroups2, MdPerson } from "react-icons/md";

const CommunityChat = () => {
  // Dummy community member list
  const members = [
    { id: 1, name: "Rajesh Singh", lastMessage: "Accepted on another..." },
    { id: 2, name: "Chirag Gupta", lastMessage: "Yes sir" },
    { id: 3, name: "Riya Singh", lastMessage: "Image" },
    { id: 4, name: "Dimple Mahobe", lastMessage: "8 years of experience" },
    { id: 5, name: "Abhi Rai", lastMessage: "Jiya ho Bihar" },
    { id: 6, name: "Manas", lastMessage: "Anushka: Call" },
    { id: 7, name: "Chetan", lastMessage: "Image" },
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "What's the best way to handle async operations in JavaScript?",
      time: "10:05",
      sender: "Alex",
    },
    {
      id: 2,
      text: "I prefer using Promises, they keep things clean.",
      time: "10:07",
      sender: "Chris",
    },
    {
      id: 3,
      text: "Async/Await is the way to go! Much cleaner syntax.",
      time: "10:10",
      sender: "You",
    },
    {
      id: 4,
      text: "I agree, Async/Await makes async code look synchronous.",
      time: "10:12",
      sender: "Jordan",
    },
    {
      id: 5,
      text: "Callbacks still have their use cases though.",
      time: "10:15",
      sender: "Sam",
    },
    {
      id: 6,
      text: "Yeah, especially for older codebases.",
      time: "10:17",
      sender: "You",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 1,
          text: inputMessage,
          time: "Now",
          sender: "You",
        },
      ]);
      setInputMessage("");
    }
  };

  return (
    <>
      <div className="flex h-[600px] p-4 mx-auto rounded-lg">
        {/* Sidebar for Community Members */}
        <div className="mx-auto  gap-4 flex-col p-4 bg-white border rounded-lg max-w-80 py-4 items-start flex">
        <h2 className="text-xl font-semibold">JavaScript Enthusiasts</h2>
        <p>
         Hello 👋 and welcome to our JavaScript Community! We're excited to
          have you join us. Whether you're just starting out or you're looking
          to sharpen your skills, you're in the right place! 
         </p>

         <div className="flex items-center overflow-hidden mt-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt
                  />
                  <img
                    className="-ml-2 inline-block h-8 w-8  rounded-full text-white border-2 border-white object-cover object-center"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt
                  />
                </div>


        </div>

        <div className="w-1/4 bg-white border-r">
          <div className="p-4 flex items-center gap-2 border-b">
            <MdGroups2 className="text-4xl" />
            <h1 className="text-lg font-semibold">Community Members</h1>
          </div>
          <div className="overflow-y-auto h-full">
            {members.map((member) => (
              <div
                key={member.id}
                className="p-4 border-b flex gap-2 items-center hover:bg-gray-200 cursor-pointer"
              >
                <FaUserCircle className="text-xl" />
                <h2 className="font-semibold">{member.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-3/4 flex flex-col">
          <div className="p-4 bg-white border-b">
            <h2 className="text-lg font-semibold">JavaScript Enthusiasts</h2>
          </div>

          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "You"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input for sending messages */}
          <div className="p-4 bg-white border-t flex items-center">
            <input
              className="flex-grow border rounded-lg px-3 py-2 mr-2"
              type="text"
              placeholder="Type a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityChat;

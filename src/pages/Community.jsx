import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  // Dummy array for tech communities with members count
  const initialCommunities = [
    {
      id: 1,
      name: "JavaScript Enthusiasts",
      description: "A community for JavaScript developers and enthusiasts.",
      membersCount: 150,
    },
    {
      id: 2,
      name: "React Developers",
      description:
        "A space for React developers to share ideas and grow their skills.",
      membersCount: 200,
    },
    {
      id: 3,
      name: "AI & Machine Learning Innovators",
      description:
        "Join to explore cutting-edge AI and Machine Learning technologies.",
      membersCount: 250,
    },
    {
      id: 4,
      name: "Full Stack Developers Hub",
      description:
        "For developers working across the stack, from frontend to backend.",
      membersCount: 180,
    },
    {
      id: 5,
      name: "Open Source Contributors",
      description:
        "A community dedicated to contributing to open-source projects.",
      membersCount: 300,
    },
    {
      id: 6,
      name: "Cybersecurity Experts",
      description:
        "For professionals focused on network security, encryption, and threat management.",
      membersCount: 170,
    },
    {
      id: 7,
      name: "Data Science Pioneers",
      description:
        "Join this community to discuss the latest trends and tools in data science.",
      membersCount: 230,
    },
    {
      id: 8,
      name: "Mobile App Developers",
      description:
        "A space for developers working on Android, iOS, and cross-platform mobile apps.",
      membersCount: 210,
    },
    {
      id: 9,
      name: "Cloud Computing Professionals",
      description:
        "Connect with experts and enthusiasts working with cloud technologies like AWS and Azure.",
      membersCount: 320,
    },
  ];

  const [communities, setCommunities] = useState(initialCommunities);
  const [joinedCommunity, setJoinedCommunity] = useState(null);

  // Function to handle "Join Community" click
  const handleJoin = (communityId) => {
    const updatedCommunities = communities.map((community) =>
      community.id === communityId
        ? { ...community, membersCount: community.membersCount + 1 }
        : community
    );
    setCommunities(updatedCommunities);

    const communityName = updatedCommunities.find(
      (community) => community.id === communityId
    ).name;

    setJoinedCommunity(communityName);

    // Reset after 2 seconds
    setTimeout(() => {
      setJoinedCommunity(null);
    }, 2000);
  };

  return (
    <div className="flex gap-4 mx-auto max-w-7xl">
      <div className="w-80">
        <Sidebar />
      </div>
      <div className="bg-white w-full rounded-xl p-4 h-full">
        {/* Map over the communities and display them as cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div
              key={community.id}
              className="bg-white border rounded-lg p-4 h-64 shadow-xl flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2">{community.name}</h2>
              <p className="text-sm mb-2">{community.description}</p>

              <div className="my-2">
                <h4 className="text-sm text-gray-600">
                  {community.membersCount} people have joined
                </h4>
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

              <button
                className="bg-purple-500 text-white text-sm rounded-lg px-4 py-2 mt-auto"
                onClick={() => navigate(`/community/${community.id}`)} // Correct path syntax
              >
                Join Community
              </button>
            </div>
          ))}
        </div>

        {/* Popup notification for joining a community */}
        {joinedCommunity && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
            You have joined the {joinedCommunity}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;

// Homepage.js
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CreatePost from "../sections/CreatePost";
import UsersFeed from "../sections/UsersFeed";

const Homepage = () => {
  // const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem('user'));

  // if (!user) {
  //   navigate('/login');
  //   return null;
  // }

  const navigate = useNavigate();

  const people = [
    {
      name: "Aryan Tyagi",
      college: "Jabalpur Engineering College",
      image:
        "https://images.unsplash.com/photo-1718304775465-8496e07d6ba2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Doe",
      college: "New York University",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more people data if needed
  ];

  return (
    <div className="h-full px-16 pt-6 lg:h-screen flex flex-col">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {/* sidebar fixed */}
        <Sidebar />

        {/* main div (scrollable content) */}
        <div className="lg:col-span-2 lg:overflow-y-auto h-full rounded-lg">
          {/* Content here */}
          <CreatePost />
          <UsersFeed />
        </div>

        {/* right div fixed */}
        <div className="h-full flex flex-col gap-4  lg:sticky lg:top-12">
          <div className="h-fit p-4 w-full rounded-lg border-2 bg-white">
            <h1>People You May Know</h1>
            {people.map((person, index) => (
              <div key={index} className="py-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold">{person.name}</h1>
                  <p className="text-sm">{person.college}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full p-4 rounded-lg border-2 bg-white">
            <h1>Recommended Community</h1>

            <div className=" w-full rounded-xl p-4 h-full">
              {/* Map over the communities and display them as cards */}
              <div className="">
                <div className=" border rounded-lg p-4 h-64 w-full  flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2">
                    Javascript Enthusiasts
                  </h2>
                  <p className="text-sm mb-2">
                    A community for JavaScript developers and enthusiasts.
                  </p>

                  <div className="my-2">
                    <h4 className="text-sm text-gray-600">
                      150+ people have joined
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
                    onClick={() => navigate(`/community/1`)} // Correct path syntax
                  >
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

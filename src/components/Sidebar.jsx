/* eslint-disable react/no-unescaped-entities */
import {
  MdBarChart,
  MdGroup,
  MdLogout,
  MdPeople,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="h-fit bg-white p-4 flex flex-col gap-2 rounded-xl border-2 lg:sticky lg:top-0">
        <div className=" w-full flex justify-center flex-col items-center text-center">
          <img
            className="h-24 w-24 rounded-full"
            src="/avatar.png"
            alt="User Profile"
          />
          <h1 className="font-semibold text-xl">Abhiraj Pandey</h1>
          <p>Jabalpur Engineering College</p>
          <p>Branch : ECE'1950</p>
        </div>

        {/* Explore Panel */}
        <div className="h-44 w-full py-4">
          <h1 className="font-semibold text-lg">Explore Panel</h1>
          <div className="flex flex-col gap-2">
            {/* Profile */}
            <Link to={"/profile"} className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-purple-100 cursor-pointer">
              <MdPerson className="text-xl" />
              <h1>Profile</h1>
            </Link>

            {/* Connections */}
            <div className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-purple-100 cursor-pointer">
              <MdGroup className="text-xl" />
              <h1>Connections</h1>
            </div>

            {/* User Analytics */}
            <div className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-purple-100 cursor-pointer">
              <MdBarChart className="text-xl" />
              <h1>User Analytics</h1>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="h-44 w-full py-4">
          <h1 className="font-semibold text-lg">Settings</h1>
          <div className="flex flex-col gap-2">
            {/* Settings */}
            <div className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-purple-100 cursor-pointer">
              <MdSettings className="text-xl" />
              <h1>Settings</h1>
            </div>

            {/* My Communities */}
            <Link to={"/community"} className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-purple-100 cursor-pointer">
              <MdPeople className="text-xl" />
              <h1>My Communities</h1>
            </Link>

            {/* Logout */}
            <div className="flex gap-2 justify-start p-2 rounded-md items-center hover:bg-red-100 cursor-pointer">
              <MdLogout className="text-xl text-red-500" />
              <h1 className="text-red-500">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

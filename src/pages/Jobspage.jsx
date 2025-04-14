import { FaBriefcase, FaHeart, FaClipboard, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa";
import Sidebar from "./../components/Sidebar"
import Filters from "../components/JObFIlter";
const Jobspage = () => {
  // Dummy job data
  const jobs = [
    {
      id: 1,
      title: "Full Stack Engineer - React JS and Node JS (Remote)",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reprehenderit neque architecto.",
      location: "Jabalpur",
      image: "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Frontend Developer - Vue.js and Tailwind CSS",
      description: "Quisquam velit qui accusantium ea. Tempore suscipit explicabo inventore adipisci.",
      location: "Mumbai",
      image: "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Backend Developer - Python and Django",
      description: "Voluptatibus accusamus officia recusandae animi velit consequatur. Quasi, expedita?",
      location: "Bangalore",
      image: "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "DevOps Engineer - AWS and Kubernetes",
      description: "Optio, expedita provident delectus quas deleniti reiciendis soluta.",
      location: "Hyderabad",
      image: "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="h-full mx-auto max-w-7xl p-6 flex flex-col">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {/* Sidebar */}
        <div>
          <Sidebar/>
        </div>

        {/* Main scrollable content */}
        <div className="lg:col-span-2 bg-white p-4 h-full overflow-y-auto rounded-lg">

        <div className="h-fit justify-evenly bg-white p-4 flex flex-row mb-4 gap-4 rounded-lg border-2 lg:sticky lg:top-0">
  <div className="group flex text-sm flex-col cursor-pointer p-1 px-2 rounded-lg items-center gap-2">
    <FaBriefcase className="text-gray-600" />
    <h1 className="text-gray-800 group-hover:underline">My Jobs</h1>
  </div>
  
  <div className="group flex flex-col text-center cursor-pointer text-sm p-1 px-2 rounded-lg items-center gap-2">
    <FaHeart className="text-gray-600" />
    <h1 className="text-gray-800 group-hover:underline">Preference</h1>
  </div>
  
  <div className="group flex flex-col text-center cursor-pointer text-sm p-1 px-2 rounded-lg items-center gap-2">
    <FaClipboard className="text-gray-600" />
    <h1 className="text-gray-800 group-hover:underline">Skills Assignments</h1>
  </div>
  
  <div className="group flex flex-col text-center cursor-pointer text-sm p-1 px-2 rounded-lg items-center gap-2">
    <FaChalkboardTeacher className="text-gray-600" />
    <h1 className="text-gray-800 group-hover:underline">Interview Prep</h1>
  </div>
</div>



          <h1 className="font-semibold text-xl">Top job picks for you</h1>
          <p className="text-sm py-2">Based on your profile and search history</p>

          <hr className="py-2" />

          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <div key={job.id}>
                <div className="flex gap-4">
                  <img
                    className="h-24 rounded-lg w-32"
                    src={job.image}
                    alt={job.title}
                  />
                  <div>
                    <h1 className="text-purple-500 hover:underline cursor-pointer font-semibold text-lg">{job.title}</h1>
                    <p className="text-sm">{job.description}</p>
                    <p>Location : {job.location}</p>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            ))}
          </div>
        </div>
        <div>

        <Filters/>
        </div>
      </div>
    </div>
  );
};

export default Jobspage;

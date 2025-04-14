import { useParams } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShowChart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

// assuming you are using react-icons for avatar icons
import fundraisersData from "../Data/FundraiserData";
import FundraiserInfo from "./FundraiseInfo";
import FundraiserDesc from "./FundraiserDesc";
fundraisersData;
const FundraiserDetails = () => {
  const { id } = useParams();

  // Find the fundraiser by ID
  const fundraiser = fundraisersData.find((item) => item.id === parseInt(id));

  if (!fundraiser) {
    return <p>Fundraiser not found</p>;
  }

  return (
    <>
      {/* Header Section */}
      <div className="bg-purple-600   h-40 flex items-center justify-center flex-col">
        <div className="w-1/3">
          <h1 className="text-white  text-wrap   text-2xl font-bold mb-4">
            {fundraiser.title}
          </h1>
          <div className="">
            <h2 className="text-white  flex items-center justify-start gap-5    text-2xl ">
              <span className="text-xl">Share :</span>
              <FaFacebook /> <FaWhatsapp /> <FaLinkedin />
              <FaRegCopy className="   " />
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col bg-white lg:flex-row items-start p-6   ">
        {/* Fundraiser Info */}

        <FundraiserInfo />

        {/* Donor List */}
        <div className="lg:w-2/3    p-6 rounded-lg shadow-md lg:ml-6">
          <h3 className="text-xl font-bold mb-4">Donors 🧡</h3>
          <div className="uppercase text-sm text-gray-600 mb-4">
            All Donors ({fundraiser.donors.length})
          </div>
          <div className="flex flex-col ">
            {/* Donor Items */}
            {fundraiser.donors.map((donor, index) => (
              <div key={index}>
                <div
                  className="flex items-center my-6 justify-between "
                  key={index}
                >
                  <div className="flex items-center ">
                    <RxAvatar className="text-3xl text-purple-500 mr-4" />
                    <div className="flex flex-col">
                      <h2 className="text-lg font-semibold">{donor.name}</h2>
                      <h3 className="text-sm text-gray-600">
                        {donor.time} ago
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                      <span className="text-purple-600 ">
                        {" "}
                        <CiHeart />{" "}
                      </span>
                      INR
                      {donor.amount}
                    </h2>
                  </div>
                </div>
                <hr className="border-t-1 border-gray-500  " />
              </div>
            ))}
            <button className="bg-purple-400 hover:bg-purple-600 w-1/3 mx-auto px-4 py-2 rounded-md text-white my-3 ">
              View all
            </button>
          </div>
          <div>
            <FundraiserDesc />
          </div>
        </div>
      </div>
    </>
  );
};

export default FundraiserDetails;

import { useState } from "react";
import { Link } from "react-router-dom";
import fundraisersData from "../Data/FundraiserData";
import FundraiserCard from "../components/FundraiserCard";
import FundraisersList from "../components/FundraiserCard";

import Sidebar from "../components/Sidebar";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
const categories = ["All", "Education", "Health", "Animals", "Social"];

const FundraiserSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFundraisers =
    selectedCategory === "All"
      ? fundraisersData
      : fundraisersData.filter(
          (fundraiser) => fundraiser.category === selectedCategory
        );

  return (
    <div className="  flex justify-evenly">
      {/* <div className="w-1/3 mx-2">
        <Sidebar />
      </div> */}

      {/* Category Selection */}
      <section className="w-3/4 mx-5">
        <div className="mb-4 flex items-start justify-start ml-20  ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`bg-gray-100 shadow-lg hover:bg-purple-600 hover:text-white text-black rounded-xl w-28 px-4 py-2 mx-2 ${
                selectedCategory === category ? "bg-purple-500 underline" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All donation List  */}
        <div className="flex flex-col  items-center justify-center w-full flex-wrap gap-4">
          {filteredFundraisers.length ? (
            filteredFundraisers.map((fundraiser) => {
              const progressPercentage = (
                (fundraiser.collectedAmount / fundraiser.amount) *
                100
              ).toFixed(2);

              return <FundraisersList fundraisers={fundraisersData} />;
            })
          ) : (
            <p>No fundraisers available in this category.</p>
          )}
        </div>
      </section>
      {/* Top Donar  List */}
      <section className="w-1/2 bg-white h-full mt-14 mr-3 rounded-lg">
        <div className="p-3">
          <h3 className="font-bold text-xl">Top Donor </h3>
          <ul className="space-y-3">
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,0000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  10,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Arvind kumar </h2>
                  <h3 className="text-sm text-gray-600">3 hours ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  30,000 INR
                </h2>
              </div>
            </div>
            <div className="flex items-center my-4 justify-between ">
              <div className="flex items-center ">
                <RxAvatar className="text-3xl text-purple-500 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold"> Komal Sharma </h2>
                  <h3 className="text-sm text-gray-600">1 month ago</h3>
                </div>
              </div>
              <div>
                <h2 className="flex items-center bg-gray-200 rounded-lg px-2 gap-2 ">
                  <span className="text-purple-600 ">
                    {" "}
                    <CiHeart />{" "}
                  </span>
                  1,30,000 INR
                </h2>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FundraiserSection;

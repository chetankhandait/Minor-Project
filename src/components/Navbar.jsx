/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  FaHome,
  FaHandHoldingHeart,
  FaBriefcase,
  FaCalendarAlt,
  FaComments,
  FaBlog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-12 shadow-lg">
      <header className="fixed w-full bg-white z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/s1.png" className="w-10 rounded-full" />
              <div className="sm:flex sm:gap-4">
                <div className="relative">
                  <label htmlFor="Search" className="sr-only">
                    {" "}
                    Search{" "}
                  </label>

                  <input
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="w-96 bg-zinc-200 p-4 border-2 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="button"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      <span className="sr-only">Search</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <Link to={"/"} className="flex items-center gap-1">
                    <FaHome className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Home
                    </a>
                  </Link>

                  <Link to={"/donation"} className="flex items-center gap-1">
                    <FaHandHoldingHeart className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Donation
                    </a>
                  </Link>

                  <Link to={"/jobs"} className="flex items-center gap-1">
                    <FaBriefcase className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Jobs
                    </a>
                  </Link>

                  <Link to={"/event-management"} className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Events
                    </a>
                  </Link>

                  <Link
                    to={"/discussion-forum"}
                    className="flex items-center gap-1"
                  >
                    <FaComments className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Discussion Forum
                    </a>
                  </Link>

                  <li className="flex items-center gap-1">
                    <FaBlog className="text-gray-600 text-lg mx-1" />
                    <a
                      className="text-gray-600 transition hover:text-gray-600/75"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

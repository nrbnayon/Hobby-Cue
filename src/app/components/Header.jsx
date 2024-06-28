import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlineBookmark,
  HiOutlineBell,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <details>
                <summary className="font-semibold">
                  <MdExplore className="text-[#8064A2]  fill-[#8064A2] text-xl" />{" "}
                  Explore
                </summary>
                <ul className="p-2"></ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-semibold">
                  <FaRegStar className="text-[#8064A2]  fill-[#8064A2] text-xl" />
                  Hobbies
                </summary>
                <ul className="p-2"></ul>
              </details>
            </li>
          </ul>
        </div>
        <a className=" text-xl">
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <label className="relative">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 bg-[#8064A2] rounded-r-lg"
          >
            <CiSearch className="text-white h-5 w-5" />
          </button>
        </label>
        <ul className="menu menu-horizontal px-1 flex">
          <li>
            <details>
              <summary className="font-semibold">
                <MdExplore className="text-[#8064A2]  fill-[#8064A2] text-xl" />{" "}
                Explore
              </summary>
              <ul className="p-2"></ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-semibold">
                <FaRegStar className="text-[#8064A2]  fill-[#8064A2] text-xl" />
                Hobbies
              </summary>
              <ul className="p-2"></ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <div className="flex space-x-1">
          <div className="relative">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineBookmark className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineBell className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineShoppingCart className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
        </div>
        <a className="inline-block ml-2 py-2 px-4 border border-[#8064A2]  text-[#8064A2] font-semibold rounded-lg">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Header;

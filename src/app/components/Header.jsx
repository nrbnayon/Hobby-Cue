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
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className=" text-xl">
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex justify-between gap-7">
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
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <details className="relative">
              <summary className="font-semibold">
                <MdExplore className="text-[#8064A2]  fill-[#8064A2] text-xl" />{" "}
                Explore
              </summary>
              <ul className="w-52 z-20">
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    People - Community
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Places - Venues
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Programs - Events
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Products - Store
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-semibold">
                <FaRegStar className="text-[#8064A2]  fill-[#8064A2] text-xl" />
                Hobbies
              </summary>
              <ul className="w-52 z-20">
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    People - Community
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Places - Venues
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Programs - Events
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Products - Store
                  </a>
                </li>
                <div className="divider my-0"></div>
                <li className="py-1">
                  <a
                    href="#"
                    className=" text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <div className="flex space-x-0 md:space-x-1">
          <div className="relative hidden md:inline-block">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineBookmark className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative  md:hidden">
            <button type="button" className="btn btn-sm btn-ghost">
              <CiSearch className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineBell className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative  md:hidden">
            <button className="btn btn-sm btn-ghost">
              <IoMdMenu className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
          <div className="relative hidden md:inline-block">
            <button className="btn btn-sm btn-ghost">
              <HiOutlineShoppingCart className="h-6 w-6 text-[#8064A2] fill-[#8064A2]" />
            </button>
          </div>
        </div>

        <a className="hidden md:inline-block ml-2 py-2 px-4 border border-[#8064A2]  text-[#7e63a0] font-semibold rounded-lg">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Header;

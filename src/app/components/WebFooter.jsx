import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaSnapchatGhost,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const WebFooter = () => {
  return (
    <div className="overflow-x-hidden">
      <footer className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white text-base-content p-10">
        <nav className="flex flex-col">
          <h6 className="text-base text-[#08090A] font-bold flex justify-between md:justify-start items-center">
            Hobbycue <IoIosArrowUp />{" "}
          </h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Services</a>
          <a className="link link-hover">Work with Us</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-base text-[#08090A] font-bold flex justify-between md:justify-start items-center">
            How Do I <IoIosArrowUp />
          </h6>
          <a className="link link-hover">Sign Up</a>
          <a className="link link-hover">Add a Listing</a>
          <a className="link link-hover">Claim Listing</a>
          <a className="link link-hover">Post a Queries</a>
          <a className="link link-hover">Add a Blog Post</a>
          <a className="link link-hover">Other Queries </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-base text-[#08090A] font-bold flex justify-between md:justify-start items-center">
            Quick Link <IoIosArrowUp />
          </h6>
          <a className="link link-hover">Listings</a>
          <a className="link link-hover">Blog / Store</a>
          <a className="link link-hover">Community</a>
        </nav>
        <form>
          <h6 className="text-base text-[#08090A] font-bold flex justify-between md:justify-start items-center">
            Social Media <IoIosArrowUp />
          </h6>
          <div className="flex flex-wrap gap-2 my-3">
            <a
              href="#"
              className="text-blue-600 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-blue-400 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-pink-600 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-blue-700 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-red-600 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="text-red-700 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="#"
              className="text-yellow-5 btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaSnapchatGhost size={20} />
            </a>
            {/* <a
              href="#"
              className="text-black btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaTiktok size={20} />
            </a> */}
          </div>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Invite Friends</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Email ID"
                className="input input-bordered border-[#8064A2] join-item"
              />
              <button className="btn bg-[#8064A2] text-white join-item">
                Invite
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center bg-[#F7F5F9] text-[#08090A] p-4 font-medium]">
        <aside>
          <p>© Purple Cues Private Limited</p>
        </aside>
      </footer>
    </div>
  );
};

export default WebFooter;

import React from "react";
import { FaQuoteLeft, FaUser } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi2";
import { IoPlay } from "react-icons/io5";
import Image from "next/image";
import MusicImg from "../../../assets/music.png";

const Testimonial = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F7F5F9]">
      <div className="p-6 rounded-lg w-full">
        <div className="flex items-center mb-4 gap-4 text-lg font-semibold">
          <div className="w-8 h-8 rounded-full bg-[#8064A2] flex justify-center items-center">
            <FaQuoteLeft className="text-white" />
          </div>
          <p>Testimonials</p>
        </div>
        <p className="my-4 text-[#6D747A]">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex items-center gap-8 mt-6">
          <div className="flex-1 flex bg-[#CCC1DA] rounded-lg items-center p-4">
            <div className="flex items-center justify-between w-full">
              <div className="w-8 h-8 bg-white rounded-full text-[#8064A2] flex justify-center items-center">
                <IoPlay className="w-5 h-5" />
              </div>
              <div className="flex-1 mx-4">
                <input
                  type="range"
                  className="w-full bg-white mt-1"
                  defaultValue="0"
                  min="0"
                  max="100"
                />
              </div>
              <div className="text-gray-800 text-sm">0:00</div>
              <div className="relative w-12 h-12 ml-2 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src={MusicImg}
                  alt="Music Image"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <HiMicrophone className="absolute bottom-0 left-0 text-xl text-white" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <Image
                src={MusicImg}
                alt="User Avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-semibold text-[#8064A2]">
                Shubha Nagarajan
              </div>
              <div className="text-[#0096C8]">Classical Dancer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

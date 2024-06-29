import StartImg from "../../../assets/start.png";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

const GetStart = () => {
  return (
    <div className="md:min-h-screen py-6 bg-[#F7FDFF] space-y-20 px-2">
      <div className="mb-6 mt-20 space-y-8">
        <h3 className="italic text-2xl md:text-3xl font-semibold">
          Your <span className="text-[#8064A2]">Hobby</span>, Your
          <span className="text-[#0096C8]"> Community...</span>
        </h3>
        <div className="flex justify-between items-center]">
          <button className="mt-4 px-6 py-3 bg-[#8064A2] rounded-md hover:scale-105 text-white font-semibold text-lg transition-transform duration-200">
            Get Started
          </button>
          <div className="flex flex-col items-center space-y-1">
            <a
              href="#"
              className="btn btn-sm btn-circle bg-[#FFFFFF] text-[#939CA3] shadow-lg"
            >
              <IoIosArrowUp />
            </a>
            <p className="bg-white text-xs text-[#8064A2] font-medium shadow-sm">
              Go to top (Ctrl+Home)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image src={StartImg} alt="Get Started" className="w-full " />
      </div>
    </div>
  );
};

export default GetStart;

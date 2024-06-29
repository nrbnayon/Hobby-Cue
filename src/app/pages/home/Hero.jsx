import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiHandbagFill } from "react-icons/pi";
import { BiCalendarCheck } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="w-full space-y-6 md:space-y-0  md:gap-4 md:grid lg:grid-cols-2 lg:gap-6">
            <div className="bg-white hover:bg-[#0096C8] hover:text-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <MdGroups className="text-3xl text-[#8064A2] hover:text-white" />
                  <h2 className="ml-2 text-lg font-semibold">People</h2>
                </div>
                <p className="mb-4 text-center md:text-left">
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </p>
                <div className="w-full flex">
                  <button className="w-full md:w-fit px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white hover:bg-[#C0504D] hover:text-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <FaLocationDot className="text-3xl text-[#77933C] hover:text-white" />
                  <h2 className="ml-2 text-lg font-semibold">Place</h2>
                </div>
                <p className="mb-4 text-center md:text-left">
                  Find a class, school, playground, auditorium, studio, shop or
                  an event venue. Book a slot at venues that allow booking
                  through hobbycue.
                </p>
                <div className="w-full flex">
                  <button className="w-full md:w-fit px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Meet up
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white hover:bg-[#77933C] hover:text-white  border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <PiHandbagFill className="text-2xl text-[#C0504D] hover:text-white" />
                  <h2 className="ml-2 text-lg font-semibold">Product</h2>
                </div>
                <p className="mb-4 text-center md:text-left">
                  Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members.
                </p>
                <div className="w-full flex">
                  <button className="w-full md:w-fit px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Get it
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white hover:bg-[#8064A2] hover:text-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <BiCalendarCheck className="text-2xl text-[#0096C8] " />
                  <h2 className="ml-2 text-lg font-semibold">Program</h2>
                </div>
                <p className="mb-4 text-center md:text-left">
                  Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online. Find events, meetups and
                  workshops related to your hobby. Register or buy tickets
                  online.
                </p>
                <div className="w-full flex">
                  <button className="w-full md:w-fit px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Attend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 bg-[#F7FDFF] px-6 py-10">
        <div className="bg-white border p-4 border-[#CED4DA] rounded-lg shadow-sm">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <LuPlusCircle className="text-2xl text-[#0096C8]" />
              <h2 className="ml-4 text-lg font-semibold">Add your own</h2>
            </div>
            <p className="mb-4">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <div className="flex">
              <button className="px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

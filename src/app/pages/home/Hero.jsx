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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="bg-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <MdGroups className="text-2xl text-[#8064A2]" />
                  <h2 className="ml-2 text-lg font-semibold">People</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </p>
                <div className="flex">
                  <button className="px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <FaLocationDot className="text-2xl text-[#77933C]" />
                  <h2 className="ml-2 text-lg font-semibold">Place</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Find a class, school, playground, auditorium, studio, shop or
                  an event venue. Book a slot at venues that allow booking
                  through hobbycue.
                </p>
                <div className="flex">
                  <button className="px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Meet up
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <PiHandbagFill className="text-2xl text-[#C0504D]" />
                  <h2 className="ml-2 text-lg font-semibold">Product</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members.
                </p>
                <div className="flex">
                  <button className="px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
                    Get it
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white border border-[#CED4DA] rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <BiCalendarCheck className="text-2xl text-[#0096C8]" />
                  <h2 className="ml-2 text-lg font-semibold">Program</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online. Find events, meetups and
                  workshops related to your hobby. Register or buy tickets
                  online.
                </p>
                <div className="flex">
                  <button className="px-4 py-2 border-[#8064A2] border  rounded-lg hover:bg-blue-600 transition duration-200">
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
            <p className="text-gray-700 mb-4">
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

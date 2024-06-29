import LoginImg from "../../../../public/login1.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-gray-100 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left lg:mr-10 mb-6 lg:mb-0">
          <h1 className="text-3xl font-semibold italic">
            Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
            <span className="text-[#8064A2]">passion</span>
          </h1>
          <p className="py-6">
            Sign-in to interact with a community of fellow hobbyists and an
            ecosystem of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="hidden md:visible">
            If you are an expert or a seller, you can add your listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>

          <Image
            src={LoginImg}
            alt="Login Image"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div className="card w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <div className="border-b-2 border-[#8064A2] ">
                <p className=" text-base font-semibold text-[#8064A2] ">
                  Sign In
                </p>
              </div>
              <p className=" text-base font-semibold ">Join</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
              <div>
                <div className="my-4 space-y-4">
                  <button className="btn btn-outline flex items-center w-full border-[#8064A2] relative">
                    <FcGoogle className="text-xl absolute left-4" />
                    <span className="flex-1 text-center">
                      Continue with Google
                    </span>
                  </button>
                  <button className="btn btn-outline flex items-center w-full border-[#8064A2] relative">
                    <FaFacebook className="text-xl text-blue-600 absolute left-4" />
                    <span className="flex-1 text-center">
                      Continue with Facebook
                    </span>
                  </button>
                </div>
              </div>
              <div className="divider my-4 text-center font-semibold">
                Or connect with
              </div>
              <form className="space-y-4">
                <div className="form-control relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <input
                    id="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-10"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="form-control">
                  <button
                    type="submit"
                    className="btn bg-[#8064A2]  md:btn-outline w-full py-3"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

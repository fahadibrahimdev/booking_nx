import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const YellowContainer = () => {
  return (
    <div className="bg-[#FFDB1A] w-full p-2 flex flex-row justify-center">
      <div>
        <p className="text-white font-bold text-[30px] leading-tight">
          Subscribe to our
        </p>
        <p className="text-white font-bold text-[30px] ml-16 leading-tight">
          Newsletter
        </p>
        <p className="text-[13px] ml-16 leading-tight">
          & Discover the best offers!
        </p>
      </div>
      <div className="ml-5 mt-2">
        <input
          type="text"
          placeholder="Enter Your Destination"
          className="text-[13px] w-[300px] p-3 border-2 border-black "
          aria-label="Destination"
        />
      </div>

      <div className="flex">
        <div className="mt-2 ml-5">
          <input
            type="text"
            placeholder="Enter Your Destination"
            className="text-[13px] w-[200px] p-3 border-2 border-black "
            aria-label="Destination"
          />
        </div>
        <button className="group flex p-3 h-[47px] mt-2 border-2 border-black cursor-pointer hover:bg-black">
          <FaLocationArrow className="mt-0.5 text-black group-hover:text-white" />
          <p className="text-[14px] font-bold ml-2 text-black group-hover:text-white">
            Subscribe
          </p>
        </button>
      </div>
    </div>
  );
};

export default YellowContainer;

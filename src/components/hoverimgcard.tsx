"use client";

import React from "react";

interface HoverImgCardProps {
  hoverImg?: string;
  headingtext?: string;
}

const HoverImgCard: React.FC<HoverImgCardProps> = ({ hoverImg, headingtext }) => {
  return (
    <div className="w-[280px] h-[300px] relative group">
      <div className="h-2/3 relative overflow-hidden">
        <img
          src={hoverImg}
          className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
          alt=""
        />
        {/* Text overlay on hover */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-white">
          <p className="font-bold text-lg text-black mb-20 transform translate-y-8 group-hover:translate-y-0 transition duration-300 ease-in-out">
            {headingtext}
          </p>
        </div>
      </div>

      {/* Lower text section */}
      <div className="bg-[#FFFFFF] w-[280px] p-2">
        <p className="font-bold text-[13px]">{headingtext?.toUpperCase()}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex mt-5">
              <p className="text-gray-400 text-[13px]">Starting from</p>
              <p className="font-bold ml-2">&euro;20</p>
            </div>
            <p className="text-gray-400">/pp</p>
          </div>
          <button className="bg-[#F1C933] mt-10 p-2 w-[80px] h-[35px] text-blue-500 text-[13px]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverImgCard;

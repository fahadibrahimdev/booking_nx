"use client";

import React from "react";

interface HoverImgCardProps {
  hoverImg?: string;
  headingtext?: string;
  price?: string;
}

const HoverImgCard: React.FC<HoverImgCardProps> = ({
  hoverImg,
  headingtext,
  price,
}) => {
  return (
    <div className="w-[280px] h-[300px] relative group">
      <div className="h-2/3 relative overflow-hidden">
        <img
          src={hoverImg}
          className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
          alt=""
        />
        {/* Full background overlay on hover with text slide-up effect */}
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <p className="font-bold text-lg text-black mb-16s transform translate-y-8 group-hover:translate-y-0 transition duration-300 ease-in-out">
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
              <p className="font-bold ml-2">{price}</p>
            </div>
            <p className="text-gray-400">/pp</p>
          </div>
          <button className="bg-[#F1C933] mt-10 w-[90px] h-[35px] text-blue-500 text-[13px] flex justify-center items-center">
  <div className="hover:bg-white hover:border-2 hover:border-gray-400 rounded-md p-1 w-[80px] opacity-70 h-[30px] text-center">
    Book Now
  </div>
</button>

        </div>
      </div>
    </div>
  );
};

export default HoverImgCard;

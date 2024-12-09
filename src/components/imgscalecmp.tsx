import React from "react";

import Image from "next/image";
import { LuPlane } from "react-icons/lu";

interface ImgScaleCompProps {
    
}

const ImgScaleComp: React.FC<ImgScaleCompProps> = () => {
  return (
    <div className="relative group w-[300px] h-[300px] overflow-hidden">       
        <Image
        src={"/washingtonDC.jpg"}
        height={120}
        width={300}
        alt={""} className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-0"></Image>
      <div className="absolute inset-0 bg-black opacity-60 w-[300px] h-[300px] group-hover:opacity-0 transition-opacity duration-1000 ease-in-out"> 
        <div className="flex justify-center pt-5 ml-20">
        <LuPlane className="text-[30px] text-white" />
        <p className="text-white font-bold text-[20px]">Dar-ES-Salaam...</p>
        </div>
        <div className="flex ml-40 space-x-1 justify-center">
        <p className="text-[#F1C933] font-bold pt-1 text-[15px]">from</p>
        <p className="text-white font-bold text-[20px]">£327</p>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col  mt-10 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <p className="text-black font-bold text-[5px] group-hover:text-[20px] transition-all duration-1000 ease-in-out transform group-hover:scale-125">Dar-ES-Salaam</p>
      <button className="mt-4 px-3 py-2 bg-[#F1C933] text-blue-800 font-bold rounded-md hover:bg-[#d1b427] transition-colors duration-200">
          More Details
        </button>
      </div>
    </div>
  );
};

export default ImgScaleComp;

import React from "react";

import Image from "next/image";
import BlueYellowHeader from "@/components/header";
import BlueDocumentForm from "@/components/bluedocumentform";
import SelectRegionComp from "@/components/selectregioncomp";
import { IoPersonOutline } from "react-icons/io5";
import ImgScaleComp from "@/components/imgscalecmp";

export default function Flights(){
    return(
        <div className="relative">
    <Image
     src={"/home_bg.png"}
     height={750}
     width={1960}
     className="md:h-[750px] h-[1020px] w-full object-cover"
     alt={""}
   />
   <div className="absolute inset-x-0 top-0 z-50">
     <BlueYellowHeader />
   </div>

   <div className="absolute inset-x-0 top-[80px] z-40">
        <BlueDocumentForm />
   </div> 

    <div className="bg-white">
      <SelectRegionComp />

      <div className="flex">
        <div>
        <IoPersonOutline className="text-[90px]" />
      <div className="flex space-x-2">
        <p className="font-bold">Need</p>
        <p className="font-bold text-[#FFD701]">Help?</p>
      </div>
      <p className="font-bold">Free Phone</p>
      <p className="font-bold">0307 4081 964</p>
      </div>
      <div className="ml-52 mt-5 ">
        <ImgScaleComp />
      </div>
        </div>
      
      
    </div>

   </div>
    )
}
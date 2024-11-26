import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Image from "next/image";

const BlueYellowHeader = ({}) => {

    return (
        <div className="bg-[#F1C933] w-full h-[140px] "> {/* Removed items-center */}
            <div className="bg-[#0B42AF] justify-center w-full flex"> {/* Added 1px top margin */}
                <div className="flex space-x-80">
                   
                <Image src="/BHLOGO.avif"
                width={1920}
                height={750}
                 className="h-[90px] w-full object-cover" alt="Logo" />

                    <a href="/home">
                    <div className="bg-[#3BC2FF] w-[100px] h-[40px] mt-5 p-2 flex rounded-md">
                        <IoMdPerson className="text-blue-900 bg-[#F1C933] rounded-full text-[20px]" />
                        <button className="ml-1 font-bold text-[13px]">My Trips</button>
                    </div> 
                    </a>
                    
                    <div className="flex mt-5">
                        <FaPhoneAlt className="bg-[#3BC2FF] p-4 rounded-full text-[#F1C933] h-[52px] w-[52px]" />
                        <div className="flex flex-col ml-2">
                            <p className="w-[140px] font-bold">Call for Bookings</p>
                            <p className="w-[120px] font-bold ml-5">0208 004 3311</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center space-x-5   ">
              <p className="text-white bg-[#0B42AF] p-2 mt-1">HOME</p>
              <p className="text-blue-700 hover:bg-[#EEEEEE] p-2 mt-1">FLIGHTS</p>
              <p className="text-blue-700 hover:bg-[#EEEEEE] p-2 mt-1">HOTELS</p>
              <p className="text-blue-700 hover:bg-[#EEEEEE] p-2 mt-1">REQUEST A CALLBACK</p>
              <p className="text-blue-700 hover:bg-[#EEEEEE] p-2 mt-1">UMRAH</p>
              <p className="text-blue-700 hover:bg-[#EEEEEE] p-2 mt-1">HAJJ</p>
            </div>
        </div>
    );
}

export default BlueYellowHeader;

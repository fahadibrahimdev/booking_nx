"use client"
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const BlueYellowHeader = ({}) => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#F1C933] w-full md:h-[130px] h-[95px]">
      {" "}
      {/* Removed items-center */}
      <div className="bg-[#0B42AF] p-1.5   justify-center w-full flex flex-row">
        {" "}
        {/* Added 1px top margin */}
        <div className="flex md:space-x-80 md:mt-0 mt-2 space-x-2">
          <Image
            src="/BHLOGO.avif"
            width={1920}
            height={750}
            className="md:h-[90px] h-[60px] p-3 md:w-full w-[170px] object-cover"
            alt="Logo"
          />

          <a href="/">
          <div className="bg-[#3BC2FF] hidden md:flex w-[100px] h-[40px] mt-5 p-2  rounded-md">
              <IoMdPerson className="text-blue-900 bg-[#F1C933] rounded-full text-[20px]" />
              <button className="ml-1 font-bold text-[13px]">My Trips</button>
            </div>
          </a>

          <div className="flex md:mt-5">
            <FaPhoneAlt className="bg-[#3BC2FF] md:p-4 rounded-full text-[#F1C933] hidden md:block md:h-[52px] md:w-[52px]"/>
            <div className="flex flex-col md:ml-2">
              <p className="md:w-[140px]  font-bold text-white">Call for Bookings</p>
              <p className="md:w-[120px] font-bold md:ml-5 text-white">0208 004 3311</p>
            </div>

            <button
            onClick={toggleNavbar}
            className="md:hidden bg-[#F1C933] rounded-md p-3 h-10 ml-3 mt-2" 
          >
            <GiHamburgerMenu className="text-white text-[20px]" />
          </button>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        } md:max-h-none md:flex md:flex-row md:space-x-5 flex-col md:justify-center bg-[#F1C933]`}
      >
        <p className="text-white p-3 mt-1 md:mt-0 bg-[#0B42AF] text-center md:text-left">
          HOME
        </p>
        <p className="text-blue-700 hover:bg-[#EEEEEE] p-3 mt-1 md:mt-0 text-center md:text-left">
          FLIGHTS
        </p>
        <p className="text-blue-700 hover:bg-[#EEEEEE] p-3 mt-1 md:mt-0 text-center md:text-left">
          HOTELS
        </p>
        <p className="text-blue-700 hover:bg-[#EEEEEE] p-3 mt-1 md:mt-0 text-center md:text-left">
          REQUEST A CALLBACK
        </p>
        <p className="text-blue-700 hover:bg-[#EEEEEE] p-3 mt-1 md:mt-0 text-center md:text-left">
          UMRAH
        </p>
        <p className="text-blue-700 hover:bg-[#EEEEEE] p-3 mt-1 md:mt-0 text-center md:text-left">
          HAJJ
        </p>
      </div>
    </div>
  );
};

export default BlueYellowHeader;
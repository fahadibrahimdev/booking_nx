"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const BlueDocumentForm = ({}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-[#0C48BE] w-2/3 h-[455px]">
        <p className="text-[#F1C933] text-center font-bold text-[30px] p-3 slide-in">
          Book Your Flights, Hotels & Holidays
        </p>
        <div className="flex space-x-5 justify-center">
          <label className="flex items-center cursor-pointer space-x-2 relative">
            <input
              type="checkbox"
              checked={!isChecked}
              onChange={handleSwitch}
              className="appearance-none h-5 w-5 bg-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent relative"
            />
            <span className="text-black">Round Trips</span>
            {!isChecked && <FaCheck className="text-white absolute right-24" />}
          </label>

          <label className="flex items-center cursor-pointer space-x-2 relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleSwitch}
              className="appearance-none h-5 w-5 bg-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent relative"
            />
            <span className="text-black">One Way</span>
            {isChecked && (
              <FaCheck className="text-white absolute  right-[75px]" />
            )}
          </label>
        </div>
        

        <div className="">
        <div className="mb-4 flex">
          <label
            htmlFor="departure-city"
            className="block mt-4 font-bold text-black mb-1"
          >
            From
          </label>
          <input
            type="text"
            id="departure-city"
            name="departure-city"
            placeholder="Departure city name"
            className="mt-1 block w-[450px] p-3 rounded-sm  ml-3 shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4 flex">
          <label
            htmlFor="departure-city"
            className="block mt-4 font-bold text-black mb-1"
          >
            to
          </label>
          <input
            type="text"
            id="departure-city"
            name="departure-city"
            placeholder="Departure city name"
            className="mt-1 block w-[450px] p-3 rounded-sm  ml-3 shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
          />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default BlueDocumentForm;

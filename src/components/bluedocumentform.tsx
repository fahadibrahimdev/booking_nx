"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { DatePickerDemo } from "./datetimepicker";


const BlueDocumentForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(false);

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
              <FaCheck className="text-white absolute right-[75px]" />
            )}
          </label>
        </div>

        <div className="flex flex-row mt-5 space-x-5 justify-center">
          <div className="mb-4 flex">
            <label
              htmlFor="departure-city-from"
              className={`block mt-4 font-bold mb-1 ${isFromFocused ? 'text-red-500' : 'text-black'}`}
            >
              From
            </label>
            <input
              type="text"
              id="departure-city-from"
              name="departure-city-from"
              placeholder="Departure city name"
              onFocus={() => setIsFromFocused(true)}
              onBlur={() => setIsFromFocused(false)}
              className="mt-1 block w-[450px] p-3 rounded-sm ml-3 shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4 flex">
            <label
              htmlFor="departure-city-to"
              className={`block mt-4 font-bold mb-1 ${isToFocused ? 'text-red-500' : 'text-black'}`}
            >
              To
            </label>
            <input
              type="text"
              id="departure-city-to"
              name="departure-city-to"
              placeholder="Return city name"
              onFocus={() => setIsToFocused(true)}
              onBlur={() => setIsToFocused(false)}
              className="mt-1 block w-[450px] p-3 rounded-sm ml-3 shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>


         <div className="flex flex-row space-x-5 justify-center ml-12">
         <div className="bg-white w-[465px] p-5 flex justify-end">
          <DatePickerDemo/>
        </div>
        <div className="bg-white w-[465px] p-5">
        </div>
         </div>
        
      </div>
    </div>
  );
};

export default BlueDocumentForm;

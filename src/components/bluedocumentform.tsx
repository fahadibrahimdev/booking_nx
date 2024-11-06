"use client";

import React, { useState } from "react";
import { FaCheck, FaPlus, FaSearch } from "react-icons/fa";
import { DatePickerDemo } from "./datetimepicker";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


const BlueDocumentForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedClass, setSelectedClass] = useState("Select");

  // Dropdown state and toggle logic
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelectedClass(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const incrementAdults = () => {
    if (adultCount < 9) {
      setAdultCount(adultCount + 1);
    }
  };

  const decrementAdults = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  const incrementChildren = () => {
    if (childCount < 9) {
      setChildCount(childCount + 1);
    }
  };

  const decrementChildren = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const incrementInfants = () => {
    if (infantCount < 9) {
      setInfantCount(infantCount + 1);
    }
  };

  const decrementInfants = () => {
    if (infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-[#0C48BE] w-2/3 h-[480px] flex flex-col items-center">
        <p className="text-[#F1C933] text-center font-bold text-[30px] p-3 slide-in">
          Book Your Flights, Hotels & Holidays
        </p>

        <div className="flex space-x-5 mt-4">
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

        <div className="grid grid-cols-2 gap-4 justify-center mx-5 mt-4">
          <div className="mb-4 flex">
            <label
              htmlFor="departure-city-from"
              className={`block mt-4 font-bold mb-1 ${
                isFromFocused ? "text-red-500" : "text-black"
              }`}
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
              className={`block mt-4 font-bold mb-1 ${
                isToFocused ? "text-red-500" : "text-black"
              }`}
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

          <div className="col-span-2 flex justify-center space-x-5 ml-5">
            <DatePickerDemo />
            <DatePickerDemo />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-5 mt-4 ml-10">
          <div className="flex flex-col items-center">
            <p className="text-white text-[10px] font-bold">Adults (12+ Yrs)</p>
            <div className="flex items-center pt-1">
              <button onClick={decrementAdults}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="text"
                value={adultCount}
                readOnly
                className="w-[250px] text-center h-[30px] border-2 border-white"
              />
              <button onClick={incrementAdults}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-[10px] font-bold">
              Children (2-11 Yrs)
            </p>
            <div className="flex items-center pt-1">
              <button onClick={decrementChildren}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="text"
                value={childCount}
                readOnly
                className="w-[250px] text-center h-[30px] border-2 border-white"
              />
              <button onClick={incrementChildren}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-[10px] font-bold">
              Infants (Below 2 Yrs)
            </p>
            <div className="flex items-center pt-1">
              <button onClick={decrementInfants}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="text"
                value={infantCount}
                readOnly
                className="w-[250px] text-center h-[30px] border-2 border-white"
              />
              <button onClick={incrementInfants}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="mt-5 bg-white w-[370px] rounded-md p-2 relative">
            <div className="flex justify-between" onClick={toggleDropdown}>
              <div className="flex">
                <p className="font-bold">Class</p>
                <p className="ml-2">{selectedClass}</p>{" "}
                {/* Display the selected class here */}
              </div>
              <IoIosArrowDown />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg">
                <ul className="p-2">
                  <li
                    className="py-2 px-4 hover:bg-gray-200"
                    onClick={() => handleSelect("Select Class")}
                  >
                    Select Class
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200"
                    onClick={() => handleSelect("Economy")}
                  >
                    Economy
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200"
                    onClick={() => handleSelect("Premium")}
                  >
                    Premium
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200"
                    onClick={() => handleSelect("Business")}
                  >
                    Business
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200"
                    onClick={() => handleSelect("First")}
                  >
                    First
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="bg-white w-[370px] rounded-md h-[50px] mt-5">
            <p className="mt-3 ml-2">Airline</p>
          </div>
          <div className="flex items-center mt-5">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-6 h-6 rounded-md text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Direct Flights
            </label>
          </div>
        </div>
        <button className="flex bg-[#F1C933] mt-5 rounded-md p-3 w-[200px] justify-center items-center">
          <FaSearch className="text-[#0B43B1] font-bold" />
          <p className="text-[#0B43B1] font-bold ml-3">Find Deals</p>
        </button>
      </div>
    </div>
  );
};

export default BlueDocumentForm;

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
  const [open, setisOpen] = useState(false);

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
    console.log("state change" ,isChecked)
  };

  const incrementAdults = () => {
    setAdultCount(childCount + 1);
  };

  const decrementAdults = () => {
    if (infantCount > 0) {
      setAdultCount(infantCount - 1);
    }
  };
  const decrementChildren = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const incrementChildren = () => {
    setChildCount(childCount + 1);
  };

  const decrementInfants = () => {
    if (infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  const incrementInfants = () => {
    setInfantCount(infantCount + 1);
  };

  const updateChildCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Ensure the value is a valid non-negative integer
    if (!isNaN(value) && value >= 0) {
      setChildCount(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input or numbers only
    if (value === "" || /^\d+$/.test(value)) {
      setAdultCount(value === "" ? 0 : parseInt(value, 10));
    }
  };

  // handleInputChange  setAdultCount

  const updateInfantCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input or numbers only
    if (value === "" || /^\d+$/.test(value)) {
      setInfantCount(value === "" ? 0 : parseInt(value, 10));
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-[#0C48BE] w-2/3 h-[480px] flex flex-col items-center">
        <p className="text-[#F1C933] text-center font-bold text-[30px] p-3 slide-in">
          Book Your Flights, Hotels & Holidays
        </p>

        <div className="flex space-x-5 mt-4">
          
          <label className={`flex items-center cursor-pointer  space-x-2 relative`}>
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
              <FaCheck className="text-white absolute right-[75px]"/>
            )}
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-center mx-5 mt-4">
          <div className="mb-4 relative">
            <p
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 font-bold transition-colors ${
                isFromFocused ? "text-red-500" : "text-black"
              }`}
            >
              From
            </p>
            <input
              type="text"
              id="departure-city-from"
              name="departure-city-from"
              placeholder="Departure city name"
              onFocus={() => setIsFromFocused(true)}
              onBlur={() => setIsFromFocused(false)}
              className="block w-[450px] p-3 pl-20 mt-0.5 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4 relative">
            <p
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 font-bold transition-colors ${
                isToFocused ? "text-red-500" : "text-black"
              }`}
            >
              To
            </p>
            <input
              type="text"
              id="departure-city-to"
              name="departure-city-to"
              placeholder="Return city name"
              onFocus={() => setIsToFocused(true)}
              onBlur={() => setIsToFocused(false)}
              className="block w-[450px] p-3 pl-16 mt-0.5 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-2 flex justify-center space-x-5 ">
            {!isChecked?(<DatePickerDemo />):("")}
            
            <DatePickerDemo />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2 mt-4">
          <div className="flex flex-col justify-center">
            <p className="text-white text-[10px] font-bold">Adults (12+ Yrs)</p>
            <div className="flex items-center pt-1">
              <button onClick={decrementAdults}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="number"
                value={adultCount}
                onChange={handleInputChange}
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"
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
                type="number"
                value={childCount}
                onChange={updateChildCount} // Using the renamed function
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"/>
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
                onChange={updateInfantCount}
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"/>
              <button onClick={incrementInfants}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="mt-5 bg-white w-[450px] h-[45px] p-2 rounded-md relative">
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
          <div className="bg-white w-[450px] rounded-md h-[45px] mt-5">
            <p className="mt-3 ml-2">Airline</p>
          </div>
          
        </div>

        <div className="flex space-x-10">
  <button className="flex bg-[#F1C933] mt-5 rounded-md p-3 w-[200px] justify-center items-center mx-auto">
    <FaSearch className="text-[#0B43B1] font-bold" />
    <p className="text-[#0B43B1] font-bold ml-3">Find Deals</p>
  </button>

  <div className="flex justify-end mt-8 ">
    <input
      id="link-checkbox"
      type="checkbox"
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

       
      </div>
    </div>
  );
};
export default BlueDocumentForm;

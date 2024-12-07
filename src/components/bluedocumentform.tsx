"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaPlus, FaSearch } from "react-icons/fa";
import { DatePickerDemo } from "./datetimepicker";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const BlueDocumentForm = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [isAirlineFocused, setIsAirlineFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelectedClass(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleRoundTrip = () => {
    setIsRoundTrip(true);
    setIsChecked(false); // Uncheck "One Way" when "Round Trip" is selected
  };

  const toggleOneWay = () => {
    setIsRoundTrip(false);
    setIsChecked(true); // Uncheck "Round Trip" when "One Way" is selected
  };

  const incrementAdults = () => {
    setAdultCount(adultCount + 1); // Simply increment, no upper limit in this case.
  };
  
  const decrementAdults = () => {
    if (adultCount > 12) {
      setAdultCount(adultCount - 1); // Decrease only if it's greater than 12.
    }
  };
  

  const incrementChildren = () => {
    if (childCount < 11) {
      setChildCount(childCount + 1);
    }
  };

  const decrementChildren = () => {
    if (childCount > 2) {
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

  const updateChildCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if ((value === "" || /^\d+$/.test(value)) && (value === "" || parseInt(value, 11) <= 9)) {
      setChildCount(value === "" ? 0 : parseInt(value, 10));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if ((value === "" || /^\d+$/.test(value)) && (value === "" || parseInt(value, 10) >= 12)) {
      setAdultCount(value === "" ? 12 : parseInt(value, 10)); // Ensures adultCount is always 12 or higher.
    }
  };
  

  const updateInfantCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if ((value === "" || /^\d+$/.test(value)) && (value === "" || parseInt(value, 10) <= 9)) {
      setInfantCount(value === "" ? 0 : parseInt(value, 10));
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-[#0C48BE] md:w-2/3 md:h-[480px] flex flex-col items-center">
        <p className="text-[#F1C933] text-center font-bold md:text-[30px] text-[15px] p-3 slide-in">
          Book Your Flights, Hotels & Holidays
        </p>

        <div className="flex space-x-5 mt-4">
        <label className={`flex items-center cursor-pointer space-x-2 relative`}>
            <input
              type="checkbox"
              checked={isRoundTrip}
              onChange={toggleRoundTrip}
              className="appearance-none h-5 w-5 bg-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent relative"
            />
            <span className="text-black">Round Trips</span>
            {isRoundTrip && <FaCheck className="text-white absolute right-24" />}
          </label>

          <label className="flex items-center cursor-pointer space-x-2 relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleOneWay}
              className="appearance-none h-5 w-5 bg-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent relative"
            />
            <span className="text-black">One Way</span>
            {isChecked && <FaCheck className="text-white absolute right-[75px]" />}
          </label>
        </div>

        <div className="grid md:grid-cols-2  gap-4 justify-center mx-5 mt-4">
          <div className="flex md:flex-row flex-col gap-4 md:ml-12">
          <div className="md:mb-4 relative">
            <p
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 font-bold transition-colors ${isFromFocused ? "text-red-500" : "text-black"}`}
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
              className="block md:w-[450px] p-3 pl-20 mt-0.5 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="md:mb-4 relative">
            <p
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 font-bold transition-colors ${isToFocused ? "text-red-500" : "text-black"}`}
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
              className="block md:w-[450px] p-3 pl-20 mt-0.5 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>
          </div>
         

          <div className=" md:col-span-2 flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 md:ml-12">
            {!isChecked ? <DatePickerDemo /> : ""}
            <DatePickerDemo />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:space-x-2 mt-4">
          <div className="flex flex-col justify-center">
            <p className="text-white text-[10px] md:text-0 text-center font-bold">Adults (12+ Yrs)</p>
            <div className="flex items-center pt-1">
              <button onClick={decrementAdults}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="number"
                value={adultCount}
                onChange={handleInputChange}
                max="9"
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"
              />
              <button onClick={incrementAdults}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-[10px] font-bold">Children (2-11 Yrs)</p>
            <div className="flex items-center pt-1">
              <button onClick={decrementChildren}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="number"
                value={childCount}
                onChange={updateChildCount}
                max="9"
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"
              />
              <button onClick={incrementChildren}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-[10px] font-bold">Infants (Below 2 Yrs)</p>
            <div className="flex items-center pt-1">
              <button onClick={decrementInfants}>
                <FiMinus className="bg-pink-500 h-[30px] w-[25px] p-2 rounded-l-md" />
              </button>
              <input
                type="number"
                value={infantCount}
                onChange={updateInfantCount}
                max="9"
                className="[&::-webkit-inner-spin-button]:appearance-none text-center [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] border border-gray-300 rounded p-2 h-[30px] w-[250px]"
              />
              <button onClick={incrementInfants}>
                <FaPlus className="bg-green-500 h-[30px] w-[25px] p-2 rounded-r-md" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:space-x-5">
          <div className="mt-5 bg-white md:w-[450px]  md:h-[45px] p-2 rounded-md relative" ref={dropdownRef}>
            <div className="flex justify-between" onClick={toggleDropdown}>
              <div className="flex">
                <p className="font-bold mt-1">Class</p>
                <p className="ml-2 mt-1">{selectedClass}</p>
              </div>
              <IoIosArrowDown className="mt-2" />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute left-0 z-50 mt-2 w-full bg-white shadow-lg">
                <ul className="p-2">
                  <li className="py-2 px-4 hover:bg-gray-200" onClick={() => handleSelect("Economy")}>
                    Economy
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200" onClick={() => handleSelect("Premium")}>
                    Premium
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200" onClick={() => handleSelect("Business")}>
                    Business
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200" onClick={() => handleSelect("First")}>
                    First
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="mb-4 relative pt-5">
            <p className={`absolute left-4 top-1/2 mt-3 transform -translate-y-1/2 font-bold transition-colors ${isAirlineFocused ? "text-red-500" : "text-black"}`}>
              Airline
            </p>
            <input
              type="text"
              id="airline-name"
              name="airline-name"
              placeholder="Airline name"
              onFocus={() => setIsAirlineFocused(true)}
              onBlur={() => setIsAirlineFocused(false)}
              className="block md:w-[450px] p-3 pl-20 mt-0.5 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:text-black focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col  md:space-x-10">
          <button className="flex bg-[#F1C933] md:mt-5 rounded-md p-3 w-[200px] justify-center items-center mx-auto">
            <FaSearch className="text-[#0B43B1] font-bold" />
            <p className="text-[#0B43B1] font-bold ml-3">Find Deals</p>
          </button>

          <div className="flex md:justify-end  md:mt-8 mt-2 md:ml-0 ml-10">
            <input
              id="link-checkbox"
              type="checkbox"
              className="w-6 h-6 rounded-md text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-white dark:text-gray-300">
              Direct Flights
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueDocumentForm;

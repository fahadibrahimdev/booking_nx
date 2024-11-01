
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface BlueDocumentformProps {}

const BlueDocumentform: React.FC<BlueDocumentformProps> = ({}) => {
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
            {!isChecked && (
              <FaCheck className="text-white absolute right-24" />
            )}
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
              <FaCheck className="text-white absolute inset-0 right-10 top-1 flex items-center justify-center" />
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlueDocumentform;

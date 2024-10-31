"use client";
import React from "react";

interface BlueYellowHeaderProps {
  // Define any props you might need here
}

const BlueYellowHeader: React.FC<BlueYellowHeaderProps> = () => {
  return (
    <div className="bg-[#F1C933] w-full h-[200px] flex items-center justify-center">
      <h1 className="text-black">Hello</h1>
    </div>
  );
};

export default BlueYellowHeader;

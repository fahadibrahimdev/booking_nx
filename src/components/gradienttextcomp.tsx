import React from "react";
import { MdEuroSymbol } from "react-icons/md";

// Define the icon prop type as a React component type.
interface GradientTextCompProps {
  headingtext1?: string;
  subheadingtext2?: string;
  icon?: React.ComponentType; // Accept any React component, which is a React icon in this case.
}

const GradientTextComp: React.FC<GradientTextCompProps> = ({
  headingtext1,
  subheadingtext2,
  icon: Icon = MdEuroSymbol
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Add the gradient as a background and use transition utilities for hover */}
      <div className="group flex flex-col items-center p-5 bg-gradient-to-r transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C1D226] hover:to-[#1380A0]">
        <Icon className="flex justify-center text-4xl text-gray-600 transition-colors duration-300 group-hover:text-white" /> {/* Render the passed icon */}
        <p className="text-center font-semibold mt-2 text-gray-600 transition-colors duration-300">
          {headingtext1}
        </p>
        <p className="text-center w-[250px] mt-1 text-gray-600 transition-colors duration-300 group-hover:text-white">
          {subheadingtext2}
        </p>
      </div>
    </div>
  );
};

export default GradientTextComp;

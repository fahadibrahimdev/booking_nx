import React from "react";
import { MdEuroSymbol } from "react-icons/md";

// Define the icon prop type as a React component type.
interface GradientTextCompProps {
  headingtext1?: string;
  subheadingtext2?: string;
  icon?: React.ComponentType;  // Accept any React component, which is a React icon in this case.
}

const GradientTextComp: React.FC<GradientTextCompProps> = ({ headingtext1, subheadingtext2, icon: Icon = MdEuroSymbol }) => {  // Default icon is MdEuroSymbol
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:from-pink-500 hover:via-yellow-500 hover:to-purple-600 transition-all duration-300">
        <Icon className="justify-center flex text-4xl text-gray-600" />  {/* Render the passed icon */}
        <p className="text-center font-semibold mt-2">{headingtext1}</p>
        <p className="text-center w-[250px] mt-1">
          {subheadingtext2}
        </p>
      </div>
    </div>
  );
};

export default GradientTextComp;

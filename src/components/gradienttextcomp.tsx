import React from "react";
import { MdEuroSymbol } from "react-icons/md";

const GradientTextComp = () => {
  return (
    <div className="bg-yellow-600 flex flex-col items-center">
      <div className="bg-red-800 flex flex-col items-center p-4">
        <MdEuroSymbol className="justify-center flex text-4xl" />
        <p className="text-center font-semibold mt-2">Sure Cheap Prices</p>
        <p className="text-center w-[250px] mt-1">
          Search our lowest rates to international destinations. Explore the
          globe for journeying right here with us.
        </p>
      </div>
    </div>
  );
};

export default GradientTextComp;

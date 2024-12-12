import React from "react";

interface HoverNumberbtnCompProps {
  textbtn?: string;
  numberbtn?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const HoverNumberbtnComp: React.FC<HoverNumberbtnCompProps> = ({
  textbtn,
  numberbtn,
  isActive,
  onClick,
}) => {
  return (
    <div className="space-x-5 ml-2">
      <button
        className={`group ${
          isActive ? "" : "group-hover:border-2 duration-100 group-hover:border-yellow-400"
        }`}
        onClick={onClick}
      >
        <div
          className={`flex space-x-2 mt-5 rounded-full pt-1 pb-1 px-4 ${
            isActive
              ? "border-2 border-yellow-400"
              : "group-hover:border-2 duration-100 group-hover:border-yellow-400"
          }`}
        >
          <h1
            className={`text-[14px] ${
              isActive ? "text-[#FFD701]" : "group-hover:text-[#FFD701]"
            }`}
          >
            {textbtn}
          </h1>
          <h1 className="text-[10px] mt-1 font-bold bg-[#FFD701] rounded-full w-[22px] h-[15px] text-white">
            {numberbtn}
          </h1>
        </div>
      </button>
    </div>
  );
};

export default HoverNumberbtnComp;

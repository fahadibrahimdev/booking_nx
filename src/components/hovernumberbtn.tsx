import React from "react";

interface HoverNumberbtnCompProps {
    textbtn?: string;
    numberbtn?: string;
}

const HoverNumberbtnComp:React.FC<HoverNumberbtnCompProps>=({textbtn, numberbtn})=>{
    return(
        <div className="space-x-5">
        <button className="group">
            <div className="flex space-x-2 mt-5 group-hover:border-2 rounded-full group-hover:border-yellow-400 pt-1 pb-1 px-4  ">
            <h1 className="text-[14px] group-hover:text-[#FFD701]">{textbtn}</h1>
            <h1 className="text-[10px] mt-1 font-bold bg-[#FFD701] rounded-full w-[22px] h-[15px] text-white ">{numberbtn}</h1>
            </div>
        </button>
      </div>
    )
}

export default HoverNumberbtnComp;
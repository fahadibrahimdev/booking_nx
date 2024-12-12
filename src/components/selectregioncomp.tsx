 "use client";

import React, { useState } from "react";
import HoverNumberbtnComp from "./hovernumberbtn";

const SelectRegionComp = () => {

  const [activeButton, setActiveButton] = useState<string>("1");

    const HoverNumerbtn = [
        {
            id: "1",
            textbtn: "All",
            numberbtn: "56"
        },
        {
            id: "2",
            textbtn: "Asia",
            numberbtn: "5"
        },
        {
            id: "3",
            textbtn: "Africa",
            numberbtn: "33"
        },
        {
            id: "4",
            textbtn: "Eroupe",
            numberbtn: "3"
        },
        {
            id: "5",
            textbtn: "Australia",
            numberbtn: "3"
        },
        {
            id: "6",
            textbtn: "Oceania",
            numberbtn: "1"
        },
        {
            id: "7",
            textbtn: "North America",
            numberbtn: "10"
        },
        {
            id: "8",
            textbtn: "Middle East",
            numberbtn: "2"
        },

    ]

  return (
    <div className="flex space-x-40">
      <p className="bg-[#FFD701] w-80 pl-16 font-bold p-5 text-center text-white">
        Select Your Region
      </p>
      <div className="flex">
      {HoverNumerbtn.map((items)=>(
        <HoverNumberbtnComp
        key={items.id}
        textbtn={items.textbtn}
        numberbtn={items.numberbtn} 
        isActive={activeButton === items.id}
        onClick={()=>setActiveButton(items.id)}
        />
      ))}
      </div>
    </div>
  );
};
export default SelectRegionComp;

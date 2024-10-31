import React from "react";
import { IoMdPerson } from "react-icons/io";

interface BlueYellowHeaderProps{

}

const BlueYellowHeader:React.FC<BlueYellowHeaderProps>=({})=>{
    return(
        <div className="bg-[#F1C933] w-full h-[150px] flex items-center">
        <div className="bg-blue-700 w-full h-full flex items-center">
          <div className="flex space-x-10">
            <img src="BHLOGO.avif" className="h-[90px] w-[130px] object-cover" alt="Logo" />
            <div className="bg-[#3BC2FF] w-full h-[40px] p-2 flex rounded-md">
            <IoMdPerson className="text-black bg-[#F1C933] rounded-full text-[20px] "/>
            <button className="ml-1 font-bold text-[13px]">My Trips</button>
            </div>
            
          </div>
        </div>
      </div>
      
    
    )
}

export default BlueYellowHeader
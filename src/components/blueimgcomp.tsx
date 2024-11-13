import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const BlueImgComp = () => {
    return (
        <div className="relative">
            <Image 
                src="/footer-clouds.png" 
                height={1960} 
                width={1960} 
                className="h-[170px] object-cover" 
                alt="Footer Clouds" 
            />
            <div className="absolute inset-0">

                <div className="flex flex-row space-x-20 justify-center pt-8">
                <div className="flex flex-row">
                <p className=" text-white font-bold text-[30px]">95+</p>
                <div className="mt-1 ml-2">
                    <p className="text-white text-[13px]">Countries</p>
                    <p className="text-white text-[13px] leading-tight">connected</p>
                </div>
                </div>

                <div className="flex flex-row">
                <p className=" text-white font-bold text-[30px]">89+</p>
                <div className="mt-1 ml-2">
                    <p className="text-white text-[13px]">Tour</p>
                    <p className="text-white text-[13px] leading-tight">Places</p>
                </div>
                </div>

                <div className="flex flex-row">
                <p className=" text-white font-bold text-[30px]">250+</p>
                <div className="mt-1 ml-2">
                    <p className="text-white text-[13px]">Hotel</p>
                    <p className="text-white text-[13px] leading-tight">Acomodation</p>
                </div>
                </div>

                <div className="flex flex-row">
                <p className=" text-white font-bold text-[30px]">2400+</p>
                <div className="mt-1 ml-2">
                    <p className="text-white text-[13px]">Daily</p>
                    <p className="text-white text-[13px] leading-tight">flights</p>
                </div>
                </div>

                <div className="flex flex-row">
                <p className=" text-white font-bold text-[30px]">Unlimited</p>
                <div className="mt-1 ml-2">
                    <p className="text-white text-[13px]">Passenger</p>
                    <p className="text-white text-[13px] leading-tight">Travel</p>
                </div>
                </div>
                </div>
                
            
            </div>
            
        </div>
    );
};

export default BlueImgComp;

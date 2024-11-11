import Image from "next/image";
import BlueDocumentForm from "@/components/bluedocumentform";
import Footer from "@/components/footer";
import BlueYellowHeader from "@/components/header";
import React from "react";
import GradientTextComp from "@/components/gradienttextcomp";
import { MdEuroSymbol } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoLockClosedSharp, IoPersonCircleOutline } from "react-icons/io5";
import HoverImgCard from "@/components/hoverimgcard";

export default function page() {
  const Gradienttext = [
    {
      id: 1,
      headingtext1: "Sure Cheap Prices",
      subheadingtext2:
        "Search our lowest rates to international destinations. Explore the globe for journeying right here with us.",
       Icon: MdEuroSymbol
    },

    {
      id: 2,
      headingtext1: "Simple Way to Book",
      subheadingtext2:
        "The method of flight booking is very simple and completes within a few clicks. Just Search, Select and Submit to us",
       Icon: FaBook
    },

    {
      id: 3,
      headingtext1: "Dedicated Customer Support",
      subheadingtext2:
        "Bright Holiday always prioritize the premium client services. Our dedicated staff stay live, and respond to customers timely.",
       Icon: IoPersonCircleOutline
    },

    {
      id: 4,
      headingtext1: "Financial Protection",
      subheadingtext2:
        "We are working under ATOL organizations. Making sure your peace of mind as yours reserving & money is safe with us.",
       Icon: IoLockClosedSharp
    },
  ];

  return (
    <div className="relative">
      <Image
        src={"/home_bg.png"}
        height={750}
        width={1960}
        className="h-[750px] w-full object-cover"
        alt={""}
      ></Image>
      <div className="absolute inset-0">
        <BlueYellowHeader />
        <div>
          <BlueDocumentForm />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-[30px] font-bold pt-16 text-[#0B43B1]">
          Our Services
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-5 pt-20">
      {Gradienttext.map(item => (
        <GradientTextComp
          key={item.id} // Always provide a unique key when using map
          headingtext1={item.headingtext1}
          subheadingtext2={item.subheadingtext2}
          icon={item.Icon}
        />
      ))}
    </div>
       <div className="bg-[#F8F8F8] w-full h-[700px] mt-20">
        <p className="text-[#0B42B0] text-[30px] font-bold text-center pt-20">Latest Airlines Deals</p>
        <p className="text-gray-600 font-bold text-[15px] text-center">See below extraordinary series of our Airlines Deals</p>
        <HoverImgCard />
       </div>

       
      <div>
        <Footer />
      </div>
    </div>
  );
}

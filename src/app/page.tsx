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
import YellowContainer from "@/components/yellowcontainer";
import BlueImgComp from "@/components/blueimgcomp";

export default function Page() {
  const Gradienttext = [
    {
      id: 1,
      headingtext1: "Sure Cheap Prices",
      subheadingtext2:
        "Search our lowest rates to international destinations. Explore the globe for journeying right here with us.",
      Icon: MdEuroSymbol,
    },

    {
      id: 2,
      headingtext1: "Simple Way to Book",
      subheadingtext2:
        "The method of flight booking is very simple and completes within a few clicks. Just Search, Select and Submit to us",
      Icon: FaBook,
    },

    {
      id: 3,
      headingtext1: "Dedicated Customer Support",
      subheadingtext2:
        "Bright Holiday always prioritize the premium client services. Our dedicated staff stay live, and respond to customers timely.",
      Icon: IoPersonCircleOutline,
    },

    {
      id: 4,
      headingtext1: "Financial Protection",
      subheadingtext2:
        "We are working under ATOL organizations. Making sure your peace of mind as yours reserving & money is safe with us.",
      Icon: IoLockClosedSharp,
    },
  ];

  const Hovercard = [
    {
      id: "1",
      hoverImg: "ManilaPhilippines(1).avif",
      headingtext: "Manila, Philippines",
      price: "£ 437",
    },
    {
      id: "2",
      hoverImg: "lagos-nigeria.avif",
      headingtext: "Lagos, Nigeria",
      price: "£ 390",
    },
    {
      id: "3",
      hoverImg: "Accra-Ghana.avif",
      headingtext: "Accra, Ghana",
      price: "£ 401",
    },
    {
      id: "4",
      hoverImg: "HARARE-ZIMBABWE.avif",
      headingtext: "Harare, Zimbabwe",
      price: "£ 457",
    },
    {
      id: "5",
      hoverImg: "nairobi-kenya.jpg",
      headingtext: "Nairobi, Kenya",
      price: "£ 328",
    },
    {
      id: "6",
      hoverImg: "entebbe-uganda.jpg",
      headingtext: "Entebbe, Uganda",
      price: "£ 331",
    },
    {
      id: "7",
      hoverImg: "ADDISABABA-Ethiopia.avif",
      headingtext: "Addis Ababa, Ethiopia",
      price: "£ 346",
    },
    {
      id: "8",
      hoverImg: "johannesburg-southafrica.jpg",
      headingtext: "Johannesburg, South Africa",
      price: "£ 372",
    },
    {
      id: "9",
      hoverImg: "abuja-nigeria.avif",
      headingtext: "abuja-nigeria.avif",
      price: "£ 560",
    },
    {
      id: "10",
      hoverImg: "dakar-senegal.jpg",
      headingtext: "Dakar, Senegal",
      price: "£ 355",
    },
    {
      id: "11",
      hoverImg: "FREETOWN-SIERRALEONE.jpg",
      headingtext: "Freetown, Sierra Leone",
      price: "£ 396",
    },
    {
      id: "12",
      hoverImg: "MOMBASA-KENYA.avif",
      headingtext: "Mombasa, Kenya",
      price: "£ 490",
    },
  ];

  return (
    <div className="relative">
       <Image
        src={"/home_bg.png"}
        height={750}
        width={1960}
        className="md:h-[750px] h-[1020px] w-full object-cover"
        alt={""}
      /> 

      {/* Fixed Blue-Yellow Header */}
      <div className="absolute inset-x-0 top-0 z-50">
        <BlueYellowHeader />
      </div>

    
       <div className="absolute inset-x-0 top-[80px] z-40">
        <BlueDocumentForm />
      </div> 

       <div className="flex justify-center pt-16">
        <p className="text-[30px] font-bold text-[#0B43B1]">Our Services</p>
      </div> 

     
      <div className=" pb-10 overflow-auto pt-20">
         <div className="flex md:flex-row flex-col justify-center space-x-5">
          {Gradienttext.map((item) => (
            <GradientTextComp
              key={item.id}
              headingtext1={item.headingtext1}
              subheadingtext2={item.subheadingtext2}
              icon={item.Icon}
            />
          ))}
        </div> 

        <div className="bg-[#F8F8F8] w-full h-full md:mt-20 mt-10">
           <p className="text-[#0B42B0] text-[30px] font-bold text-center pt-20">
            Latest Airlines Deals
          </p> 
           <p className="text-gray-600 font-bold md:text-[15px] text-[20px] text-center">
            See below extraordinary series of our Airlines Deals
          </p> 

          {/* Cards Section */}
           <div className="flex justify-center">
            <div className="flex flex-wrap md:p-10 p-5 gap-5 w-[80%] ml-8">
              {Hovercard.map((card) => (
                <HoverImgCard
                  key={card.id}
                  hoverImg={card.hoverImg}
                  headingtext={card.headingtext}
                  price={card.price}
                />
              ))}
            </div>
          </div> 

          <div className="bg-white">
             <div className="md:mt-0 mt-5">
              <BlueImgComp />
            </div>
            <div className="pt-10 ">
              <YellowContainer />
            </div> 
          </div>
        </div>
      </div>

       
     <div className="">
        <Footer />
      </div> 
    </div>
  );
}
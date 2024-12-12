import React from "react";

import Image from "next/image";
import BlueYellowHeader from "@/components/header";
import BlueDocumentForm from "@/components/bluedocumentform";
import SelectRegionComp from "@/components/selectregioncomp";
import { IoPersonOutline } from "react-icons/io5";
import ImgScaleComp from "@/components/imgscalecmp";
import BlueImgComp from "@/components/blueimgcomp";
import YellowContainer from "@/components/yellowcontainer";
import Footer from "@/components/footer";

export default function Flights() {
  const ImgScale = [
    {
      id: "1",
      imgProp: "/DarEsSalaam.jpg",
      subheading: "Dar-ES-Salaam...",
      prize: "£327",
      heading: "Dar-ES-Salaam",
    },
    {
      id: "2",
      imgProp: "/KualaLumpur.jpg",
      subheading: "Kuala Lumpur...",
      prize: "£427",
      heading: "Kuala Lumpur",
    },
    {
      id: "3",
      imgProp: "/Manila.jpg",
      subheading: "Manila...",
      prize: "£437",
      heading: "Manila",
    },
    {
      id: "4",
      imgProp: "/Dhaka.jpg",
      subheading: "Dhaka...",
      prize: "£461",
      heading: "Dhaka",
    },
    {
      id: "5",
      imgProp: "/Istanbul.jpg",
      subheading: "Istanbul...",
      prize: "£137",
      heading: "Istanbul",
    },
    {
      id: "6",
      imgProp: "/lagos.jpg",
      subheading: "Lagos...",
      prize: "£390",
      heading: "Lagos",
    },
    {
      id: "7",
      imgProp: "/accra.jpg",
      subheading: "Accra...",
      prize: "£401",
      heading: "Accra",
    },
    {
      id: "8",
      imgProp: "/harare.jpg",
      subheading: "Harare...",
      prize: "£457",
      heading: "Harare",
    },
    {
      id: "9",
      imgProp: "/nairobi.jpg",
      subheading: "Nairobi",
      prize: "£328",
      heading: "Nairobi",
    },
    {
      id: "10",
      imgProp: "/entebbe.jpg",
      subheading: "Entebbe...",
      prize: "£331",
      heading: "Entebbe",
    },
    {
      id: "11",
      imgProp: "/AddisAbaba.jpg",
      subheading: "Addis-Ababa..",
      prize: "£346",
      heading: "Addis-Ababa",
    },
    {
      id: "12",
      imgProp: "/khartoum.jpg",
      subheading: "khartoum...",
      prize: "£500",
      heading: "khartoum",
    },
    {
      id: "13",
      imgProp: "/Johannesburg.jpg",
      subheading: "Johannesburg...",
      prize: "£550",
      heading: "Johannesburg",
    },
    {
      id: "14",
      imgProp: "/Abidjan.jpg",
      subheading: "Abidjan...",
      prize: "£600",
      heading: "Abidjan.jpg",
    },
    {
      id: "15",
      imgProp: "/Abuja.jpg",
      subheading: "Abuja...",
      prize: "£480",
      heading: "Abuja",
    },
    {
      id: "16",
      imgProp: "/Algiers.jpg",
      subheading: "Algiers...",
      prize: "£450",
      heading: "Algiers",
    },
    {
      id: "17",
      imgProp: "/Banjul.jpg",
      subheading: "Banjul...",
      prize: "£470",
      heading: "Banjul",
    },
    {
      id: "18",
      imgProp: "/Bulawayo.jpg",
      subheading: "Bulawayo...",
      prize: "£500",
      heading: "Bulawayo",
    },
    {
      id: "19",
      imgProp: "/Cairo.jpg",
      subheading: "Cairo...",
      prize: "£340",
      heading: "Cairo",
    },
    {
      id: "20",
      imgProp: "/Casablanca.jpg",
      subheading: "Casablanca...",
      prize: "£360",
      heading: "Casablanca",
    },
    {
      id: "21",
      imgProp: "/Dakar.jpg",
      subheading: "Dakar...",
      prize: "£380",
      heading: "Dakar",
    },
    {
      id: "22",
      imgProp: "/Douala.png",
      subheading: "Douala...",
      prize: "£330",
      heading: "Douala",
    },
    {
      id: "23",
      imgProp: "/Durban.jpeg",
      subheading: "Durban...",
      prize: "£390",
      heading: "Durban",
    },
    {
      id: "24",
      imgProp: "/Freetown.jpg",
      subheading: "Freetown...",
      prize: "£370",
      heading: "Freetown",
    },
    {
      id: "25",
      imgProp: "/Gaborone.jpeg",
      subheading: "Gaborone...",
      prize: "£360",
      heading: "Gaborone",
    },
    {
      id: "26",
      imgProp: "/Kigali.jpg",
      subheading: "Kigali...",
      prize: "£400",
      heading: "Kigali",
    },
    {
      id: "27",
      imgProp: "/Kilimanjaro.jpg",
      subheading: "Kilimanjaro...",
      prize: "£390",
      heading: "Kilimanjaro",
    },
    {
      id: "28",
      imgProp: "/Kinshasa.jpg",
      subheading: "Kinshasa...",
      prize: "£310",
      heading: "Kinshasa",
    },
    {
      id: "29",
      imgProp: "/Lilongwe.jpeg",
      subheading: "Lilongwe.jpeg",
      prize: "£350",
      heading: "Lilongwe",
    },
    {
      id: "30",
      imgProp: "/Luanda.jpg",
      subheading: "Luanda...",
      prize: "£420",
      heading: "Luanda",
    },
    {
      id: "31",
      imgProp: "/lusaka.jpg",
      subheading: "Lusaka...",
      prize: "£500",
      heading: "Lusaka",
    },
    {
      id: "32",
      imgProp: "/Mogadishu.jpg",
      subheading: "Mogadishu...",
      prize: "£450",
      heading: "Mogadishu.jpg",
    },
    {
      id: "33",
      imgProp: "/Port Harcourt.jpg",
      subheading: "Port Harcourt...",
      prize: "£430",
      heading: "Port Harcourt",
    },
    {
      id: "34",
      imgProp: "/Windhoek.jpg",
      subheading: "Windhoek...",
      prize: "£470",
      heading: "Windhoek",
    },
    {
      id: "35",
      imgProp: "/Mombasa.jpg",
      subheading: "Mombasa...",
      prize: "£490",
      heading: "Mombasa",
    },
    {
      id: "36",
      imgProp: "/Lisbon.jpg",
      subheading: "Lisbon...",
      prize: "£420",
      heading: "Lisbon",
    },
    {
      id: "37",
      imgProp: "/paris.jpg",
      subheading: "Paris...",
      prize: "£450",
      heading: "Paris",
    },
    {
      id: "38",
      imgProp: "/Frankfurt.jpg",
      subheading: "Frankfurt...",
      prize: "£500",
      heading: "Frankfurt...",
    },
    {
      id: "39",
      imgProp: "/sydney.jpg",
      subheading: "Sydney...",
      prize: "£520",
      heading: "Sydney",
    },
    {
      id: "40",
      imgProp: "/Melbourne.jpg",
      subheading: "Melbourne...",
      prize: "£460",
      heading: "Melbourne",
    },
    {
      id: "41",
      imgProp: "/Perth.jpg",
      subheading: "Perth...",
      prize: "£450",
      heading: "Perth",
    },
    {
      id: "42",
      imgProp: "/Baltimore.jpg",
      subheading: "Baltimore...",
      prize: "£470",
      heading: "Baltimore",
    },
    {
      id: "43",
      imgProp: "/Buffalo.jpg",
      subheading: "Buffalo...",
      prize: "£430",
      heading: "Buffalo",
    },
    {
      id: "44",
      imgProp: "/Auckland.jpg",
      subheading: "Auckland...",
      prize: "£500",
      heading: "Auckland",
    },
    {
      id: "45",
      imgProp: "/Toronto.jpg",
      subheading: "Toronto...",
      prize: "£420",
      heading: "Toronto",
    },
    {
      id: "46",
      imgProp: "/WashingtonDulles.jpg",
      subheading: "Washington Dulles...",
      prize: "£520",
      heading: "Washington Dulles",
    },
    {
      id: "47",
      imgProp: "/San Francisco.jpg",
      subheading: "San Francisco...",
      prize: "£350",
      heading: "San Francisco",
    },
    {
      id: "48",
      imgProp: "/Islip.png",
      subheading: "Islip...",
      prize: "£340",
      heading: "Islip",
    },
    {
      id: "49",
      imgProp: "/Miami.jpg",
      subheading: "Miami...",
      prize: "£320",
      heading: "Miami",
    },
    {
      id: "50",
      imgProp: "/washingtonDC.jpg",
      subheading: "Washington Reagan(DC)...",
      prize: "£330",
      heading: "Washington Reagan(DC)",
    },
    {
      id: "51",
      imgProp: "/NewYork.png",
      subheading: "New York...",
      prize: "£310",
      heading: "New York",
    },
    {
      id: "52",
      imgProp: "/Islip.png",
      subheading: "Islip...",
      prize: "£340",
      heading: "Islip",
    },
    {
      id: "53",
      imgProp: "/Jeddah.jpg",
      subheading: "Jeddah...",
      prize: "£420",
      heading: "Jeddah",
    },
    {
      id: "54",
      imgProp: "/Munich.jpg",
      subheading: "Munich...",
      prize: "£430",
      heading: "Munich",
    },
    {
      id: "55",
      imgProp: "/dubai.jpg",
      subheading: "Dubai...",
      prize: "£410",
      heading: "Dubai",
    },
    {
      id: "56",
      imgProp: "/Windhoek.jpg",
      subheading: "Windhoek...",
      prize: "£470",
      heading: "Windhoek",
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
      <div className="absolute inset-x-0 top-0 z-50">
        <BlueYellowHeader />
      </div>

      <div className="absolute inset-x-0 top-[80px] z-40">
        <BlueDocumentForm />
      </div>

      <div className="bg-white">
        <SelectRegionComp />

        <div className="flex justify-center mt-20 space-x-24">
          <div>
            <IoPersonOutline className="text-[90px]" />
            <div className="flex space-x-2 mt-5">
              <p className="font-bold">Need</p>
              <p className="font-bold text-[#FFD701]">Help?</p>
            </div>
            <p className="font-bold">Free Phone</p>
            <p className="font-bold">0307 4081 964</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {ImgScale.map((ScaleCard) => (
              <ImgScaleComp
                key={ScaleCard.id}
                subheading={ScaleCard.subheading}
                prize={ScaleCard.prize}
                heading={ScaleCard.heading}
                imgProp={ScaleCard.imgProp}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white mt-20">
        <div className="md:mt-0 mt-5">
          <BlueImgComp />
        </div>
        <div className="pt-10 ">
          <YellowContainer />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

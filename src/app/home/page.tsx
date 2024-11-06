import Image from "next/image";
import BlueDocumentForm from "@/components/bluedocumentform";
import Footer from "@/components/footer";
import BlueYellowHeader from "@/components/header";
import React from "react";
import GradientTextComp from "@/components/gradienttextcomp";


export default function page() {
  return (
    <div className="relative">
      <Image src={"/home_bg.png"} height={750} width={1960} className="h-[750px] w-full object-cover" alt={""}></Image>
      <div className="absolute inset-0">
        <BlueYellowHeader />
        <div>
          <BlueDocumentForm />
        </div>
      </div>

      
        <div className="flex justify-center">
        <p className="text-[30px] font-bold pt-16 text-[#0B43B1]">Our Services</p>
        </div>


        <GradientTextComp />
      
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
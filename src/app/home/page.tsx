"use client";

import BlueDocumentform from "@/components/bluedocumentform";
import Footer from "@/components/footer";
import BlueYellowHeader from "@/components/header";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative">
      <Image 
       width={1920}
       height={750}
       src="/home_bg.png" className="h-[750px] w-full object-cover" alt="" />

      <div className="absolute inset-0">
        <BlueYellowHeader />
        <div>
          <BlueDocumentform />
        </div>
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

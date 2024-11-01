"use client";

import BlueDocumentform from "@/components/bluedocumentform";
import BlueYellowHeader from "@/components/header";
import React from "react";

export default function page() {
  return (
    <div className="relative">
      <img src="home_bg.png" className="h-[700px] w-full object-cover" alt="" />
      <div className="absolute inset-0">
        <BlueYellowHeader />

        <div>
          <BlueDocumentform />
        </div>
      </div>
    </div>
  );
}

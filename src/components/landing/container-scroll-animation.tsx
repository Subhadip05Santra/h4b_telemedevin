"use client";
import React from "react";
import Image from "next/image";
// TODO: We need a better picture tham this.
import picture from "@/assets/image/gettyimages.jpg";
import { ContainerScroll } from "./container-scroll-animation.component";

export default function ContainerScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                TELEMEDICINE
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={picture}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

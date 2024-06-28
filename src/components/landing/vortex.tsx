"use client";

import React from "react";
import { Vortex } from "./vortex.components";
import Link from "next/link";
import { Button } from "../ui/button";

export default function VortexHomePage() {
  return (
    <div className="w-full rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Need Medical Support?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          We are here for YOU. To provide you medical service when you need the
          most, at the pinical of the requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/signup">
            <Button className="px-4 py-2 bg-[#cb1a41] hover:bg-pink-900 transition duration-200 rounded-lg text-white">
              Create Account
            </Button>
          </Link>
          <Link href="/helpline">
            <Button
              variant="secondary"
              className="px-4 py-2 bg-gray-600 text-white"
            >
              Help Lines
            </Button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}

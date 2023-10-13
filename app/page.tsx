"use client";

import React from "react";
import "./../styles/button.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ReactPlayer from "react-player";
// import video from "./../public/videos/futurevideo.mp4"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex-1 pt-36 padding-x">
          <h1 className=" 2xl:text-[72px] sm:text-[64px] text-white text-[50px] font-thin">
            Introducing Chat-Shastra a ChatBot!!
          </h1>
          <p className="text-[27px] text-gray-400 font-light mt-5 pb-5">
            Chat-Shastra is an Flexibal AI ChatBot as well as AI Image Generator
            which producing stunning art, illustrations, and images in seconds.
            ...
          </p>

          <Link href="/Intro">
            <button className="p-3 text-white ">Explore Now</button>
          </Link>
        </div>

        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
          <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
            <Image
            src="/../public/robot2.png"
            alt="hero"
            fill
            className="object-contain"
          />
          
          </div>

          <div className="absolute xl:-top-24 xl:-right-1/3 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
            <Image
              src="/../public/bg.webp"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

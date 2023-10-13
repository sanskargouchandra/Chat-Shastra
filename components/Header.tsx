import Image from "next/image";
import React from "react";
import OpenaiLogo from "./../public/Chat-Shastra-logos_transparent.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className=' w-full  absolute z-10 '>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-1 bg-transparent'>
      <Link href='/Intro' className='flex justify-center items-center'>
        <Image
          src={OpenaiLogo}
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
        <span className="font-mono text-white text-3xl">Chat-Shastra</span>
      </Link>

<div className="flex items-center justify-end space-x-5">
      <button className=" relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
      Contact Us
      </button>
    {/* <UserButton/> */}
    <UserButton afterSignOutUrl="/" />
</div>
    </nav>
  </header>
  );
}

export default Header;

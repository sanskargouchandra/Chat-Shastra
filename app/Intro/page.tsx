import React from "react";
import "./../../styles/card.css";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <div className="flex flex-col items-center">
         <h1 className="text-white pb-10 text-4xl font-mono">Where do You Want to Go!!!</h1>  
         
            
      <div>
      <div className="flex gap-x-32 items-center text-center">

     <Link href="/Chatbot">
     <div className="card text-white">
     <Image src="/../public/chatgpt-logo.png" fill
         className="object-contain" alt="ChatgptLogo"/>
      <p className="heading text-white">Lets Test The Power Of GPT-4</p>
     </div>
     </Link>

     <Link href="/Imagegenerator" >
     <div className="card text-white">
     <Image src="/../public/midjourney_logo.webp" fill
         className="object-contain" alt="ChatgptLogo"/>
       <p className="heading">UnList the power of DALL-E + MidJourny</p>
      
     </div>
     </Link>
   </div>
      </div>
    </div>
    </div>
  );
};

export default Intro;


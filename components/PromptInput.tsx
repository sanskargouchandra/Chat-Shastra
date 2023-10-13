"use client";

import { generateImage, generateSuggession } from "@/lib/openaihelpers";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { imagesAtom, loadingAtom } from "@/atoms/atom";
import { useRecoilState } from "recoil";
import { toast } from "sonner";

function PromptInput() {
  let [prompt, setPrompt] = useState("");
  const [imagesGlobalState, setImagesGlobalState] =
    useRecoilState<string[]>(imagesAtom);
  const [loadingGlobalState, setLoadingGlobalState] =
    useRecoilState<boolean>(loadingAtom);

  useEffect(() => {
    let cookie = Cookies.get("images");
    const separator = ",";
    let cookieImages = cookie ? cookie.split(separator) : [];
    setImagesGlobalState(cookieImages);
  }, []);

  const handleInputChange = (e: any) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    const valueLength = prompt.length;
    const generateButton = document.getElementById("generate-button");
    const mobileButton1 = document.getElementById("mobile-generate-button-1");
    const mobileButton2 = document.getElementById("mobile-generate-button-2");

    if (valueLength > 0) {
      generateButton?.classList.replace("bg-white", "bg-black");
      ``;
      generateButton?.classList.replace("text-[#7E7F7E]", "text-white");
      mobileButton2?.classList.replace("hidden", "flex");
      mobileButton1?.classList.replace("flex", "hidden");
    } else {
      generateButton?.classList.replace("bg-black", "bg-white");
      generateButton?.classList.replace("text-white", "text-[#7E7F7E]");
      mobileButton2?.classList.replace("flex", "hidden");
      mobileButton1?.classList.replace("hidden", "flex");
    }
  }, [prompt]);

  const surpriseMeHandler = async () => {
    if (Cookies.get("limitreached") === "true") {
      toast.error("You have reached the limit of 2 images");
      return;
    }
    let prompt_input = document.getElementById("prompt-input");
    prompt_input?.setAttribute("placeholder", "Generating…");

    let suggestion = await generateSuggession();
    prompt_input?.setAttribute(
      "placeholder",
      "An Impressionist oil painting of sunflowers in a purple vase…"
    );
    setPrompt("");
    setPrompt(suggestion!);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (Cookies.get("limitreached") === "true") {
      toast.error("You have reached the limit of 2 images");
      return;
    }
    setLoadingGlobalState(true);
    let image = await generateImage(prompt);
    let cookie = Cookies.get("images");
    const separator = ",";
    let cookieImages = cookie ? cookie.split(separator) : [];
    if (image) {
      setImagesGlobalState([image, ...cookieImages]);
      Cookies.set("images", [image, ...cookieImages].join(separator));
    } else {
      console.log("Image URL is undefined");
    }

    if ([image, ...cookieImages].length > 100) {
      Cookies.set("limitreached", "true");
    }
  };

  return (
    <div
      className="w-full h-[65vh] flex flex-col items-center justify-center md:px-28 
     px-6"
    >
      <h1 className=" text-white mr-6 text-5xl font-light pt-32 pb-10">
        Unlist The Power Of AI with DALL-E + Mid-Journy!!
      </h1>
      <div className="w-full h-10 flex items-center m-7">
        <p className="font-mono md:text-md text-lg  mr-3 text-white">
          Start with a detailed description & Suggestion from Chat-Shastra
        </p>

        <button
          onClick={surpriseMeHandler}
          type="button"
          className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Surprise me
        </button>
      </div>

      <div className="md:sticky top-16  z-50 w-full md:h-[4.3rem] h-[14rem]">
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="h-full w-full    relative flex items-center py-3"
        >
          <div className="w-full relative flex md:h-auto  h-full">
            <textarea
              value={prompt}
              onChange={handleInputChange}
              name="prompt"
              id="prompt-input"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
              className="w-full h-full  md:placeholder:text-sm placeholder:text-md placeholder:leading-snug outline-none placeholder:font-light leading-[100%] md:pt-5 duration-300 pt-5 md:pl-4 px-4 rounded-md border border-[#f5f6f8]  placeholder:text-[#BBBABA] transition-shadow shadow-md focus:shadow-lg shadow-[#e3e5e9]"
            />
            <button
              disabled={!prompt}
              type="submit"
              id="generate-button"
              className="absolute right-0 bg-white  transition-colors md:flex hidden duration-300 px-4 items-center h-full rounded-r-md text-[0.900rem] font-bold text-[#7E7F7E] border-l border-l-[#F3F3F2]"
            >
              Generate
            </button>
            <button
              onClick={surpriseMeHandler}
              type="button"
              id="mobile-generate-button-1"
              className=" absolute bottom-0  left-0 w-full md:hidden flex items-center justify-center transition-colors duration-300 px-4  h-16  rounded-b-md  text-[1rem] font-bold text-black border-t border-t-[#F3F3F2]"
            >
              Surprise me
            </button>
            <button
              id="mobile-generate-button-2"
              type="submit"
              className=" absolute bottom-0 left-0 w-full  md:hidden hidden items-center justify-center transition-colors duration-300 px-4  h-16  rounded-b-md  text-[1rem] font-bold text-black border-t border-t-[#F3F3F2]"
            >
              Generate
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default PromptInput;

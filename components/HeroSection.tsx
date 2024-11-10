import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { HiOutlineClipboardDocument } from "react-icons/hi2";

export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption!);

    setButtonText("Copied!"); // set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText("Copy"); // set the button text back to "Copy" after 2 seconds
    }, 2000);
  };

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl text-white">
        Generate descriptions for your images
        <span className="relative whitespace-nowrap text-[#757fdf]">
          <span className="relative"> using AI.</span>
        </span>
      </h1>
      <div className="flex justify-center space-x-4">
        <Link
          className="bg-[#4b4cb7] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          href="/caption"
        >
          Create a Description
        </Link>
      </div>

      <div className="flex justify-center items-center w-full flex-col sm:mt-10 mt-6 text-white">
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-10 sm:flex-row flex-col">
            <div className="w-full">
              <h2 className="mb-1 font-medium text-lg">Application Dropzone</h2>
              <Image
                alt="Dog and blue building"
                src="/poster.png"
                className="mx-auto rounded-2xl"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's Siddhant Kotambe",
      "Full-stack MERN Developer...",
      "React-Native Developer...",
      "Guy who love to code !",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
    
    <div className="h-screen flex flex-col justify-center  items-center text-center">
    <BackgroundCircles />
      <img
        src="./image3.jpg"
        className="relative rounded-full h-32 w-32 mx-auto object-cover z-40"
        alt="my image"
      />
     
      <div className="z-30">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
            <Link href='#about'>
          <button className="heroButton">About</button>
            </Link>
            <Link href='#experience'>
          <button className="heroButton">Experience</button>
            </Link>
            <Link href='#skills'>
          <button className="heroButton">Skills</button>
            </Link>
            <Link href='#projects'>
          <button className="heroButton">Projects</button>
            </Link>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;

// space-y-8 items-center justify-center text-center

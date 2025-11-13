"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";
import Link from "next/link";
import { useRef } from "react";

import Intro from "./intro";
import Data from "./data";
import Method from "./methods";
import Discussion from "./discussion";
import Conclusion from "./conclusion";
import About from "./about";


const navLinks = [
  { label: "Home", href: "#intro" },
  { label: "Data", href: "#data" },
  { label: "Methodology", href: "#methodology" },
  { label: "Discussion", href: "#discussion" },
  { label: "Conclusion", href: "#conclusion" },
  { label: "About", href: "#team" },
];
export default function Home() {
  
  const containerRef = useRef<HTMLDivElement>(null);

  const prefix =
    process.env.NODE_ENV === "production"
      ? process.env.BASE_PATH
      : "";

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
      <div ref={containerRef} className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory scroll-smooth">
      <div id="ribbon" className="pr-0 fixed top-0 left-0 w-[calc(100%-16px)] text-white-500 font-work-sans text-[20px] font-medium flex items-center justify-between z-20">
        <Image src={getImagePath("/brand.svg")} width={150} height={150} alt="logo" className="p-2.5"/>
        <nav className="flex space-x-4">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="link hover:bg-[#43695c] p-[25px] mx-[-2]">{label}</Link>
          ))}
        </nav>
      </div>
      <Intro/>
      <Data/>
      <Method/>
      <Discussion/>
      <Conclusion/>
      <About/>
      
      
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 font-quicksand font-bold text-[20px] mx-6 my-3 transition delay-150">
          <Image src={getImagePath("/up-arrow.png")} width={30} height={30} alt="arrow" />
        </button>
    </div>
  );
}

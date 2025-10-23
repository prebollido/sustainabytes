"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Data", href: "https://docs.google.com/spreadsheets/d/1LjyqFT8DTGV8s0OQrROkB95ruxDPiq1jKcJUhUPuwcU/edit?gid=0#gid=0" },
  { label: "Methodology", href: "/methodology" },
  { label: "Discussion", href: "/discussion" },
  { label: "Conclusion", href: "/conclusion" },
];
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
      <div ref={containerRef} className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory scroll-smooth">
      <div id="ribbon" className="pr-0 fixed top-0 left-0 w-[calc(100%-16px)] text-white-500 font-work-sans text-[20px] font-medium flex items-center justify-between z-20">
        <Image src={"/brand.svg"} width={150} height={150} alt="logo" className="p-2.5"/>
        <nav className="flex space-x-4">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="link hover:bg-[#43695c] p-[25px] mx-px">{label}</Link>
          ))}
        </nav>
      </div>
      <section id="about" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <Image src={"/brand.svg"} width={500} height={500} alt="logo" className="p-2.5 mx-auto"/>
          <h3 className="h3">Celestino | Malagar | Rebollido | Santos</h3>
          <p className="p">
              Modeling Philippine food security with Data Science. Because that's how food should be.
          </p>
          <p className="p">
              Accesible. Affordable. Available.
          </p>
          <p className="p">
              More about us stuff here.
          </p>
        </div>
      </section>
      <section id="introduction" className="h-screen snap-start flex flex-col justify-center items-center relative">
          <img
            src="/veggies.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
            alt="background"
          />
        <div className="z-10 text-center">
          <h1 className="h1 text-white">Introduction</h1>
          <p className="p text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
      <section id="data" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Data</h1>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 font-quicksand font-bold text-[20px] mx-6 my-3 transition delay-150">
          <Image src="/up-arrow.png" width={30} height={30} alt="arrow" />
        </button>
    </div>
  );
}

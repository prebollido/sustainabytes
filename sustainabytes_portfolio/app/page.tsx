"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";
import Link from "next/link";
import { useRef } from "react";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Data", href: "https://docs.google.com/spreadsheets/d/1LjyqFT8DTGV8s0OQrROkB95ruxDPiq1jKcJUhUPuwcU/edit?gid=0#gid=0" },
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
      <section id="introduction" className="snap-start flex flex-col justify-center items-center pt-40 relative">
          <img
              src={getImagePath("/veggies2.jpg")}
              className="absolute mt-[-160] w-full h-full object-cover opacity-45 pointer-events-none"
              alt="background"
            />
        <div className="flex z-10 w-300 h-full items-center mb-10 bg-(--background)/65 rounded-3xl">
          <div className="text-center w-150 px-10">
            <Image src={getImagePath("/sdg2.svg")} width={500} height={500} alt="logo" className="p-2.5 py-20 mx-auto"/>
            <p className="p">
                How do food price fluctuations affect poverty incidence and household expenditure?
                Which food products are more susceptible to exchange rate fluctuations and import dependency?

            </p>
            <p className="p">
                We want to know because food should be
            </p>
            <p className="p font-bold text-[#f2c457] text-xl">
                Accesible. Affordable. Available.
            </p>
          </div>
          <div className="w-200 p p-10 text-lg">
            <p className="text-justify pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque turpis, ac porttitor tellus accumsan in. Morbi at tempus dolor. Phasellus ut ornare risus. Phasellus mauris dolor, sagittis eu congue sit amet, hendrerit sed nisl. Morbi volutpat erat at odio ultrices dignissim. Nam ut risus nisi. Maecenas ac lorem sagittis, pharetra arcu non, mollis metus.
            <br className="pb-2"/>
                Nam quis tristique ante. Proin at magna erat. Quisque finibus et nulla non congue. Pellentesque vitae sapien auctor erat consectetur elementum sit amet quis ante. Nulla id mi arcu. Aenean a purus fermentum, vehicula augue in, tempus lacus. Suspendisse vel pharetra elit, sit amet pulvinar odio. Morbi nisl leo, auctor sit amet urna sit amet, scelerisque tincidunt tortor.
            <br className="pb-2"/>
                Donec a venenatis eros, ac placerat libero. Nunc at ullamcorper dolor. Suspendisse potenti. Integer ac turpis fringilla, rhoncus est eget, tincidunt erat. In faucibus aliquam nisi in efficitur. In a metus lacus. Nam efficitur, enim ultricies elementum tempor, ipsum erat finibus velit, vitae ultricies leo lorem vel orci. Vivamus molestie congue risus ac aliquet. Donec cursus finibus nibh, a posuere lectus sodales sed. Quisque velit dui, vehicula in urna et, varius posuere neque.
            </p>
          </div>
        </div>
        <div id="objectives" className="flex-col justify-center w-full z-10 text-center items-center pb-30">
          <h1 className="h1 text-white py-10">Objectives</h1>
          <div className="flex items-center justify-center">
            <div id="objective1" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/1.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p pb-5">
                Determine the relationship between food price and poverty incidence.
              </p>
            </div>
            <div id="objective2" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/2.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p pb-5"> 
                Determine the relationship between food price and household expenditure.
              </p>
            </div>
            <div id="objective3" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/3.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p">
                Determine how different categories of food products react to exchange rate fluctuations and import dependencies.

              </p>
            </div>
            <div id="objective4" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/4.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p">
                Identify which food products are sensitive to exchange rate fluctuations and import dependencies.
              </p>
            </div>
          </div>
              
            

          </div>
      </section>
      <section id="data" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Data</h1>
          <p className="p px-[100px]">
            Description of data set, data collection process, data size. <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
      <section id="methodology" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Methodology</h1>
          <p className="p px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
      <section id="discussion" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Discussion</h1>
          <p className="p px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
      <section id="conclusion" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Conclusion</h1>
          <p className="p px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
      <section id="team" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">The Team</h1>
          <p className="p px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 font-quicksand font-bold text-[20px] mx-6 my-3 transition delay-150">
          <Image src={getImagePath("/up-arrow.png")} width={30} height={30} alt="arrow" />
        </button>
    </div>
  );
}

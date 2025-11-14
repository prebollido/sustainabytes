"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";
import Link from "next/link";



export default function Intro() {
  return (
    <section id="intro" className="snap-start flex flex-col justify-center items-center pt-40 relative">
          <img
              src={getImagePath("/veggies2.jpg")}
              className="absolute mt-[-160] w-full h-full object-cover opacity-45 pointer-events-none"
              alt="background"
            />
        <div className="z-10 h-screen w-[75vw]">
          <div id= "maindiv" className="flex  gap-6 z-10 items-center bg-(--background)/65 rounded-3xl">
            <div id="left" className="text-center w-200 px-10 align-center">
              <Image src={getImagePath("/sdg2.svg")} width={500} height={500} alt="logo" className="p-2.5 py-20 mx-auto"/>
              <p className="p">
                  How do food price fluctuations affect poverty incidence?
                  Which food products are more susceptible to exchange rate fluctuations?

              </p>
              <p className="p">
                  We want to know because food should be
              </p>
              <p className="p font-bold text-[#f2c457] text-xl">
                  Accesible. Affordable. Available.
              </p>
            </div>
            <div id="right" className="w-200 h-150 p p-7">
              <p className="text-justify pb-2 h-150">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque turpis, ac porttitor tellus accumsan in. Morbi at tempus dolor. Phasellus ut ornare risus. Phasellus mauris dolor, sagittis eu congue sit amet, hendrerit sed nisl. Morbi volutpat erat at odio ultrices dignissim. Nam ut risus nisi. Maecenas ac lorem sagittis, pharetra arcu non, mollis metus.
              <br className="pb-2"/>
                  Nam quis tristique ante. Proin at magna erat. Quisque finibus et nulla non congue. Pellentesque vitae sapien auctor erat consectetur elementum sit amet quis ante. Nulla id mi arcu. Aenean a purus fermentum, vehicula augue in, tempus lacus. Suspendisse vel pharetra elit, sit amet pulvinar odio. Morbi nisl leo, auctor sit amet urna sit amet, scelerisque tincidunt tortor.
              <br className="pb-2"/>
                  Donec a venenatis eros, ac placerat libero. Nunc at ullamcorper dolor. Suspendisse potenti. Integer ac turpis fringilla, rhoncus est eget, tincidunt erat. In faucibus aliquam nisi in efficitur. In a metus lacus. Nam efficitur, enim ultricies elementum tempor, ipsum erat finibus velit, vitae ultricies leo lorem vel orci. Vivamus molestie congue risus ac aliquet. Donec cursus finibus nibh, a posuere lectus sodales sed. Quisque velit dui, vehicula in urna et, varius posuere neque.
              </p>
            </div>
          </div>
        </div>
        <div id="objectives" className="flex-col justify-center w-full z-10 text-center items-center pb-30">
          <h1 className="h1 text-white py-10">Objectives</h1>
          <div className="flex items-center justify-center">
            <div id="objective1" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/1.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p pb-5">
                Determine the relationship between monthly food prices and poverty incidence
              </p>
            </div>
            <div id="objective2" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/2.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p pb-5"> 
                Analyze how various food product categories respond to exchange rate fluctuations
              </p>
            </div>
            <div id="objective3" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/3.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p">
                Identify and rank food products based on their sensitivity to exchange rate fluctuations
              </p>
            </div>
            <div id="objective4" className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
              <Image src={getImagePath("/4.svg")} width={100} height={100} alt="1" className="p-5"/> 
              <p className="p">
                Design a regression model to simulate possible economic scenarios related to food security <br/> <br/>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";
import Link from "next/link";

export default function Intro() {
  return (
    <section
      id="intro"
      className="snap-start flex flex-col justify-center items-center pt-40 relative ">
      <img
        src={getImagePath("/veggies2.jpg")}
        className="absolute mt-[-160] w-full h-full object-cover opacity-45 pointer-events-none"
        alt="background"
      />
      <div className="z-10 h-screen w-[75vw]">
        <div
          id="maindiv"
          className="flex  gap-6 z-10 items-center bg-(--background)/65 rounded-3xl">
          <div id="left" className="text-center w-200 px-10 align-center">
            <Image
              src={getImagePath("/sdg2.svg")}
              width={500}
              height={500}
              alt="logo"
              className="p-2.5 py-20 mx-auto"
            />
            <p className="p">
              How do food price fluctuations affect poverty incidence? Which
              food products are more susceptible to exchange rate fluctuations?
            </p>
            <p className="p">We want to know because food should be</p>
            <p className="p font-bold text-[#f2c457] text-xl">
              Accesible. Affordable. Available.
            </p>
          </div>
          <div id="right" className="w-200 h-150 p p-7 flex items-center">
            <p className="text-justify pb-2 align-middle">
              Sustainabytes investigates how food price dynamics and exchange
              rates affect household expenditure and poverty in the Philippines.
              Merging datasets from The World Bank and Philippine Statistics
              Authority, we interpolate annual expenditure to account for
              missing years of data, clean sparse fields, and produce
              exploratory analysis plots.
            </p>
          </div>
        </div>
      </div>
      <div
        id="objectives"
        className="flex-col justify-center w-full z-10 text-center items-center pb-30">
        <h1 className="h1 text-white py-10">Objectives</h1>
        <div className="flex items-center justify-center">
          <div
            id="objective1"
            className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
            <Image
              src={getImagePath("/1.svg")}
              width={100}
              height={100}
              alt="1"
              className="p-5"
            />
            <p className="p pb-5">
              Determine the relationship between monthly food prices and poverty
              incidence
            </p>
          </div>
          <div
            id="objective2"
            className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
            <Image
              src={getImagePath("/2.svg")}
              width={100}
              height={100}
              alt="1"
              className="p-5"
            />
            <p className="p pb-5">
              Analyze how various food product categories respond to exchange
              rate fluctuations
            </p>
          </div>
          <div
            id="objective3"
            className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
            <Image
              src={getImagePath("/3.svg")}
              width={100}
              height={100}
              alt="1"
              className="p-5"
            />
            <p className="p">
              Identify and rank food products based on their sensitivity to
              exchange rate fluctuations
            </p>
          </div>
          <div
            id="objective4"
            className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
            <Image
              src={getImagePath("/4.svg")}
              width={100}
              height={100}
              alt="1"
              className="p-5"
            />
            <p className="p">
              Design a regression model to simulate possible economic scenarios
              related to food security <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

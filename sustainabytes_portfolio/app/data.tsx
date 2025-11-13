/*
Idea for this: have like slide show like tabs for
  - Data Set
  - Data Collection Process
  - Data Size

  like  a box with left and right arrows to move to next page
*/


"use client";
import Image from "next/image";
import { getImagePath } from "../utils/imagePath";

export default function Data() {
  return (
    <section id="data" className="snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 w-[70vw]">
          <h1 className="h1 text-center">Data</h1>
          <br/>
          <div>
            <button onClick={() => alert("Clicked!")} className="border-b-2 border-white-500 text-white px-4 py-2 rounded-md hover:bg-[#43695c] transition button text-2xl font-black w-[75vw]">
              <div className="flex justify-between items-center w-full ">
                <p>Data Set<br/></p>
                <Image src={getImagePath("/down-arrow.png")} width={30} height={30} alt="arrow" />
              </div>
              
            </button>
            <div className="w-[60vw] items-center">
              <p className="p text-center">
                The collective data set is a combination of four data sets: (1) Real Time Food Prices, (2) Real Time Currency Prices, (3) Annual Family Expenditure, and (4) Annual Poverty Incidence. These data sets include the following features useful for the project:
              </p>
            </div>
            
            <ol className="list-decimal ml-6 ol">
                <li>Region</li>
                <li>Province</li>
                <li>Month</li>
                <li>Year (from 2015 -2025)</li>
                <li>Type of Food Product (beans, cabbage, carrots, eggs, beef, chicken, pork, onions, potatoes, rice, tomatoes)</li>
                <li>Food price</li>
                <li>Food price inflation rate</li>
                <li>Food price trust rate</li>
                <li>Food price index</li>
                <li>Food price inflation index</li>
                <li>Food Price Trust Index</li>
                <li>Annual per capita poverty threshold</li>
                <li>Poverty incidence among families estimates</li>
                <li>Magnitude of Poor Families Estimate</li>
                <li>Income Class (Decile Class)</li>
                <li>Average Annual Family Expenditure (by income class)</li>
                <li>Exchange Rate</li>
                <li>Exchange Rate Inflation</li>
                <li>Annual Import Dependency Index</li>
            </ol>
            </div>
          
        <p className="p">
            <b>Data Collection Process</b><br/>
            The data sets for this project are sourced from The Humanitarian Data Exchange (HDX) and the Philippine Statistics Agency (PSA). Specifically, food price, exchange rate, and import dependency data are taken from HDX, while household expenditure and poverty incidence data are taken from PSA. 
            <br/>
            <br/>
            <b>Data Size</b><br/>
            Before data cleaning and preprocessing, there are 6324 rows of data and 19 features.
          </p>
        </div>
    </section>
  );
}

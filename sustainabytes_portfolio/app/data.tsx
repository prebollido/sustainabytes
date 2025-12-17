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
import { useState } from "react"; 

function FeaturesContent() {
  return (
    <div className="pb-[20px]">
      <div className="w-[60vw] items-center py-[10px]">
        <div className="w-[75vw] bg-white/15 p-10 rounded-3xl my-5">
            <p className="p text-left text-[13pt] font-[var(--font-karla)] font-normal">
              The collective data set is a combination of four data sets: (1) Real Time Food Prices, (2) Real Time Currency Prices, and (3) Annual Poverty Incidence. These data sets include the following features useful for the project:
            </p>
            <table className="table-auto border border-black border-collapse min-w-full p-10 mt-5">
              <tbody>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-2 font-bold">Region</td>
                  <td className="border px-4 py-2 font-bold">Province</td>
                  <td className="border px-4 py-2 font-bold">Month</td>
                  <td className="border px-4 py-2 font-bold">Year</td>
                  <td className="border px-4 py-2 font-bold">Type of Food Product</td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2 font-bold">Food Price</td>
                  <td className="border px-4 py-2 font-bold">Annual per Capita Poverty Threshold</td>
                  <td className="border px-4 py-2 font-bold">Poverty Incidence</td>
                  <td className="border px-4 py-2 font-bold">Magnitude of Poor Families</td>
                  <td className="border px-4 py-2 font-bold">Exchange Rate</td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
    </div>
  )
}

function Features() {
  const [visible, setVisible] = useState(false);  

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div className="ml-[-40]">
      <button onClick={toggleVisible} className="border-b-2 border-white-500 text-white px-4 py-2 rounded-md hover:bg-[#43695c] transition button text-xl font-black w-[75vw]">
              <div className="flex justify-between items-center w-full ">
                <p>Data Set Details<br/></p>
                <Image src={getImagePath("/down-arrow.png")} width={30} height={30} alt="arrow" />
              </div>
            </button>

      {visible && <FeaturesContent />}
    </div>
  )
}

function CollectionContent() {
  return (
    <div className="w-[75vw] bg-white/15 p-10 rounded-3xl my-5">
      <p className="p p-[10px]">
        The data sets for this project are sourced from The Humanitarian Data Exchange (HDX) and the Philippine Statistics Agency (PSA). Specifically, food price and exchange rate data are taken from HDX, while poverty incidence data are taken from PSA. 
      </p>
    </div>
  )
}

function Collection() {
  const contents = [FeaturesContent(), CollectionContent(), SizeContent()]
  const titles = ["Data Set Details", "Data Collection Process",]
  const [visible, setVisible] = useState(false);  

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div className="ml-[-40]">
      <button onClick={toggleVisible} className="border-b-2 border-white-500 text-white px-4 py-2 rounded-md hover:bg-[#43695c] transition button text-xl font-black w-[75vw]">
              <div className="flex justify-between items-center w-full ">
                <p>Data Collection Process<br/></p>
                <Image src={getImagePath("/down-arrow.png")} width={30} height={30} alt="arrow" />
              </div>
            </button>

      {visible && <CollectionContent />}
    </div>
  )
}

function SizeContent() {
  return (
    <div className="w-[75vw] bg-white/15 p-10 rounded-3xl my-5">
      <p className="p p-[10px]">
        Before data cleaning and preprocessing, there are 6324 rows of data and 19 features.
      </p>
    </div>
  )
}

function Size() {
  const [visible, setVisible] = useState(false);  

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div className="ml-[-40]">
      <button onClick={toggleVisible} className="border-b-2 border-white-500 text-white px-4 py-2 rounded-md hover:bg-[#43695c] transition button text-xl font-black w-[75vw]">
              <div className="flex justify-between items-center w-full ">
                <p>Data Size<br/></p>
                <Image src={getImagePath("/down-arrow.png")} width={30} height={30} alt="arrow" />
              </div>
            </button>

      {visible && <SizeContent />}
    </div>
  )
}

export default function Data() {
  return (
    <section id="data" className="snap-start flex flex-col justify-center items-center relative mb-[50px]">
        <div className="z-10 w-[70vw]">
          <h1 className="h1 text-center">Data</h1>
          <Features />    
          <br />
          <Collection />
          <br />
          <Size /> 
        </div>
    </section>
  );
}

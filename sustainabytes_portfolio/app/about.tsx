/*
Idea for this: row members. for each member include
  - name
  - photo
  - one quote regarding the project
*/

"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";

const PHOTO_DIM = 150; 

export default function About() {
  return (
    <section id="team" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <img
          src={getImagePath("/bg.jpg")}
          className="absolute w-full h-full object-cover opacity-45 pointer-events-none"
          alt="background"
        />
        <div className="z-10 text-center">
          <h1 className="h1">The Team</h1>
          <div className="flex flex-col md:flex-row items-center justify-center w-[75vw] bg-white/15 p-15 rounded-3xl my-5 ml-[-45] mx-auto">
            <div
              id="about-pammy"
              className="flex flex-col justify-center w-75 h-60 items-center p-5">
              <Image
                src={getImagePath("/pfp_pammy.jpg")}
                width={PHOTO_DIM}
                height={PHOTO_DIM}
                alt="pammy-pfp"
                className="p-5"
                style={{ borderRadius: '50%' }}
              />
              <p className="p pb-5">Pammy Rebollido</p>
            </div>
            <div
              id="about-soph"
              className="flex flex-col justify-center w-75 h-60 items-center p-5">
              <Image
                src={getImagePath("/pfp_soph.jpg")}
                width={PHOTO_DIM}
                height={PHOTO_DIM}
                alt="soph-pfp"
                className="p-5"
                style={{ borderRadius: '50%' }}
              />
              <p className="p pb-5">Soph Santos</p>
            </div>
            <div
              id="about-anton"
              className="flex flex-col justify-center w-75 h-60 items-center p-5">
              <Image
                src={getImagePath("/pfp_anton.jpg")}
                width={PHOTO_DIM}
                height={PHOTO_DIM}
                alt="anton-pfp"
                className="p-5"
                style={{ borderRadius: '50%' }}
              />
              <p className="p pb-5">Anton Malagar</p>
            </div>
            <div
              id="about-leo"
              className="flex flex-col justify-center w-75 h-60 items-center p-5">
              <Image
                src={getImagePath("/pfp_leo.jpg")}
                width={PHOTO_DIM}
                height={PHOTO_DIM}
                alt="leo-pfp"
                className="p-5"
                style={{ borderRadius: '50%' }}
              />
              <p className="p pb-5">Leo Celestino</p>
            </div>
          </div>
        </div>
    </section>
  );
}

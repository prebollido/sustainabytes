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
        <div className="z-10 text-center">
          <h1 className="h1">The Team</h1>
          <div className="flex flex-col md:flex-row w-[80vw] items-center justify-center">
            <div
              id="about-pammy"
              className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
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
              className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
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
              className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
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
              className="flex flex-col bg-(--background)/70 justify-center w-75 h-60 items-center p-5 rounded-3xl mx-3">
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

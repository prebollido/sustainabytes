/*
Idea for this: have like slide show like tabs for
  - Plot for rq1
  - Plot for rq 2
  - nutshell plot
  - hypothesis testing
  - regression model

  like  abox with left and right arrows to move to next page
*/
import Image from "next/image";
import { getImagePath } from "../utils/imagePath";

export default function Discussion() {
  return (
    <section
      id="discussion"
      className="h-screen snap-start flex flex-col justify-center items-center relative">
      <div className="z-10 text-center">
        <h1 className="h1">Discussion</h1>
        <p className="p px-[100px]"></p>
        <h2 className="h2">Exploratory Data Analysis</h2>
        <br />
        <b>Research Question 1</b>
        <Image
          src={getImagePath("/rq1-price-poverty-expenditure.png")}
          width={500}
          height={250}
          alt="price vs poverty vs expenditure"
        />
        <b>Research Question 2</b>
        <Image
          src={getImagePath("/rq2-beans.png")}
          width={500}
          height={250}
          alt="beans"
        />
        <Image
          src={getImagePath("/rq2-cabbage.png")}
          width={500}
          height={250}
          alt="cabbage"
        />
        <Image
          src={getImagePath("/rq2-carrot.png")}
          width={500}
          height={250}
          alt="carrot"
        />
        <Image
          src={getImagePath("/rq2-barchart.png")}
          width={500}
          height={250}
          alt="barchart"
        />
        <b>Nutshell Plot</b>
        <Image
          src={getImagePath("/nutshell.svg")}
          width={750}
          height={500}
          alt="nutshell plot"
        />
        Insert Discussion of Hypothesis Testing here <br />
        <br />
        <b>Machine Learning</b>
        <br />
        Machine Learning Discussion here!
        <br />
        <br />
      </div>
    </section>
  );
}

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
      className="min-h-screen snap-start flex flex-col justify-center items-center relative">
      <div className="z-10 text-center space-y-8">
        <h1 className="h1">Discussion</h1>
        <p className="p px-[100px]"></p>
        <h2 className="h2">Exploratory Data Analysis</h2>
        <h3 className="h3 mt-12">Research Question 1</h3>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <Image
            src={getImagePath("/rq1-price-poverty-expenditure.png")}
            width={500}
            height={250}
            alt="price vs poverty vs expenditure"
          />
        </div>
        <h3 className="h3 mt-12">Research Question 2</h3>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
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
        </div>
        <h3 className="h3 mt-12">Nutshell Plot</h3>
        <div className="flex justify-center mb-8">
          <Image
            src={getImagePath("/nutshell.svg")}
            width={750}
            height={500}
            alt="nutshell plot"
          />
        </div>
        <p className="p mt-8">Insert Discussion of Hypothesis Testing here</p>
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

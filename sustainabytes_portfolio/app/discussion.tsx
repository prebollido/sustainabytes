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
        <Image
          src={getImagePath("/rq1.png")}
          width={750}
          height={500}
          alt="food price vs poverty incidence through the years"
        />
        <h3 className="h3 mt-12">Research Question 2</h3>
        <Image
          src={getImagePath("/rq2.png")}
          width={750}
          height={500}
          alt="effects of exchange rate vs food products"
        />
        <h3 className="h3 mt-12">Nutshell Plot</h3>
        <Image
          src={getImagePath("/nutshell.svg")}
          width={750}
          height={500}
          alt="nutshell plot"
        />
        <p className="p mt-12">Insert Discussion of Hypothesis Testing here</p>
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

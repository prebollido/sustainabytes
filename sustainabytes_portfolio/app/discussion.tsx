/*
Idea for this: have like slide show like tabs for
  - Plot for rq1
  - Plot for rq 2
  - nutshell plot
  - hypothesis testing
  - regression model

  like  abox with left and right arrows to move to next page
*/

"use client";
import Image from "next/image";
import { getImagePath } from "../utils/imagePath";

export default function Discussion() {
  return (
    <section id="discussion" className="min-h-screen snap-start flex flex-col justify-center items-center relative">
      <div className="z-10 w-[70vw] text-center space-y-8">
        <h1 className="h1 text-center">Discussion</h1>
        <p className="p px-[100px]"></p>
        <h2 className="h2">Exploratory Data Analysis</h2>
        <h3 className="h3 mt-12">Research Question 1</h3>
        <Image
          src={getImagePath("/rq1.png")}
          width={750}
          height={500}
          className="mx-auto block"
          alt="food price vs poverty incidence through the years"
        />
        <h3 className="h3 mt-12">Research Question 2</h3>
        <Image
          src={getImagePath("/rq2.png")}
          width={750}
          height={500}
          className="mx-auto block"
          alt="effects of exchange rate vs food products"
        />
        <h3 className="h3 mt-12">Nutshell Plot</h3>
        <Image
          src={getImagePath("/nutshell.svg")}
          width={750}
          height={500}
          className="mx-auto block"
          alt="nutshell plot"
        />
        <div>
          <p className="p mt-12">
            For the purposes of hypothesis testing, normality tests (Shapiro-Wilk test and skewness tests from the scipy.stats module) were performed on the three variables involved (food price—averaged across categories, poverty incidence in %, and exchange rate). Since the data was not normally distributed, Spearman’s rank correlation coefficient was chosen instead of Pearson’s, although a check was also performed using Pearson’s correlation coefficient on a version of the data normalized using the cube root transformation method. The correlation test was performed on a sample of 90 data points drawn using the pandas sample function with a random seed for replicability. (Note that the documentation warns that the p-value given by the function is not as accurate as a permutation test when using samples smaller than 500 observations.) <br/> <br/>
            Hypothesis #1: The correlation coefficient obtained between the variables average food price and poverty incidence was approximately 0.0519, indicating an extremely weak positive correlation. The p-value calculated by the scipy function was 0.6268; at a confidence level of 0.95 with =0.05, the conclusion is a failure to reject the null hypothesis that the two are not correlated. <br/> <br/>
            Hypothesis #2: The correlation coefficient obtained between the variables exchange rate and average food price was approximately 0.8341, indicating a moderate positive correlation. The p-value calculated by the scipy function was 1.8658x10-24. At a confidence level of 0.95 with =0.05, this allows the rejection of the null hypothesis that the two are not correlated. 

          </p>
          <br />
          <b>Machine Learning</b>
          <br />
          <p className="p mt-12"> Machine Learning Discussion here! </p>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

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
import { useState } from "react"; 

function Slide() {    
  const SLIDES_LENGTH = 3
  const headers = ["How do food price fluctuations affect poverty incidence?", "Which food products are more susceptible to exchange rate fluctuations?", "Food Price in a Nutshell"]
  const image_paths = [getImagePath("/rq1.svg"), getImagePath("/rq2.svg"), getImagePath("/nutshell.svg")]
  const alts = [
    "food price vs poverty incidence through the years", 
    "effects of exchange rate vs food products",
    "nutshell plot", 
  ]
  const [slide, setSlide] = useState(0); 

  const goToNext = () => {
    setSlide((prevIndex) =>
      prevIndex === SLIDES_LENGTH - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setSlide((prevIndex) =>
      prevIndex === 0 ? SLIDES_LENGTH - 1 : prevIndex - 1
    );
  };

  return (
    <div id="slideshowContainer" className="h-[65vh] w-[65vw] object-center bg-(--midground) relative">
      <a id="prev" className="absolute content-center inset-y-0 left-0 w-auto px-[16px] text-[18px] font-bold text-white ease-[0.6s] cursor-pointer select-none hover:bg-[#43695c]" onClick={goToPrev}>&#10094;</a>
      <h3 className="h3 mt-12 pt-[8px]">{headers[slide]}</h3>
      <Image
          src={image_paths[slide]}
          fill
          className="mx-auto block"
          alt={alts[slide]}
      />
      <a id="next" className="absolute content-center inset-y-0 right-0 w-auto px-[16px] text-[18px] font-bold text-white ease-[0.6s] cursor-pointer select-none hover:bg-[#43695c]" onClick={goToNext}>&#10095;</a>          
    </div>
  )
}

function Tables() {
  return (
    <div id="tableDisplay" className="flex flex-col md:flex-row">
      <table className="items-center p-[10px] table-fixed w-[80vw] font-[var(--font-work-sans)]">
        <thead>
          <tr>
            <td rowSpan={2}></td>
            <th colSpan={3} className="bg-(--midground)">2025, Metro Manila</th>
            <th colSpan={3} className="bg-(--midground)">2024, Rizal</th>
            <th colSpan={3} className="bg-(--midground)">2023, Cebu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Actual</td>
            <td>Predicted</td>
            <td>%Error</td>

            <td>Actual</td>
            <td>Predicted</td>
            <td>%Error</td>

            <td>Actual</td>
            <td>Predicted</td>
            <td>%Error</td>
          </tr>
          <tr>
            <td>Beans</td>
            <td>108.896</td>
            <td>102.654</td>
            <td>5.732</td>
            
            <td>114.482</td>
            <td>115.951</td>
            <td>1.283</td>
            
            <td>108.896</td>
            <td>97.803</td>
            <td>10.187</td>
          </tr>
          <tr>
            <td>Cabbages</td>
            <td>73.783</td>
            <td>77.719</td>
            <td>5.334</td>
            
            <td>89.378</td>
            <td>92.041</td>
            <td>2.979</td>
            
            <td>73.783</td>
            <td>66.927</td>
            <td>9.292</td>
          </tr>
          <tr>
            <td>Carrots</td>
            <td>113.866</td>
            <td>110.827</td>
            <td>2.669</td>
            
            <td>110.892</td>
            <td>114.181</td>
            <td>2.966</td>
            
            <td>113.866</td>
            <td>113.631</td>
            <td>0.206</td>
          </tr>
          <tr>
            <td>Eggs</td>
            <td>8.603</td>
            <td>8.326</td>
            <td>3.220</td>
            
            <td>8.496</td>
            <td>8.355</td>
            <td>1.660</td>
            
            <td>8.603</td>
            <td>8.807</td>
            <td>2.371</td>
          </tr>
          <tr>
            <td>Beef Chops</td>
            <td>310.191</td>
            <td>303.665</td>
            <td>2.104</td>
            
            <td>390.879</td>
            <td>397.482</td>
            <td>1.689</td>
            
            <td>310.191</td>
            <td>334.027</td>
            <td>7.684</td>
          </tr>
          <tr>
            <td>Chicken (Whole)</td>
            <td>233.669</td>
            <td>202.542</td>
            <td>13.321</td>
            
            <td>186.921</td>
            <td>189.79</td>
            <td>1.535</td>
            
            <td>233.669</td>
            <td>193.47</td>
            <td>17.203</td>
          </tr>
          <tr>
            <td>Pork</td>
            <td>314.350</td>
            <td>273.688</td>
            <td>12.935</td>
            
            <td>326.508</td>
            <td>332.821</td>
            <td>1.933</td>
            
            <td>314.350</td>
            <td>285.715</td>
            <td>9.109</td>
          </tr>
          <tr>
            <td>Onions</td>
            <td>143.812</td>
            <td>61.331</td>
            <td>57.353</td>
            
            <td>111.074</td>
            <td>118.043</td>
            <td>6.274</td>
            
            <td>143.812</td>
            <td>168.540</td>
            <td>17.195</td>
          </tr>
          <tr>
            <td>Potatoes</td>
            <td>102.428</td>
            <td>105.896</td>
            <td>3.386</td>
            
            <td>124.010</td>
            <td>126.747</td>
            <td>2.207</td>
            
            <td>119.148</td>
            <td>116.413</td>
            <td>2.295</td>
          </tr>
          <tr>
            <td>Rice</td>
            <td>45.718</td>
            <td>67.692</td>
            <td>48.064</td>
            
            <td>47.571</td>
            <td>44.802</td>
            <td>5.821</td>
            
            <td>46.074</td>
            <td>48.299</td>
            <td>4.829</td>
          </tr>
          <tr>
            <td>Tomatoes</td>
            <td>79.293</td>
            <td>103.767</td>
            <td>30.865</td>
            
            <td>87.364</td>
            <td>85.120</td>
            <td>2.569</td>
            
            <td>83.964</td>
            <td>86.211</td>
            <td>2.676</td>
          </tr>
          <tr>
            <td>Annual Per Capita Poverty Threshold</td>
            <td>30759.000</td>
            <td>30024.137</td>
            <td>2.389</td>
            
            <td>39055.000</td>
            <td>39462.190</td>
            <td>1.043</td>
            
            <td>35605.000</td>
            <td>35270.401</td>
            <td>0.940</td>
          </tr>
          <tr>
            <td>Poverty Incidence (%)</td>
            <td>9.400</td>
            <td>10.932</td>
            <td>16.298</td>
            
            <td>5.600</td>
            <td>6.180</td>
            <td>10.357</td>
            
            <td>11.700</td>
            <td>12.817</td>
            <td>9.547</td>
          </tr>
          <tr>
            <td>Magnitude of Poor Families (thousands)</td>
            <td>5.600</td>
            <td>12.687</td>
            <td>126.554</td>
            
            <td>43.940</td>
            <td>41.401</td>
            <td>5.778</td>
            
            <td>157.460</td>
            <td>171.391</td>
            <td>8.847</td>
          </tr>
          <tr>
            <td>Exchange Rate</td>
            <td>57.228</td>
            <td>56.974</td>
            <td>0.444</td>
            
            <td>57.289</td>
            <td>56.916</td>
            <td>0.651</td>
            
            <td>55.631</td>
            <td>55.935</td>
            <td>0.546</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default function Discussion() {
  return (
    <section id="discussion" className="min-h-screen snap-start flex flex-col justify-center items-center relative">
      <div className="z-10 w-[70vw] text-center space-y-8">
        <h1 className="h1 text-center">Discussion</h1>
        <div className="flex flex-col items-center justify-center mb-30">
          <Slide />
        </div>
        <h2 className="h2">Exploratory Data Analysis</h2>
        <div className="w-[75vw] bg-white/15 p-15 rounded-3xl my-5 ml-[-45] items-center mx-auto mb-30">
            <p className="font-[var(--font-karla)] font-normal text-[12pt] pt-[10px] pb-[10px] text-justify" style={{fontWeight: 500}}>
              For the purposes of hypothesis testing, normality tests (Shapiro-Wilk test and skewness tests from the scipy.stats module) were performed on the three variables involved (food price—averaged across categories, poverty incidence in %, and exchange rate). Since the data was not normally distributed, Spearman’s rank correlation coefficient was chosen instead of Pearson’s, although a check was also performed using Pearson’s correlation coefficient on a version of the data normalized using the cube root transformation method. The correlation test was performed on a sample of 90 data points drawn using the pandas sample function with a random seed for replicability. (Note that the documentation warns that the p-value given by the function is not as accurate as a permutation test when using samples smaller than 500 observations.) <br/> <br/>
              <b><em>Hypothesis #1:</em></b><br/>
              The correlation coefficient obtained between the variables average food price and poverty incidence was approximately 0.0519, indicating an extremely weak positive correlation. The p-value calculated by the scipy function was 0.6268; at a confidence level of 0.95 with α=0.05, the conclusion is a failure to reject the null hypothesis that the two are not correlated. <br/> <br/>
              <b><em>Hypothesis #2:</em></b><br/>
                The correlation coefficient obtained between the variables exchange rate and average food price was approximately 0.8341, indicating a moderate positive correlation. The p-value calculated by the scipy function was 1.8658 x 10<sup>-24</sup>. At a confidence level of 0.95 with α=0.05, this allows the rejection of the null hypothesis that the two are not correlated. 
            </p>
        </div>
        <h2 className="h2">Machine Learning</h2>
        <div className="w-[75vw] bg-white/15 p-15 rounded-3xl my-5 ml-[-45] items-center mx-auto">
          <p className="font-[var(--font-karla)] font-normal text-[12pt] text-justify" style={{fontWeight: 500}}>
            Detailed in the following tables are a given year and province, the actual values of a row in the dataset 
            from that year and province (chosen at random if there are more than one), the values predicted by the model, and, underneath,
             the average root mean squared error of all predictions across categories. <br/> <br/>
          Numbers are rounded to the nearest thousandths (i.e. to 3 decimal places). </p>
          </div>
          <Tables />
          <div className="w-[75vw] bg-white/15 p-15 rounded-3xl my-5 ml-[-45] items-center mx-auto">
            <p className="font-[var(--font-karla)] font-normal text-[12pt] text-justify" style={{fontWeight: 500}}>
              In the case of “Metro Manila, 2025”, the predictions are not as accurate as hoped, with 7 out of 15 predictions having an 
              error margin higher than 10%. However, for “Rizal, 2024” and “Cebu, 2023”, there are only 1 and 3 predictions, respectively 
              with a similar error margin, and the others have less error. It is possible that the NCR’s data has a higher rate of 
              variability or is affected more by other factors than data from other provinces of previous years, which could explain the 
              higher error overall. Otherwise, an error margin of 10% or less represents in most cases a difference of up to 50 pesos, 
              which does not seem unacceptable given how prices can vary throughout a year. <br/> 
              <br/>
              More concerning is the error in predicting poverty incidence and number of poverty-stricken families, 
              which is among the highest errors in each test comparison, and which represents hundreds or perhaps thousands of individuals. 
              The weakness of the model’s prediction in this situation suggests, similarly to the hypothesis testing, that more factors 
              than food pricing and exchange rates are at play when anticipating need, and a model intended to assist in doing so must be 
              tuned to these other factors as well. 
            </p>
          </div>
        </div>
    </section>
  );
}

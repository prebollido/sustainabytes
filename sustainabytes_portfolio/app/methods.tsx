/*
Idea for this: have like slide show like tabs for
  - Hypothesis
  - Samplign Method
  - Data Cleaning and Preprocessing
  - EDA
  - ML

  like  abox with left and right arrows to move to next page
*/

"use client";

import { useState } from "react";  

function Hypotheses() {
  return (
    <p className="p px-[100px] w-full pt-[10px] pb-[10px]">
      <b>Hypootheses</b><br/>
      Poverty incidence is affected by food price. <br/>
      Food price is affected by exchange rate. <br/>
    </p>
  )
}

function Sampling() {
  return (
    <p className="p px-[100px] pt-[10px] pb-[10px]">
      <b>Sampling method</b><br/>
      The datasets used in this study were obtained via convenience sampling, as only publicly available datasets were considered. These datasets were obtained from reputable agencies that gathered the data through surveys and consensus. <br/>
      The Real Time Prices (RTP) of food and currency taken from humdata.org are live datasets compiled and updated weekly by the World Bank Development Economics Data Group (DECDG) using direct price measurements and price estimates of missing data using Machine Learning. Historical and recent price estimates are based on price information sourced from the World Food Program (WFP), the UN Food and Agriculture Organization (FAO), and the Philippine Statistics Agency. The data and estimates are continually updated and revised based on new price information. On the other hand, real-time exchange rates are sourced from official and public sources. Specifically,  Real Time Food Prices (RTFP) includes prices of a variety of food items that primarily include country-specific staple foods, and Real Time Exchange Rates (RTFX) includes unofficial exchange rate estimates as well as possible other unofficial deflators (World Bank, 2025). <br/>
      The metadata for the Poverty Incidence data set is not publicly available. However, given the survey timeframe and samples, it may be inferred that the same sampling and survey techniques are used in obtaining the Poverty Incidence data as the Family Income and Expenditure Survey (FIES). The FIES surveys the Annual Family Expenditure data. However, in the most recent survey, the 2023 FIES,  data collection was conducted biannually, unlike the previous iterations. On all surveys, the same set of questions was asked. The household-based survey design is a two-stage cluster sampling design with barangays or groups of nearby barangays as the Primary Sampling Unit (PSU) and housing units as the Secondary Sampling Unit (SSU). (PSA, 2023) <br/>
    </p>
  )
}

function DataPrep() {
  return (
    <p className="p px-[100px] pt-[10px] pb-[10px]">
      <b>Data Cleaning and Preprocessing</b><br/>
      <em>Data Preprocessing</em><br/>
      Since the household expenditure data from PSA is not continuous and are already averaged annually, the data were interpolated to complete the data from 2015 to 2025. This was done through linear interpolation. The interpolated values were assigned to all months within the corresponding year from 2015 to 2025, so that each month has the same value for the year. <br/>
      <br/>
      <em>Data Cleaning</em><br/>
      For the Real Time Prices data sets from HDX, all empty columns, such as nonlocal food product prices, were removed. Data dated beyond the project scope were not included. Moreover, the sparse columns were then filled with the national average per column. <br/>
    </p>
  )
}

function EDA() {
  return (
    <p className="p px-[100px] pt-[10px] pb-[10px]">
      <b>Exploratory Data Analysis</b><br/>
      Data preprocessing and cleaning partially explore the data. The exploratory data analysis focuses on understanding distributions, relationships, and patterns.<br/>
      <br/>
      <em>Data Description</em><br/>
      The data was described by data category: food prices, exchange rate, household expenditure, poverty incidence, and import dependencies. Measures of central tendency, interesting points, and generalizations was duly noted.<br/>
      <br/>
      <em>Data Plots</em><br/>
      For the first research question, the food prices are averaged and plotted in a scatter plot vs. poverty incidence for each year. Then, the regression line for each year is taken and collated in one plot to show the different trends of food prices vs poverty over the years. For the second research question, the slope of the regression line for each exchange rate vs. food product was computed. The results were then plotted in a bar chart to show side-by-side comparisons. Given these, a nutshell plot was also created to show the general vision of the project. The nutshell plot consists of the plot from the first research question and a list of the top five food products most susceptible to exchange rate fluctuations. <br/>
    </p>
  )
}

function ML() {
  return (
    <p className="p px-[100px] pt-[10px] pb-[10px]">      
      <b>Hypothesis Testing</b><br/>
      Finally, to quantify the relationship between the variables, hypothesis testing was conducted with a confidence level of 0.05.  The sampling distribution was generated by taking 500 different sample breaks of size 100 each and then generating a corresponding histogram. The sampling distribution is done to approximate normality and allow the use of standard parametric tests. For the first hypothesis, use the Pearson correlation test for Food Price vs. Household Expenditure. For the second hypothesis, use linear regression for each food product. Finally, assess statistical significance and decide whether to reject the null hypothesis at α = 0.05. <br/>
      <br/>
      <b>Machine Learning and Modeling</b><br/>
      Machine learning was used to design a regression model capable of simulating different economic scenarios related to food security. The given dataset was split into a 70-30 training and test set. The data was divided through stratified splitting by year to ensure that the training and test sets cover data from every year available. <br/>
      Both logarithmic and linear regression models were fitted for each hypothesis on the training set, then evaluated on the test set. The root mean square error (RMSE) of the model on both the training and test sets was then calculated. The parameters are then tuned to ensure that the RMSE remains within two standard deviations of the mean values. After the models were validated, the most effective model was selected and refitted on the entire dataset. Finally, the model was used to simulate different economic scenarios, and the corresponding RMSE was computed to assess predictive reliability.<br/>
    </p>
  )
}

function Slide() {    
  const slides = [Hypotheses(), Sampling(), DataPrep(), EDA(), ML()]
  const [slide, setSlide] = useState(0); 

  const goToNext = () => {
		setSlide((prevIndex) =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPrev = () => {
		setSlide((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

  return (
    <div id="slideshowContainer" className="h-[80svh] w-[80svw] object-center bg-(--midground) outline relative overflow-y-scroll">
      <a id="prev" className="absolute content-center inset-y-0 left-0 w-auto px-[16px] text-[18px] font-bold text-white ease-[0.6s] cursor-pointer select-none" onClick={goToPrev}>&#10094;</a>
      {slides[slide]}
      <a id="next" className="absolute content-center inset-y-0 right-0 w-auto px-[16px] text-[18px] font-bold text-white ease-[0.6s] cursor-pointer select-none" onClick={goToNext}>&#10095;</a>          
    </div>
  )
}

export default function Method() {
  return (
    <section id="methodology" className="snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Methodology</h1>
          <Slide />
        </div>
    </section>
  );
}

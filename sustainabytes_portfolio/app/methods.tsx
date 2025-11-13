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

export default function Method() {
  return (
    <section id="methodology" className=" snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Methodology</h1>
          <p className="p px-[100px]">
            <b>Hypootheses</b><br/>
            Poverty incidence and household expenditure are affected by food price. <br/>
            Food price is affected by exchange rate and import dependencies. <br/>
            <br/>
            <b>Sampling method</b><br/>
            The datasets used in this study were obtained via convenience sampling, as only publicly available datasets were considered. These datasets were obtained from reputable agencies that gathered the data through surveys and consensus. <br/>
            The Real Time Prices (RTP) of food and currency taken from humdata.org are live datasets compiled and updated weekly by the World Bank Development Economics Data Group (DECDG) using direct price measurements and price estimates of missing data using Machine Learning. Historical and recent price estimates are based on price information sourced from the World Food Program (WFP), the UN Food and Agriculture Organization (FAO), and the Philippine Statistics Agency. The data and estimates are continually updated and revised based on new price information. On the other hand, real-time exchange rates are sourced from official and public sources. Specifically,  Real Time Food Prices (RTFP) includes prices of a variety of food items that primarily include country-specific staple foods, and Real Time Exchange Rates (RTFX) includes unofficial exchange rate estimates as well as possible other unofficial deflators (World Bank, 2025). <br/>
            The Annual Family Expenditure data is taken from the PSA’s triennial Family Income and Expenditure Survey (FIES). However, in the most recent survey, the 2023 FIES,  data collection was conducted biannually, unlike the previous iterations. On all surveys, the same set of questions was asked. The household-based survey design is a two-stage cluster sampling design with barangays or groups of nearby barangays as the Primary Sampling Unit (PSU) and housing units as the Secondary Sampling Unit (SSU) (PSA, 2023). The metadata for the Poverty Incidence data set is not publicly available. However, given the survey timeframe and samples, it may be inferred that the same sampling and survey techniques are used in the FIES. <br/>
            <br/>
            <b>Data Cleaning and Preprocessing</b><br/>
            <em>Data Preprocessing</em><br/>
            Since the household expenditure and poverty incidence data from PSA are not continuous and are already averaged annually, the data were interpolated to complete the data from 2018 to 2023 and extrapolated to fill the data from 2015 to 2017 and 2024 to 2025. This was done through natural cubic spline interpolation and logarithmic regression extrapolation. The interpolated and extrapolated annual values were assigned to all months within the corresponding year from 2015 to 2025, so that each month has the same value for the year.<br/>
            <br/>
            <em>Data Cleaning</em><br/>
            For the Real Time Prices data sets from HDX, all empty columns, such as nonlocal food product prices, were removed. Data dated beyond the project scope were not included. Moreover, the sparse columns were then replaced with the appropriate measure of central tendency per column. For the collated dataset, categorical data (e.g., month, region, type of food product) were mapped to and replaced with dummy variables. Lastly, outliers beyond two standard deviations were examined for possible causes and removed only when the data significantly deviates from the trend.<br/>
            <br/>
            <b>Exploratory Data Analysis</b><br/>
            Data preprocessing and cleaning partially explore the data. The exploratory data analysis focuses on understanding distributions, relationships, and patterns.<br/>
            <br/>
            <em>Data Description</em><br/>
            The data was described by data category: food prices, exchange rate, household expenditure, poverty incidence, and import dependencies. Measures of central tendency, interesting points, and generalizations was duly noted.<br/>
            <br/>
            <em>Data Plots</em><br/>
            Each research question and corresponding hypothesis were plotted in a scatterplot to visualize the relationship between the independent and dependent variables. More specifically, the first research question explored how food price fluctuations affect poverty incidence and household expenditure. As for the second research question, it determined what food products are more likely to be impacted by exchange rate fluctuations and import dependency. Given the data description and scatterplots, a nutshell plot was presented to summarize the key findings of the EDA. <br/>
            <br/>
            <b>Hypothesis Testing</b><br/>
            Finally, to quantify the relationship between the variables, hypothesis testing was conducted with a confidence level of 0.05.  The sampling distribution was generated by taking 500 different sample breaks of size 100 each and then generating a corresponding histogram. The sampling distribution is done to approximate normality and allow the use of standard parametric tests. For the first hypothesis, use the Pearson correlation test for Food Price vs. Household Expenditure and Food Price vs. Poverty Incidence. For the second hypothesis, use multiple linear regression for each food product. Finally, assess statistical significance and decide whether to reject the null hypothesis at α = 0.05. <br/>
            <br/>
            <b>Machine Learning and Modeling</b><br/>
            Machine learning was used to design a regression model capable of simulating different economic scenarios related to food security. The given dataset was split into a 70-30 training and test set. The data was divided through stratified splitting by year to ensure that the training and test sets cover data from every year available. 
            Both logarithmic and linear regression models were fitted for each hypothesis on the training set, then evaluated on the test set. The root mean square error (RMSE) of the model on both the training and test sets was then calculated. The parameters are then tuned to ensure that the RMSE remains within two standard deviations of the mean values. After the models were validated, the most effective model was selected and refitted on the entire dataset. Finally, the model was used to simulate different economic scenarios, and the corresponding RMSE was computed to assess predictive reliability.<br/>

          </p>
        </div>
    </section>
  );
}

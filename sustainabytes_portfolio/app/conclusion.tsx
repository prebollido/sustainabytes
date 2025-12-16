/*
Idea for this: paragraph style. just write down summary of conclusion and recommendations
*/

"use client";

export default function Conclusion() {
  return (
    <section id="conclusion" className="h-screen snap-start flex flex-col justify-center items-center relative mt-[100px]">
        <div className="z-10 text-center">
          <h1 className="h1">Conclusion</h1>
          <div>
          <p className="p px-[100px]">
            The research discovered that from 2015 to 2025, there is no single consistent correlation between food prices and household 
            expenditure as the correlation fluctuated across the given time period. The relationship between the two variables is most 
            likely dependent on how the Philippine economy was faring during certain times, such as economic policies changing food 
            prices during a certain time and the pandemic affecting the prices of goods, thus predicting that the relationship may be 
            context-dependent. This means it may be important to determine the context as this could be the key to creating policies and 
            action plans for controlling the unknown driving factors causing food prices to affect household expenditure in a certain way. 
          </p>
          <p className="p px-[100px] mt-6">
            Meanwhile, exchange rate fluctuations have a noticeable massive effect on the prices of certain food products, which include 
            a lot of those needed for the Filipino diet. This means if these fluctuations are not handled with care, it will most likely 
            be easy for a family to develop financial problems as they will face more difficulties in ensuring they are well-fed. It 
            becomes paramount to develop certain strategies to ensure that the most susceptible food products remain  in abundance, so 
            that the diets of these families do not suffer significantly. If this is not done, they may resort to eating other food that 
            may not give them enough nourishment. 
          </p>
          <p className="p px-[100px] mt-6">
            Figuring out the relationship between food prices and household expenditure as well as exchange rate fluctuations in the 
            Philippines is also important in showing how drastic the Filipino household budget adapts to certain changes. This gives 
            patterns that predict how much Filipinos have to spend when food prices and exchange rates shift. Understanding these patterns help economists,  government officials, and NGOs to estimate how much assistance to give to the Filipinos for them to adjust properly to the gravity of future fluctuations. The country will then have better socioeconomic foresight needed to reduce the impact of these fluctuations on the Filipinos in a timely manner. 

            To improve this research project, one can investigate the contextual factors contributing to the relationship between food 
            prices and household expenditure to have a more holistic view on their correlation, considering they do not have a linear 
            relationship. This can give them insights on what situations change the way the Philippine economy shifts and eventually 
            impacts the budget of families, so that interventions could be made based on the context. In addition, one can also determine 
            the top 5 regions in the country most affected by correlations among food prices, household expenditure, and exchange rates 
            for policy makers to know which regions must be given the most attention when these variables fluctuate.
          </p>
          </div>
        </div>
    </section>
  );
}

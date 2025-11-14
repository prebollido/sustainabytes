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

export default function Discussion() {
  return (
    <section id="discussion" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">Discussion</h1>
          <p className="p px-[100px]">
            <b>Exploratory Data Analysis</b><br/>
            Insert Plots here <br/>
            Insert Discussion of Hypothesis Testing here <br/>
            <br/>
            <b>Machine Learning</b><br/>
            Machine Learning Discussion here!<br/>
            <br/>
          </p>
        </div>
      </section>
  );
}

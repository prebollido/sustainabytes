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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
      </section>
  );
}

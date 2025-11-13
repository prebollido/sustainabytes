/*
Idea for this: row members. for each member include
  - name
  - photo
  - one quote regarding the project
*/

"use client";

export default function About() {
  return (
    <section id="team" className="h-screen snap-start flex flex-col justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="h1">The Team</h1>
          <p className="p px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus urna, dignissim ac efficitur at, eleifend vel mi. Donec at elementum nisl. Cras in ullamcorper ex. Praesent porta eget justo pharetra tristique. Suspendisse dictum neque vel nisi tincidunt egestas. Sed fringilla nunc metus, quis vestibulum ligula pharetra vitae. Curabitur faucibus diam metus, sed dapibus diam tempus tempor. Nunc efficitur ex id sapien fringilla cursus. Nulla venenatis faucibus nulla. Sed dapibus a libero in congue. Nulla a diam eu enim convallis condimentum. Donec pellentesque maximus purus non sollicitudin. Phasellus vehicula ex tristique tristique placerat. Phasellus eu tempus diam.
          </p>
        </div>
    </section>
  );
}

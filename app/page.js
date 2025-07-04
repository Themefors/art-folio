"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="bg-cover bg-center mx-0 mt-0 md:mx-5 md:mt-5 h-screen rounded-t-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/home_bg.svg')`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          {/* Heading with Box Reveal */}
          <BoxReveal boxColor={"#E436A2"} duration={0.5}>
            <h1 className="text-4xl sm:text-5xl md:text-[88px] text-black font-medium leading-tight">
              It’s{" "}
              <span className="text-[#E436A2] bg-white px-7 py-5 rounded-full inline-block">
                Humaira
              </span>
            </h1>
          </BoxReveal>

          {/* Sub-heading */}
          <BoxReveal boxColor={"#E436A2"} duration={0.5}>
            <h2 className="text-3xl sm:text-4xl md:text-[88px] text-black font-normal leading-tight mt-5">
              Your Vision, My Design
            </h2>
          </BoxReveal>

          {/* Paragraph */}
          <BoxReveal>
            <div className="flex justify-center">
              <p className="text-base sm:text-[17px] md:text-[18px] text-[#343434] mt-6 w-full md:w-[90%] lg:w-[75%] xl:w-[51%] max-w-full text-center">
                With 4 years of experience, I design impactful brand identities
                that combine creativity and strategy. I craft logos, visuals,
                and systems that help businesses stand out with clarity,
                purpose, and style.
              </p>
            </div>
          </BoxReveal>
        </div>
      </section>
    </main>
  );
}

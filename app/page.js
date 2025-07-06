// app/page.js or pages/index.js
"use client"; // for Next.js App Router

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import CaseStudies from "@/Components/CaseStudies/CaseStudies";
import Faq from "@/Components/Faq/Faq";
import Hero from "@/Components/Hero/Hero";
import Parteners from "@/Components/Parteners/Parteners";
import Review from "@/Components/Review/Review";
import Services from "@/Components/Services/Services";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Hero />
          <Parteners />
          <Services />
          <CaseStudies />
          <Review />
          <Faq />
        </main>
      </div>
    </div>
  );
}

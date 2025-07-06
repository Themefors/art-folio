"use client"
// import { useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollSmoother } from "gsap/ScrollSmoother"
import CustomCursor from "@/Components/CustomCursor/CustomCursor"
import Hero from "@/Components/Hero/Hero"
import Services from "@/Components/Services/Services"
import CaseStudies from "@/Components/CaseStudies/CaseStudies"
import Review from "@/Components/Review/Review"
import Faq from "@/Components/Faq/Faq"
import Parteners from "@/Components/Parteners/Parteners"


// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
//  useEffect(() => {
//     ScrollSmoother.create({
//       wrapper: "#smooth-wrapper",
//       content: "#smooth-content",
//       smooth: 1.2,
//       effects: true,
//     })
//   }, []) 

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Parteners/>
            <Services />
            <CaseStudies />
            <Review />
            <Faq />
          </main>
        </div>
      </div>
    </>
  )
}

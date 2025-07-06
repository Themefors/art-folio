"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import images from "@/public/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Partners = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const marquee = marqueeRef.current

    // Set initial states
    gsap.set(heading, { y: 50, opacity: 0 })
    gsap.set(marquee, { y: 30, opacity: 0 })

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate heading
    tl.to(heading, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })

    // Animate marquee
    tl.to(
      marquee,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-14">
      {/* Background color div with full width */}
      <div className=" p-5 text-center w-full py-14">
        <h2
          ref={headingRef}
          className="bg-[#E1FFF3] text-2xl lg:text-[18px] font-normal rounded-full px-6 py-3 inline-block"
        >
          Our Trusted partners
        </h2>
      </div>
      <div ref={marqueeRef}>
        <Marquee>
          <Image src={images?.svg?.cldBank || "/placeholder.svg"} alt="cld bank" className="w-60" />
          <Image src={images?.svg?.dailMail || "/placeholder.svg"} alt="daily mail" className="w-60" />
          <Image src={images?.svg?.inman || "/placeholder.svg"} alt="inman" className="w-60" />
          <Image src={images?.svg?.realtyGroup || "/placeholder.svg"} alt="realty group" className="w-60" />
          <Image src={images?.svg?.usaToday || "/placeholder.svg"} alt="usa today" className="w-60" />
        </Marquee>
      </div>
    </section>
  )
}

export default Partners

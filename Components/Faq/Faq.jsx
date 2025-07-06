"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const titleRef = useRef(null)
  const faqRefs = useRef([])
  const sectionRef = useRef(null)

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "I specialize in graphic design services such as logo design, brand identity, social media design, packaging, and UI design for websites and mobile apps.",
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer:
        "It depends on the complexity of the project. Most branding and design tasks are completed within 3 to 7 business days.",
    },
    {
      id: 3,
      question: "What tools do you use for design?",
      answer:
        "I use tools like Adobe Illustrator, Photoshop, Figma, and After Effects to deliver high-quality and industry-standard designs.",
    },
    {
      id: 4,
      question: "Do you offer revisions?",
      answer:
        "Yes, I provide 2-3 free revisions depending on the project type. My goal is to make sure you're 100% satisfied with the final result.",
    },
    {
      id: 5,
      question: "How can I hire you for a project?",
      answer:
        "You can reach out to me through my contact form, LinkedIn, or email. Once I understand your requirements, I'll share a quote and timeline.",
    },
    {
      id: 6,
      question: "Do you require an advance payment?",
      answer:
        "Yes, I usually take a 50% advance to confirm the project and the rest upon delivery. Payment methods include bKash, Payoneer, and bank transfer.",
    },
  ]

  useEffect(() => {
    const title = titleRef.current
    const section = sectionRef.current

    // Title entrance animation
    gsap.fromTo(
      title,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // FAQ items stagger animation
    gsap.fromTo(
      faqRefs.current,
      { opacity: 0, y: 60, x: -50 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const toggleFaq = (index) => {
    const faqItem = faqRefs.current[index]
    const answer = faqItem?.querySelector(".faq-answer")
    const icon = faqItem?.querySelector(".faq-icon")

    if (activeIndex === index) {
      // Close current FAQ
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(faqItem, {
        backgroundColor: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      })
      setActiveIndex(null)
    } else {
      // Close previously active FAQ
      if (activeIndex !== null) {
        const prevFaq = faqRefs.current[activeIndex]
        const prevAnswer = prevFaq?.querySelector(".faq-answer")
        const prevIcon = prevFaq?.querySelector(".faq-icon")

        gsap.to(prevAnswer, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
        gsap.to(prevIcon, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(prevFaq, {
          backgroundColor: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        })
      }

      // Open new FAQ
      gsap.set(answer, { height: "auto" })
      const autoHeight = answer.offsetHeight
      gsap.set(answer, { height: 0 })

      gsap.to(answer, {
        height: autoHeight,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(icon, {
        rotation: 45,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(faqItem, {
        backgroundColor: "#fdf2f8",
        duration: 0.3,
        ease: "power2.out",
      })
      setActiveIndex(index)
    }
  }

  const handleMouseEnter = (index) => {
    if (activeIndex !== index) {
      const faqItem = faqRefs.current[index]
      gsap.to(faqItem, {
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(228, 54, 162, 0.15)",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = (index) => {
    if (activeIndex !== index) {
      const faqItem = faqRefs.current[index]
      gsap.to(faqItem, {
        scale: 1,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-bold text-[#0B1838] leading-tight uppercase"
          >
            Frequently Ask
            <br />
            <span className="text-[#E436A2]">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (faqRefs.current[index] = el)}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer transition-all duration-300"
              onClick={() => toggleFaq(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="faq-icon flex-shrink-0 w-8 h-8 bg-[#E436A2] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {/* Answer */}
              <div className="faq-answer overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#E436A2]/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#E436A2]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#E436A2]/15 to-transparent rounded-full blur-lg"></div>
      </div>
    </section>
  )
}

export default Faq

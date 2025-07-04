"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import images from "@/public/images"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const navbarRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Me", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "services", label: "Services", href: "#services" },
    { id: "contact", label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const navbar = navbarRef.current

    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 50) {
        setIsScrolled(true)
        gsap.to(navbar, {
          duration: 0.3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          ease: "power2.out",
        })
      } else {
        setIsScrolled(false)
        gsap.to(navbar, {
          duration: 0.3,
          backdropFilter: "blur(0px)",
          backgroundColor: "transparent",
          ease: "power2.out",
        })
      }

      // Active section detection
      const sections = menuItems.map((item) => item.id)
      let currentSection = ""

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            currentSection = sections[i]
            break
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    const mobileMenu = mobileMenuRef.current

    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true)
      gsap.fromTo(mobileMenu, { x: "100%" }, { x: "0%", duration: 0.3, ease: "power2.out" })
    } else {
      gsap.to(mobileMenu, {
        x: "100%",
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => setIsMobileMenuOpen(false),
      })
    }
  }

  const closeMobileMenu = () => {
    const mobileMenu = mobileMenuRef.current
    gsap.to(mobileMenu, {
      x: "100%",
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => setIsMobileMenuOpen(false),
    })
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-6 transition-all duration-300 ${
        isScrolled ? "py-6" : "py-14"
      }`} >
        <div className="container mx-auto relative">
          {/* Border line - only when not scrolled */}
          {!isScrolled && <div className="absolute -bottom-10 left-0 right-0 h-[1px] bg-white mt-5"></div>}

          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-black">
              <Image src={images?.svg?.logo || "/placeholder.svg"} alt="logo" className="w-28 md:w-40 h-auto" />
            </div>

            {/* Navigation Menu - Desktop Only (lg and above) */}
            <div className="hidden lg:flex items-center space-x-8 bg-white rounded-full px-8 py-4">
              {menuItems.slice(1).map((item, index) => (
                <div key={item.id} className="flex items-center">
                  {index > 0 && <span className="text-pink-500 mr-8">•</span>}
                  <Link
                    href={item.href}
                    className={`text-[18px] transition-colors duration-200 ${
                      activeSection === item.id ? "text-[#e436a2]" : "text-gray-800 hover:text-[#e436a2]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right side - Book A Call + Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Book A Call Button - Show on md and above */}
              <button className="hidden md:block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-200 transform hover:scale-105">
                Book A Call
              </button>

              {/* Mobile/Tablet Menu Button - Show on lg and below */}
              <button onClick={toggleMobileMenu} className="lg:hidden text-gray-800 z-60">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#acacac63] bg-opacity-50 z-40 lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile/Tablet Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform translate-x-full"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Image src={images?.svg?.logo || "/placeholder.svg"} alt="logo" className="w-24 h-auto" />
            <button onClick={closeMobileMenu} className="text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-6 p-6 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className={`text-xl transition-colors duration-200 ${
                  activeSection === item.id ? "text-[#e436a2]" : "text-gray-800 hover:text-[#e436a2]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Book A Call Button - Only show on mobile (sm and below) */}
          <div className="p-6 border-t md:hidden">
            <button
              onClick={closeMobileMenu}
              className="w-full bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-200"
            >
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

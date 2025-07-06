"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import images from "@/public/images"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [quickLinksOpen, setQuickLinksOpen] = useState(false)

  useEffect(() => {
    const footer = footerRef.current
    const content = contentRef.current

    // Set initial state
    gsap.set(content, { y: 50, opacity: 0 })

    // Animate on scroll
    gsap.to(content, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="mb-10">
                {/* Logo */}
                <div className="flex flex-col items-start mb-8">
                  <Link href="/" className="mb-4">
                    <Image
                      src={images?.svg?.logo}
                      alt="logo"
                      width={160}
                      height={60}
                      className="w-28 md:w-40 h-auto invert"
                    />
                  </Link>
                  <p className="text-purple-300 font-medium">Creative Design Studio</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-10 text-lg max-w-md">
                  We craft extraordinary digital experiences that captivate, inspire, and drive meaningful connections
                  between brands and their audiences.
                </p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div className="text-center group">
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        150+
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-sm text-purple-300 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        500+
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-sm text-purple-300 font-medium">Projects Done</div>
                  </div>
                  <div className="text-center group">
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        5+
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-sm text-purple-300 font-medium">Years Experience</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email Us</div>
                      <div className="text-purple-300">hello@shahriar.design</div>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Visit Us</div>
                      <div className="text-purple-300">Dhaka, Bangladesh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Quick Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services */}
                <div className="relative">
                  {/* Desktop Header */}
                  <div className="hidden lg:block mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <div className="w-3 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                      Our Services
                    </h4>
                    <p className="text-purple-300 text-sm">What we do best</p>
                  </div>

                  {/* Mobile/Tablet Accordion Header */}
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="lg:hidden w-full text-left flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 mb-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-white flex items-center">
                        <div className="w-3 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-3"></div>
                        Our Services
                      </h4>
                      <p className="text-purple-300 text-sm">What we do best</p>
                    </div>
                    <div
                      className={`w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 border border-white/10 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Content */}
                  <div className={`${servicesOpen ? "block" : "hidden"} lg:block space-y-3`}>
                    {[
                      { name: "Logo Design", desc: "Memorable brand identities" },
                      { name: "Web Design", desc: "Stunning digital experiences" },
                      { name: "UI/UX Design", desc: "User-centered interfaces" },
                      { name: "Brand Identity", desc: "Complete brand systems" },
                      { name: "Social Media", desc: "Engaging visual content" },
                    ].map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
                      >
                        <div>
                          <div className="font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-purple-300">{service.desc}</div>
                        </div>
                        <svg
                          className="w-5 h-5 text-purple-400 group-hover:text-pink-400 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="relative">
                  {/* Desktop Header */}
                  <div className="hidden lg:block mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                      Quick Links
                    </h4>
                    <p className="text-purple-300 text-sm">Navigate easily</p>
                  </div>

                  {/* Mobile/Tablet Accordion Header */}
                  <button
                    onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                    className="lg:hidden w-full text-left flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 mb-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-white flex items-center">
                        <div className="w-3 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                        Quick Links
                      </h4>
                      <p className="text-purple-300 text-sm">Navigate easily</p>
                    </div>
                    <div
                      className={`w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 border border-white/10 ${
                        quickLinksOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Content */}
                  <div className={`${quickLinksOpen ? "block" : "hidden"} lg:block space-y-3`}>
                    {[
                      { name: "About Us", desc: "Our story & mission" },
                      { name: "Portfolio", desc: "Featured projects" },
                      { name: "Pricing", desc: "Service packages" },
                      { name: "Contact", desc: "Get in touch" },
                      { name: "Blog", desc: "Design insights" },
                    ].map((link, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div>
                          <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {link.name}
                          </div>
                          <div className="text-sm text-purple-300">{link.desc}</div>
                        </div>
                        <svg
                          className="w-5 h-5 text-purple-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-16">
          <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Stay{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Creative!
                  </span>
                </h4>
                <p className="text-white/90 leading-relaxed text-lg">
                  Join our creative community for exclusive design tips, industry insights, and early access to our
                  latest projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 focus:bg-white/30"
                />
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Footer */}
        <div className="border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side - Year Info */}
            <p className="text-sm text-purple-400 text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved by TeachFosys
            </p>

            {/* Right Side - Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

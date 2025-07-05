"use client"
import { BoxReveal } from "@/components/magicui/box-reveal"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import MarqueeSlide from "../Marquee/Marquee"

export default function Hero() {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
  ]

  return (
    <main className="relative">
      <section
        id="home"
        className="bg-cover bg-center mx-0 mt-0 md:mx-5 md:mt-5 rounded-t-2xl overflow-hidden"
        style={{ backgroundImage: `url('/home_bg.svg')` }}
      >
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center pt-40 text-center px-4">
          <BoxReveal boxColor={"#E436A2"} duration={0.5}>
            <h1 className="text-4xl sm:text-5xl md:text-[88px] text-black font-medium leading-tight">
              It's <span className="text-[#E436A2] bg-white px-7 py-5 rounded-full inline-block">Humaira</span>
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#E436A2"} duration={0.5}>
            <h2 className="text-3xl sm:text-4xl md:text-[88px] text-black font-normal leading-tight mt-5">
              Your Vision, My Design
            </h2>
          </BoxReveal>
          <BoxReveal>
            <div className="flex justify-center">
              <p className="text-base sm:text-[17px] md:text-[18px] text-[#343434] mt-6 w-full md:w-[90%] lg:w-[75%] xl:w-[51%] max-w-full text-center">
                With 4 years of experience, I design impactful brand identities that combine creativity and strategy. I
                craft logos, visuals, and systems that help businesses stand out with clarity, purpose, and style.
              </p>
            </div>
          </BoxReveal>
        </div>

        {/* Image Slider - Mobile Responsive */}
        <div className="flex justify-center mt-8 md:mt-12 px-2 md:px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-lg w-full max-w-7xl h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[70vh]">
            <Swiper
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper rounded-xl md:rounded-2xl h-full w-full"
              style={{
                "--swiper-pagination-color": "#E436A2",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "6px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",
              }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`Portfolio image ${image.id}`}
                      fill
                      className="object-cover rounded-xl md:rounded-2xl"
                      sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                      priority={image.id === 1}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Marquee Overlapping Bottom of Slider - Mobile Responsive */}
      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-10 xl:-bottom-10 left-0 right-0 rotate-[-1deg] sm:rotate-[-1.5deg] md:rotate-[-2deg] z-20 overflow-hidden">
        <div className="w-[110%] -ml-[5%]">
          <MarqueeSlide />
        </div>
      </div>
    </main>
  )
}

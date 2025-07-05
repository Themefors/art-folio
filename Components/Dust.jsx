{/* Image Slider */}
        {/* <div className="flex justify-center mt-12 px-4">
          <div className="bg-white rounded-3xl p-4 shadow-lg max-w-7xl w-full h-[70vh]">
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
              className="mySwiper rounded-2xl h-full"
              style={{
                "--swiper-pagination-color": "#E436A2",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative w-full h-64 md:h-80 lg:h-full">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`Portfolio image ${image.id}`}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={image.id === 1}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}


        <div>
              {/* <MarqueeSlide/> */}
      </div>



import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import MarqueeSlide from "../Marquee/Marquee"
import { Swiper, SwiperSlide } from "swiper/react"

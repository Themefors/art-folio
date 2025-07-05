const Services = () => {
  const services = [
    {
      id: 1,
      title: "Logo Design",
      description: "Crafting unique and memorable logos that represent your brand's identity and values.",
      icon: "🖋️",
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Complete branding solutions including color palette, typography, and brand guidelines.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Social Media Design",
      description: "Eye-catching social media graphics for Instagram, Facebook, and more.",
      icon: "📱",
    },
    {
      id: 4,
      title: "Business Card Design",
      description: "Professional and elegant business card layouts to leave a lasting impression.",
      icon: "💼",
    },
    {
      id: 5,
      title: "Poster & Flyer Design",
      description: "Attractive posters and flyers for events, products, and campaigns.",
      icon: "📄",
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "User-friendly and modern UI designs for web and mobile apps.",
      icon: "🧩",
    },
  ]

  return (
    <section className="relative min-h-screen">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-[#FBF6FA] to-[#FEFDFE] pointer-events-none z-0" />

      {/* Actual Content */}
      <div className="relative z-10 container mx-auto">
        <div className="py-12 md:py-20 px-4 md:px-5">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-[84px] font-normal leading-tight text-gray-900">
              Our World Class
              <br />
              <span className="text-[#E436A2]">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
                style={{
                  background:
                    index % 3 === 0
                      ? "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)"
                      : index % 3 === 1
                        ? "linear-gradient(135deg, #ffffff 0%, #fff8f8 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8fff8 100%)",
                }}
              >
                {/* Card Number */}
                <div className="absolute top-4 right-6 text-6xl font-bold text-gray-100 group-hover:text-[#E436A2] transition-colors duration-300">
                  {String(service.id).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E436A2] to-[#ff6b9d] rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#E436A2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-10 h-10 bg-[#E436A2] rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#E436A2]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-[#E436A2]/5 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-[#E436A2] to-[#ff6b9d] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

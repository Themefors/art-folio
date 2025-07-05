import React from 'react';

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
        }
    ];

    return (
        <section className="relative ">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-[#FBF6FA] to-[#FEFDFE] pointer-events-none z-0" />

            {/* Actual Content */}
            <div className="relative z-10 container mx-auto">
                <div className="py-20 px-5">
                    <h2 className="text-[84px] font-normal w-155">Our World Class
                        Services</h2>
                </div>
            </div>
        </section>
    );
};

export default Services;

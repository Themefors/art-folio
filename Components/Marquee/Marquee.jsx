import { Marquee } from "@/components/magicui/marquee";
import images from "@/public/images";
import Image from "next/image";


const MarqueeSlide = () => {
    return (
        <div className="bg-[#FFFEDA] py-5  ">
            <Marquee className="flex items-center gap-4 text-black text-xl font-medium">
                <h2 className=" text-5xl text-[#313131] font-medium ">Creative Strategy</h2>
                <Image src={images?.svg?.star} alt="star" width={24} height={24} className="mx-6 w-12 h-12" />

                <h2 className=" text-5xl text-[#313131] font-medium ">Pixel-Perfect Designs</h2>
                <Image src={images?.svg?.star} alt="star" width={24} height={24} className="mx-6 w-12 h-12" />

                <h2 className=" text-5xl text-[#313131] font-medium ">4+ Years of Experience</h2>
                <Image src={images?.svg?.star} alt="star" width={24} height={24} className="mx-6 w-12 h-12" />

                <h2 className=" text-5xl text-[#313131] font-medium ">Design that Speaks</h2>
            </Marquee>
        </div>
    );
};

export default MarqueeSlide;
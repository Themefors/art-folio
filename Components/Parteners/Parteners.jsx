import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import images from "@/public/images";

const Parteners = () => {
    return (
        <section className="py-14">
            {/* Background color div with full width */}
            <div className=" p-5 text-center w-full py-14">
                <h2 className="bg-[#E1FFF3] text-2xl lg:text-[18px] font-normal rounded-full px-6 py-3 inline-block">
                    Our Trusted partners
                </h2>
            </div>
            <Marquee>
                <Image src={images?.svg?.cldBank} alt="cld bank" className="w-60" />
                <Image src={images?.svg?.dailMail} alt="daily mail" className="w-60" />
                <Image src={images?.svg?.inman} alt="inman" className="w-60" />
                <Image src={images?.svg?.realtyGroup} alt="realty group" className="w-60" />
                <Image src={images?.svg?.usaToday} alt="usa today" className="w-60" />
            </Marquee>
        </section>
    );
};

export default Parteners;

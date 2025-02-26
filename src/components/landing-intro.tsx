import Image from "next/image";
import BannerImg from "@/public/images/landing-banner.png";
import "@/styles/globals.css";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-400  via-purple-400 to-blue-400 text-white p-4 md:p-10 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="w-[50%]:md text-4xl font-bold">
            Learn new skills online with top educators
          </h1>
          <p className="mt-4 text-lg">
            We believe everyone has the capacity to be creative...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-sm rotate-animation">
            <Image src={BannerImg} alt="Banner" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

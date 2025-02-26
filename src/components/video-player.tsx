import Image, { StaticImageData } from "next/image";
import LandingCard from "./landing-card";

const VideoPlayer = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) => {
  return (
    <LandingCard>
      <div className="flex justify-center bg-slate-200 p-3 rounded-md">
        <Image className="w-full max-w-48" src={image} alt={title} />
      </div>
      <h4 className="font-semibold my-3 text-2xl">{title}</h4>
      <span>{description}</span>

      <span className="absolute bottom-7 left-8">
        <span className="border-e-2 border-slate-800 pe-3">6hr 15m</span>
        <span className="border-s-2 border-slate-800 ps-3">6hr 15m</span>
      </span>
    </LandingCard>
  );
};

export default VideoPlayer;

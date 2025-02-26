import Image from "@/public/images/boy-with-computer.png";
import VideoPlayer from "./video-player";

const ITEMS = [
  {
    image: Image,
    title: "Design",
    category: "DESIGN",
    description: "Research types product design",
  },
  {
    image: Image,
    title: "Psychology",
    category: "PSYCHOLOGY",
    description: "General psychology course for students",
  },
  {
    image: Image,
    title: "Testing",
    category: "TESTING",
    description: "Manual testing for juniors",
  },
  {
    image: Image,
    title: "Marketing",
    category: "MARKETING",
    description: "Explosive text: write professionally",
  },
  {
    image: Image,
    title: "Needlework",
    category: "NEEDLE_WORK",
    description: "Cross-stitching complex technique",
  },
  {
    image: Image,
    title: "Design",
    category: "DESIGN",
    description: "Figma chips and life hacks for novice designers",
  },
];

function VideoSection() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
        {ITEMS.map((item, index) => (
          <VideoPlayer
            image={item.image}
            key={index}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}

export default VideoSection;

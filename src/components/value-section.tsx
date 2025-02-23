import { Award, Presentation, Users } from "lucide-react";
import ValueSectionItem from "./value-section-item";
import React from "react";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ITEMS: ValueItem[] = [
  {
    title: "Online classes",
    description:
      "The training takes place in a format convenient for you, you can return to the lectures at any time.",
    icon: <Presentation className="size-16 text-red-400" />,
  },
  {
    title: "Mentoring",
    icon: <Users className="size-16 text-red-400" />,
    description:
      "On our platform, our mentors actively review your homework and give you personalized feedback.",
  },
  {
    title: "Guarantees",
    icon: <Award className="size-16 text-red-400" />,
    description:
      "If you do not like our training, we will return your money, we care about our reputation and appreciate your feedback.",
  },
];

function ValueSection() {
  return (
    <div>
      <h4 className="text-center text-4xl font-extrabold">
        We add value to our student`s journey
      </h4>

      <div className="grid grid-cols-3 gap-8 mt-12">
        {ITEMS.map((item, index) => (
          <ValueSectionItem
            icon={item.icon}
            key={index}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ValueSection;

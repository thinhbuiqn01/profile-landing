import React from "react";
import NumberOverviewItem from "./number-overview-item";

type OverView = {
  label: string;
  description: string;
};

const OVERVIEWS: OverView[] = [
  {
    label: "250+",
    description: "Course of difference topics",
  },
  {
    label: "150+",
    description: "Highly qualified teachers ",
  },
  {
    label: "5k+",
    description: "New students in last 3 days",
  },
];

function NumberOverview() {
  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-3 text-4xl">
        Our numbers tell <br /> more about us
      </div>
      {OVERVIEWS.map((Item, index) => (
        <div className="col-span-2" key={index}>
          <NumberOverviewItem
            description={Item.description}
            label={Item.label}
          />
        </div>
      ))}
    </div>
  );
}

export default NumberOverview;

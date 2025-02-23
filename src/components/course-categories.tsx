import React from "react";
import CourseItem from "./course-item";

const CATEGORIES_ITEM: { label: string; active: boolean }[] = [
  {
    active: true,
    label: "Post popular",
  },
  {
    active: false,
    label: "Game design",
  },
  {
    active: false,
    label: "Design",
  },
  {
    active: false,
    label: "Drawing",
  },

  {
    active: true,
    label: "Development",
  },
  {
    active: false,
    label: "Management",
  },

  {
    active: false,
    label: "Copywriting",
  },
  {
    active: false,
    label: "Psychology",
  },
  {
    active: false,
    label: "Cooking",
  },
  {
    active: false,
    label: "Needlework",
  },
  {
    active: false,
    label: "Marketing",
  },
];

function CourseCategories() {
  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-3 text-4xl">Course Categories</div>
      <div className="col-span-6">
        <div className="flex content-end flex-wrap">
          {CATEGORIES_ITEM.map((item, index) => (
            <CourseItem key={index} active={item.active}>
              {item.label}
            </CourseItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCategories;

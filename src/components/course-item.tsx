import React from "react";

function CourseItem({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`px-3 text-xl py-2 inline-block border m-2 rounded-md ${
        active ? "bg-red-400 text-white" : ""
      } `}
    >
      {children}
    </span>
  );
}

export default CourseItem;

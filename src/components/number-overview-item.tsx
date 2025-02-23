import React from "react";

function NumberOverviewItem({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <>
      <span className="block text-5xl font-semibold text-red-500">{label}</span>
      <span className="block ">{description}</span>
    </>
  );
}

export default NumberOverviewItem;

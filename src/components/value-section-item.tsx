import React from "react";
import LandingCard from "./landing-card";

function ValueSectionItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <LandingCard>
      <span className="block font-medium">{icon}</span>
      <h4 className="mt-16 mb-10 text-xl font-bold text-slate-800">{title}</h4>
      <span>{description}</span>
    </LandingCard>
  );
}

export default ValueSectionItem;

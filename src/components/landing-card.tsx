import React from "react";

function LandingCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 shadow-2xl rounded-lg border bg-white h-96 hover:scale-[1.02] hover:transform cursor-pointer duration-200 relative">
      {children}
    </div>
  );
}

export default LandingCard;

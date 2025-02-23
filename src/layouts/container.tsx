import { cn } from "@/lib/utils";
import React from "react";

function LayoutContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className={"max-w-6xl mx-auto p-4 "}>{children}</div>
    </div>
  );
}

export default LayoutContainer;

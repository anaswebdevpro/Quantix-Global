import { cn } from "@/lib/utils";
import React from "react";

export const Heading = ({ children, className, as = "h2" }) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "text-3xl md:text-5xl lg:text-6xl tracking-tight text-white font-bold ",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

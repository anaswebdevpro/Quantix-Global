import { cn } from "@/lib/utils";
import React from "react";

export const SubHeading = ({ children, className, as = "p" }) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "md:text-lg  py-8 max-w-xl  font-inter tracking-tight ",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

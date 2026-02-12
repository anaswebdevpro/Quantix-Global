import { cn } from "@/lib/utils";
import React from "react";
import { delay, motion } from "framer-motion";

export const SubHeading = ({ children, className, as = "p" }) => {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      className={cn(
        className,
        "md:text-lg    tracking-tight  py-4",
      )}
    >
      {children}
    </Tag>
  );
};

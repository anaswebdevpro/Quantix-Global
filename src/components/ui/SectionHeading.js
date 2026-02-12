import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const SectionHeading = ({ children, className, as = "h2" }) => {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "text-3xl md:text-4xl font-bold text-[#333d47] py-4  ",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

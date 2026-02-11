import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const SectionHeading = ({ children, className, as = "h2" }) => {
  const Tag = as;

  return (
    <motion.Tag
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "text-3xl md:text-4xl font-bold text-[#333d47] mb-10 ",
        className,
      )}
    >
      {children}
    </motion.Tag>
  );
};

import { cn } from "@/lib/utils";
import React from "react";
import { delay, motion } from "framer-motion";

export const SubHeading = ({ children, className, as = "p" }) => {
  const Tag = as;

  return (
    <motion.Tag
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      className={cn(
        "md:text-lg  py-8 max-w-xl  tracking-tight ",
        className,
      )}
    >
      {children}
    </motion.Tag>
  );
};

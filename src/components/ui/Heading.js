import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const Heading = ({ children, className, as = "h2" }) => {
  const Tag = as;

  return (
    <motion.Tag
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "text-3xl md:text-5xl lg:text-6xl tracking-tight text-white font-bold ",
        className,
      )}
    >
      {children}
    </motion.Tag>
  );
};

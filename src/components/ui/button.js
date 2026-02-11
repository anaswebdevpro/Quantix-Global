import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ children, className, variants = "primary", ...props }) => {
  const variantClasses = {
    primary:
      "text-background bg-foreground hover:scale-103 hover:bg-primary/90 transition-all cursor-pointer",
    secondary:
      "text-foreground border border-primary hover:scale-103   transition-all hover:bg-primary/10 cursor-pointer",
    outline:
      "group bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#153577] transition-all duration-300 flex items-center gap-2 font-semibold",
    action:
      "bg-[#1cd1a1] hover:bg-[#15a884] text-white font-semibold rounded-full px-5 py-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/20 cursor-pointer group",
  };

  return (
    <button
      className={cn(
        "px-6 py-2 rounded-xl",
        variantClasses[variants],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

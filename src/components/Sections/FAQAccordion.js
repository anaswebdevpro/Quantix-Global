"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    
    <div>
      <div className="text-center mt-16">

           <SectionHeading>
       Frequently Asked <span className="text-[#09d0c6]">Questions</span>(FAQ)
          </SectionHeading>
      </div>


    
    
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-6xl mx-auto">

      {items?.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`group border transition-all duration-300 ease-in-out bg-white overflow-hidden
              ${
                isOpen
                  ? "border-[#adedea] shadow-sm"
                  : "border-[#d1f5f3] hover:border-[#adedea]"
              }`}
          >
            <div
              onClick={() => handleToggle(index)}
              className="flex w-full items-center gap-4 p-4 cursor-pointer select-none"
            >
              <div className="flex items-center justify-center shrink-0">
                {isOpen ? (
                  <Minus
                    className="w-5 h-5 text-[#09d0c6] font-bold"
                    strokeWidth={3}
                  />
                ) : (
                  <Plus
                    className="w-5 h-5 text-[#09d0c6] font-bold"
                    strokeWidth={3}
                  />
                )}
              </div>
              <h3
                className={`text-base md:text-[17px] font-semibold leading-tight text-[#333d47]`}
              >
                {item.question}
              </h3>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-5 pt-0 ml-9">
                  <p className="text-[#5d6b82] text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

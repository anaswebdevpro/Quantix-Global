"use client";

import React, { useState, useCallback } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={`faq-${index}`}
            className="rounded-xl border border-[#e7e8ec] bg-white px-5 py-4 shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={(e) => handleToggle(e, index)}
              className="flex w-full items-start gap-3 text-left list-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ccfc1]/50 rounded"
            >
              <span className="mt-0.5 text-[#1ccfc1] text-2xl leading-none font-medium shrink-0">
                {isOpen ? "-" : "+"}
              </span>
              <span className="text-[#2f3d4f] text-lg md:text-[22px] font-semibold leading-tight">
                {item.question}
              </span>
            </button>
            {isOpen && (
              <p className="mt-5 pl-8 text-[#4f5d72] text-sm md:text-[18px] leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

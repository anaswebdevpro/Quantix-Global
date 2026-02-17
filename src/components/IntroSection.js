"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./ui/container";
import { SectionHeading } from "./ui/SectionHeading";
import { SubHeading } from "./ui/subheading";
export default function IntroSection({
  heading = "",
  text = "",
  items = [],
  className = "",
  cols = "lg:grid-cols-4",
}) {
  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <Container>
        <div className="text-center mx-auto flex flex-col  ">
          <SectionHeading as="h2" className="">
            {heading}
          </SectionHeading>
          <SubHeading className="text-center max-w-7xl my-5 mx-auto">
            {text}
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center">
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

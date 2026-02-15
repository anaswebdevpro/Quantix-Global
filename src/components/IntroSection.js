"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./ui/container";
import { SectionHeading } from "./ui/SectionHeading";
import { SubHeading } from "./ui/subheading";

const introItems = [
  { title: "E-learning", icon: "/assets/image/elearning-1.png" },
  { title: "Banking & Finance", icon: "/assets/image/Banking-Finance-1.png" },
  { title: "Online shopping", icon: "/assets/image/Online-shopping-1.png" },
  { title: "Healthcare", icon: "/assets/image/Healthcare-1.png" },
  { title: "Cybersecurity", icon: "/assets/image/Cybersecurity-1.png" },
  { title: "Travel", icon: "/assets/image/Travel-1.png" },
  { title: "Online Music", icon: "/assets/image/Online-Music-1.png" },
  { title: "Online Movies", icon: "/assets/image/Online-Movies-1.png" },
];

export default function IntroSection() {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mx-auto flex flex-col  ">
          <SectionHeading as="h2" className="">
            Quantix Global- Building Blockchain <br /> Solutions For Businesses
          </SectionHeading>
          <SubHeading className="text-center max-w-7xl my-5 mx-auto">
            In the dynamic world of technology,{" "}
            <strong className="font-bold text-gray-800">Quantix Global</strong>{" "}
            has emerged as a trailblazer in providing innovative blockchain
            solutions tailored for businesses. With a mission to harness the
            transformative potential of blockchain technology, Quantix Global
            has positioned itself as a leading player in the industry, offering
            a range of services designed to enhance efficiency, security, and
            transparency. <br />
            <strong>Blockchain technology,</strong> known for its decentralized
            and immutable nature, is revolutionizing the way businesses operate.{" "}
            <strong>Quantix Global</strong> leverages this technology to create
            customized solutions that address the unique challenges faced by
            various industries. From supply chain management and finance to
            healthcare and real estate, the applications of blockchain are vast
            and varied.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {introItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

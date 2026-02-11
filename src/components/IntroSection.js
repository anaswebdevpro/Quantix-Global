"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./ui/container";

const introItems = [
  { title: "E-learning", icon: "/assets/images/elearning-1.png" },
  { title: "Cybersecurity", icon: "/assets/images/Cybersecurity-1.png" },
  { title: "Banking & Finance", icon: "/assets/images/Banking-Finance-1.png" },
  { title: "Travel", icon: "/assets/images/Travel-1.png" },
  { title: "Online shopping", icon: "/assets/images/Online-shopping-1.png" },
  { title: "Online Music", icon: "/assets/images/Online-Music-1.png" },
  { title: "Healthcare", icon: "/assets/images/Healthcare-1.png" },
  { title: "Online Movies", icon: "/assets/images/Online-Movies-1.png" },
];

export default function IntroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#153577] mb-8 leading-tight"
          >
            Webcom Systems- Building Blockchain <br /> Solutions For Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-6 text-lg"
          >
            In the dynamic world of technology,{" "}
            <strong className="font-bold text-gray-800">Webcom Systems</strong>{" "}
            has emerged as a trailblazer in providing innovative blockchain
            solutions tailored for businesses. With a mission to harness the
            transformative potential of blockchain technology, Webcom Systems
            has positioned itself as a leading player in the industry, offering
            a range of services designed to enhance efficiency, security, and
            transparency.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            <strong>Blockchain technology,</strong> known for its decentralized
            and immutable nature, is revolutionizing the way businesses operate.{" "}
            <strong>Webcom Systems</strong> leverages this technology to create
            customized solutions that address the unique challenges faced by
            various industries. From supply chain management and finance to
            healthcare and real estate, the applications of blockchain are vast
            and varied.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {introItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-4 transition-transform transform group-hover:-translate-y-2 group-hover:shadow-lg border border-gray-100">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain p-2"
                />
              </div>
              <h3 className="font-semibold text-gray-700 text-center text-sm md:text-base max-w-[120px]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

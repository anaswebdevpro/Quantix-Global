"use client";
import { motion } from "framer-motion";
import Container from "./ui/container";

const stats = [
  { value: "150+", label: "TOTAL EMPLOYEES" },
  { value: "10299", label: "PROJECT COMPLETED" },
  { value: "1257", label: "GLOBAL CLIENTS" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#153577] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#153577] to-[#0d224d] opacity-50"></div>
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-8"
            >
              We have the expertise to handle complex blockchain projects. We
              have successfully delivered multiple blockchain projects, gaining
              valuable industry experience along the way. This experience allows
              us to understand the unique challenges and requirements of
              different industries, ensuring that our solutions are tailored to
              your specific industry needs.
            </motion.p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#09d0c6] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider font-semibold text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

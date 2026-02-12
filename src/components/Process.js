"use client";
import { motion } from "framer-motion";
import Container from "./ui/container";
import { SectionHeading } from "./ui/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Blockchain Evaluation Framework",
    desc: "We assess the feasibility of blockchain implementation identify the most suitable blockchain platform, and provide end-to-end blockchain development services.",
  },
  {
    number: "2",
    title: "Pilot Testing And Solution Assessment",
    desc: "We conduct pilot testing in collaboration with clients to assess the feasibility, functionality, and performance of the blockchain use cases in real-world scenarios.",
  },
  {
    number: "3",
    title: "Testing for Performance, Security, and Scale",
    desc: "Our team utilizes cutting-edge technologies and follows best practices to ensure that the blockchain solution meets the highest standards of performance, security, and scalability.",
  },
  {
    number: "4",
    title: "Integration With On Blockchain Network",
    desc: "Our team works closely with your IT department to integrate the blockchain network with your existing IT infrastructure.",
  },
  {
    number: "5",
    title: "Network Authorization",
    desc: "We authorize updates and changes to the blockchain network. Our team ensures that all updates and changes are authorized and implemented in a secure and reliable manner.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-[#153577] text-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading className="text-white">
            Our Design-Driven Approach To <br /> Blockchain Development
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-4"
            >
              <div className="text-6xl font-bold text-white/10 absolute -top-4 -left-2 z-0 group-hover:text-[#09d0c6]/20 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-[#09d0c6] flex items-center justify-center text-xl font-bold mb-4 bg-[#153577]">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-3 min-h-[56px] flex items-end">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

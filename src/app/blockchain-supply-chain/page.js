"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Anchor,
  Box,
  CheckCircle2,
  Clock,
  Container as ContainerIcon,
  FileCheck,
  Globe,
  Leaf,
  Link as LinkIcon,
  MapPin,
  Search,
  ShieldCheck,
  Ship,
  Truck,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import Stats from "@/components/Sections/Stats";

const services = [
  {
    title: "Food Safety and Traceability",
    desc: "Monitor the journey of food products from farm to table to ensure quality, prevent contamination, and build consumer trust.",
    icon: <Leaf className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Pharmaceutical Supply Chain",
    desc: "Ensure the integrity and authenticity of medical supplies, combating counterfeit drugs and ensuring patient safety.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Luxury Goods Authentication",
    desc: "Prevent counterfeiting by using digital certificates of authenticity on the blockchain for high-value items.",
    icon: <CheckCircle2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Logistics and Shipping Tracking",
    desc: "Optimize fleet management and gain real-time visibility into shipments, reducing delays and improving efficiency.",
    icon: <Truck className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const challengesSolutions = [
  {
    challenge: "Lack of Transparency",
    solution: "Start-to-finish visibility",
    desc: "Blockchain provides an immutable ledger that allows all stakeholders to track products in real-time, eliminating blind spots.",
    icon: <Search className="w-8 h-8 text-white" />,
  },
  {
    challenge: "Inefficient Payments",
    solution: "Smart Contracts",
    desc: "Automate payments and verify credentials instantly without intermediaries, reducing processing time and costs.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    challenge: "Unethical Sourcing",
    solution: "Sustainable Provenance",
    desc: "Track raw materials from their origin verify fair labor practices and environmental sustainability.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    challenge: "Data Silos",
    solution: "Interoperability",
    desc: "Enable seamless communication between disparate supply chain systems, creating a unified flow of information.",
    icon: <LinkIcon className="w-8 h-8 text-white" />,
  },
];

const benefits = [
  {
    title: "Enhanced Visibility",
    desc: "Gain a comprehensive view of your entire supply chain network, allowing for better decision-making and risk management.",
    icon: <MapPin className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Cost Reduction",
    desc: "Significantly lower operational costs by automating manual processes, reducing paperwork, and minimizing errors.",
    icon: <Box className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Improved Trust",
    desc: "Create a single source of truth that all parties can rely on, fostering stronger relationships between suppliers and partners.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Uncompromising Security",
    desc: "Protect sensitive data with advanced cryptographic techniques, ensuring that your records are tamper-proof and secure.",
    icon: <ShieldCheck className="w-6 h-6 text-[#00D9FF]" />,
  },
];

const faqs = [
  {
    question: "What are the benefits of using blockchain in the supply chain?",
    answer:
      "Blockchain enhances transparency, security, and efficiency. It allows for real-time tracking of goods, reduces paperwork through automation, and builds trust among all stakeholders by providing an immutable record of transactions.",
  },
  {
    question:
      "How much does it cost to implement a blockchain-based supply chain solution?",
    answer:
      "The cost depends on various factors including the complexity of the solution, the number of stakeholders involved, and the level of integration required with existing systems. We offer customized quotes based on your specific needs.",
  },
  {
    question: "What is blockchain supply chain transparency?",
    answer:
      "It refers to the ability to view the entire history, location, and status of a product as it moves through the supply chain. This visibility helps in identifying bottlenecks, verifying authenticity, and ensuring compliance.",
  },
  {
    question: "How can blockchain help with ethical sourcing?",
    answer:
      "Blockchain can verify the origin of materials and ensure that ethical standards are met at every stage of production. This allows consumers to make informed choices and companies to prove their commitment to sustainability.",
  },
  {
    question:
      "How to get started with Avner Global for blockchain supply chain development?",
    answer:
      "Simply contact our team of experts. We will discuss your requirements, propose a tailored solution, and guide you through the entire development and implementation process.",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Supply Chain Solutions"
        text="Smart Contracts, Smarter Supply Chains: Revolutionizing Business Processes. Improve transparency, reduce costs, and enhance trust with our cutting-edge blockchain solutions."
        bgimage="/assets/image/Supply-Chain-Management-1.jpg" // Placeholder
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/supply-chain-use-cases.png" // Placeholder
                alt="Blockchain Supply Chain"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Blockchain-based Supply Chain Solution Provider Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Avner Global helps businesses improve their supply chain
                processes, reduce costs, and enhance their position as
                responsible manufacturers.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our solutions benefit people by improving the quality of
                products, reducing costs, and increasing transparency and trust
                in the supply chain.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Our Supply Chain Services
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-6 p-4 rounded-full bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenges vs Solutions (Use Cases) */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Solving Industry Challenges
            </SectionHeading>
            <p className="text-blue-200 mt-4">
              How our blockchain solutions address common supply chain pain
              points.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challengesSolutions.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 flex gap-6 hover:bg-white/20 transition-colors"
              >
                <div className="shrink-0 bg-[#00D9FF] p-3 rounded-full h-fit">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-200 text-sm font-semibold uppercase tracking-wider">
                    <span>{item.challenge}</span>
                    <span>→</span>
                    <span className="text-[#00D9FF]">{item.solution}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.solution}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Key Benefits
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="mb-4 bg-gray-50 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-lg text-[#153577] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* FAQs */}
      <FAQAccordion items={faqs} />
    </>
  );
}

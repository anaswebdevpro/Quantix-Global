"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Dna,
  FileSearch,
  Globe,
  HeartPulse,
  Network,
  Package,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users,
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
    title: "Enhanced management of healthcare data",
    desc: "We promote synchronized transactions and improved blockchain security to manage sensitive healthcare data effectively.",
    icon: <Database className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Strengthen healthcare data defenses",
    desc: "Using blockchain technology, we provide enhanced security layers to protect healthcare data from breaches and unauthorized access.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Manage the medicine supply chain",
    desc: "We ensure that patients receive the right medication at the right time by tracking the entire medicine supply chain transparently.",
    icon: <Truck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Unlock genetic code",
    desc: "Our blockchain solutions help researchers secure and share genetic data to develop new treatments and cures faster.",
    icon: <Dna className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Efficiently reference patient data",
    desc: "We create a unified ecosystem of patient data accessible to doctors, hospitals, and pharmacists, reducing errors and redundancy.",
    icon: <FileSearch className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Interoperability in blockchain",
    desc: "Our solutions allow for the secure and seamless transfer of patient data between different healthcare providers and systems globally.",
    icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const useCases = [
  {
    title: "Supply Chain Management",
    desc: "Ensure the authenticity of drugs and medical supplies by tracking them from manufacturer to patient, preventing counterfeits.",
    icon: <Package className="w-8 h-8 text-white" />,
  },
  {
    title: "Clinical Trial Data",
    desc: "Securely manage clinical trial data to protect patient privacy, ensure data integrity, and speed up the approval process.",
    icon: <Activity className="w-8 h-8 text-white" />,
  },
  {
    title: "Seamless Data Exchange",
    desc: "Enable real-time, secure communication and data exchange between healthcare providers, insurers, and patients via blockchain.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
];

const faqs = [
  {
    question: "How does blockchain secure patient data?",
    answer:
      "Blockchain secures patient data through encryption and decentralization. Records are immutable, meaning they cannot be altered or deleted, and access is controlled via private keys, ensuring only authorized personnel can view sensitive information.",
  },
  {
    question: "Can blockchain improve clinical trials?",
    answer:
      "Yes, blockchain creates a transparent and tamper-proof record of clinical trial data. This fosters trust, allows for better verification of results, and helps in recruiting patients by matching them anonymously with trials.",
  },
  {
    question: "What is the benefit of interoperability in healthcare?",
    answer:
      "Interoperability allows different healthcare systems to communicate effectively. Blockchain facilitates this by providing a standardized, secure layer for data exchange, ensuring continuity of care regardless of where a patient is treated.",
  },
  {
    question: "How does blockchain help in the medicine supply chain?",
    answer:
      "It tracks pharmaceuticals at every step, verifying their origin and handling. This combats counterfeit drugs, ensures proper storage conditions are met (e.g., for vaccines), and improves inventory management.",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Secure transfer of patient medical records"
        text="Our Blockchain-based Health Solution facilitates the secure transfer of patient medical records, ensuring that patient data is protected and secure. We propose a generic architecture for storing patient Electronic Health Record (EHR) data using blockchain technology."
        bgimage="/assets/image/healthcare_banner.jpg" // Placeholder
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/healthcare-usecase-1.png" // Placeholder or mapped
                alt="Blockchain in Healthcare"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Who We Are - Blockchain Based Healthcare Solution Provider
                Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Avner Global is a Blockchain-based Health Solution Provider
                Company that uses blockchain technology to develop innovative
                solutions that address the challenges facing the healthcare
                industry today.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our solutions are designed to improve patient care, secure data,
                and reduce costs. We are committed to leveraging the power of
                blockchain to build a more efficient, transparent, and
                patient-centric healthcare ecosystem.
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
              Our Blockchain Services For the Health Industry
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-white text-left mb-6">
                Why Choose Us?
              </SectionHeading>
              <ul className="space-y-6">
                {[
                  {
                    title: "Secure Data Sharing",
                    desc: "Facilitates safe collaboration between healthcare providers.",
                  },
                  {
                    title: "Global Interoperability",
                    desc: "Secure data exchange regardless of location or system.",
                  },
                  {
                    title: "Operational Efficiency",
                    desc: "Increased patient care quality combined with decreased administrative costs.",
                  },
                  {
                    title: "Tailored Solutions",
                    desc: "Customized blockchain answers for specific healthcare needs.",
                  },
                  {
                    title: "Expertise & Innovation",
                    desc: "Focus on security, interoperability, and long-term partnership.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-[#00D9FF] p-1 rounded-full h-fit">
                      <HeartPulse className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/coin.png"
                alt="Why Choose Us"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Blockchain Health Use Cases
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#00D9FF] hover:shadow-md transition-all"
              >
                <div className="shrink-0 p-3 bg-[#153577] rounded-full h-fit">
                  {useCase.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#333d47] mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
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

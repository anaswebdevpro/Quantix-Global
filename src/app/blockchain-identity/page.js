"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  FileBadge,
  Fingerprint,
  Globe,
  GraduationCap,
  Key,
  Landmark,
  Lock,
  ScanFace,
  ShieldCheck,
  Stethoscope,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import Stats from "@/components/Sections/Stats";

const features = [
  {
    title: "Decentralized Control",
    desc: "Empower users with complete control over their own identity data, eliminating reliance on centralized authorities.",
    icon: <Users className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Immutability",
    desc: "Once identity data is recorded on the blockchain, it cannot be altered or tampered with, ensuring absolute integrity.",
    icon: <Lock className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Control Over Privacy",
    desc: "Utilize Self-Sovereign Identity (SSI) principles allowing users to share only specific data points without revealing their entire identity.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Interoperability",
    desc: "Our systems support seamless authentication across multiple platforms and services without the need for redundant checks.",
    icon: <Globe className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Cryptographic Security",
    desc: "Advanced cryptographic methods like digital signatures and zero-knowledge proofs (ZKPs) ensure top-tier security.",
    icon: <Key className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Transparency and Trust",
    desc: "All identity transactions are recorded on a transparent ledger, allowing for easy verification while maintaining privacy.",
    icon: <FileBadge className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const benefits = [
  {
    title: "No Single Point of Failure",
    desc: "Data is distributed across a network of nodes, making it virtually impossible for hackers to compromise the entire system.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Scalability",
    desc: "Our solutions are designed to efficiently handle a growing number of users and transactions without compromising speed.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Global Accessibility",
    desc: "Digital identities are not restricted to a single organization or country, allowing for true global usability.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Cost Savings",
    desc: "Automated verification processes significantly reduce the costs associated with third-party intervention and manual oversight.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Simplified Authentication",
    desc: "Users can access multiple platforms with a single set of secure credentials, improving the overall user experience.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Regulatory Compliance",
    desc: "Built-in features for data portability and privacy protection help businesses adhere to regulations like GDPR.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#00D9FF]" />,
  },
];

const useCases = [
  {
    title: "Healthcare",
    desc: "Secure patient records and enable instant verification of medical provider credentials.",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
  },
  {
    title: "Supply Chain",
    desc: "Ensure transparent tracking and authorized access to data using Decentralized Identifiers (DIDs).",
    icon: <Truck className="w-8 h-8 text-white" />,
  },
  {
    title: "Employee Verification",
    desc: "Instantly verify academic degrees and professional certifications for streamlined hiring.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
  },
  {
    title: "Government Services",
    desc: "Streamline the management of public records like land titles, tax information, and licenses.",
    icon: <Landmark className="w-8 h-8 text-white" />,
  },
  {
    title: "Financial Services",
    desc: "Accelerate KYC processes and loan approvals with verified, tamper-proof digital identities.",
    icon: <Banknote className="w-8 h-8 text-white" />,
  },
  {
    title: "Education",
    desc: "Issue secure, verifiable digital diplomas and certificates that students can own and share endlessly.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
  },
];

const faqs = [
  {
    question:
      "What are the issues with traditional identity management systems?",
    answer:
      "Traditional systems suffer from centralized storage vulnerabilities, lack of user control, high risk of identity theft, and data silos that make verification inefficient.",
  },
  {
    question: "Why is blockchain identity management important for businesses?",
    answer:
      "It streamlines verification processes, reduces operational costs, enhances security against data breaches, and builds trust with customers by respecting their privacy.",
  },
  {
    question: "How does it impact users?",
    answer:
      "Users gain ownership of their data (Self-Sovereign Identity), enhanced privacy, and the convenience of using a single digital identity across multiple services.",
  },
  {
    question: "How are credentials verified?",
    answer:
      "Credentials are verified using cryptographic signatures. The issuer signs the credential, and the verifier uses the issuer's public key on the blockchain to confirm its authenticity instantly.",
  },
  {
    question: "Does it help prevent identity theft?",
    answer:
      "Yes, by eliminating centralized honeypots of data and using immutable records, blockchain makes it extremely difficult for attackers to steal or forge identities.",
  },
];

import { Banknote } from "lucide-react";

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Identity Management"
        text="Utilize the impressive features of blockchain, such as decentralization, security, immutability, speed, and transparency, for storing and managing digital identities."
        bgimage="/assets/image/Banner_defi-2.jpg" 
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/innovation.png" 
                alt="Blockchain Identity Management"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Innovative Blockchain Integration In Identity Management
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Traditional identity management systems face severe security
                risks like data breaches and identity theft. Integrating
                blockchain provides enhanced safety, privacy, and user control
                over personal data.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Avner Global has over 20 years of experience in developing
                secure, trustworthy decentralized digital identity platforms for
                entrepreneurs, governments, and businesses.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Key Features
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Core characteristics that make our blockchain identity solutions
              superior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-6 p-4 rounded-full bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Identity Management Use Cases
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="mb-4 bg-[#00D9FF] p-3 rounded-full w-fit">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {useCase.desc}
                </p>
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
              Major Benefits
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-[#153577] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
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

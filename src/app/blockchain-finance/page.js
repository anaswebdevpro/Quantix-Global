"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Briefcase,
  FileBarChart,
  FileCode,
  FileText,
  Globe,
  HandCoins,
  Landmark,
  PackagePlus,
  Scale,
  ShieldCheck,
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
    title: "Improved Transaction Processing",
    desc: "Using Blockchain for financial services can speed up transaction times by eliminating the need for intermediaries and automating processes.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Product Development",
    desc: "Blockchain can enable the creation of new financial products and services, such as decentralized finance (DeFi) platforms, which can offer more transparency and accessibility.",
    icon: <PackagePlus className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Greater Security",
    desc: "Distributed ledgers are highly secure and resistant to fraud and hacking, which can help prevent theft and financial crimes.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Automated Contracts",
    desc: "Smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code, can automate processes such as clearing and settlement.",
    icon: <FileCode className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Regulatory Compliance",
    desc: "Blockchain can help financial institutions meet regulatory requirements such as KYC (Know Your Customer) and AML (Anti-Money Laundering) by providing a secure and transparent record of transactions.",
    icon: <Scale className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const useCases = [
  {
    title: "Cross-Border Payments",
    desc: "Blockchain technology can facilitate fast and low-cost cross-border payments by eliminating the need for intermediaries and reducing the time and costs associated with traditional payment methods.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    title: "Lending platforms",
    desc: "Blockchain-based lending platforms can offer more transparency and accessibility, while also reducing the risk of fraud and defaults.",
    icon: <HandCoins className="w-8 h-8 text-white" />,
  },
  {
    title: "Credit score",
    desc: "Blockchain can be used to create a more accurate and transparent credit scoring system, by providing a secure and immutable record of an individual's financial history.",
    icon: <FileBarChart className="w-8 h-8 text-white" />,
  },
  {
    title: "Invoice management and billing solution",
    desc: "Blockchain can help automate invoice management and billing processes, reducing the time and costs associated with traditional methods.",
    icon: <FileText className="w-8 h-8 text-white" />,
  },
  {
    title: "Fund investment",
    desc: "Blockchain can be used to create more transparent and accessible fund investment platforms, by providing a secure and immutable record of transactions and holdings.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
  },
  {
    title: "Government expenses",
    desc: "Blockchain can help governments to improve transparency and reduce waste in their spending, by providing a secure and transparent record of financial transactions.",
    icon: <Landmark className="w-8 h-8 text-white" />,
  },
];

const faqs = [
  {
    question: "How does blockchain improve financial transactions?",
    answer:
      "Blockchain improves financial transactions by increasing speed, reducing costs through the elimination of intermediaries, and ensuring security and transparency via immutable ledgers.",
  },
  {
    question: "What is the role of smart contracts in finance?",
    answer:
      "Smart contracts automate financial agreements, such as loan disbursement or insurance payouts, executing actions automatically when predefined conditions are met, thus reducing manual errors and processing time.",
  },
  {
    question: "Is blockchain secure for financial data?",
    answer:
      "Yes, blockchain is highly secure due to its cryptographic nature and decentralized architecture, making it extremely difficult for hackers to alter transaction records.",
  },
  {
    question: "Can blockchain help with regulatory compliance?",
    answer:
      "Absolutely. Blockchain provides an immutable and transparent audit trail, simplifying compliance with regulations like KYC (Know Your Customer) and AML (Anti-Money Laundering).",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Finance"
        text="Avner Global provides blockchain solutions that help financial institutions transform their business operations, reduce risk, improve end-user experience, and enable the digitization of financial instruments, including digital assets and smart contracts."
        bgimage="/assets/image/Finance-and-Banking-scaled.webp" // Optimized name
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/Banking-Finance-1.png" // Placeholder or mapped
                alt="Blockchain in Finance"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Blockchain-Based Finance Solution Provider Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Avner Global is a Blockchain-based Finance Solution Provider
                Company that uses blockchain technology to enable secure and
                transparent financial transactions. By using blockchain,
                financial intermediaries can be eliminated, leading to fairer
                and more inclusive financial systems.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Avner Global's solutions can enable peer-to-peer transactions
                and eliminate intermediaries, leading to fairer and more
                inclusive financial systems. Additionally, blockchain
                facilitates payments between farmers and suppliers, reducing the
                need for intermediaries.
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
              Our Blockchain Services For the Finance Industry
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
                Why Choose Us
              </SectionHeading>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Avner Global's blockchain solutions can help financial
                institutions to improve efficiency and reduce costs, while also
                providing greater security and transparency.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                Our solutions are designed to be scalable and secure, and we
                offer a range of services to help financial institutions get the
                most out of blockchain technology.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/coin.png"
                alt="Why Choose Us"
                width={500}
                height={500}
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
              Blockchain Finance Use Cases
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

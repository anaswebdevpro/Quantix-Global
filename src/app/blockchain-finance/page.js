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
                src="/assets/image/coin_finance.jpg" // Placeholder or mapped
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

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-20 px-4">
            <SectionHeading className="!text-5xl  mb-8 text-[#2f3d4f]">
              Blockchain Finance Use Cases
            </SectionHeading>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              As a blockchain development company, we understand the potential
              of blockchain technology in the finance industry. Here are some of
              the use cases of blockchain finance industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start lg:px-6">
            {/* Left Column */}
            <div className="space-y-4 pt-4">
              {[
                {
                  number: "01",
                  title: "Cross-Border Payments",
                  desc: "We help financial institutions to make cross-border payments faster, cheaper, and more secure by developing blockchain-based payment systems that eliminate intermediaries, reduce transaction times, and lower costs.",
                },
                {
                  number: "02",
                  title: "Lending platforms",
                  desc: "Our innovative platform facilitates direct connections between lenders and borrowers, lowering borrowing costs and expanding credit access for financial institutions.",
                },
                {
                  number: "03",
                  title: "Credit score",
                  desc: "We decentralized credit scoring system that is more transparent and accurate than traditional credit scoring systems, increasing access to credit for people who are currently underserved by traditional credit scoring.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -top-12 -left-2 text-[100px] font-black text-gray-100/80 leading-none select-none -z-10 group-hover:text-gray-200/80 transition-colors">
                    {item.number}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-2xl font-bold text-[#2f3d4f] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column (Images) */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden ">
                  <Image
                    src="/assets/image/usecase1.jpg"
                    fill
                    className="object-cover"
                    alt="Payments"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden ">
                  <Image
                    src="/assets/image/usecase2.jpg"
                    fill
                    className="object-cover"
                    alt="Savings"
                  />
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden ">
                <Image
                  src="/assets/image/usecase3.jpg"
                  fill
                  className="object-cover"
                  alt="Audit and Analysis"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 pt-4">
              {[
                {
                  number: "04",
                  title: "Invoice management and billing solution",
                  desc: "Our advanced approach to invoice management and billing simplifies processes while improving efficiency and transparency.",
                },
                {
                  number: "05",
                  title: "Fund investment",
                  desc: "We create a more efficient and transparent fund investment platform, reducing the time and resources required for fund investment and increasing access to investment opportunities.",
                },
                {
                  number: "06",
                  title: "Government expenses",
                  desc: "By simplifying processes and minimizing inherent risks, we facilitate effective management of public funds while enhancing transparency and responsibility within government institutions.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -top-12 -left-2 text-[100px] font-black text-gray-100/80 leading-none select-none -z-10 group-hover:text-gray-200/80 transition-colors">
                    {item.number}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-2xl font-bold text-[#2f3d4f] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

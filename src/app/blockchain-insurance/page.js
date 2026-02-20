"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  BadgeDollarSign,
  Coins,
  FileCheck,
  FileCode,
  Gamepad,
  Gamepad2,
  Globe2,
  Landmark,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smile,
  Store,
  Wallet,
  WalletCards,
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
    title: "Decentralized Insurance (DeFi) Development",
    desc: "We craft decentralized insurance platforms that offer autonomy, transparency, and efficiency, removing the need for traditional intermediaries.",
    icon: <Landmark className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contract Development",
    desc: "Our tamper-proof smart contracts automate claim processing and policy management, ensuring trust and speed in operations.",
    icon: <FileCode className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Digital Exchange Platform",
    desc: "We build robust digital exchange platforms for trading insurance assets and derivatives with high security and liquidity.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Wallet Development",
    desc: "Secure digital wallets designed for the insurance sector to manage premiums, claims, and digital assets safely.",
    icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "NFT Marketplace Development",
    desc: "Tokenize insurance policies and assets as NFTs, enabling a new secondary market for insurance products.",
    icon: <Store className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Metaverse Development",
    desc: "Step into the future with insurance solutions tailored for the metaverse, protecting virtual assets and avatars.",
    icon: <Gamepad2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Token Development",
    desc: "Create custom utility tokens for loyalty programs, premium payments, and governance within your insurance ecosystem.",
    icon: <Coins className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "White Label Wallet Development",
    desc: "Launch your own branded wallet solution quickly with our white-label services, fully customizable to your needs.",
    icon: <WalletCards className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "NFT Gaming Platform Development",
    desc: "Integrate insurance mechanics into play-to-earn games, protecting in-game assets and economies.",
    icon: <Gamepad className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const useCases = [
  {
    title: "Automated Claims Processing",
    desc: "Smart contracts trigger automatic payouts when pre-defined conditions are met, eliminating manual delays.",
    icon: <FileCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "Fraud Detection",
    desc: "Immutable ledgers provide a transparent history of assets and claims, making fraud detection significantly easier.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />,
  },
  {
    title: "Micropayment",
    desc: "Blockchain enables cost-effective micropayments for pay-as-you-go insurance models.",
    icon: <Coins className="w-8 h-8 text-white" />,
  },
  {
    title: "Compliance And Governance",
    desc: "Real-time auditing and transparent records ensure seamless regulatory compliance and governance.",
    icon: <Scale className="w-8 h-8 text-white" />,
  },
  {
    title: "Improve Customer Experience",
    desc: "Faster claims, lower premiums, and greater transparency lead to significantly higher customer satisfaction.",
    icon: <Smile className="w-8 h-8 text-white" />,
  },
  {
    title: "Digital Transformation",
    desc: "Migrate legacy systems to decentralized networks for enhanced security, speed, and interoperability.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
];

const faqs = [
  {
    question: "What is blockchain in insurance?",
    answer:
      "Blockchain in insurance refers to the use of distributed ledger technology to store data securely, automate processes via smart contracts, and enhance transparency between insurers and policyholders.",
  },
  {
    question: "How does blockchain help insurance company?",
    answer:
      "It helps by reducing administrative costs, preventing fraud through immutable records, speeding up claim settlements with automation, and enabling new business models like P2P insurance.",
  },
  {
    question: "What is the role of blockchain in health insurance?",
    answer:
      "In health insurance, blockchain secures patient data, ensures interoperability between providers, and automates payment processing while maintaining strict privacy standards.",
  },
  {
    question: "How blockchain will reduce the cost of insurance?",
    answer:
      "By automating manual tasks (underwriting, claims), reducing fraud, and eliminating intermediaries, blockchain significantly lowers operational overhead, allowing for cheaper premiums.",
  },
  {
    question: "Is blockchain the future of insurance?",
    answer:
      "Yes, blockchain is poised to be the backbone of the modern insurance industry, driving digital transformation, trust, and efficiency across the entire value chain.",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Insurance"
        text="Avner Global Blockchain Business offers solutions that help the insurance industry digitize legacy processes. Transform your insurance business with secure, transparent, and efficient blockchain technology."
        bgimage="/assets/image/Insurance.jpg" // Assuming this image exists or using a placeholder name
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/Insurance.png" // Placeholder
                alt="Blockchain in Insurance"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Blockchain: A Complete Makeover for Insurance Industry
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Blockchain technology is transforming the insurance industry by
                providing a globally distributed ledger that is secure and
                stable. The use of cryptography-dependent technologies ensures
                that transaction details, records, and information are
                immutable, making hacking, alterations, and modifications nearly
                impossible.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Avner Global, we are using blockchain technology to transform
                the insurance industry across various categories like property
                and casualty, life, health, and more. Our blockchain solutions
                are designed to simplify processes, increase transparency, and
                enhance customer engagement.
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
              Streamlined and Secure Solutions
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a comprehensive suite of blockchain services tailored
              specifically for the evolving needs of the insurance sector.
            </p>
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

      {/* Benefits / Who We Are Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Benefits of Blockchain in Insurance
            </SectionHeading>
            <p className="text-blue-200 mt-4">
              Why leading insurers are choosing Avner Global for their
              blockchain journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Experience",
                desc: "Deep understanding of insurance industry challenges and regulatory landscapes.",
                icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
              },
              {
                title: "One-Stop-Shop",
                desc: "Comprehensive services from initial consultation to post-deployment maintenance.",
                icon: <Store className="w-10 h-10 text-[#00D9FF]" />,
              },
              {
                title: "International Exposure",
                desc: "Global reach meeting international requirements and standards.",
                icon: <Globe2 className="w-10 h-10 text-[#00D9FF]" />,
              },
              {
                title: "Blockchain Expertise",
                desc: "Mastery of the latest technologies ensuring scalability, security, and transparency.",
                icon: <BadgeDollarSign className="w-10 h-10 text-[#00D9FF]" />, // Using a generic placeholder icon
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Blockchain Insurance Use Cases
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

      {/* Stats / Why Choose Us */}
      <Stats />

      {/* FAQs */}
      <FAQAccordion items={faqs} />
    </>
  );
}

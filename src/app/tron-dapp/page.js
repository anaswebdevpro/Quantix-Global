"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AppWindow,
  ArrowRightLeft,
  CheckCircle2,
  Code2,
  Coins,
  Cpu,
  Database,
  Globe,
  Layers,
  LayoutGrid,
  Lock,
  Network,
  Rocket,
  Settings,
  ShieldCheck,
  Smartphone,
  Wallet,
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
    title: "TRON DApp Development",
    desc: "We build secure, reliable, and scalable decentralized applications on the TRON network, tailored to your business needs.",
    icon: <AppWindow className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRC-10 Token Development",
    desc: "Launch your own TRC-10 technical standard tokens natively on the TRON blockchain with our expert development services.",
    icon: <Coins className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRC-20 Token Development",
    desc: "We develop TRC-20 tokens that are fully compatible with Ethereum's ERC-20 standard, ensuring broad interoperability.",
    icon: <Layers className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRON Wallet Development",
    desc: "Customizable, secure wallets for TRX and TRC tokens available on Android, iOS, desktop, and hardware platforms.",
    icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRON Node Set-Up",
    desc: "Professional installation and maintenance of public and private nodes on the TRON network to ensure optimal performance.",
    icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "API Integration",
    desc: "Seamless integration of TRON-offered APIs into your existing systems for smooth and efficient blockchain interaction.",
    icon: <Code2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contracts Development",
    desc: "Deploy robust Solidity-based smart contracts that automate business operations securely and without intermediaries.",
    icon: <Lock className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Decentralized Exchange (DEX)",
    desc: "Build your own decentralized exchange for the safe and fast trading of TRC-10 and TRC-20 tokens.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const features = [
  {
    title: "High-storage Capacity",
    desc: "TRON offers massive storage capacity, making it ideal for performance-heavy DApps that require extensive data handling.",
    icon: <Database className="w-8 h-8 text-white" />,
  },
  {
    title: "EVM Compatibility",
    desc: "Fully compatible with the Ethereum Virtual Machine (EVM), allowing for easy porting of DApps from Ethereum to TRON.",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
  {
    title: "Proof of Stake (DPoS)",
    desc: "Utilizes Delegated Proof of Stake consensus mechanism, ensuring greater energy efficiency and network scalability.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "High Scalability",
    desc: "Capable of handling thousands of transactions per second (TPS), ensuring your DApp remains fast even under heavy load.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
];

const faqs = [
  {
    question: "What is blockchain technology and its utility?",
    answer:
      "Blockchain is a decentralized, transparent, and secure ledger system. Its utility lies in enabling peer-to-peer transactions without intermediaries, ensuring data immutability, and reducing operational costs across various industries.",
  },
  {
    question: "How is Blockchain revolutionizing industries?",
    answer:
      "It eliminates middlemen, increases transparency, and enhances security. Industries like finance, supply chain, and healthcare benefit from automated smart contracts and immutable record-keeping.",
  },
  {
    question: "How much is the cost for TRON DApp development?",
    answer:
      "The cost varies based on the complexity of the DApp, features required, and development hours. Contact us for a detailed quote tailored to your specific project needs.",
  },
  {
    question: "Is TRON good for DApp development?",
    answer:
      "Yes, TRON is excellent for DApps due to its high throughput, low transaction fees, and EVM compatibility, making it especially popular for gaming and entertainment applications.",
  },
  {
    question: "What industries can use TRON blockchain?",
    answer:
      "Sectors such as Finance (DeFi), Gaming, Entertainment, Supply Chain, and Healthcare can leverage TRON for secure, fast, and cost-effective decentralized solutions.",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="TRON DAPP Development Services Company"
        text="Experience the benefits of lightning-fast transactions and low fees with our TRON DApp development services. Our team of experts will help you build secure, scalable, and decentralized applications on the TRON network."
        bgimage="/assets/image/Tron-Dapp-Development-1.jpg" // Placeholder
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/Tron-Dapp-Development.png" // Placeholder
                alt="TRON DApp Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Best TRON DApp Development Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our blockchain developer’s experience and deep domain knowledge
                allow us to build bug-free and efficient decentralized
                applications for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We offer high-quality TRON DApp development services at highly
                affordable rates, ensuring you get the best ROI for your
                blockchain initiative.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/contact-us">
                  <Button variants="primary">Connect With Experts</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              TRON DApp Development Services
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From smart contracts to full-scale decentralized exchanges, we
              cover all aspects of the TRON ecosystem.
            </p>
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

      {/* Features / Benefits Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Why Build on TRON?
            </SectionHeading>
            <p className="text-blue-100 mt-4">
              Unique properties that make TRON a superior choice for DApp
              development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="mb-4 bg-[#00D9FF] p-3 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-[#153577] text-left mb-6">
                Why Choose Avner Global?
              </SectionHeading>
              <ul className="space-y-4">
                {[
                  "Expert Team: Deep expertise in the TRON ecosystem.",
                  "Affordable Services: Quality development at competitive prices.",
                  "On-time Delivery: Reliable timelines and project management.",
                  "24/7 Support: Constant monitoring and support for live applications.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9FF]" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/coin.png"
                alt="Why Choose Avner Global"
                width={400}
                height={400}
                className="object-contain"
              />
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

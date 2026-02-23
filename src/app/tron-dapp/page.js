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
  Check,
  Search,
  BookOpen,
  Map,
  Construction,
  Code,
  UploadCloud,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";

const services = [
  {
    title: "TRON DApp Development",
    desc: "Our skilled developers specialize in building decentralized applications tailored to various industry needs, ensuring efficiency and scalability.",
    icon: <AppWindow className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRC-10 Token Development",
    desc: "Leverage our experience in launching TRON-based tokens natively on the TRON network using the TRC-10 technical standard.",
    icon: <Coins className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRC-20 Token Development",
    desc: "We offer customizable and reliable TRC-20 token development solutions that are fully compatible with Ethereum standards.",
    icon: <Layers className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRON Wallet Development",
    desc: "Build secure and user-friendly storage solutions for TRON assets across multiple platforms, including mobile and desktop.",
    icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "TRON Node Set-Up",
    desc: "Professional provisioning and configuration of network nodes to ensure your business operations run smoothly on the TRON network.",
    icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "API Integration",
    desc: "Seamlessly integrate necessary blockchain APIs into your existing systems for efficient and transparent data exchange.",
    icon: <Code2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contracts Development",
    desc: "Deploy robust, secure, and audited Solidity-based smart contracts that automate your business processes without intermediaries.",
    icon: <Lock className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Decentralized Exchange (DEX)",
    desc: "Build highly secure decentralized exchange platforms on the TRON network for fast and transparent asset trading.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const features = [
  {
    title: "Multi-language Support",
    desc: "Our DApps support multiple languages using Google Proto Buffs for global accessibility.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    title: "High TPS Capacity",
    desc: "TRON is capable of handling thousands of transactions per second, ensuring high performance.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "High-storage Capacity",
    desc: "The network provides massive storage capacity for complex and data-heavy applications.",
    icon: <Database className="w-8 h-8 text-white" />,
  },
  {
    title: "EVM Compatibility",
    desc: "Fully compatible with Ethereum Virtual Machine (EVM) for easy migration and interoperability.",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
];

const processSteps = [
  {
    title: "Requirement Gathering",
    desc: "Analyzing and understanding client needs to define the project scope.",
    icon: <Search className="w-6 h-6 text-white" />,
  },
  {
    title: "Feasibility Study",
    desc: "Evaluating technical and operational feasibility for company requirements.",
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
  {
    title: "Road Map",
    desc: "Designing a comprehensive application development plan and timeline.",
    icon: <Map className="w-6 h-6 text-white" />,
  },
  {
    title: "Technical Structure",
    desc: "Building the core architecture and defining the tech stack.",
    icon: <Construction className="w-6 h-6 text-white" />,
  },
  {
    title: "Development",
    desc: "Core coding phase for the DApp and smart contracts by expert developers.",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    title: "Deployment",
    desc: "Configuring IT infrastructure and launching the DApp on the TRON mainnet.",
    icon: <UploadCloud className="w-6 h-6 text-white" />,
  },
  {
    title: "Upgradation",
    desc: "Handling scalability and updates based on the latest market trends.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
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
        text="Now you can be a part of the decentralized revolutionary market with the help of Tron DApp development services. We have the best industry stalwarts who have experience in developing efficient, reliable, and scalable decentralized applications with custom smart contracts over a TRON Blockchain network."
        bgimage="/assets/image/DApp_banner.jpg"
        className=""
      />

      {/* Experience Section */}
      <section className="py-20 bg-[#F0F9FA]">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-12/12 lg:w-1/2">
              <Image
                src="/assets/image/trondapp_development1.png"
                alt="Our Blockchain Developer's Experience"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="w-full md:w-12/12 lg:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Our Blockchain Developer’s Experience
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                TRON is a decentralized network that is quite similar to
                Ethereum and EOS when we check out the functional aspects.
                Webcom Systems provides you with customized DApp and smart
                contract solutions by leveraging the full potential of the TRON
                network.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our team of experienced developers stays ahead of the curve,
                ensuring that your decentralized applications are built with the
                latest security standards and performance optimizations.
              </p>
              <div className="mt-8">
                <Link href="/contact-us">
                  <Button variants="action">Talk To An Expert</Button>
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
              Our Extensive TRON DApp Development Services
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of TRON-based development services to help
              businesses embrace the power of decentralization.
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
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-center"
              >
                <div className="mb-6 mx-auto p-4 rounded-full bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
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

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Notable Features of Our TRON DApps
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
              >
                <div className="mb-4 mx-auto bg-[#153577] p-4 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#153577]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/image/trondapp_development2_2.png"
                alt="Development Process"
                width={500}
                height={600}
                className="mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-8">
                Our TRON DApp Development Process
              </SectionHeading>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="shrink-0 bg-[#00D9FF] p-2 rounded-lg text-white font-bold h-10 w-10 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#333d47] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-12/12 lg:w-1/2">
              <SectionHeading className="text-[#153577] text-left mb-6 leading-tight">
                Why Choose Webcom Systems for Your TRON DApp Development?
              </SectionHeading>
              <p className="text-gray-600 mb-8 italic">
                The following listed traits help us get an edge over other
                companies in the market.
              </p>
              <ul className="space-y-4">
                {[
                  "Well-organized and expert TRON DApp development team.",
                  "Focus on agility, security, and transparency.",
                  "Trusted blockchain system creators for over a decade.",
                  "Customized Smart Contract Development.",
                  "Priority on Quality and Security aspects.",
                  "Timely delivery at competitive rates.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00D9FF]" strokeWidth={3} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-12/12 lg:w-1/2 flex justify-center">
              <Image
                src="/assets/image/trondapp_development5.png"
                alt="Why Choose Us"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hire Developers Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
              <Image
                src="/assets/image/trondapp_development6.png"
                alt="Hire Developers"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="bg-[#00D9FF]/10 p-2 px-4 rounded-full inline-block mb-4">
                <span className="text-[#153577] font-bold text-sm tracking-widest uppercase">
                  Expert Team
                </span>
              </div>
              <SectionHeading className="text-[#153577] text-left mb-6">
                Hire Our Proficient TRON DApp Developers
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Our proficient developers focus on creating sector-specific
                applications that drive real business value. Whether you are in
                fintech, gaming, or supply chain, we have the expertise to build
                your TRON DApp.
              </p>
              <Link href="/contact-us">
                <Button variants="action" className="px-10 py-4 text-lg">
                  Hire Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <FAQAccordion items={faqs} />
    </>
  );
}

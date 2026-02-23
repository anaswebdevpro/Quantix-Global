"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AppWindow,
  Briefcase,
  Code2,
  Coins,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Headphones,
  Layers,
  LayoutGrid,
  Lock,
  Network,
  Radio,
  Rocket,
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
    title: "Web 3 Metaverse Development",
    desc: "We create immersive metaverse experiences that integrate VR/AR and blockchain, opening new dimensions for interaction.",
    icon: <Globe className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web 3 Wallet Development",
    desc: "Secure, non-custodial wallets that allow users to store, send, and receive digital assets with complete control.",
    icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web 3 Exchange Development",
    desc: "Robust decentralized exchanges (DEXs) facilitating secure, peer-to-peer trading without intermediaries.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web 3 Game Development",
    desc: "Integrating blockchain into gaming (P2E) to enable true asset ownership and decentralized economies.",
    icon: <Gamepad2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web3 Smart Contract Development",
    desc: "Automating agreements with self-executing code that is tamper-proof and verified on the blockchain.",
    icon: <Code2 className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web 3.0 Browsers",
    desc: "Developing decentralized browsers that prioritize user privacy and seamlessly integrate with dApps.",
    icon: <AppWindow className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Web Streaming Services",
    desc: "Decentralized streaming platforms that reward creators fairly and eliminate censorship.",
    icon: <Radio className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Decentralized Autonomous Organization (DAO)",
    desc: "Building community-led organizations where governance is encoded in smart contracts.",
    icon: <Users className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Decentralized Finance (DeFi)",
    desc: "Creating open financial systems that provide accessible banking services to everyone, everywhere.",
    icon: <Coins className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const features = [
  {
    title: "Decentralization",
    desc: "A distributed network structure that eliminates the concentration of power, ensuring that no single entity controls the data or the network.",
    icon: <Network className="w-8 h-8 text-white" />,
  },
  {
    title: "Blockchain Technology",
    desc: "The backbone of Web 3.0, providing a transparent, tamper-proof, and secure ledger for all transactions and interactions.",
    icon: <Database className="w-8 h-8 text-white" />,
  },
  {
    title: "Augmented Security & Privacy",
    desc: "Eliminates single points of failure and gives users absolute control over their own data and who has access to it.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
];

const whyChooseUs = [
  {
    title: "Leading Blockchain Company",
    desc: "Extensive expertise in the blockchain sector with a proven track record of successful projects.",
    icon: <Zap className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "End-to-End Services",
    desc: "We handle everything from initial brainstorming and design to development, deployment, and maintenance.",
    icon: <Layers className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Favorable Pricing",
    desc: "Exceptional quality services at competitive pricing models suitable for both startups and enterprises.",
    icon: <Coins className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Personalized Services",
    desc: "We offer tailored innovative solutions designed to meet the unique needs and scales of your business.",
    icon: <LayoutGrid className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Prioritizing Security",
    desc: "Strict adherence to advanced industry security standards to safeguard your digital assets and user data.",
    icon: <Lock className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "24/7 Service",
    desc: "Round-the-clock support ensuring your Web 3.0 applications run smoothly at all times.",
    icon: <Headphones className="w-6 h-6 text-[#00D9FF]" />,
  },
];

const faqs = [
  {
    question: "What is a Web 3.0 ecosystem?",
    answer:
      "A Web 3.0 ecosystem is a network of decentralized technologies, applications (dApps), and protocols that work together to create a user-centric, secure, and permissionless internet.",
  },
  {
    question: "Why is Web 3.0 Education important?",
    answer:
      "Web 3.0 introduces new paradigms like decentralization and tokenomics. Education is crucial for developers and businesses to understand how to leverage these technologies specifically and safely.",
  },
  {
    question: "What are Web 3.0 Development Best Practices?",
    answer:
      "Key practices include prioritizing security (audits), focusing on decentralization, ensuring interoperability between chains, and designing intuitive user interfaces to bridge the gap for mainstream users.",
  },
  {
    question: "Examples of Web 3.0 Innovation?",
    answer:
      "Prominent examples include DeFi platforms (Uniswap), NFT marketplaces (OpenSea), DAOs (MakerDAO), and decentralized storage networks (IPFS/Filecoin).",
  },
  {
    question: "What are common Web 3.0 Tools and Frameworks?",
    answer:
      "Essential tools include Solidity or Rust for smart contracts, Web3.js or Ethers.js for frontend integration, and development environments like Truffle or Hardhat.",
  },
];

import { ArrowRightLeft, Users } from "lucide-react";

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Web3 Development Company"
        text="Creating dynamic Web 3.0 solutions that integrate blockchain, AI, and IoT technologies for enhanced interactivity. Step into the future of the decentralized internet."
        bgimage="/assets/image/Banner-1-5.jpg" // Placeholder
        className="hidden"
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/web3.jpg" // Placeholder
                alt="Web 3.0 Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Partner with Our Web 3.0 Development Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Web 3.0 is the latest advancement in the internet, enhancing
                user experience and data ownership. In today’s competitive
                world, it is crucial to partner with a competent Web 3.0
                development company to enter this growing community.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Avner Global, our services are designed to satisfy the unique
                needs of businesses across various industries. Our team of
                professionals is highly skilled in creating Web 3.0 solutions
                that create tangible value.
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
              Our Web 3.0 Services
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

      {/* Features Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Core Features of Web 3.0
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-center"
              >
                <div className="mb-6 bg-[#00D9FF] p-4 rounded-full w-fit mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Why Choose Avner Global?
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 bg-gray-50 p-2 rounded-lg h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#153577] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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

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
  Store,
  Users,
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
    title: "Cosmos Blockchain Consulting",
    desc: "Expert guidance on leveraging the Cosmos blockchain to meet your specific business needs and strategic goals.",
    icon: <Users className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Cosmos Marketplace Creation",
    desc: "We build decentralized marketplaces on the Cosmos network, enabling secure and efficient peer-to-peer trading.",
    icon: <Store className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Cosmos App Development",
    desc: "Our experienced developers create high-performing decentralized applications (dApps) tailored to the Cosmos ecosystem.",
    icon: <AppWindow className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Data Transfer Within Chains",
    desc: "Ensure secure and efficient data transfer between various blockchains within the Cosmos ecosystem.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Inter-Blockchain Communication",
    desc: "Utilize IBC protocols to facilitate seamless communication and asset transfer between different independent blockchains.",
    icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contract Creation Services",
    desc: "We provide professional smart contract development services specifically designed for the Cosmos Hub.",
    icon: <Code2 className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const benefits = [
  {
    title: "Easy to Use",
    desc: "The modularity of the Cosmos SDK makes building applications significantly easier and faster compared to other platforms.",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
  },
  {
    title: "Highly Scalable",
    desc: "Cosmos provides a highly scalable network capable of handling a high volume of transactions per second without congestion.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Easy to Customize",
    desc: "Designed for flexibility, allowing developers to easily customize existing applications or create new ones from scratch.",
    icon: <Settings className="w-8 h-8 text-white" />,
  },
  {
    title: "High Speed",
    desc: "Interconnected block architecture ensures high transaction speeds, reducing latency for end-users.",
    icon: <Rocket className="w-8 h-8 text-white" />,
  },
  {
    title: "No Manual Control",
    desc: "Built for self-governance; applications run autonomously without the need for manual oversight or centralized control.",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
  {
    title: "Interoperable",
    desc: "Advanced protocols facilitate easy communication and connection between independent blockchains.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
];

const process = [
  {
    title: "Analysis and Planning",
    desc: "We analyze your requirements and plan the architecture for your Cosmos-based solution.",
  },
  {
    title: "Design and Prototyping",
    desc: "Our team designs the UI/UX and creates prototypes to visualize the final product.",
  },
  {
    title: "Development and Testing",
    desc: "We write clean, efficient code and rigorously test the application for bugs and security vulnerabilities.",
  },
  {
    title: "Deployment and Launch",
    desc: "We deploy your application to the Cosmos network and ensure a smooth launch.",
  },
  {
    title: "Post-Launch Support",
    desc: "We provide ongoing maintenance and support to keep your application running smoothly.",
  },
];

const faqs = [
  {
    question: "What is Cosmic Stargate?",
    answer:
      "Stargate is a set of upgrades intended to improve the performance of several blockchains and provide better opportunities for developers. It includes the Inter-Blockchain Communication (IBC) protocol.",
  },
  {
    question: "What Is A Gravity Bridge?",
    answer:
      "The Gravity Bridge is a bridge protocol that connects the Ethereum blockchain to the Cosmos Hub, allowing the secure transfer of tokens between the two ecosystems.",
  },
  {
    question: "Peggy zones, what does it mean?",
    answer:
      "Peggy zones are blockchains that connect with the Cosmos Hub using a different consensus mechanism, acting as a bridge to other networks like Ethereum.",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithForm
        heading="Expertise in Cosmos Blockchain Development"
        text="We take a holistic approach from planning to implementation, ensuring your business realizes the maximum value of blockchain technology. Build interoperable and scalable solutions with Cosmos."
        bgimage="/assets/image/cryptobanner.png" // Placeholder
        className="hidden"
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/cosmoimg.jpg" // Placeholder
                alt="Cosmos Blockchain Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Building the Future with Cosmos
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Whether you’re looking to build decentralized applications
                (dApps), private blockchains, or improve the interoperability of
                your existing systems, Avner Global has the expertise to bring
                your vision to life.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Trust us to be your partner in success as you embark on your
                blockchain journey. Our team stays abreast of the latest trends
                to provide high-quality Cosmos services.
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
              Our Cosmos Blockchain Development Services
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Benefits of Cosmos SDK
            </SectionHeading>
            <p className="text-blue-200 mt-4">
              Why developers and businesses prefer building on Cosmos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="mb-4 bg-[#00D9FF] p-3 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Cosmos Blockchain Development Process
            </SectionHeading>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#153577] text-white flex items-center justify-center font-bold text-lg group-hover:bg-[#00D9FF] transition-colors">
                    {index + 1}
                  </div>
                  {index !== process.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-[#333d47] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Why Choose Avner Global?
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg">
                Avner Global provides innovative, customized, and secure
                blockchain solutions that are interoperable and fast. We
                emphasize compliance with both local and international
                regulations and aim to exceed business expectations with our
                deep expertise in the Cosmos ecosystem.
              </p>
              <div className="mt-8">
                <Link href="/contact-us">
                  <Button variants="primary">Talk To Our Experts</Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/trondapp_development6.png"
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

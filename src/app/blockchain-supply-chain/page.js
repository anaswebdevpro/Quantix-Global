"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Wallet,
  FileText,
  Leaf,
  Network,
  Settings,
  Check,
  Zap,
  Award,
  Users,
  MessageSquare,
  Globe,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import SupportCTA from "@/components/Sections/SupportCTA";
import Stats from "@/components/Sections/Stats";
import TechStack from "@/components/Sections/TechStack";

const services = [
  {
    title: "Security",
    desc: "Our Blockchain-based Supply Chain Solution provides enhanced security layers to protect sensitive supply chain data from breaches and unauthorized access.",
    icon: <ShieldCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Traceability",
    desc: "We ensure that businesses can track the entire material supply chain transparently, from raw materials to the finished product delivered to the customer.",
    icon: <Search className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Supply Chain Finance",
    desc: "Facilitate secure and transparent financial transactions across the supply chain, reducing delays and improving cash flow management.",
    icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contracts",
    desc: "Deploy self-executing contracts that automate supply chain processes, ensuring trust and efficiency without the need for intermediaries.",
    icon: <FileText className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Sustainable Sourcing",
    desc: "We promote transparency in sourcing raw materials, helping businesses verify ethical and sustainable practices throughout their supply network.",
    icon: <Leaf className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Interoperability",
    desc: "Our solutions allow for secure and seamless data sharing across multiple blockchain networks and existing enterprise systems.",
    icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Management",
    desc: "We promote synchronized transactions and improved blockchain security to manage sensitive supply chain operations effectively.",
    icon: <Settings className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const skills = [
  "Development of efficient and secure data management systems.",
  "Expertise in transparency and traceability systems.",
  "Vast experience in managing clinical trial data and documentation.",
  "Enabling seamless communication between supply chain partners.",
];

const useCases = [
  {
    number: "01",
    title: "Supply Chain Transparency",
    desc: "Blockchain provides a shared, immutable record of every transaction, reducing risk and increasing trust across the entire network.",
  },
  {
    number: "02",
    title: "Provenance & Traceability",
    desc: "Record every detail—price, date, location, and quality—ensuring that the origin of every product is verifiable.",
  },
  {
    number: "03",
    title: "Automated Payments",
    desc: "Speed up transaction cycles and reduce disputes with automated payment triggers based on verified shipment milestones.",
  },
  {
    number: "04",
    title: "Inventory Management",
    desc: "Real-time visibility into inventory levels across the global supply chain helps prevent stockouts and overstocking.",
  },
];

const faqs = [
  {
    question: "What are the benefits of using blockchain in the supply chain?",
    answer:
      "Blockchain enhances transparency, security, and efficiency. It allows for real-time tracking of goods, reduces paperwork through automation, and builds trust among all stakeholders by providing an immutable record of transactions.",
  },
  {
    question: "How can blockchain help with ethical sourcing?",
    answer:
      "Blockchain can verify the origin of materials and ensure that ethical standards are met at every stage of production. This allows consumers to make informed choices and companies to prove their commitment to sustainability.",
  },
  {
    question: "What is blockchain supply chain transparency?",
    answer:
      "It refers to the ability to view the entire history, location, and status of a product as it moves through the supply chain. This visibility helps in identifying bottlenecks and verifying authenticity.",
  },
  {
    question: "Can blockchain improve clinical trial logistics?",
    answer:
      "Yes, it ensures the integrity of the medical supply chain, tracking sensitive materials under strict conditions and ensuring they reach the right destination securely.",
  },
];

export default function SupplyChain() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Supply Chain Solutions"
        text="Smart Contracts, Smarter Supply Chains: Revolutionizing Business Processes. Improve transparency, reduce costs, and enhance trust with our cutting-edge blockchain solutions."
        bgimage="/assets/image/banner-1-1.jpg"
        className="hidden"
      />

      {/* Intro Section */}
     <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
             Blockchain-based Supply Chain Solution
Provider Company
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              Webcom Systems- A Blockchain-based Supply Chain Solution Provider Company help businesses improve their supply chain processes, reduce costs, and enhance their position as responsible manufacturers. Our solutions benefit people by improving the quality of products, reducing costs, and increasing transparency and trust in the supply chain.
              
              
            </SubHeading>
           <Link href="/contact-us">
                <Button variants="action">Talk To An Expert</Button>
              </Link>
          </div>
        </Container>
      </section>
<TechStack/>
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47] mb-4">
              Our Blockchain Services For the Supply Chain Solutions Industry
            </SectionHeading>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Blockchain-based Supply Chain Solution facilitates the secure
              transfer of supply chain data, ensuring that data is protected and
              secure. We propose a generic architecture for storing critical
              supply chain records using blockchain technology.
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
                className="p-8 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-center"
              >
                <div className="mb-6 mx-auto p-4 rounded-full bg-gray-50 shadow-sm inline-block group-hover:scale-110 transition-transform">
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



      {/* Expertise & Skills */}
      {/* <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/ladysupport.jpg"
                alt="Expertise"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Our Skills in Blockchain for Supply Chain Solutions
              </SectionHeading>
              <ul className="space-y-4">
                {skills.map((skill, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1 shrink-0 bg-[#00D9FF] p-1 rounded-full">
                      <Check
                        className="w-4 h-4 text-[#153577]"
                        strokeWidth={3}
                      />
                    </div>
                    <p className="text-gray-700 font-medium">{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Blockchain Supply Chain Solutions Use Cases
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-all relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-4xl font-black text-gray-100">
                  {item.number}
                </span>
                <h3 className="text-xl font-bold text-[#153577] mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Split Section */}
      <section className="bg-[#153577] text-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
            <Image
              src="/assets/image/ladysupport.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 py-12 px-6 md:px-12 lg:px-20 bg-[#153577] flex items-center">
            <div className="max-w-xl">
              <SectionHeading className="text-white text-left mb-2 py-0">
                Why Choose Us?
              </SectionHeading>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                At Avner Global, we understand that there are many options when
                it comes to blockchain supply chain solutions. Here is why we
                are the right partner for your business:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Unmatched expertise in blockchain architecture and development.",
                  "Proven experience in delivering large-scale enterprise solutions.",
                  "24/7 reliable support and maintenance for live systems.",
                  "A track record of delivering efficient and transparent results.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-[#00D9FF]" strokeWidth={3} />
                    <span className="text-blue-50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us">
                <Button variants="action">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Final Build Section */}
      <section className="py-20 bg-white text-center">
        <Container>
          <SectionHeading className="mb-4">
            Let&apos;s Build Something Amazing Together
          </SectionHeading>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            We are a company that believes in oneness and creating something
            great every time. Our expertise and dedication drive us to push the
            boundaries of what&apos;s possible in blockchain technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full">
              <Award className="text-[#00D9FF] w-5 h-5" />
              <span className="font-bold text-[#153577]">Top Rated</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full">
              <Users className="text-[#00D9FF] w-5 h-5" />
              <span className="font-bold text-[#153577]">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full">
              <MessageSquare className="text-[#00D9FF] w-5 h-5" />
              <span className="font-bold text-[#153577]">
                Free Consultation
              </span>
            </div>
          </div>
        </Container>
      </section>
      {/* Idea Section */}
   <SupportCTA/>
      {/* FAQs */}
      <FAQAccordion items={faqs} />
    </>
  );
}

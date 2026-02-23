"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Check,
  ClipboardCheck,
  Coins,
  Database,
  FileCode,
  History,
  Info,
  ScanLine,
  Shield,
  Sprout,
  Tractor,
  Truck,
  Users,
  Wheat,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import Stats from "@/components/Sections/Stats";
import SupportCTA from "@/components/Sections/SupportCTA";

const services = [
  {
    title: "Provenance and Traceability",
    desc: "We enable complete tracking of food products from farm to table to reduce fraud, guarantee quality, and build consumer trust.",
    icon: <ScanLine className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Supply Chain Management",
    desc: "Using permissioned blockchains, we facilitate secure data sharing among stakeholders, reducing transaction costs and delays.",
    icon: <Truck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contracts",
    desc: "Our smart contracts automate agreements between farmers, distributors, and retailers, ensuring timely payments and compliance.",
    icon: <FileCode className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Quality Assurance and Certification",
    desc: "Record certifications and inspection results immutably on the blockchain to prove adherence to organic or fair-trade standards.",
    icon: <ClipboardCheck className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Farmer Empowerment",
    desc: "We offer platforms that give farmers direct access to markets, allowing them to negotiate fair prices and bypass intermediaries.",
    icon: <Users className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Agricultural Data Management",
    desc: "A decentralized ledger for storing critical agricultural data, enabling informed decision-making and better crop management.",
    icon: <Database className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Agricultural Insurance",
    desc: "Blockchain enables indexed insurance policies that trigger automatic payouts based on weather data, protecting farmers from risks.",
    icon: <Shield className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Agricultural Trading",
    desc: "Global decentralized trading platforms that allow small-scale farmers to reach international buyers efficiently.",
    icon: <ArrowRightLeft className="w-10 h-10 text-[#00D9FF]" />,
  },
  {
    title: "Smart Contract Automation",
    desc: "Real-time visibility across production, transportation, and distribution, automated by responsive smart contract logic.",
    icon: <Zap className="w-10 h-10 text-[#00D9FF]" />,
  },
];

const useCases = [
  {
    title: "Crop and Food Production",
    desc: "Optimize crop yields and manage resources efficiently by using data-driven insights secured on the blockchain.",
    icon: <Wheat className="w-8 h-8 text-white" />,
  },
  {
    title: "Food Supply Chain",
    desc: "End-to-end transparency allows consumers to verify origin, and businesses to identify bottlenecks instantly.",
    icon: <History className="w-8 h-8 text-white" />,
  },
  {
    title: "Controlling Weather Crisis",
    desc: "Use historical and real-time weather data stored on blockchain to manage risks and plan planting schedules better.",
    icon: <Info className="w-8 h-8 text-white" />,
  },
  {
    title: "Managing Agricultural Finance",
    desc: "Simplify loan applications and expense tracking for farmers with transparent financial records.",
    icon: <Coins className="w-8 h-8 text-white" />,
  },
  {
    title: "Product Traceability",
    desc: "A permanent digital record for every product batch, ensuring quick recalls if necessary and proving authenticity.",
    icon: <ScanLine className="w-8 h-8 text-white" />,
  },
  {
    title: "Fair Pricing",
    desc: "Direct negotiation features enable fair pricing models that benefit the primary producers.",
    icon: <Users className="w-8 h-8 text-white" />,
  },
 
];

const faqs = [
  {
    question: "How does blockchain ensure food safety?",
    answer:
      "Blockchain allows for the rapid tracing of food products back to their source. In the event of contamination, the specific batch can be identified and isolated quickly, preventing widespread health issues.",
  },
  {
    question: "How does it create fairness for farmers?",
    answer:
      "By eliminating intermediaries and providing direct market access, blockchain ensures farmers receive a larger share of the profit. Smart contracts also guarantee immediate payment upon delivery.",
  },
  {
    question: "Can blockchain help with weather-related risks?",
    answer:
      "Yes, blockchain can support parametric insurance models where payouts are automatically triggered by confirmed weather data (like drought or flood) from trusted oracles, providing faster relief to farmers.",
  },
  {
    question: "Is blockchain in agriculture sustainable?",
    answer:
      "Absolutely. It promotes sustainable practices by verifying certifications (e.g., organic, non-GMO) and optimizing supply chains to reduce waste and carbon footprint.",
  },
];

export default function Agriculture() {
  return (
    <>
      <HeroWithForm
        heading="Blockchain In Agriculture"
        text="We provide blockchain solutions for the agriculture industry that improve transparency, efficiency, and sustainability. Secure your supply chain and empower farmers with decentralized technology."
        bgimage="/assets/image/Agriculture.jpg" // Using an existing agriculture image
        className=""
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/image/Agricultural-Finance-1.jpg" // Placeholder or mapped
                alt="Blockchain in Agriculture"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Blockchain-based Agriculture Solution Provider Company
              </SectionHeading>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                We focus on the use of blockchain technology to track food
                provenance, allowing consumers to verify the origin and quality
                of agricultural products. It highlights the creation of
                trustworthy food supply chains.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                By eliminating intermediaries, we facilitate fairer systems and
                empower farmers through peer-to-peer transactions. Our solutions
                bring unprecedented visibility to the entire agricultural
                ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
           {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Blockchain Agriculture Key Use Cases
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From farm to fork, see how our technology is revolutionizing every
              step.
            </p>
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

            {/* Why Choose Us Section */}
     <section className="bg-[#153577] text-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
            <Image
              src="/assets/image/agriculture_tab.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 py-12 px-6 md:px-12 lg:px-20 bg-[#153577] flex items-center">
            <div className="max-w-xl">
              <SectionHeading className="text-white text-left mb-2 py-0 leading-tight">
                Benefits of Blockchain in Agriculture
              </SectionHeading>

              <p className="text-blue-100 text-base mb-4 leading-relaxed">
                Blockchain technology offers numerous benefits to the agriculture
                industry, including improved data security, interoperability,
                and   patient care.
              </p>

              <p className="text-blue-200 font-semibold mb-4 text-sm">
                Here are some of the benefits of blockchain in agriculture:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Our solution facilitates secure data sharing between  healthcare providers, enabling them to collaborate more effectively and provide better patient care.",
                  "Our solution provides interoperability in blockchain, allowing providers to send or receive patient data to another provider in any location in a secure way.",
                  "Increased patient care, decreased costs, and more efficient operations are made possible by our solutions.",
                  "Our company is committed to tailoring blockchain answers to the precise demands of healthcare clients.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 group">
                    <div className="mt-1 shrink-0">
                      <Check
                        className="w-5 h-5 text-[#00D9FF]"
                        strokeWidth={3}
                      />
                    </div>
                    <p className="text-blue-50 text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-blue-800/50">
                <p className="text-blue-200 text-xs leading-relaxed italic">
                  Our company is a great choice for blockchain agriculture
                  solutions because of your expertise, innovation, customer
                  focus, focus on security, focus on interoperability, and
                  commitment to partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Our Blockchain Services For the Agriculture Industry
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

 


      {/* Stats */}

      <SupportCTA />


      {/* <Stats /> */}

      {/* FAQs */}
      <FAQAccordion items={faqs} />
    </>
  );
}

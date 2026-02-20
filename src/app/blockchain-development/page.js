"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AppWindow,
  Banknote,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CodeXml,
  Coins,
  Cpu,
  Globe2,
  GraduationCap,
  Landmark,
  Layers,
  LayoutDashboard,
  LineChart,
  Lock,
  Megaphone,
  MonitorCheck,
  Network,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  Store,
  Terminal,
  TrendingUp,
  Truck,
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

const solutions = [
  {
    id: "smart-contracts",
    label: "Smart Contracts",
    title: "Smart Contract Development",
    desc: "We develop and audit digital contracts to ensure the automation of transactions without third-party involvement. Our smart contracts are secure, bug-free, and optimized for gas efficiency.",
    icon: <CodeXml className="w-12 h-12 text-[#00D9FF]" />,
    image: "/assets/image/Smart-Contracts.png", // Placeholder, check assets later
  },
  {
    id: "private-blockchain",
    label: "Private Blockchain",
    title: "Private Blockchain Development",
    desc: "Build a scalable and secure private blockchain network tailored for your enterprise needs. We ensure high throughput, data privacy, and permissioned access control.",
    icon: <Lock className="w-12 h-12 text-[#00D9FF]" />,
    image: "/assets/image/High-Security.png",
  },
  {
    id: "crypto-wallet",
    label: "Crypto Wallet",
    title: "Cryptocurrency Wallet Development",
    desc: "Our team develops multi-currency wallets with top-notch security features like multi-signature support, biometric authentication, and QR code scanning.",
    icon: <Wallet className="w-12 h-12 text-[#00D9FF]" />,
    image: "/assets/image/Cryptocurrency-Wallet.png",
  },
  {
    id: "decentralized-exchange",
    label: "Decentralized Exchange",
    title: "Decentralized Exchange (DEX) Development",
    desc: "Launch your own P2P exchange platform where users can trade cryptocurrencies directly without intermediaries. We focus on high liquidity, low latency, and robust security.",
    icon: <TrendingUp className="w-12 h-12 text-[#00D9FF]" />,
    image: "/assets/image/Decentralized-Exchange.png",
  },
  {
    id: "dapps",
    label: "DApps",
    title: "DApps Development",
    desc: "We build enterprise-grade decentralized applications (DApps) on various blockchain platforms like Ethereum, Tron, and EOS, offering transparency and resilience.",
    icon: <AppWindow className="w-12 h-12 text-[#00D9FF]" />,
    image: "/assets/image/Defi-Development.png",
  },
];

const services = [
  {
    title: "Custom Blockchain Development",
    desc: "We provide tailored blockchain solutions to meet specific business requirements, ensuring scalability and security.",
    icon: <Layers className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "dApps Development",
    desc: "Our team builds high-performance decentralized applications that are secure, transparent, and user-friendly.",
    icon: <AppWindow className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Crypto Wallet Development",
    desc: "Secure and feature-rich wallets for storing, sending, and receiving multiple cryptocurrencies aimed at diverse platforms.",
    icon: <Wallet className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Polygon Development Services",
    desc: "We leverage Polygon's Layer-2 scaling solution to build efficient and low-cost blockchain applications.",
    icon: <Network className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Smart Contract Development",
    desc: "Automate your business processes with our secure and reliable smart contract development services.",
    icon: <CodeXml className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Asset Tokenization",
    desc: "Convert your physical assets into digital tokens on the blockchain to enable fractional ownership and liquidity.",
    icon: <Coins className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const powerfulSolutions = [
  {
    title: "NFT Development",
    desc: "Marketplace and minting solutions.",
    icon: <LayoutDashboard className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Crowdfunding Platforms",
    desc: "ICO, STO, and IEO platforms.",
    icon: <Users className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Token Wallets",
    desc: "Storage for various digital assets.",
    icon: <Wallet className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Payment Platforms",
    desc: "Secure blockchain-based payment gateways.",
    icon: <Banknote className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Financial Trading Platforms",
    desc: "High-speed trading engines.",
    icon: <LineChart className="w-6 h-6 text-[#00D9FF]" />,
  },
  {
    title: "Marketplace Development",
    desc: "Decentralized marketplaces.",
    icon: <Store className="w-6 h-6 text-[#00D9FF]" />,
  },
];

const industries = [
  { name: "Logistics", icon: <Truck className="w-8 h-8 text-white" /> },
  { name: "Education", icon: <GraduationCap className="w-8 h-8 text-white" /> },
  { name: "Government", icon: <Landmark className="w-8 h-8 text-white" /> },
  { name: "eCommerce", icon: <ShoppingBag className="w-8 h-8 text-white" /> },
  { name: "Gaming", icon: <Cpu className="w-8 h-8 text-white" /> },
  { name: "Retail", icon: <Store className="w-8 h-8 text-white" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-8 h-8 text-white" /> },
  { name: "Finance", icon: <Coins className="w-8 h-8 text-white" /> },
  { name: "Travel", icon: <Plane className="w-8 h-8 text-white" /> },
  { name: "Real Estate", icon: <Building2 className="w-8 h-8 text-white" /> },
];

const process = [
  {
    title: "Conceptualization",
    desc: "Identifying business requirements and defining the scope of the project.",
  },
  {
    title: "Proof-of-Concept (PoC)",
    desc: "Developing a prototype to test the feasibility of the blockchain solution.",
  },
  {
    title: "Design and Development",
    desc: "Creating the architecture and UI/UX design, followed by core development.",
  },
  {
    title: "Testing and QE",
    desc: "Rigorous testing and quality engineering to ensure a bug-free and secure product.",
  },
  {
    title: "Deployment",
    desc: "Launching the solution on the mainnet and ensuring smooth operation.",
  },
  {
    title: "Maintenance",
    desc: "Providing post-launch support, updates, and optimization.",
  },
];

const faqs = [
  {
    question: "What is blockchain technology and explain its utility?",
    answer:
      "Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof transactions. It eliminates intermediaries like banks and governments, allowing for direct peer-to-peer interaction, which reduces costs and increases efficiency.",
  },
  {
    question: "How is Blockchain considered a revolutionizing technology?",
    answer:
      "Blockchain revolutionizes industries by providing a decentralized, immutable, and transparent way to record transactions. This builds trust, enhances security, prevents fraud, and enables new business models like DeFi and NFTs.",
  },
  {
    question: "Is blockchain applicable for every kind of industry?",
    answer:
      "Yes, blockchain has applications across various industries including finance, healthcare, supply chain, retail, real estate, and government. It enables secure data sharing, traceability, and automation through smart contracts.",
  },
  {
    question: "How much is the cost for blockchain development?",
    answer:
      "The cost of blockchain development varies depending on the complexity of the project, the features required, the platform chosen (e.g., Ethereum, Hyperledger), and the development time. Contact us for a detailed quote tailored to your specific needs.",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  return (
    <>
      <HeroWithForm
        heading="Blockchain Development Company"
        text="If you think blockchain development is complex, tedious or time-consuming, Avner Global delivers a one-stop solution to you. Create your blockchain applications on Hyperledger, Ethereum and Hashgraph."
        bgimage="/assets/image/Banner-1.jpg" // Using an existing banner image
        className=""
      />

      {/* Blockchain Solutions We Build (Tabs) */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading className="">
              Blockchain Solution We Build
            </SectionHeading>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
              We provide secure, scalable, and customized blockchain solutions
              tailored to your business needs, from startups to large
              enterprises.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className={`text-left px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-between group ${
                    activeTab === sol.id
                      ? "bg-[#153577] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-[#153577]"
                  }`}
                >
                  {sol.label}
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeTab === sol.id
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3">
              {solutions.map(
                (sol) =>
                  activeTab === sol.id && (
                    <motion.div
                      key={sol.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col md:flex-row items-center gap-8"
                    >
                      <div className="flex-1">
                        <div className="mb-6 p-4 bg-blue-50 rounded-full inline-block">
                          {sol.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-[#153577] mb-4">
                          {sol.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {sol.desc}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Blockchain Development Services For Innovative Business Solutions
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

      {/* Powerful Solutions List */}
      <section className="py-20 bg-[#f8fafc]">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading className="text-[#153577]">
              Building Blockchain Solutions
            </SectionHeading>
            <p className="text-gray-600 mt-4">
              Exploring powerful solutions across varying domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerfulSolutions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#00D9FF] hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-[#333d47] text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-white">
              Blockchain for Every Industry
            </SectionHeading>
            <p className="text-blue-200 mt-4">
              Revolutionizing diverse sectors with secure and transparent ledger
              technology.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {industries.map((ind, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
              >
                <div className="mb-4">{ind.icon}</div>
                <h4 className="font-semibold text-lg">{ind.name}</h4>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#153577]">
              A Blockchain Development Process Built For Results
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-gray-200 hover:border-[#00D9FF] transition-colors pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00D9FF]" />
                <h3 className="text-xl font-bold text-[#153577] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us & Stats */}
      <section className="py-20  relative overflow-hidden  " style={{
          backgroundImage: `url('/assets/image/waves-min.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
       
        <div className="absolute top-0 right-0 w-1/3 h-full " 
         
       
         />
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeading className="text-white text-left mb-6">
                Why hire Avner Global for Blockchain Development?
              </SectionHeading>
              <p className="text-white mb-6 text-lg leading-relaxed">
                We bring together a team of seasoned experts dedicated to
                delivering top-tier blockchain solutions. Our commitment to
                transparency, security, and innovation ensures that your project
                is in safe hands.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Skilled & Experienced Team",
                  "Transparent Communication",
                  "On-time Delivery",
                  "Secure & Scalable Solutions",
                  "Deep Industry Knowledge",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ffffff]" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us">
                <Button variants="action" className="px-8 py-3">
                  Connect With Experts
                </Button>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "7+", label: "Total Team" },
                  { val: "8+", label: "Projects Made" },
                  { val: "9+", label: "Global Clients" },
                  { val: "4", label: "Years Exp." },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#153577] mb-2">
                      {stat.val}
                    </div>
                    <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQAccordion items={faqs} />
    </>
  );
}

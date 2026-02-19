"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import Container from "@/components/ui/container";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  AppWindow,
  Banknote,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  Megaphone,
  Network,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";

import HeroWithForm from "@/components/Sections/heroWithform";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import SupportCTA from "@/components/Sections/SupportCTA";

export default function Page() {
  const services = [
    {
      title: "White Label Cryptocurrency Exchange Software",
      icon: <AppWindow className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Get a ready-to-deploy, customizable exchange platform with advanced trading features.",
    },
    {
      title: "Decentralized Exchange Development",
      icon: <Network className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Build a secure, peer-to-peer trading environment without a central authority.",
    },
    {
      title: "Hybrid Cryptocurrency Exchange Development",
      icon: <Layers className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Combine the best features of centralized and decentralized exchanges for optimal performance.",
    },
    {
      title: "P2P Exchange Software",
      icon: <Users className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Enable direct trading between users with a secure escrow system.",
    },
    {
      title: "Cryptocurrency Exchange Marketing",
      icon: <Megaphone className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Promote your exchange effectively to attract liquidity and user base.",
    },
    {
      title: "White Label Crypto Wallet",
      icon: <Wallet className="w-10 h-10 text-[#00D9FF]" />,
      desc: "Provide secure storage for digital assets with our white-label wallet solutions.",
    },
  ];

  const benefits = [
    {
      title: "Cost-Effectiveness",
      icon: <Banknote className="w-10 h-10 text-[#09d0c6]" />,
      desc: "Reduce development costs significantly with our ready-made solution compared to building from scratch.",
    },
    {
      title: "Highly-Personalized",
      icon: <Settings className="w-10 h-10 text-[#09d0c6]" />,
      desc: "Tailor the platform to your specific business needs with our extensive customization options.",
    },
    {
      title: "Immediate Scalability",
      icon: <TrendingUp className="w-10 h-10 text-[#09d0c6]" />,
      desc: "Scale your operations effortlessly as your user base and transaction volumes grow.",
    },
    {
      title: "Time-Efficient",
      icon: <Clock className="w-10 h-10 text-[#09d0c6]" />,
      desc: "Launch your exchange in record time with our rapid deployment process.",
    },
  ];

  const features = [
    "Smart Contract Trading",
    "KYC and AML Verification",
    "Multicurrency Wallet Support",
    "Integrated API for liquidity and data",
    "Multi-language Support",
    "Powerful Trading Engine",
    "Payment Gateway Integration",
    "High TPS (Transactions Per Second)",
    "Mobile Trading Application (iOS/Android)",
    "Matching Engine",
    "Referral Program",
    "Firebase and Firewall Implementation",
    "Pending Transactions Handling",
    "Crypto Liquidity Integration",
    "Transaction History Tracking",
  ];

  const securityFeatures = [
    {
      title: "Multi-Layered Security",
      desc: "We implement multiple layers of security protocols to safeguard your platform against cyber threats.",
    },
    {
      title: "KYC/AML Integration",
      desc: "Ensure regulatory compliance and prevent financial crimes with robust identity verification.",
    },
    {
      title: "Firebase & Firewall",
      desc: "Protect your server infrastructure with advanced firewall rules and secure database configs.",
    },
    {
      title: "Non-Disclosure Agreement",
      desc: "Your ideas and data are safe with us; we strictly adhere to NDA policies.",
    },
  ];

  const faqs = [
    {
      question: "What do you understand about white-label exchange software?",
      answer:
        "White-label exchange software is a ready-made, customizable cryptocurrency trading platform that businesses can purchase and rebrand as their own. It saves time and cost compared to building an exchange from scratch, coming pre-integrated with essential features like liquidity, security, and a matching engine.",
    },
    {
      question: "What are the advantages of white label exchange software?",
      answer:
        "The key advantages include rapid market entry, significant cost savings, tested and secure infrastructure, liquidity integration, and ongoing technical support. It allows businesses to focus on marketing and operations rather than complex development.",
    },
    {
      question: "How to generate money from a white label exchange platform?",
      answer:
        "Revenue can be generated through trading fees (maker/taker), withdrawal fees, listing fees for new tokens, margin trading interest, staking services, and spread on buy/sell orders.",
    },
    {
      question:
        "Why should I buy a white label cryptocurrency exchange platform?",
      answer:
        "Buying a white-label platform eliminates the technical risks and delays of custom development. It provides a proven, secure, and scalable solution that allows you to launch your business in weeks rather than months or years.",
    },
    {
      question:
        "Why is Webcom Systems Considered as best white label platform developers?",
      answer:
        "Webcom Systems is recognized for its extensive experience in blockchain, delivery of highly secure and scalable solutions, dedicated 24/7 support, and a client-centric approach that offers deep customization to meet specific business needs.",
    },
    {
      question:
        "What is the approximate cost of developing a white label cryptocurrency exchange platform?",
      answer:
        "The cost varies depending on the specific features, customization level, and additional services required. However, a white-label solution is generally a fraction of the cost of custom development. Contact our experts for a precise quote tailored to your requirements.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroWithForm
        heading="White Label Crypto Exchange Development Company"
        text="Get enterprise-grade white-label cryptocurrency exchange solutions designed for fast launch, advanced features, and robust security."
        className=""
        bgimage="/assets/image/white-label.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading className="">
              White Label Crypto Exchange Software
            </SectionHeading>
            <SubHeading className="text-xl text-[#00D9FF] font-semibold mt-2">
              Get an Indomitable Lead in the Crypto World.
            </SubHeading>
            <p className="mt-2 text-gray-600 leading-relaxed text-lg">
              Building a cryptocurrency exchange from scratch is a monumental
              task requiring significant time, capital, and technical expertise.
              Our white-label exchange software offers a smart, efficient
              alternative. It is a ready-made, fully customizable, and
              rigorously tested platform that allows you to launch your own
              exchange quickly and cost-effectively. With integrated liquidity,
              advanced security features, and a user-friendly interface, our
              solution positions you to compete with industry giants from day
              one.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Our White Label Crypto Exchange Development Services
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
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
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

      <SupportCTA />

      {/* Benefits Section */}
      <section className="py-20 bg-[#f8fafc]">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="text-[#333d47]">
              Benefits of Our White Label Crypto Exchange Software
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#333d47] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features List Section */}
      {/* <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-[#333d47] mb-6 text-left">
                Feature-Packed White Label Crypto Exchange Software
              </SectionHeading>
              <p className="text-gray-600 mb-8">
                Some Potential Features Of Our White Label Cryptocurrency
                Exchange:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9FF] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#333d47] mb-6">
                Security Features
              </h3>
              <div className="space-y-6">
                {securityFeatures.map((sec, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <ShieldCheck className="w-6 h-6 text-[#09d0c6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333d47]">{sec.title}</h4>
                      <p className="text-gray-600 text-sm">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Business Advantages */}
      <section
        className="py-20 text-white relative"
        style={{
          background: `linear-gradient(rgba(21, 53, 119, 0.95), rgba(21, 53, 119, 0.8)), url('/assets/image/cryptoFULL.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Avner Global ?
            </h2>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              We focus on result-based methodologies, SEO optimization, 24/7
              post-launch support, and dedicated project management. Our
              white-label solutions are market-worthy, 100% customizable, and
              rigorously tested to ensure your success in the competitive crypto
              landscape.
            </p>
            <Link href="/contact-us">
              <Button className="" variants="action">
                Connect With Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats & Testimonials */}

      <Stats />
      {/* Business Advantages */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:order-1">
              <Image
                src="/assets/image/whitelabel.png"
                alt="Business Advantages"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:order-2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Business Advantages - White Label Exchange Software Solutions
              </SectionHeading>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Here are the advantages of using turnkey bitcoin exchange
                solutions from the top white-label cryptocurrency exchange
                development company:
              </p>
              <ul className="space-y-4">
                {[
                  "Market-Worthy Trading Software",
                  "100% Customizable Software",
                  "Highly Scalable & Cost-Efficient",
                  "Multi-Layered Security Mechanism",
                  "Rigorously Tested & Proven Platform",
                  "Significantly Slashed Time-To-Market",
                  "Adherence to High-Quality Standards",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#153577]" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Webcom */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 lg:order-1 order-2">
              <SectionHeading className="text-left text-[#153577] mb-6">
                Why Choose Webcom Systems for White Label Crypto Exchange
                Development?
              </SectionHeading>
              <ul className="space-y-4">
                {[
                  "Tested methodologies for ascertaining a success story.",
                  "Result-based methodology and strategies across a variety of channels.",
                  "SEO optimization services to increase your brand's visibility in the modern world.",
                  "Post-launch maintenance and support services are rendered around the clock.",
                  "Dedicated tasks management supervised by a project manager.",
                  "A strict policy of non-disclosure agreement.",
                  "We offer customized solutions as per the client's needs and requirements.",
                  "We maintain an expert team of developers and professionals.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#153577] mt-2 shrink-0" />
                    <span className="text-gray-700 leading-relaxed text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:order-2 order-1">
              <Image
                src="/assets/image/whitelabel2.png"
                alt="Why Choose Webcom"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>
      <FAQAccordion items={faqs} />
    </>
  );
}

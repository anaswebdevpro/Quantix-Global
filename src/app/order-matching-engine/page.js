"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import { SubHeading } from "@/components/ui/subheading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Settings,
  ShieldCheck,
  Zap,
  Layers,
  Globe,
  Activity,
  Lock,
  Cpu,
  Server,
  BarChart3,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const features = [
  {
    title: "Real-Time Data",
    desc: "Our order matching engine comes with a built-in WebSocket data server to power both desktop and web applications with streaming data.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Algorithms",
    desc: "Order matching engine uses several algorithms to allocate trades among competing bids and offers at the same price.",
    icon: <Cpu className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Multi-threaded in-memory",
    desc: "Our Platform consumes less memory and resources to provide one of the fastest results matching and automated exchange volume.",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Seamless Integrations",
    desc: "Order matching engine platform can be integrated with major of the technology components like Messages, Sockets and File streams.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Memory Operations",
    desc: "Its memory operation not only leaves a smaller footprint but also has 100% recovery mechanisms inbuilt in the unlikely event of a crash.",
    icon: <Server className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Functionally rich",
    desc: "It is functionally rich with Multi level structure, primary & secondary market, mulitple market models, order types & Information diffusion.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Pre trade risk management",
    desc: "Order matching engine is a Multi-asset Pre-trade Risk Management, to have a global view of client risk.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Order and Quote Management",
    desc: "The order and Quote Management brings all the trading tools and processes under one unique roof.",
    icon: <Database className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Set of Front-Ends",
    desc: "Front ends are setup to monitor markets and order flow, submit orders and administer/manage the entire platform.",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "API Integrations",
    desc: "Open APIs, to integrate with the platform, to contribute price / quotes and to code algorithms.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Smart Order Router",
    desc: "Our platform is designed to meet the demands of complex and fragmented global trading markets to seek out liquidity and best execution.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Transaction Cost Analysis",
    desc: "Transaction cost analysis provides transparency of your execution performance, empowering you to take the right decision.",
    icon: <BarChart3 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Low latency",
    desc: "The matching engine provides high throughput sub-millisecond matching of simple and advanced order types.",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "High performance FIX Engine",
    desc: "The platform includes fully FIX compliant gateways for order entry clients and market data distribution.",
    icon: <Cpu className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Flexible",
    desc: "Our software is highly flexible, modular-based and integrated platform designed for the next generation of multi asset trading.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const advantages = [
  {
    title: "Customizable",
    desc: "It can be customized to meet your needs and save time.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Extremely Secure",
    desc: "Our order matching engine is secured by Remote Password Protocol and resists both passive and active network attacks.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Privacy",
    desc: "Evaluates pre-defined condition and provides data for compliance and reporting, when exposed to an external trigger.",
    icon: <Lock className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Scalable Engine",
    desc: "Our order matching engine is scalable in nature which allows spawning multiple engines for parallel execution especially during high volatility in the markets.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Fully Configurable",
    desc: "Our software is highly flexible, modular-based and integrated platform designed for the next generation of multi asset trading and execution",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "24*7 Assistance",
    desc: "We analyze and suggest a complete order matching solution fitting to your requirements; it helps to start your trading within your defined budget.",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const introBoxes = [
  "Multi-Asset And Venue-Neutral",
  "Margin Trading",
  "Pre-Trade Risk Functionality",
  "Low-Latency Infrastructure",
  "Various Risk Management Models",
  "News And Market Data Delivery",
  "Analytical Tools",
  "Asset And Risk Manager Terminals",
];

export default function OrderMatchingEngine() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white h-auto md:h-[90vh] flex flex-col md:flex-row  bg-gradient-to-r from-[#16222E] to-[#446076] overflow-hidden">
        <div className="w-full md:w-1/2 h-full z-20 px-10 py-20 lg:px-20 flex flex-col justify-center md:bg-transparent">
          <div className="max-w-3xl flex flex-col items-start justify-center space-y-6">
            <Heading as="h1" className="">
              Drops leading to an
              <span className="text-[#09d0c6]"> ocean</span>
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Crowdfunding software development allows one to invest a small
              amount of capital, preventing the risk of failure and severe
              damage while endorsing your enterprise.
            </SubHeading>

            <Link href="/contact-us">
              <Button
                variants="action"
                className="inline-flex items-center justify-center text-md"
              >
                Talk To An Expert
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/image/odm-mockup.png"
            alt="DeFi Development"
           fill
            className="object-cover"
          />
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Order Matching Engine
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  At Avner Global, we consider in building cutting edge technology to
                  empower financial markets ahead. On the subject of trading in
                  stock market, the essential factor aside from the strategy is
                  the buying and selling software that you use. And we’re
                  offering the most efficient and extensive order matching
                  software program which provides you control over the trade.
                </p>
              </div>
            </div>

            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {introBoxes.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f2937] text-white py-4 px-6 flex items-center justify-center text-center font-medium rounded hover:bg-[#153577] transition-colors min-h-[80px] shadow-sm text-sm md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionHeading>Our Vision</SectionHeading>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our order matching engine software provides highly efficient
              platform for financial markets. We strive to produce innovative
              solutions and offer expert professional services that meet needs
              of our customers. Our order matching software is built upon a set
              of quality software components such as order router, risk
              management server and front-end, matching engine, market data
              dissemination, trading front-end and Restful API. These components
              are architect to work in concert to provide a fast and robust, yet
              flexible, asset-agnostic, multi-user engine.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                variants="secondary"
                className="bg-[#153577] text-white hover:bg-[#09d0c6]"
              >
                User Panel
              </Button>
              <Button
                variants="secondary"
                className="bg-[#153577] text-white hover:bg-[#09d0c6]"
              >
                Admin Panel
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Our Features</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Check our our next-generation Order Matching Engine that allows to
              match trades internally like on a real Stock Exchange.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#333d47] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Advantages</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Implement blockchain based exchange to store immutable data. We
              can help you choose which of your processes are suitable for this
              technology.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">{advantage.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#333d47] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <Testimonials />
    </div>
  );
}

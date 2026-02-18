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
  MessageSquare,
  FileSpreadsheet,
  MousePointerClick,
  Monitor,
  List,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const features = [
  {
    title: "Quote management",
    desc: "Our trading platform services offer an efficient way for market makers to insert quotes.",
    icon: <Database className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Chart Analysis",
    desc: "Charting is flexible feature that you can customize as per your needs. You can see price movement to decide your next move.",
    icon: <BarChart3 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Auto Pay-in",
    desc: "Transfer funds via payment gateway and get instant limit update via Pay-in feature inbuilt in SAS Trader.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Advanced & Flexible charts",
    desc: "Spot trends and perform technical analysis with indicators. Easily study price trends with charts you can customize to your needs.",
    icon: <BarChart3 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Deal direct from charts",
    desc: "Attach stops and limits, set alerts, and place deals – without moving away from your chart.",
    icon: <MousePointerClick className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Monitoring tools",
    desc: "Set stops and limits to automatically close your positions, tickets & charts to view close down platform & Set price alerts to notify hits.",
    icon: <Monitor className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Watchlists",
    desc: "Keep track on your preferred markets by grouping them together in a watch list. Deal easily on favorites without navigating through multiple windows.",
    icon: <List className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Order Types",
    desc: "Platform is pre-configured simple to advanced such as market, stop, stop-limit, trailing stop, trailing stop limit, one cancels other & one triggers other.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Account Management",
    desc: "Trading platform manages the P/L, buying power, margin requirement and historical performance.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "P&L Strategy Analysis",
    desc: "P/L calculator allows chart the profit and loss potential of their trades before they invest. It also build confidence.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Multi-Leg Orders",
    desc: "Allows clients to easily adjust their options strategy based on experience and risk tolerance. They can add stocks ,set debit or credit price limit.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Probability Analysis",
    desc: "Our probability calculator updates real time as users change strategies. Once security is choose, they can set up target prices and add volatility.",
    icon: <BarChart3 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Entry and exit procedures",
    desc: "We made some automation tactics that you can easily drag and drop onto your chart. You can add or drop them onto any position or order.",
    icon: <MousePointerClick className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Import/Export from Excel",
    desc: "Charts can be imported or exported to and from excel dates, times, prices and symbol values can also be dumped into format.",
    icon: <FileSpreadsheet className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Real Time Market Scanning",
    desc: "The built in scanning features can screen the exchange in real time to understand symbols that have substantial price changes.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const advantages = [
  {
    title: "Risk Control",
    desc: "The trading platform includes risk controls such as price bands, circuit breakers and trade protection limits.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Highly Secure",
    desc: "Trade hassle free with built in security via two factor authentication to avoid unauthorized access to your account.",
    icon: <Lock className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Fast Execution",
    desc: "Our systems are built to handle huge numbers of trades very quickly.",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Communication",
    desc: "Our Developed platforms also include high-level communication tools for brokers to publish messages and interact with their traders in real time. It stops the demand for complex email threads.",
    icon: <MessageSquare className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Flexibility",
    desc: "We developed platforms that were managed to hold all currency crosses as well as the strength to trade another market such as commodities, futures, and equities.Our software is highly flexible, modular-based and integrated platform designed for the next generation of multi-asset trading and execution",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const introBoxes = [
  "First Class User Experience",
  "Fast And Capable Solutions",
  "Reliable And Stable Platform",
  "Truly Customizable",
  "10+ Yrs Exp In Trading Platforms",
  "Affordable Pricing",
  "Fast Speed & Scalability",
];

export default function TradingPlatform() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 text-white h-auto md:h-[90vh] flex flex-col md:flex-row items-center 
         bg-gradient-to-r from-[#16222E] to-[#446076] overflow-hidden"
      >
        <div className="w-full md:w-[45%] h-full z-20 px-10 py-0 lg:py-2 lg:pl-20 lg:pr-0 ">
          <div className="max-w-3xl flex flex-col items-start pt-10 justify-center ">
            <Heading as="h1" className="">
              Trading Platform Development
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Avner Global intends to provide a reliable platform to create new
              strategies that encourage the products to be in the client’s best
              interest.
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
        <div className="w-full md:w-[55%] h-full relative flex items-center justify-start">
          <Image
            src="/assets/image/laptopbg.png"
            alt="DeFi Development"
            height={700}
            width={700}
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
                  Trading Platform Software Development Services
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our products bring real-time decision making capabilities and
                  intelligence to trading by providing new strategies to seek
                  and manage liquidity, including execution, in all asset
                  classes. All our products delivers an efficient, unique and
                  rich multi-asset trading system to meet all your needs.
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
              Converting client’s mission and goals into successful ventures and
              application of cost-effective procedures is the core aim of the
              company. Our effort is to deliver secure, reliable, high-quality
              products catering to the capital markets to help in decision
              making and trading. We endeavor to make trading intuitive and
              friendly, opening up possibilities for one and all to engage in
              the country’s development story via investing in financial
              markets.
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
              Our trading platform provides you with powerful tools to enhance
              your trading experience. Get the edge with our powerful charts and
              fast, reliable execution technology.
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
              Our trading platform realizes full-cycle development, It
              integrate, maintain and support, trading platforms migration.
              Trading systems are designed as independent, compact business
              tools.
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

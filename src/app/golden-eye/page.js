"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SubHeading } from "@/components/ui/subheading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import {
  BarChart2,
  Clock,
  Smartphone,
  Layout,
  PieChart,
  GitPullRequest,
  TrendingUp,
  Cpu,
  Layers,
  Globe,
  Server,
  Headphones,
  MapPin,
  Network,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const features = [
  {
    title: "Reliable Real Time Data",
    desc: "This Platform expedite the speed and gives you real time market data to and execute your best trades anytime.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Charts That Change the Game",
    desc: "Explore the markets faster, user-friendly & customizable charts that enable you to trade smartly.",
    icon: <BarChart2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Better Backtesting & Scanning",
    desc: "Predict the future by interpreting the past; our backtesting and scanning tools allow you to forecast the future before putting your money on the line.",
    icon: <Clock className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Trade Alerts",
    desc: "Real time alerts and filters are implemented to stream present events. Graphs can be added to improve the data and see various events at a glance.",
    icon: <TrendingUp className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Golden Eye Mobile",
    desc: "Access up-to-the-minute information on today’s financial markets, your watch list, charting, analytical tools, and more – all on your iPad, iPhone.",
    icon: <Smartphone className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Market Profile",
    desc: "Graph Tool is featured with robust and scalable charting format that holds original market graph.",
    icon: <PieChart className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Customizable Workspace",
    desc: "Create your workspace and customize your favorites and detachable pages. Use built-in shortcut keys or create your own.",
    icon: <Layout className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Charts and Studies",
    desc: "Get award-winning intraday data, easy-to-use charting tools that are flexible enough to adapt to ever-changing market conditions.",
    icon: <BarChart2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Trade Integration",
    desc: "Trading and backoffice System that connects directly with your choice of 50+ brokers.",
    icon: <GitPullRequest className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Trading Strategies",
    desc: "There are as many as 26 plans in built in the software. So, you will always have the upper hand in trading strategies.",
    icon: <Cpu className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Automatic Calculations",
    desc: "The up and down of market and other mathematical calculations are done by software itself and can easily display on our high-quality Software.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Fibonacci",
    desc: "It is one of the most advantageous features present in XT Golden Eye®. It can work on 89 days moving average by virtue of the feature.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const advantages = [
  {
    title: "99.9% Uptime",
    desc: "Experience interruption free scanning with a 99.9% uptime system. It means all the data you want to win will come to you in real-time, without delay.",
    icon: <Server className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "All Instruments",
    desc: "100+ indices across global markets, stocks, futures, mini futures, options, ETFs, foreign currency options, OTC markets, Forex rates and market depth.",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Comprehensive Marketing Strategies",
    desc: "Complete historical data and bar replay functionality for back testing market policies on all kinds of market patterns and conditions before you place your money on the line.",
    icon: <TrendingUp className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Geographical Data",
    desc: "Multiple, location dispersed server farms, fed with live data from direct, redundant connections with 100s of the world’s exchanges.",
    icon: <MapPin className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Multicast Bone",
    desc: "Advanced multicast backbone, engineered and operated internally; network staffed 365*24*7 and designed to work under the pressures of high-volume periods.",
    icon: <Network className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "24*7 Support",
    desc: "As we know the opportune moment could be at any time, Webcom technical experts remain in your corner 24*7.",
    icon: <Headphones className="w-8 h-8 text-[#09d0c6]" />,
  },
];

export default function GoldenEye() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white h-auto md:h-[90vh] flex flex-col md:flex-row bg-gradient-to-r from-[#112934] to-[#0CC9E2]  overflow-hidden">
        <div className="w-full md:w-1/2 h-full z-20 px-10 py-20 lg:px-20 flex flex-col justify-center bg-[#153577]/90 md:bg-transparent">
          <div className="max-w-3xl flex flex-col items-start justify-center space-y-6">
            <Heading as="h1" className="">
              The modern-day culture <br />
              <span className="text-[#09d0c6]">at your service</span>
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Golden eye technical analysis tool brings you new-age trading
              technology. With advanced charting and 24*7 customer support, the
              tool is meant to change the face of trading!
            </SubHeading>

            <Link href="/contact-us">
              <Button
                variants="action"
                className="inline-flex items-center justify-center text-md"
              >
                Request Free Demo
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
          <Image
            src="/assets/images/goldeneye.jpg"
            alt="Golden Eye Technical Analysis"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our goal is to generate accurate stock forecasts – we are
                  committed to it at every level. Golden Eye platform uses state
                  of the art software to predict stock prices on the worldwide
                  market, generates trading “Buy-Sell” signals, computes the
                  most profitable company to invest in and analyzes the accuracy
                  of its predictions. Golden Eye program is powerful, fast and
                  accurate software, offering great value for a limited cost,
                  Whether you are a day-trader or a long-term investor. Golden
                  Eye Software is available for you always!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Customized To Suit All Business Models",
                "Quick Launch",
                "Robust & Scalable Platform",
                "SEO Friendly",
                "Rich-Text CMS",
                "Mobile Optimized",
                "24*7 Technical Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f2937] text-white py-3 px-6 flex items-center justify-center text-center font-medium rounded hover:bg-[#153577] transition-colors min-h-[50px] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Features Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Our Features</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Make your trading easy with Golden Eye Trading Tool.
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
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300"
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
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Advantages</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Golden Eye Software is renowned for its innovative approach and
              has humble acceptance all over the globe. Reach out to Golden Eye
              and enhance your promising trading career.
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
                className="flex items-start gap-4 p-4 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300 border border-gray-100"
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

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle2,
  BarChart2,
  Server,
  Briefcase,
  CreditCard,
  Globe,
  Headphones,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/Sections/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import Stats from "@/components/Sections/Stats";
import IntroSection from "@/components/IntroSection";

const introItems = [
  { title: "E-learning", icon: "/assets/image/elearning-1.png" },
  { title: "Banking & Finance", icon: "/assets/image/Banking-Finance-1.png" },
  { title: "Online shopping", icon: "/assets/image/Online-shopping-1.png" },
  { title: "Healthcare", icon: "/assets/image/Healthcare-1.png" },
  { title: "Cybersecurity", icon: "/assets/image/Cybersecurity-1.png" },
  { title: "Travel", icon: "/assets/image/Travel-1.png" },
  { title: "Online Music", icon: "/assets/image/Online-Music-1.png" },
  { title: "Online Movies", icon: "/assets/image/Online-Movies-1.png" },
];

const features = [
  {
    title: "Cost Effective",
    desc: "Compared to any conventional Forex broker, we offer quality services at unbelievable low prices",
    icon: <BarChart2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "99.99% Uptime Servers",
    desc: "Our strength lies in our 99.99% uptime servers backed with cutting edge security features to give air tight reliability.",
    icon: <Server className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Unique Business Model",
    desc: "We have a unique business model that helps users to quickly scale up the ladder of growth.",
    icon: <Briefcase className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Hassle Free Withdrawals",
    desc: "We have adopted wide range of payment systems to make user’s withdrawal process stress free.",
    icon: <CreditCard className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Wide Recognition",
    desc: "We are recognized internationally as the most innovative Forex trading platform.",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "24*7 Support",
    desc: "We have pooled best Forex experts that support 24X7, so that you never have to settle for less.",
    icon: <Headphones className="w-8 h-8 text-[#09d0c6]" />,
  },
];

export default function ForexTrading() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative w-full  min-h-[600px] flex   overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/healthcare_banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* content */}
        <div className="h-[80vh] z-20 px-4 md:px-10 py-20 lg:py-24 lg:px-20 ">
          <div className="max-w-2xl flex flex-col items-start justify-center pt-10 space-y-4">
            <Heading as="h1" className="">
              #1 Forex Trading Software
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Avner Global offers help in setting up a forex trading software as
              it further encouraging liquified solutions to all. We support you
              making your dealing conditions, prospering your business, your
              way!
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
      </section>

      {/* Introduction Section */}
      {/* <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="mb-6 text-left">
                Forex Trading Software Solutions
              </SectionHeading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide the consultancy for the Forex Trading Software to new
                brokers and financial institutions. We help to set a forex
                trading platform and support for liquidity solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At the heart of Avner Global’ offerings is a comprehensive
                suite of trading platforms designed to cater to traders of all
                levels, from beginners to seasoned professionals. These
                platforms are equipped with real-time market data, customizable
                charting tools, technical indicators, and risk management
                features, enabling traders to make well-informed decisions and
                execute trades with confidence.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you are an individual trader looking to explore the
                Forex market or a financial institution seeking scalable and
                customizable trading solutions, Avner Global‘ Forex trading
                software offers a comprehensive suite of features to meet
                diverse trading needs.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/image/forexmen.jpg"
                  alt="Forex Trading Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section> */}
      <IntroSection
        className="max-w-6xl mx-auto bg-white"
        heading={<>Forex Trading Software Solutions</>}
        text={
          <>
            We provide the consultancy for the Forex Trading Software to new
            brokers and financial institutions. We help to set a forex trading
            platform and support for liquidity solutions. <br /> <br />
            At the heart of Avner Global’ offerings is a comprehensive suite of
            trading platforms designed to cater to traders of all levels, from
            beginners to seasoned professionals. These platforms are equipped
            with real-time market data, customizable charting tools, technical
            indicators, and risk management features, enabling traders to make
            well-informed decisions and execute trades with confidence.
            <br />
            <br />
            Whether you are an individual trader looking to explore the Forex
            market or a financial institution seeking scalable and customizable
            trading solutions, Avner Global‘ Forex trading software offers a
            comprehensive suite of features to meet diverse trading needs. With
            a commitment to innovation, reliability, and customer satisfaction,
            Avner Global continues to be a driving force in shaping the future
            of Forex trading technology.
            <br />
          </>
        }
        items={introItems}
      />

      {/* Our Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading>Our Vision</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Forex Trading software allows you to become a competitive Forex
              broker without considerable investments and technical issues.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#09d0c6] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-[#333d47] mb-3">
                Trading Software
              </h3>
              <p className="text-gray-600 text-sm">
                Industries best trading software to assist you make better
                decisions in Forex trading. Be prepared to take control!
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#09d0c6] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-[#333d47] mb-3">
                Forex Software Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Works with client centric approach, we bridge all gaps of
                company formation and forex licensing to set a distinguished
                forex broker.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#09d0c6] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-[#333d47] mb-3">
                Business Consulting
              </h3>
              <p className="text-gray-600 text-sm">
                We follow pragmatic consulting approach to keep your forex
                business and profits in line.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Features */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Features</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              We develop Forex trading platform that transform your business and
              disrupt your industry.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4 bg-gray-50 p-4 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#333d47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 p-4 rounded-lg inline-block w-full">
            <p className="text-red-500 text-sm md:text-base font-semibold">
              Note: We do not provide software solutions & support for Forex
              Trading in the following countries: India, Pakistan, USA and Saudi
              Arabia
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}

      <Stats />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

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
  ShieldCheck,
  LayoutDashboard,
  Wallet,
  Settings,
  Users,
  BarChart,
  Globe,
  Lock,
  MessageSquare,
  Repeat,
  Gift,
  Network,
  Layers,
  Zap,
  ThumbsUp,
  Grid,
  DollarSign,
  Layout,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const mlmPlans = [
  {
    title: "Binary Plan",
    icon: <Network className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Unilevel Plan",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Matrix Plan",
    icon: <LayoutDashboard className="w-8 h-8 text-[#09d0c6]" />,
  },
  { title: "Board Plan", icon: <Users className="w-8 h-8 text-[#09d0c6]" /> },
  {
    title: "Gift / Donation Plan",
    icon: <Gift className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Crowdfunding / Helping Plan",
    icon: <Users className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Generation Plan",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Spillover Binary Plan",
    icon: <Network className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Australian Binary Plan",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const keyFeatures = [
  {
    title: "Admin Panel, User Panel, Franchise Panel",
    icon: <LayoutDashboard className="w-8 h-8 text-[#09d0c6]" />,
  },
  { title: "E-WALLET", icon: <Wallet className="w-8 h-8 text-[#09d0c6]" /> },
  {
    title: "Spam Controlling",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "MLM Incentive calculation",
    icon: <BarChart className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Payment Gateway Integration",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Franchise Control",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Strong Backup System",
    icon: <Lock className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Multiple Replicated Page",
    icon: <Repeat className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const benefits = [
  {
    title: "Easy to operate",
    desc: "Our software comes with a clean and intuitive interface, making it simple for anyone to use. It’s a 100% user-friendly MLM solution, built for speed and efficiency.",
    icon: <ThumbsUp className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "User Management",
    desc: "Advanced user management enables admins to add, edit, update status, and remove users with ease. A powerful search and filter option makes handling large teams seamless.",
    icon: <Users className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Replicating Website",
    desc: "Every registered member gets a personalized replicated website, a powerful tool to attract prospects and grow their downline effectively.",
    icon: <Layout className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Reliable & Classic Dashboard",
    desc: "A classic yet modern backend dashboard designed for easy access, giving admins a comprehensive overview of the entire system at a glance.",
    icon: <Grid className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Customizable Business Plan",
    desc: "Our MLM Software supports all major compensation plans—Binary, Matrix, Board, and even fully custom models tailored to your business strategy.",
    icon: <Settings className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Wallet System",
    desc: "Equipped with Cash Wallet & E-Wallet functionality, our software ensures secure transactions, seamless fund management, and reward distribution.",
    icon: <Wallet className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "SMS Integrations",
    desc: "Stay connected with your network using built-in SMS notifications, enabling marketing teams to send timely updates and promotional alerts.",
    icon: <MessageSquare className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Point System/ Bonus",
    desc: "Track purchase and group volume with a flexible point-based system. Admins can set custom bonuses and incentives directly from the panel.",
    icon: <DollarSign className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Grow By Referral",
    desc: "Our MLM software is fully referral program ready. Members can promote their referral links and easily expand their downlines.",
    icon: <Globe className="w-10 h-10 text-[#09d0c6]" />,
  },
];

export default function MLMSoftware() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white h-auto md:h-[90vh] flex flex-col md:flex-row bg-gradient-to-r from-[#16222E] to-[#446076] overflow-hidden">
        <div className="w-full md:w-1/2 h-full z-20 px-10 py-20 lg:px-20 flex flex-col justify-center  md:bg-transparent">
          <div className="max-w-3xl flex flex-col items-start justify-center space-y-6">
            <Heading as="h1" className="">
              MLM Software <br />
              <span className="text-[#09d0c6]">Development Company</span>
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Streamline and scale your MLM business with Avner Global’s
              advanced MLM Software Development solutions. Designed for
              enterprises, startups, and direct-selling companies, our software
              empowers you to manage leads, track sales, monitor downlines, and
              boost productivity seamlessly.
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
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <Image
            src="/assets/image/Web_design_1.png"
            alt="MLM Software Development"
            width={800}
            height={600}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* MLM Services & Plans Section */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  MLM Software Development Services
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Avner Global is a trusted partner for direct selling and
                  network marketing industries. We offer comprehensive MLM
                  software solutions to help you manage your business
                  efficiently.
                </p>
              </div>
            </div>

            <div className="text-center mb-10">
              <SectionHeading>
                MLM Plans you can prefer for your Network Marketing Software
              </SectionHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mlmPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="bg-gray-50 p-3 rounded-full">{plan.icon}</div>
                  <h3 className="text-lg font-semibold text-[#333d47]">
                    {plan.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              "We grow as you grow"
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our vision is simple: to empower your business with transparent,
              high-performance solutions that deliver measurable value. We
              believe in growing together with our clients by providing robust
              software that adapts to your evolving needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Key features of our MLM Software</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#09d0c6] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-4 bg-gray-50 p-4 rounded-full group-hover:bg-[#09d0c6]/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#333d47] mb-2">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Benefits of MLM Software</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Welcome to the one stop destination for complete customize MLM
              Software Solution.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333d47] mb-3 group-hover:text-[#09d0c6] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#09d0c6] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Why Choose Our MLM Software Company?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    "20+ Years Experience",
                    "Domain Expertise",
                    "100% Accurate Calculations",
                    "Cutting-Edge Technology",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#09d0c6] rounded-full"></div>
                      <p className="text-lg text-gray-700 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Stats />
      <Testimonials />
    </div>
  );
}

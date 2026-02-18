"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import { SubHeading } from "@/components/ui/subheading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  BarChart3,
  Globe,
  CreditCard,
  Monitor,
  Users,
  Layers,
  Search,
  Zap,
  Lock,
  RefreshCcw,
  Landmark,
} from "lucide-react";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const features = [
  {
    title: "Easy Customer Management",
    desc: "Direct customer registration allows you to send money in few clicks and let your customers know when the transaction has been successful.",
    icon: <Users className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Anti-Money Laundering Compliance",
    desc: "We have integrated the relevant modules into our software, so all you have to do is get on with doing business.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Smart Data Reporting",
    desc: "You can get detailed reports on transactions and the agent by checking the report tab.",
    icon: <BarChart3 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Set Your Own Tariffs",
    desc: "Users can set individual exchange rates and commission structures on a global level or at the individual level.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Flexible Payment Options",
    desc: "To keep your payment options flexible, we have included features such as payments by PayPal, Debit and Credit Card, Bank Transfer.",
    icon: <CreditCard className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Access on Web, Tablet and Mobile",
    desc: "We’ve built The Money Transfer Application to allow users to access it via their PC, mobile device or tablet.",
    icon: <Monitor className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Customized Interface for Different Roles",
    desc: "We’ve built in a customized interface for each different user, so you can set permission to see different levels of information.",
    icon: <Smartphone className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Linked Transaction Checks",
    desc: "All transactions to be linked to a sender or beneficiary to ensure they are both trackable and traceable.",
    icon: <Search className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const advantages = [
  {
    title: "Customer Convenience",
    desc: "A quick, safe and reliable platform that saves your customers time and the hassles of going through banks for money transfer.",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Safe And Secure",
    desc: "We built system with the highest industry standards so you can have peace of mind that your money is in good hands.",
    icon: <Lock className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Unrivalled Customer Service",
    desc: "We have a dedicated team that strives to provide you with an unrivalled customer experience that will be matched by no-one in the market.",
    icon: <Users className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "User Friendly Interfaces",
    desc: "User-friendly interface enables mobile subscribers to make secure and easy peer-to-peer money transfers from your mobile phones.",
    icon: <Smartphone className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "You Take Control",
    desc: "Setup your own exchange rate and commission structures and Add your own pay-in or pay-out agents.",
    icon: <RefreshCcw className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Integration With Existing Site",
    desc: "Webcom integrates seamlessly with your website and other software platforms and processes that you already use.",
    icon: <Globe className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const softwareDevelopmentList = [
  "Money Transfer Software Built upon high-end technology with innovation",
  "Can provide money transfer app, website and software solution.",
  "Integrated with advance features",
  "Easy modifiable according to business need",
  "Customers can order money transfer online conveniently and safely.",
  "Automated funds-in via online payments direct to bank accounts.",
  "Easy and really quick handling of orders with the volatile market.",
  "Low risk as orders can be booked and processed immediately and appropriately.",
  "Easy customer and order management with a strong back office.",
  "Available 24 * 7 so more customer, more orders and more revenue.",
  "Robust and extensible system.",
];

export default function MoneyTransfer() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white h-auto md:h-[90vh] flex flex-col md:flex-row bg-[#152336] overflow-hidden">
        <div className="w-full md:w-1/2 h-full z-20 px-10 py-20 lg:px-20 flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col items-start justify-center space-y-6">
            <Heading as="h1" className="text-white">
              Money Remittance <br />
              <span className="text-[#09d0c6]">Software Development</span>
            </Heading>
            <SubHeading as="p" className="text-gray-300 py-2 max-w-lg">
              Money Transfer Software offers a comprehensive solution while
              ensuring your money in the safest of technology. Being a go-to app
              for clients, the service happens to be an aid to many.
            </SubHeading>

            <Link href="/contact-us">
              <Button
                variants="action"
                className="inline-flex items-center justify-center text-md bg-[#09d0c6] text-white hover:bg-[#07b0a7]"
              >
                Request Free Demo
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src="/assets/images/Start-Online-Money-Transfer-Business-with-money-transfer-software.jpg"
            alt="Money Remittance Software Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#152336]/80 md:to-[#152336]/20"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Money Remittance Software Development Company
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Webcom Systems provide a comprehensive & fully supported
                  solution for your money transfer business. The most innovative
                  money transfer software application for your global money
                  transfer business. A comprehensive money remittance software
                  for companies/business/enterprise of any size, worldwide. With
                  us, you are all ready to set up enormous success for your
                  business online. Our team at Webcom Systems is always geared
                  up to bring your money transfer apps ideas to life in no time.
                </p>
              </div>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { text: "Quick, Easy & Simple", icon: Zap },
                { text: "Well Organized Transaction Manager", icon: Layers },
                { text: "Highly Secured And Protected", icon: ShieldCheck },
                { text: "Instant Money Transfer", icon: RefreshCcw },
                { text: "Transfer Money To Any Bank Account", icon: Landmark },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f2937] text-white py-4 px-4 flex flex-col items-center justify-center text-center font-medium rounded hover:bg-[#153577] transition-colors min-h-[120px] shadow-sm gap-2"
                >
                  <item.icon className="w-8 h-8 text-[#09d0c6] mb-2" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Our Features</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Development of Mobile transfer application to licensed money
              transfer organizations managing agent networks globally.
              Empowering banks, money transmitters, & payment providers
              worldwide.
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

      {/* Money Transfer Software Development List */}
      <section className="py-16 bg-[#152336] text-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-[#09d0c6]">
                Money Transfer Software Development
              </h2>
              <ul className="space-y-4">
                {softwareDevelopmentList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#09d0c6] mt-1 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              {/* Visual Representation or Abstract Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#09d0c6]/20 to-transparent rounded-2xl flex items-center justify-center border border-[#09d0c6]/30">
                <Globe className="w-32 h-32 text-[#09d0c6]/50 animate-pulse" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Advantages</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              Go digital with Webcom. We’ll help you all the way and scale with
              you, even to a global level.
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

"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Image from "next/image";
import HeroWithForm from "@/components/Sections/heroWithform";
import Hero from "@/components/Hero";
import { ChevronRight } from "lucide-react";
import { SubHeading } from "@/components/ui/subheading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import {
  BarChart2,
  CreditCard,
  Globe,
  Headphones,
  Server,
  Briefcase,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Share2,
  Search,
  MessageSquare,
  FilePlus,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

const features = [
  {
    title: "Robust Platform",
    desc: "We develop the crowd funding portals which are secure and reliable with multi-layer platform counter hacks.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Admin dashboard",
    desc: "We develop user-friendly Admin Panel Dashboard which is fledged with rich features, simple to use and manage.",
    icon: <LayoutDashboard className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Real Time Progress bar",
    desc: "This bar Supports real time funding progress that represents the percentage of amount raised for the project.",
    icon: <Activity className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Payment Gateway",
    desc: "Crowdfunding is all about dealing with money, So PayPal Adaptive Payments method is used to ensure secure transactions.",
    icon: <CreditCard className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Social Media Integration",
    desc: "To assure the maximum amount is raised, the social media is integrated in crowdfunding platform to let crowd know about the projects",
    icon: <Share2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Smart in-built Search Module",
    desc: "It makes easy search for the projects on the grounds of multiple keys like classification, most funded, recently launched etc.",
    icon: <Search className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Private Messaging System",
    desc: "Secured Private Messaging System that lets backers connect privately with project creators.",
    icon: <MessageSquare className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Post unlimited projects",
    desc: "A project creator can post consecutive projects for raising funds from the crowd.",
    icon: <FilePlus className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Mobile Optimized",
    desc: "Web traffic is more distinct these days. So, the campaign pages are nicely crafted to look beautiful across all platforms.",
    icon: <Smartphone className="w-8 h-8 text-[#09d0c6]" />,
  },
];

export default function Crowdfunding() {
  return (
    <div className="bg-white">
      {/* hero section  */}
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
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
          <Image
            src="/assets/image/crowdfunding2.png"
            alt="DeFi Development"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Crowdfunding Software Development Solution
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Crowdfunding is defined as “the practice of funding a project
                  or venture by raising many small amounts of money from a large
                  number of people, typically via the Internet.” It’s a
                  relatively new phenomenon and a rapidly growing industry that
                  is revolutionizing the way that new ventures receive funding.
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
                  className="bg-[#1f2937] text-white p-4 flex items-center justify-center text-center font-medium rounded hover:bg-[#153577] transition-colors min-h-[100px] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>{" "}
      {/* featues   */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Our Features</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4">
              We make it effortless to launch a Crowdfunding website or mobile
              application with your domain and branding.
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

      <Stats/>
      <Testimonials/>




    </div>
  );
}

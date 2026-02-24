"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Network,
  Users,
  Search,
  Smartphone,
  Code2,
  UploadCloud,
  Settings,
  Headset,
  CheckCircle2,
  Check,
  History,
  Target,
  Eye,
  Globe,
  Zap,
  Lock,
  MessageSquare,
  Cpu,
  BarChart3,
  Factory,
  Stethoscope,
  Truck,
  ShoppingBag,
  Building2,
  Sprout,
  Gamepad2,
  Rocket,
  Lightbulb,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import Stats from "@/components/Sections/Stats";

const approachItems = [
  {
    title: "Client-Centric Strategy",
    desc: "We begin every project by deeply understanding our client's business model, challenges, and growth objectives.",
    icon: <Users className="w-8 h-8 text-[#00D9FF]" />,
  },
  {
    title: "Security-First Development",
    desc: "Blockchain and financial technologies demand the highest level of security. Our architecture and development practices prioritize robustness, auditability, and risk mitigation.",
    icon: <Lock className="w-8 h-8 text-[#00D9FF]" />,
  },
  {
    title: "Scalable Architecture",
    desc: "We build solutions designed to grow with your business, ensuring long-term performance and adaptability.",
    icon: <Network className="w-8 h-8 text-[#00D9FF]" />,
  },
  {
    title: "Transparent Execution",
    desc: "Our clients benefit from clear communication, milestone tracking, and full development visibility throughout the project lifecycle.",
    icon: <MessageSquare className="w-8 h-8 text-[#00D9FF]" />,
  },
  {
    title: "Future-Ready Technology",
    desc: "We continuously evaluate emerging technologies to ensure our clients remain ahead of the innovation curve.",
    icon: <Cpu className="w-8 h-8 text-[#00D9FF]" />,
  },
];

const expertise = [
  "Blockchain Development",
  "Smart Contract Engineering",
  "DeFi Platform Development",
  "Cryptocurrency Exchange Solutions",
  "Crypto Wallet Development",
  "NFT Marketplace Development",
  "Metaverse Solutions",
  "Custom Software Development",
  "AI and Cloud Integration",
];

const industries = [
  { name: "Finance & FinTech", icon: <BarChart3 className="w-6 h-6" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-6 h-6" /> },
  { name: "Supply Chain & Logistics", icon: <Truck className="w-6 h-6" /> },
  { name: "Retail & E-Commerce", icon: <ShoppingBag className="w-6 h-6" /> },
  { name: "Real Estate", icon: <Building2 className="w-6 h-6" /> },
  { name: "Agriculture", icon: <Sprout className="w-6 h-6" /> },
  { name: "Gaming & Entertainment", icon: <Gamepad2 className="w-6 h-6" /> },
  { name: "Technology Startups", icon: <Rocket className="w-6 h-6" /> },
];

const Aboutus = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/image/aboutus.png"
            alt="About Avner Global"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        <Container className="relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Avner Global
            </h1>
            <p className="text-xl md:text-3xl text-gray-100 font-medium leading-tight">
              Building the Future of Digital Innovation
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Intro Section - Our Story */}
      <section className="relative overflow-hidden bg-white flex items-center min-h-[600px] lg:min-h-[750px] py-16 lg:py-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <SectionHeading className="text-left mb-8 text-4xl lg:text-5xl">
                Our Story
              </SectionHeading>

              <div className="space-y-6 max-w-xl">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Avner Global Inc. is a forward-thinking blockchain and digital
                  solutions company headquartered in Calgary, Alberta, Canada.
                  We specialize in delivering secure, scalable, and
                  enterprise-grade Web3 and software development solutions that
                  empower businesses to thrive in the rapidly evolving digital
                  economy.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded with a vision to bridge the gap between emerging
                  technologies and real-world business needs, Avner Global
                  combines deep technical expertise with strategic insight to
                  help organizations innovate with confidence. From startups
                  exploring blockchain adoption to established enterprises
                  modernizing their infrastructure, we provide end-to-end
                  technology solutions tailored for measurable impact.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact-us">
                  <Button className="bg-[#153577] text-white hover:bg-[#1a4499] px-8 py-4 rounded-full font-bold text-lg h-auto flex items-center gap-2 transition-all">
                    Request Free Consultation <span className="text-xl">›</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Large Image positioned on the right */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src="/assets/image/greybg4.png"
              alt="Avner Global Story"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">
              Leadership Team
            </h2>
            <SectionHeading>
              Visionary Leadership Driving Innovation
            </SectionHeading>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto mt-6">
              At Avner Global, our leadership team brings together deep
              expertise in blockchain technology, software engineering,
              financial markets, and global business strategy. Our leaders are
              committed to building secure, scalable, and future-ready digital
              solutions that create real business value for our clients
              worldwide.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="bg-gray-50 rounded-[40px] mb-20 flex flex-col lg:flex-row overflow-hidden min-h-[700px]">
            <div className="lg:w-[40%] relative min-h-[500px] lg:min-h-full">
              <Image
                src="/assets/image/man-in-glasses.jpg"
                alt="Parminder Singh"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="lg:w-[60%] p-8 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-1 bg-blue-100 text-[#153577] rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
                  Founder & Managing Director
                </div>
                <h3 className="text-4xl font-bold text-[#153577] mb-6">
                  Parminder Singh
                </h3>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Parminder Singh is the Founder and Managing Director of
                    Avner Global Inc., bringing over 14 years of experience in
                    financial markets, technology solutions, and global business
                    development.
                  </p>
                  <p>
                    With a strong background in brokerage operations, blockchain
                    innovation, and digital platform development, Parminder has
                    successfully led multiple technology and financial
                    initiatives across international markets. His
                    entrepreneurial vision focuses on bridging traditional
                    finance with next-generation decentralized technologies.
                  </p>
                  <p>
                    At Avner Global, Parminder drives the company's strategic
                    direction, innovation roadmap, and global expansion efforts.
                    His leadership emphasizes security-first architecture,
                    scalable infrastructure, and client-centric delivery models.
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="font-bold text-[#153577] mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#00D9FF]" /> Core
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Blockchain & Web3 Strategy",
                      "Crypto Exchange Ecosystems",
                      "FinTech & Digital Trading Infrastructure",
                      "Global Business Development",
                      "Technology Commercialization",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-[#153577] flex items-center justify-center gap-4">
                <Lightbulb className="w-8 h-8 text-[#00D9FF]" /> Leadership
                Philosophy
              </h3>
              <p className="text-gray-500 mt-4 text-lg">
                Our leadership approach is guided by three core principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Innovation with Purpose",
                  desc: "We build technology that solves real business problems — not just experimental solutions.",
                  icon: <Zap className="w-8 h-8 text-[#00D9FF]" />,
                },
                {
                  title: "Security Without Compromise",
                  desc: "In blockchain and financial systems, trust is everything. Security is embedded into every layer of our architecture.",
                  icon: <ShieldCheck className="w-8 h-8 text-[#00D9FF]" />,
                },
                {
                  title: "Long-Term Partnerships",
                  desc: "We focus on building enduring relationships with our clients by delivering consistent value, transparency, and reliability.",
                  icon: <Users className="w-8 h-8 text-[#00D9FF]" />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative bg-white p-12 rounded-[40px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(21,53,119,0.1)] hover:-translate-y-3 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#153577] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[40px]"></div>

                  <div className="mb-8 p-5 bg-blue-50 rounded-3xl inline-block group-hover:bg-[#153577] transition-all duration-500 group-hover:rotate-6">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-[#153577] mb-5">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Looking Ahead */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#153577] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <Globe className="w-16 h-16 text-[#00D9FF] mx-auto mb-8 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Looking Ahead
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Under strong leadership and a clear strategic vision, Avner
                Global continues to expand its capabilities in blockchain, Web3,
                AI integration, and enterprise software solutions. We remain
                committed to helping businesses worldwide navigate the digital
                future with confidence.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-10 h-10 text-[#153577]" />
              </div>
              <h2 className="text-3xl font-bold text-[#153577] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to enable businesses worldwide to harness the
                full potential of blockchain, Web3, and advanced software
                technologies through secure, scalable, and future-ready
                solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to delivering technology that is not only
                innovative but also practical, compliant, and built for
                long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#153577] p-12 rounded-3xl text-white shadow-xl shadow-blue-900/10"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-10 h-10 text-[#00D9FF]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-6">
                We envision a decentralized, transparent, and digitally
                empowered global economy where businesses of all sizes can
                leverage cutting-edge technology to operate more efficiently,
                securely, and intelligently.
              </p>
              <p className="text-blue-50 text-lg leading-relaxed">
                Avner Global aims to be a trusted global technology partner
                driving the next wave of digital transformation.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">
              Expertise
            </h2>
            <SectionHeading>What We Do</SectionHeading>
            <SubHeading className="mx-auto max-w-3xl">
              Avner Global provides comprehensive technology services designed
              to support businesses at every stage of their digital journey.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#153577] transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-[#153577] group-hover:text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-[#153577] transition-colors">
                      {item}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Enterprise-grade solutions tailored for maximum
                      scalability and industry compliance.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl"></div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#153577] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D9FF] rounded-full opacity-5 blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full opacity-5 blur-[120px] -ml-64 -mb-64"></div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#00D9FF] font-bold uppercase tracking-wider mb-4">
              Methodology
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              At Avner Global, we believe successful technology implementation
              requires more than just coding. It requires strategy, security,
              scalability, and long-term thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background ordinal number */}
                <div className="absolute top-8 right-8 text-7xl font-black text-white/5 group-hover:text-[#00D9FF]/10 transition-colors pointer-events-none">
                  0{index + 1}
                </div>

                <div className="mb-8 relative">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00D9FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-50 transition-colors">
                  {item.desc}
                </p>

                {/* Animated Gradient Line */}
                <div className="mt-8 w-12 h-1 bg-[#00D9FF] rounded-full group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Industries We Serve</SectionHeading>
            <SubHeading className="mx-auto max-w-3xl">
              Our cross-industry experience enables us to design practical
              solutions that address real business challenges.
            </SubHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all text-center group"
              >
                <div className="mb-4 text-[#153577] group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base leading-tight">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us & Commitment */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading className="text-left mb-6">
                Why Businesses Choose Avner Global
              </SectionHeading>
              <p className="text-gray-600 mb-8 text-lg">
                Organizations partner with Avner Global because we combine
                technical excellence with business understanding. We focus on
                building long-term partnerships rather than one-time projects.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced blockchain and Web3 specialists",
                  "Enterprise-grade security standards",
                  "Scalable and modular development frameworks",
                  "Strong focus on compliance and best practices",
                  "Agile and transparent project management",
                  "Dedicated post-deployment support",
                  "Canada-based company with global delivery capability",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className="w-5 h-5 text-[#00D9FF] shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl ring-1 ring-black/5"
            >
              <h3 className="text-2xl font-bold text-[#153577] mb-6">
                Our Commitment to Quality
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Quality, reliability, and integrity are at the core of
                everything we build. Every solution delivered by Avner Global
                undergoes rigorous testing, performance validation, and security
                review to ensure it meets enterprise expectations.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                "We understand that our clients rely on us for mission-critical
                systems, and we take that responsibility seriously."
              </p>
              <div className="mt-10 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#153577]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Global Reach, Local Trust
                    </h4>
                    <p className="text-sm text-gray-500">
                      Headquartered in Calgary, Canada, serving clients
                      globally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Custom Stats Section */}
      <Stats
        heading="Our Growth and Expertise"
        description="Headquartered in Calgary, Canada, Avner Global serves clients worldwide. Our distributed delivery model allows us to support startups, SMEs, and enterprises across North America, Europe, the Middle East, and Asia."
        stats={[
          { value: "Calgary", label: "HEADQUARTERS" },
          { value: "50+", label: "ENTERPRISE SOLUTIONS" },
          { value: "100%", label: "SECURITY COMPLIANT" },
          { value: "Global", label: "DELIVERY REACH" },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-[#153577] to-[#00D9FF] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full -ml-32 -mb-32"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Partner With Avner Global
              </h2>
              <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">
                Whether you are exploring blockchain adoption, launching a Web3
                platform, or building next-generation digital infrastructure,
                Avner Global is ready to support your journey.
              </p>
              <h3 className="text-2xl font-bold mb-10">
                Let’s build the future together.
              </h3>
              <Link href="/contact-us">
                <Button className="bg-white text-[#153577] hover:bg-blue-50 px-12 py-5 text-lg rounded-full font-bold shadow-lg h-auto">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Aboutus;

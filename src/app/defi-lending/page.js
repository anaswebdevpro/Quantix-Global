"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Coins,
  Lock,
  Users,
  Layout,
  BarChart,
  Wallet,
  PieChart,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import SupportCTA from "@/components/SupportCTA";
import WebsiteSlider from "@/components/WebsiteSlider";

const benefitsList = [
  "It has a decentralized structure.",
  "There is no need for a broker in transactions.",
  "The transactions are transparent.",
  "The security features are very strong.",
  "The loaning period offered is long. Loaners also get instant loans.",
  "Peer-to-peer transactions allows for direct transactions.",
  "The smart contracts, make the channel all the more safe and secure.",
  "The user can access the platform from anywhere across the globe.",
  "The features are state-of-the-art, that undergo frequent updation.",
  "It is compatible with a wide range of fiat and digital currencies.",
];

const howToStartSteps = [
  {
    title: "Wallet Integration",
    desc: "You can integrate any wallet with your platform to carry out seamless transactions.",
    icon: Wallet,
  },
  {
    title: "Smart Contracts",
    desc: "Set up smart contracts development for your automated systems, with set conditions to match your platform.",
    icon: Layout,
  },
  {
    title: "Strategic Marketing",
    desc: "You can launch a successful platform by carefully marketing your products to a number of users.",
    icon: BarChart,
  },
  {
    title: "Maintenance & Launch",
    desc: "Ensure a hassle-free launch for periodic maintenance for continued functionality.",
    icon: Zap,
  },
  {
    title: "Currency Research",
    desc: "We will also ensure to do extensive research on digital currencies to be transacted.",
    icon: Coins,
  },
  {
    title: "Interest Rates",
    desc: "Set the interest rates on a variety of loans, based on market conditions.",
    icon: PieChart,
  },
  {
    title: "Wallet Selection",
    desc: "We can also help you choose the best wallet, for your platform.",
    icon: Lock,
  },
  {
    title: "Token Selection",
    desc: "The selection of the right token is also essential for your platform.",
    icon: Layers,
  },
];

const lendingProcess = [
  "Firstly, the DeFi lending process includes transactions without a need for an intermediate. Peer to peer transfers occurs, regardless of the status or position. It delivers an open-source and transparent financial services environment.",
  "Lender can give out loans to anyone who requires funds on the platform.",
  "When the process of lending is initiated, the smart contract verifies and authorizes the borrower to request a loan.",
  "If the conditions for lending are met, the smart contract deploys by itself, unless any one of both members stop it.",
  "The transaction takes place and the immutable history of the transaction is stored on the ecosystem, for access later.",
];

const borrowingProcess = [
  "The borrower files a loan request on the said platform, wherein the DeFi borrower takes a loan pledging their crypto-asset, for repayment of the loan.",
  "The loan is certified and initiated by the smart contract, only after all conditions are met.",
  "The process of loan disbursement is carried out, only after both the lender and the borrower consents.",
  "When the borrower returns the amount with interest, the collateral is returned.",
  "The platform also allows for different types of collaterals pledges, including fiat currencies, and other assets.",
];

const whyChooseAdvantages = [
  "The transactions are highly transparent",
  "The pricing is efficient",
  "The funds are readily available",
  "The transactions are faster than traditional ecosystem",
  "The records are immutable, as no one can erase anything or change anything",
  "If offers censorship free",
  "Very low investment costs",
  "Completed automated process",
  "The users have complete custody of the funds",
  "Margin trading is allowed",
];

export default function DefiLending() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/Banner_Defi.jpg')", // Reusing a relevant banner or fallback
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* content */}
        <Container className="relative z-20">
          <div className="max-w-4xl py-20 lg:py-24">
            <Heading as="h1" className="text-white mb-6 leading-tight">
              Defi Lending And Borrowing Platform Development Services
            </Heading>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Decentralized cryptocurrency exchange platforms are receiving a
              lot of attention amongst investors for their private and
              transparent dealings.
            </p>

            <Link href="/contact-us">
              <Button
                variants="primary"
                className="inline-flex items-center justify-center text-md px-8 py-3 bg-[#09d0c6] hover:bg-[#07b0a8] text-white border-none"
              >
                Talk To An Expert
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                {/* Provide a specific image if available, else fallback */}
                <Image
                  src="/assets/image/Finance-and-Banking-scaled.webp"
                  alt="DeFi Lending Development"
                  fill
                  className="object-cover"
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/image/about_pancake.png")
                  }
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left mb-6">
                DeFi Lending and Borrowing Platform
              </SectionHeading>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Decentralized cryptocurrency exchange platforms are receiving
                  a lot of attention amongst investors for their private and
                  transparent dealings. More and more investors around the world
                  are leaving the traditional financial ecosystem behind and
                  reaching out to DeFi lending and borrowing platforms like
                  Aave, and Compound, and many more.
                </p>
                <p>
                  At Webcom Systems, we provide industry-oriented services that
                  deliver the best and most profitable results for our clients.
                  Our DeFi lending and borrowing platform are built on the
                  latest frameworks and offer state-of-the-art features. If you
                  want to create the right impression in the financial markets,
                  then this is the best choice for you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What Does It Mean Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading className="mb-8">
              What Does DeFi Lending and Borrowing Mean?
            </SectionHeading>

            <SubHeading className="max-w-5xl mx-auto leading-relaxed">
              DeFi stands for Decentralized Finance. It is a type of finance
              which is controlled by none, and users have the liberty to
              transact at their own will. Most users prefer this, for a variety
              of reasons, like transparency, safety, security, open-source
              nature, and so on. The smart contracts development governs the
              DeFi Lending platform and Borrowing platform which omits the need
              for a middleman.
              <br />
              <br />
              It is an easy and seamless process today. It facilitates the
              peer-to-peer platform to users, to be able to transact money
              directly with one another. If you are a new entrant in the
              financial services industry, then this is the right channel to
              make your impression.
            </SubHeading>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Decentralized Lending and Borrowing Platform
              Development
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              The platform provides a host of benefits to the users. Here we
              present a few of the benefits, if you get the platform developed
              from Webcom Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefitsList.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#09d0c6] shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How To Start Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="mb-4">
              How To Start Your Own DeFi Lending and Borrowing Platform
              Development?
            </SectionHeading>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Webcom Systems, we have devised the perfect methodology and to
              create a well-performing DeFi Lending and Borrowing Platform to
              meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToStartSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-[#09d0c6]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#09d0c6]" />
                </div>
                <h3 className="text-lg font-bold text-[#333d47] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section (Lending & Borrowing) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>
              How Does Webcom Systems DeFi Lending and Borrowing Platform Work?
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We have many years of experience in the sector, and know what
              works for each type of client. DeFi or cryptocurrency blockchains
              are fast-moving sectors, that undergo changes in a short time. You
              will get the best available platform from the market today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lending Process */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-[#153577] mb-6 border-b pb-4">
                The Lending Process
              </h3>
              <ul className="space-y-4">
                {lendingProcess.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Borrowing Process */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-[#153577] mb-6 border-b pb-4">
                The Borrowing Process
              </h3>
              <ul className="space-y-4">
                {borrowingProcess.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left mb-6">
                Why Choose a DeFi Lending and Borrowing Platform?
              </SectionHeading>
              <p className="text-gray-600 mb-8">
                There are huge advantages of a DeFi Lending platform and a DeFi
                borrowing platform, over traditional types of finances.
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {whyChooseAdvantages.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#09d0c6]" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/assets/images/How-does-DeFi-staking-platform-integrate-borrowing-and-lending-functionalities.jpg"
                  alt="Why Choose DeFi"
                  fill
                  className="object-cover"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "/assets/images/Decentralized-Finance-Platform.jpg")
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Webcom Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading className="mb-6">
              Why Choose Webcom Systems Defi Lending Platform Development?
            </SectionHeading>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Webcom Systems, we work with a team of financial and web
              development experts, with real-world knowledge of such ecosystems.
              Our team has the right technical know-how, to deal with all kinds
              of smart contracts development, defi platform development, defi
              borrowing platform, and defi lending platform.
              <br />
              <br />
              Moreover, we deliver customized platforms, to suit every company.
              You will get complete services even after deployment of the
              platforms. Our prices are the most affordable, and genuine. We
              have all the white-label papers to support the job. You will get a
              customized model based on trending models like Uniswap, and Aave.
            </p>
            <Link href="/contact-us">
              <Button variants="primary">
                Let&apos;s Build Something Amazing Together
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <WebsiteSlider />

      {/* CTA Section */}
      <SupportCTA />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

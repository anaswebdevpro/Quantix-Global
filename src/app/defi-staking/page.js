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
} from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import SupportCTA from "@/components/SupportCTA";
import WebsiteSlider from "@/components/WebsiteSlider";
import BannerForm from "@/components/bannerForm";

const whyLaunchSolutions = [
  {
    title: "Earn Huge ROI",
    desc: "Now, users can earn an attractive return on their cryptocurrency investments.",
    icon: BarChart,
  },
  {
    title: "Collect Governance Tokens",
    desc: "Many lenders and borrowers who are participating in the decentralized finance staking system are getting governance tokens for their funds.",
    icon: Coins,
  },
  {
    title: "User's Free Will",
    desc: "Users are able to utilize their idle cryptocurrency assets.",
    icon: Users,
  },
  {
    title: "Transparency",
    desc: "The entire defi development operates with transparency. Smart contracts govern all the transactions. So, you can consider it to be safe.",
    icon: Shield,
  },
  {
    title: "No Brokers",
    desc: "There are no brokers, thus minimizing operation costs and optimizing the deals for better outcomes.",
    icon: Lock,
  },
  {
    title: "No Mining Equipment Required",
    desc: "Users do not have to invest in exorbitantly priced mining services, to generate huge profit.",
    icon: Zap,
  },
  {
    title: "Economical",
    desc: "The decentralized finance companies are giving crypto-investors an edge over others. The services are extremely economical and user-friendly.",
    icon: Globe,
  },
];

const waysToEarn = [
  {
    title: "Claim",
    desc: "DeFi participants have to lock their funds likewise fixed deposits offered by banks. So, the liquidity pool gets the flow of cryptocurrencies for trading. They can earn rewards, which are dependent on the total assets staked. The rewards are generally passed on to the wallets that the users register.",
  },
  {
    title: "Delegate",
    desc: "This is somewhat similar to Mutual funds. They carry a lot of risks. A fund manager generally takes care of the assets in this arena. The profits earned are again re-invested into the eco-system where eligible users/participants get their dividends from time to time.",
  },
  {
    title: "Validate",
    desc: "This transactional avenue is similar to Equity funds. Participants can now participate directly on this platform. The participants also have the facility to observe how the transactions are taking place, and how rewards are been disbursed.",
  },
];

const benefitsDecoded = [
  "Transparency – The transactions are transparent to the core.",
  "User-friendliness – The system is user-friendly for users.",
  "High ROI – The users can earn high ROI.",
  "Better Liquid Flow – The environment offers a lot of liquidity.",
  "Access Decentralized Banking Solutions – The users can access Decentralized Banking Solutions.",
  "Eco-Friendly Solutions – The users will find it to be a green solution.",
  "Unlock Extra Cryptocurrency Use-cases – Now, users can unlock the extra cryptocurrency use-cases.",
];

export default function DefiStaking() {
  return (
    <div className="">
      

        <section
        className="relative min-h-[72vh] overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/metaverse-healthcare-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="relative z-10 max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-16 md:py-24">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight">
               Defi Staking Platform Development Services
              </h1>
              
              <p className="mt-4 text-gray-200 text-sm md:text-lg leading-relaxed">
               Start a DeFi Staking Platform Service, the Most Renowned Decentralized Platform today.
              </p>
              <Link href="/contact-us" className="inline-block mt-8">
                <Button variants="action" className="inline-flex items-center">
                  Talk To An Expert
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

           <BannerForm />
          </div>
        </Container>
      </section>


      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/Defi-stacking-platform-development.png"
                  alt="DeFi Staking Development"
                  fill
                  className="object-cover"
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/images/about_pancake.png")
                  }
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="text-left mb-6">
                DeFi Staking Platform Development Services
              </SectionHeading>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The latest staking platform to enthrall the market is the defi
                  staking platform. DeFi stands for decentralized finance. It is
                  creating news in the cryptocurrency atmosphere. Millions and
                  millions of users are relying on the platform, defi solution.
                  Users can now increase their wealth, by trading in
                  cryptocurrencies. The users who participate in the trading get
                  interest or yields on their stakes. Now, the user can trade
                  without brokers in the transaction channels.
                </p>
                <p>
                  The defi staking platform is better than most traditional
                  finance and banking platforms. We have empowered users with
                  the power to transact freely, with the help of smart contracts
                  that the users themselves can customize. At Webcom Systems, we
                  have the best experts in the DeFi services arena. You can
                  trust us with your cryptocurrency management goals and
                  aspirations. Moreover, we offer a broad range of services that
                  include defi token development, apart from defi smart
                  contract, defi blockchain architecture, defi lending and
                  borrowing development, and defi exchange development.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What Is Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading className="mb-8">
              What Is Defi Staking?
            </SectionHeading>

            <SubHeading className="max-w-5xl mx-auto leading-relaxed">
              More than $13.62 billion is locked in the decentralized finance
              ecosystem. We&apos;re establishing ourselves as market leaders in
              defi staking platform development. Users who participate in the
              DeFi project, can earn governance tokens or yields to get the best
              returns from their contributions. DeFi is helping millions get
              liquidity for their cryptocurrency assets. Ethereum-like
              Blockchain Cryptocurrency channels are adopting various new
              protocols, such as the Proof-of-Stake Consensus protocol.
              <br />
              <br />
              Thus, leading to a surge in users asking for defi staking platform
              development services. We are taking leverage of the defi
              ecosystem. Moreover, we are providing liquidity to many
              cryptocurrency owners. The technology was made popular first, by
              Bitcoin. Now, transactions occur in between the users, with low
              authentication guidelines. The users do not need to rely on banks,
              centralized, or traditional cryptocurrency exchanges.
            </SubHeading>
          </div>
        </Container>
      </section>

      {/* Why Launch Own Solution - Features Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="mb-4">
              Why Should You Launch Your Own Solutions?
            </SectionHeading>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The decentralized finance staking system is transforming the
              ecosystem of cryptocurrency exchanges. Therefore, it is a good
              time to launch your own DeFi staking solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyLaunchSolutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#09d0c6]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#09d0c6]" />
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <SectionHeading className="mb-6 text-left">
                DeFi Staking Platform Workflow
              </SectionHeading>

              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The decentralized finance companies are utilizing smart
                  contracts that users can control themselves. The participants
                  who trade the currencies on the platform, themselves provide
                  funding to the pool of users. Thus, one can find an ecosystem
                  that is truly conducive for lending and borrowing funds. The
                  stakeholders can earn fantastic incentives and ROI i.e
                  governance tokens. The stakeholders have greater control over
                  cryptocurrency transactions in this environment.
                </p>
                <p>
                  The pooling of funds to a common arena allows users,
                  stakeholders, and participants to earn bigger ROI in the times
                  to come. There are various features like the defi wallet
                  development, defi insurance system, and defi lottery system
                  that have changed how currencies such as these are looked at.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image
                  src="/assets/images/workflow.png"
                  alt="DeFi Workflow"
                  fill
                  className="object-contain p-4"
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

      {/* Ways to Earn */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Numerous Ways To Earn Rewards Through Defi Staking Solutions
            </SectionHeading>
            <p className="text-gray-600 mt-4">
              With us, you can win on potential ways to earn incentives using
              decentralized finance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waysToEarn.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#153577] font-bold text-2xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Decoded */}
      <section className="py-16 md:py-20 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DeFi Staking Platform Development Services Benefits Decoded
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              You should note the below mentioned advantages of trading on the
              DeFi Staking platform today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefitsDecoded.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#09d0c6] shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Build With Us */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <SectionHeading className="mb-6">
              Why Build Your DeFi Staking Platform with Us?
            </SectionHeading>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The DeFi environment is constantly evolving. Therefore, it is
              important to acquire the best Defi Staking Platform Development
              Company on board. We at Webcom Systems, carry years of experience
              in various domains where Blockchain and cryptocurrency are amongst
              them. We work with a team of expert developers, market analysts,
              and marketers who can give you best platform to succeed. Above
              all, our entire services suite is whitelabel and personizable thus
              extending you an extra edge over others.
            </p>
            <Link href="/contact-us">
              <Button variants="primary">
                Let&apos;s Discuss Your Project
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

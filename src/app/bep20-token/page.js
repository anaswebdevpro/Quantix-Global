"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Coins,
  Globe,
  Layers,
  Code,
  Check,
  ChevronRight,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import Container from "@/components/ui/container";
import HeroWithForm from "@/components/Sections/heroWithform";
import SupportCTA from "@/components/Sections/SupportCTA";
import BannerForm from "@/components/Sections/bannerForm";

const features = [
  {
    title: "Token Cap",
    description:
      "The number of tokens that are generated are generally pre-decided. The users who will buy the tokens are sure that only the declared number of tokens will be issued. It helps to create a surety of achievement of financial goals.",
    icon: <Coins className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Token Minting",
    description:
      "Being a token owner you will be able to mint tokens as and when necessary. You can also increase the token value by reducing the number of tokens that can be issued. Sending the transaction with the help of smart contracts helps in the creation of new tokens.",
    icon: <Code className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Token Burning",
    description:
      "With BEP20 development, Tokens are sent to an unusable wallet so as to remove it from circulation. The address to which it is sent is called a Burn address. Once it is burnt, it is gone from the ecosystem forever.",
    icon: <Zap className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Ownership Rights",
    description:
      "As the owner of the token, you can cap it, mint it, or even burn it. This is totally your call.",
    icon: <Shield className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Role-based Access",
    description:
      "You can edit the Addresses to the admin and minter role, whenever you as a token holder feel is required.",
    icon: <Users className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Compatible Tokens",
    description:
      "The tokens that are developed by us are totally compliant with the standard BEP20 tokens and are adaptable on all BEP20 wallets. The tokens have names that can be customized with symbols and designated by decimals.",
    icon: <Layers className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const faqs = [
  {
    question: "What are the benefits of Binance Smart Chain?",
    answer:
      "Leveraging Binance Smart Chain for your apps will provide you with a number of benefits, including superior performance, lightning-fast trading, smart contract capabilities, increased transparency, improved DeFi compatibility, and more.",
  },
  {
    question:
      "What is the approximate cost of developing an application for the Binance Smart Chain?",
    answer:
      "The kind of application you want to create, the features you decide to include, and your level of customization will all have an impact on the price. Our goal is to provide you with the finest possible solution while maintaining affordable services.",
  },
  {
    question: "Using the Binance Smart Chain, what can I build?",
    answer:
      "Binance Smart Chain’s strong performance and resilience make it an excellent choice for developing dApps, tokens, DeFi platforms, smart contracts, wallets, exchanges, and NFT marketplaces in response to changing demands in the digital business space.",
  },
  {
    question: "How rapid is the smart chain on Binance?",
    answer:
      "One of the top-performing and fastest blockchain platforms is Binance Smart Chain. Specifically, BSC runs at a rate of one block every three seconds, therefore it wouldn’t be incorrect to estimate that 20 blocks can be produced on BSC in a minute. Because of this, BSC is renowned for its blazingly quick transactions.",
  },
  {
    question: "Does The MetaMask Wallet Accept BEP20 Tokens?",
    answer: "Absolutely, you may keep your BEP20 tokens on MetaMask.",
  },
  {
    question: "Are BSC and BEP20 The Same?",
    answer:
      "The BSC network is a blockchain, and the BEP20 token standard is used to create tokens within the BSC network.",
  },
  {
    question: "Is Binance Smart Chain interoperable?",
    answer:
      "Due to the Ethereum to Binance Chain Bridge (ERC20 — BEP2 bridge), Binance Chain is really very interoperable. With the aid of the BEP2 bridge, Binance Smart Chain is home to several bridged assets from the Ethereum network.",
  },
  {
    question:
      "How soon can Avner Global start with the development of my project?",
    answer:
      "Your time-to-market will be accelerated by our services alone. As soon as you get in touch with us with your requirements, we’ll work together to create a clear plan that will expedite the creation of your Binance Smart Chain, giving you a competitive advantage and prompt market access.",
  },
];

import { Users } from "lucide-react";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import FAQAccordion from "@/components/Sections/FAQAccordion";

export default function Bep20Token() {
  return (
    <div className="bg-white">
      <HeroWithForm
        heading="BEP20 Token Development Company"
        text="BEP20 Token Development On Binance Smart Cross-Chain"
        bgimage="/assets/image/Banner-1.jpg"
      />

      {/* intro section  */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
              BEP20 Token Development On Binance Smart Cross-Chain
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              In the realm of cryptocurrency many contemporary advancements are
              made that challenge the existing systems while offering upgrades
              mainly in Decentralized Finance Space. One such latest development
              was Binance Smart Chain. However, the Binance Smart Chain offers
              incentives and benefits like no other in the Decentralized
              Exchange Spectrum. Here at Avner Global, our current offering is
              the standard token, which works on the Binance Smart Chain and is
              similar to the BEP20. The new BEP20 token has numerous benefits
              that make it a very sound investment, and businesses looking
              forward to launching a token like this are on the right track.
              <br />
              <br />
              At Avner Global, our seasoned developers and highly experienced
              connoisseur in DeFi and blockchain development, create, develop,
              and help companies launch the most prolific BEP20-like tokens on
              the BSC or Binance Smart Chain. We have spent years analyzing the
              intricacies of DeFi smart contracts, Lending, Borrowing platforms,
              Yield Farming, Tokens, as well as Tokenization development making
              Avner Global the ideal choice for your BEP20-like token
              development.
            </SubHeading>
            <div>
              <Link href="/contact-us" className="inline-block mt-6 sm:mt-8">
                <Button
                  variants="action"
                  className="inline-flex items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  Talk To An Expert
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading className="mb-6">
                Binance Exchange – The Most Popular Cryptocurrency Exchange
              </SectionHeading>
              <SubHeading className="mb-6">
                Being one of the most popular cryptocurrency exchanges, the
                Binance Exchange projects a high trading volume, for various
                cryptocurrencies like Bitcoin, Ethereum, Litecoin, and Altcoin.
                Some of the benefits that such cryptocurrencies offer are high
                liquidity, low transaction fees, and huge discounts for trading
                the native cryptocurrency BNB. Binance has launched its very own
                blockchain called Binance Chain, which facilitates trading
                services, listing services, withdrawals, and fundraising. The
                Binance Chain has been tailored in keeping with DEX norms. Its
                main aim is to facilitate faster transactions. Apart from that,
                the network also allows users to issue new tokens, send,
                receive, and mint numerous tokens, and in the process create
                trading pairs between two tokens. In this network, the Binance
                DEX holds the power to trade in high volumes, much above the
                centralized exchanges.
              </SubHeading>
              <div className="flex gap-4">
                <Link
                  href="/contact-us"
                  className="bg-[#153577] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#09d0c6] transition-colors"
                >
                  Talk To An Expert
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=971527732049&text&app_absent=0"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#128C7E] transition-colors flex items-center gap-2"
                >
                  Connect On Whatsapp
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/assets/image/Asset-Tokenization_image.png"
                alt="BEP20 Token Development"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Idea CTA */}
      <SupportCTA />

      {/* BEP20 Token Development */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/assets/image/image2-2.png"
                alt="Binance Smart Chain Benefits"
                fill
                className="object-contain"
              />
            </div>

            {/* Text Side */}
            <div>
              <SectionHeading className="mb-6 text-left">
                Enormous Benefits of Using the Binance Smart Chain Network
              </SectionHeading>

              <ul className="space-y-4 mb-8">
                {[
                  "It enables the creation of Smart Contracts on the BSC.",
                  "BSC is EVM-compatible. It supports popular DeFi wallets in the ecosystem.",
                  "The system has robust staking process for BNB.",
                  "The transaction fee is very low. Ethereum transaction fees has reached an all-time high, and that has created hindrances. The gas fees here are 20 times lower.",
                  "It is an agile ecosystem for validators, token holders, developers, and others.",
                  "The system provides a huge room for innovation and performance. Moreover, the Binance chain has pegged cryptocurrencies like Bitcoin, Ethereum, and Tron, amongst others.",
                  "Increase the dependence as well as acceptance of BSC for decentralized protocols and applications.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <Check
                        className="w-5 h-5 text-[#09d0c6]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-600 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Another benefit of Binance Smart Chain that is worth mentioning
                is the cross-chain compatibility aspect. As it comes with a
                dual-chain architecture that builds the network, the users can
                transit from one network to another very easily even while
                facilitating rapid trading and the cross-platform exchanges.
                This synergism also enables the swapping of BEP-2 and BEP-8
                tokens with BEP-20 an enviable feature.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Features of BEP20 Token Development</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#153577]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Avner Global Expert Section */}
      <section className="py-16 md:py-24 bg-[#153577] text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading className="!text-white mb-6">
              Avner Global: An Adept Token Development Company
            </SectionHeading>
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              Having developed and successfully launched numerous projects
              within the cryptocurrencies and prolific DeFi, Avner Global have
              the expertise to take your next Token development to the colossal
              heights. Harness our rigorous research, design thinking-driven
              approach and unmatched solutions in strategy, consulting,
              technology and operations create an innovative roadmap to help
              businesses transit from conventional technology platforms to
              blockchain-driven systems.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#09d0c6] text-[#153577] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}

      <div className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions(FAQs)</SectionHeading>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </div>
      {/* History/Stats Section */}
      <section className="py-20 bg-[#153577] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/assets/image/world-map.png')] opacity-10 bg-contain bg-center bg-no-repeat"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                History is Boring! But numbers aren’t!
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                We have worked with startups to Fortune 500 companies in our
                journey of 10+ years. We have delivered 500+ successful projects
                to our 300+ clients across the globe.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#09d0c6] mb-2">
                    10+
                  </h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#09d0c6] mb-2">
                    500+
                  </h3>
                  <p className="text-gray-300">Projects Delivered</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#09d0c6] mb-2">
                    300+
                  </h3>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#09d0c6] mb-2">
                    50+
                  </h3>
                  <p className="text-gray-300">Country Served</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Talk to Our Experts
              </h3>
              <BannerForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#333d47] mb-6">
              Let’s Talk About Your Next Big Business Venture.
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We think out of the box to create something very unique every
              time. Be Smarter And Faster.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#153577] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#09d0c6] transition-all"
            >
              Talk To Our Experts
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

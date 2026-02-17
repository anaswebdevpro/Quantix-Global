"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  Gamepad2,
  Palette,
  PieChart,
  Store,
  Box,
  Shirt,
  GraduationCap,
  Building2,
  Car,
  Music,
  Globe,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Zap,
  Ticket,
  Vote,
  Layers,
  Settings,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Container from "@/components/ui/container";
import HeroWithForm from "@/components/Sections/heroWithform";
import SupportCTA from "@/components/Sections/SupportCTA";
import Button from "@/components/ui/button";
import WebsiteSlider from "@/components/WebsiteSlider";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import { Heading } from "@/components/ui/Heading";
import Stats from "@/components/Sections/Stats";

const inventoryItems = [
  {
    title: "NFT based ICO development",
    description:
      "We help you launch your own ICO with NFTs. Our team of experts will guide you through the entire process, from ideation to launch.",
    icon: <Rocket className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "NFT Governance Tokens",
    description:
      "Governance tokens allow holders to vote on key decisions influencing the ecosystem. We help you create and implement governance tokens for your NFT project.",
    icon: <Vote className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Implementation of NFT Development & ICO Marketplaces",
    description:
      "We provide end-to-end solutions for developing NFT marketplaces and ICO platforms. Our scalable and secure solutions ensure a seamless user experience.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Instant NFT Customization",
    description:
      "Our platform allows for instant customization of NFTs, enabling users to create unique digital assets that stand out in the marketplace.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const services = [
  {
    title: "Utility-Based NFT marketplace",
    description:
      "The future of the blockchain is bright. With the increasing use of cryptocurrencies, people have been looking for ways to invest in the blockchain without having to buy a cryptocurrency. The idea of utility-based NFTs has caught on and it is expected that this trend will continue to grow.",
    icon: <Zap className="w-10 h-10 text-[#09d0c6]" />,
  },

  // {
  //   title: "Play to Earn NFT games",
  //   description:
  //     "Play to Earn NFT games are a type of online game that uses the blockchain to provide traders with an opportunity to earn rewards for playing games. Webcom Systems helps you to find the best nft games for your fun.",
  //   icon: <Gamepad2 className="w-10 h-10 text-[#09d0c6]" />,
  // },
  // {
  //   title: "NFT art tokenization technology",
  //   description:
  //     "NFT art tokenization technology allows artists to make their works tradable in this way and take control of their creations, guaranteeing every artist that their work can be used as currency.",
  //   icon: <Palette className="w-10 h-10 text-[#09d0c6]" />,
  // },
  // {
  //   title: "Fractionalized NFT",
  //   description:
  //     "Fractionalized NFTs brings in the liberty of letting in even the small investors own the NFTs and make the decisions on when to sell or buy in the market. Webcom Systems helps you with the complexities of fractionalized NFTs.",
  //   icon: <PieChart className="w-10 h-10 text-[#09d0c6]" />,
  // },
  // {
  //   title: "NFT Marketplace",
  //   description:
  //     "An easy-to-use trading interface that allows you to trade your NFTs anywhere. No need for registration, or a wallet. A key feature of the NFT Marketplace is that it will not create accounts and require login information on behalf of the buyer/seller.",
  //   icon: <Store className="w-10 h-10 text-[#09d0c6]" />,
  // },
  // {
  //   title: "NFT for physical assets",
  //   description:
  //     "Physical NFTs are tokens that combine the digital and physical worlds. They can be used to prove ownership over real-world assets, such as artists' creations, fashion goods, property deeds, and more.",
  //   icon: <Box className="w-10 h-10 text-[#09d0c6]" />,
  // },
  // {
  //   title: "NFT for games",
  //   description:
  //     "Games are a natural fit for NFTs. They provide a unique way to play and design games that can be used, transferred, and even auctioned off in their entirety.",
  //   icon: <Gamepad2 className="w-10 h-10 text-[#09d0c6]" />,
  // },
  {
    title: "NFT for the fashion industry",
    description:
      "The fashion industry has always been a leader in innovation with the latest trends and crazes. Webcom Systems helps you to use NFTs to allow customers to mix, match and make their own unique designs.",
    icon: <Shirt className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT for education",
    description:
      "NFTs are now being used in educational settings because of their ability to convey complex ideas by conveying them through interactive experiences instead of relying on text.",
    icon: <GraduationCap className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT for the real estate industry",
    description:
      "NFTs provide means of verifying the authenticity and ownership of virtual land that can be bought in a game or other metaverse platform. Webcom Systems help you to understand how to integrate blockchain technology and virtual real estate.",
    icon: <Building2 className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT for the automotive industry",
    description:
      "The automotive sector has recognized the potential of using NFT in the industry. NFT is supposed to help auto manufacturers to build successful products quickly and efficiently with better feedback from customers.",
    icon: <Car className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT for music industry",
    description:
      "NFTs are transforming the music industry by allowing artists to tokenize their work, creating new revenue streams and deeper connections with fans through exclusive content and ownership rights.",
    icon: <Music className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const additionalServices = [
  {
    title: "Decentralized Finance & Non-Fungible Tokens Development",
    description:
      "Decentralized finance is transforming the way people do transactions in the world. With blockchain-based, decentralized money, the traditional role of intermediaries in finance is becoming obsolete. The advent of Nonfungible tokens has given us a glimpse of a decentralized finance future where you will not need to worry about the platform or service provider anymore.",
    icon: <Code2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "NFT Launch Pad Development",
    description:
      "The NFT Launch Pad is an open-source, blockchain-based tool that helps generate a custom trading application. The developers can build different kinds of apps on the platform, either for cryptocurrency exchanges or other applications. We offer a decentralized and no-fee trading solution.",
    icon: <Rocket className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "NFT E-commerce",
    description:
      "NFT E-commerce is a concept where brands use their digital assets to create, exchange and sell goods. They promote the idea of ownership by using tokenized assets. We offer a safe, secure, and transparent digital trading platform for traders.",
    icon: <ShoppingCart className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Webcom Systems NFT Platform Development Services",
    description:
      "Build a solution that drives growth. We develop the best blockchain-based platform with a wide range of features, personalized to suit your specific need. Whether you are a start-up looking to create a new cryptocurrency or an enterprise blockchain, we are the perfect partner.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const faqs = [
  {
    question: "What is a Non-Fungible Token?",
    answer:
      "With the advent of blockchain innovation, many new digital currencies have popped up. Some of these non-fungible tokens are used for digital assets like eCommerce items and online content. Non-fungible tokens are also widely used in video games to generate in-game assets that have unique properties that cannot be copied and thus have value.",
  },
  {
    question: "What is an NFT and How Does it Work?",
    answer:
      "NFT is an acronym for non-fungible tokens. In the world of crypto, NFTs are used to represent unique assets in games and collectibles. An example of an NFT would be a piece of artwork on a blockchain where the ownership of the artwork is shared between the buyer and artist when sold on the blockchain.",
  },
  {
    question:
      "What Are The Services to Look For When Choosing an NFT Development Company?",
    answer:
      "An NFT development company offers a wide variety of services to help the process. They offer services like cryptocurrency development, smart contracts, software development, and more.",
  },
  {
    question: "The Steps Involved in an NFT Development Process",
    answer:
      "NFT development is an integral part of the cryptocurrency ecosystem. It involves four steps – mining, initial coin offering (ICO), token trading, and development. An initial coin offering is when a developer creates a new cryptocurrency to raise funds for further project developments.",
  },
  {
    question: "Primary Differentiators Between Fungible & Non-Fungible Tokens",
    answer:
      "Non-Fungible tokens are unique and valuable in their own right. They are not like fungible tokens where the value of one token is the same as another. For example, you can use a non-fungible token to purchase a game-specific virtual item from a game developer or publisher.",
  },
  {
    question: "What is the cost of creating an NFT?",
    answer:
      "With an NFT, you can design your own token and pay someone to write it for you. However, there are many aspects of the process that come with a price tag. For example, the size of the token is determined by the complexity of its design, and the gas fee is what you pay for every transaction on your NFT.",
  },
];

const stats = [
  { value: "150+", label: "TOTAL EMPLOYEES" },
  { value: "10299", label: "PROJECT COMPLETED" },
  { value: "1257", label: "GLOBAL CLIENTS" },
];

export default function NFTDevelopmentPage() {
  return (
    <div className="bg-white">
      <HeroWithForm
        heading="NFT Development Company"
        text="Dive into the future of digital assets with our top-tier NFT development services. From crafting unique NFTs to building robust blockchain solutions."
        bgimage="/assets/image/banner-2.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Our Inventory For NFT Development Company
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Non-Fungible Tokens (NFTs) are digital certificates of ownership
              for every particular digital asset. The NFT concept is built upon
              the standard set by ERC-721.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mb-4 bg-[#e0fbf9] w-14 h-14 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#153577] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Exceptional NFT Marketplace Development Services We Offer
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer comprehensive solutions to help you launch and manage
              your own NFT marketplace, catering to various industries and use
              cases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#153577]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-4 group-hover:text-[#09d0c6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Specialized NFT Development Solutions
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#09d0c6] hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#153577] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Support CTA */}
      <SupportCTA />

      {/* How We Can Help Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/assets/image/5-1.png"
                alt="How We Help"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading className="mb-6 text-left">
                How We Can Help You ?
              </SectionHeading>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xl font-bold text-[#153577] mb-2">
                    How We Can Help You?
                  </h4>
                  <p>
                    Developing NFTs is a time-consuming process, but with us,
                    it’s quick and simple. With our platform, you can build your
                    own NFT on the blockchain in minutes. It’s your game, your
                    rules, your tokens. We can help you with the process
                    breakdown, coding, and launch.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#153577] mb-2">
                    Why Choose Us?
                  </h4>
                  <p>
                    The power of blockchain will change the way you work,
                    conduct business and make decisions. Webcom Systems is a
                    leading developer of blockchain apps and NFTs. With an
                    experienced team of developers and business experts, we are
                    well-positioned to be your trusted blockchain partner.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact-us">
                  <Button variants="primary" className="px-8 py-3">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions(FAQs)</SectionHeading>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
              Common questions about our NFT development services and process.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </div>

      {/* Stats Section (History is Boring) */}
      <Stats />

      {/* Conclusion CTA */}
      <WebsiteSlider />
    </div>
  );
}

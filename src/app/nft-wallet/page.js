"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Users,
  Rocket,
  ShieldCheck,
  Code2,
  Palette,
  Layout,
  Cpu,
  Zap,
  CheckCircle2,
  Wallet,
  Search,
  Settings,
  MonitorSmartphone,
  Gem,
  ArrowLeftRight,
  Store,
  Fingerprint,
  RefreshCw,
  FileKey,
  Wrench,
  ChevronRight,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Container from "@/components/ui/container";

import SupportCTA from "@/components/Sections/SupportCTA";

import Button from "@/components/ui/button";
import WebsiteSlider from "@/components/WebsiteSlider";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import { Heading } from "@/components/ui/Heading";

const services = [
  {
    title: "NFT Minting Platform Development",
    description:
      "Get your non-technical users involved in investing in cryptocurrency to maximize their earning potential. We simplify the process of creating NFTs, eliminating the need for coding or technological expertise. Users can easily create tokens without needing to understand complex blockchain technology.",
    icon: <Rocket className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT Smart Contract Development",
    description:
      "NFT Smart Contract Development involves creating blockchain-based contracts that facilitate the creation, transfer, and ownership of unique digital assets. These contracts ensure authenticity, security, and transparency, enabling artists, creators, and businesses to tokenize and trade digital collectibles efficiently.",
    icon: <Code2 className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Crypto Collectibles",
    description:
      "Easily protect and exchange digital assets with ownership documentation. Sell, acquire, and maximize the value of your artwork. We allow users to register virtual assets with their keys for security and convenience. The ownership of the NFTs are immutable assets, meaning they cannot be changed.",
    icon: <Gem className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "NFT Exchange Development",
    description:
      "We provide top-notch Blockchain-based NFT exchange solutions for token transfer, swapping, and trading. Creators can maximize their income by promoting their creations to explore multiple revenue sources. NFT exchanges provide an opportunity to search for high-quality financial leads.",
    icon: <ArrowLeftRight className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Open Trading place",
    description:
      "NFTs can be used to provide secure management by assigning each token a unique value. With Avner Global expertise, you can easily optimize your NFT and maximize its development potential. NFTs are used to manage digital assets like artwork, music, and more.",
    icon: <Store className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Identity Management with NFT",
    description:
      "NFTs can provide a secure way to manage assets, as each token is associated with a unique value. We can help you optimize your NFT with their efficient development solutions. NFTs are digital tokens that enable the secure management of intangible assets.",
    icon: <Fingerprint className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Asset Lifecycle Management",
    description:
      "We provide a quick and easy life-cycle management service for all your digital assets. NFTs make it easy to securely transfer ownership of digital assets from person to person.",
    icon: <RefreshCw className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Software Licence Management",
    description:
      "NFT numbers can be used to easily renew software licenses using secure cloud technologies. NFTs are digitally unique assets that can be issued and shared by the code proprietor. We can help you set up the necessary software platform.",
    icon: <FileKey className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Peer-to-peer Exchange",
    description:
      "NFT Community provides a secure platform for easy P2P NFT transactions. Our NFT developers are reliable professionals with a proven track record in developing P2P crypto exchanges.",
    icon: <Users className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const designProcess = [
  {
    title: "Wallet Selection",
    description:
      "Avner Global recommend highly customized wallets selection to our clients, based on their business requirements.",
    icon: <Wallet className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Market Research",
    description:
      "Our dedicated team conducts in-depth market research to determine the best for an attention-grabbing wallet.",
    icon: <Search className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Feature Identification",
    description:
      "Collecting data & analyze them to finalize the features of your NFT wallet that is compatible as per requirement.",
    icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Design & Coding",
    description:
      "Our dedicated team of NFT developers works on our back-end, based on feedback and suggestions from our clients.",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Testing & Launch",
    description:
      "Our quality analyst team test & launch the NFT platform on the blockchain, ensuring smooth performance fixing the bugs.",
    icon: <Rocket className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide top-notch project development and hassle-free upgrades to the latest version, backed by quality customer service.",
    icon: <Wrench className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const faqs = [
  {
    question: "What is NFT Wallet?",
    answer:
      "An NFT wallet is a digital wallet designed to store, manage, and interact with non-fungible tokens (NFTs). It allows users to securely hold their NFTs, buy, sell, and trade them, and view their collection, all while ensuring the authenticity and ownership of the digital assets.",
  },
  {
    question: "What is the meaning of  NFT Detection?",
    answer:
      "NFT detection is the process of identifying and verifying non-fungible tokens (NFTs) on a blockchain. It allows users to securely hold their NFTs, buy, sell, and trade them, and view their collection, all while ensuring the authenticity and ownership of the digital assets.",
  },
  {
    question: "What are the Characterstics of NFT wallet?",
    answer:
      "NFT wallets provide a secure and convenient way to protect and transact with Non-Fungible Tokens. Exclusive features make it easier to store, manage, and trade them. NFT wallets provide enhanced security, support multiple tokens and integrate with blockchain networks. All these features make NFT wallets a must-have for anyone looking to securely store and manage their digital assets.",
  },
  {
    question: "What are the benefits of NFT wallet?",
    answer:
      "NFTs offer opportunities for all those involved in the gaming platform. The game is designed to be a place where users can own the assets. The users have the option to sell these rare assets and earn from them. Blockchain is changing the way gamers interact on the platform.",
  },
];

export default function NFTWalletPage() {
  return (
    <div className="bg-white">
      <section
        className="relative w-full  min-h-[600px] flex   overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/nftBanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* content */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="h-[80vh] z-20 px-4 md:px-10 py-20 lg:py-24 lg:px-20 ">
          <div className="max-w-2xl flex flex-col items-start justify-center pt-10 space-y-4">
            <Heading as="h1" className="">
              Create A Decentralized Exchange Similar To PancakeSwap
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Now, you can create the best Decentralized Exchange on the BSC{" "}
              <span className="text-[#09d0c6]">Blockchain</span>, similar to{" "}
              PancakeSwap.{" "}
              <span className="hidden lg:inline">
                It can be considered the best one around in the recent times. We
                take pride in extending our development platform services for
                the best DEX creation.
              </span>
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

      {/* image side by side  X2 */}
      {/* <div>
        <section className="py-8 md:py-10">
          <Container className="max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold leading-tight ">
                  NFT Development for Gaming Industry
                </h2>
                <p className="mt-4 text-[#5d6b82] text-base md:text-lg leading-relaxed">
                  NFTs are setting a trend in the crypto world with features
                  like the integration of unique features and functionalities.
                  The gaming industry is huge, providing endless opportunities
                  for business and fame. NFTs are also assisting in the growth
                  of many industries, as they provide a tangible reward for
                  consumers.
                  <br />
                  <br />
                  Gamers can also benefit from using NFTs that allow them to
                  make money. These gaming platforms provide strong ownership
                  rights, immutability, and security to their users. In addition
                  to providing opportunities to develop new digital assets, NFTs
                  are also a fantastic way to attract the gaming industry
                  towards any project.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start lg:order-1">
                <Image
                  src="/assets/image/NFT-Development.png"
                  alt="Metaverse collaboration illustration"
                  width={470}
                  height={699}
                  className="w-full max-w-[360px] md:max-w-[420px] h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="py-8 md:py-10">
          <Container className="max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold leading-tight">
                  Get a free evaluation of your NFT Gaming Platform development
                  needs
                </h2>
                <p className="mt-4 text-[#5d6b82] text-base md:text-lg   leading-relaxed">
                  Our experienced team can help you with your needs, from
                  creative solutions to developing initial prototypes. At NFT
                  Games, our team members are cross-functional and
                  multi-talented. This allows us to think quickly and
                  strategically about the development of new games. Provide
                  gamers with virtual collectibles that they can collect while
                  playing games. <br /> <br /> As more people get into gaming
                  and trading, more investors will quickly be able to tap within
                  profit-making markets. With our gameplay tool, you can create
                  the game of your dreams. Our developers will create beautiful
                  designs, immersive environments, and realistic experiences for
                  our game players. Our team of NFT creators and NFT game
                  developers collaborate together to make sure we drag gaming
                  enthusiasts into our platform.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/image/NFT-Development2.png"
                  alt="Metaverse virtual workspace illustration"
                  width={695}
                  height={401}
                  className="w-full max-w-[380px] md:max-w-[520px] h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </section>

      
      </div> */}

      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
              How Safe And Reliable Our NFT Wallet Services?
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              NFTs are well-known and popular for their immutability,
              authenticity and integrity. Since they are utilized as collateral,
              they can never be hacked or accessible. One of the most important
              factors that our NFT wallet development company incorporates when
              creating the solutions is security. Being a top-tier NFT wallet
              development company, our blockchain and subject matter experts
              have solid technological expertise and subject understanding. They
              are highly skilled in starting from scratch and building an NFT
              wallet that is reliable and scalable.
              <br />
              <br />
              In addition, our professionals watch like hawks for the most
              recent developments in the cryptocurrency space and take them into
              account while creating wallet solutions. Whether you need
              crypto-related services, NFT wallet development, NFT marketplace
              development, NFT desktop development, and much more, our seasoned
              experts got you covered. Believe in us and we will provide you
              with the most world-class NFT wallet development services.
            </SubHeading>
            <p className="text-gray-600 mt-6 leading-relaxed"></p>
          </div>
        </Container>
      </section>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              We offer comprehensive NFT development solutions
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              In our suite of NFT development solutions, we prioritize a
              seamless and user-friendly experience. Our team of experts
              specializes in crafting custom smart contracts, ensuring the
              authenticity and uniqueness of your digital assets.
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

      {/* Design Process Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Our Approach For Developing Nft Wallets
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Avner Global offers a unique process for NFT wallet development.
              We provide solutions to each client’s individual needs, ensuring
              they get the best fit for their business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#09d0c6] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#e0fbf9] p-3 rounded-full">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#333d47]">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Idea CTA */}
      <SupportCTA />

      {/* Why Choose Us Section */}

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions(FAQs)</SectionHeading>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </div>

      {/* Conclusion CTA */}
      <WebsiteSlider />
    </div>
  );
}

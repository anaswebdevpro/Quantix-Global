"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  Code,
  Globe,
  Zap,
  Shield,
  Coins,
  ChevronRight,
  Wallet,
  FileText,
  Search,
  Droplet,
  Shuffle,
  Gamepad,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Container from "@/components/ui/container";
import HeroWithForm from "@/components/Sections/heroWithform";
import SupportCTA from "@/components/Sections/SupportCTA";
import BannerForm from "@/components/Sections/bannerForm";
import Button from "@/components/ui/button";
import WebsiteSlider from "@/components/WebsiteSlider";

const differences = [
  {
    title: "Binance Chain",
    features: [
      "Works on fast and secured transaction capability.",
      "Uses Delegated Proof of Stake (DPoS) consensus protocol.",
      "Uses its own address; not accessible from MetaMask.",
      "Uses BEP-2 and BEP-8 fungible tokens.",
      "Rejects withdrawal if the user enters the wrong address.",
      "Has its own in-built governance system.",
      "Comes with an Order Book (buyer chooses execution price).",
      "Has higher transaction fees.",
    ],
  },
  {
    title: "Binance Smart Chain",
    features: [
      "Dual-chain architecture allowing fast exchange between blockchains.",
      "Uses Proof of Staked Authority (PoSA) consensus.",
      "Supports multiple wallets (MetaMask compatible).",
      "Uses the BEP-20 standard.",
      "Ethereum-based application compatibility.",
      "Same address format as Ethereum (easy asset recovery).",
      "Lower transaction fees (approx. 0.01 USD in BNB).",
      "Supports 'Peggy coins' (pegged tokens from Binance Chain).",
    ],
  },
];

const services = [
  {
    title: "DApp Development",
    description:
      "Leverage the potential of decentralized applications with our expert DApp development services on BSC. We create user-friendly, secure, and scalable applications that align with your business objectives.",
    icon: <Globe className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Smart Contract Development",
    description:
      "Transform your business processes with our smart contract development expertise. Our team ensures the flawless execution of smart contracts on the Binance Smart Chain, enhancing transparency and efficiency.",
    icon: <FileText className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Token Development",
    description:
      "Launch your custom tokens effortlessly on BSC with our token development services. Whether you're looking to create utility tokens or governance tokens, we've got you covered.",
    icon: <Coins className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Wallet Integration",
    description:
      "Seamlessly integrate Binance Smart Chain wallets into your applications for secure and efficient transactions. Our team ensures a smooth user experience for your wallet integration needs.",
    icon: <Wallet className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Consultation and Support",
    description:
      "Benefit from our in-depth knowledge of Binance Smart Chain. Our experts provide comprehensive consultation and support, guiding you through the entire development process and beyond.",
    icon: <Shield className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const featuresList = [
  {
    title: "Create or Unlock Wallet",
    description:
      "Developers can use the Binance Chain browser extension network to send and receive funds on BC, BSC, and Ethereum. We can integrate the extension with other Binance Chain products.",
    icon: <Wallet className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Synthetix",
    description:
      "A synthetic asset protocol allowing users to lend or lock up SNX tokens. The DeFi platform can be used for a variety of asset types.",
    icon: <Layers className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Explorer",
    description:
      "Acts as a search engine and browser to find info on blocks, public addresses, and transactions. Essential for both Mainnet and Testnet.",
    icon: <Search className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Testnet Faucet",
    description:
      "Users can get free Testnet BNB tokens to test their applications. Sharing on social media can yield testnet BNB tokens.",
    icon: <Droplet className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Docs & Consensus",
    description:
      "BSC relies on 21 validators using POS consensus. It offers compatibility with Ethereum tools like DApps at faster rates.",
    icon: <FileText className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Governance & Staking",
    description:
      "Allows BNB holders to propose trading pairs. Supports Locked Staking (earn interest, locked) and Flexible Staking (earn interest, unlock anytime).",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const dApps = [
  {
    title: "Blink",
    description:
      "A partnership between WINK and Binance. It is a platform for mining and gambling.",
    icon: <Gamepad className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Venus",
    description:
      "A decentralized system in the money market. It allows browsers and users to access liquidity.",
    icon: <Globe className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Pancake Bunny",
    description: "It empowers farmers and serves as a yield aggregator.",
    icon: <Shuffle className="w-10 h-10 text-[#09d0c6]" />,
  },
];

export default function BSCTokenPage() {
  return (
    <div className="bg-white">
      <HeroWithForm
        heading="Binance Smart Chain Development Services Company"
        text="Owing to the rigidity of the Binance Coin and Coin address, the Binance Smart Chain Development has come into the arena today. Both Binance Chain and Binance Block Chain are working side by side in the cryptocurrency environment."
        bgimage="/assets/image/Banner-1.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading className="mb-6 text-left">
                What Is Binance Smart Chain?
              </SectionHeading>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Binance Smart Chain is an independent blockchain that runs
                  side-by-side with the Binance Chain. Binance Chain facilitated
                  de-centralized trading. However, the system was not as
                  flexible, as required for new-age currency exchange
                  mechanisms. Heavy usage from several users have often led to
                  issues regarding the scalability. Therefore, Binance Smart
                  Chain comes to the rescue here.
                </p>
                <p>
                  Binance Smart Chain or BSC runs in tandem with the Binance
                  Chain. It utilizes smart contracts and is also compatible with
                  EVM or Ethereum Virtual Machine. The best part about BSC is
                  that, it will run even if the Binance Chain goes offline. The
                  adaptability of this blockchain, proves to be a boon for users
                  and developers. Now, such individuals can integrate projects
                  over Ethereum, very easily. Moreover, the user can easily
                  integrate MetaMask on the Binance Smart Chain in a few easy
                  steps.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="/contact-us">
                  <Button variants="action">Talk To An Expert</Button>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=971527732049&text&app_absent=0"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    Connect On Whatsapp
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/assets/image/Asset-Tokenization_image.png"
                alt="Binance Smart Chain"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Difference Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>
              Difference - Binance Chain And Binance Smart Chain
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differences.map((diff, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#153577] text-center border-b pb-4">
                  {diff.title}
                </h3>
                <ul className="space-y-4">
                  {diff.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#09d0c6] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Idea CTA */}
      <SupportCTA />
      {/* Operation & DeFi Support Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="space-y-16">
            <div>
              <SectionHeading className="mb-6 text-left">
                How Does Binance Smart Chain Operate?
              </SectionHeading>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-[#153577] mb-3">
                    Consensus
                  </h4>
                  <p className="text-gray-600">
                    Users utilize POS to stake for BNB verification. The user
                    earns a reward for every positive and valid block.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-[#153577] mb-3">
                    Cross-chain compatibility
                  </h4>
                  <p className="text-gray-600">
                    It works complementary and independently to Binance Chain.
                    The dual-chain architecture has made asset transfer smooth
                    between different blockchains.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading className="mb-6 text-left">
                How Are Decentralized Finance Applications Supported On Binance
                Smart Chain?
              </SectionHeading>
              <div className="bg-white p-8 rounded-xl shadow-md text-gray-600 leading-relaxed border-l-4 border-[#09d0c6]">
                <p className="mb-4">
                  Binance can support more than 13 projects funded by $100
                  million for blockchain development. This enables developers to
                  deploy decentralized applications on Binance Smart Chain. The
                  second batch of DLT will also grab the interest of the digital
                  asset firm.
                </p>
                <p>
                  Today, as many as 40 DApps, structure, and tools are running
                  on this network. The company is looking forward to more DApps,
                  prediction-based marketing, aggregators, and derivatives.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Our Binance Smart Chain Development Services
            </SectionHeading>
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
                <div className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#153577]/10 transition-colors">
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

      {/* Projects Criteria Section */}
      <section className="py-16 md:py-24 bg-[#153577] text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What Are The Different Projects Being Operated On Binance Smart
                Chain?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                There are six projects at present, that are being run with the
                $100 M accelerator fund.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-[#09d0c6]">
                The projects were selected on the below criteria:
              </h3>
              <ul className="space-y-3">
                {[
                  "Long-term Vision",
                  "Team Strength",
                  "Product Response",
                  "Executability",
                  "Contribution to overall BSC",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#09d0c6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] l p-8">
              <Image
                src="/assets/image/web_wallet-1.png"
                alt="Decentralized Exchange Platform"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features List Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Features That Can Be Integrated In A Blockchain With BSC
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-[#333d47] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DApps Development Offered */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>
              DApps Development Offered By Us On BSC
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dApps.map((dapp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md text-center border-b-4 border-[#09d0c6]"
              >
                <div className="mx-auto w-16 h-16 bg-[#e0fbf9] rounded-full flex items-center justify-center mb-6">
                  {dapp.icon}
                </div>
                <h3 className="text-xl font-bold text-[#153577] mb-3">
                  {dapp.title}
                </h3>
                <p className="text-gray-600">{dapp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Conclusion CTA */}
      <WebsiteSlider />
   
    </div>
  );
}

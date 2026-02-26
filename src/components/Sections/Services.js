"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../ui/container";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
  {
    title: "DeFi Development",
    desc: "Building secure, scalable, and innovative decentralized finance solutions including lending, staking, and yield farming.",
    image: "/assets/image/Defi-Development.png",
    link: "/defi-development",
  },
  {
    title: "Blockchain Development",
    desc: "Enterprise-grade blockchain applications built on Hyperledger, Ethereum, and Hashgraph for seamless business automation.",
    image: "/assets/image/Smart-Contract-Development-1.png",
    link: "/blockchain-development",
  },
  {
    title: "Crypto Exchange Development",
    desc: "Robust cryptocurrency exchange platforms with advanced trading engines, high liquidity, and multi-layered security.",
    image: "/assets/image/Digital-Exchange-Platform.png",
    link: "/crypto-exchange",
  },
  {
    title: "NFT Wallet Development",
    desc: "Highly secure and scalable digital wallets for managing, storing, and transacting unique NFTs and crypto assets.",
    image: "/assets/image/Wallet-Development-1-1.png",
    link: "/nft-wallet",
  },
  {
    title: "NFT Development",
    desc: "Top-tier NFT solutions for marketplaces, minting platforms, and asset tokenization across diverse industries.",
    image: "/assets/image/NFT-Marketplace-Development.png",
    link: "/nft-development",
  },
  {
    title: "Metaverse Avatar Development",
    desc: "Crafting lifelike 3D avatars and immersive virtual environments for gaming, social interaction, and digital offices.",
    image: "/assets/image/Metaverse-Development.png",
    link: "/metaverse-avatar",
  },
  {
    title: "BSC Token Development",
    desc: "Expert Binance Smart Chain services for launching utility tokens, governance tokens, and smart contract integration.",
    image: "/assets/image/Token-Development.png",
    link: "/bsc-token",
  },
  {
    title: "White Label Exchange",
    desc: "Ready-to-deploy, customizable white-label exchange software designed for rapid market entry and secure trading.",
    image: "/assets/image/White-label-Wallet-Development.png",
    link: "/white-label-exchange",
  },
  {
    title: "NFT Gaming Development",
    desc: "Creating interactive Play-to-Earn gaming ecosystems where players can own and trade NFT-based in-game assets.",
    image: "/assets/image/NFT-Gaming-Platform-Development.png",
    link: "/nft-gaming",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>
            Our Blockchain Development <br /> Services
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative w-24 h-24">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform transform group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold text-[#333d47] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 flex-grow">{service.desc}</p>

              <Link
                href={service.link}
                className="inline-block px-6 py-2 border-2 border-[#153577] text-[#153577] font-semibold rounded hover:bg-[#153577] hover:text-white transition-colors"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

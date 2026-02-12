"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./ui/container";
import { SectionHeading } from "./ui/SectionHeading";

const services = [
  {
    title: "Defi Development",
    desc: "Crafting decentralized financial solutions that empower users with autonomy and transparency in managing their assets.",
    image: "/assets/images/Defi-Development.png",
    link: "/defi-development",
  },
  {
    title: "Smart Contract Development",
    desc: "Building tamper-proof, self-executing contracts to automate complex processes securely and seamlessly.",
    image: "/assets/images/Smart-Contract-Development-1.png",
    link: "/smart-contract",
  },
  {
    title: "Digital Exchange Platform",
    desc: "Creating robust platforms for trading various digital assets with efficiency and liquidity.",
    image: "/assets/images/Digital-Exchange-Platform.png",
    link: "/digital-exchange",
  },
  {
    title: "Wallet Development",
    desc: "Designing secure and user-friendly digital wallets for managing cryptocurrencies and digital assets.",
    image: "/assets/images/Wallet-Development-1-1.png",
    link: "/wallet-development",
  },
  {
    title: "NFT Marketplace Development",
    desc: "Constructing online platforms that facilitate the buying, selling, and trading of unique digital assets.",
    image: "/assets/images/NFT-Marketplace-Development.png",
    link: "/nft-marketplace",
  },
  {
    title: "Metaverse Development",
    desc: "Shaping immersive virtual worlds where users can engage, interact, and transact using digital currencies.",
    image: "/assets/images/Metaverse-Development.png",
    link: "/metaverse",
  },
  {
    title: "Token Development",
    desc: "Crafting custom tokens to enable various functionalities within blockchain ecosystems.",
    image: "/assets/images/Token-Development.png",
    link: "/token-development",
  },
  {
    title: "White label Wallet Development",
    desc: "Providing customizable wallet solutions for businesses to offer branded digital asset management services.",
    image: "/assets/images/White-label-Wallet-Development.png",
    link: "/white-label-wallet",
  },
  {
    title: "NFT Gaming Platform Development",
    desc: "Creating interactive gaming ecosystems where players can trade, own, and utilize NFT-based in-game assets.",
    image: "/assets/images/NFT-Gaming-Platform-Development.png",
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

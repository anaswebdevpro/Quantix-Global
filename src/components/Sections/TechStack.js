"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/container";
import { SectionHeading } from "../ui/SectionHeading";

const techs = [
  { name: "Binance", img: "/assets/image/Binance-1.png" },
  { name: "Cardano", img: "/assets/image/Cardano-1-1.png" },
  { name: "Polygon", img: "/assets/image/polygon-matic-logo-1.png" },
  { name: "Ethereum", img: "/assets/image/Ethereum-Smart.png" },
  { name: "Solana", img: "/assets/image/Solana-3.png" },
  { name: "Tron", img: "/assets/image/tron-1.png" },
  { name: "Avalanche", img: "/assets/image/avalanche-avax-logo-1.png" },
  {
    name: "Polkadot",
    img: "/assets/image/polkadot-dot-logo-ED40B3633D-seeklogo.png",
  },
  { name: "Cosmos", img: "/assets/image/Cosmos.png" },
  { name: "NEAR Protocol", img: "/assets/image/Near.png" },
  { name: "ZetaChain", img: "/assets/image/zetachain-icon.png" },
  { name: "ICP", img: "/assets/image/internet-computer-icp-logo.png" },
  { name: "Ton", img: "/assets/image/ton_symbol.png" },
  { name: "Ripple", img: "/assets/image/Ripple.png" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <SectionHeading className="mb-6">
              Tech Expertise <br /> In Blockchain
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our team of blockchain developers specializes in the development
              of applications that utilize blockchain and related technologies.
              Whether it’s fintech solutions or blockchain-based applications,
              we have the knowledge and experience to deliver secure solutions.
            </motion.p>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-wrap justify-center gap-8">
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center w-28 h-28"
                >
                  <div className="relative w-12 h-12 mb-2">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

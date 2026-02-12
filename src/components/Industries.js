"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./ui/container";
import { SectionHeading } from "./ui/SectionHeading";

const industries = [
  {
    title: "Blockchain In Supply Chain",
    desc: "By embracing blockchain technology, businesses can future-proof their supply chain operations and stay ahead of the curve. Quantix Global helps supply chain leaders use data to handle the disruptions of today and build resiliency for the future.",
    image: "/assets/images/supply_chain.jpg",
    link: "/blockchain-supply-chain",
  },
  {
    title: "Blockchain In Finance",
    desc: "Quantix Global helps businesses in the finance industry to achieve greater efficiency, security, and control over their financial operations through customized blockchain solutions.",
    image: "/assets/images/image_2.jpg",
    link: "/blockchain-finance",
  },
  {
    title: "Blockchain In Insurance",
    desc: "From enhancing security to preventing fraud and improving the customer experience, our expertise in blockchain development helps insurance companies get the benefits of this transformative technology.",
    image: "/assets/images/Insurance.jpg",
    link: "/blockchain-insurance",
  },
  {
    title: "Blockchain In Healthcare",
    desc: "Quantix Global helps healthcare organizations implement blockchain networks that ensure the privacy and security of patient information, improving coordination between providers and enhancing patient care.",
    image: "/assets/images/image_4.jpg",
    link: "/blockchain-healthcare",
  },
  {
    title: "Blockchain In Energy Oil And Gas",
    desc: "Blockchain's decentralized and encrypted nature provides a secure environment. Quantix Global assists in implementing blockchain solutions that optimize operations, leading to cost savings and improved productivity.",
    image: "/assets/images/image_5.jpg",
    link: "/blockchain-energy",
  },
  {
    title: "Blockchain In Retail",
    desc: "Quantix Global provide online retailers with a more secure and efficient payment system by simplifying inventory tracking, automating payments using smart contracts and providing proof of authenticity.",
    image: "/assets/images/Retail.jpg",
    link: "/blockchain-retail",
  },
  {
    title: "Blockchain In Transportation",
    desc: "Blockchain Technology has many benefits that can solve many issues in the transport industry. Quantix Global help transport companies manage data, and business processes and improve the way goods are shipped and transported through blockchain technology.",
    image: "/assets/images/Transportation_1.jpg",
    link: "/blockchain-transportation",
  },
  {
    title: "Blockchain In Agriculture",
    desc: "Blockchain technology is being increasingly used in the agriculture industry to improve supply chain management, increase transparency, and enhance traceability. Quantix Global ensures the integrity and security of agriculture data by using blockchain technology.",
    image: "/assets/images/Agriculture_1.jpg",
    link: "/blockchain-agriculture",
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>
            Industries In Which We <br /> Deal Up
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333d47] mb-3 group-hover:text-[#09d0c6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

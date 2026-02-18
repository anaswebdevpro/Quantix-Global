"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "./ui/container";

const menuItems = [
  {
    title: "Services",
    href: "#",
    submenu: [
      { title: "Website Designing", href: "/website-designing" },
      { title: "Website Development", href: "/website-development" },
      { title: "Digital Marketing", href: "/digital-marketing" },
      { title: "Graphic Designing", href: "/graphic-designing" },
      {
        title: "Mobile Application Development",
        href: "/mobile-application-development",
      },
      { title: "Video Animation", href: "/video-animation" },
    ],
  },
  {
    title: "DEFI",
    href: "#",
    submenu: [
      { title: "Decentralized Finance Development", href: "/defi-development" },
      {
        title: "Pancakeswap Like Decentralized Exchange",
        href: "/pancakeswap-clone",
      },
      { title: "DeFI Staking Platform Development", href: "/defi-staking" },
      { title: "Defi Lending And Borrowing Platform", href: "/defi-lending" },
    ],
  },
  {
    title: "Token",
    href: "#",
    submenu: [
      { title: "Tokenized Asset Offering", href: "/tokenized-asset-offering" },
      { title: "BSC Based Token Development", href: "/bsc-token" },
      { title: "Token Development Like BEP 20", href: "/bep20-token" },
    ],
  },
  {
    title: "NFT",
    href: "#",
    submenu: [
      { title: "NFT Gaming Platform Development", href: "/nft-gaming" },
      { title: "NFT Wallet Development", href: "/nft-wallet" },
      { title: "NFT Development Company", href: "/nft-development" },
    ],
  },
  {
    title: "Metaverse",
    href: "#",
    submenu: [
      { title: "Metaverse Office Platform", href: "/metaverse-office" },
      { title: "Metaverse in Healthcare", href: "/metaverse-healthcare" },
      { title: "Metaverse Avatar Development", href: "/metaverse-avatar" },
    ],
  },
  {
    title: "Fintech",
    href: "#",
    submenu: [
      { title: "Forex Trading Platform", href: "/forex-trading" },
      { title: "Crowdfunding Software", href: "/crowdfunding" },
      { title: "Golden Eye", href: "/golden-eye" },
      { title: "MLM Software Development", href: "/mlm-software" },
      { title: "Money Transfer Software", href: "/money-transfer" },
      { title: "Order Matching Engine", href: "/order-matching-engine" },
      { title: "Trading Platform", href: "/trading-platform" },
    ],
  },
  {
    title: "Exchange",
    href: "#",
    submenu: [
      {
        title: "Cryptocurrency Exchange Development",
        href: "/crypto-exchange",
      },
      {
        title: "White Label Crypto Exchange Development",
        href: "/white-label-exchange",
      },
    ],
  },
  {
    title: "Blockchain",
    href: "#",
    submenu: [
      { title: "Blockchain Development", href: "/blockchain-development" },
      { title: "Blockchain In Insurance", href: "/blockchain-insurance" },
      { title: "Blockchain In Finance", href: "/blockchain-finance" },
      { title: "Blockchain In Healthcare", href: "/blockchain-healthcare" },
      { title: "Blockchain In Agriculture", href: "/blockchain-agriculture" },
      { title: "Tron DAPP Development", href: "/tron-dapp" },
      { title: "Cosmos Blockchain Development", href: "/cosmos-blockchain" },
      { title: "Blockchain In Supply Chain", href: "/blockchain-supply-chain" },
      { title: "Web 3.0 Development", href: "/web3-development" },
      {
        title: "Blockchain In Identity Management",
        href: "/blockchain-identity",
      },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-sm py-1",
        )}
      >
        <Container className="flex justify-between items-center py-1  ">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex-shrink-0">
            <div className="transition-all">
              <Image
                src="/assets/image/Avner_global.png"
                alt="Quantix Global"
                width={140}
                height={10}
                priority
                className=" "
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6 ml-4">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "font-bold text-[13px] xl:text-[14px] uppercase tracking-wide transition-colors flex items-center gap-1 py-3 text-[#333d47] hover:text-[#09d0c6]",
                  )}
                >
                  {item.title}
                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-64 bg-[#191919] shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-[#09d0c6]">
                    <ul className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-6 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] text-white overflow-y-auto pt-24 pb-10 px-6"
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-0"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      href={item.href}
                      className="py-3 text-lg font-semibold block flex-1"
                      onClick={() => !item.submenu && setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="p-3"
                      >
                        <ChevronDown
                          size={20}
                          className={cn(
                            "transition-transform",
                            activeSubmenu === index ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.submenu && activeSubmenu === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-black/20"
                      >
                        <ul className="pl-4 py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="block py-2 text-gray-400 hover:text-[#09d0c6]"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../ui/container";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { name: "Website Development", href: "/website-development" },
      { name: "Website Designing", href: "/website-designing" },
      { name: "Graphic Designing", href: "/graphic-designing" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Mobile Application Development", href: "/mobile-app-dev" },
      { name: "Video Animation", href: "/video-animation" },
    ],
  },
  defi: {
    title: "DEFI",
    links: [
      { name: "Decentralized Finance Defi Development", href: "/defi-dev" },
      { name: "PancakeSwap like Dex Development", href: "/pancakeswap" },
      { name: "DeFI Staking Platform Development", href: "/staking" },
      { name: "Defi Lending And Borrowing Platform", href: "/lending" },
    ],
  },
  token: {
    title: "Token",
    links: [
      { name: "Tokenized Asset Offering", href: "/tao" },
      { name: "BSC Based Token Development", href: "/bsc-token" },
      { name: "Token Development Like BEP 20", href: "/bep20-token" },
    ],
  },
  blockchain: {
    title: "Blockchain",
    links: [
      { name: "Blockchain Development", href: "/blockchain-dev" },
      { name: "Blockchain Development Platform", href: "/platform-dev" },
      { name: "Tron DAPP Development", href: "/tron-dapp" },
      { name: "Blockchain In Insurance", href: "/insurance" },
    ],
  },
  corporate: {
    title: "Corporate",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Blog", href: "/blog" },
      { name: "Current Openings", href: "/careers" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#153577] text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.services.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#09d0c6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DEFI & Tokens */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              {footerLinks.defi.title}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              {footerLinks.defi.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#09d0c6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              {footerLinks.token.title}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.token.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#09d0c6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Blockchain */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              {footerLinks.corporate.title}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              {footerLinks.corporate.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#09d0c6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              {footerLinks.blockchain.title}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.blockchain.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#09d0c6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#09d0c6]">
              Keep Up With Us.
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Join our mailing list to receive news and announcements.
            </p>
            <form className="flex mb-8">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-l focus:outline-none flex-1 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-[#09d0c6] hover:bg-[#08b8af] px-4 py-2 rounded-r font-bold transition-all"
              >
                Sign Up
              </button>
            </form>

            <div className="bg-[#122e66] p-6 rounded-lg border-l-4 border-[#09d0c6]">
              <h4 className="font-bold mb-2 text-[#09d0c6]">India Office</h4>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                323 - 324, 3rd Floor, Block B, Bestech Business Tower, Sector
                66, Sahibzada Ajit Singh Nagar, Punjab 160066, India
              </p>
              <a
                href="tel:+918699701099"
                className="block text-[#09d0c6] font-bold mb-1 hover:underline"
              >
                +91 86997 01099
              </a>
              <a
                href="mailto:sales@webcomsystem.net"
                className="block text-gray-300 hover:text-[#09d0c6] transition-colors"
              >
                sales@webcomsystem.net
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © Copyright {new Date().getFullYear()} Quantix Global
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#09d0c6] transition-all hover:-translate-y-1"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#09d0c6] transition-all hover:-translate-y-1"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#09d0c6] transition-all hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#09d0c6] transition-all hover:-translate-y-1"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#09d0c6] transition-all hover:-translate-y-1"
            >
              <Send size={18} />
            </a>
          </div>

          <Link
            href="/privacy-policy"
            className="text-sm text-gray-400 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}

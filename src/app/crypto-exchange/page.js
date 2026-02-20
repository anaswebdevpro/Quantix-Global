"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import Container from "@/components/ui/container";
import { SubHeading } from "@/components/ui/subheading";
import Button from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  LayoutTemplate,
  ArrowRightLeft,
  Settings,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";

export default function Page() {
  const introBoxes = [
    "Spot Trading Module",
    "Advanced Order Types",
    "Automated Third-Party KYC",
    "Multichain  USDT",
    "Crypto Swapping",
    "Wallet with multiple currencies",
    "Mobile Application",
    "Payment Gateway Integration",
    "API Integration",
    "News & Announcements",
    "Admin Backend Panel",
    "Referral & Reward Programs",
  ];

  const advantages = [
    {
      title: "Tokenizer to Design Tokens",
      desc: "We extend a stage to produce tokens for IEO projects to be patronized by the investors in the Exchange.",
      icon: <LayoutTemplate className="w-8 h-8 text-[#09d0c6]" />,
    },
    {
      title: "KYC/AML for IEO",
      desc: "KYC/AML services in IEO will be governed by the Exchanges. With the aid of third-party bonds, we make sure the investors are reviewed and examined before boarding into the Transactions/ Exchange.",
      icon: <ArrowRightLeft className="w-8 h-8 text-[#09d0c6]" />,
    },
    {
      title: "Investor Dashboard",
      desc: "We realize a Powerful Investor Dashboard with the white paper, KYC/AML confirmation, security with 2 Factor Authorization and Wallet assistance.",
      icon: <Settings className="w-8 h-8 text-[#09d0c6]" />,
    },
    {
      title: "Marketplace to List IEOs",
      desc: "Admins can establish and list IEO plans in the Exchange, and the investors can conclude the type of project based on its business utility.",
      icon: <DollarSign className="w-8 h-8 text-[#09d0c6]" />,
    },
    {
      title: "Issuer Dashboard",
      desc: "Avner Global Blockchain Development will incur a user-friendly issuer dashboard where the scheme owner can add details about the scheme/ project, observe demand -supply of tokens, manage token supply, etc.",
      icon: <CheckCheck className="w-8 h-8 text-[#09d0c6]" />,
    },
    {
      title: "IEO Admin Dashboard",
      desc: "Admin Dashboard is composed of features like KYC/AML attestation, deal with IEO projects, transactions, Flag investor and projects, withdraw funds and so on.",
      icon: <Check className="w-8 h-8 text-[#09d0c6]" />,
    },
  ];
  const cryptoExchangeList = [
    "In-House Teams",
    "Highly Customized Services",
    "First-Time Accurate Deliverables",
    "Transparency At The Time Of Development",
    "Diligent Testing and Responsive Error Handling",
    "Matchless Post-Development Support Services",
    "10+ Years of Experience in the Blockchain Domain",
    "Advanced Coding Techniques & Agile Methodologies",
  ];

  return (
    <>
      {/* her section  */}
      <section
        className="py-20 md:py-32 text-white h-auto md:h-[90vh] flex flex-col md:flex-row items-center 
         bg-gradient-to-r from-[#16222E] to-[#446076] overflow-hidden"
      >
        <div className="w-full md:w-[45%] h-full z-20 px-10 py-0 lg:py-2 lg:pl-20 lg:pr-0 ">
          <div className="max-w-3xl flex flex-col items-start pt-10 justify-center ">
            <SectionHeading as="h2" className="text-white ">
              <span className="text-[#00D9FF]">Cryptocurrency</span> Exchange
              Development Company
            </SectionHeading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Harness the potential of our on-demand cryptocurrency exchange
              development services to rove into a more transparent, digital, and
              unbarred economy.
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
        <div className="w-full md:w-[55%] h-full relative flex items-center justify-start">
          <Image
            src="/assets/image/laptopbg.png"
            alt="DeFi Development"
            height={700}
            width={700}
            className="object-cover"
          />
        </div>
      </section>

      {/* intro section  */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex border-l-[6px] border-[#153577] pl-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333d47]">
                  Cryptocurrency Exchange Development
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <strong>
                    {" "}
                    Crafting Unique Success Stories With Bespoke Solutions{" "}
                  </strong>
                  <br />
                  <br />
                  The finance industry is amidst a profound paradigm shift
                  steered by factors such as free trade policies, evolving
                  customer demands, technological innovations, and various
                  macroeconomic forces. To remain relevant as a provider in the
                  transformative landscape, both emerging and existing
                  businesses must embrace cryptocurrency.
                  <br />
                  <br />
                  Crypto exchange software, while sharing similarities with
                  conventional exchanges, facilitates digital, secure, and
                  boundary-less trading. Avner Global, a leading cryptocurrency
                  exchange development company, is translating innovative ideas
                  into professional solutions for businesses interested in
                  venturing into the multi-billion dollar industry. <br />
                  <br />
                  Harness Avner Global's expertise in cryptocurrency exchange
                  platform development to establish a strong foundation for
                  success in the cryptocurrency industry.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg py-4">
              {" "}
              <strong>
                Cryptocurrency Exchange Software Development - Key Features
              </strong>
            </p>
            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {introBoxes.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f2937] text-white py-4 px-6 flex items-center justify-center text-center font-medium rounded hover:bg-[#153577] transition-colors min-h-[80px] shadow-sm text-sm md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* midbanner */}
      <section
        className="py-16 md:py-24 text-white bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/image/cryptofulll.jpg')",
          backgroundPosition: "right",
          backgroundSize: " auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-end">
            <div className="w-full max-w-5xl bg-opacity-70 rounded-xl md:pl-50 lg:pl-50 ">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Crypto Exchange Development
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-white">
                Charting Your Way to Success in the New Financial Era
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                In this fiercely competitive environment, our future-focused
                bitcoin exchange development services guarantee the success of
                your cryptocurrency exchange software. Our crypto exchange
                development services are tailored for projects of any scale,
                whether you are a leading financial company, a young digital
                currency startup, or a creative tech investor we got you
                covered.
              </p>
              <ul className="space-y-4 w-full flex flex-wrap">
                {cryptoExchangeList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 w-1/2">
                    <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <span className="text-gray-200 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* advantages  */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>IEO Integrated Exchange</SectionHeading>
            <SubHeading className="max-w-3xl mx-auto mt-4 space-y-4">
              <p>
                Primary Exchange Offering is the freshest course in
                blockchain-dependent audience funding where the exchanging stage
                promotes the designs to raise funds by employing its userbase.
                The best precedents of IEO integrated exchanges are Binance
                Launchpad and OKEX Jumpstart.
              </p>
              <p className="mt-4">
                Take benefit of the drift; start your transactions/ exchanges
                now with integrated IEO suite.
              </p>
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300 border-l-4 border-l-[#09d0c6]"
              >
                <div className="flex-shrink-0 mt-1">{advantage.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#333d47] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <Testimonials />
    </>
  );
}

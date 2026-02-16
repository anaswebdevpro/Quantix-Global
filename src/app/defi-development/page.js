"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/Sections/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import SupportCTA from "@/components/Sections/SupportCTA";

const services = [
  {
    title: "Market-Making Consulting",
    desc: "We’re directed towards establishing financial markets that potentially realize the customers’ proprietary algorithms. Besides, our team is improving the ingress of liquidity access to investors as well as democratizing the entire system.",
    icon: "/assets/image/Market-Analysis.webp", // Best guess match
  },
  {
    title: "Decentralized Crypto Banking",
    desc: "We expedite the direct transfer of value between integrated parties backed by decentralization by ensuring an easy-flowing user experience. Our ready-to-launch white-label mobile payment applications lend a plethora of services like wallet integration, value holding.",
    icon: "/assets/image/Finance-and-Banking-300x169.webp",
  },
  {
    title: "DeFi Lottery System Development",
    desc: "We present a no-loss lottery system that would be advantageous for participants completely. Our team measures steps to vanish the custodianship of the pooled capital. We authorize the investment of your capital in the other associated dApps.",
    icon: "/assets/image/Game-Apps.png", // Generic match
  },
  {
    title: "Derivatives Over Defi Platform",
    desc: "We assure seamless access to derivatives and escalate your earning capability with numerous notches with the establishment of robust dApps, we also permit traders to hedge their portfolio investments and depreciate risks.",
    icon: "/assets/image/Decentralized-Exchange.png",
  },
  {
    title: "Decentralized Fund Management",
    desc: "With this, all your crypto assets are managed to yield state-of-art performance in a decentralized exchange via smart contract and management. With extensive experience in investment exchanges coupled with our vast knowledge of defi.",
    icon: "/assets/image/Asset-Lifecycle-Management.png",
  },
  {
    title: "DeFi Insurance System Development",
    desc: "We make sure that no such risks are existing in our smart contract. With the streamlined provision of our insurance services, we make sure that there is no chance of uncontrollable liquidity requests. Our team boxes futuristic risks, uncertainties.",
    icon: "/assets/image/Insurance.png",
  },
  {
    title: "DeFi Yield Farming Platform Development",
    desc: "By yield farming, we are pointing to a technique through which the person can win on more cryptocurrencies by bringing into use his existing cryptos holding. Liquidity extends an important role in the renounce of yield farming.",
    icon: "/assets/image/Agricultural-Finance-1.jpg",
  },
  {
    title: "Defi Staking Platform Development",
    desc: "Defi staking incorporates a mechanism where crypto assets would be staked on a supported wallet/exchange, as well as the passive income, will be earned. The rewards will be calculated relying on the quantity of staked assets.",
    icon: "/assets/image/Defi_Staking1.png",
  },
  {
    title: "Defi Lending Platform Development",
    desc: "An enormous investment fetched in vigorous smart contract development is one of the primary reasons for the success of Defi services. Smart contracts are developed with a solid programming language that is highly encrypted and automates the activities.",
    icon: "/assets/image/Smart-Contract-Development.png",
  },
  {
    title: "DeFi Dapp Development",
    desc: "Defi Dapp development plays a highly significant role to escape the potential risk of a central point failure. Since there is no central authority to interfere, it is considered extremely secure for the users.",
    icon: "/assets/image/DApp-development.jpg",
  },
  {
    title: "DeFi Tokens Development",
    desc: "Defi tokens development plays an extremely important role in accelerating up the growth of decentralized applications. The value of these tokens is quite higher than that of bitcoin. Besides, it fetches a high trading volume.",
    icon: "/assets/image/Defi-Token-blog-new12.jpg",
  },
  {
    title: "DeFi Dex Development Like Uniswap",
    desc: "Uniswap is the ultimate leading Defi project that has been undertaken. In this, you will find incentivized liquidity pools instead of streamlined order books. In addition, every Uniswap user is awarded a portion of fees levied.",
    icon: "/assets/image/Decentralized-Exchange-Platform.jpg",
  },
  {
    title: "DeFi Wallet Development",
    desc: "Here, the traders will have entire control over their funds via the defi wallet development without any intervention from the authorities in the system. We assure you of a premium level of security without any compromise.",
    icon: "/assets/image/Cryptocurrency-Wallet.png",
  },
  {
    title: "DeFi Marketing Services",
    desc: "To support Defi projects gain user engagement, marketing services are requisite. Our Defi marketing services encompass everything from white paper drafting, video/content marketing, legal advisory, to marketing/community management.",
    icon: "/assets/image/Marketing.jpg",
  },
  {
    title: "DeFi Solutions for Ecommerce",
    desc: "Smoothen your E-commerce business with Defi and its realistic tools. In this, you can claim certain advantages such as intermediaries omission, faster shipping, supply chain management, as well as real-time tracking.",
    icon: "/assets/image/Ecommerce-app2.jpg",
  },
  {
    title: "DeFi Tokenization Development",
    desc: "Tokenization development is one of the most real-time and oriented solutions that Defi presents. Users now have the ease to convert inoperative and underutilized assets into enormous profits by maintaining asset tokenization.",
    icon: "/assets/image/Asset-Tokenization.png",
  },
  {
    title: "DeFi Crowdfunding Platform Development",
    desc: "Quantix Global extends a basket of potential benefits, DEXs are the prized innovation of Defi. DEXs make trading & transactions crypto accessible for crypto fanatics by offering perks like high-end security, durable liquidity.",
    icon: "/assets/image/Crowdfunding-Platforms.png",
  },
  {
    title: "DeFi Real Estate Platform Development",
    desc: "Real Estate is also one of those sectors that have experienced the revolution of Defi development. With the help of blockchain-backed tokens, now real estate owners & investors can build a smooth platform for making seamless.",
    icon: "/assets/image/Real-Estate-1.png",
  },
];

const advantages = [
  {
    title: "Automation",
    desc: "At Quantix Global, our platform is built on the phenomena of full-fledged automation; there is no requirement for manual interference through the efficient utilization of smart contracts.",
    icon: "/assets/image/Automation.webp",
  },
  {
    title: "Usage Of Smart Contracts",
    desc: "Our Smart Contracts are trustability based and help external parties to accept non-editable mutual agreements with each other. They restrict the chances of possible conflicts through automation.",
    icon: "/assets/image/Smart-Contracts.png",
  },
  {
    title: "Strategized Investment Plans",
    desc: "Our investment strategies are lucrative in a way that permits investors to store, trade and the management of their assets productively by asserting a relatively higher ROI than other traditional banks.",
    icon: "/assets/image/Investment-Plan.png", // Generic placeholder if exact not found
  },
  {
    title: "Lack Of a Third Party",
    desc: "We bring up lower fees that ease transacting funds in the absence of an external party.",
    icon: "/assets/image/No-Third-Party.png",
  },
  {
    title: "Highly Secure",
    desc: "We bring in a peer-to-peer procedure in our blockchain network with the usage of core operational nodes. It simply ceases any chances of data breaches or immediate shutdowns.",
    icon: "/assets/image/High-Security.png",
  },
  {
    title: "Ensure Global Access",
    desc: "We strive to offer safe and unbiased decentralized financial services to every single user without taking into consideration the wealth, economic status, and geographical location.",
    icon: "/assets/image/Global-Access.png",
  },
  {
    title: "Interoperability",
    desc: "We assure you of the ease to amalgamate numerous decentralized financial applications into a one only module turning it into an advanced and user-oriented program.",
    icon: "/assets/image/Interoperability-in-blockchain.png",
  },
  {
    title: "Transparent Protocols",
    desc: "We eliminate all the intervention of a central authority who can take control of user’s data, the team at Quantix Global, maintain a premium level of trust and transparency through its reliable protocols.",
    icon: "/assets/image/Trusted-Security.png", // Generic placeholder
  },
];

const whyChooseUs = [
  {
    title: "Client Collaboration",
    desc: "At Quantix Global, we have a well-resourced and highly advanced team that is proficient in handling every step of your aspiration with utmost care for paramount perfection.",
  },
  {
    title: "Conformance To High Quality",
    desc: "We undergo robust testing of our entire product basket whilst ascertaining all-inclusive quality checks. This assures users with their requirements getting addressed with the top-most industrial standards.",
  },
  {
    title: "Presence Of an Expert Team",
    desc: "Our team is composed of capable blockchain engineers who have a sizable amount of expertise in the deepest aspects of Decentralized Finance(Defi) Development.",
  },
  {
    title: "Immediate Delivery",
    desc: "We realize the importance of time for you and your business. Thus, we ensure the completion of projects on time and delivery of the project as soon as possible.",
  },
  {
    title: "Ease Of Post-Sales Support",
    desc: "We have maintained an exceptionally capable and advanced technical team that extends top-notch services to our clients for the effective handling of any technical faults that may arise.",
  },
  {
    title: "Promotes Innovation",
    desc: "Innovation is the only key to success. This is the motto we follow and thus fall distinguishably different from our competitors to give you the best possible customized model for your overall satisfaction.",
  },
  {
    title: "Offshore Recruitment",
    desc: "Our hardworking team of blockchain experts & architects assist in the development of decentralized finance applications while maintaining robust and structured inputs.",
  },
];

export default function DefiDevelopment() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 text-white h-auto md:h-[90vh] flex items-center bg-[#153577]"
        style={{
          backgroundImage: "url('/assets/image/Banner_defi-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[80vh] z-20 px-10 py-20 lg:py-32 lg:px-20  ">
          <div className="max-w-3xl flex flex-col items-start pt-10 justify-center ">
            <Heading as="h1" className="">
              Decentralized Finance
              <span className="text-[#09d0c6]">(DeFi)</span> Development
              Services
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Your trusted partner in building secure, scalable, and innovative
              decentralized solutions for the future of
              <span className="text-[#09d0c6]"> digital transformation.</span>
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
        <div>
          <Image
            src="/assets/image/coin.png"
            alt="DeFi Development"
            height={500}
            width={500}
            className="object-cover"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/image/image1.png"
                  alt="DeFi Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading className="mb-6 text-left">
                DEFI Solutions to Drive Business Growth
              </SectionHeading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                DeFi Development can act as a substantial propagandist in
                today’s financial environment. It elevates access for everyone
                to address many functions such as borrowing, lending, trading,
                investment, and risk management. This would cater to millions of
                unbanked people. It will have numerous benefits as financial
                processes will become more efficient through automation with the
                help of smart contracts.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unleash the potential of your business with Quantix Global’
                innovative DEFI solutions. As a leading DEFI Development
                Company, We empower you to unlock the power of Decentralized
                Finance, revolutionizing your financial processes and driving
                growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Credible Company Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
              We’re a Credible DeFi Development Company
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              We are a leading <strong>DeFi development company</strong>{" "}
              dedicated to propelling innovation within the ever-evolving
              decentralized finance ecosystem. Our team of seasoned
              professionals combines extensive experience with a relentless
              pursuit of cutting-edge solutions. This unwavering commitment
              translates into reliable, secure, and scalable DeFi applications
              that cater to the diverse and complex needs of our clients,
              empowering them to navigate the dynamic landscape of decentralized
              finance with confidence.
              <br />
              <br />
              DeFi is a reliable space for users to have ease of convenience as
              well as privacy. DeFi is reorienting the entire financial system
              into a more secure and cordial space. We take pride in claiming
              ourselves as a leading DeFi Development Company, having said that,
              we try to structure a substantial impact in the markets with our
              rewarding developments. The DeFi development at Quantix Global is
              supervised by the most proficient professionals who have a
              significant amount of experience as well as expertise in the
              concerned sector.
            </SubHeading>
            <p className="text-gray-600 mt-6 leading-relaxed"></p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <SectionHeading className="mx-auto">
              Our Broad Range of Defi Development Services Includes
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide if not found to assume text only fallback visually
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#333d47] mb-3 group-hover:text-[#09d0c6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>
              Key Advantages of Our DeFi Development Services
            </SectionHeading>
            <p className="text-gray-600 mt-4">
              Unleash the power of innovation and unlock new financial horizons
              with Quantix Global’ DeFi development services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 relative mb-4 mx-auto">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold text-center text-[#333d47] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <SupportCTA />

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <SectionHeading className="mb-6 text-left">
                Why Choose Quantix Global for Your DeFi Development Needs?
              </SectionHeading>
              <p className="text-gray-600 mb-6">
                By choosing Quantix Global, you gain access to a team of
                passionate experts who combine technical prowess with a deep
                understanding of DeFi. We empower you to navigate the evolving
                landscape confidently and unlock the transformative potential of
                this revolutionary technology.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full mt-8">
                <Image
                  src="/assets/image/image2.png"
                  alt="Why Choose Us"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-[#09d0c6]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#333d47]">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

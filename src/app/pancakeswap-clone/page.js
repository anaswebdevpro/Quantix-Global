"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import SupportCTA from "@/components/SupportCTA";
import WebsiteSlider from "@/components/WebsiteSlider";

const whyChooseUs = [
  {
    title: "Reasonable Gas Fee",
    desc: "More and more users are using this platform, as it has a reasonable gas fee.",
  },
  {
    title: "Cross-Chain Compatibility",
    desc: "The exchange is compatible with other chains, and the user can trade in a hassle-free manner.",
  },
  {
    title: "Proof of Stake",
    desc: "There will be proof of stake, so the user should not have to face any mismatch later.",
  },
  {
    title: "High-Speed Processing",
    desc: "High-speed processing of transactions is guaranteed on this exchange.",
  },
  {
    title: "Flexible Smart Contracts",
    desc: "The smart contracts are flexible and can be customized as per the user’s needs.",
  },
];

export default function PancakeSwapClone() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative w-full  min-h-[600px] flex   overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/healthcare_banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* content */}
        <div className="h-[80vh] z-20 px-4 md:px-10 py-20 lg:py-24 lg:px-20 ">
          <div className="max-w-2xl flex flex-col items-start justify-center pt-10 space-y-4">
            <Heading as="h1" className="">
              Create A Decentralized Exchange Similar To PancakeSwap
            </Heading>
            <SubHeading as="p" className="text-white py-2 max-w-lg">
              Now, you can create the best Decentralized Exchange on the BSC{" "}
              <span className="text-[#09d0c6]">Blockchain</span>, similar to{" "}
              <span className="text-[#09d0c6]">PancakeSwap</span>. It can be
              considered the best one around in the recent times. We take pride
              in extending our development platform services for the best DEX
              creation.
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

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
              Tokenized Asset Offering- Tokenize All Your Real-World Assets
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              Tokenization of things or asset tokenization is the newest hype
              created urrounding the blockchain and cryptocurrency industry. A
              large number of businesses and huge giants have initiated a move
              towards Tokenized Asset Offerings(TAOs) and Offering Tokenization
              as a service(TaaS). You must have noticed a trend of market
              evolvement from Bitcoin to ICOs and then to TAOs. Crypto
              diversification counts as a natural succession since it permits
              traditional real estate, art galleries, and illiquid asset classes
              to move and load onto the blockchain.
              <br />
              <br />
              Asset tokenization or tokenization of things refers to a process
              of transitioning the ownership of real-world assets into multiple
              digital tokens, doesn’t matter if it is venture capital funds,
              equity shares, real estate, and precious metals like gold, silver,
              or diamond etc. These tokens are supported by revolutionizing
              blockchain technology that records & stores every transaction on
              this platform to ascertain user security and asset information
              inclusively. This great technology enables enhanced efficiency and
              security for potential investors and the creation of numerous
              rewarding opportunities. At Webcom Systems, you will find
              proficient blockchain professionals who put forward a
              comprehensive asset tokenization platform with state-of-art
              blockchain technology, functionalities, and traits that will bring
              a seamless working experience for valuable customers.
            </SubHeading>
            <p className="text-gray-600 mt-6 leading-relaxed"></p>
          </div>
        </Container>
      </section>

      {/* Introduction with image Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/image/about_pancake.png"
                  alt="DeFi Development"
                  width={450}
                  height={450}
                  className="object-center mx-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <SectionHeading className="mb-6 text-left">
                About PancakeSwap
              </SectionHeading>
              {/* <p className="text-gray-600 mb-6 leading-relaxed">
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
              </p> */}
              <SubHeading className="max-w-4xl">
                Built on the Binance Smart Chain, PancakeSwap is a
                cryptocurrency exchange platform. Users are now permitted to
                carry out trade with both Binance Coins and tokens without
                having to rely on the centralized services. All trades are
                conducted through Smart Contracts. Many Blockchain security
                companies have checked the platform for authenticity and passed
                it. It presents itself as an entire ecosystem of DeFi tools.{" "}
                <br />
                <br />
                It works with the help of an AMM or Automated Marketing Maker.
                It is the key reason why this system is so efficient. Now, all
                the traders trading in Cryptocurrencies can push transactions on
                this renowned exchange platform. The digital ledger is
                uncomplicated and you need not match it with that of other
                user’s ledger platforms. The exchanges are happening in the same
                location in real-time.
              </SubHeading>
            </div>
          </div>
        </Container>
      </section>
      {/* how does it works
       */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <SectionHeading className="mb-6 text-left">
                How Does It Work?
              </SectionHeading>

              <SubHeading className="max-w-4xl">
                PancakeSwap works primarily on the automation brought in by AMM
                or Automated Marketing Maker. The user deposits the funds and
                becomes the liquidity supplier in the exchange. The
                decentralized exchange specifies what the investments are, after
                the investment process is over. Being a user, you need to
                integrate it with a digital money app or wallet on the exchange.
                Trading with cryptocurrencies is easy, with the exchange
                platform and digital wallet amalgamation. The Digjtal Wallet
                permits the user to store their cryptocurrencies in a secure &
                safe manner. Liquidity providers later share this. Once the
                setting up and specifications of wallet is done, users can begin
                exchanging their cryptocurrencies where the user’s identity is
                also validated as an indispensable part of the process. The
                three wallets used herein are MetaMask, TrustWallet, or
                WalletConnect. A treasury is behind all the transactions.
              </SubHeading>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/image/workflow.png"
                  alt="DeFi Development"
                  width={450}
                  height={450}
                  className="object-center mx-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <SectionHeading>
              Why Is PancakeSwap Better In Comparison To Other Exchanges?
            </SectionHeading>

            <SubHeading className=" max-w-5xl mx-auto">
              Most cryptocurrency exchanges are built on the Ethereum
              blockchain. However, that can limit the performance of such
              systems to a certain extent. Many investors trade in Ethereum and
              thus utilize these exchanges. With that, you might face a lot of
              congestion on the trading and exchange routes. To overcome the
              problem, Binance Smart Chain can be a credible solution. The
              launch of PancakeSwap expedited the proper use of exchange
              channels devoid of any congestion. The user can also bypass the
              transaction costs involved there as well. This decentralized fund
              management has made it possible to effect hassle-free
              transactions. You get the best decentralized finance exchange
              today.
            </SubHeading>
            <div>
              <Button className="mx-auto " variants="action">
                Talk to An Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-8">
            <SectionHeading className="text-center w-full">
              Reasons To Create A Customized Cryptocurrency Exchange <br />{" "}
              –Like Pancake Swap
            </SectionHeading>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-[300px] md:h-[400px] w-full">
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

      <WebsiteSlider />

      {/* CTA Section */}
      <SupportCTA />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

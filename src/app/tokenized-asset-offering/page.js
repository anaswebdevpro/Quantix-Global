"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Wallet,
  Globe,
  Lock,
  ShieldCheck,
  BarChart3,
  Users,
  FileText,
  Vote,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import Container from "@/components/ui/container";
import HeroWithForm from "@/components/Sections/heroWithform";
import SupportCTA from "@/components/Sections/SupportCTA";

const typesOfAssetTokenization = [
  {
    title: "Real Estate Tokenization",
    description:
      "Through our legally compliant token structure, you can make your real estate investments accessible, digital, as well as on a global scale. The tokenization of commercial real estate enables the illiquid assets to be digitized, thereby, authorizing the investments as the world’s largest and highly secure amongst asset classes.",
    icon: <Globe className="w-10 h-10 text-[#153577]" />,
  },
  {
    title: "Art Tokenization",
    description:
      "The apportioned ownership of existing art pieces assists artists and galleries with workable businesses by transitioning paintings into commodities and suffixing a monetary value to them. This exposes the world of art into unchartered territory where the decision-makers are the token holders or potential investors.",
    icon: <FileText className="w-10 h-10 text-[#153577]" />,
  },
  {
    title: "Stable Coins",
    description:
      "Stablecoins are waved as the ulterior motive of the cryptocurrency market. Besides the stable value for investments and trade, stable coins also permits exchanges to get their hold on the required liquidity.",
    icon: <Wallet className="w-10 h-10 text-[#153577]" />,
  },
  {
    title: "VC Fund Tokenization",
    description:
      "Without the interference of any intermediary, tokenization can help investors maintain a record of their investment funds. The VC fund tokens sync with financial regulations and authorize investors to trade tokens on the platform or over the counter(OTC).",
    icon: <BarChart3 className="w-10 h-10 text-[#153577]" />,
  },
  {
    title: "Illiquid Asset Tokenization",
    description:
      "You might know that various tokens cannot be immediately converted to fiat currency. These can be current, fixed, or intangible assets. Though these can be tokenized without bearing any value loss with an elevated trading volume, thus enabling high profits for both investors as well as the project.",
    icon: <Lock className="w-10 h-10 text-[#153577]" />,
  },
  {
    title: "Mining Repository Tokenization",
    description:
      "Mining repository is a highly illiquid asset that seems to be a consummate industry for tokenization purposes. Cryptocurrencies like Gold-backed cryptocurrency, Silver backed cryptocurrency or a Renewable backed cryptocurrency are the future commodity prospects and futures trading helping highly illiquid assets turn into liquid.",
    icon: <ShieldCheck className="w-10 h-10 text-[#153577]" />,
  },
];

const steps = [
  {
    step: "Step 1",
    description:
      "Searching for illiquid assets to tokenize such as commercial estate. Our experts at Webcom Systems work with conscientiousness for tokenization purposes.",
  },
  {
    step: "Step 2",
    description:
      "Our auditing and financial consultants shall advise on the jurisdiction checks in respect to the asset titles like Zero Debts and other parameters specified by the user.",
  },
  {
    step: "Step 3",
    description:
      "A Special Purpose Vehicle or Entity(SPV/SPE) is constructed especially at the time of tokenizing real estate that would own the entire assets under the SPV/SPE.",
  },
  {
    step: "Step 4",
    description:
      "The strength and proficiency behind the assets tokenization is the manpower & expertise of professionals at Webcom Systems. As per our belief, ERC-20 is not a hypothetical solution for TAO due to certain reasons like gas prices, network congestion, and alterations in protocols. We build personalized inbuilt smart contracts on the tip of Ethereum and Hyperledger or Stellar.",
  },
  {
    step: "Step 5",
    description:
      "The asset valuation is investigated by an auditing firm, post which you get a value per token suggestion and the issuance company such as yours can raise a token at such an affordable price.",
  },
  {
    step: "Step 6",
    description:
      "A dashboard is offered for investor management for both the issuer & fund management for investors once the token is created with the regulations integrated into the smart contract. The dashboards engulf KYC/AML, Accredited Investor Verification, and voting rights already embedded for project owners and investors.",
  },
  {
    step: "Step 7",
    description:
      "The tokens are presented through a Tokenized Asset Offering(TAO) for the investors to buy a legally complying token under the framework of the legal obstructions. Besides, there is no requirement of any third-party intermediaries like transfer agents as smart contracts ensure the regulatory requirements automation.",
  },
  {
    step: "Step 8",
    description:
      "We assure you of the ease to amalgamate numerous decentralized financial applications into a one only module turning it into an advanced and user-oriented program.",
  },
];

const dashboardFeatures = [
  "Our dashboard is your one-stop solution for things like KYC/AML records, Accredited Investors, Fund Raising, Market Cap, and Investments.",
  "You have the opportunity to integrate with your users via proactive disclosures and mail them regarding openings in further investment rounds.",
  "You can also safely & securely audit trails, checklists, activities, and standard reporting processes.",
  "Moreover, investors can effectively manage the portfolio.",
  "Entire announcements like voting, holdings, and new offerings can be transferred through the Dashboard.",
  "All the security tokens transactions can be differentiated through the efficacious management.",
  "Transparency is guaranteed through the dashboard in the Tokenized Asset Ecosystem.",
  "Shareholder agreements, Bylaws, and SAFT etc are stored at one secure spot permitting harmonious view through various platforms.",
  "It allows tracking of shareholder management with a capability to download and confirm messages, voting items, and response tracking.",
  "Issuance companies can carry out distribution whereas investors can trace back the dividends.",
  "Potential investors can also vote with the help of a dashboard.",
];

export default function TokenizedAssetOffering() {
  return (
    <div className="bg-white">
      <HeroWithForm
        heading="Legally Compliant Asset-Supported Tokens"
        text="Integrate immediately with our newfangled asset tokenization platform."
        bgimage="/assets/image/Token_banner-1.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-6xl mx-auto">
            <SectionHeading className="mb-6 text-center">
              Tokenized Asset Offering- Tokenize All Your Real-World Assets
            </SectionHeading>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">
              Tokenization of things or asset tokenization is the newest hype
              created surrounding the blockchain and cryptocurrency industry. A
              large number of businesses and huge giants have initiated a move
              towards Tokenized Asset Offerings(TAOs) and Offering Tokenization
              as a service(TaaS). You must have noticed a trend of market
              evolvement from Bitcoin to ICOs and then to TAOs. Crypto
              diversification counts as a natural succession since it permits
              traditional real estate, art galleries, and illiquid asset classes
              to move and load onto the blockchain.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-center">
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
            </p>
            <h4 className="text-xl font-bold text-[#333d47] mb-8 max-w-4xl mx-auto">
              Tokenized Asset Offering is an amazing resolution for financial
              markets to amalgamate into blockchain through AML/KYC, investor
              verification, and crystal-clear voting rights.
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto text-left">
              {[
                "Reduction in Illiquidity Discounts/ Liquidity Premiums.",
                "Enhanced Compliance.",
                "Liquidity of Illiquid Assets.",
                "The Integration Of Institutional Investors and Fund Managers.",
                "Transparent, Efficient & Scalable.",
                "Alleviation Of Spread Charges.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#09d0c6] mt-1 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* White Label Platform Section */}
      <section className="py-16 md:py-24 bg-[#f0fbfd]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/assets/image/Asset-Tokenization_image.png"
                alt="White Label Asset Tokenization Platform"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333d47] mb-6">
                White Label Asset Tokenization Platform
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Webcom Systems serves as an all-inclusive tokenization assets
                issuance platform for both issuers and the specific target
                industry. Both residential real estate and commercial assets can
                be tokenized by the issuance companies.
              </p>
              <p className="text-[#333d47] font-semibold mb-6">
                As an issuance organisation, we provide tokenization in the
                disguise of a service where the tokens generated has numerous
                characteristics:
              </p>
              <ul className="space-y-4">
                {[
                  "Automated compliance with Blockchain and Smart Contracts.",
                  "Globalized KYC/AML Verification.",
                  "Multi-Ledger Security Token Development(EOS, Hyperledger or Stellar).",
                  "Non-Fungible Tokens For Every Security Token Issuer.",
                  "Automated Reporting To Regulatory Authorities.",
                  "Automated Policy and Regulations With Smart Contracts.",
                  "Issued Tokens Have an Interoperability Layer For Exchanges Across The Globe.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#09d0c6] mt-0.5 shrink-0" />
                    <span className="text-gray-600 font-medium leading-tight">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Types Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>Types Of Asset Tokenization</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typesOfAssetTokenization.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#153577]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center flex justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-[#153577] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#09d0c6] transition-colors"
            >
              Talk To An Expert
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=971527732049&text&app_absent=0"
              className="bg-[#25D366] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#128C7E] transition-colors flex items-center gap-2"
            >
              Connect On Whatsapp
            </Link>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-[#153577] text-white">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading className="!text-white">
              Steps For Tokenized Asset Offerings
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#09d0c6] rounded-full flex items-center justify-center font-bold text-[#153577] shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#09d0c6]">
                  {item.step}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#09d0c6] text-[#153577] px-8 py-3 rounded-md font-bold hover:bg-white transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </Container>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/image/Inverstor-Verification.png"
                  alt="Investor Management Dashboards"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeading className="mb-6">
                Investor Management Dashboards
              </SectionHeading>
              <ul className="space-y-4">
                {dashboardFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#09d0c6] mt-2.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {/* Idea Section */}
      <SupportCTA />

      {/* Revolutionizing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <SectionHeading>
              Revolutionizing Blockchain Technology
            </SectionHeading>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Potentially known, the Ethereum Blockchain with ERC-20 doesn’t
              stand on the needs of asset supported tokens. The primary issues
              that might come up are gas prices, network congestion, and
              protocol issues. To put all this to an end, Webcom Systems has
              popped up with a solution of creating customized & personalized
              scalable blockchain and smart contracts to satisfy the
              requirements on Ethereum/Hyperledger or Stellar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Legally Compliant Tokens",
                desc: "The issued tokens are implanted with smart contracts that carry out the regulations of registered jurisdictions coded. These also incorporate frameworks of fundraising, investor qualification rules, and transaction limits on transfer.",
              },
              {
                title: "Participation Of Global Investors",
                desc: "When many countries are involved there are many problems that are faced by issuance companies for secondary trading. We initiate tokens trading across borders with the thought that the tokens offered are securities and must sync with securities laws. The token sales and secondary training are crafted with smart contract conditionality.",
              },
              {
                title: "Transparency",
                desc: "Blockchain assures that all the transactions also including the conditions are visible to the financial regulators. Since the process of transfer agents are automated, entrepreneurs now have the chance to raise funds in a more effective and streamlined manner.",
              },
              {
                title: "Wallet",
                desc: "The professionals at Webcom Systems are crafting a technology that permits issuance companies for tokens reissuing to the investors, in case the investor loses their wallet keys put through to terms and conditions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#153577] hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-lg font-bold text-[#333d47] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Voting Rights",
                icon: <Vote className="w-12 h-12 text-[#09d0c6] mb-4" />,
                desc: "An exclusive voting platform standing on blockchain ascertains security, transparency, and scalability that is stored on a distributed ledger. In order to meet your needs, a proper governance system for business is created. This will result in the reduction of the overheads in the voting process that makes your organization’s compliances easy to increase substantial faith in the potential investors.",
                points: [
                  "The voting rights platform assures a peer to peer, trustless secret ballot.",
                  "We guarantee scalability through an off-chain layer that can manage millions of votes per minute.",
                  "Transparency is embedded in blockchain whereas stakeholders can verify every vote.",
                  "Decentralized nature ensures fewer risks of being comprised.",
                ],
              },
              {
                title: "KYC/AML Automation",
                icon: <ShieldCheck className="w-12 h-12 text-[#09d0c6] mb-4" />,
                desc: "In a regulated TAO, the primary requirements are KYC/AML verification, which reduces the risk via reputation scoring that helps issuance companies in the identification of high-risk individuals. This ultimately directs to investor’s identity, risk-oriented authentication, and restricting identity fraud. Besides, you can also limit money laundering activities.",
                points: [
                  "Effective onboarding of the investors in a paced up time frame.",
                  "Lead in regulations via a flexible interface.",
                  "Respond to the newest developments in the case.",
                ],
              },
              {
                title: "Accredited Investor Verification",
                icon: <Users className="w-12 h-12 text-[#09d0c6] mb-4" />,
                desc: "You might know that credible and private interface companies can verify their investors. The moment a user signs up for a TAO, a simple questionnaire integrated with certification requirements and uploading of supporting documents are sent via mail.",
                points: [
                  "Verify accredited potential investors taking necessary steps.",
                  "Background verification carried out through professionally licensed attorneys.",
                  "Ethical codes sustaining confidentiality.",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-[#333d47] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#153577] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Info/FAQ Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#333d47] mb-6">
                Investor Prospectus
              </h3>
              <p className="text-gray-600 mb-8">
                An Investor Prospectus is a document that briefs your project
                along with the fundraising aspects. Earlier known as White
                Paper, an owner’s manual is comprised of typically all details
                regarding the project scope, technical implementation, and
                future roadmap.
              </p>

              <h3 className="text-2xl font-bold text-[#333d47] mb-6">
                What do you understand about Asset Tokenization?
              </h3>
              <p className="text-gray-600 mb-8">
                Well, an asset can both be physically and digitally available,
                this can be then later converted into a token. These tokens are
                built with blockchain networks to make them tamper-proof.
                Besides, the tokens possess the capability to stay encrypted
                where only the authorised entry has the permission to
                information access the tokenized asset.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#333d47] mb-6">
                What Are The Various Advantages Of Tokenized Assets?
              </h3>
              <p className="text-gray-600 mb-8">
                With tokenized assets, you can win on plenty of benefits, their
                decentralized nature, once the asset is tokenized it tends to be
                more secure. Besides, their decentralized nature will ascertain
                the privacy and anonymity of the owner. Lastly, asset ownership
                is readily available at all times so it cannot be modulated.
              </p>

              <h3 className="text-2xl font-bold text-[#333d47] mb-6">
                What is a ‘Tokenization Asset Platform’?
              </h3>
              <p className="text-gray-600 mb-8">
                These platforms are the places where the assets at any point in
                time can be tokenized into an asset. These reliable platforms
                are loaded with technical components that are required for asset
                tokenization. This is considered the easiest way to asset
                tokenization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#153577] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#153577] to-[#09d0c6] opacity-10"></div>
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let’s Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We are a company that believes in oneness and creating something
              great every time. With our professionals, you can rely on
              acquiring the best for yourself and your business.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#09d0c6] text-[#153577] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-[#09d0c6]/50"
            >
              Talk To Our Experts
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

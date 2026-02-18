"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Users,
  Rocket,
  ShieldCheck,
  Code2,
  Palette,
  Layout,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import Container from "@/components/ui/container";
import HeroWithForm from "@/components/Sections/heroWithform";
import SupportCTA from "@/components/Sections/SupportCTA";
import BannerForm from "@/components/Sections/bannerForm";
import Button from "@/components/ui/button";
import WebsiteSlider from "@/components/WebsiteSlider";
import FAQAccordion from "@/components/Sections/FAQAccordion";

const services = [
  {
    title: "Play-to-Earn Game Development",
    description:
      "Develop a P2E game with real-life value, such as earning money or reach new customers. We offer game development services to help you launch your game, and our game development partners can build a custom made game for your specific needs.",
    icon: <Gamepad2 className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Move-to-Earn Game Development",
    description:
      "Our company offers thoughtful development services for gaming platforms. We are an outsourcing company with a proven track record of delivering high-quality creative services to clients in the gaming industry.",
    icon: <Rocket className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Player-vs-Player Game Development",
    description:
      "Bring a new and unique experience to your existing product or try something new without much risk. We specialize in building online games that are full of competition and excitement.",
    icon: <Users className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Game Development",
    description:
      "Our design-thinking process is what sets us apart. From inception to launch, our team will handle the entire process and ensure that your game becomes a success.",
    icon: <Code2 className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Crypto Breeding Game Development",
    description:
      "CryptoKitties was a wildly successful game which disrupted the gaming industry. It used game design to create an entirely new category of digital collectable objects known as NFT. Launch your own game and rapidly expand your user base through advertising and monetization.",
    icon: <Cpu className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Strategy-Based Game Development",
    description:
      "Strategy-based games are popular among gamers. The strategy-based element of the game can be highly engaging, especially when compared to other genres of games. We provide creative services that fit the needs of your project.",
    icon: <Trophy className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const designProcess = [
  {
    title: "Sketching",
    description:
      "Sketch artists use drawings to put our ideas into visual perspective. The details of each element are emphasized while leaving the rest of the composition unedited.",
    icon: <Palette className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Shading",
    description:
      "The sketch is given a realistic look and feel by the shading process, adding depth and dimension to the visual elements.",
    icon: <Layout className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Modeling",
    description:
      "Gamers can now visualise their game world and experience it in a way that was not possible before through detailed 3D modeling.",
    icon: <Cpu className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Animation",
    description:
      "We are an animation company that produces 3D animated films and TV shows. Our expertise is in the gaming industry and we specialize in motion design.",
    icon: <Zap className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Coding",
    description:
      "Our engineers develop the platform while ensuring a world-class user experience, focusing on performance, security, and scalability.",
    icon: <Code2 className="w-8 h-8 text-[#09d0c6]" />,
  },
  {
    title: "Testing",
    description:
      "Gaming platforms are important to companies and the performance of a platform has to be tested rigorously to ensure bug-free operation.",
    icon: <ShieldCheck className="w-8 h-8 text-[#09d0c6]" />,
  },
];

const whyChoose = [
  {
    title: "Technical Prowess",
    description:
      "We work on Blockchain technologies exclusively. We have one focus, and we do it really well.",
    icon: <Cpu className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Expert Team",
    description:
      "We have a team of experts that can help you with anything related to your products and services.",
    icon: <Users className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Rapid Development",
    description:
      "We are a team of dedicated professionals who help make your product successful. Our wide range of services includes development, deployment and more.",
    icon: <Rocket className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Complete Support",
    description:
      "We help you achieve the strategy that you have set up for your business. Depending on the needs of your company, we provide different services.",
    icon: <ShieldCheck className="w-10 h-10 text-[#09d0c6]" />,
  },
  {
    title: "Meaningful Outcomes",
    description: "We make investments work better for you.",
    icon: <Trophy className="w-10 h-10 text-[#09d0c6]" />,
  },
];

const faqs = [
  {
    question: "What is NFT gaming development?",
    answer:
      "NFTs have been a topic of discussion in the past year. Gaming is a huge industry with more and more people playing games on mobile devices, computers, and consoles. NFTs provide security that can be traded for in-game purchases on a global scale. Participants are now able to earn more revenues and have a better gaming experience with the NFT blockchain platform. A perfect trading platform with complete liquidity helps in rapidly tracking your business.",
  },
  {
    question: "Why is NFT considered as the future of the gaming industry?",
    answer:
      "NFT gaming platform development solutions are built on a worldwide network of decentralized blockchain infrastructure for fast and effective processing. Gamers can earn revenue from digital assets in a more transparent way than ever before. The technology is reliable, secure, and interoperable.",
  },
  {
    question: "What are the benefits of using NFTs in games?",
    answer:
      "NFTs in the gaming industry aim to provide users with an immersive experience by providing realistic interactions. The assets they allow you to have can be traded or purchased in marketplaces like ours.",
  },
  {
    question: "How can gamers benefit from the NFT gaming platform?",
    answer:
      "NFTs offer opportunities for all those involved in the gaming platform. The game is designed to be a place where users can own the assets. The users have the option to sell these rare assets and earn from them. Blockchain is changing the way gamers interact on the platform.",
  },
];

export default function NFTGamingPage() {
  return (
    <div className="bg-white">
      <HeroWithForm
        heading="NFT Gaming Platform Development"
        text="Create & Monetize Games with Our Expert NFT Gaming Solutions."
        bgimage="/assets/image/banner-20.jpg"
        className="hidden"
      />

      {/* image side by side  X2 */}
      <div>
        <section className="py-8 md:py-10">
          <Container className="max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold leading-tight ">
                  NFT Development for Gaming Industry
                </h2>
                <p className="mt-4 text-[#5d6b82] text-base md:text-lg leading-relaxed">
                  NFTs are setting a trend in the crypto world with features
                  like the integration of unique features and functionalities.
                  The gaming industry is huge, providing endless opportunities
                  for business and fame. NFTs are also assisting in the growth
                  of many industries, as they provide a tangible reward for
                  consumers.
                  <br />
                  <br />
                  Gamers can also benefit from using NFTs that allow them to
                  make money. These gaming platforms provide strong ownership
                  rights, immutability, and security to their users. In addition
                  to providing opportunities to develop new digital assets, NFTs
                  are also a fantastic way to attract the gaming industry
                  towards any project.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start lg:order-1">
                <Image
                  src="/assets/image/NFT-Development.png"
                  alt="Metaverse collaboration illustration"
                  width={470}
                  height={699}
                  className="w-full max-w-[360px] md:max-w-[420px] h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="py-8 md:py-10">
          <Container className="max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold leading-tight">
                  Get a free evaluation of your NFT Gaming Platform development
                  needs
                </h2>
                <p className="mt-4 text-[#5d6b82] text-base md:text-lg   leading-relaxed">
                  Our experienced team can help you with your needs, from
                  creative solutions to developing initial prototypes. At NFT
                  Games, our team members are cross-functional and
                  multi-talented. This allows us to think quickly and
                  strategically about the development of new games. Provide
                  gamers with virtual collectibles that they can collect while
                  playing games. <br /> <br /> As more people get into gaming
                  and trading, more investors will quickly be able to tap within
                  profit-making markets. With our gameplay tool, you can create
                  the game of your dreams. Our developers will create beautiful
                  designs, immersive environments, and realistic experiences for
                  our game players. Our team of NFT creators and NFT game
                  developers collaborate together to make sure we drag gaming
                  enthusiasts into our platform.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/image/NFT-Development2.png"
                  alt="Metaverse virtual workspace illustration"
                  width={695}
                  height={401}
                  className="w-full max-w-[380px] md:max-w-[520px] h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Free Evaluation Section */}
        {/* <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading className="mb-6">
                Get a free evaluation of your NFT Gaming Platform development
                needs
              </SectionHeading>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our experienced team can help you with your needs, from creative
                solutions to developing initial prototypes. At NFT Games, our
                team members are cross-functional and multi-talented. This
                allows us to think quickly and strategically about the
                development of new games. Provide gamers with virtual
                collectibles that they can collect while playing games. As more
                people get into gaming and trading, more investors will quickly
                be able to tap within profit-making markets. With our gameplay
                tool, you can create the game of your dreams. Our developers
                will create beautiful designs, immersive environments, and
                realistic experiences for our game players.
              </p>
              <Link href="/contact-us">
                <Button variants="primary" className="px-8 py-3">
                  Get Started
                </Button>
              </Link>
            </div>
          </Container>
        </section> */}
      </div>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              We offer NFT Development Services to the Gaming Industry
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team has years of experience in developing NFT games. You can
              work with us to build, promote, and manage unique NFT gaming
              platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#153577]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d47] mb-4 group-hover:text-[#09d0c6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Design Process Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Our NFT Gaming Platform Development Design Process
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#09d0c6] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#e0fbf9] p-3 rounded-full">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#333d47]">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Idea CTA */}
      <SupportCTA />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading>
              Why Choose Us for NFT Gaming Platform Development?
            </SectionHeading>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              At Avner Global, our team of dedicated professionals specializes
              in blockchain innovation and game development. We offer end-to-end
              solutions to create immersive NFT gaming experiences that drive
              engagement and revenue for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#153577] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#153577] mb-6 text-center">
              Building the Future of NFT Gaming Platforms – What We Offer
            </h3>
            <ul className="grid md:grid-cols-1 gap-4">
              {[
                "A perfect trading platform with transparent actions ensures complete liquidity and helps in fast-tracking your business.",
                "Smart contract identifiers enable people to easily find the value of their contracts, even if they have been affirmed.",
                "A seamless verification protocol for the tokens ensures a faster launch in the market.",
                "Our certified developers are committed to providing on-time and high-quality solutions.",
                "The development of an NFT gaming platform meets the needs of players, who can experience AR/VR integration.",
              ].map((offer, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#09d0c6] mt-1 shrink-0" />
                  <span className="text-gray-700">{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions(FAQs)</SectionHeading>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </div>

      {/* Conclusion CTA */}
      <WebsiteSlider />
    </div>
  );
}

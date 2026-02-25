import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ContactSection from "@/components/Sections/ContactSection";
import SupportCTA from "@/components/Sections/SupportCTA";
import HeroVideo from "../../components/HeroVideo.js";
import FAQAccordion from "../../components/Sections/FAQAccordion.js";

const avatarServices = [
  {
    title: "Metaverse Game Avatars",
    description:
      "Our animated game avatars provide a uniquely realistic representation for each player, blending innovative 2D and 3D technology to elevate gaming experiences to new heights.",
    icon: "/assets/image/metaverse_game_development-2-304e5e35-07bc-4286-b706-3fa9d55ceeb2.png",
  },
  {
    title: "Metaverse Full Body Avatars",
    description:
      "Engage in virtual gatherings with lifelike digital full body avatars that utilize advanced AR avatar development, VR character design, and 3D technology. They mirror natural movements for a truly immersive virtual experience.",
    icon: "/assets/image/Metaverse-Full-Body-Avatars-b655cc4d-a8a2-4f6d-88c5-78a9ca813fc6.png",
  },
  {
    title: "Metaverse Chat Avatars",
    description:
      "Experience real-time communication through chat avatars that convey emotions and expressions, recreating the dynamics of physical interactions in a digital setting.",
    icon: "/assets/image/Metaverse-Chat-Avatars-3e03a8a4-b3bc-48ab-9ec2-aae59c7b85ec.png",
  },
  {
    title: "Metaverse Portrait Avatars",
    description:
      "Create personalized portrait avatars for your business, allowing individuals to create lifelike digital representations within the metaverse using their photos.",
    icon: "/assets/image/Metaverse-Portrait-Avatars-4276a40e-91a0-42a9-8250-9a0d9fb38c87.png",
  },
  {
    title: "Metaverse Workspace Avatars",
    description:
      "Utilize augmented reality avatars for virtual meetings, closing the gap in human interaction and enabling companies to conduct meetings in virtual environments while facilitating remote or hybrid work structures.",
    icon: "/assets/image/Metaverse-Workspace-Avatars-37af5825-7a08-4f32-808e-f0361830bf20.png",
  },
  {
    title: "Metaverse VR Character Design",
    description:
      "Our expertise lies in creating metaverse avatars integrated with VR technology, providing users of VR devices with a realistic and immersive virtual experience.",
    icon: "/assets/image/Metaverse-VR-Character-Design-46a2a1d0-f5c7-482d-b865-667055adb18b.png",
  },
  {
    title: "Metaverse Leg Less Avatars",
    description:
      "We pioneer the design of legless avatars, requiring fewer motion sensors for enhanced convenience in usage within the metaverse.",
    icon: "/assets/image/Metaverse-Leg-Less-Avatars-2bfe63ac-1546-4efb-9521-332e8c9d9869.png",
  },
  {
    title: "Metaverse NFT Avatars",
    description:
      "NFT avatars are charming digital images that can be used as profile pictures for metaverse social media networks. They lead the way to immersive NFT communities.",
    icon: "/assets/image/Metaverse-NFT-Avatars-950ef229-3c58-4c45-92b8-08e5791f266f.png",
  },
  {
    title: "Metaverse Entertainment Avatars",
    description:
      "Specializing in the creation of realistic 3D avatars, our virtual reality avatars elevate entertainment experiences. We allow users to immerse themselves in virtual concerts, performances, and events with avatars that mirror the creative themes of each event.",
    icon: "/assets/image/Metaverse-Entertainment-Avatars-f923540e-1641-41bf-a031-16fcd1250d1a.png",
  },
];

const howWeAssist = [
  {
    title: "Immersive Virtual Experiences",
    description:
      "Your avatar enables you to explore, communicate, and interact with fellow users in the virtual world, enabling participation in a diverse range of activities. This results in a captivating and immersive virtual environment for users.",
    icon: "/assets/image/virtual-reality-fitness-1c709c2f-6ba7-4033-82b6-d06747dc94b8.png",
  },
  {
    title: "Anonymity and Privacy",
    description:
      "Virtual reality avatars provide an enhanced level of privacy and anonymity, allowing you to separate your digital persona from your real-life identity. This enables the deployment of avatars across different environments without the need to recreate your digital identity each time.",
    icon: "/assets/image/privacy-9d39deac-6f47-4010-85ce-77d0f255ca02.png",
  },
  {
    title: "Avatar Portability",
    description:
      "Once your avatar is created, you can effortlessly utilize it across various metaverse systems without the necessity to initiate your digital identity anew on each occasion. This feature safeguards your personal information, offering the flexibility to maintain privacy while using your avatar in different contexts.",
    icon: "/assets/image/3d-artist-df58f0c0-39ed-4483-b86f-2634916eefef.png",
  },
  {
    title: "Business Opportunities",
    description:
      "The metaverse presents various opportunities for employment and entrepreneurial ventures through the use of augmented reality avatars. Avatars facilitate networking, showcase your skills, and collaborate, offering a range of career and business opportunities.",
    icon: "/assets/image/opportunity-d5bfcb99-8e85-4b25-8e1e-f6f5c554161b.png",
  },
];

const useCases = [
  {
    title: "Virtual Reality (VR) Gaming",
    description:
      "The evolution of VR gaming has transformed the gaming industry by seamlessly merging immersive virtual experiences and interconnected digital worlds.",
    icon: "/assets/image/virtual-reality-f6bc14d2-a937-486b-8737-787cd2474397.png",
  },
  {
    title: "Virtual Meetings and Collaboration",
    description:
      "In the evolving landscape of remote work, the Metaverse serves as a dynamic platform for virtual meetings and collaborative team interactions.",
    icon: "/assets/image/online-meeting-d90b460e-2973-4fd1-a0ec-c6c80ec753ac.png",
  },
  {
    title: "Virtual Marketplaces and E-Commerce",
    description:
      "The convergence of virtual marketplaces and e-commerce within the metaverse has introduced numerous advantages to the global market.",
    icon: "/assets/image/marketplace-924b3469-0438-4057-8905-561c8503a594.png",
  },
  {
    title: "Virtual Education and Training",
    description:
      "The emergence of virtual education and training in the metaverse has transformed the traditional ways of learning.",
    icon: "/assets/image/online-learning-3f7ab902-c46d-4444-9295-012a1e0c7765.png",
  },
  {
    title: "Virtual Real Estate and Architecture",
    description:
      "The concept of virtual real estate and architecture has reshaped interactions, transactions, and the visualization of properties in the digital world.",
    icon: "/assets/image/real-estate-2-c06c62b0-0b07-4fb1-a846-89471a9a29dd.png",
  },
  {
    title: "Virtual Healthcare and Telemedicine",
    description:
      "Immersive virtual experiences enable patients to access specialized healthcare remotely, offering personalized consultations and continuous monitoring.",
    icon: "/assets/image/virtual-doctor-1-b1f10f51-3100-4766-b84b-c8ade5e29bd9.png",
  },
  {
    title: "Virtual Tourism and Exploration",
    description:
      "Virtual reality avatars allow users to explore destinations without physical limitations, enhancing accessibility and providing personalized journeys tailored to individual preferences.",
    icon: "/assets/image/virtual-tourism-46332f43-f7c9-4d32-b466-a5c2d704008e.png",
  },
  {
    title: "Virtual Socializing and Entertainment",
    description:
      "The integration of virtual socializing and entertainment has redefined how individuals engage in social interactions and leisure activities.",
    icon: "/assets/image/virtual-reality-1-1-4073f776-5198-4475-9f85-d263036995f1.png",
  },
];

const whyHireItems = [
  {
    title: "Industry Expertise",
    description:
      "With years of experience in metaverse technology, we offer a competitive advantage over other companies in the field.",
  },
  {
    title: "Free Consultation",
    description:
      "We offer free consultation services including general estimates about the process, the time, and the cost of your metaverse game project.",
  },
  {
    title: "Timely Delivery",
    description:
      "We have a proven track record of consistently delivering projects on time, meeting all specified deadlines.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our team designs projects that offer long-lasting value, guaranteeing every platform offers potential for growth and improved efficiency.",
  },
  {
    title: "Continuous Support",
    description:
      "We are available 24/7 to assist you and provide the most satisfactory solutions.",
  },
];

const avatarFeatures = [
  {
    title: "Avatar Customization",
    description:
      "Our augmented reality avatars offer customizable options to create an immersive virtual experience for the users. It enables you to customize the clothing, hair, and other facial features for avatars to accurately represent the users.",
    icon: "/assets/image/avatar-design-ac28b4c7-3374-4053-96a7-10d92a1f9449.png",
  },
  {
    title: "360-Degree Vision",
    description:
      "Our 360 degrees of vision has enabled the avatars for smooth navigation in the metaverse. Every character has the ability to see the metaverse from every angle.",
    icon: "/assets/image/360-view-2baf81b7-4d76-419e-b59c-4300117b9bca.png",
  },
  {
    title: "Spatial Voice Integration",
    description:
      "Incorporating spatial voice in avatars creates a sense of realism. Adjusting volume based on avatar proximity mirrors real-life interactions, creating a more immersive virtual experience.",
    icon: "/assets/image/voice-ab4f4a58-10e2-4968-98ec-e2b851c4c2fd.png",
  },
  {
    title: "Interoperability",
    description:
      "We facilitate smooth communication across various platforms with virtual reality avatars designed for interoperability. Users can effortlessly transition between different metaverses, enabling them to move from one location to another.",
    icon: "/assets/image/network-3f1d2454-2f6c-417c-9594-75650406ea8e.png",
  },
  {
    title: "Monetary Value",
    description:
      "Metaverse avatars are allocated a share of the overall economy within the Metaverse. By giving metaverse avatars strong economic power, we give them genuine and valuable worth.",
    icon: "/assets/image/monetary-system-7644ee84-5a59-4296-99b8-0d72e9fbacff.png",
  },
  {
    title: "Seamless Movements",
    description:
      "Experience smooth and natural lip-syncing and body movements with our 3D avatar modeling. We enhance the user experience by minimizing freezing and through fluid movements.",
    icon: "/assets/image/feature-application-feasibility.png",
  },
];

const blockchainExpertise = [
  {
    title: "Technical Excellence",
    description:
      "Partner with us to utilize the power of metaverse and blockchain technology with minimal costs and effort.",
  },
  {
    title: "Expert Team",
    description:
      "Our team is made up of highly skilled professionals who support product development and drive the success of your business.",
  },
  {
    title: "Customized Solutions",
    description:
      "We offer personalized products designed to cater specifically to your target audience.",
  },
  {
    title: "Enhanced Experience",
    description:
      "We enable an improved experience that creates a deeper understanding of your investment.",
  },
  {
    title: "Post Launch Support",
    description:
      "We are dedicated to providing top-quality upgrades and maintenance services post-deployment, ensuring peak performance at all times.",
  },
];

const faqItems = [
  {
    question: "What are metaverse development services?",
    answer:
      "Metaverse development services involve creating and optimizing digital environments, virtual reality avatars, and experiences within the metaverse.",
  },
  {
    question:
      "What technologies are commonly utilized in metaverse development services?",
    answer:
      "Metaverse development services commonly utilize technologies such as AR avatar development, VR character design, blockchain, artificial intelligence (AI), and 3D modeling to create realistic and interactive virtual spaces.",
  },
  {
    question: "How can businesses benefit from metaverse development services?",
    answer:
      "Businesses can benefit from metaverse development services by expanding their online presence, creating innovative marketing strategies, conducting virtual events, and offering unique customer experiences in the virtual space.",
  },
  {
    question: "How do metaverse development services enhance user experiences?",
    answer:
      "Metaverse development services enhance user experiences by providing realistic simulations, enabling seamless social interactions, and offering immersive environments where users can work, play, and communicate in ways not possible in the physical world.",
  },
  {
    question: "Why should you invest in a Metaverse Platform?",
    answer:
      "Investing in a Metaverse Platform can offer opportunities due to the potential for innovative experiences, expanding virtual economies, and the growing demand for immersive virtual experiences.",
  },
  {
    question: "What are metaverse avatar development services?",
    answer:
      "Metaverse avatar development services include virtual world avatar creation, virtual identity creation, 3D avatar modeling, and avatar animation services to represent users in immersive 3D virtual worlds.",
  },
];

export default function Page() {
  return (
    <div className="bg-white text-[#2f3d4f]">
      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <HeroVideo src="/assets/image/banner_video.mp4" />
        <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />
        <Container className="relative z-10 max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-16 md:py-24">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight">
                Metaverse Avatar Development Company
              </h1>
              <p className="mt-5 text-gray-100 text-base md:text-xl leading-relaxed">
                Explore the world of Metaverse Technology with our range of
                avatar animation services.
              </p>
              <p className="mt-4 text-gray-200 text-sm md:text-lg leading-relaxed">
                Virtual world avatar creation, virtual identity creation, and 3D
                avatar modeling for the immersive 3D virtual world.
              </p>
              <Link href="/contact-us" className="inline-block mt-8">
                <Button variants="action" className="inline-flex items-center">
                  Talk To An Expert
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="w-full max-w-[430px] justify-self-start lg:justify-self-end">
              <form className="rounded-2xl border border-white/35 bg-white/95 backdrop-blur-sm p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <h3 className="text-lg font-semibold text-[#2f3d4f] mb-4">
                  Talk to Our Experts
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
                  />
                  <select className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
                    <option>Services I want*</option>
                  </select>
                  <select className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
                    <option>Product I want*</option>
                  </select>
                  <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3 h-11 transition focus-within:border-[#1cd1a1] focus-within:ring-2 focus-within:ring-[#1cd1a1]/25">
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="w-full text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Enter your message.."
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none resize-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#1cd1a1] to-[#15b999] py-2.5 text-white font-semibold shadow-md shadow-teal-500/30 transition hover:brightness-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro strip */}
      <section className="bg-[#20c7c4] py-10 md:py-12">
        <Container className="max-w-7xl px-4 md:px-8 text-center">
          <h2 className="text-white text-2xl md:text-[40px] font-bold leading-tight tracking-tight max-w-5xl mx-auto">
            Embrace the Future with Metaverse Avatars Development Services!
          </h2>
          <p className="mt-4 text-white/95 text-sm md:text-[16px] leading-relaxed max-w-5xl mx-auto">
            Customize your metaverse avatar to suit your business needs and
            utilize it in the immersive 3D virtual world. Our team of experts
            possesses vast experience in overseeing projects on various
            metaverse avatar development platforms.
          </p>
        </Container>
      </section>

      {/* Avatar Animation Services */}
      <section className="bg-[#f6f7fb] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
            Our Metaverse Avatar Animation Services
          </h2>
          {/* <p className="mt-4 text-[#5d6b82] text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            We offer a range of avatar animation services to elevate your
            presence in the metaverse.
          </p> */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avatarServices.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e3e5ea] bg-white overflow-hidden shadow-sm"
              >
                <div className="relative w-full aspect-[4/3] bg-black">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#1f3f82] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Assist */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            How We Assist in Your Metaverse Development Project
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            From immersive experiences to business opportunities, we help you
            get the most out of your metaverse avatar.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {howWeAssist.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e3e5ea] bg-white p-6 text-center shadow-sm"
              >
                {item.icon && (
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#1f3f82] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
            The Use Cases of Our Metaverse Character Design
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            From VR gaming to virtual healthcare, our avatars power diverse
            experiences across the metaverse.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-[#e3e5ea] bg-white p-6 text-center shadow-sm"
              >
                {item.icon && (
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold leading-tight text-[#1f3f82]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SupportCTA />

      {/* Why Hire Us */}
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            Why Hire Us as Your Metaverse Avatar Development Company?
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            We specialize in a variety of technologies, including the innovative
            world of metaverse and virtual reality.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-square lg:aspect-auto lg:min-h-[400px]">
              <Image
                src="/assets/image/support-2-1-6bba206f-7231-4341-b50b-0f7fe80e04a4.png"
                alt="Metaverse avatar development support"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6 lg:space-y-8">
              {whyHireItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-[#1f3f82] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced Features - 3D Avatar Modeling */}
      <section className="bg-[#f6f7fb] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            Explore the Advanced Features of Our 3D Avatar Modeling
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            From customization to seamless movements, our 3D avatar modeling
            delivers a premium virtual experience.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avatarFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1f3f82] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blockchain expertise */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[46px] font-bold leading-tight text-center">
            We have the expertise and experience to construct a Metaverse
            utilizing decentralized blockchain technology.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockchainExpertise.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-[#e3e5ea] bg-white p-6 text-center transition-all duration-300 cursor-default hover:bg-[#1f3f82] hover:border-[#1f3f82]"
              >
                <h3 className="text-xl font-semibold text-[#1f3f82] leading-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#f2f3f5] py-10 md:py-10">
        <Container className="max-w-7xl px-4 md:px-8">
          <FAQAccordion items={faqItems} />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#eef0f5] py-16 md:py-24">
        <Container className="max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[#2f3d4f] text-3xl md:text-[52px] font-bold leading-tight">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mt-6 text-[#4f5d72] text-sm md:text-[19px] leading-relaxed">
              We believe in creating exceptional digital experiences every time.
              With our professionals, you can rely on acquiring the best for
              yourself and your business.
            </p>
            <Link href="/contact-us" className="inline-block mt-8">
              <Button variants="action" className="inline-flex items-center">
                Talk To Our Experts
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <ContactSection />
    </div>
  );
}

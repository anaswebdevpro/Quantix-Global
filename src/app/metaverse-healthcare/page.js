import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ContactSection from "@/components/Sections/ContactSection";
import SupportCTA from "@/components/Sections/SupportCTA";
import BannerForm from "@/components/Sections/bannerForm";

const healthcareUseCases = [
  {
    title: "Immersive Training and Skill Building",
    description:
      "Use 360-degree videos, 3D visuals, and haptics for cost-effective training, onboarding, and upskilling without time or location limits.",
  },
  {
    title: "Simulated Operation Rooms",
    description:
      "Build safe virtual operation room simulations where trainees and surgeons can test procedures using digital twins.",
  },
  {
    title: "Evolution in Clinical Trials",
    description:
      "Move decentralized clinical trial workflows closer to patients through remote monitoring and reduced geographic barriers.",
  },
  {
    title: "Digital Diagnostics",
    description:
      "Use movement, interaction, and spatial behavior to support digital diagnosis and early detection across multiple conditions.",
  },
  {
    title: "Immersive and Virtual Therapeutics",
    description:
      "Create interactive therapeutic environments that support better patient engagement and improved care outcomes.",
  },
  {
    title: "Virtual Hospitals",
    description:
      "Enable virtual care settings for effective triage, 3D patient context, and stronger doctor-patient communication.",
  },
  {
    title: "Launching Virtual Fitness Programs",
    description:
      "Help institutions launch real-time metaverse fitness programs that keep patients active and consistently engaged.",
  },
  {
    title: "Medical Tourism",
    description:
      "Offer patients a connected, 3D virtual journey across healthcare facilities and integrated insurance touchpoints.",
  },
  {
    title: "Virtual Health Conferences",
    description:
      "Run conferences where global healthcare experts participate and collaborate without physical travel constraints.",
  },
];

const healthcareUseCaseImages = [
  "/assets/image/healthcare-usecase-2.png",
  "/assets/image/healthcare-usecase-3.png",
  "/assets/image/healthcare-usecase-4.png",
  "/assets/image/healthcare-usecase-5.png",
  "/assets/image/healthcare-usecase-6.png",
  "/assets/image/healthcare-virtual-hospitals.png",
  "/assets/image/healthcare-usecase-last-1.png",
  "/assets/image/healthcare-usecase-last-2.png",
  "/assets/image/healthcare-usecase-last-3.png",
];

const supportItems = [
  {
    title: "Offering More Integrated Treatment",
    icon: "/assets/image/support-virtual-reality.png",
    description:
      "Healthcare service providers can give more integrated therapy in metaverse health due to proper fragmentation, which is not the case in the current healthcare system.",
  },
  {
    title: "Speedy Sharing of Information",
    icon: "/assets/image/support-collaborate.png",
    description:
      "Metaverse accelerates the pace of information exchange across all individuals participating in patient care, enabling for the rapid diagnosis of the reasons of patients' health issues.",
  },
  {
    title: "Facilitating Patient Comfort",
    icon: "/assets/image/support-ongoing.png",
    description:
      "Telemedicine provides patients with more comfort and convenience since it eliminates the need to physically visit doctor, while also creating a real-time atmosphere through a virtual encounter.",
  },
  {
    title: "Improvement in Communication",
    icon: "/assets/image/support-access.png",
    description:
      "Metaverse allows patients to communicate body language and facial emotions with healthcare practitioners, resulting in significantly greater communication between them.",
  },
];

const serviceItems = [
  {
    title: "Consulting Services",
    icon: "/assets/image/service-consulting.png",
    description:
      "Get accurate information about healthcare app solutions in the web 3.0 era, development process, time and cost estimation from our team of professionals.",
  },
  {
    title: "Decentralized Finance (DeFi)",
    icon: "/assets/image/service-defi.png",
    description:
      "Our DeFi platform solution is designed to help healthcare organizations manage their funds while maintaining top security, interoperability, and privacy.",
  },
  {
    title: "Payment Integration",
    icon: "/assets/image/service-payment.png",
    description:
      "Upscale your payment experience with our crypto wallet development solutions and other secure payment gateways.",
  },
  {
    title: "Automated Insurance",
    icon: "/assets/image/service-insurance.png",
    description:
      "Ease the claim process, generate automated insurance quotes, and enhance back-end processes with decentralized AI insurance software services.",
  },
  {
    title: "Blockchain Integration",
    icon: "/assets/image/service-blockchain.png",
    description:
      "Upgrade your healthcare services with seamless blockchain integration for better trust, security, and interoperability.",
  },
  {
    title: "App for Virtual Training",
    icon: "/assets/image/service-virtual-training.png",
    description:
      "We use cutting-edge technologies such as AR and VR to create metaverse-based platforms for immersive healthcare training.",
  },
];

const processSteps = [
  {
    title: "Clarify Your Perspective",
    description:
      "The first step is to clarify your perspective on how the metaverse can benefit your healthcare organization. We work closely with you to understand your goals, requirements, and vision for the project.",
    image: "/assets/image/process-clarify.png",
    imageSide: "left",
  },
  {
    title: "Discovery Phase",
    description:
      "The next step is the discovery phase, where we conduct a detailed analysis of your organization’s needs and goals. We use this information to develop a customized metaverse solution that aligns with your vision and requirements.",
    image: "/assets/image/process-discovery.png",
    imageSide: "right",
  },
  {
    title: "Design and Development",
    description:
      "Our team of experts then designs and develops the metaverse solution, using the latest technologies and best practices. We ensure that the solution is user-friendly, scalable, and meets the highest standards of quality.",
    image: "/assets/image/process-design.png",
    imageSide: "left",
  },
  {
    title: "Testing and Evaluation",
    description:
      "We conduct thorough testing and evaluation of the metaverse solution to ensure that it meets the highest standards of quality and functionality. We identify any areas for improvement and provide feedback to enhance the user experience.",
    image: "/assets/image/process-testing.png",
    imageSide: "right",
  },
  {
    title: "Deployment and Ongoing Support",
    description:
      "Once the metaverse solution is ready, we provide ongoing support and maintenance to ensure its smooth performance and functionality. We are committed to ensuring that the solution meets your organization’s needs and requirements.",
    image: "/assets/image/process-deployment.png",
    imageSide: "left",
  },
];

const whyChooseItems = [
  {
    title: "Expertise in Metaverse Healthcare Solutions",
    icon: "/assets/image/why-metaverse-healthcare-solutions.png",
    description:
      "We have extensive experience and expertise in developing metaverse solutions specifically for the healthcare industry. Our team understands unique sector challenges and delivers innovative, effective solutions.",
  },
  {
    title: "Unlimited Potential for Healthcare Transformation",
    icon: "/assets/image/why-healthcare-potential.png",
    description:
      "The metaverse can transform healthcare by creating additional dimensions for doctors and patients to interact beyond physical-world constraints like location and time.",
  },
  {
    title: "Enhanced Patient Care and Access",
    icon: "/assets/image/why-enhanced-care.png",
    description:
      "Metaverse technology enables more personalized and convenient care. Through virtual spaces, patients can interact with doctors, discuss symptoms, and receive guidance from home.",
  },
  {
    title: "Immersive Training and Education",
    icon: "/assets/image/why-immersive-training.png",
    description:
      "Our healthcare metaverse solutions provide immersive training experiences by replicating real-world scenarios, helping improve medical education and outcomes.",
  },
  {
    title: "Privacy and Security Considerations",
    icon: "/assets/image/why-privacy-security.png",
    description:
      "We design metaverse solutions with robust privacy controls to protect sensitive medical information and ensure compliance with healthcare regulations.",
  },
];

const roleInHealthcareItems = [
  {
    title: "Metaverse Healthcare Solutions",
    description:
      "We offer advanced metaverse healthcare solutions that can be used for teaching and training students and professionals on complex medical scenarios.",
  },
  {
    title: "Collaborative Treatment",
    description:
      "Our services allow healthcare professionals to deliver more collaborative treatment options to their patients, improving the overall quality of care.",
  },
  {
    title: "High-Quality Development Services",
    description:
      "We ensure the highest quality development services and solutions by using a wide range of the latest technologies. Our certified and experienced team is committed to delivering quality-rich healthcare services blended perfectly with emerging technologies.",
  },
  {
    title: "Timely Delivery of Services",
    description:
      "We have a team of professionals who are punctual and value your time. They are committed to serving you with quality-rich healthcare services blended perfectly with emerging technologies within the decided time frames.",
  },
  {
    title: "Metaverse Solutions for Core Healthcare Practices",
    description:
      "We provide metaverse solutions that can transform health delivery and assist core healthcare practices. By coupling metaverse with other trending technologies, we can help healthcare professionals and organizations access the potential of the metaverse.",
  },
];

const faqColumns = {
  left: [
    {
      question:
        "How can metaverse healthcare app development services benefit healthcare organizations?",
      answer:
        "Metaverse healthcare app development services can benefit healthcare organizations by providing customized solutions for medical education and training, remote consultations, patient instruction and engagement, and virtual care. These solutions enhance patient care, improve efficiency, and offer personalized and convenient healthcare experiences.",
    },
    {
      question:
        "How can metaverse solutions improve healthcare funding management?",
      answer:
        "Metaverse solutions can help in the proper management of healthcare funds by providing decentralized finance (DeFi) platforms that ensure top security, interoperability, and privacy. These platforms enable transparent and efficient financial transactions within the healthcare ecosystem.",
    },
    {
      question:
        "How can metaverse services contribute to strategic planning in the healthcare industry?",
      answer:
        "Metaverse services are increasingly becoming a significant area of the healthcare industry. They offer valuable insights and strategies for effective planning and implementation, contributing to long-term vision and strategic planning in the healthcare sector.",
    },
  ],
  right: [
    {
      question: "What is the potential of the metaverse in healthcare?",
      answer:
        "The potential of the metaverse in healthcare is vast, with the ability to make healthcare services more patient-friendly, accessible, and convenient. It has the potential to transform the way healthcare is delivered and improve patient outcomes.",
    },
    {
      question: "What are the use cases of metaverse in healthcare?",
      answer:
        "The use cases of metaverse in healthcare include immersive medical training, remote consultations, patient education, virtual care, and blockchain integration for enhanced security and interoperability.",
    },
    {
      question: "What type of problems metaverse can solve?",
      answer:
        "The metaverse provides a shared digital environment where people can interact beyond many physical limits. In healthcare, it helps address challenges around access, training, collaboration, and engagement by enabling immersive and connected experiences.",
    },
  ],
};

export default function Page() {
  return (
    <div className="bg-white text-[#2f3d4f]">
      {/* Hero */}
      <section
        className="relative min-h-[72vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/image/metaverse-healthcare-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="relative z-10 max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-16 md:py-24">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight">
                Metaverse In The Healthcare Industry
              </h1>
              <p className="mt-5 text-gray-100 text-base md:text-xl leading-relaxed">
                Explore the realm of the Healthcare Metaverse
              </p>
              <p className="mt-4 text-gray-200 text-sm md:text-lg leading-relaxed">
                Let quantix global expertise help you uncover the true dormant
                of Metaverse in Healthcare.
              </p>
              <Link href="/contact-us" className="inline-block mt-8">
                <Button variants="action" className="inline-flex items-center">
                  Talk To An Expert
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <BannerForm />
          </div>
        </Container>
      </section>

      {/* Intro heading */}
      <section className="bg-[#20c7c4] py-10 md:py-12">
        <Container className="max-w-7xl px-4 md:px-8 text-center">
          <h2 className="text-white text-2xl md:text-[40px] font-bold leading-tight tracking-tight max-w-5xl mx-auto">
            Power Of The Metaverse - Transforming Healthcare
            <br className="hidden md:block" /> Solutions With quantix global
          </h2>
          <p className="mt-4 text-white/95 text-sm md:text-[16px] leading-relaxed max-w-5xl mx-auto">
            quantix global is leading the way in using Metaverse Technology to
            transform healthcare solutions. Join us to know how quantix global
            is leading the charge in transforming healthcare solutions by using
            this technology!
          </p>
        </Container>
      </section>

      {/* Use cases */}
      <section className="bg-[#f6f7fb] py-16 md:py-20">
        <Container className="max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
            Metaverse Empowering The Healthcare Industry
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            The possibilities of a metaverse in healthcare are vast, and the
            industry can undoubtedly profit from them. Let us briefly discuss
            what the metaverse has to offer the healthcare industry.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareUseCases.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden border border-[#e3e5ea] bg-[#f6f7fa] shadow-sm"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src={
                      healthcareUseCaseImages[index] ??
                      healthcareUseCaseImages[
                        healthcareUseCaseImages.length - 1
                      ]
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-5 text-center">
                  <h3 className="text-2xl font-semibold leading-tight text-[#1f3f82]">
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

      {/* Support */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            How We Support Your Metaverse In Healthcare Project
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            Our company is dedicated to supporting your metaverse in healthcare
            projects by providing the following assistance:
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e3e5ea] bg-[#f6f7fa] p-6 text-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="w-20 h-20 mx-auto object-contain"
                />
                <h3 className="mt-4 text-2xl font-semibold text-[#1f3f82] leading-tight">
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

      {/* Services */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            Metaverse Healthcare App Development Services
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-6xl mx-auto">
            Leverage the potential of our amazing Metaverse Healthcare App
            Development Services, which are accessible across all platforms. Our
            business-specific services include the following.
          </p>
          <div className="mt-10 rounded-xl border border-[#d9dde6] bg-[#f6f7fa] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 md:p-8 text-center border-[#d9dde6] ${
                    index > 0 ? "border-t" : ""
                  } ${index < 2 ? "md:border-t-0" : "md:border-t"} ${
                    index % 2 === 1 ? "md:border-l" : "md:border-l-0"
                  } ${index < 3 ? "lg:border-t-0" : "lg:border-t"} ${
                    index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="w-20 h-20 mx-auto object-contain"
                  />
                  <h3 className="mt-4 text-2xl font-semibold text-[#1f3f82] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#4f5d72] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/contact-us">
              <Button
                variants="action"
                className="inline-flex items-center px-9"
              >
                Talk To An Expert
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <SupportCTA />

      {/* Process */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            Our Development Process
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            Our metaverse in healthcare development process is designed to
            deliver innovative and effective solutions transform healthcare.
            Here are the steps we follow:
          </p>
          <div className="mt-12 space-y-12 md:space-y-16">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                <div
                  className={`flex justify-center ${
                    step.imageSide === "right"
                      ? "lg:order-2 lg:justify-end"
                      : "lg:order-1 lg:justify-start"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={500}
                    className="w-full max-w-[320px] md:max-w-[430px] h-auto object-contain"
                  />
                </div>
                <div
                  className={`max-w-2xl ${
                    step.imageSide === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-3xl md:text-[46px] font-bold leading-tight text-[#2f3d4f]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[#4f5d72] text-sm md:text-[20px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose section */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] font-bold leading-tight text-center">
            Why Choose Webcom For Your Metaverse In Healthcare Project?
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">
            Webcom is one of the most trusted, reputed, and reliable providers
            of metaverse healthcare development services and solutions that are
            perfect to meet the varied needs of businesses.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {whyChooseItems.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-xl border border-[#e3e5ea] bg-[#f6f7fa] p-6 md:p-8 text-center lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : ""
                } ${index === 4 ? "lg:col-start-4" : ""}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="w-20 h-20 mx-auto object-contain"
                />
                <h3 className="mt-4 text-2xl font-semibold text-[#1f3f82] leading-tight">
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

      {/* Role of metaverse section */}
      <section className="bg-[#f6f7fb] py-14 md:py-16">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-[42px] font-bold leading-tight text-center">
            Role Of Metaverse In Healthcare Development
          </h2>
          <p className="mt-3 text-[#5d6b82] text-center text-xs md:text-base leading-relaxed max-w-4xl mx-auto">
            We are a metaverse healthcare development company that provides
            differentiated services to healthcare professionals and
            organizations. Our services include:
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {roleInHealthcareItems.map((item, index) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-[#e3e5ea] bg-[#f6f7fa] p-5 md:p-6 text-left shadow-sm transition-all duration-300 hover:bg-[#1f3f82] hover:border-[#1f3f82] hover:shadow-lg lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : ""
                } ${index === 4 ? "lg:col-start-4" : ""}`}
              >
                <h3 className="text-xl md:text-[30px] font-semibold text-[#1f3f82] leading-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4f5d72] text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#e7edff]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ section */}
      <section className="bg-[#efeff1] py-16 md:py-20">
        <Container className="max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-[52px] font-bold leading-tight text-center">
            Frequently Asked Questions(FAQs)
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div className="space-y-4">
              {faqColumns.left.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-sm border border-[#e7e8ec] bg-[#f7f8fa] px-5 py-4 shadow-sm"
                >
                  <summary className="flex items-start gap-3 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <span className="mt-0.5 text-[#1ccfc1] text-2xl leading-none font-medium">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                    <span className="text-[#2f3d4f] text-[22px] font-semibold leading-tight">
                      {item.question}
                    </span>
                  </summary>
                  <p className="mt-5 pl-8 text-[#4f5d72] text-sm md:text-[18px] leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="space-y-4">
              {faqColumns.right.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-sm border border-[#e7e8ec] bg-[#f7f8fa] px-5 py-4 shadow-sm"
                >
                  <summary className="flex items-start gap-3 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <span className="mt-0.5 text-[#1ccfc1] text-2xl leading-none font-medium">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                    <span className="text-[#2f3d4f] text-[22px] font-semibold leading-tight">
                      {item.question}
                    </span>
                  </summary>
                  <p className="mt-5 pl-8 text-[#4f5d72] text-sm md:text-[18px] leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
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
              yourself and your healthcare business.
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

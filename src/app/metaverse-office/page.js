import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import ContactSection from "@/components/Sections/ContactSection";
import SupportCTA from "@/components/Sections/SupportCTA";
import Button from "@/components/ui/button";
import Stats from "@/components/Sections/Stats";

const workspaceFeatures = [
  {
    title: "Collaborative Platform",
    icon: "/assets/image/feature-collaborative-platform.png",
    description:
      "Our virtual office uses a collaborative workspace for an immersive, engaging experience where employees can communicate with each other in real-time through avatars.",
  },
  {
    title: "NFT Incentives",
    icon: "/assets/image/feature-nft-incentives.png",
    description:
      "Our team of experts facilitates employers to use crypto tokens in the workplace. This allows employees to get rewarded for their work and recognized for it.",
  },
  {
    title: "Highly Anticing Environment",
    icon: "/assets/image/feature-highly-anticing-environment.png",
    description:
      "Metaverse virtual office development offers a highly captivating environment that enables the staff to conveniently participate in all office activities with 3D modeling and virtual conference design.",
  },
  {
    title: "Decentralized Network",
    icon: "/assets/image/feature-decentralized-network.png",
    description:
      "Metaverse is a virtual office platform that connects different types of businesses and offers a wide range of communication tools.",
  },
  {
    title: "Application Feasibility",
    icon: "/assets/image/feature-application-feasibility.png",
    description:
      "Some of the benefits include a smart 3D experience, instant assistance, a user-friendly interface as well as censorship resistance.",
  },
  {
    title: "High Scalability",
    icon: "/assets/image/feature-high-scalability.png",
    description:
      "Metaverse Virtual Work Space's enhanced scalability has made seamless working processes and workload management hassle-free.",
  },
];

const workspaceBenefitColumns = [
  {
    items: [
      {
        title: "Better Scalability",
        description:
          "Since metaverse workspaces may easily expand or compress virtual space to accommodate shifting market conditions, they offer excellent scalability and agility.",
      },
      {
        title: "Increase Productivity",
        description:
          "When equipped with all the necessary elements, virtual office settings may accurately replicate the dynamics of a real office. Employees are better able to concentrate and reduce distractions in a specialized virtual workplace.",
      },
    ],
  },
  {
    items: [
      {
        title: "Discover Talent Worldwide",
        description:
          "Access to global talent is made possible via a virtual workplace in the metaverse that enables teams to operate seamlessly from any location in the world.",
      },
      {
        title: "Worker Contentment",
        description:
          "Since working digitally allows teams to avoid commuting and spend more family time, it is often more satisfying for employees.",
      },
    ],
  },
  {
    items: [
      {
        title: "Frugal Choice",
        description:
          "Development of a metaverse virtual office is an affordable alternative since it eliminates the need to pay for physical office setup and all associated costs.",
      },
    ],
  },
];

const meetingSteps = [
  "Event organizers share a sign-up link with all participants.",
  "At meeting time, participants join through a sign-in flow and create avatars.",
  "Connectivity and device readiness are verified before entering the virtual space.",
  "Inside the conference, teams collaborate, network, and engage in real-time sessions.",
  "Participants can explore multiple interaction spaces while waiting for sessions to begin.",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative min-h-[68vh] overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/Banner-1-1-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative z-10 max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl py-24 md:py-36">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Metaverse Virtual Office Development
            </h1>
            <p className="mt-5 text-gray-200 text-base md:text-xl leading-relaxed max-w-2xl">
              Incorporate our next-generation workspace solutions with
              contemporize metaverse spaces, and engage your employees in a
              remote yet real-time work environment.
            </p>
            <Link href="/contact-us" className="inline-block mt-8">
              <Button variants="action" className="inline-flex items-center">
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-6xl px-4 md:px-6">
          <div className="bg-[#f3f5fb] border-l-[6px] border-[#2f4aa0] px-6 py-8 md:px-12 md:py-10">
            <h2 className="text-[#2f3d4f] text-2xl md:text-[42px] font-bold leading-tight">
              Voyaging the Future of Work; Metaverse Virtual Working Space
            </h2>
            <p className="mt-5 text-[#5d6b82] text-sm md:text-[21px] leading-relaxed">
              Metaverse is transforming the concept of the workplace, while
              showcasing new prospects and challenges. Businesses may improve
              employee engagement, training, and cooperation in ways never seen
              before by embracing this digital frontier.
            </p>
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <h2 className="text-[#2f3d4f] text-2xl md:text-[38px] font-bold leading-tight">
              Metaverse Virtual Office Development Company
            </h2>
            <p className="mt-4 text-[#5d6b82] text-base md:text-[20px] leading-relaxed">
              Revamp your workspaces and create a digital beautiful working
              space with our trusted metaverse working space development
              services.
            </p>
          </div>
        </Container>
      </section>

      {/* Explanatory sections */}
      <section className="py-8 md:py-10">
        <Container className="max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold leading-tight">
                Navigating Through Metaverse
              </h2>
              <p className="mt-4 text-[#5d6b82] text-base md:text-lg leading-relaxed">
                The metaverse integrates virtual reality (VR), augmented reality
                (AR), and the internet to create immersive settings in which
                physical and virtual realities coexist. In workplace scenarios,
                this means attending virtual meetings, collaborating in real
                time from anywhere, and improving training through simulations.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:order-1">
              <Image
                src="/assets/image/metaverse-navigating.png"
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
                How will the Metaverse change the way we work?
              </h2>
              <p className="mt-4 text-[#5d6b82] text-base md:text-lg leading-relaxed">
                The metaverse can transform how teams live, work, and interact.
                Teams can meet in immersive spaces, collaborate across borders,
                and build digital-first workflows that reduce operational
                friction while increasing engagement.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/image/metaverse-change-work.png"
                alt="Metaverse virtual workspace illustration"
                width={695}
                height={401}
                className="w-full max-w-[380px] md:max-w-[520px] h-auto object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-[#eef0f5] py-16 md:py-20">
        <Container className="max-w-6xl px-4 md:px-6">
          <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold text-center leading-tight">
            Metaverse Working Space Features
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-[#5d6b82] text-center text-base md:text-lg leading-relaxed">
            Explore some of the amazing features that our very talented team of
            metaverse professionals has created for your working place.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {workspaceFeatures.map((feature) => (
              <div key={feature.title} className="p-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="w-12 h-12 object-contain shrink-0"
                  />
                  <h3 className="text-[#1f3f82] text-2xl font-semibold leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-3 text-[#3f4857] text-sm md:text-[17px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-[#eef0f5] py-16 md:py-20">
        <Container className="max-w-6xl px-4 md:px-6">
          <h2 className="text-[#2f3d4f] text-3xl md:text-4xl font-bold text-center leading-tight">
            Benefits of Metaverse Working Space Development
          </h2>
          <p className="mt-4 text-[#5d6b82] text-center text-base md:text-lg leading-relaxed">
            Metaverse working space development comes with some amazing benefits
            that are listed below.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaceBenefitColumns.map((column, index) => (
              <div
                key={`benefit-column-${index}`}
                className="group rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 bg-[#f7f8fb] text-[#2f3d4f] hover:bg-[#1f3f82] hover:text-white"
              >
                {column.items.map((benefit) => (
                  <div key={benefit.title} className="mb-6 last:mb-0">
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-[#4f5d72] group-hover:text-white/95">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Meeting process */}
      <section className="bg-[#eef0f5] py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full">
          <div className="relative min-h-[300px] md:min-h-[420px]">
            <Image
              src="/assets/image/metaverse-virtual-meeting-work.png"
              alt="Virtual meeting in metaverse"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#1f468b] text-white px-8 py-10 md:px-12 md:py-12">
            <h2 className="text-3xl md:text-[46px] font-bold leading-tight">
              Virtual Meetings In Metaverse: How It Works?
            </h2>
            <ul className="mt-8 space-y-4">
              {meetingSteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
                  <p className="text-white/95 text-base md:text-[20px] leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#eef0f5] py-16 md:py-24">
        <Container className="max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[#2f3d4f] text-3xl md:text-[52px] font-bold leading-tight">
              Ready To Be A Part Of The Future Work?
            </h2>
            <p className="mt-6 text-[#4f5d72] text-sm md:text-[19px] leading-relaxed">
              The future of the work is with quantix global!
              <br />
              We could be your Metaverse working Space development trusted
              partner paving the way for the development of exquisite virtual
              workspaces that will undoubtedly revolutionize remote working in
              general.
            </p>
          </div>
        </Container>
      </section>

      <Stats />

      <ContactSection />
    </div>
  );
}

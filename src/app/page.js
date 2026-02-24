"use client";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Services from "@/components/Sections/Services";
import Process from "@/components/Process";
import TechStack from "@/components/Sections/TechStack";
import Industries from "@/components/Industries";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";
import ContactSection from "@/components/Sections/ContactSection";

const introItems = [
  { title: "E-learning", icon: "/assets/image/elearning-1.png" },
  { title: "Banking & Finance", icon: "/assets/image/Banking-Finance-1.png" },
  { title: "Online shopping", icon: "/assets/image/Online-shopping-1.png" },
  { title: "Healthcare", icon: "/assets/image/Healthcare-1.png" },
  { title: "Cybersecurity", icon: "/assets/image/Cybersecurity-1.png" },
  { title: "Travel", icon: "/assets/image/Travel-1.png" },
  { title: "Online Music", icon: "/assets/image/Online-Music-1.png" },
  { title: "Online Movies", icon: "/assets/image/Online-Movies-1.png" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection
        heading={<>About Us</>}
        text={
          <div className="space-y-4">
            <span className="block font-bold text-gray-800 text-2xl mb-4">
              Building the Future of Digital Innovation
            </span>
            <p className="leading-relaxed">
              <strong>Avner Global Inc.</strong> is a forward-thinking
              blockchain and digital solutions company headquartered in{" "}
              <b>Calgary, Alberta, Canada</b>. We specialize in delivering
              secure, scalable, and enterprise-grade Web3 and software
              development solutions that empower businesses to thrive in the
              rapidly evolving digital economy.
            </p>
            <p className="leading-relaxed pt-2">
              Founded with a vision to bridge the gap between emerging
              technologies and real-world business needs, Avner Global combines
              deep technical expertise with strategic insight to help
              organizations innovate with confidence. From startups exploring
              blockchain adoption to established enterprises modernizing their
              infrastructure, we provide end-to-end technology solutions
              tailored for measurable impact.
            </p>
          </div>
        }
        items={introItems}
      />
      <Services />
      <Process />
      <TechStack />
      <Industries />
      <Stats />
      <Testimonials />
      <ContactSection />
    </>
  );
}

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
        heading={
          <>
            Avner Global- Building Blockchain <br /> Solutions For Businesses
          </>
        }
        text={
          <>
            In the dynamic world of technology,{" "}
            <strong className="font-bold text-gray-800">Avner Global</strong>{" "}
            has emerged as a trailblazer in providing innovative blockchain
            solutions tailored for businesses. With a mission to harness the
            transformative potential of blockchain technology, Avner Global has
            positioned itself as a leading player in the industry, offering a
            range of services designed to enhance efficiency, security, and
            transparency. <br /> <br />
            <strong>Blockchain technology,</strong> known for its decentralized
            and immutable nature, is revolutionizing the way businesses operate.{" "}
            <strong>Avner Global</strong> leverages this technology to create
            customized solutions that address the unique challenges faced by
            various industries. From supply chain management and finance to
            healthcare and real estate, the applications of blockchain are vast
            and varied.
          </>
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

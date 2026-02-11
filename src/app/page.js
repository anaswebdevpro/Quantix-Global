import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
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

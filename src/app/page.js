import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Services from "@/components/Sections/Services";
import Process from "@/components/Process";
import TechStack from "@/components/Sections/TechStack";
import Industries from "@/components/Industries";
import Stats from "@/components/Sections/Stats";
import Testimonials from "@/components/Sections/Testimonials";
import ContactSection from "@/components/Sections/ContactSection";

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

"use client";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import Container from "@/components/ui/container";
import ContactSection from "@/components/Sections/ContactSection";
import FAQAccordion from "@/components/Sections/FAQAccordion";
import { motion } from "framer-motion";
import { Calendar, Globe, MessageSquare } from "lucide-react";
import SupportCTA from "@/components/Sections/SupportCTA";

const faqs = [
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can get a quote by filling out our contact form or by emailing us directly with your project requirements. Our experts will review your needs and get back to you with a detailed proposal.",
  },
  {
    question: "What is the typical response time?",
    answer:
      "We usually respond to all inquiries within 24-48 business hours. For urgent matters, you can reach out to us via our contact numbers.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we provide initial consultations to understand your project scope and discuss how our services can align with your business goals.",
  },
  {
    question: "Where are your offices located?",
    answer:
      "Our registered office is in Calgary, Alberta, Canada. We also serve clients globally through our distributed team of experts.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-44 pb-32 overflow-hidden bg-[#153577]"
        style={{
          backgroundImage: `url('/assets/image/contact-us.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-[#153577]/70"></div> */}
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading className="text-white mb-6">Get in Touch</Heading>
            <p className="text-gray-100 text-lg md:text-xl max-w-2xl  leading-relaxed">
              Have a question or a project in mind? We'd love to hear from you.
              Reach out to our technology experts and let's start building
              something amazing together.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Discovery Call Section */}
      <SupportCTA />

      {/* FAQs Section */}
      <FAQAccordion items={faqs} />
    </>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import SupportCTA from "@/components/SupportCTA";

const features = [

    
  {
    title: "Wireframes for Web Applications",
    desc: "This is a visually creative process where a base plan is devised through making wireframes. It displays the basic architecture of the web application. These wireframes are the pictorial illustration of the general structure of a web application, demonstrating the complexities and levels of architecture to the client.",
  },
  {
    title: "Logo Designing",
    desc: "We are updated on the latest trends to design a logo that is reflective of the respective company’s aims and personality. The logos are an intricate combination of just the right amount of colors, negative space, proportion and consistency. Our logo designing ideation is uniquely based on the client’s personal reflection of their business.",
  },
  {
    title: "Mobile Apps Designing",
    desc: "As per the market needs, our mobile apps are wholly receptive with delightful yet easily comprehensible features. As a chief product strategy, along with bewitching design, we pay equal focus on UX. For a mobile app to be successful these are crucial aspects which we never miss.",
  },
  {
    title: "Packaging Designing",
    desc: "The packaging designs are easy to understand and use. They are hassle-free yet product friendly – all in one solution to attract the customer’s attention. Not only it encourages more sale, but also induces a post-purchase brand loyalty.",
  },
  {
    title: "Email Template Designing",
    desc: "We design custom email templates to make the company more approachable. The key to a successful email facility is a captivating design. By adding a special human approach we drive more engagement, resulting in elevated value of the company.",
  },
  {
    title: "Brand Campaigns & Application",
    desc: "Before releasing the messages we created for your brand campaigns, the goals and aims are pre-set. They are specifically designed to shake your users and targeted consumers. Only after setting up of these goals we go ahead with link building.",
  },


];

export default function GraphicDesigning() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 text-white h-auto md:h-[90vh] flex items-center bg-[#153577]"
        style={{
          backgroundImage: "url('/assets/image/banner-service.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "",
        }}
      >
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
              <Heading className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#09d0c6]">Graphic</span> Designing{" "}
                <br />
              </Heading>
              <SubHeading className="text-gray-200 text-base md:text-lg leading-relaxed">
             Graphic designing is a key variable of our multifold web-based explications where we listen to the client and thoroughly process their requirements to produce bold, creative and superior quality graphic solutions.
              </SubHeading>
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us">
                  <button className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#153577] transition-all duration-300 flex items-center gap-2 font-semibold">
                    Let's Discuss
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
              <div className="relative w-full aspect-[4/3] md:h-[500px]">
                <Image
                  src="/assets/image/graphicbanner.png"
                  alt="Website Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50/50">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <SectionHeading className="mx-auto">Our Services</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col items-start"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#333d47] mb-3 group-hover:text-[#09d0c6] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <SupportCTA />

      {/* Process/Info Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/assets/image/graphic-designing.jpg"
                  alt="Web Design Company"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <SectionHeading className="mb-6 text-2xl md:text-4xl">
                Web Development Company
              </SectionHeading>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Quantix Global proffers alluring, cost-efficient web design
                solutions for organizations ranging from small-scale to
                flourishing, large-scale enterprises. The solutions extend from
                alternatives such as HTML to CSS to Jquery to provide our
                clients with the best in the market. We are one of the top web
                development company in the industry.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                Web development, unlike the misconception built by people, is
                much more than textures and attractive graphics. It involves
                user experience, interface design, and search engine
                optimization to ensure your website not only looks good but
                performs well.
              </p>
              <Link href="/contact-us">
                <Button variants="outline" className=" text-black border-black">
                  Start Project
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Stats/>
     <Testimonials/>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

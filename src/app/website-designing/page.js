"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubHeading } from "@/components/ui/subheading";
import ContactSection from "@/components/Sections/ContactSection";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import SupportCTA from "@/components/Sections/SupportCTA";

const features = [
  {
    title: "PSD To HTML5",
    desc: "Our experts specialize in remoulding files from PSD to HTML5. Photoshopped files are transformed into design files in well-tabbed, W3C validated compatible HTML5 markups, which further enhances the final outcome of the process.",
    icon: "/assets/image/html5.png",
  },
  {
    title: "Impressionable Designs",
    desc: "Along with having years of experience, what Quantix Global carries is a will to satisfy its clients and their requirements/ expectations of the website. We create impressionable content as we dive into various aspects of presentation, appearance, and innovation.",
    icon: "/assets/image/Aesthetically-Designed-Website.png",
  },
  {
    title: "Css3 & Animations",
    desc: "With ample awareness of software and applications, Quantix Global seems to specialize in CSS3 as well. Indulging animations and expressions in the site via Css3, we intend to vocalise the client’s aspirations to fetch healthy business and escalate the viewership of the site.",
    icon: "/assets/image/css.png",
  },
  {
    title: "Sass/LESS Application",
    desc: "Quantix Global constitute of SaaS and LESS Application specialists, who further ensures the best solution for your website and business.",
    icon: "/assets/image/sassless.png",
  },
  {
    title: "Click Funnel, Wix & Unbounce Templates",
    desc: "We are associated with top-notch template providers and firms to provide our clients with their tailored templates, to escalate their business, reach and profits.",
    icon: "/assets/image/Landing-page-design.png",
  },
  {
    title: "Kendo UI & Angular.js",
    desc: "Both of these tools enable us to instantly build a structured layout, as it is the most renowned Javascript frameworks and specialists in Quantix Global integrate it well for best results.",
    icon: "/assets/image/angularjs1.png",
  },
];

export default function WebsiteDesigning() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 text-white h-auto md:h-[90vh] flex items-center bg-[#153577]"
        style={{
          backgroundImage: "url('/assets/image/banner-service.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
              <Heading className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#09d0c6]">Website</span> Designing <br />
                Company
              </Heading>
              <SubHeading className="text-gray-200 text-base md:text-lg leading-relaxed">
                Web designing intends to revolutionize the layout and graphics
                of your website. The team works its skill-set to furnish your
                site in a way that escalates the page’s accessibility,
                portability, and scalability. Our crew consists of specialist
                developers and designers, working their magic round the clock to
                ensure cost-efficiency, creativity, and innovation.
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
                  src="/assets/image/Web_design_1.png"
                  alt="Website Designing"
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
                <div className="mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 rounded-full bg-blue-50 group-hover:bg-[#09d0c6]/10 transition-colors">
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
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
                  src="/assets/image/Website-Designing.jpg"
                  alt="Web Design Company"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <SectionHeading className="mb-6 text-2xl md:text-4xl">
                Web Design Company
              </SectionHeading>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Quantix Global proffers alluring, cost-efficient web design
                solutions for organizations ranging from small-scale to
                flourishing, large-scale enterprises. The solutions extend from
                alternatives such as HTML to CSS to Jquery to provide our
                clients with the best in the market. We are one of the top web
                designing company in the industry.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                Web designing, unlike the misconception built by people, is much
                more than textures and attractive graphics. It involves user
                experience, interface design, and search engine optimization to
                ensure your website not only looks good but performs well.
              </p>
              <Link href="/contact-us">
                <Button variants="action" className="px-8">
                  Start Project
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

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
    title: "Search Engine Optimization (SEO)",
    desc: "Our understanding of SEO has been gained through years of experience, which will be dispensed to elevate you into top-ranking brands online in no time. The experts working with us have an in-depth knowledge of keywords to precisely add the words that will bring the maximum potential customers to you. Our SEO strategies will enable you to attract free and organic traffic, bringing your website to the limelight of the market.",
  },
  {
    title: "Paid Advertising/Pay per Click (PPC)",
    desc: "Our creative PPC advertisements will give you the best of both worlds by putting your prominent marketing goals into one piece and bringing it forth in a cost-effective manner. Our digital marketing professionals go through tremendous industrial research to create an innovative advertisement that fascinates and informs the viewer while also compressing the maximum marketing budget at every click on the advertisement.",
  },
  {
    title: "Social Media Marketing",
    desc: "This prominently budget-friendly and safest marketing platform is utilized strategically to surge your brand awareness along with continuous lead generation for your business. We only indulge in ethical and 100% successful techniques using tried and tested creative tools to promote your business goals on every level, bringing you an up surged conversion rate.",
  },
  {
    title: "Email Marketing",
    desc: "Timely and interesting email campaigns will keep you connected with your audience to successfully promote content, discounts, and activities, as it also progresses the receivers towards your business website. Our cost-effective email marketing strategies are completely customized as per the client by aiming at their potential consumer base only.",
  },
  {
    title: "Conversion Optimization",
    desc: "To study the movement of users on our website, we indulge in qualitative research, quantitative research, and competitive analysis, to analyze their behavioral patterns. The results will provide a direction regarding our future strategies to influence the micro and macro conversion rate.",
  },
  {
    title: "Online Reputation Management (ORM)",
    desc: "Our ORM strategies are specifically tailored for you to ensure that your audiences find the right material and information when the search your brand online. We are specialized in keeping your best interests by maintaining balance to assist you in engaging the highest endeavors and keep away from toxic trends.",
  },

];

export default function DigitalMarketing() {
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
                <span className="text-[#09d0c6]">Digital</span> Marketing{" "}
                <br />
              </Heading>
              <SubHeading className="text-gray-200 text-base md:text-lg leading-relaxed">
             Our team comprises of industry experienced professionals who will bring forth the best digital marketing strategies to assist you in telling the story of your brand in order to connect with your audience. Your future success is our vision.
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
                  src="/assets/image/digimarket.png"
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
                  src="/assets/image/marketing.jpg"
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

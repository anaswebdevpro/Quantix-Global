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
import SupportCTA from "@/components/SupportCTA";

const features = [
  {
    title: "2D Explainer Videos",
    desc: "We successfully break down a piece of complex information into effective explanatory pointers by having absolute professional control over the special effects of cell animation, Rotoscoping and stop motion 2D techniques. They efficiently enable the viewer to grasp the focal concept in merely seconds.",
    icon: "/assets/image/2d-explainer.png",
  },
  {
    title: "3D Animation Videos",
    desc: "We produce creative videos with excellent quality, given our expertise in inverse kinematics, fluid simulation, and 3D skeletal animation. Our experienced team has a deep understanding of the craft and have created many successful 3D animation videos before, which provides them with a better balance of strategic understanding of these videos.",
    icon: "/assets/image/3d-animation.png",
  },
  {
    title: "Commercials Videos",
    desc: "We work directly with the client to craft engaging scripts that deliver the message in the most efficient and effective manner with a straightforward approach. The innovative commercial videos that we deliver are used as a tool to elevate the said brand’s conversion rate, providing ample return of investment.",
    icon: "/assets/image/commercial-videos.png",
  },
  {
    title: "Corporate Videos",
    desc: "Our team has a deep understanding of the value that corporate videos play in an organization’s face value since they are the surface representation of a brand’s capabilities, aims, and vision. Hence we offer comprehensive solutions from scriptwriting, recording the audio, shooting, lighting, editing, and marketing.",
    icon: "/assets/image/corporate-videos.png",
  },
  {
    title: "Web Videos",
    desc: "We make it extremely easy to communicate messages with the help of our web videos using our predominant knowledge of the basics like color combinations, vectors, rule of thirds, sound effects, etc.",
    icon: "/assets/image/web-videos.png",
  },
  {
    title: "Event Videos",
    desc: "We study our client brand’s vision, style and position in the market to assist them in choosing the right style, design and nature of videos of their events. We provide customized solutions for every different event and brand for a personalized touch to bring forth their best foot forward.",
    icon: "/assets/image/event-videos.png",
  },
];

export default function VideoAnimation() {
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
                <span className="text-[#09d0c6]"> 3D Video</span> Animation
                service
              </Heading>
              <SubHeading className="text-gray-200 text-base md:text-lg leading-relaxed">
                To kick off marketing and creativity hand in hand, we assist
                businesses by crafting video animations for them. It is an
                effective way to represent their business goals through an
                animated platform that is interesting and easier for people to
                engage with.
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
        <Container className="bg-gray-50">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/assets/image/animation.jpg"
                  alt="Web Design Company"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <SectionHeading className="mb-6 text-2xl md:text-4xl">
                Development Process
              </SectionHeading>
              <SubHeading className="mb-6 text-gray-600 leading-relaxed font-semibold text-sm  md:text-base ">
                Video animation development projects starts with scheduling
                them, which is followed by thorough research by our team to
                collect all the key requirements. The scheduling is done in a
                step by step manner where from storyboarding to delivering the
                first prototype, the designated teams show efficiency in
                completion. We present the prototype to the client for reviews
                and approval before it is finished and successfully delivered.
              </SubHeading>
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

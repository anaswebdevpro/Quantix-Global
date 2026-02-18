"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heading } from "./ui/Heading";
import { SubHeading } from "./ui/subheading";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex   overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-[90vh] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/assets/image/main-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* content */}
      <div className="h-[80vh] z-20 px-4 md:px-10 py-20 lg:py-24 lg:px-20 ">
        <div className="max-w-2xl flex flex-col items-start justify-center pt-10 space-y-4">
          <Heading as="h1" className="">
            Blockchain Development Company
          </Heading>
          <SubHeading as="p" className="text-white py-2 max-w-lg">
            Your trusted partner in building secure, scalable, and innovative
            decentralized solutions for the future of
            <span className="text-[#09d0c6]"> digital transformation.</span>
          </SubHeading>

          <Link href="/contact-us">
            <Button
              variants="action"
              className="inline-flex items-center justify-center text-md"
            >
              Talk To An Expert
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

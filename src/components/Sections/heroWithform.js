import React from "react";
import Container from "../ui/container";
import BannerForm from "./bannerForm";
import Button from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HeroWithForm = ({ heading, text, bgimage, className }) => {
  return (
    <div>
      <section
        className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] overflow-hidden"
        style={{
          backgroundImage: `url('${bgimage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <Container className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 lg:gap-10 items-center pt-30 sm:pt-32 md:pt-30 lg:pt-30 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-3xl text-white text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-[1.04] tracking-tight">
                {heading}
              </h1>

              <p className="mt-4 sm:mt-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {text}
              </p>
              <Link href="/contact-us" className="inline-block mt-6 sm:mt-8">
                <Button
                  variants="action"
                  className="inline-flex items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  Talk To An Expert
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className={className}>


            <BannerForm  />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HeroWithForm;

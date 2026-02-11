"use client";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-[80vh] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source
            src="/assets/images/Webcom_Banner_03_3mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-3xl lg:text-5xl font-black leading-tight mb-6"
          >
            Blockchain Development Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl font-light mb-10 text-white max-w-2xl"
          >
            Your Partner in Decentralized Solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#09d0c6] hover:bg-[#08b8af] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Talk To An Expert
              <SquareArrowOutUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

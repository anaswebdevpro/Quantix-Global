"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/container";
import { Heading } from "@/components/ui/Heading";

const websites = [
  "/assets/image/Featured_Image_1.jpg",
  "/assets/image/Featured_Image_2.jpg",
  "/assets/image/Featured_Image_3.jpg",
  "/assets/image/Featured_Image_4-1.jpg",
  "/assets/image/Featured_Image_5-1.jpg",
  "/assets/image/Featured_Image_6.jpg",
];

// Tuned for the requested visual reference
const DESKTOP_CARD_WIDTH = 400;
const MOBILE_CARD_WIDTH = 280;
const DESKTOP_HEIGHT = 260;
const MOBILE_HEIGHT = 180;
const GAP = 30; // Distinct gap as seen in reference

export default function WebsiteSlider() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    if (!containerWidth) return;

    let moveBy = -0.05 * delta;
    if (velocityFactor.get() !== 0) {
      moveBy += moveBy * Math.abs(velocityFactor.get());
    }

    baseX.set(baseX.get() + moveBy);
  });

  const isMobile = containerWidth < 768;
  const cardWidth = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
  const cardHeight = isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT;
  const spacing = cardWidth + GAP;

  // Use mapped items with unique IDs
  const items = [
    ...websites.map((s, i) => ({ src: s, id: `1-${i}` })),
    ...websites.map((s, i) => ({ src: s, id: `2-${i}` })),
    ...websites.map((s, i) => ({ src: s, id: `3-${i}` })),
    ...websites.map((s, i) => ({ src: s, id: `4-${i}` })),
  ];
  const totalWidth = items.length * spacing;

  return (
    <section className="bg-white overflow-hidden relative my-8">
      <Container>
        <div className="text-center max-w-6xl mx-auto ">
          <Heading className="mb-4 text-[#333d47] text-3xl md:text-5xl font-bold">
            Let&apos;s Build Something Amazing Together
          </Heading>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto py-5">
            We are a company that believes in oneness and creating something
            great every time. With our professionals, you can rely on acquiring
            the best for yourself and your business.
          </p>
        </div>
      </Container>

      {/* Container to constrain the slider perspective if needed, but keeping it full width usually works better for sliders */}
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div
          ref={containerRef}
          className="relative w-[700px] h-[300px] md:h-[380px] flex items-center mx-auto justify-center"
        >
          {items.map((item, index) => (
            <SliderItem
              key={item.id}
              src={item.src}
              index={index}
              baseX={baseX}
              totalWidth={totalWidth}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              spacing={spacing}
              containerWidth={containerWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SliderItem({
  src,
  index,
  baseX,
  totalWidth,
  cardWidth,
  cardHeight,
  spacing,
  containerWidth,
}) {
  const x = useTransform(baseX, (v) => {
    if (!containerWidth) return -5000;

    const center = containerWidth / 2;
    // Calculate position in circle
    let pos = (((v + index * spacing) % totalWidth) + totalWidth) % totalWidth;

    // Find closest instance to center
    // pos is left edge relative to infinite space.
    // Center of item is pos + width/2.
    // We want distance from center to center.
    // Center of container is 'center'.

    // Current center of item in loop space
    const itemCenterLoop = pos + cardWidth / 2;
    // But spacing dictates the layout. The visual center of slot is pos + cardWidth/2?
    // Actually, simple infinite loop logic:
    // pos is the top-left coordinate in the repeating sequence.
    // We want to shift 'pos' such that it is closest to 'center - cardWidth/2' visually?

    // Let's stick to standard distance minimization
    let dist = pos + cardWidth / 2 - center;

    const halfTotal = totalWidth / 2;
    if (dist > halfTotal) dist -= totalWidth;
    if (dist < -halfTotal) dist += totalWidth;

    return center + dist - cardWidth / 2;
  });

  const scale = useTransform(x, (currentX) => {
    if (!containerWidth) return 0.8;
    const center = containerWidth / 2;
    const itemCenter = currentX + cardWidth / 2;
    const dist = Math.abs(center - itemCenter);

    // Scale: 1.2 center -> 0.8 edges
    // Standard deviation for curve
    const maxDist = containerWidth / 1.5;
    const normDist = Math.min(dist / maxDist, 1);

    return 1.2 - 0.4 * normDist;
  });

  const zIndex = useTransform(scale, (s) => Math.round(s * 100));

  const opacity = useTransform(x, (currentX) => {
    if (!containerWidth) return 0;
    const center = containerWidth / 2;
    const dist = Math.abs(currentX + cardWidth / 2 - center);

    // Strict visibility: Only center and immediate neighbors (dist ~ spacing)
    // Hide anything further than spacing * 1.5
    return dist > spacing * 1.5 ? 0 : 1;
  });

  return (
    <motion.div
      style={{
        x,
        scale,
        zIndex,
        opacity,
        width: cardWidth,
        height: cardHeight,
        position: "absolute",
        top: "40%",
        y: "-50%",
        left: 0,
      }}
      className="rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100"
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt="Project Preview"
          fill
          className="object-center"
          sizes="(max-width: 768px) 300px, 450px"
          priority={index < 3}
          quality={90}
        />
        {/* Shadow overlay for depth */}
        <motion.div
          style={{ opacity: useTransform(scale, [1.2, 0.8], [0, 0.2]) }}
          className="absolute inset-0 bg-black pointer-events-none transition-opacity"
        />
      </div>
    </motion.div>
  );
}

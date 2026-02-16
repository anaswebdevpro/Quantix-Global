"use client";

import React, { useRef } from "react";

export default function HeroVideo({ src = "/assets/image/banner_video.mp4" }) {
  const videoRef = useRef(null);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
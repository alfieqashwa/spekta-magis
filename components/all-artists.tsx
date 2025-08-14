"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const AllArtists = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const enableSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      document.removeEventListener("click", enableSound);
    };
    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);

  const variable = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 1.5 },
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.video
        ref={videoRef}
        {...variable}
        src="/opening-raisa.MP4"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        className="max-h-[90vh] w-auto max-w-[90%] rounded-lg object-contain"
      />

      {/* Tombol mute/unmute */}
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
          }
        }}
        className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-lg text-white shadow-lg backdrop-blur-sm transition hover:bg-black/70"
      >
        {isMuted ? "🔊" : "🔇"}
      </button>
    </div>
  );
};

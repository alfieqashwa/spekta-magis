"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import RippleWaveLoader from "./ui/ripplewave-loader";
import localFont from "next/font/local";
import CountdownTimer from "./countdown-timer";

const maragsa = localFont({
  src: "../public/fonts/Maragsa-Display.woff2",
});

export const HeroTitle = () => (
  <div className="absolute top-4 z-[100] mx-auto max-w-2xl px-4 py-12 text-center md:top-2/6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={cn(
        "z-10 mb-0 flex cursor-crosshair justify-center bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-4xl font-bold tracking-widest text-transparent drop-shadow-[0_8px_6px_rgba(0,0,0,0.4)] sm:text-5xl md:mb-2 md:text-6xl",
        maragsa.className,
      )}
    >
      SPEKTAMAGIS
    </motion.h1>
    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={cn(
        "mb-4 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-xl font-semibold tracking-widest text-transparent drop-shadow-[0_8px_6px_rgba(0,0,0,0.4)] sm:mb-12 sm:text-2xl md:text-4xl",
        maragsa.className,
      )}
    >
      Color Of Unity
    </motion.p>
    <RippleWaveLoader />
    <CountdownTimer />
  </div>
);

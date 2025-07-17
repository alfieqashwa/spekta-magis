"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import CountdownTimer from "./countdown-timer";
import { Footer } from "./footer";
import { ParticlesProps } from "./ui/particles";
import RippleWaveLoader from "./ui/ripplewave-loader";
import localFont from "next/font/local";

const maragsa = localFont({
  src: "../public/fonts/Maragsa-Display.woff2",
});

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
});
const Particles = dynamic<ParticlesProps>(
  () => import("./ui/particles").then((mod) => mod.Particles),
  {
    ssr: false,
  },
);

export default function WaitlistPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      <Spotlight />

      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={8}
        refresh
        color="#e60a64"
      />

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "from-foreground via-foreground/80 to-foreground/40 mb-4 flex cursor-crosshair justify-center space-x-4 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-widest text-transparent sm:text-5xl md:text-7xl",
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
          className="text-muted-foreground mt-2 mb-12 font-medium sm:text-lg"
        >
          A spectacular fusion of light, technology, and music — crafting
          moments of wonder.
        </motion.p>

        <RippleWaveLoader />
        <CountdownTimer />
      </div>
      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}

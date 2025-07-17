"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import CountdownTimer from "./countdown-timer";
import { Footer } from "./footer";
import { ParticlesProps } from "./ui/particles";
import RippleWaveLoader from "./ui/ripplewave-loader";

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

      {/* <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 text-transparent bg-clip-text drop-shadow-[0_8px_6px_rgba(0,0,0,0.4)] tracking-tight font-serif">
  SPEKTAMAGIS
</h1> */}
      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "mb-2 flex cursor-crosshair justify-center bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-4xl font-bold tracking-widest text-transparent drop-shadow-[0_8px_6px_rgba(0,0,0,0.4)] sm:text-5xl md:mb-6 md:text-7xl",
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
            "mt-2 mb-10 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-xl font-semibold tracking-widest text-transparent drop-shadow-[0_8px_6px_rgba(0,0,0,0.4)] sm:text-2xl md:text-4xl",
            maragsa.className,
          )}
        >
          Color Of Unity
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

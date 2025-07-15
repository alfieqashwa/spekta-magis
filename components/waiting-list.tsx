"use client";

import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Bricolage_Grotesque } from "next/font/google";
import CountdownTimer from "./countdown-timer";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
});

export default function WaitlistPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      <Spotlight />

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color="#e60a64"
      />

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl",
            brico.className,
          )}
        >
          Spekta{" "}
          <span className="bg-primary from-foreground via-rose-700 to-primary bg-clip-text text-transparent bg-gradient-to-br">
            Magis
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 mt-2 text-muted-foreground sm:text-lg font-medium"
        >
          Join the future of live music experiences.
          <br className="hidden sm:block" /> Create unforgettable shows powered
          by breakthrough tech.
        </motion.p>

        <CountdownTimer />
      </div>

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

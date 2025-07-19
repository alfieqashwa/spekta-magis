"use client";

import { Spotlight } from "@/components/ui/spotlight";
import dynamic from "next/dynamic";
import { HeroTitle } from "./hero-title";
import { ParticlesProps } from "./ui/particles";
import CountdownTimer from "./countdown-timer";

// import { Bricolage_Grotesque } from "next/font/google";
// const brico = Bricolage_Grotesque({
//   subsets: ["latin"],
// });

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
        color={"#EB2D2E"}
      />
      <HeroTitle />
      <CountdownTimer />

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

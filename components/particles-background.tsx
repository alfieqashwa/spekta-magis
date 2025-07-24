"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { HeroTitle } from "./hero-title";
import { ParticlesProps } from "./ui/particles";

const Particles = dynamic<ParticlesProps>(
  () => import("./ui/particles").then((mod) => mod.Particles),
  { ssr: false },
);

export const ParticlesBackground = () => (
  <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
    <HeroTitle />
    <div className="absolute top-24 z-50 flex justify-center md:hidden">
      <Image
        src="/spektamagis-main-title.png"
        width={300}
        height={300}
        priority
        alt="Main Title"
        className="object-contain"
      />
    </div>
  </main>
);

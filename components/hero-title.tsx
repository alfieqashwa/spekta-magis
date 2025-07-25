"use client";

import Image from "next/image";
import CountdownTimer from "./countdown-timer";
import { motion } from "motion/react";

export function HeroTitle() {
  const titleImageVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 2 },
  };

  const MotionTitleImage = motion.create(Image);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      <div className="absolute top-1/2 mt-12 md:mt-20">
        <div className="z-50 hidden justify-center md:flex">
          <MotionTitleImage
            {...titleImageVariant}
            src="/spektamagis-main-title.png"
            width={500}
            height={500}
            priority
            alt="Desktop Title"
            className="h-auto w-auto object-contain"
          />
        </div>
        <CountdownTimer />
      </div>
      <div className="absolute top-24 z-50 flex justify-center md:hidden">
        <MotionTitleImage
          {...titleImageVariant}
          src="/spektamagis-main-title.png"
          width={300}
          height={300}
          priority
          alt="Mobile Title"
          className="h-auto w-auto object-contain"
        />
      </div>
    </main>
  );
}

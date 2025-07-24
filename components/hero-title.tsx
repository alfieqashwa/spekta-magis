"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import localFont from "next/font/local";
import Image from "next/image";
import CountdownTimer from "./countdown-timer";

const maragsa = localFont({
  src: "../public/fonts/Maragsa-Display.woff2",
  preload: false,
});

export const HeroTitle = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="absolute top-1/2 mt-12 md:mt-20">
      <div className="z-[154] flex justify-center">
        <Image
          src="/spektamagis-main-title.png"
          width={isDesktop ? 500 : 300}
          height={isDesktop ? 500 : 300}
          priority
          alt="Main Title"
          className="object-contain"
        />
      </div>
      <CountdownTimer />
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { WrapperBackground } from "./wrapper-background";
import { ZoomableImage } from "./zoomable-image";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export function Compro({ images }: { images: { src: string; alt: string }[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <WrapperBackground sectionId="about">
      <div className="mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mx-auto max-w-[540px] pt-8 md:pt-16"
        >
          <h2
            className={cn(
              "from-muted-foreground/55 via-foreground to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            Promotor
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            Bersama membangun kreativitas & harmoni budaya.
          </p>
        </motion.div>
        <div className="relative mx-auto w-full max-w-4xl rounded-[24px] p-2 py-12 shadow-sm md:rounded-t-[44px]">
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {images.map((img, i) => (
              <div className="cursor-pointer" key={`${i}-${img.alt}`}>
                <ZoomableImage
                  src={img.src}
                  alt={img.alt}
                  className="rounded-sm"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </WrapperBackground>
  );
}

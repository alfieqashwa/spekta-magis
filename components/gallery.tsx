"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { CardCaroursalMerchandise } from "./card-carousel-merchandise";
import { WrapperBackground } from "./wrapper-background";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <WrapperBackground sectionId="gallery">
      <div className="mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mx-auto max-w-[540px]"
        >
          <h2
            className={cn(
              "from-muted-foreground/55 via-foreground to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            Merchandise
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            This isn’t just merch — it’s a badge of the night you felt alive.
          </p>
        </motion.div>
        <div className="relative mx-auto mt-10 w-full max-w-4xl rounded-[24px] p-2 shadow-sm md:rounded-t-[44px]">
          <CardCaroursalMerchandise images={images} />
        </div>
      </div>
    </WrapperBackground>
  );
}

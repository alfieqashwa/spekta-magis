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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // adjust stagger speed here
      delayChildren: 0.5, // optional: delay before children start
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export function Compro({ compro }: { compro: { src: string; alt: string }[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <WrapperBackground sectionId="about">
      <div className="relative mx-auto px-2">
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
            About Us
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            Bersama membagun kreativitas & harmoni budaya.
          </p>
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-4xl rounded-[24px] p-2 shadow-sm md:rounded-t-[44px]">
          <section>
            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {compro.map((compro, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.25 }}
                  variants={itemVariants}
                  className="cursor-pointer"
                  key={`${i}-${compro.alt}`}
                >
                  <ZoomableImage
                    src={compro.src}
                    alt={compro.alt}
                    className="rounded-sm"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </WrapperBackground>
  );
}

"use client";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Spotlight } from "./ui/spotlight";
import { CardCaroursalMerchandise } from "./card-carousel-merchandise";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="spektamagis"
      className="border-secondary/50 bg-background relative mb-32 min-h-screen overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border-t border-b pt-20 md:rounded-tl-[5rem] md:rounded-tr-[5rem] md:rounded-br-[5rem] md:rounded-bl-[5rem]"
      style={{
        boxShadow: `
      inset 0 20px 30px -12px rgba(244, 63, 94, 0.2),
      inset 0 -20px 30px -12px rgba(244, 63, 94, 0.2)
    `,
      }}
    >
      <div className="absolute z-0 h-full w-full">
        <Spotlight />
      </div>
      <div className="absolute bottom-0 z-0 h-full w-full rotate-180">
        <Spotlight />
      </div>
      <div className="absolute top-1/2 left-0 hidden -translate-y-1/2 lg:block">
        <img
          alt="Spektamagis graphic 1"
          width={300}
          height={300}
          className="-rotate-90"
          src="/text-spektamagis-black.png"
        />
      </div>
      <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
        <img
          alt="Spektamagis graphic 2"
          width={300}
          height={300}
          className="rotate-90 brightness-[0.95]"
          src="/text-spektamagis-black.png"
        />
      </div>
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
              "from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            Merchandise
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            This isn’t just merch — it’s a badge of the night you felt alive.
          </p>
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-4xl rounded-[24px] p-2 shadow-sm md:rounded-t-[44px]">
          <CardCaroursalMerchandise />
        </div>
      </div>
    </section>
  );
}

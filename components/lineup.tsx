"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { CardHoverEffect, type CardProps } from "./ui/pulse-card";
import { Spotlight } from "./ui/spotlight";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

type LineUpProps = {
  cards: CardProps[];
};

export function LineUp(props: LineUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="lineup"
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
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="mx-auto max-w-[540px] pt-20"
      >
        <h2
          className={cn(
            "from-muted-foreground/55 via-foreground to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            space.className,
          )}
        >
          Artists Lineup
        </h2>
        <p className="mx-4 mt-5 text-center text-lg text-zinc-500 md:text-xl">
          Every Beat Has a Name <br className="md:hidden" /> — Meet the Artists.
        </p>
      </motion.div>
      <div className="mt-12 mb-12 grid w-full grid-cols-1 gap-8 text-center md:grid-cols-6 lg:gap-12">
        {props.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className={cn(
              card.title === "Project Pop"
                ? "md:col-start-2 md:col-end-6"
                : "md:col-span-3",
            )}
          >
            <CardHoverEffect
              title={card.title}
              titleMobile={card.titleMobile}
              imageUrl={card.imageUrl}
              alt={card.alt}
              variant={card.variant}
              glowEffect={true}
              size={"lg"}
              showGridLines={card.showGridLines}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

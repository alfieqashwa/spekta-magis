"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { CardHoverEffect, type CardProps } from "./ui/pulse-card";

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
    <div className="w-full bg-gradient-to-br from-rose-600/30 from-30% via-fuchsia-600/20 via-50% to-orange-500/35 to-70% px-2 pb-8">
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
          Line Up
        </h2>
        <p className="mx-4 mt-5 text-center text-lg text-zinc-500">
          Every Beat Has a Name <br className="md:hidden" /> — Meet the Artists.
        </p>
      </motion.div>
      <div className="mt-12 grid w-full grid-cols-1 gap-x-8 gap-y-8 text-center md:grid-cols-4 lg:gap-y-12">
        {props.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className={cn(
              card.title === "Project Pop" ? "md:col-span-4" : "md:col-span-2",
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
    </div>
  );
}

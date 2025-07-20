"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { CardHoverEffect, type CardProps } from "./ui/pulse-card";
import { WrapperBackground } from "./wrapper-background";

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
    <WrapperBackground sectionId="lineup">
      <div className="mx-auto px-2">
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
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            Every Beat Has a Name <br className="md:hidden" /> — Meet the
            Artists.
          </p>
        </motion.div>
        <div className="mt-10 mb-12 grid w-full grid-cols-1 gap-8 text-center md:grid-cols-6 lg:gap-12">
          {props.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              className={cn(
                "mx-0 sm:mx-40 md:mx-0 lg:mx-12 xl:mx-40",
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
      </div>
    </WrapperBackground>
  );
}

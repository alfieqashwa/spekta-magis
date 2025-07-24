"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { CardHoverEffect, type CardProps } from "./ui/pulse-card";
import { WrapperBackground } from "./wrapper-background";
import { FaSpotify } from "react-icons/fa";

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
          className="mx-auto max-w-[540px] pt-8 md:pt-16"
        >
          <h2
            className={cn(
              "from-muted-foreground/55 via-foreground to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            Artists Line Up
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500 md:text-xl">
            Every Beat Has a Name <br className="md:hidden" /> — Meet the
            Artists.
          </p>
        </motion.div>
        <div className="mx-auto mt-10 mb-12 grid w-full max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-6 lg:gap-12">
          {props.cards.map((card, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              key={`${i}-${card.title}`}
              className={cn(
                "rounded-xl bg-rose-500/10 p-4 flex flex-col justify-start h-full text-left",
                card.title === "Project Pop"
                  ? "md:col-start-1 md:col-end-7"
                  : "md:col-span-3",
              )}
            >
              <div className="relative z-0">
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
              </div>

              {/* Description + Spotify */}
              <div className="relative z-10 flex flex-col justify-between flex-grow mt-4">
                {/* Description */}
                {card.description && (
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                    {card.description}
                  </p>
                )}

                {/* Spotify Button */}
                {card.linkSpotify && (
                  <div className="mt-auto pt-2">
                    <a
                      href={card.linkSpotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-green-600 hover:scale-105"
                    >
                      <FaSpotify className="text-white text-lg" />
                      Listen on Spotify
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperBackground>
  );
}

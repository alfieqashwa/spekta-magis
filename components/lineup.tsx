"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CardHoverEffect, type CardProps } from "./ui/pulse-card";

type LineUpProps = {
  cards: CardProps[];
};

export function LineUp(props: LineUpProps) {
  return (
    <div className="flex w-full bg-gradient-to-br from-rose-600/30 from-30% via-fuchsia-600/20 via-50% to-orange-500/35 to-70% px-2 py-8">
      <div className="mt-40 grid w-full grid-cols-1 gap-x-8 gap-y-8 text-center sm:grid-cols-4 md:grid-cols-6 md:gap-y-12">
        {props.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className={cn(
              card.title === "Project Pop"
                ? "sm:col-span-4 md:col-start-2 md:col-end-6"
                : "sm:col-span-4 md:col-span-2",
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

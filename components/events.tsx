"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { Geist } from "next/font/google";
import { useRef } from "react";
import { WrapperBackground } from "./wrapper-background";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <WrapperBackground sectionId="events">
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
            Events
          </h2>
        </motion.div>
      </div>
      <section className="mx-auto max-w-3xl px-6 py-12 text-lg sm:px-12">
        <h1 className="mt-4 text-xl font-semibold">About Spektamagis</h1>
        <article className="mt-6 space-y-4">
          <p className="md:text-justify">
            Spektamagis merupakan suatu pertunjukan yang memberikan experience
            yang menyenangkan. Dengan perpaduan berbagai elemen cahaya dan
            teknologi yang menciptakan sesuatu yang spektakuler dan penuh magis,
            ditambah dengan perpaduan musik dari para musisi Indonesia.
          </p>
          <p className="md:text-justify">
            Memasuki sebuah ruangan disambut hangat dengan alunan musik yang
            hidup, pendaran cahaya, suara atmosferik, juga visual yang membawa
            pengalaman Anda ke tingkat yang lebih imersif.
          </p>
        </article>
      </section>
    </WrapperBackground>
  );
}

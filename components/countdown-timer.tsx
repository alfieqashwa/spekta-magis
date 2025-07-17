"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

const targetDate = new Date("2025-09-20T09:00:00Z"); // UTC time of 16:00 in GMT+7

export default function CountdownTimer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">The show’s on!</h2>
          <Button asChild>
            <a href="/tickets">Get Tickets</a>
          </Button>
        </div>
      );
    }

    return (
      <div className="mt-12 grid grid-cols-2 gap-6 text-center font-bold tracking-widest md:grid-cols-4">
        <CountdownCard context={String(days).padStart(2, "0")} title="Days" />
        <CountdownCard context={String(hours).padStart(2, "0")} title="Hours" />
        <CountdownCard context={String(minutes).padStart(2, "0")} title="Min" />
        <CountdownCard context={String(seconds).padStart(2, "0")} title="Sec" />
      </div>
    );
  };

  return (
    <div className="mt-2 rounded-lg p-6 shadow-lg dark:text-white">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mb-4 text-center font-semibold"
      >
        <h1 className="text-base md:text-lg">Saturday, 20 September 2025</h1>
        <h1 className="text-muted-foreground text-sm whitespace-nowrap md:text-base">
          Kalawa Convention Hall,
          <br className="md:hidden" />{" "}
          <span className="whitespace-nowrap">Palangka Raya</span>
        </h1>
      </motion.article>
      {/* Only render countdown after client has mounted */}
      {isClient && <Countdown date={targetDate} renderer={renderer} />}
    </div>
  );
}

const CountdownCard = ({
  context,
  title,
}: {
  context: string;
  title: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: "70%" }}
    animate={{ opacity: 1, scale: "100%" }}
    transition={{ duration: 1, delay: 0.7 }}
    className="border-primary/10 glass flex transform-gpu flex-col items-center justify-center rounded-lg border bg-white/5 p-4 shadow-lg [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset] backdrop-blur-md"
  >
    <div className="font-mono text-3xl text-rose-500">{context}</div>
    <div className="text-muted-foreground text-sm uppercase">{title}</div>
  </motion.div>
);

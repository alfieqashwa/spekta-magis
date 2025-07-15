"use client";

import { useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { Button } from "@/components/ui/button";
import { parse } from "date-fns";
import { motion } from "motion/react";

const getEventDate = () => {
  // Local date in UTC+07:00, convert to UTC by subtracting 7 hours
  const localDate = parse("2025-09-20 18:00", "yyyy-MM-dd HH:mm", new Date());
  const utcDate = new Date(localDate.getTime() - 7 * 60 * 60 * 1000);
  return utcDate;
};

export default function CountdownTimer() {
  const [targetDate] = useState<Date>(getEventDate());

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-bold tracking-widest">
        <CountdownCard context={String(days).padStart(2, "0")} title="Days" />
        <CountdownCard context={String(hours).padStart(2, "0")} title="Hours" />
        <CountdownCard context={String(minutes).padStart(2, "0")} title="Min" />
        <CountdownCard context={String(seconds).padStart(2, "0")} title="Sec" />
      </div>
    );
  };

  return (
    <div className="dark:text-white p-6 rounded-lg shadow-lg">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mb-4 font-semibold text-center"
      >
        <h1 className="text-lg">20 September 2025</h1>
        <h1 className="text-muted-foreground">
          Kalawa Convention Hall, Palangka Raya
        </h1>
      </motion.article>
      <Countdown date={targetDate} renderer={renderer} />
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
    className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white/5 p-4 backdrop-blur-md transform-gpu glass [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
  >
    <div className="text-3xl text-rose-500 font-mono">{context}</div>
    <div className="text-sm uppercase text-muted-foreground">{title}</div>
  </motion.div>
);

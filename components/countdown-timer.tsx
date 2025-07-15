"use client";

import { useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { Button } from "@/components/ui/button";
import { parse, formatISO } from "date-fns";

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
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white/5 p-4 backdrop-blur-md transform-gpu glass [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]">
          <div className="text-3xl text-rose-500 font-mono">
            {String(days).padStart(2, "0")}
          </div>
          <div className="text-sm uppercase text-muted-foreground">Days</div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white/5 p-4 backdrop-blur-md glass">
          <div className="text-3xl font-mono">
            {String(hours).padStart(2, "0")}
          </div>
          <div className="text-sm uppercase text-muted-foreground">Hours</div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white/5 p-4 backdrop-blur-md glass">
          <div className="text-3xl textmute font-mono">
            {String(minutes).padStart(2, "0")}
          </div>
          <div className="text-sm uppercase text-muted-foreground">Min</div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white/5 p-4 backdrop-blur-md glass">
          <div className="text-3xl font-mono">
            {String(seconds).padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground uppercase">Sec</div>
        </div>
      </div>
    );
  };

  return (
    <div className="dark:text-white p-6 rounded-lg shadow-lg">
      <article className="mb-4 font-semibold text-center">
        <h1 className="text-lg">20 September 2025</h1>
        <h1 className="text-muted-foreground">
          Kalawa Convention Hall, Palangka Raya
        </h1>
      </article>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Spotlight } from "./ui/spotlight";

const maragsa = localFont({
  src: "../public/fonts/Maragsa-Display.woff2",
  preload: false,
});

export function WrapperBackground({
  sectionId,
  children,
}: {
  sectionId: string;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId}
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
        <h1
          className={cn(
            "text-muted -rotate-90 text-5xl transition-colors duration-500 ease-in-out hover:text-amber-500/70",
            maragsa.className,
          )}
        >
          SPEKTAMAGIS
        </h1>
      </div>
      <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
        <h1
          className={cn(
            "text-muted rotate-90 text-5xl transition-colors duration-500 ease-in-out hover:text-amber-500/70",
            maragsa.className,
          )}
        >
          SPEKTAMAGIS
        </h1>
      </div>
      {children}
    </section>
  );
}

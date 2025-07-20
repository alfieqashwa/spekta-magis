"use client";

import { ReactNode } from "react";
import { Spotlight } from "./ui/spotlight";

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
      {children}
    </section>
  );
}

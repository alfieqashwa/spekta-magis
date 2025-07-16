"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

export function ParaKreator() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="fixed top-2 right-4">
        <Image
          src="/para-kreator.png"
          width={100}
          height={100}
          alt="Para Creator"
        />
      </div>
    );
  }

  return (
    <div className="fixed top-0 right-0">
      <Image
        src="/para-kreator.png"
        width={80}
        height={80}
        alt="Para Creator"
      />
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const AllArtists = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const variable = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 1.5 },
  };

  const MotionAllArtist = motion.create(Image);

  return (
    <div className="flex h-full items-center justify-center">
      <MotionAllArtist
        {...variable}
        src="/all-artists.png"
        alt="All Artists"
        priority
        sizes="100vw"
        width={width}
        height={height}
        className="object-cover opacity-50"
      />
    </div>
  );
};

"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function ParaKreator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="animate-pulse-slow fixed h-0.5 lg:-top-2 lg:right-2 lg:h-24 lg:w-24"
    >
      <Image
        src="/para-kreator.png"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
        alt="Para Creator Logo"
        className="object-contain"
      />
    </motion.div>
  );
}

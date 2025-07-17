"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function ParaKreator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed md:top-1 md:right-2 md:h-24 md:w-24"
    >
      <Image
        src="/para-kreator.png"
        fill
        sizes="100%"
        priority
        alt="Para Creator Logo"
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  );
}

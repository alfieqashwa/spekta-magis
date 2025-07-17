"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const Spektamagis = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="animate-pulse-slow fixed top-4 left-3 inline-block h-8 w-8 md:top-7 md:left-6 md:h-12 md:w-12"
  >
    <Image
      src="/logo.png"
      alt="Spekta Magis Logo"
      fill
      sizes="100%"
      priority
      style={{ objectFit: "contain" }}
    />
  </motion.div>
);

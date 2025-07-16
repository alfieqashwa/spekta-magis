import { motion } from "motion/react";
import Image from "next/image";

export const LogoSpektamagis = () => (
  <motion.span
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="inline-block animate-pulse-slow w-10 h-10 sm:w-16 sm:h-16 relative"
  >
    <Image
      src="/logo.png"
      alt="Spekta Magis Logo"
      fill
      sizes="100%"
      priority
      style={{ objectFit: "contain" }}
    />
  </motion.span>
);

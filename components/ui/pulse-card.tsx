import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const magurie = localFont({
  src: "../../public/fonts/Magurie.woff2",
  preload: false,
});
export interface CardProps {
  title: string;
  titleMobile?: string;
  imageUrl: string;
  alt: string;
  className?: string;
  variant?: "emerald" | "blue" | "purple" | "amber" | "rose";
  size?: "sm" | "md" | "lg";
  glowEffect?: boolean;
  hoverScale?: number;
  interactive?: boolean;
  showGridLines?: boolean;
}

export const VARIANTS = {
  emerald: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(160deg 95% 39%) 20deg, hsl(160deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(244 63 94)",
  },
  blue: {
    accent: "blue-500",
    gradient: "from-blue-500/20 to-blue-500/0",
    shine:
      "205deg, transparent 0deg, hsl(220deg 95% 39%) 20deg, hsl(220deg 100% 85% / 0.3) 280deg",
    border: "blue-500/20",
    color: "rgb(244 63 94)",
  },
  purple: {
    accent: "purple-500",
    gradient: "from-purple-500/20 to-purple-500/0",
    shine:
      "205deg, transparent 0deg, hsl(280deg 95% 39%) 20deg, hsl(280deg 100% 85% / 0.3) 280deg",
    border: "purple-500/20",
    color: "rgb(244 63 94)",
  },
  amber: {
    accent: "amber-500",
    gradient: "from-amber-500/20 to-amber-500/0",
    shine:
      "205deg, transparent 0deg, hsl(40deg 95% 39%) 20deg, hsl(40deg 100% 85% / 0.3) 280deg",
    border: "amber-500/20",
    color: "rgb(244 63 94)",
  },
  rose: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(340deg 95% 39%) 20deg, hsl(340deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(244 63 94)",
  },
};

const SIZES = {
  sm: {
    padding: "p-6",
    titleSize: "text-sm",
    descSize: "text-xs",
  },
  md: {
    padding: "p-8 pt-16",
    titleSize: "text-base",
    descSize: "text-[15px]",
  },
  lg: {
    padding: "p-1",
    iconSize: "h-7 w-7",
    titleSize: "text-lg",
    descSize: "text-base",
  },
};

export function CardHoverEffect({
  title,
  titleMobile,
  imageUrl,
  alt,
  className,
  variant = "emerald",
  size = "md",
  glowEffect = false,
  hoverScale = 1.02,
  interactive = true,
}: CardProps) {
  const variantConfig = VARIANTS[variant];
  const sizeConfig = SIZES[size];

  const Div = interactive ? motion.div : "div";

  return (
    <Div
      whileHover={interactive ? { scale: hoverScale } : undefined}
      transition={{ duration: 0.3, ease: "easeInOut", type: "keyframes" }}
      className={cn(
        "group relative z-30 w-full overflow-hidden rounded-2xl",
        sizeConfig.padding,
        // Light mode styles
        "bg-white/80 before:bg-linear-to-b before:from-white/5 before:to-white/20 before:backdrop-blur-3xl",
        "after:bg-linear-to-b after:from-transparent after:via-transparent after:to-white/20",
        // Dark mode styles
        "dark:bg-black/5 dark:before:bg-linear-to-b dark:before:from-black/5 dark:before:to-black/20",
        "dark:after:to-black/20",
        // Common styles
        "before:absolute before:inset-0 before:rounded-[inherit] before:content-['']",
        "after:absolute after:inset-0 after:rounded-[inherit] after:content-['']",
        glowEffect && `hover:before:bg-${variantConfig.accent}/10`,
        // Shadows
        "shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_12px_20px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0px_5px_15px_rgba(0,0,0,0.03),0px_25px_35px_rgba(0,0,0,0.2)]",
        "dark:shadow-[0px_3px_8px_rgba(0,0,0,0.08),0px_12px_20px_rgba(0,0,0,0.15)]",
        "dark:hover:shadow-[0px_5px_15px_rgba(0,0,0,0.06),0px_25px_35px_rgba(0,0,0,0.4)]",
        className,
      )}
      style={
        {
          "--card-color": variantConfig.color,
        } as React.CSSProperties
      }
    >
      {/* Moving Border */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "3px",
        }}
      >
        <div
          className="absolute inset-[-200%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 340deg, var(--card-color) 360deg)`,
            animation: "spin 4s linear infinite",
          }}
        />
      </div>
      <div
        className={cn(
          "relative h-[40rem] rounded-lg bg-gradient-to-b from-zinc-950/50 to-zinc-950/90 lg:w-10/12",
          title === "Project Pop" ? "w-full lg:w-11/12" : "w-full lg:w-10/12",
        )}
      >
        <h3
          className={cn(
            "relative z-20 -rotate-1 bg-gradient-to-r from-amber-500 from-25% to-rose-600 to-75% bg-clip-text pt-6 text-2xl tracking-widest whitespace-nowrap text-transparent lg:hidden",
            magurie.className,
          )}
        >
          {titleMobile}
        </h3>
        <Image
          src={
            title === "Project Pop"
              ? `/line-up/project-pop-potrait.png`
              : imageUrl
          }
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="rounded-lg object-cover"
        />
      </div>

      <h1
        className={cn(
          "absolute rotate-90 font-bold whitespace-nowrap text-rose-500/20 transition-all duration-500 ease-in-out group-hover:text-rose-500/40 lg:text-6xl",
          title === "Rudy x Ferdy"
            ? "top-60 -right-[10.5rem]"
            : title === "Project Pop"
              ? "top-60 -right-[9.5rem]"
              : "top-28 -right-12",
        )}
      >
        {title}
      </h1>
    </Div>
  );
}

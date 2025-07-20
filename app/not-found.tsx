import { WrapperBackground } from "@/components/wrapper-background";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <WrapperBackground sectionId="not-found">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-white">
        <div className="mb-6 animate-pulse text-yellow-400">
          <FaTools className="text-7xl md:text-8xl" />
        </div>

        <h1
          className={cn(
            "text-center text-[clamp(2.5rem,6vw,4rem)] font-bold text-white",
            brico.className,
          )}
        >
          Under Construction
        </h1>

        <p className="mt-4 max-w-md text-center text-white/60">
          This page is currently under development. Please check back later!
        </p>

        <Link
          href="/"
          className={cn(
            "text-foreground mt-6 inline-block rounded-md bg-rose-900 px-6 py-3 text-sm font-medium transition hover:bg-rose-700",
            brico.className,
          )}
        >
          Go back home
        </Link>
      </div>
    </WrapperBackground>
  );
}

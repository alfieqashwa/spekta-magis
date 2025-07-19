"use client";

import Link from "next/link";
import { FaTools } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <div className="mb-6 animate-pulse text-yellow-400">
        <FaTools className="text-7xl md:text-8xl" />
      </div>

      <h1 className="text-center text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-white">
        Under Construction
      </h1>

      <p className="mt-4 max-w-md text-center text-white/60">
        This page is currently under development. Please check back later!
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
      >
        Go back home
      </Link>
    </main>
  );
}

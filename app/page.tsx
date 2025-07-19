import CountdownTimer from "@/components/countdown-timer";
import { HeroTitle } from "@/components/hero-title";
import { ParaKreator } from "@/components/para-kreator";
import Waitlist from "@/components/wait-list";
import Image from "next/image";

export default function Home() {
  const ORIGINAL_WIDTH = 5781;
  const ORIGINAL_HEIGHT = 4621;

  const newWidth = 1024;
  const newHeight = Math.round((ORIGINAL_HEIGHT / ORIGINAL_WIDTH) * newWidth);

  return (
    <div className="relative">
      <div className="absolute inset-0 m-0 md:m-20">
        <div className="flex h-full items-center justify-center">
          <Image
            src="/all-artists.png"
            alt="All Artists"
            priority
            sizes="100vw"
            width={newWidth}
            height={newHeight}
            className="object-cover opacity-50"
          />
        </div>
      </div>
      <ParaKreator />
      <Waitlist />
    </div>
  );
}

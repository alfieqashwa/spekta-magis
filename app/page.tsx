import { AllArtists } from "@/components/all-artists";
import { HeroTitle } from "@/components/hero-title";
import { ParaKreator } from "@/components/para-kreator";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/bg-image.png"
        alt="Background"
        fill
        priority
        className="z-0 object-cover"
      />

      {/* Video All Artists */}
      <div className="absolute inset-0 m-0 md:m-20">
        <AllArtists />
      </div>

      <ParaKreator />
      <HeroTitle />
    </div>
  );
}

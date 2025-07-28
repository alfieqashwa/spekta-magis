import { AllArtists } from "@/components/all-artists";
import { HeroTitle } from "@/components/hero-title";
import { ParaKreator } from "@/components/para-kreator";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | SpektaMagis: Color of Unity",
  description:
    "Spektamagis merupakan suatu pertunjukkan yang memberikan experience yang menyenangkan. Dengan perpaduan berbagai elemen cahaya dan teknologi yang menciptakan sesuatu yang spektakuler dan penuh magis, ditambah dengan perpaduan musik dari para musisi Indonesia.",
  openGraph: {
    title: "Home - SpektaMagis: Color of Unity",
    description:
      "Spektamagis merupakan suatu pertunjukkan yang memberikan experience yang menyenangkan...",
    url: "https://www.spektamagis.com/",
    siteName: "SpektaMagis",
    images: [
      {
        url: "https://www.spektamagis.com/events/1.png",
        width: 1200,
        height: 630,
        alt: "Spektamagis Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - SpektaMagis: Color of Unity",
    description:
      "Spektamagis merupakan suatu pertunjukkan yang memberikan experience yang menyenangkan...",
    images: ["https://www.spektamagis.com/events/1.png"],
  },
};

export default function Home() {
  const ORIGINAL_WIDTH = 5781;
  const ORIGINAL_HEIGHT = 4621;

  const newWidth = 1024;
  const newHeight = Math.round((ORIGINAL_HEIGHT / ORIGINAL_WIDTH) * newWidth);

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
      <div className="absolute inset-0 m-0 md:m-20">
        <AllArtists width={newWidth} height={newHeight} />
      </div>
      <ParaKreator />
      <HeroTitle />
    </div>
  );
}

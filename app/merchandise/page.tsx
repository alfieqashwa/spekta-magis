import { Gallery } from "@/components/gallery";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchandise",
};

export default function MerchandisePage() {
  const images = [
    { src: "/merchandise/gelang.jpg", alt: "Gelang" },
    { src: "/merchandise/sticker.jpg", alt: "Sticker" },
    { src: "/merchandise/t-shirt1.png", alt: "T-shirt 1" },
    { src: "/merchandise/t-shirt2.png", alt: "T-shirt 2" },
    { src: "/merchandise/t-shirt3.png", alt: "T-shirt 3" },
    { src: "/merchandise/t-shirt4.png", alt: "T-shirt 4" },
    { src: "/merchandise/tote-bag-1.jpg", alt: "Tote Bag 2" },
    { src: "/merchandise/tote-bag-2.jpg", alt: "Tote Bag 2" },
    { src: "/merchandise/tumbler.jpg", alt: "Tumbler" },
  ];
  return <Gallery images={images} />;
}

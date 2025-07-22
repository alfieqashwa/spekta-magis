import { Compro } from "@/components/compro";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotor",
};

export default function PromotorPage() {
  const compro = [
    { src: "/compro/1.jpg", alt: "compro-1" },
    { src: "/compro/2.jpg", alt: "compro-2" },
    { src: "/compro/3.jpg", alt: "compro-3" },
    { src: "/compro/4.jpg", alt: "compro-4" },
    { src: "/compro/5.jpg", alt: "compro-5" },
    { src: "/compro/6.jpg", alt: "compro-6" },
    { src: "/compro/7.jpg", alt: "compro-7" },
    { src: "/compro/8.jpg", alt: "compro-8" },
    { src: "/compro/9.jpg", alt: "compro-9" },
  ];
  return <Compro compro={compro} />;
}

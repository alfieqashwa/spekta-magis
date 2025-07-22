import { LineUp } from "@/components/lineup";
import { type CardProps } from "@/components/ui/pulse-card";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Line Up",
};

export default function LineupPage() {
  const cards = [
    {
      title: "Raisa",
      titleMobile: "Raisa",
      imageUrl: "/line-up/raisa-bw.jpg",
      alt: "Raisa",
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Rudy x Ferdy",
      titleMobile: "Rudy x Ferdy",
      imageUrl: "/line-up/rudy-ferdy-potrait.png",
      alt: "Rudy x Ferdy",
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Project Pop",
      titleMobile: "Project Pop",
      imageUrl: "/line-up/project-pop-landscape.png",
      alt: "Project Pop",
      variant: "rose",
      showGridLines: true,
    },
  ] as CardProps[];

  return <LineUp cards={cards} />;
}

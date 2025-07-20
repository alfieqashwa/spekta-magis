import { LineUp } from "@/components/lineup";
import { type CardProps } from "@/components/ui/pulse-card";

export default function LineupPage() {
  const cards = [
    {
      title: "Raisa",
      titleMobile: "Raisa",
      imageUrl: "/raisa-bw.jpg",
      alt: "Raisa",
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Rudy x Ferdy",
      titleMobile: "Rudy x Ferdy",
      imageUrl: "/rudy-ferdy.png",
      alt: "Rudy x Ferdy",
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Project Pop",
      titleMobile: "Project Pop",
      imageUrl: "/project-pop.png",
      alt: "Project Pop",
      variant: "rose",
      showGridLines: true,
    },
  ] as CardProps[];

  return <LineUp cards={cards} />;
}

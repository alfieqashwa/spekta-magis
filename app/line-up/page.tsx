import { LineUp } from "@/components/lineup";
import { type CardProps } from "@/components/ui/pulse-card";

export default function LineupPage() {
  const cards = [
    {
      title: "Rudy & Ferdy",
      titleMobile: "Rudy & Ferdy",
      imageUrl: "/rudy-ferdy.png",
      alt: "Rudy Ferdy",
      variant: "emerald",
      showGridLines: true,
    },
    {
      title: "Raisa",
      titleMobile: "Raisa",
      imageUrl: "/raisa-bw.jpg",
      alt: "Raisa",
      variant: "purple",
      showGridLines: true,
    },
    {
      title: "Beddu",
      titleMobile: "Beddu",
      imageUrl: "/beddu.png",
      alt: "Beddu",
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

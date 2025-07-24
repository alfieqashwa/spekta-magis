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
      imageUrl: "/line-up/raisa-bw.jpg",
      alt: "Raisa",
      description: "Raisa adalah penyanyi papan atas asal Indonesia yang dikenal dengan suara emas, pesona elegan dan fanbase loyal yang menjadikannya magnet kuat untuk menarik perhatian dan membangun citra premium dengan karya-karyanya.",
      linkSpotify: "https://open.spotify.com/artist/5OZXWMwDhlYBRvoOfcX0sk",
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Rudy x Ferdy",
      titleMobile: ["Rudy Nugraha", "Ferdy Element"],
      imageUrl: "/line-up/rudy-ferdy-potrait.png",
      alt: "Rudy x Ferdy",
      description: "Rudy Nugraha dan Ferdy Element menghadirkan perpaduan vokal kuat dan karisma panggung yang emosional, menciptakan performa penuh nostalgia dan kekuatan musikal yang mampu menghipnotis penonton.",
      linkSpotify: "https://open.spotify.com/artist/4Kzj159UgcJe08vRC0Bdne?si=EWQfu3umR8q3rhQq8zOWiA", // Rudy Nugraha
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "Project Pop",
      imageUrl: "/line-up/project-pop-potrait.png",
      alt: "Project Pop",
      description: "Project Pop adalah grup musik legendaris dengan energi panggung yang luar biasa, lagu-lagu ikonik yang penuh humor, bermakna, serta kemampuan menghibur lintas generasi yang menjadikan mereka aset berharga untuk menciptakan suasana meriah dan tak terlupakan.",
      linkSpotify: "https://open.spotify.com/artist/2D3ztMHoKJOJs3HgQJPXf6",
      variant: "rose",
      showGridLines: true,
    },
  ] as CardProps[];

  return <LineUp cards={cards} />;
}

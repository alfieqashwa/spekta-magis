import { Events } from "@/components/events";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  const images = [
    { src: "/events/2.png", alt: "event-2" },
    { src: "/events/3.png", alt: "event-3" },
    { src: "/events/4.png", alt: "event-4" },
    { src: "/events/5.png", alt: "event-5" },
    { src: "/events/6.png", alt: "event-6" },
    { src: "/events/7.png", alt: "event-7" },
    { src: "/events/8.png", alt: "event-8" },
    { src: "/events/9.png", alt: "event-9" },
    { src: "/events/10.png", alt: "event-10" },
  ];

  return <Events images={images} />;
}

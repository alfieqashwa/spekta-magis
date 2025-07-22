import { Events } from "@/components/events";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return <Events />;
}

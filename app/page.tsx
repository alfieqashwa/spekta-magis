import { ParaKreator } from "@/components/para-kreator";
import Waitlist from "@/components/wait-list";

export default function Home() {
  return (
    <div className="relative">
      <ParaKreator />
      <Waitlist />
    </div>
  );
}

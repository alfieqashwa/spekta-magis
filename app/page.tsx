import { ParaKreator } from "@/components/para-kreator";
import { Spektamagis } from "@/components/spektamagis";
import Waitlist from "@/components/wait-list";

export default function Home() {
  return (
    <div className="relative">
      <Spektamagis />
      <ParaKreator />
      <Waitlist />
    </div>
  );
}

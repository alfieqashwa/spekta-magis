import { AllArtists } from "@/components/all-artists";
import { ParaKreator } from "@/components/para-kreator";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  const ORIGINAL_WIDTH = 5781;
  const ORIGINAL_HEIGHT = 4621;

  const newWidth = 1024;
  const newHeight = Math.round((ORIGINAL_HEIGHT / ORIGINAL_WIDTH) * newWidth);

  return (
    <div className="relative">
      <div className="absolute inset-0 m-0 md:m-20">
        <AllArtists width={newWidth} height={newHeight} />
      </div>
      <ParaKreator />
      <ParticlesBackground />
    </div>
  );
}

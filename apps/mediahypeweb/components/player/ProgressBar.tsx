"use client";

import * as Slider from "@radix-ui/react-slider";
import { usePlayerStore } from "@/stores/playerstores";

export default function ProgressBar() {
  const { currentTime, duration } = usePlayerStore();

  const value = duration === 0 ? 0 : (currentTime / duration) * 100;

  return (
    <Slider.Root className="relative flex h-1 w-full items-center" value={[value]} max={100}>
      <Slider.Track className="relative h-1 grow rounded-full bg-neutral-700">
        <Slider.Range className="absolute h-full rounded-full bg-white" />
      </Slider.Track>

      <Slider.Thumb className="block h-4 w-4 rounded-full bg-white shadow-lg transition hover:scale-110" />
    </Slider.Root>
  );
}

"use client";

import { useEffect } from "react";
import { usePlayerStore } from "@/stores/playerstores";

export default function useKeyboardShortcuts() {
  const { isPlaying, play, pause, next, previous, isExpanded, collapse } = usePlayerStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts while typing
      const target = e.target as HTMLElement;

      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }

      switch (e.code) {
        case "Space":
          e.preventDefault();

          if (isPlaying) {
            pause();
          } else {
            play();
          }
          break;

        case "Escape":
          if (isExpanded) {
            collapse();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying, isExpanded, play, pause, next, previous, collapse]);
}

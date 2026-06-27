"use client";
import MiniPlayer from "./MiniPlayer";
import FullPlayer from "./FullPlayer";
import useKeyboardShortcuts from "@/hooks/useKeyboardShortcuts";
import AudioEngine from "./AudioEngine";

export default function PlayerRoot() {
  useKeyboardShortcuts();
  return (
    <>
      <AudioEngine />
      <MiniPlayer />
      <FullPlayer />
    </>
  );
}

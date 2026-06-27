"use client";

import { useEffect, useRef } from "react";
import { usePlayerStore } from "../../stores/playerstores";

export default function AudioEngine() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong, isPlaying, next, setCurrentTime, setDuration } = usePlayerStore();

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    audioRef.current.src = currentSong.audio;

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
      onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
      onEnded={next}
    />
  );
}

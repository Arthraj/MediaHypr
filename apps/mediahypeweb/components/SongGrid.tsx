"use client";

import { useEffect } from "react";
import { songs } from "@/lib/songs";
import SongCard from "./SongCard";
import { usePlayerStore } from "../stores/playerstores";

export default function SongGrid() {
  const setQueue = usePlayerStore((state) => state.setQueue);

  useEffect(() => {
    setQueue(songs);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {songs.map((song, index) => (
        <SongCard key={song.id} song={song} index={index} />
      ))}
    </div>
  );
}

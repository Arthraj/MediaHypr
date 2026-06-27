"use client";

import Image from "next/image";
import { Song } from "../types/songs";
import { usePlayerStore } from "../stores/playerstores";

interface Props {
  song: Song;
  index: number;
}

export default function SongCard({ song, index }: Props) {
  const playSong = usePlayerStore((state) => state.playSong);

  return (
    <div className="cursor-pointer" onClick={() => playSong(song, index)}>
      <Image src={song.cover} alt={song.title} loading="eager" width={250} height={250} />

      <h2>{song.title}</h2>

      <p>{song.artist}</p>
    </div>
  );
}

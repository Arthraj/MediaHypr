"use client";

import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

import { usePlayerStore } from "../../stores/playerstores";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

export default function MiniPlayer() {
  const { currentSong, isPlaying, play, pause, next, previous, currentTime, duration, expand } =
    usePlayerStore();

  if (!currentSong) return null;

  return (
    <div
      onClick={expand}
      className="fixed right-0 bottom-0 left-0 border-t border-neutral-800 bg-neutral-900"
    >
      <ProgressBar />

      <div className="flex h-[80px] items-center justify-between px-6 text-white">
        {/* LEFT */}

        <div className="flex items-center gap-4">
          <motion.div layoutId="cover">
            <Image
              src={currentSong.cover}
              alt={currentSong.title}
              width={56}
              height={56}
              className="rounded-lg"
              loading="eager"
            />
          </motion.div>

          <div>
            <motion.h1 layoutId="title">{currentSong.title}</motion.h1>

            <motion.h4 layoutId="artist">{currentSong.artist}</motion.h4>
          </div>
        </div>

        {/* CENTER */}

        <div className="flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
          <button onClick={previous}>
            <SkipBack />
          </button>

          <button onClick={() => (isPlaying ? pause() : play())}>
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button onClick={next}>
            <SkipForward />
          </button>
        </div>

        {/* volume control can be added here in future */}

        {/* RIGHT */}

        {/* <div className="w-60">
                    <div className="h-1 bg-neutral-700 rounded-full">
                        <div
                            className="h-1 bg-white rounded-full transition-all"
                            style={{
                                width: `${duration === 0
                                    ? 0
                                    : (currentTime / duration) * 100
                                    }%`,
                            }}
                        />
                    </div>
                </div> */}
      </div>
    </div>
  );
}

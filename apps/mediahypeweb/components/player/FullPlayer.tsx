"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronDown, Pause, Play, SkipBack, SkipForward } from "lucide-react";

import ProgressBar from "./ProgressBar";
import { usePlayerStore } from "@/stores/playerstores";

export default function FullPlayer() {
  const { currentSong, collapse, isExpanded, play, pause, next, previous, isPlaying } =
    usePlayerStore();

  if (!currentSong) return null;

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
          }}
          className="fixed inset-0 z-999 bg-black"
        >
          <div className="flex h-full flex-col">
            <div className="p-5">
              <button onClick={collapse}>
                <ChevronDown size={30} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-10">
              <motion.div layoutId="cover">
                <Image
                  src={currentSong.cover}
                  alt={currentSong.title}
                  width={350}
                  height={350}
                  className="rounded-3xl shadow-2xl"
                  loading="eager"
                />
              </motion.div>

              <div className="mt-10 text-center">
                <motion.h1 layoutId="title">{currentSong.title}</motion.h1>

                <motion.h2 layoutId="artist">{currentSong.artist}</motion.h2>
              </div>

              <div className="mt-12 w-full">
                <ProgressBar />
              </div>

              <div className="mt-10 flex items-center gap-12">
                <button onClick={previous}>
                  <SkipBack size={38} />
                </button>

                <button
                  onClick={() => (isPlaying ? pause() : play())}
                  className="rounded-full bg-white p-6 text-black"
                >
                  {isPlaying ? <Pause size={40} /> : <Play size={40} />}
                </button>

                <button onClick={next}>
                  <SkipForward size={38} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

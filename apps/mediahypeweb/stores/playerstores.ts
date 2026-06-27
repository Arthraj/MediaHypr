import { create } from "zustand";
import { Song } from "../types/songs";

interface PlayerStore {
  queue: Song[];
  currentSong: Song | null;
  currentIndex: number;

  isPlaying: boolean;
  currentTime: number;
  duration: number;

  isExpanded: boolean;

  setQueue: (songs: Song[]) => void;
  playSong: (song: Song, index: number) => void;

  play: () => void;
  pause: () => void;

  next: () => void;
  previous: () => void;

  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;

  expand: () => void;
  collapse: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  queue: [],
  currentSong: null,
  currentIndex: 0,

  isPlaying: false,
  currentTime: 0,
  duration: 0,

  isExpanded: false,

  setQueue: (songs) => set({ queue: songs }),

  playSong: (song, index) =>
    set({
      currentSong: song,
      currentIndex: index,
      isPlaying: true,
    }),

  play: () => set({ isPlaying: true }),

  pause: () => set({ isPlaying: false }),

  next: () => {
    const { queue, currentIndex } = get();

    if (currentIndex >= queue.length - 1) return;

    set({
      currentIndex: currentIndex + 1,
      currentSong: queue[currentIndex + 1],
      isPlaying: true,
    });
  },

  previous: () => {
    const { queue, currentIndex } = get();

    if (currentIndex <= 0) return;

    set({
      currentIndex: currentIndex - 1,
      currentSong: queue[currentIndex - 1],
      isPlaying: true,
    });
  },

  setCurrentTime: (time) =>
    set({
      currentTime: time,
    }),

  setDuration: (duration) =>
    set({
      duration,
    }),

  expand: () => set({ isExpanded: true }),

  collapse: () => set({ isExpanded: false }),
}));

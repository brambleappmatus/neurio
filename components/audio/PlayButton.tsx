'use client';

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

interface PlayButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function PlayButton({ isPlaying, onToggle }: PlayButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-black dark:bg-emerald-500 text-white hover:bg-gray-900 dark:hover:bg-emerald-600 transition-all duration-200 shadow-lg"
    >
      {isPlaying ? (
        <PauseIcon className="w-5 h-5" />
      ) : (
        <PlayIcon className="w-5 h-5" />
      )}
    </button>
  );
}
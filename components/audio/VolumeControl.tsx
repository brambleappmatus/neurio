'use client';

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export function VolumeControl({ volume, onVolumeChange }: VolumeControlProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onVolumeChange(volume === 0 ? 1 : 0)}
        className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        {volume === 0 ? (
          <SpeakerXMarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        ) : (
          <SpeakerWaveIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        )}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="volume-slider hidden sm:block"
      />
    </div>
  );
}
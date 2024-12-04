'use client';

import { formatTime } from '@/utils/audio';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  progress: number;
  onTimeChange: (time: number) => void;
}

export function ProgressBar({ currentTime, duration, progress, onTimeChange }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums w-12 text-right">
        {formatTime(currentTime)}
      </span>
      
      <div className="flex-1 audio-progress-container">
        <div 
          className="audio-progress-bar"
          style={{ width: `${progress}%` }}
        />
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => onTimeChange(Number(e.target.value))}
          className="audio-progress"
        />
      </div>
      
      <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums w-12">
        {formatTime(duration || 0)}
      </span>
    </div>
  );
}
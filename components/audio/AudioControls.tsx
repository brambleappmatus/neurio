'use client';

import { AudioTrack } from '@/data/audioTracks';
import { PlayButton } from './PlayButton';
import { TrackInfo } from './TrackInfo';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';

interface AudioControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentTrack: AudioTrack;
  onToggle: () => void;
  onTimeChange: (time: number) => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export function AudioControls({
  isPlaying,
  currentTime,
  duration,
  currentTrack,
  onToggle,
  onTimeChange,
  volume,
  onVolumeChange,
}: AudioControlsProps) {
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <PlayButton isPlaying={isPlaying} onToggle={onToggle} />
        <TrackInfo title={currentTrack.title} subtitle={currentTrack.subtitle} />
      </div>

      <div className="flex-1 w-full sm:w-auto">
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          progress={progress}
          onTimeChange={onTimeChange}
        />
      </div>

      <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />
    </div>
  );
}
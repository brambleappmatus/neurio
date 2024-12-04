import { AudioTrack } from '@/data/audioTracks';

interface TrackImageProps {
  track: AudioTrack;
}

export function TrackImage({ track }: TrackImageProps) {
  return (
    <div className="w-10 h-10 rounded-md overflow-hidden bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30" />
  );
}
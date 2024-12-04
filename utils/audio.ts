// Time formatting utilities
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

// Audio element controls
export const setAudioVolume = (audioElement: HTMLAudioElement, volume: number): void => {
  audioElement.volume = Math.max(0, Math.min(1, volume));
};

export const calculateProgress = (currentTime: number, duration: number): number => {
  return duration ? (currentTime / duration) * 100 : 0;
};

// Progress bar utilities
export const calculateTimeFromClick = (
  event: React.MouseEvent<HTMLDivElement>,
  element: HTMLDivElement,
  duration: number
): number => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const percentage = x / rect.width;
  return Math.max(0, Math.min(percentage * duration, duration));
};
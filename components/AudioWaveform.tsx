'use client';

export function AudioWaveform() {
  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-center space-x-1 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="w-0.5 h-8 bg-emerald-500/30 rounded-full animate-wave"
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  );
}
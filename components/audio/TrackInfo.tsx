'use client';

interface TrackInfoProps {
  title: string;
  subtitle: string;
}

export function TrackInfo({ title, subtitle }: TrackInfoProps) {
  return (
    <div className="flex flex-col min-w-0">
      <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
        {title}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
        {subtitle}
      </span>
    </div>
  );
}
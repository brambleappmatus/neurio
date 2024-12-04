import { motion, AnimatePresence } from 'framer-motion';
import { QueueListIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { AudioTrack } from '@/data/audioTracks';

interface TrackListProps {
  tracks: AudioTrack[];
  currentTrack: AudioTrack;
  isOpen: boolean;
  onToggle: () => void;
  onTrackSelect: (track: AudioTrack) => void;
}

export function TrackList({
  tracks,
  currentTrack,
  isOpen,
  onToggle,
  onTrackSelect,
}: TrackListProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          isOpen 
            ? 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
            : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400'
        }`}
      >
        <QueueListIcon className="w-5 h-5" />
        <span className="text-sm font-medium">Tracks</span>
        <ChevronUpIcon
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-black/10 dark:border-white/10 z-[60]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="grid gap-1.5">
                {tracks.map((track) => (
                  <motion.button
                    key={track.id}
                    onClick={() => onTrackSelect(track)}
                    className={`p-3 rounded-lg ${
                      currentTrack.id === track.id
                        ? 'bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500'
                        : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                    } transition-all duration-200 text-left group w-full`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-black dark:text-white">
                          {track.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {track.subtitle}
                        </div>
                      </div>
                      {currentTrack.id === track.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { SpotifyTrack } from '@/app/api/spotify/route'

export default function SpotifyWidget() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  useEffect(() => {
    const fetchTrack = async (): Promise<void> => {
      try {
        const res = await fetch('/api/spotify')
        const data = (await res.json()) as SpotifyTrack
        if (data.title) setTrack(data)
      } catch {
        // silently fail
      }
    }

    void fetchTrack()
    const interval = setInterval(() => void fetchTrack(), 30000)
    return () => clearInterval(interval)
  }, [])

  if (!track) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex w-64 items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Album Art */}
            {track.albumImage && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={track.albumImage}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
                {/* Spinning vinyl effect when playing */}
                {track.isPlaying && (
                  <div className="absolute inset-0 rounded-lg ring-2 ring-green-400/50" />
                )}
              </div>
            )}

            {/* Track Info */}
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 flex items-center gap-1.5">
                {/* Spotify icon */}
                <svg
                  className="h-3 w-3 shrink-0 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                  {track.isPlaying ? 'Now playing' : 'Recently played'}
                </p>
              </div>
              <a
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate text-sm font-bold text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400"
              >
                {track.title}
              </a>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {track.artist}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="shrink-0 text-gray-300 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:scale-110 dark:border-gray-700 dark:bg-gray-900"
          >
            {track.albumImage ? (
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={track.albumImage}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
                {track.isPlaying && (
                  <div className="absolute inset-0 rounded-full ring-2 ring-green-400" />
                )}
              </div>
            ) : (
              <svg
                className="h-5 w-5 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

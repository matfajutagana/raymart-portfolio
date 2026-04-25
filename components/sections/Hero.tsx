'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { MapPin, Download } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { socialLinks } from '@/lib/data'
import type { SocialLink } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section className="px-6 pb-10 pt-24">
      <div className="mx-auto max-w-5xl px-0">
        {/* Top row — photo + name side by side on ALL screens */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 flex items-center gap-5"
        >
          {/* Profile Photo — small and compact */}
          <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
            <div className="absolute inset-0 -rotate-3 scale-105 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 dark:from-blue-500/10 dark:to-blue-900/20" />
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm dark:border-gray-700">
              {mounted && (
                <AnimatePresence mode="sync">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        isDark
                          ? '/images/profile-dark.png'
                          : '/images/profile-light.png'
                      }
                      alt="Raymart Fajutagana"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>

          {/* Name + title beside photo */}
          <div>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
              Raymart Fajutagana
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 md:text-base">
              Full-Stack Developer
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <MapPin size={12} />
              Greater Toronto Area, Canada
            </div>
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 dark:border-green-800 dark:bg-green-950"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-700 dark:text-green-400">
            Open to opportunities in Canada
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base"
        >
          Full-Stack Developer with 4+ years of experience building scalable
          SaaS platforms and enterprise web applications. Specialized in backend
          development, database optimization, and API integrations. Previously
          worked with Australian and Philippine-based teams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500"
          >
            View experience
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Download size={13} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex items-center gap-5"
        >
          {socialLinks.map((link: SocialLink) => (
            <a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

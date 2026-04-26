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
    <section id="about" className="px-6 pb-12 pt-24">
      <div className="mx-auto max-w-5xl">
        {/* Top row — photo + name */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 flex items-center gap-6"
        >
          {/* Profile Photo */}
          <div className="relative h-24 w-24 shrink-0 md:h-28 md:w-28">
            <div className="absolute inset-0 -rotate-3 scale-105 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 dark:from-blue-500/10 dark:to-blue-900/20" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md dark:border-gray-700">
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

          {/* Name + title */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Raymart Fajutagana
            </h1>
            <p className="mt-1 text-base font-medium text-gray-500 dark:text-gray-400">
              Full-Stack Developer
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
              <MapPin size={13} />
              Greater Toronto Area, Canada
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-7 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300"
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
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500"
          >
            View experience
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
          className="flex items-center gap-6"
        >
          {socialLinks.map((link: SocialLink) => (
            <a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

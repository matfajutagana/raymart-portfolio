'use client'

import { motion } from 'framer-motion'
import { MapPin, Download } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import type { SocialLink } from '@/types'
import type { Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto w-full max-w-5xl pb-16 pt-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-700">
            Open to opportunities in Canada
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl"
        >
          Raymart
          <br />
          <span className="text-blue-600">Fajutagana</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-6 text-xl font-light text-gray-500 md:text-2xl"
        >
          Full-Stack Developer
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin size={14} />
            Greater Toronto Area, ON
          </span>
          <span className="text-gray-300">|</span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
        >
          Full-Stack Developer with 4+ years of experience building scalable
          SaaS platforms and enterprise web applications. Specialized in backend
          development, database optimization, and API integrations. Previously
          worked with Australian and Philippine-based teams.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mb-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400"
          >
            View experience
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link: SocialLink) => (
            <a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

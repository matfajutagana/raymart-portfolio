'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { publications } from '@/lib/data'
import type { Publication } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function Publications() {
  return (
    <section id="publications" className="py-6">
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4 flex items-center gap-3"
        >
          <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-950">
            <BookOpen size={18} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Publications
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-16 ml-11 text-sm text-gray-500 dark:text-gray-400"
        >
          Peer-reviewed research presented at international conferences.
        </motion.p>

        <div className="space-y-6">
          {publications.map((pub: Publication, index: number) => (
            <motion.div
              key={pub.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-100 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-3 text-base font-semibold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {pub.conference}
                    </span>
                    <span className="text-gray-200 dark:text-gray-700">·</span>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:border-blue-800 dark:bg-blue-950">
                      {pub.year}
                    </span>
                  </div>
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:text-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

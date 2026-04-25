'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { techStack } from '@/lib/data'
import type { TechCategory } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
}

export default function TechStack() {
  return (
    <section id="tech" className="bg-gray-50 px-6 py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-6 flex items-center gap-2"
        >
          <Code2 size={16} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-4">
          {techStack.map((category: TechCategory, index: number) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="flex flex-col gap-3 sm:flex-row sm:items-start"
            >
              <span className="w-32 shrink-0 pt-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-100 bg-white px-2.5 py-1 text-xs text-gray-700 transition-colors duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950 dark:hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

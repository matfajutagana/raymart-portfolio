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
    <section id="tech" className="py-6">
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-5 flex items-center gap-2"
        >
          <Code2 size={18} className="text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-5">
          {techStack.map((category: TechCategory, index: number) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950 dark:hover:text-blue-400"
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

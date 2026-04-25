'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { techStack } from '@/lib/data'
import type { TechCategory } from '@/types'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function TechStack() {
  return (
    <section id="tech" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-16 flex items-center gap-3"
        >
          <div className="rounded-lg bg-blue-50 p-2">
            <Code2 size={18} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techStack.map((category: TechCategory, index: number) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-sm text-gray-700 transition-colors duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
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

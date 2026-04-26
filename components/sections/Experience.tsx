'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/data'
import type { Experience } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="py-6">
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-5 flex items-center gap-2"
        >
          <Briefcase size={18} className="text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp: Experience, index: number) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600">
                    {exp.company}
                  </p>
                </div>
                <span className="whitespace-nowrap text-xs font-medium text-gray-400 dark:text-gray-500">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {exp.description.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

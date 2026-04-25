'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/data'
import type { Experience } from '@/types'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 px-6 py-24">
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
            <Briefcase size={18} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp: Experience, index: number) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[3.5px] rounded-full bg-blue-600" />

                {/* Content */}
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-blue-600">
                        {exp.company}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { FolderOpen, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import type { Project } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="py-6">
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-6 flex items-center gap-2"
        >
          <FolderOpen size={16} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project: Project, index: number) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:border-blue-100 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-800"
            >
              {project.image && (
                <div className="relative h-32 w-full overflow-hidden bg-gray-50 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="mb-1.5 flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white">
                    {project.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="ml-2 shrink-0 text-gray-300 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-600"
                  />
                </div>
                <p className="mb-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-100 bg-gray-50 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

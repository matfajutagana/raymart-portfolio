'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import type { Project } from '@/types'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
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
            <FolderOpen size={18} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:border-blue-100 hover:shadow-md"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                    {project.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="ml-2 shrink-0 text-gray-300 transition-colors duration-200 group-hover:text-blue-600"
                  />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-500"
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

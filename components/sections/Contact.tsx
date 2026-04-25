'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Mail, GitBranch, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
}

interface FormState {
  name: string
  email: string
  message: string
}

interface SubmitStatus {
  type: 'success' | 'error' | null
  message: string
}

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'fajutaganaraymart@gmail.com',
    href: 'mailto:fajutaganaraymart@gmail.com',
    icon: <Mail size={16} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/raymart-fajutagana',
    href: 'https://linkedin.com/in/raymart-fajutagana-953043132',
    icon: <Send size={16} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/matfajutagana',
    href: 'https://github.com/matfajutagana',
    icon: <GitBranch size={16} />,
  },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [status, setStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Inquiry from ${form.name}`,
        }),
      })

      const data = (await response.json()) as { success: boolean }

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent! I will get back to you soon.',
        })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="mt-6 border-t border-gray-100 py-6 dark:border-gray-800"
    >
      <div>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-2"
        >
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Let&apos;s work together
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Open to full-time software engineering opportunities in Canada. Feel
            free to reach out.
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-6 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500"
        >
          <MapPin size={12} />
          <span>
            Greater Toronto Area — open to remote and hybrid roles across Canada
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or just say hi!"
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              {status.type && (
                <div
                  className={`rounded-lg px-3 py-2 text-xs ${
                    status.type === 'success'
                      ? 'border border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400'
                      : 'border border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:bg-blue-400"
              >
                <Send size={13} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="space-y-3"
          >
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:border-blue-100 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-800"
              >
                <div className="rounded-lg bg-gray-50 p-2 text-gray-400 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-gray-700 dark:text-gray-500 dark:group-hover:bg-blue-950">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-700 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-300">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mt-10 border-t border-gray-100 pt-6 dark:border-gray-800"
        >
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Raymart Fajutagana. Built with Next.js
            and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
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
    icon: <Mail size={18} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/raymart-fajutagana',
    href: 'https://linkedin.com/in/raymart-fajutagana-953043132',
    icon: <Send size={18} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/matfajutagana',
    href: 'https://github.com/matfajutagana',
    icon: <GitBranch size={18} />,
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
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4 max-w-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="leading-relaxed text-gray-500">
            I&apos;m currently open to full-time software engineering
            opportunities in Canada. Whether you have a role in mind or just
            want to connect, feel free to reach out.
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-12 flex items-center gap-2 text-sm text-gray-500"
        >
          <MapPin size={14} />
          <span>
            Based in Greater Toronto Area — open to remote and hybrid roles
            across Canada
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or just say hi!"
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border border-green-200 bg-green-50 text-green-700'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:bg-blue-400"
              >
                <Send size={14} />
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
            className="space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-100 hover:shadow-md"
              >
                <div className="rounded-lg bg-gray-50 p-2 text-gray-400 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                  {link.icon}
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                    {link.label}
                  </p>
                  <p className="text-sm text-gray-700 transition-colors duration-200 group-hover:text-blue-600">
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
          className="mt-16 border-t border-gray-200 pt-8"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Raymart Fajutagana. Built with Next.js
            and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

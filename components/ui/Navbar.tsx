'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { navItems } from '@/lib/data'
import type { NavItem } from '@/types'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDark = mounted && theme === 'dark'

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-gray-950/90'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-bold tracking-tight text-gray-900 dark:text-white"
        >
          RF<span className="text-blue-600">.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item: NavItem) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — toggle + mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Switch */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative flex h-7 w-14 items-center rounded-full border transition-all duration-300 ${
                isDark
                  ? 'border-gray-600 bg-gray-700'
                  : 'border-gray-200 bg-gray-100'
              }`}
            >
              {/* Icons */}
              <span className="absolute left-1.5 flex items-center justify-center text-yellow-400">
                <Sun size={12} />
              </span>
              <span className="absolute right-1.5 flex items-center justify-center text-blue-400">
                <Moon size={12} />
              </span>

              {/* Sliding pill */}
              <span
                className={`absolute h-5 w-5 rounded-full shadow-sm transition-all duration-300 ${
                  isDark
                    ? 'translate-x-7 bg-gray-200'
                    : 'translate-x-1 bg-white'
                }`}
              />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 dark:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item: NavItem) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

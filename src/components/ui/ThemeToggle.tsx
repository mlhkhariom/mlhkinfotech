'use client'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 z-50 w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-2xl text-yellow-400" />
        ) : (
          <FaMoon className="text-2xl text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  )
}

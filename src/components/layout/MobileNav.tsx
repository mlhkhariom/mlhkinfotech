'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiHome, HiViewGrid, HiBriefcase, HiNewspaper, HiMail } from 'react-icons/hi'

export default function MobileNav() {
  const pathname = usePathname()

  const links = [
    { href: '/', icon: HiHome },
    { href: '/services', icon: HiViewGrid },
    { href: '/portfolio', icon: HiBriefcase },
    { href: '/blog', icon: HiNewspaper },
    { href: '/contact', icon: HiMail },
  ]

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 glass rounded-3xl border border-white/10 pb-safe backdrop-blur-2xl"
      style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="flex justify-around items-center px-4 py-4">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative"
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#00F5FF] to-[#0066FF] shadow-lg shadow-[#00F5FF]/50' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <link.icon
                  className={`text-xl ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                />
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00F5FF]"
                  style={{ boxShadow: '0 0 8px #00F5FF' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}

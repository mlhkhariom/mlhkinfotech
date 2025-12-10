'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass border-b border-white/5 backdrop-blur-xl"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text text-glow tracking-tight">
          MLHK<span className="text-white/40">.</span>
        </Link>
        
        <div className="hidden lg:flex gap-1 glass rounded-full px-2 py-2">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="px-5 py-2 rounded-full hover:bg-white/10 transition-all text-sm font-medium hover:text-[#00F5FF]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden glass p-2 rounded-lg hidden">
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/5"
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-4 hover:bg-white/5 border-b border-white/5 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

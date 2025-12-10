'use client'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl mb-4"
            >
              🤷‍♂️
            </motion.div>
            <motion.div
              className="absolute -top-10 -right-10 text-6xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❓
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-9xl font-bold gradient-text mb-4">404</div>
            <h1 className="text-4xl font-bold mb-4">Oops! Lost in Space</h1>
            <div className="glass p-6 rounded-2xl mb-8 inline-block">
              <p className="text-xl text-gray-300 mb-2">"We're sorry, but this page doesn't exist!"</p>
              <p className="text-gray-400">Looks like you've ventured into uncharted territory.</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="/">
            <Button>🏠 Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">📧 Contact Us</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          <Link href="/services" className="glass p-4 rounded-xl hover:border-cyan-500 transition">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-sm text-gray-400">Services</div>
          </Link>
          <Link href="/portfolio" className="glass p-4 rounded-xl hover:border-cyan-500 transition">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-sm text-gray-400">Portfolio</div>
          </Link>
          <Link href="/blog" className="glass p-4 rounded-xl hover:border-cyan-500 transition">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-sm text-gray-400">Blog</div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

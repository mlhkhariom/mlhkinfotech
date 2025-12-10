'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
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
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-9xl mb-4"
            >
              😱
            </motion.div>
            <motion.div
              className="absolute -top-5 -right-5 text-5xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚠️
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-9xl font-bold gradient-text mb-4">500</div>
            <h1 className="text-4xl font-bold mb-4">Oops! Something Broke</h1>
            <div className="glass p-6 rounded-2xl mb-8 inline-block">
              <p className="text-xl text-gray-300 mb-2">"We're really sorry about this!"</p>
              <p className="text-gray-400">Our team has been notified and we're working on it.</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button onClick={reset}>🔄 Try Again</Button>
          <Link href="/">
            <Button variant="outline">🏠 Go Home</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500">Error ID: {error.digest || 'Unknown'}</p>
        </motion.div>
      </div>
    </div>
  )
}

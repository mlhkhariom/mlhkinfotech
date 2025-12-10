'use client'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center relative z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 mx-auto mb-6"
        >
          <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
        </motion.div>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-xl text-gray-300 mb-2">Loading amazing content...</p>
          <div className="flex gap-2 justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-cyan-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

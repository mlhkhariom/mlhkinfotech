'use client'
import { motion } from 'framer-motion'

interface Character3DProps {
  type: 'welcome' | 'services' | 'portfolio' | 'blog' | 'contact' | 'error' | 'success'
  message?: string
  position?: 'left' | 'right' | 'center'
}

export default function Character3D({ type, message, position = 'right' }: Character3DProps) {
  const characters = {
    welcome: { emoji: '👋', animation: { rotate: [0, 20, -20, 0] } },
    services: { emoji: '🚀', animation: { y: [0, -20, 0] } },
    portfolio: { emoji: '🎨', animation: { rotate: [0, 360] } },
    blog: { emoji: '📝', animation: { scale: [1, 1.1, 1] } },
    contact: { emoji: '💬', animation: { x: [-5, 5, -5] } },
    error: { emoji: '😅', animation: { rotate: [0, -10, 10, 0] } },
    success: { emoji: '🎉', animation: { y: [0, -10, 0], rotate: [0, 10, -10, 0] } },
  }

  const char = characters[type]
  const positionClass = position === 'left' ? 'left-4' : position === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.8 }}
      className={`fixed bottom-8 ${positionClass} z-50 hidden md:block`}
    >
      <div className="relative">
        {/* Speech Bubble */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-full mb-4 right-0 glass p-4 rounded-2xl max-w-xs shadow-2xl"
          >
            <p className="text-sm text-white">{message}</p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/10 backdrop-blur-xl rotate-45"></div>
          </motion.div>
        )}

        {/* Character */}
        <motion.div
          animate={char.animation}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-8xl cursor-pointer hover:scale-110 transition-transform"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 245, 255, 0.3))' }}
        >
          {char.emoji}
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl -z-10"
        />
      </div>
    </motion.div>
  )
}

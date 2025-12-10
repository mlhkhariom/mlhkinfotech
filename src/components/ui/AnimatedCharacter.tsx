'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCharacterProps {
  messages: string[]
  position?: 'left' | 'right'
}

export default function AnimatedCharacter({ messages, position = 'right' }: AnimatedCharacterProps) {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [messages.length])

  const positionClass = position === 'left' ? 'left-8' : 'right-8'

  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', duration: 1 }}
      className={`fixed bottom-8 ${positionClass} z-40 hidden lg:block`}
    >
      <div className="relative">
        {/* Speech Bubble */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`absolute bottom-full mb-6 ${position === 'left' ? 'left-0' : 'right-0'} glass p-6 rounded-3xl max-w-sm shadow-2xl border border-white/20`}
        >
          <p className="text-white font-medium leading-relaxed">{messages[currentMessage]}</p>
          <div className={`absolute -bottom-3 ${position === 'left' ? 'left-12' : 'right-12'} w-6 h-6 bg-white/10 backdrop-blur-xl rotate-45 border-r border-b border-white/20`}></div>
        </motion.div>

        {/* 3D Character */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div className="relative w-40 h-48">
            {/* Head */}
            <motion.div
              animate={{ 
                rotateY: [-10, 10, -10],
                rotateX: [-5, 5, -5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Face */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00]"
                style={{ 
                  boxShadow: '0 15px 50px rgba(255, 165, 0, 0.6), inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.3)',
                }}
              >
                {/* Eyes */}
                <motion.div 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute top-8 left-4 w-4 h-5 bg-white rounded-full"
                  style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  <div className="absolute top-1 left-1 w-2.5 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                </motion.div>
                <motion.div 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute top-8 right-4 w-4 h-5 bg-white rounded-full"
                  style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  <div className="absolute top-1 left-1 w-2.5 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                </motion.div>
                
                {/* Nose */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-4 bg-gradient-to-b from-[#FF8C00] to-[#FF6347] rounded-full"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                />
                
                {/* Mouth */}
                <motion.div
                  animate={{ scaleX: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-5 border-b-3 border-[#8B4513] rounded-b-full"
                  style={{ borderBottomWidth: '3px' }}
                />
              </div>
            </motion.div>

            {/* Body */}
            <motion.div 
              animate={{ rotateY: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-24 rounded-3xl bg-gradient-to-br from-[#00F5FF] via-[#0066FF] to-[#9D00FF]"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 60px rgba(0, 102, 255, 0.6), inset -3px -3px 10px rgba(0,0,0,0.3), inset 3px 3px 10px rgba(255,255,255,0.2)',
              }}
            >
              {/* Buttons */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/40"></div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/40"></div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/40"></div>
              
              {/* Left Arm */}
              <motion.div
                animate={{ 
                  rotate: [0, -30, 0, 20, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-2 top-2 w-4 h-16 origin-top"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFD700] to-[#FFA500]"
                  style={{ boxShadow: '0 5px 15px rgba(255, 165, 0, 0.5)' }}
                />
                {/* Hand */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF8C00]"
                  style={{ boxShadow: '0 3px 10px rgba(255, 140, 0, 0.6)' }}
                />
              </motion.div>
              
              {/* Right Arm */}
              <motion.div
                animate={{ 
                  rotate: [0, 30, 0, -20, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-2 top-2 w-4 h-16 origin-top"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFD700] to-[#FFA500]"
                  style={{ boxShadow: '0 5px 15px rgba(255, 165, 0, 0.5)' }}
                />
                {/* Hand */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF8C00]"
                  style={{ boxShadow: '0 3px 10px rgba(255, 140, 0, 0.6)' }}
                />
              </motion.div>
            </motion.div>

            {/* Legs */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
              <motion.div
                animate={{ rotateZ: [0, -5, 0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-6 h-10 origin-top"
              >
                <div className="w-full h-full rounded-b-xl bg-gradient-to-b from-[#0066FF] to-[#003399]"
                  style={{ boxShadow: '0 5px 15px rgba(0, 51, 153, 0.5)' }}
                />
                {/* Shoe */}
                <div className="absolute -bottom-1 left-0 w-7 h-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#000]"
                  style={{ boxShadow: '0 3px 8px rgba(0,0,0,0.8)' }}
                />
              </motion.div>
              
              <motion.div
                animate={{ rotateZ: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-6 h-10 origin-top"
              >
                <div className="w-full h-full rounded-b-xl bg-gradient-to-b from-[#0066FF] to-[#003399]"
                  style={{ boxShadow: '0 5px 15px rgba(0, 51, 153, 0.5)' }}
                />
                {/* Shoe */}
                <div className="absolute -bottom-1 left-0 w-7 h-4 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#000]"
                  style={{ boxShadow: '0 3px 8px rgba(0,0,0,0.8)' }}
                />
              </motion.div>
            </div>
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

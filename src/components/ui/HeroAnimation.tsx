'use client'
import { motion } from 'framer-motion'

export default function HeroAnimation() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Central Hologram */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80"
        style={{ x: '-50%', y: '-50%' }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Rotating Rings */}
          {[0, 60, 120].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 rounded-full"
              style={{
                borderColor: ['#00F5FF', '#0066FF', '#9D00FF'][i],
                transform: `rotateY(${rotation}deg)`,
                boxShadow: `0 0 30px ${['#00F5FF', '#0066FF', '#9D00FF'][i]}80`
              }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: 'linear' }}
            />
          ))}
          
          {/* Center Sphere */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full"
            style={{
              x: '-50%',
              y: '-50%',
              background: 'radial-gradient(circle, #00F5FF, #0066FF, #9D00FF)',
              boxShadow: '0 0 60px #00F5FF, 0 0 100px #0066FF'
            }}
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 60px #00F5FF, 0 0 100px #0066FF',
                '0 0 80px #00F5FF, 0 0 120px #0066FF',
                '0 0 60px #00F5FF, 0 0 100px #0066FF'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Floating Code Snippets */}
      {[
        { text: '</>', top: '10%', left: '10%', delay: 0 },
        { text: '{ }', top: '20%', right: '15%', delay: 0.5 },
        { text: '<UI/>', bottom: '15%', left: '15%', delay: 1 },
        { text: 'fn()', top: '60%', right: '10%', delay: 1.5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute glass px-4 py-2 rounded-lg font-mono text-[#00F5FF] font-bold"
          style={{ ...item }}
          animate={{
            y: [-20, 20, -20],
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut'
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Orbiting Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: ['#00F5FF', '#0066FF', '#9D00FF'][i % 3],
            boxShadow: `0 0 10px ${['#00F5FF', '#0066FF', '#9D00FF'][i % 3]}`
          }}
          animate={{
            x: [
              Math.cos((i * 30 * Math.PI) / 180) * 200,
              Math.cos(((i * 30 + 360) * Math.PI) / 180) * 200
            ],
            y: [
              Math.sin((i * 30 * Math.PI) / 180) * 200,
              Math.sin(((i * 30 + 360) * Math.PI) / 180) * 200
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  )
}

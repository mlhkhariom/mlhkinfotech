'use client'
import { motion } from 'framer-motion'

export default function TextReveal({ children, className = '' }: any) {
  const text = children.toString()
  const words = text.split(' ')

  return (
    <div className={className}>
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

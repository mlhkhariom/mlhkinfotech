'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AITypingTextProps {
  texts: string[]
}

export default function AITypingText({ texts }: AITypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }
    
    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      )
    }, isDeleting ? 30 : 50)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <p className="text-white text-sm leading-relaxed">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-cyan-400 ml-1"
      />
    </p>
  )
}

'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle, #00F5FF, #0066FF)',
          boxShadow: '0 0 20px #00F5FF'
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      <motion.div
        className="fixed rounded-full border-2 pointer-events-none z-[9999]"
        style={{
          borderColor: '#00F5FF',
          boxShadow: '0 0 15px #00F5FF50'
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          marginLeft: isHovering ? -10 : 0,
          marginTop: isHovering ? -10 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  )
}

'use client'
import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }: any) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#0066FF] via-[#00F5FF] to-[#9D00FF] text-white glow',
    outline: 'border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
    ghost: 'text-[#00F5FF] hover:bg-white/5'
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full font-semibold transition-all relative overflow-hidden group ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </motion.button>
  )
}

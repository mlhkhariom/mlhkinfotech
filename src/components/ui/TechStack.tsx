'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function TechStack() {
  const techs = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaFigma, name: 'Figma', color: '#F24E1E' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
  ]

  return (
    <section className="relative container mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm text-[#00F5FF]">
          Technologies
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-gray-400 text-lg">Powered by cutting-edge technologies</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `radial-gradient(circle at center, ${tech.color}15, transparent)` }}
            />
            
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <tech.icon className="text-5xl" style={{ color: tech.color }} />
            </motion.div>
            
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

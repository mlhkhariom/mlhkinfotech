'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [projects, setProjects] = useState<any[]>([])
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setProjects(data.slice(0, 3))
        } else {
          setProjects([
            {
              title: 'E-Commerce Platform',
              category: 'Web Development',
              image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              stats: { users: '50K+', rating: '4.9', time: '3 months' }
            },
            {
              title: 'Mobile Banking App',
              category: 'Mobile App',
              image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              stats: { users: '100K+', rating: '4.8', time: '4 months' }
            },
            {
              title: 'AI Dashboard',
              category: 'SaaS Product',
              image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              stats: { users: '25K+', rating: '5.0', time: '2 months' }
            },
          ])
        }
      })
  }, [])

  return (
    <section className="relative container mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm text-[#00F5FF]">
          Our Work
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            onHoverStart={() => setActiveIndex(i)}
            whileHover={{ y: -20, scale: 1.05 }}
            className="relative glass rounded-3xl overflow-hidden group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Project Image/Gradient */}
            <div 
              className="h-64 relative overflow-hidden"
              style={{ background: project.image?.startsWith('http') ? `url(${project.image})` : (project.image || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'), backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <motion.div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-20 h-20 rounded-full glass flex items-center justify-center text-3xl"
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 px-4 py-2 glass rounded-full text-xs font-bold"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {project.category}
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00F5FF] transition-colors">
                {project.title}
              </h3>
              
              {project.stats ? (
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{project.stats.users}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{project.stats.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">{project.stats.time}</div>
                    <div className="text-xs text-gray-500">Timeline</div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">{project.description?.substring(0, 100)}</p>
              )}
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 245, 255, 0.1), transparent)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


export default function Portfolio() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  
  return (
    <div className="container mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">Our <span className="gradient-text">Portfolio</span></h1>
        <p className="text-xl text-gray-400">Showcasing our best work</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-20">
            <p>No projects yet. Add projects from the admin panel.</p>
          </div>
        ) : (
          projects.map((project: any, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:border-primary transition"
            >
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech: string, j: number) => (
                    <span key={j} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

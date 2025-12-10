'use client'
import { motion } from 'framer-motion'


export default function About() {
  return (
    <div className="container mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-8">About <span className="gradient-text">MLHK Infotech</span></h1>
        
        <div className="space-y-6 text-gray-300 text-lg">
          <p>
            MLHK Infotech is a leading technology company based in Shajapur, Madhya Pradesh, India. 
            We specialize in delivering innovative digital solutions that empower businesses to thrive in the modern digital landscape.
          </p>
          
          <p>
            Founded by <span className="text-primary font-semibold">Hariom Vishwkarma</span>, our mission is to provide 
            end-to-end software solutions that transform how businesses operate, from startups to established enterprises.
          </p>
          
          <div className="glass p-8 rounded-2xl my-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Expertise</h2>
            <ul className="space-y-4">
              <li>✓ Website Development & Design - Building responsive, modern websites</li>
              <li>✓ Mobile App Development - Native and cross-platform applications</li>
              <li>✓ Digital Marketing - SEO, email marketing, and advertising campaigns</li>
              <li>✓ IT Consultancy - Strategic technology guidance and implementation</li>
              <li>✓ Custom Software Solutions - Tailored applications for unique business needs</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
          
          <p>
            We are committed to delivering high-quality, innovative tech solutions that support small and 
            medium-sized businesses with their IT infrastructure, helping them establish a strong online 
            presence and leverage efficient digital tools.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

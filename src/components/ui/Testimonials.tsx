'use client'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      text: 'MLHK transformed our vision into reality. Their UI/UX expertise is unmatched!',
      rating: 5,
      avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, ShopEase',
      text: 'Best decision ever! Our sales increased 300% after the new website launch.',
      rating: 5,
      avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Amit Patel',
      role: 'CTO, FinTech Solutions',
      text: 'Professional, creative, and delivered ahead of schedule. Highly recommended!',
      rating: 5,
      avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
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
          Testimonials
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Client <span className="gradient-text">Love</span>
        </h2>
        <p className="text-gray-400 text-lg">What our clients say about us</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group"
          >
            {/* Quote Mark */}
            <div className="text-8xl text-[#00F5FF] opacity-10 absolute -top-4 -left-4 font-serif">
              "
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4 relative z-10">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <FaStar key={j} className="text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 relative z-10">
              <div 
                className="w-12 h-12 rounded-full"
                style={{ background: testimonial.avatar }}
              />
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'radial-gradient(circle at top right, rgba(0, 245, 255, 0.1), transparent)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

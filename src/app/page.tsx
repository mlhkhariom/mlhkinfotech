'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import MagneticButton from '@/components/ui/MagneticButton'
import TechStack from '@/components/ui/TechStack'
import HeroAnimation from '@/components/ui/HeroAnimation'
import ProjectShowcase from '@/components/ui/ProjectShowcase'
import Testimonials from '@/components/ui/Testimonials'
import { FaCode, FaMobileAlt, FaChartLine, FaCog, FaRocket, FaLightbulb } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import React from 'react'


export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [services, setServices] = useState<any[]>([])
  
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setServices(data.slice(0, 4).map((s: any) => ({
            icon: s.icon || 'FaCode',
            title: s.title,
            desc: s.description?.substring(0, 50) || s.desc,
            color: '#00F5FF'
          })))
        } else {
          setServices([
            { icon: 'FaCode', title: 'Web Development', desc: 'Custom websites & web applications', color: '#00F5FF' },
            { icon: 'FaMobileAlt', title: 'Mobile Apps', desc: 'iOS & Android applications', color: '#0066FF' },
            { icon: 'FaChartLine', title: 'Digital Marketing', desc: 'SEO, SEM & Social Media', color: '#9D00FF' },
            { icon: 'FaCog', title: 'IT Consultancy', desc: 'Expert technology guidance', color: '#00F5FF' },
          ])
        }
      })
      .catch(() => {
        setServices([
          { icon: 'FaCode', title: 'Web Development', desc: 'Custom websites & web applications', color: '#00F5FF' },
          { icon: 'FaMobileAlt', title: 'Mobile Apps', desc: 'iOS & Android applications', color: '#0066FF' },
          { icon: 'FaChartLine', title: 'Digital Marketing', desc: 'SEO, SEM & Social Media', color: '#9D00FF' },
          { icon: 'FaCog', title: 'IT Consultancy', desc: 'Expert technology guidance', color: '#00F5FF' },
        ])
      })
  }, [])
  
  const iconMap: any = { FaCode, FaMobileAlt, FaChartLine, FaCog }
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-20 md:py-32 min-h-screen flex items-center overflow-hidden">

        {/* Animated Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0066FF] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00F5FF] rounded-full blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 glass rounded-full text-xs sm:text-sm text-[#00F5FF]"
            >
              ✨ Award-Winning UI/UX Design
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Create
              <br/>
              <span className="gradient-text text-glow">Digital Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              <span className="text-white font-semibold">Top 1% Design Agency</span> transforming ideas into stunning digital experiences that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto">Get Started</Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/portfolio">
                  <Button variant="outline" className="w-full sm:w-auto">View Work</Button>
                </Link>
              </MagneticButton>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">100+</div>
                <div className="text-xs md:text-sm text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
                <div className="text-xs md:text-sm text-gray-500">Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
                <div className="text-xs md:text-sm text-gray-500">Years</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
              className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl group relative overflow-hidden perspective-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${service.color}10, transparent)` }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-6 relative"
                  whileHover={{ rotateZ: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{boxShadow: `0 0 40px ${service.color || '#00F5FF'}40`}}
                >
                  {typeof service.icon === 'string' && iconMap[service.icon] ? (
                    React.createElement(iconMap[service.icon], { className: 'text-4xl', style: { color: service.color || '#00F5FF' } })
                  ) : service.icon ? (
                    <service.icon className="text-4xl" style={{color: service.color || '#00F5FF'}} />
                  ) : (
                    <FaCode className="text-4xl" style={{color: service.color || '#00F5FF'}} />
                  )}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc || service.description?.substring(0, 50)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] via-[#0066FF] to-[#9D00FF] opacity-30"></div>
          
          {[
            { icon: FaLightbulb, title: 'Discover', desc: 'Understanding your vision', color: '#00F5FF' },
            { icon: FaRocket, title: 'Design', desc: 'Crafting the solution', color: '#0066FF' },
            { icon: FaCode, title: 'Develop', desc: 'Building with precision', color: '#9D00FF' },
            { icon: FaCog, title: 'Deploy', desc: 'Launching excellence', color: '#00F5FF' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative glass p-8 rounded-3xl text-center group"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at center, ${step.color}20, transparent)` }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full glass flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ boxShadow: `0 0 40px ${step.color}40` }}
                >
                  <step.icon className="text-3xl" style={{ color: step.color }} />
                </motion.div>
                
                <div className="text-4xl font-bold gradient-text mb-2">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
              
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass flex items-center justify-center text-xl font-bold gradient-text">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Tech Stack */}
      <TechStack />

      {/* Why Choose Us */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose <span className="gradient-text">MLHK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { 
              title: 'Innovation First', 
              desc: 'We stay ahead with cutting-edge technologies and creative solutions that set you apart.',
              gradient: 'from-[#00F5FF] to-[#0066FF]'
            },
            { 
              title: 'Client-Centric', 
              desc: 'Your success is our priority. We build lasting partnerships through transparent communication.',
              gradient: 'from-[#0066FF] to-[#9D00FF]'
            },
            { 
              title: 'Quality Assured', 
              desc: 'Rigorous testing and attention to detail ensure flawless execution every time.',
              gradient: 'from-[#9D00FF] to-[#00F5FF]'
            },
            { 
              title: 'Fast Delivery', 
              desc: 'Agile methodology and efficient workflows mean your project launches on time, every time.',
              gradient: 'from-[#00F5FF] to-[#9D00FF]'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-bold mb-4`}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
              
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #9D00FF)' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass p-8 md:p-16 rounded-3xl md:rounded-[3rem] text-center overflow-hidden perspective-card"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 via-transparent to-[#9D00FF]/20"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to <span className="gradient-text text-glow">Transform</span>?
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's build something amazing together. Get in touch and start your digital transformation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MagneticButton>
                <Link href="/contact"><Button className="text-lg">Contact Us Today</Button></Link>
              </MagneticButton>
            </motion.div>
          </div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F5FF] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9D00FF] rounded-full blur-[150px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            { number: '100+', label: 'Projects Completed', color: '#00F5FF' },
            { number: '50+', label: 'Happy Clients', color: '#0066FF' },
            { number: '5+', label: 'Years Experience', color: '#9D00FF' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="glass p-10 rounded-3xl text-center relative overflow-hidden group perspective-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${stat.color}20, transparent)` }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="text-6xl font-bold gradient-text mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: stat.color }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaChartLine, FaCog, FaPencilAlt, FaShieldAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import React from 'react'


export default function Services() {
  const [services, setServices] = useState<any[]>([])
  
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setServices(data)
        } else {
          setServices([
            {
              icon: 'FaCode',
              title: 'Website Development & Design',
              description: 'Custom websites and web applications built with modern technologies. Responsive, fast, and SEO-optimized.',
              features: 'Responsive Design, E-commerce Solutions, CMS Integration, Progressive Web Apps'
            },
            {
              icon: 'FaMobileAlt',
              title: 'Mobile App Development',
              description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
              features: 'iOS Development, Android Development, React Native, Flutter Apps'
            },
            {
              icon: 'FaChartLine',
              title: 'Digital Marketing',
              description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
              features: 'SEO Optimization, Social Media Marketing, Email Campaigns, PPC Advertising'
            },
            {
              icon: 'FaCog',
              title: 'IT Consultancy',
              description: 'Expert technology guidance to help you make informed decisions about your IT infrastructure.',
              features: 'Technology Strategy, System Architecture, Cloud Migration, Security Audits'
            },
            {
              icon: 'FaPencilAlt',
              title: 'Custom Software Solutions',
              description: 'Tailored software development to meet your specific business requirements and workflows.',
              features: 'Business Automation, API Development, Database Design, System Integration'
            },
            {
              icon: 'FaShieldAlt',
              title: 'Maintenance & Support',
              description: 'Ongoing support and maintenance to keep your digital assets running smoothly and securely.',
              features: '24/7 Support, Regular Updates, Performance Monitoring, Bug Fixes'
            }
          ])
        }
      })
  }, [])
  
  const iconMap: any = { FaCode, FaMobileAlt, FaChartLine, FaCog, FaPencilAlt, FaShieldAlt }
  
  return (
    <div className="container mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">Our <span className="gradient-text">Services</span></h1>
        <p className="text-xl text-gray-400">Comprehensive digital solutions for your business</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-2xl hover:border-primary transition"
          >
            {typeof service.icon === 'string' ? (
              iconMap[service.icon] ? React.createElement(iconMap[service.icon], { className: 'text-5xl text-primary mb-4' }) : <FaCode className="text-5xl text-primary mb-4" />
            ) : (
              <service.icon className="text-5xl text-primary mb-4" />
            )}
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {(typeof service.features === 'string' ? service.features.split(',') : service.features).map((feature: string, j: number) => (
                <li key={j} className="text-sm text-gray-300">✓ {feature.trim()}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

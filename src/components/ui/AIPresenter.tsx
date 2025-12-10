'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AIPresenterProps {
  pageType: 'home' | 'services' | 'portfolio' | 'blog' | 'contact' | 'about'
}

export default function AIPresenter({ pageType }: AIPresenterProps) {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const content: Record<string, string[]> = {
    home: [
      "Welcome to MLHK Infotech! I'm your AI guide today.",
      "We're a leading tech company transforming businesses with innovative digital solutions.",
      "Scroll down to explore our services, projects, and what makes us unique!",
      "Founded by Hariom Vishwkarma in Shajapur, we've delivered 100+ successful projects."
    ],
    services: [
      "Let me introduce our comprehensive services!",
      "We specialize in Web Development, Mobile Apps, Digital Marketing, and IT Consultancy.",
      "Each service is designed to help your business grow and succeed in the digital world.",
      "Our expert team ensures quality delivery and customer satisfaction."
    ],
    portfolio: [
      "Welcome to our Portfolio showcase!",
      "Here you'll find our best work - projects that made real impact.",
      "From e-commerce platforms to mobile apps, we've built it all.",
      "Each project represents our commitment to excellence and innovation."
    ],
    blog: [
      "Welcome to our Blog section!",
      "Stay updated with the latest tech trends, tips, and industry insights.",
      "We share valuable knowledge to help you stay ahead in the digital world.",
      "Explore articles written by our expert team."
    ],
    contact: [
      "Ready to start your project? Let's connect!",
      "Fill out the form and our team will respond within 24 hours.",
      "We're based in Shajapur, Madhya Pradesh, India.",
      "Let's discuss how we can help transform your business!"
    ],
    about: [
      "Let me tell you about MLHK Infotech!",
      "Founded by Hariom Vishwkarma, we're passionate about technology and innovation.",
      "With 5+ years of experience, we've helped 50+ clients achieve their digital goals.",
      "Our mission is to empower businesses with cutting-edge technology solutions."
    ]
  }

  const messages = content[pageType]

  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setText('')
        setIsTyping(true)
      }, 3000)
      return () => clearTimeout(timer)
    }

    const currentMessage = messages[currentIndex]
    if (text.length < currentMessage.length) {
      const timer = setTimeout(() => {
        setText(currentMessage.slice(0, text.length + 1))
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [text, isTyping, currentIndex, messages])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-40 max-w-md hidden lg:block"
    >
      <div className="relative">
        {/* AI Avatar */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotateY: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -left-20 bottom-0 w-16 h-16"
        >
          <div className="relative w-full h-full">
            {/* Head */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center"
              style={{ 
                boxShadow: '0 10px 40px rgba(6, 182, 212, 0.6), inset -3px -3px 10px rgba(0,0,0,0.3)',
              }}
            >
              {/* AI Eyes */}
              <div className="flex gap-2">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-2 h-3 bg-white rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-2 h-3 bg-white rounded-full"
                />
              </div>
            </div>
            
            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl -z-10"
            />
          </div>
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass p-6 rounded-3xl border border-white/20 shadow-2xl ml-4"
          style={{ 
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(157, 0, 255, 0.1))',
          }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-cyan-400 font-semibold">AI Assistant</span>
              </div>
              <p className="text-white leading-relaxed">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-4 bg-cyan-400 ml-1"
                />
              </p>
            </div>
          </div>
          
          {/* Bubble Tail */}
          <div className="absolute -left-3 bottom-8 w-6 h-6 bg-white/10 backdrop-blur-xl rotate-45 border-l border-b border-white/20"></div>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex gap-2 mt-3 ml-4 justify-center">
          {messages.map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-cyan-500' : 'bg-white/20'}`}
              animate={i === currentIndex ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

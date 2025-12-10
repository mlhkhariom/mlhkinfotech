'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (res.ok) {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('Failed to send message')
    }
  }
  
  return (
    <div className="container mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4 text-center">Get In <span className="gradient-text">Touch</span></h1>
        <p className="text-xl text-gray-400 text-center mb-16">Let's discuss your project</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiEnvelope className="text-3xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">info@mlhkinfotech.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiPhone className="text-3xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+91-XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiMapPin className="text-3xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Shajapur, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl mt-8">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <p className="text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
              {status && <p className="text-center text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

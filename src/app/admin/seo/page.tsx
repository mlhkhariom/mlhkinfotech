'use client'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

export default function AdminSEO() {
  const [pages, setPages] = useState([])
  const [form, setForm] = useState({ page: '', title: '', description: '', keywords: [] })
  
  useEffect(() => {
    fetch('/api/admin/seo')
      .then(res => res.json())
      .then(data => setPages(data))
  }, [])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    await fetch('/api/admin/seo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    
    setForm({ page: '', title: '', description: '', keywords: [] })
    const res = await fetch('/api/admin/seo')
    setPages(await res.json())
  }
  
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">SEO <span className="gradient-text">Settings</span></h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Add/Update SEO</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Page</label>
              <input
                type="text"
                required
                value={form.page}
                onChange={(e) => setForm({...form, page: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
                placeholder="home, about, services..."
              />
            </div>
            
            <div>
              <label className="block mb-2">Meta Title</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({...form, title: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block mb-2">Meta Description</label>
              <textarea
                required
                rows={3}
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block mb-2">Keywords (comma separated)</label>
              <input
                type="text"
                value={form.keywords.join(', ')}
                onChange={(e) => setForm({...form, keywords: e.target.value.split(',').map(k => k.trim())})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none"
              />
            </div>
            
            <Button type="submit" className="w-full">Save SEO Settings</Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Current SEO Settings</h2>
          <div className="space-y-4">
            {pages.map((page: any) => (
              <div key={page.id} className="glass p-4 rounded-lg">
                <h3 className="font-bold text-primary mb-2">{page.page}</h3>
                <p className="text-sm text-gray-400 mb-1">{page.title}</p>
                <p className="text-xs text-gray-500">{page.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Blog() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  
  return (
    <div className="container mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">Our <span className="gradient-text">Blog</span></h1>
        <p className="text-xl text-gray-400">Insights, tips, and industry news</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-20">
            <p>No blog posts yet. Add posts from the admin panel.</p>
          </div>
        ) : (
          posts.map((post: any, i: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass rounded-2xl overflow-hidden hover:border-primary transition h-full">
                  {post.image && (
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

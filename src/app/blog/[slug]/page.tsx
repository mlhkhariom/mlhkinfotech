import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })
  
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt || '',
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { author: true, category: true }
  })
  
  if (!post || !post.published) notFound()
  
  return (
    <article className="container mx-auto px-6 py-20 max-w-4xl">
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
      )}
      
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <span>{post.author.name}</span>
          <span>•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          {post.category && (
            <>
              <span>•</span>
              <span className="text-primary">{post.category.name}</span>
            </>
          )}
        </div>
      </div>
      
      <div 
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {post.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span key={i} className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

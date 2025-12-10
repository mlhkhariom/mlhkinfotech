import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import slugify from 'slugify'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const posts = await prisma.post.findMany({
    include: { author: true, category: true },
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const data = await req.json()
  const slug = slugify(data.title, { lower: true, strict: true })
  
  const post = await prisma.post.create({
    data: {
      ...data,
      slug,
      authorId: session.user.id,
      tags: data.tags || []
    }
  })
  
  return NextResponse.json(post)
}

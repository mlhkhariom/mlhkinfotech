import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import slugify from 'slugify'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(services)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const data = await req.json()
  const slug = slugify(data.title, { lower: true, strict: true })
  
  const service = await prisma.service.create({
    data: { ...data, slug, features: data.features || [] }
  })
  
  return NextResponse.json(service)
}

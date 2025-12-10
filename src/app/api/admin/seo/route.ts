import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const seo = await prisma.sEO.findMany()
  return NextResponse.json(seo)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const data = await req.json()
  
  const seo = await prisma.sEO.upsert({
    where: { page: data.page },
    update: data,
    create: data
  })
  
  return NextResponse.json(seo)
}

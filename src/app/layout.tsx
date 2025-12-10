import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ParticleBackground from '@/components/ui/ParticleBackground'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'MLHK Infotech - Innovative Tech Solutions',
  description: 'Leading tech company in Shajapur providing web development, mobile apps, digital marketing, and IT consultancy services.',
  keywords: ['web development', 'mobile apps', 'digital marketing', 'IT consultancy', 'Shajapur', 'Madhya Pradesh'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="cursor-none">
        <Providers>
          <ParticleBackground />
          <ScrollProgress />
          <Cursor />
          <ThemeToggle />
          <Header />
          <main className="min-h-screen pt-20 pb-24 md:pb-0 relative z-10">{children}</main>
          <Footer />
          <MobileNav />
        </Providers>
      </body>
    </html>
  )
}

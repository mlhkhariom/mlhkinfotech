'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { HiHome, HiDocumentText, HiFolder, HiCog, HiChartBar, HiArrowRightOnRectangle } from 'react-icons/hi2'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const links = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: HiHome },
    { href: '/admin/posts', label: 'Posts', icon: HiDocumentText },
    { href: '/admin/projects', label: 'Projects', icon: HiFolder },
    { href: '/admin/services', label: 'Services', icon: HiCog },
    { href: '/admin/seo', label: 'SEO', icon: HiChartBar },
  ]
  
  if (pathname === '/admin/login') return <>{children}</>
  
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 glass border-r border-white/10 fixed h-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  pathname === link.href ? 'bg-primary text-white' : 'hover:bg-white/5'
                }`}
              >
                <link.icon size={20} />
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => signOut()}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-red-500 w-full"
            >
              <HiArrowRightOnRectangle size={20} />
              Logout
            </button>
          </nav>
        </div>
      </aside>
      <main className="ml-64 flex-1">{children}</main>
    </div>
  )
}

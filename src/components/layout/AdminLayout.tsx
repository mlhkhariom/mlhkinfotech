'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { FiHome, FiFileText, FiSettings, FiSearch, FiLogOut } from 'react-icons/fi'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: <FiHome /> },
    { href: '/admin/posts', label: 'Blog Posts', icon: <FiFileText /> },
    { href: '/admin/seo', label: 'SEO Settings', icon: <FiSearch /> },
    { href: '/admin/settings', label: 'Settings', icon: <FiSettings /> },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold gradient-text">MLHK Admin</h1>
        </div>
        <nav className="px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                pathname === item.href
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-red-600 hover:bg-red-50 w-full transition-colors"
          >
            <FiLogOut />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}

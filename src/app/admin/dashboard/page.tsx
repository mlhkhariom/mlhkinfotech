import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { FaBlog, FaProjectDiagram, FaCog, FaSearch } from 'react-icons/fa';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/admin/login');
  }

  const cards = [
    { title: 'Blog Posts', icon: FaBlog, href: '/admin/posts', color: 'from-cyan-500 to-blue-500' },
    { title: 'Projects', icon: FaProjectDiagram, href: '/admin/projects', color: 'from-blue-500 to-purple-500' },
    { title: 'Services', icon: FaCog, href: '/admin/services', color: 'from-purple-500 to-pink-500' },
    { title: 'SEO Settings', icon: FaSearch, href: '/admin/seo', color: 'from-pink-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Admin Dashboard</h1>
          <Link href="/" className="text-cyan-500 hover:text-cyan-400">
            View Site
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition">
                {card.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

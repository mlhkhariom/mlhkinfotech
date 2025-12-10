import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';

export default async function AdminPosts() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: true },
  });

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-white/70 hover:text-white">
              <FaArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          </div>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90"
          >
            <FaPlus /> New Post
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-white/70">Title</th>
                <th className="text-left p-4 text-white/70 hidden md:table-cell">Author</th>
                <th className="text-left p-4 text-white/70 hidden md:table-cell">Status</th>
                <th className="text-right p-4 text-white/70">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-white/10">
                  <td className="p-4 text-white">{post.title}</td>
                  <td className="p-4 text-white/70 hidden md:table-cell">{post.author.name}</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-2 py-1 rounded text-xs ${post.published ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <Link href={`/admin/posts/edit/${post.id}`} className="text-cyan-500 hover:text-cyan-400">
                        <FaEdit />
                      </Link>
                      <button className="text-red-500 hover:text-red-400">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

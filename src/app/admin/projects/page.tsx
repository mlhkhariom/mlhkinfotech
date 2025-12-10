import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';

export default async function AdminProjects() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-white/70 hover:text-white">
              <FaArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold text-white">Projects</h1>
          </div>
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90"
          >
            <FaPlus /> New Project
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-white/70">Title</th>
                <th className="text-left p-4 text-white/70 hidden md:table-cell">Category</th>
                <th className="text-right p-4 text-white/70">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t border-white/10">
                  <td className="p-4 text-white">{project.title}</td>
                  <td className="p-4 text-white/70 hidden md:table-cell">{project.category || 'N/A'}</td>
                  <td className="p-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <Link href={`/admin/projects/edit/${project.id}`} className="text-cyan-500 hover:text-cyan-400">
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

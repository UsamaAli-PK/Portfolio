import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { useAdminRouter } from '../../../../hooks/useAdminRouter';
import { deletePost } from '../../../../lib/posts';

interface PostsTableProps {
  posts: any[];
  loading: boolean;
}

export function PostsTable({ posts, loading }: PostsTableProps) {
  const { navigate } = useAdminRouter();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-400">
        Loading posts...
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="p-8 text-center text-gray-400">
        No posts found. Create your first post!
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-dark-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-600">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-dark-700/50">
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {post.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {post.author?.full_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  post.status === 'published'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {post.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {new Date(post.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                    className="p-1 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Eye size={16} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
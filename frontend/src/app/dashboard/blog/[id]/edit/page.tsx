'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState<BlogPost>({
    _id: '',
    title: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    tags: [],
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: [],
  });

  useEffect(() => {
    if (params.id !== 'new') {
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${params.id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const method = params.id === 'new' ? 'POST' : 'PUT';
      const url = params.id === 'new' ? '/api/blog' : `/api/blog/${params.id}`;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        router.push('/dashboard/blog');
      }
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {params.id === 'new' ? 'New Blog Post' : 'Edit Blog Post'}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Create or edit your blog post content
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={post.title}
                  onChange={(e) =>
                    setPost({ ...post, title: e.target.value })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <div className="mt-1">
                <ReactQuill
                  value={post.content}
                  onChange={(content) => setPost({ ...post, content })}
                  className="h-96"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-gray-700"
              >
                Excerpt
              </label>
              <div className="mt-1">
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={3}
                  value={post.excerpt}
                  onChange={(e) =>
                    setPost({ ...post, excerpt: e.target.value })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="featuredImage"
                className="block text-sm font-medium text-gray-700"
              >
                Featured Image URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="featuredImage"
                  id="featuredImage"
                  value={post.featuredImage}
                  onChange={(e) =>
                    setPost({ ...post, featuredImage: e.target.value })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={post.tags.join(', ')}
                  onChange={(e) =>
                    setPost({
                      ...post,
                      tags: e.target.value.split(',').map((tag) => tag.trim()),
                    })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <div className="mt-1">
                <select
                  id="status"
                  name="status"
                  value={post.status}
                  onChange={(e) =>
                    setPost({
                      ...post,
                      status: e.target.value as 'draft' | 'published' | 'archived',
                    })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <h4 className="text-sm font-medium text-gray-900">SEO Settings</h4>
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="seoTitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SEO Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="seoTitle"
                      id="seoTitle"
                      value={post.seoTitle}
                      onChange={(e) =>
                        setPost({ ...post, seoTitle: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="seoDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SEO Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="seoDescription"
                      name="seoDescription"
                      rows={3}
                      value={post.seoDescription}
                      onChange={(e) =>
                        setPost({ ...post, seoDescription: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="seoKeywords"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SEO Keywords
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="seoKeywords"
                      id="seoKeywords"
                      value={post.seoKeywords.join(', ')}
                      onChange={(e) =>
                        setPost({
                          ...post,
                          seoKeywords: e.target.value
                            .split(',')
                            .map((keyword) => keyword.trim()),
                        })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => router.push('/dashboard/blog')}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  );
} 
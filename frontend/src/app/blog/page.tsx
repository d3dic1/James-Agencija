'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const featuredPost = {
  title: 'The Future of Digital Marketing: AI and Personalization',
  description: 'Explore how artificial intelligence is revolutionizing digital marketing and enabling unprecedented levels of personalization.',
  imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  category: 'Digital Marketing',
  author: {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=40&h=40&facepad=2&q=80',
  },
  date: 'Mar 16, 2024',
  readTime: '6 min read',
  href: '/blog/future-of-digital-marketing',
};

const posts = [
  {
    title: '10 SEO Tips to Boost Your Website Traffic',
    description: 'Learn proven strategies to improve your website\'s search engine rankings and drive more organic traffic.',
    imageUrl: '/images/blog/seo-tips.jpg',
    category: 'SEO',
    author: {
      name: 'Mike Chen',
      role: 'SEO Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80',
    },
    date: 'Mar 14, 2024',
    readTime: '5 min read',
    href: '/blog/seo-tips',
  },
  {
    title: 'Social Media Trends for 2024',
    description: 'Discover the latest social media trends that will shape your marketing strategy in 2024.',
    imageUrl: '/images/blog/social-trends.jpg',
    category: 'Social Media',
    author: {
      name: 'Emma Wilson',
      role: 'Social Media Manager',
      imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=40&h=40&facepad=2&q=80',
    },
    date: 'Mar 12, 2024',
    readTime: '4 min read',
    href: '/blog/social-media-trends',
  },
  {
    title: 'Content Marketing Strategy Guide',
    description: 'A comprehensive guide to creating and executing an effective content marketing strategy.',
    imageUrl: '/images/blog/content-strategy.jpg',
    category: 'Content Marketing',
    author: {
      name: 'David Brown',
      role: 'Content Strategist',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=40&h=40&facepad=2&q=80',
    },
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    href: '/blog/content-strategy',
  },
  {
    title: 'Email Marketing Best Practices',
    description: 'Learn how to create engaging email campaigns that convert and drive customer loyalty.',
    imageUrl: '/images/blog/email-marketing.jpg',
    category: 'Email Marketing',
    author: {
      name: 'Lisa Anderson',
      role: 'Email Marketing Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=40&h=40&facepad=2&q=80',
    },
    date: 'Mar 8, 2024',
    readTime: '5 min read',
    href: '/blog/email-marketing',
  },
];

const categories = ['All', 'Digital Marketing', 'SEO', 'Social Media', 'Content Marketing', 'Email Marketing'];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Marketing Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay up to date with the latest trends, strategies, and insights in digital marketing.
              Our expert team shares their knowledge and experience to help you succeed.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">Subscribe to Newsletter</Button>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                alt="Blog hero"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex justify-center space-x-4 py-8">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured post */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
              width={1920}
              height={1080}
            />
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {featuredPost.description}
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-800"
                    src={featuredPost.author.imageUrl}
                    alt={featuredPost.author.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{featuredPost.author.name}</div>
                    <div className="text-sm text-gray-300">{featuredPost.author.role}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {featuredPost.date} · {featuredPost.readTime}
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={featuredPost.href}
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                >
                  Read more
                  <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <div key={post.title} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-500">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm font-medium text-blue-600">{post.category}</p>
                  </div>
                  <p className="mt-2 text-base font-semibold text-gray-900">{post.description}</p>
                  <div className="mt-4 flex items-center gap-x-4">
                    <Image
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      width={32}
                      height={32}
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{post.author.name}</div>
                      <div className="text-sm text-gray-500">{post.date} · {post.readTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
        </svg>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get the latest marketing insights and updates delivered straight to your inbox.
          </p>
          <form className="mt-10 flex items-center justify-center gap-x-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
} 
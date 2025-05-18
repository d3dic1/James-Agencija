'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBlogPost() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/blog/new/edit');
  }, [router]);

  return null;
} 
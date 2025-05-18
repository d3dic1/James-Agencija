import React from 'react';

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Content Management</h1>
        <p className="mt-2 text-sm text-gray-700">
          Manage your website content here. (This is a placeholder page. You can extend it with content sections, media, etc.)
        </p>
      </div>
      <div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add New Content
        </button>
      </div>
      <div className="mt-8">
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-400">
          No content items yet. Start by adding new content.
        </div>
      </div>
    </div>
  );
} 
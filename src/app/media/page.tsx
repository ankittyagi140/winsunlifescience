import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media | winsun Life Sciences',
  description: 'Latest news, press releases, and media coverage for winsun Life Sciences.'
};

export default function Media() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Media & Press</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Press Releases</h2>
            <p className="text-gray-700">Stay updated with our latest announcements and corporate news.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Media Coverage</h2>
            <p className="text-gray-700">Explore recent media mentions and articles featuring winsun Life Sciences.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Investor Relations</h2>
            <p className="text-gray-700">Financial reports, annual statements, and investor information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
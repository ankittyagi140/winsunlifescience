import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media | winsun Life Sciences',
  description: 'Latest news, press releases, and media coverage for winsun Life Sciences.'
};

export default function Media() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Media & Press</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Press Releases</h2>
          <p>Stay updated with our latest announcements and corporate news.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Media Coverage</h2>
          <p>Explore recent media mentions and articles featuring winsun Life Sciences.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Investor Relations</h2>
          <p>Financial reports, annual statements, and investor information.</p>
        </div>
      </div>
    </div>
  );
}
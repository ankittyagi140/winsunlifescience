import React from 'react';

interface OrganizationStructuredDataProps {
  name: string;
  url: string;
  logo: string;
  description: string;
}

export function OrganizationStructuredData({
  name,
  url,
  logo,
  description
}: OrganizationStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs: [
      // Add social media profile URLs
      'https://www.linkedin.com/company/winsun-life-sciences',
      // Add other social media profiles
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(structuredData) 
      }} 
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'winsun Life Sciences',
    url: 'https://www.winsunlifesciences.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.winsunlifesciences.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(structuredData) 
      }} 
    />
  );
}

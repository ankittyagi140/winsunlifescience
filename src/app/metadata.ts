import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Winsunn Life Sciences - Pharmaceutical Innovation',
    template: '%s | Winsunn Life Sciences'
  },
  description: 'Leading pharmaceutical company dedicated to innovative healthcare solutions, research, and improving global health outcomes.',
  keywords: [
    'pharmaceutical', 
    'life sciences', 
    'healthcare', 
    'medical research', 
    'innovative medicine'
  ],
  metadataBase: new URL('https://www.winsunnlifesciences.com'),
  openGraph: {
    type: 'company',
    locale: 'en_US',
    url: 'https://www.winsunnlifesciences.com',
    siteName: 'Winsunn Life Sciences',
    title: 'Winsunn Life Sciences - Pharmaceutical Innovation',
    description: 'Leading pharmaceutical company dedicated to innovative healthcare solutions, research, and improving global health outcomes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winsunn Life Sciences - Pharmaceutical Innovation',
    description: 'Leading pharmaceutical company dedicated to innovative healthcare solutions, research, and improving global health outcomes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  }
};

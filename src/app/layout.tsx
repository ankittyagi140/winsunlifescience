// Tell Next.js this is a client-side component
"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { ThemeProvider } from '@/context/ThemeContext'
import { OrganizationStructuredData, WebsiteStructuredData } from '@/components/StructuredData'
import ScrollToTop from '@/components/ScrollToTop'
import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.winsunlifesciences.com" />
        <meta name="google-site-verification" content="GRZVHzZfe__UZvgjh9fYV-r_z7XhldupZQiO3z1CJjQ" />
        <meta name="google-adsense-account" content="ca-pub-1332831285527693"></meta>
        <OrganizationStructuredData 
          name="Winsun Life Sciences"
          url="https://www.winsunlifesciences.com"
          logo="/images/winsun_logo.jpg"
          description="Leading pharmaceutical company dedicated to innovative healthcare solutions, research, and improving global health outcomes."
        />
        <WebsiteStructuredData />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 dark:text-white text-gray-900`}>
        <header className="fixed top-0 left-0 w-full bg-primary shadow-md z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <OptimizedImage 
                  src="/images/winsun_logo.jpg" 
                  alt="winsun Life Sciences" 
                  width={50} 
                  height={50}
                  className="rounded-full object-contain" 
                  priority
                />
                <span className="text-white font-bold text-sm sm:text-base flex items-center">
                  Winsun Life Sciences
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle Mobile Menu"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
              
              {/* Background Overlay with Blur */}
              {isMenuOpen && (
                <div 
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                  onClick={closeMenu}
                ></div>
              )}
              
              {/* Mobile Dropdown Menu */}
              {isMenuOpen && (
                <div className="fixed top-16 right-0 w-3/4 sm:w-1/2 h-screen bg-primary shadow-lg z-50 animate-slide-from-right">
                  <nav className="flex flex-col p-4 space-y-2">
                    <Link 
                      href="/" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/global-presence" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      Global Presence
                    </Link>
                    <Link 
                      href="/media" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      Media
                    </Link>
                    <Link 
                      href="/career" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      Career
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-white flex align-center hover:bg-primary-dark p-2 rounded"
                      onClick={closeMenu}
                    >
                      Contact Us
                    </Link>
                  </nav>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-4 lg:space-x-8">
                <Link 
                  href="/" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  About Us
                </Link>
                <Link 
                  href="/global-presence" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  Global Presence
                </Link>
                <Link 
                  href="/media" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  Media
                </Link>
                <Link 
                  href="/career" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  Career
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white flex align-center hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Add padding to body to account for fixed header */}
        <div className="pt-16 sm:pt-20">
          <ThemeProvider>
            <main>
              {children}
            </main>

            <footer className="bg-primary text-white py-10 border-t border-gray-700">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                  <Link href="/" className="mb-4">
                    <Image src="/images/winsun_logo.jpg" alt="Winsun Life Sciences" width={180} height={60} className="h-12 w-auto" />
                  </Link>
                  <p className="text-sm text-center text-gray-300 max-w-2xl">
                    Winsun Life Sciences is dedicated to delivering innovative healthcare solutions across the globe.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">About Us</h3>
                    <p className="text-sm text-gray-300">
                      Specializing in pharmaceutical products and services, Winsun Life Sciences is committed to improving global healthcare through innovation and excellence.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                      <li><Link href="/global-presence" className="text-sm text-gray-300 hover:text-white transition-colors">Global Presence</Link></li>
                      <li><Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                      <li><Link href="/career" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                      <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
                    <address className="not-italic">
                      <p className="text-sm text-gray-300 mb-2">Winsun Lifesciences Pvt. Ltd.</p>
                      <p className="text-sm text-gray-300 mb-2">Alaska Tower 6, Rani Bagh, Khandwa Road</p>
                      <p className="text-sm text-gray-300 mb-2">Indore, Madhya Pradesh - 452020</p>
                      <p className="text-sm text-gray-300">Email: <a href="mailto:winsunlifesciences@gmail.com" className="hover:text-white">winsunlifesciences@gmail.com</a></p>
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/share/1CxAyXWgSs/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
                        <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                          </svg>
                        </div>
                      </a>
                      <a href="https://www.facebook.com/share/1CxAyXWgSs/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
                        <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/amit-kumar-tyagi-1683b52b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
                        <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className="text-xs text-gray-400">©2023 - {new Date().getFullYear()} Winsun Life Sciences Pvt. Ltd. All rights reserved.</p>
                </div>
              </div>
            </footer>
            
            {/* Add ScrollToTop component */}
            <ScrollToTop />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
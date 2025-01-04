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
        <link rel="canonical" href="https://www.winsunnlifesciences.com" />
        <OrganizationStructuredData 
          name="Winsunn Life Sciences"
          url="https://www.winsunnlifesciences.com"
          logo="/logo.png"
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
                  alt="Winsunn Life Sciences" 
                  width={50} 
                  height={50}
                  className="rounded-full object-contain" 
                  priority
                />
                <span className="text-white font-bold text-sm sm:text-base flex items-center">
                  Winsunn Life Sciences
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
              
              {/* Mobile Dropdown Menu */}
              {isMenuOpen && (
                <div className="fixed top-16 left-0 w-full bg-primary shadow-lg z-50 animate-slide-down">
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

            <footer className="bg-primary text-white py-8 sm:py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-base sm:text-xl font-semibold mb-3">About Us</h3>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Winsunn Life Sciences is dedicated to delivering innovative healthcare solutions across the globe.
                    </p>
                  </div>
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-base sm:text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-1 sm:space-y-2">
                      <li><Link href="/about" className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors">About Us</Link></li>
                      <li><Link href="/global-presence" className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors">Global Presence</Link></li>
                      <li><Link href="/career" className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors">Careers</Link></li>
                      <li><Link href="/contact" className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-base sm:text-xl font-semibold mb-3">Contact Info</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-200">
                      <li>Email: info@winsunnlife.com</li>
                      <li className="space-y-1">
                        <p>Winsun Lifesciences Pvt. Ltd.</p>
                        <p>Alaska Tower 6,</p>
                        <p>Rani Bagh, Khandwa Road</p>
                        <p>Indore, Madhya Pradesh - 452020</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-gray-200 transition-colors touch-manipulation">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-gray-200 transition-colors touch-manipulation">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
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
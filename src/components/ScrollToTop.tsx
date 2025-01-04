'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.pageYOffset > 300);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-secondary transition-colors z-50 touch-manipulation w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
}

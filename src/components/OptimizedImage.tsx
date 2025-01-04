'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
}

export default function OptimizedImage({
  src, 
  alt, 
  width = 1920, 
  height = 1080,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'empty'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // If width and height are provided, use them instead of fill
  const imageProps = width && height 
    ? { width, height }
    : { 
        fill: true, 
        sizes: sizes 
      };

  return (
    <div className={`relative ${width && height ? 'w-auto' : 'w-full'} ${className}`}>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        className={`
          duration-700 ease-in-out
          ${isLoading 
            ? 'scale-110 blur-xl grayscale' 
            : 'scale-100 blur-0 grayscale-0'
          }
          ${width && height ? 'object-contain' : 'object-cover'} 
          transition-all
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
}

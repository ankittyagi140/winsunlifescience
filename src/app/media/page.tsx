'use client';

import Image from 'next/image';

const Media = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/media.jpg"
            alt="Media Background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Coming Soon
            </h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl px-4">
              We&apos;re working on something exciting. Stay tuned for updates!
            </p>
            
            {/* Optional: Add a newsletter signup or social media links */}
            <div className="mt-12 space-y-6">
              <p className="text-gray-300 text-center">
                Want to be notified when we launch?
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                Keep Me Updated
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
import React from 'react';
import { metadata } from './metadata';
import Image from 'next/image';
import Link from 'next/link';
import SwiperHeroCarousel from '@/components/SwiperHeroCarousel';
import ProductCarousel from '@/components/ProductCarousel';

export { metadata };

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <SwiperHeroCarousel />

      {/* Product Carousel */}
      <ProductCarousel />

        {/* Care at its Best Section */}
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="/images/care_image.png" 
                alt="Care at its Best" 
                width={800} 
                height={600}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Care at its Best</h2>
              <p className="text-gray-700 leading-relaxed">
                winsun Life Sciences Private Limited is a new emerging pharmaceutical company. The company has established itself behind the company&apos;s providing comprehensive medical solutions to healthcare professionals. Being recognized among the top pharmaceutical companies in India, we are dedicated to delivering innovative, branded and patent friendly medicines focused and approved by healthcare professionals and patients across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Segments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Therapeutic Segments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Nephrology', icon: '/images/nephro.png', route: '/therapeutic/nephrology' },
              { name: 'Cardiac', icon: '/images/heart.png', route: '/therapeutic/cardiac' },
              { name: 'Rheumatology', icon: '/images/rheumatology.png', route: '/therapeutic/rheumatology' },
              { name: 'Neurology', icon: '/images/critical_care.png', route: '/therapeutic/neurology' },
              { name: 'Gastroenterology', icon: '/images/gastrology.png', route: '/therapeutic/gastroenterology' },
              { name: 'Orthopedics', icon: '/images/ortho.png', route: '/therapeutic/orthopedics' },
              { name: 'Gynaecology', icon: '/images/gynaecology.png', route: '/therapeutic/gynaecology' },
            ].map((segment, index) => (
              <Link 
                key={segment.name} 
                href={segment.route}
                className="segment-card animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="segment-icon">
                  <Image
                    src={segment.icon}
                    alt={segment.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="segment-name text-lg">{segment.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Services Section */}
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <Image 
                src="/images/innovation.jpg" 
                alt="Innovation" 
                width={800} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary text-center">Innovation</h3>
                <p className="text-gray-700 text-center">
                  Our evolving principle is to introduce new products to improve health and care taking of our patients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <Image 
                src="/images/patient_care.jpg" 
                alt="Patient Care" 
                width={800} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary text-center">Patient Care</h3>
                <p className="text-gray-700 text-center">
                  Patient care is our core responsibility and we ensure that our patients are receiving safe, quality healthcare.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <Image 
                src="/images/bringing_smiles.png" 
                alt="Bringing Smiles" 
                width={800} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary text-center">Bringing Smiles</h3>
                <p className="text-gray-700 text-center">
                  Our vision is to touch lives and bring smiles through providing excellent healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <blockquote className="text-center text-xl italic text-gray-600 animate-fade-in">
            &quot;We strive to bring joy to our customers by adhering to our philosophy of innovation, care and compassion.&quot;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
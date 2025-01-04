'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image: '/images/crousel0.png',
    title: 'REACHING & TOUCHING PEOPLE',
    description: 'Innovative Healthcare Solutions Transforming Lives',
    subtext: 'Committed to Delivering Cutting-Edge Medical Advancements',
    buttonText: 'Explore Our Mission',
    buttonLink: '/about'
  },
  {
    image: '/images/crousel1.png',
    title: 'INNOVATIVE HEALTHCARE',
    description: 'Leading the Pharmaceutical Frontier',
    subtext: 'Pioneering Research and Development in Medical Science',
    buttonText: 'Discover Our Approach',
    buttonLink: '/global-presence'
  },
  {
    image: '/images/crousel2.png',
    title: 'GLOBAL PRESENCE',
    description: 'Serving Healthcare Needs Worldwide',
    subtext: 'Expanding Horizons, Improving Global Health',
    buttonText: 'Our Global Impact',
    buttonLink: '/media'
  }
];

export default function SwiperHeroCarousel() {
  return (
    <section className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-center">
              <h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white animate-fade-in mb-2 sm:mb-3 uppercase tracking-tight drop-shadow-lg break-words"
                data-swiper-parallax="-300"
              >
                {slide.title}
              </h1>
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white animate-fade-in px-4 font-light drop-shadow-md mb-2 sm:mb-4 break-words line-clamp-2"
                data-swiper-parallax="-200"
              >
                {slide.description}
              </p>
              <p 
                className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 animate-fade-in px-4 mb-4 sm:mb-6 break-words line-clamp-2"
                data-swiper-parallax="-100"
              >
                {slide.subtext}
              </p>
              <div data-swiper-parallax="-50" className="px-4">
                <Link 
                  href={slide.buttonLink}
                  className="inline-block bg-primary hover:bg-secondary text-white text-[10px] sm:text-xs md:text-sm lg:text-base px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl break-words"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation absolute z-20 top-1/2 w-full flex justify-between px-4 pointer-events-none">
        <div className="swiper-button-prev pointer-events-auto bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors">
          ←
        </div>
        <div className="swiper-button-next pointer-events-auto bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors">
          →
        </div>
      </div>
      <div className="swiper-pagination absolute bottom-4 left-0 right-0 flex justify-center z-20"></div>
    </section>
  );
}

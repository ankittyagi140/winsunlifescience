'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const slideData = [
  { imgSrc: "/images/admag.png" },
  { imgSrc: "/images/alconus.png" },
  { imgSrc: "/images/amoxynus.png" },
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/coxshine.png" },
  { imgSrc: "/images/coxshine1.png" },
  { imgSrc: "/images/esoniched.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  // { imgSrc: "/images/gabanusnt.png" },
  { imgSrc: "/images/Terinok.jpg" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  // { imgSrc: "/images/Preganusm.jpg" },
  { imgSrc: "/images/Lactiplus.jpg" },
  { imgSrc: "/images/Mebihepsr.jpg" },
  { imgSrc: "/images/esoniched.png" },
  { imgSrc: "/images/fitpan_l.png" },
  { imgSrc: "/images/fitpandsr1.png" },
  { imgSrc: "/images/hapigut.png" },
  { imgSrc: "/images/hapigut550.png" },
  { imgSrc: "/images/udnus300.png" },
  { imgSrc: "/images/udnus450.png" },
  // { imgSrc: "/images/Vitzac.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary break-words">Our Products</h2>
        <div className="product-slider">
          <Slider {...settings}>
            {slideData.map((slide, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center">
                  <div className="relative h-48 w-full mb-4 flex justify-center items-center">
                    <Image
                      src={slide.imgSrc}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  {/* Optional: Add product name or description if needed */}
                  {/* <p className="text-center text-sm mt-2 break-words line-clamp-2">Product Name or Description</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
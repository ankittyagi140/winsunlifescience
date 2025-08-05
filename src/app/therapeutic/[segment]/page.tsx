'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

interface Product {
  imgSrc: string;
}

interface SegmentData {
  title: string;
  description: string;
  products: Product[];
}

const orthoProduct: Product[] = [
  { imgSrc: "/images/admag.png" },
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/coxshine.png" },
  { imgSrc: "/images/coxshine1.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  // { imgSrc: "/images/gabanusnt.png" },
  { imgSrc: "/images/Terinok.jpg" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  // { imgSrc: "/images/Preganusm.jpg" },
  // { imgSrc: "/images/Vitzac.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const neuroProduct: Product[] = [
  { imgSrc: "/images/admag.png" },
  { imgSrc: "/images/coxshine.png" },
  { imgSrc: "/images/coxshine1.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  // { imgSrc: "/images/gabanusnt.png" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  // { imgSrc: "/images/Preganusm.jpg" },
  // { imgSrc: "/images/Vitzac.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const nephroProduct: Product[] = [
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  { imgSrc: "/images/Lactiplus.jpg" },
  { imgSrc: "/images/Nutacalxt.jpg" },

];

const cardioProduct: Product[] = [
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  { imgSrc: "/images/Lactiplus.jpg" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const rheumatologyProduct: Product[] = [
  { imgSrc: "/images/coxshine.png" },
  { imgSrc: "/images/coxshine1.png" },
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const gynaecologistProduct: Product[] = [
  { imgSrc: "/images/cefsita.png" },
  { imgSrc: "/images/fitpan_dsr.png" },
  // { imgSrc: "/images/fosfowin.png" },
  { imgSrc: "/images/Lactiplus.jpg" },
  { imgSrc: "/images/Nutacalxt.jpg" },
  { imgSrc: "/images/Winsund.jpg" },
];

const segmentData: Record<string, SegmentData> = {
  nephrology: {
    title: 'Nephrology',
    description: 'Our nephrology segment focuses on innovative treatments for kidney diseases and related conditions.',
    products: nephroProduct,
  },
  cardiac: {
    title: 'Cardiac',
    description: 'Leading cardiac treatments and solutions for heart health and cardiovascular conditions.',
    products: cardioProduct,
  },
  rheumatology: {
    title: 'Rheumatology',
    description: 'Specialized treatments for rheumatic diseases and musculoskeletal conditions.',
    products: rheumatologyProduct,
  },
  neurology: {
    title: 'Neurology',
    description: 'Advanced solutions for neurological and endocrine system disorders.',
    products: neuroProduct,
  },
  gastroenterology: {
    title: 'Gastroenterology',
    description: 'Comprehensive treatments for digestive system disorders and gastrointestinal health.',
    products: nephroProduct,
  },
  orthopedics: {
    title: 'Orthopedics',
    description: 'Innovative solutions for bone, joint, and muscle conditions.',
    products: orthoProduct,
  },
  gynaecology: {
    title: 'Gynaecology',
    description: `Specialized care and treatments for women's health.`,
    products: gynaecologistProduct,
  },
};

interface PageProps {
  params: Promise<{
    segment: string;
  }>;
}

export default function TherapeuticSegment({ params }: PageProps) {
  const { segment } = use(params);
  const normalizedSegment = segment.toLowerCase();
  const data = segmentData[normalizedSegment];

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:text-secondary">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-8">Segment Not Found</h1>
        <p className="text-gray-700">The requested therapeutic segment could not be found.</p>
      </div>
    );
  }

  const formatProductName = (imgSrc: string): string => {
    const fileName = imgSrc.split('/').pop();
    return fileName ? fileName.split('.')[0] : '';
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:text-secondary">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-primary mb-8">{data.title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">{data.description}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-primary">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product, index) => (
            <div 
              key={`${normalizedSegment}-product-${index}`}
              className="product-card"
            >
              <div className="product-image">
                <Image
                  src={product.imgSrc}
                  alt={formatProductName(product.imgSrc)}
                  fill
                  className="object-contain p-4"
                  priority={index < 4}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">
                  {formatProductName(product.imgSrc)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
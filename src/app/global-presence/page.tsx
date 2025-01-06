import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Presence | winsun Life Sciences',
  description: 'Explore winsun Life Sciences\' global footprint and international reach in pharmaceutical innovation.'
};

export default function GlobalPresence() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Content Section */}
          <div className="max-w-4xl mx-auto space-y-8 bg-white py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Global Leader with Quality and Innovation
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We produce various dosage forms encompassing a vast range of
                  therapeutic categories. Winsun Lifesciences Pvt. Ltd. is emerging
                  as a major potential Indian pharmaceuticals organisation,
                  supplying the finest-quality finished formulations to
                  international markets.
                </p>
                
                <p>
                  Winsun Lifesciences Pvt. Ltd. is committed to provide quality
                  customer services, unique & need based product mix offerings and
                  complete technical logistic solutions to all our business partners
                  fostering mutually beneficial win-win relationships.
                </p>
                
                <p>
                  Our global presence is built on a strong foundation of mutual
                  respect towards culture as well as society. Naturally, the most
                  important of these shared values is the universal goal that is
                  cherished by all people, regardless of who they are or where they
                  live, Good Health.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 py-12 bg-white">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">1</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">2+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>

            {/* Global Reach Section */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Our Global Reach
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-gray-800">Quality Assurance</h4>
                  <p className="text-gray-700">
                    We maintain the highest standards of quality in all our products,
                    meeting international regulatory requirements and GMP standards.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-gray-800">Innovation Focus</h4>
                  <p className="text-gray-700">
                    Our R&D facilities continuously work on developing new and
                    improved formulations to meet global healthcare needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
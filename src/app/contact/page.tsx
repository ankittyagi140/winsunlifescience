'use client';

import Image from 'next/image';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="contact_container space-y-12">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/contact_us.jpg"
              alt="contact us"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="contact-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Corporate Office</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Winsun Lifesciences Pvt. Ltd.</p>
                <p>Alaska Tower 6,</p>
                <p>Rani Bagh, Khandwa Road</p>
                <p>Indore, Madhya Pradesh - 452020</p>
              </div>
            </div>

            <div className="contact-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Registered Office</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Winsun Lifesciences Pvt. Ltd.</p>
                <p>East Babarpur, Chhajjupur,</p>
                <p>Babarpur, Delhi - 110032</p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/winsun_location.png"
              alt="winsun life sciences pvt ltd location"
              fill
              className="object-cover"
            />
          </div>

          <div className="contact-card mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="contact-info-item">
                  <svg className="contact-info-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 XXXXXXXXXX</span>
                </div>
                <div className="contact-info-item">
                  <svg className="contact-info-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@winsunlifesciences.com</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
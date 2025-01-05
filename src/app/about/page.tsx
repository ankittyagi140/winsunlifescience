'use client';

import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="about_container space-y-16">
          {/* Hero Image */}
          {/* <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about_us.jpg"
              alt="about us"
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Vision Section */}
          <div className="vision_section flex flex-col md:flex-row gap-8 items-center bg-white py-16">
            <div className="vision_text flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-primary">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be at the forefront of our industry so that we
                can serve humanity by blending science with sincerity and
                passion. We aspire to create products that can bring about a
                positive change in people&#39;s lives. We want to create exceptional
                products at affordable costs to maximize their reach and
                potential to millions of humans across the globe.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 h-[300px]">
              <Image
                src="/images/vision.png"
                alt="our vision"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission_section flex flex-col md:flex-row gap-8 items-center bg-white py-16">
            <div className="relative w-full md:w-1/2 h-[300px] md:order-1 order-2">
              <Image
                src="/images/mission.png"
                alt="our mission"
                fill
                className="object-contain"
              />
            </div>
            <div className="mission_text flex-1 space-y-4 md:order-2 order-1">
              <h3 className="text-3xl font-bold text-primary">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Winsun lifescience&#39;s mission is to save lives and improve the
                health of patients by providing specialized, high quality and
                value for money products. We believe in empowering the medical
                community by constantly pushing the state of the art and being
                at the forefront of innovation. We aim to create sustainable
                products that positively impacts lives and brings happiness to
                our customers.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="value_section space-y-8 bg-white py-16">
            <h3 className="text-3xl font-bold text-primary text-center">Core Values</h3>
            <div className="core_value_images grid grid-cols-2 md:grid-cols-5 gap-8">
              <figure className="value_figure flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="relative w-[120px] h-[105px]">
                  <Image
                    src="/images/ethics_intigrity.png"
                    alt="ethics and integrity"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Ethics and Integrity</span>
              </figure>

              <figure className="value_figure flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="relative w-[120px] h-[105px]">
                  <Image
                    src="/images/collaboration.png"
                    alt="collaboration"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Collaboration</span>
              </figure>

              <figure className="value_figure flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="relative w-[120px] h-[105px]">
                  <Image
                    src="/images/sustainability.png"
                    alt="sustainability"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Sustainability</span>
              </figure>

              <figure className="value_figure flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="relative w-[120px] h-[105px]">
                  <Image
                    src="/images/happiness.png"
                    alt="happiness"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Happiness</span>
              </figure>

              <figure className="value_figure flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="relative w-[120px] h-[105px]">
                  <Image
                    src="/images/teamwork.png"
                    alt="team work"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Teamwork</span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
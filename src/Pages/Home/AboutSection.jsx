import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div data-aos="fade-right" data-aos-duration="2000">
          <p className="text-sm text-[#0066FF] font-medium uppercase mb-2">Our Introduction</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Learn About Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We strive to bring warmth and comfort to vulnerable communities during the harsh winter season. 
            Our platform connects donors with volunteers to ensure the smooth delivery of winter essentials 
            like blankets, jackets, and sweaters to those in need across Bangladesh.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-blue-100 text-[#0066FF] flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium text-lg">
                Discover how to donate warm clothes and essentials with ease.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-blue-100 text-[#0066FF] flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium text-lg">
                Collaborate with our network of volunteers across divisions.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative" data-aos="fade-left" data-aos-duration="2000">
          <img
            src="https://i.ibb.co/m0Hp5sq/pexels-julia-m-cameron-6995106.jpg"
            alt="About Winter Donation"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 right-0 bg-[#0066FF] text-white px-6 py-4 rounded-tl-lg">
            <h3 className="text-3xl font-bold">8000+</h3>
            <p className="text-sm uppercase tracking-wide">People Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

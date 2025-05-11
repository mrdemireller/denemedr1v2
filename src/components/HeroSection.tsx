import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col md:flex-row">
      {/* Left side - CTA & Text */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-md">
          <h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            Cleaner Panels, More Profits
          </h1>
          <p 
            className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="100"
          >
            Dirty panels lose money. Clean panels generate up to 4–7% more energy. 
            Our drone-based automation system cleans your solar arrays 11x cheaper than 
            manual labor faster, smarter, and safer.
          </p>
          <a 
            href="https://forms.gle/4KSYzTobFwBLitTq6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              primary 
              className="text-lg px-8 py-4 transform hover:scale-105 hover:translate-y-[-2px]"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="200"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>

      {/* Right side - Visual */}
      <div 
        className="w-full md:w-1/2 bg-cover bg-center flex items-center justify-center p-8"
        data-aos="fade-left" 
        data-aos-duration="1000"
      >
        <div className="relative w-full h-full min-h-[400px] md:min-h-0 rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://i.hizliresim.com/a11mfcr.png" 
            alt="Drone cleaning solar panels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
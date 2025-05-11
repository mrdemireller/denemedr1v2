import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sun className="text-blue-500 mr-2" size={28} />
          <span className={`font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-white'}`}>
            SolarDrone
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#about" 
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="https://forms.gle/4KSYzTobFwBLitTq6" 
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
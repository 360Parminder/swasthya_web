import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppLogo } from './AppLogo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-100/80 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* Left: Logo & Brand Name */}
        <Link to="/" className="flex items-center space-x-2 group">
          <AppLogo size="header" showText={true} />
        </Link>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <a 
            href="#experience" 
            className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
          >
            Experience
          </a>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/features' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/contact' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Coral Get Started Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#download"
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-95 transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

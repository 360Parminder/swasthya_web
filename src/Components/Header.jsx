import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppLogo, AppStoreBadge } from './AppLogo';
import clsx from 'clsx';

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
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-100/80 shadow-sm py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-8', 'flex', 'justify-between', 'items-center', 'relative')}>
        {/* Left: Logo & Brand Name */}
        <Link to="/" className={clsx('flex', 'items-center', 'space-x-2', 'group', 'shrink-0', 'z-10')}>
          <AppLogo size="header" showText={true} />
        </Link>

        {/* Center: Clean Nav Links (Strictly Centered) */}
        <nav className={clsx('hidden', 'lg:flex', 'items-center', 'space-x-8', 'absolute', 'left-1/2', '-translate-x-1/2', 'z-10')}>
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/features' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/showcase" 
            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
              location.pathname === '/showcase' ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Showcase
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

        {/* Right: App Store & Play Store Badges */}
        <div className={clsx('flex', 'items-center')}>
          <AppStoreBadge compact={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;

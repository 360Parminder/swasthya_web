import React from 'react';
import { 
  Linkedin01Icon,
  InstagramIcon, 
  NewTwitterIcon
} from 'hugeicons-react';
import { Link } from 'react-router-dom';
import { AppLogo } from './AppLogo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700 py-12 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Row: Logo Left, Social Icons Right */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <AppLogo size="header" showText={true} />
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-gray-400">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin01Icon size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <NewTwitterIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Links Left, Copyright Right */}
        <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
          <div className="flex items-center space-x-6">
            <Link to="/features" className="hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-gray-400 text-xs">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
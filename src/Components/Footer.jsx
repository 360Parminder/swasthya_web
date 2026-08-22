import React from 'react';
import { IonIcon } from '@ionic/react';
import { 
  logoLinkedin,
  logoInstagram, 
  logoTwitter
} from 'ionicons/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700 py-12 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Row: Logo Left, Social Icons Right */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2.5 group">
            {/* Calendar / Swasthya Logo Icon */}
            <svg 
              className="w-5 h-5 text-gray-900" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="4" ry="4" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-extrabold text-base tracking-tight text-gray-900">
              Cal AI
            </span>
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
              <IonIcon icon={logoLinkedin} className="text-lg" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <IonIcon icon={logoInstagram} className="text-lg" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <IonIcon icon={logoTwitter} className="text-lg" />
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
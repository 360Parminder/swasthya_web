import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { swasthyaLogo } from '../assets/Images';

export const AppLogo = ({ 
  size = 'hero', // 'hero' | 'header' | 'center-intro' | 'small'
  showText = true,
  className = ''
}) => {
  const getIconSize = () => {
    switch (size) {
      case 'center-intro':
        return 'w-24 h-24';
      case 'hero':
        return 'w-16 h-16 ';
      case 'header':
        return 'w-8 h-8 ';
      case 'small':
        return 'w-6 h-6 ';
      default:
        return 'w-14 h-14 ';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'center-intro':
        return 'text-2xl font-bold mt-3';
      case 'hero':
        return 'text-base font-semibold mt-2.5';
      case 'header':
        return 'text-lg font-bold ml-2.5';
      case 'small':
        return 'text-sm font-semibold ml-2';
      default:
        return 'text-base font-medium mt-2';
    }
  };

  const isRowLayout = size === 'header' || size === 'small';

  return (
    <div className={`flex ${isRowLayout ? 'flex-row items-center' : 'flex-col items-center'} ${className}`}>
      {/* App Logo Image bundled by Vite */}
      <img
        src={swasthyaLogo || '/swasthya.png'}
        alt="Swasthya Logo"
        onError={(e) => {
          // Fallback if direct bundle resolution encounters static path variations
          if (e.currentTarget.src !== '/swasthya.png') {
            e.currentTarget.src = '/swasthya.png';
          }
        }}
        className={`${getIconSize()} object-contain drop-shadow-sm select-none`}
      />

      {showText && (
        <span className={`tracking-tight text-gray-900 ${getTextSize()}`}>
          Swasthya
        </span>
      )}
    </div>
  );
};

export const AppStoreBadge = ({ className = '' }) => {
  return (
    <motion.a
      href="#download"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center space-x-3 bg-black text-white px-5 py-2.5 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer ${className}`}
    >
      <svg className={clsx('w-6', 'h-6', 'fill-current')} viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.71 1 .08 2.04-.51 2.59-1.2" />
      </svg>
      <div className={clsx('text-left', 'flex', 'flex-col', 'leading-none')}>
        <span className={clsx('text-[10px]', 'text-gray-300', 'font-normal', 'tracking-wide')}>Download on the</span>
        <span className={clsx('text-sm', 'font-semibold', 'tracking-tight', 'mt-0.5')}>App Store</span>
      </div>
    </motion.a>
  );
};

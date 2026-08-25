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

export const AppStoreBadge = ({ className = '', compact = false }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 ${className}`}>
      {/* App Store Coming Soon Badge */}
      <motion.div
        whileHover={{ scale: 1.04, y: -1.5 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center ${
          compact 
            ? 'space-x-2 bg-black text-white px-3 py-1.5 rounded-xl border border-white/10 shadow-sm hover:shadow-md' 
            : 'space-x-3 bg-black text-white px-4 sm:px-5 py-2.5 rounded-2xl border border-white/10 shadow-md hover:shadow-xl'
        } transition-all cursor-pointer select-none`}
      >
        <svg className={`${compact ? 'w-4 h-4' : 'w-6 h-6'} shrink-0 rounded-[4px]`} xmlSpace="preserve" viewBox="0 0 800 800">
          <linearGradient id="appstore__badge_gradient" x1="400.05" x2="400.05" y1="798.772" y2="-1.228" gradientTransform="matrix(1 0 0 -1 0 798.772)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#18bffb"/>
            <stop offset="1" stopColor="#2072f3"/>
          </linearGradient>
          <path fill="url(#appstore__badge_gradient)" d="M638.4 0H161.6C72.3 0 0 72.3 0 161.6v476.9C0 727.7 72.3 800 161.6 800h476.9c89.2 0 161.6-72.3 161.6-161.6V161.6C800 72.3 727.7 0 638.4 0z"/>
          <path fill="#FFF" d="m396.6 183.8 16.2-28c10-17.5 32.3-23.4 49.8-13.4s23.4 32.3 13.4 49.8L319.9 462.4h112.9c36.6 0 57.1 43 41.2 72.8H143c-20.2 0-36.4-16.2-36.4-36.4s16.2-36.4 36.4-36.4h92.8l118.8-205.9-37.1-64.4c-10-17.5-4.1-39.6 13.4-49.8 17.5-10 39.6-4.1 49.8 13.4l15.9 28.1zM256.2 572.7l-35 60.7c-10 17.5-32.3 23.4-49.8 13.4S148 614.5 158 597l26-45c29.4-9.1 53.3-2.1 72.2 20.7zm301.4-110.1h94.7c20.2 0 36.4 16.2 36.4 36.4s-16.2 36.4-36.4 36.4h-52.6l35.5 61.6c10 17.5 4.1 39.6-13.4 49.8-17.5 10-39.6 4.1-49.8-13.4-59.8-103.7-104.7-181.3-134.5-233-30.5-52.6-8.7-105.4 12.8-123.3 23.9 41 59.6 102.9 107.3 185.5z"/>
        </svg>
        <div className="text-left flex flex-col leading-none">
          <span className={`${compact ? 'text-[8.5px]' : 'text-[10px]'} text-gray-300 font-normal tracking-wide`}>Coming Soon on</span>
          <span className={`${compact ? 'text-[11px] mt-0.5' : 'text-xs sm:text-sm mt-1'} font-semibold tracking-tight`}>App Store</span>
        </div>
      </motion.div>

      {/* Google Play Store Coming Soon Badge */}
      <motion.div
        whileHover={{ scale: 1.04, y: -1.5 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center ${
          compact 
            ? 'space-x-2 bg-black text-white px-3 py-1.5 rounded-xl border border-white/10 shadow-sm hover:shadow-md' 
            : 'space-x-3 bg-black text-white px-4 sm:px-5 py-2.5 rounded-2xl border border-white/10 shadow-md hover:shadow-xl'
        } transition-all cursor-pointer select-none`}
      >
        <svg className={`${compact ? 'w-3.5 h-3.5' : 'w-5 h-5'} shrink-0`} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 466 511.98">
          <g fillRule="nonzero">
            <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
            <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
            <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
            <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
          </g>
        </svg>
        <div className="text-left flex flex-col leading-none">
          <span className={`${compact ? 'text-[8.5px]' : 'text-[10px]'} text-gray-300 font-normal tracking-wide`}>Coming Soon on</span>
          <span className={`${compact ? 'text-[11px] mt-0.5' : 'text-xs sm:text-sm mt-1'} font-semibold tracking-tight`}>Google Play</span>
        </div>
      </motion.div>
    </div>
  );
};

export const StoreBadges = AppStoreBadge;

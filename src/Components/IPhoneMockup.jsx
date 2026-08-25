import React from 'react';
import { AppScreenshots } from '../assets/Images';

const SCREEN_MAP = {
  // Home & Dashboard
  'home': AppScreenshots.homeDashboard,
  'home-dashboard': AppScreenshots.homeDashboard,
  'day-schedule': AppScreenshots.homeDashboard,

  // Medication
  'medication': AppScreenshots.medicationSchedule,
  'medication-schedule': AppScreenshots.medicationSchedule,
  'medication-history': AppScreenshots.medicationHistory,
  'history': AppScreenshots.medicationHistory,
  'add-medication': AppScreenshots.addMedication,
  'new-event': AppScreenshots.addMedication,
  'add-medication-datepicker': AppScreenshots.addMedicationDatepicker,
  'refill-alerts': AppScreenshots.refillAlerts,
  'refill': AppScreenshots.refillAlerts,
  'month-view': AppScreenshots.refillAlerts,

  // Care Circle
  'care-circle': AppScreenshots.careCircleMedications,
  'care-circle-medications': AppScreenshots.careCircleMedications,
  'care-circle-connections': AppScreenshots.careCircleConnections,
  'connections': AppScreenshots.careCircleConnections,
  'facetime-details': AppScreenshots.careCircleConnections,
  'care-circle-invitations': AppScreenshots.careCircleInvitations,
  'invitations': AppScreenshots.careCircleInvitations,

  // Sleep Architecture
  'sleep-routine-details': AppScreenshots.sleepRoutineDetails,
  'sleep-details': AppScreenshots.sleepRoutineDetails,
  'event-details': AppScreenshots.sleepRoutineDetails,
  'whats-new': AppScreenshots.sleepRoutineDetails,
  'sleep-schedule-calculator': AppScreenshots.sleepScheduleCalculator,
  'sleep-schedule': AppScreenshots.sleepScheduleCalculator,
  'calculator': AppScreenshots.sleepScheduleCalculator,

  // Notifications & Permissions
  'notifications-alerts': AppScreenshots.notificationsAlerts,
  'notifications': AppScreenshots.notificationsAlerts,
  'permission-notification': AppScreenshots.notificationsAlerts,
  'notification-permission': AppScreenshots.notificationPermission,
  'permission-location': AppScreenshots.notificationPermission,

  // Profile
  'user-profile-biometrics': AppScreenshots.userProfileBiometrics,
  'profile': AppScreenshots.userProfileBiometrics,
};

export const IPhoneMockup = ({ 
  imageSrc, 
  screenType = 'home', 
  className = '', 
  elevated = false,
  alt = 'Swasthya App Screenshot',
  width = 270,
  height = 575,
}) => {
  // Resolve screenshot src
  const resolvedSrc = imageSrc || SCREEN_MAP[screenType] || AppScreenshots.homeDashboard;

  return (
    <div 
      className={`relative rounded-[48px] bg-[#151516] p-[8px] shadow-phone transition-all duration-500 hover:scale-[1.02] ${
        elevated ? 'shadow-phone-elevated -translate-y-4' : ''
      } ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        border: '4px solid #2a2b2e',
      }}
    >
      {/* Outer Titanium Edge Glare */}
      <div className="absolute inset-0 rounded-[44px] pointer-events-none ring-1 ring-white/20 z-20" />
      
      {/* Screen Inner Frame */}
      <div className="relative w-full h-full bg-[#f6f8fa] rounded-[38px] overflow-hidden flex flex-col select-none shadow-inner">
        <img 
          src={resolvedSrc} 
          alt={alt || screenType}
          className="w-full h-full object-cover object-top select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />

        {/* Subtle Screen Ambient Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
    </div>
  );
};

export default IPhoneMockup;

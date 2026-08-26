import { AppScreenshots, iphoneFrame } from '../assets/Images';

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
  height,
}) => {
  // Resolve screenshot src
  const resolvedSrc = imageSrc || SCREEN_MAP[screenType] || AppScreenshots.homeDashboard;

  // Compute width / height matching 519 / 1024 aspect ratio perfectly
  const style = {};
  if (width && !height) {
    style.width = typeof width === 'number' ? `${width}px` : width;
    style.aspectRatio = '519 / 1024';
  } else if (height && !width) {
    style.height = typeof height === 'number' ? `${height}px` : height;
    style.aspectRatio = '519 / 1024';
  } else if (width && height) {
    // If both are provided, prioritize width and enforce natural 519/1024 aspect ratio to prevent frame distortion
    style.width = typeof width === 'number' ? `${width}px` : width;
    style.aspectRatio = '519 / 1024';
  } else {
    style.width = '270px';
    style.aspectRatio = '519 / 1024';
  }

  return (
    <div 
      className={`relative inline-block select-none transition-transform duration-500 hover:scale-[1.02] ${
        elevated ? 'drop-shadow-2xl -translate-y-4' : 'drop-shadow-lg'
      } ${className}`}
      style={style}
    >
      {/* Screen Inner Content - Positioned precisely inside the iPhone bezel */}
      <div 
        className="absolute overflow-hidden z-10 flex flex-col"
        style={{
          top: '2.1%',
          bottom: '2.1%',
          left: '4.6%',
          right: '4.6%',
          borderRadius: '11% / 5.5%',
        }}
      >
        <img 
          src={resolvedSrc} 
          alt={alt || screenType}
          className="w-full h-full object-cover object-top select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />
        {/* Subtle Screen Ambient Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>

      {/* Realistic iPhone Device Frame Overlay */}
      <img
        src={iphoneFrame}
        alt="iPhone Frame"
        className="relative w-full h-full object-fill pointer-events-none z-20"
        draggable={false}
      />
    </div>
  );
};

export default IPhoneMockup;

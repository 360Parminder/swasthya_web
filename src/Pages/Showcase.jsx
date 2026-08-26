import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IPhoneMockup } from '../Components/IPhoneMockup';
import { AppScreenshots } from '../assets/Images';
import { AppStoreBadge } from '../Components/AppLogo';
import { 
  SparklesIcon, 
  AiBrain01Icon, 
  Clock01Icon, 
  Calendar03Icon, 
  UserMultiple02Icon, 
  Notification01Icon,
  Search01Icon
} from 'hugeicons-react';
import clsx from 'clsx';

const CATEGORIES = [
  { id: 'all', label: 'All Screens', icon: SparklesIcon },
  { id: 'medication', label: 'Medication & Refills', icon: Clock01Icon },
  { id: 'care-circle', label: 'Care Circle Network', icon: UserMultiple02Icon },
  { id: 'sleep', label: 'Sleep Architecture', icon: Calendar03Icon },
  { id: 'profile', label: 'Profile & Vitals', icon: AiBrain01Icon },
  { id: 'notifications', label: 'Alerts & Setup', icon: Notification01Icon },
];

const SCREENS_DATA = [
  {
    id: 'home-dashboard',
    title: 'Daily Action Dashboard',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'home-dashboard',
    image: AppScreenshots.homeDashboard,
    description: 'Clean day-at-a-glance dashboard showing upcoming doses, real-time taken/skipped statuses, and overall daily adherence rate.',
    features: ['1-tap dose logging', 'Visual progress ring', 'Time-sorted schedule cards'],
  },
  {
    id: 'medication-schedule',
    title: 'Smart Prescription Schedule',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'medication-schedule',
    image: AppScreenshots.medicationSchedule,
    description: 'Detailed multi-frequency medication lists with unit dosages, morning/afternoon/night time slots, and dosage forms.',
    features: ['Custom dosage units', 'Multi-time alarms', 'Food/meal context indicators'],
  },
  {
    id: 'medication-history',
    title: 'Adherence History & Logs',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'medication-history',
    image: AppScreenshots.medicationHistory,
    description: 'Complete chronological history of all past dosages taken, skipped, or rescheduled with exact timestamps.',
    features: ['Historical audit trail', 'Adherence percentage stats', 'Weekly breakdown view'],
  },
  {
    id: 'add-medication',
    title: 'Intuitive Medication Entry',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'add-medication',
    image: AppScreenshots.addMedication,
    description: 'Frictionless flow to enter new medications, pill counts, custom colors, icons, and automated inventory warnings.',
    features: ['Shape & color picker', 'Inventory tracker', 'Custom reminder intervals'],
  },
  {
    id: 'add-medication-datepicker',
    title: 'Date Range & Duration Picker',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'add-medication-datepicker',
    image: AppScreenshots.addMedicationDatepicker,
    description: 'Set exact prescription start and end dates or choose continuous daily treatment plans with interactive calendars.',
    features: ['Course duration calculator', 'Refill cycle anchors', 'Calendar integration'],
  },
  {
    id: 'refill-alerts',
    title: 'Refill & Inventory Forecasting',
    category: 'medication',
    categoryLabel: 'Medication',
    screenType: 'refill-alerts',
    image: AppScreenshots.refillAlerts,
    description: 'Smart AI forecast calculates remaining days of supply and sends preemptive reminders before pills run dry.',
    features: ['Depletion run-out date', 'Pharmacy 1-tap reorder', 'Supply threshold triggers'],
  },
  {
    id: 'care-circle-medications',
    title: 'Care Circle Medication Oversight',
    category: 'care-circle',
    categoryLabel: 'Care Circle',
    screenType: 'care-circle-medications',
    image: AppScreenshots.careCircleMedications,
    description: 'Monitor health schedules and verify adherence for aging parents, children, and loved ones in real time.',
    features: ['Multi-member switcher', 'Caregiver notifications', 'Emergency contact sync'],
  },
  {
    id: 'care-circle-connections',
    title: 'Active Family Connections',
    category: 'care-circle',
    categoryLabel: 'Care Circle',
    screenType: 'care-circle-connections',
    image: AppScreenshots.careCircleConnections,
    description: 'Manage permissions, authorized family members, doctors, and caregivers with granular privacy controls.',
    features: ['Role-based access', 'Instant sync', '1-tap communication'],
  },
  {
    id: 'care-circle-invitations',
    title: 'Secure Circle Invitations',
    category: 'care-circle',
    categoryLabel: 'Care Circle',
    screenType: 'care-circle-invitations',
    image: AppScreenshots.careCircleInvitations,
    description: 'Send end-to-end encrypted invite links to family and doctors with expiration codes and role assignments.',
    features: ['Encrypted invite tokens', 'Role presets (Family/Doctor)', 'Instant onboarding'],
  },
  {
    id: 'sleep-routine-details',
    title: 'Sleep Architecture & Hypnogram',
    category: 'sleep',
    categoryLabel: 'Sleep Architecture',
    screenType: 'sleep-routine-details',
    image: AppScreenshots.sleepRoutineDetails,
    description: 'Break down sleep cycles into Deep, REM, Core, and Awake stages with restorative recovery scoring.',
    features: ['Hypnogram graph', 'Sleep consistency score', 'Restorative heart rate dip'],
  },
  {
    id: 'sleep-schedule-calculator',
    title: '90-Minute Sleep Cycle Calculator',
    category: 'sleep',
    categoryLabel: 'Sleep Architecture',
    screenType: 'sleep-schedule-calculator',
    image: AppScreenshots.sleepScheduleCalculator,
    description: 'Calculate the optimal wake-up or bedtimes matching natural 90-minute sleep cycles to avoid groggy mornings.',
    features: ['Optimal wake-up times', 'Wind-down countdown', 'Bedtime routine triggers'],
  },
  {
    id: 'user-profile-biometrics',
    title: 'Health Biometrics & Vitals Profile',
    category: 'profile',
    categoryLabel: 'Profile & Vitals',
    screenType: 'user-profile-biometrics',
    image: AppScreenshots.userProfileBiometrics,
    description: 'Track core biometric telemetry including weight, height, BMI, blood pressure trends, and daily wellness targets.',
    features: ['BMI automatic calculation', 'Encrypted on-device profile', 'Apple Health sync'],
  },
  {
    id: 'notifications-alerts',
    title: 'Critical Health Alerts & Alarms',
    category: 'notifications',
    categoryLabel: 'Alerts',
    screenType: 'notifications-alerts',
    image: AppScreenshots.notificationsAlerts,
    description: 'High-priority interactive notification banners with instant Take/Skip actions directly from your lock screen.',
    features: ['Lock screen quick actions', 'Persistent sound chime', 'Caregiver escalation alerts'],
  },
  {
    id: 'notification-permission',
    title: 'Privacy-First Permissions',
    category: 'notifications',
    categoryLabel: 'Setup',
    screenType: 'notification-permission',
    image: AppScreenshots.notificationPermission,
    description: 'Clear, transparent explanation of required permissions keeping full data privacy and zero tracking at the center.',
    features: ['Zero third-party trackers', 'Granular notification rules', 'Biometric Face ID lock'],
  },
];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedScreen, setSelectedScreen] = useState(null);

  const filteredScreens = activeCategory === 'all'
    ? SCREENS_DATA
    : SCREENS_DATA.filter(s => s.category === activeCategory);

  return (
    <div className={clsx('min-h-screen', 'bg-[#fafafa]', 'pt-28', 'pb-24', 'font-sans')}>
      
      {/* ── Header Intro ── */}
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-center', 'mb-16', 'space-y-4')}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'tracking-widest', 'uppercase')}>
            APP SHOWCASE & INTERFACE SUITE
          </span>
          <h1 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
            Designed with clinical precision.
          </h1>
          <p className={clsx('text-base', 'sm:text-lg', 'text-gray-500', 'max-w-2xl', 'mx-auto', 'leading-relaxed')}>
            Explore every screen of the Swasthya iOS ecosystem—crafted for effortless medication adherence, sleep recovery, and care circle oversight.
          </p>
        </motion.div>

        {/* ── Category Filter Pills ── */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-6"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  'flex', 'items-center', 'space-x-2', 'px-4', 'py-2', 'rounded-full', 'text-xs', 'sm:text-sm', 'font-medium',
                  'transition-all', 'duration-200', 'cursor-pointer',
                  isActive 
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/80 hover:text-gray-900'
                )}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
                <span className={clsx('text-[11px]', 'px-1.5', 'py-0.5', 'rounded-full', isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400')}>
                  {cat.id === 'all' ? SCREENS_DATA.length : SCREENS_DATA.filter(s => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Showcase Grid (Featuring Authentic iPhone Frame) ── */}
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {filteredScreens.map((screen, idx) => (
              <motion.div
                key={screen.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={clsx(
                  'bg-white', 'rounded-[36px]', 'p-6', 'sm:p-8',
                  'border', 'border-gray-200/70', 'shadow-sm',
                  'hover:shadow-xl', 'hover:border-gray-300',
                  'transition-all', 'duration-300', 'group',
                  'flex', 'flex-col', 'items-center', 'text-center'
                )}
              >
                {/* Badge */}
                <div className="mb-4">
                  <span className={clsx('text-[11px]', 'font-bold', 'px-3', 'py-1', 'rounded-full', 'bg-brand-50', 'text-brand-600', 'border', 'border-brand-100')}>
                    {screen.categoryLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className={clsx('text-xl', 'font-bold', 'text-gray-900', 'mb-2', 'tracking-tight')}>
                  {screen.title}
                </h3>
                <p className={clsx('text-xs', 'sm:text-sm', 'text-gray-500', 'leading-relaxed', 'mb-6', 'max-w-xs')}>
                  {screen.description}
                </p>

                {/* iPhone Mockup with User Frame */}
                <div 
                  onClick={() => setSelectedScreen(screen)}
                  className="cursor-pointer transition-transform duration-500 group-hover:-translate-y-2 relative"
                >
                  <IPhoneMockup 
                    screenType={screen.screenType} 
                    alt={screen.title}
                    width={240}
                  />
                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 rounded-[44px] bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Search01Icon size={14} /> Tap to Expand
                    </span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="mt-6 flex flex-wrap justify-center gap-1.5 pt-4 border-t border-gray-100 w-full">
                  {screen.features.map((feat, fIdx) => (
                    <span key={fIdx} className="text-[11px] text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                      • {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Modal for Screen Inspection ── */}
      <AnimatePresence>
        {selectedScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreen(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] max-w-2xl w-full p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedScreen(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>

              {/* iPhone Frame in Modal */}
              <div className="shrink-0">
                <IPhoneMockup 
                  screenType={selectedScreen.screenType} 
                  alt={selectedScreen.title}
                  width={240}
                />
              </div>

              {/* Details */}
              <div className="space-y-4 text-left">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100">
                  {selectedScreen.categoryLabel}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {selectedScreen.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedScreen.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Key Capabilities</h4>
                  <ul className="space-y-1.5">
                    {selectedScreen.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedScreen(null)}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-xs px-5 py-2.5 rounded-xl shadow transition-all cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom Store CTA ── */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center space-y-6">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready to experience Swasthya on your iPhone?
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Get early access to intelligent health & medication tracking before the public App Store release.
          </p>
          <div className="pt-2">
            <AppStoreBadge />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Showcase;

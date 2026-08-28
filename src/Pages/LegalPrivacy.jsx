import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckmarkCircle02Icon, 
  SparklesIcon, 
  UserMultiple02Icon, 
  Notification01Icon, 
  AiBrain01Icon, 
  Mail01Icon 
} from 'hugeicons-react';
import clsx from 'clsx';

const PrivacyPolicy = () => {
  const lastUpdated = "August 27, 2026";

  const sections = [
    {
      icon: <CheckmarkCircle02Icon size={22} />,
      title: "1. Commitment to Privacy",
      content: `At Swasthya (स्वास्थ्य), your health privacy and data sovereignty are our highest priorities. This Privacy Policy details how we collect, use, safeguard, and disclose information when you use the Swasthya mobile application, web portal, and associated services.`
    },
    {
      icon: <AiBrain01Icon size={22} />,
      title: "2. Information We Collect",
      content: `We only collect information essential to providing intelligent health management and medication tracking:
• Account Credentials: Name, email address, unique user ID (@username), and profile image.
• Health & Medication Data: Prescription names, dosage forms, pill quantities, intake schedules, taken/skipped logs, and stock depletion forecasts.
• Sleep & Wellness Telemetry: Sleep duration, circadian stage breakdowns (Deep, REM, Core, Awake), hypnogram recovery metrics, and water intake entries.
• Biometric Profile: Height, weight, and general health metrics logged for personal tracking purposes.`
    },
    {
      icon: <SparklesIcon size={22} />,
      title: "3. How Your Information is Used",
      content: `Your data is utilized strictly to provide and improve the Swasthya platform:
• To calculate medication schedules and generate predictive refill alerts.
• To compute personalized 90-minute sleep cycle calculators and hypnograms.
• To facilitate encrypted Care Circle connections between you and authorized family members or caregivers.
• We NEVER sell, rent, monetize, or trade your personal or health information to third parties or advertising networks.`
    },
    {
      icon: <UserMultiple02Icon size={22} />,
      title: "4. Care Circle & Sharing Controls",
      content: `Swasthya enables you to connect with family members and caregivers through end-to-end encrypted invite links. You retain complete, granular control over who can view your prescription schedules or dependent profiles. You may revoke access or remove connections at any time directly from the Connections settings.`
    },
    {
      icon: <Notification01Icon size={22} />,
      title: "5. Device Permissions",
      content: `To provide timely alerts, the app requests specific device permissions:
• Notifications & Alarms: Required to deliver high-priority dose reminders, refill warnings, and family updates.
• Exact Alarms (Android): Required to trigger critical medication intake alarms at exact scheduled times even when the device is idle.`
    },
    {
      icon: <CheckmarkCircle02Icon size={22} />,
      title: "6. Data Security & Storage",
      content: `We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest). Database access is protected by strict role-based access control and tokenized authentication.`
    },
    {
      icon: <Mail01Icon size={22} />,
      title: "7. Data Retention & Deletion Rights",
      content: `You have the right to access, export, or permanently delete your account and all associated health records at any time. To request complete data erasure, please contact us at privacy@swasthya.info or parminder@swasthya.info.`
    }
  ];

  return (
    <div className={clsx('min-h-screen', 'bg-[#fafafa]', 'pt-28', 'pb-24', 'font-sans')}>
      
      {/* ── Page Header ── */}
      <div className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'text-center', 'mb-14', 'space-y-3')}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'tracking-widest', 'uppercase')}>
            LEGAL & PRIVACY
          </span>
          <h1 className={clsx('text-3xl', 'sm:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight', 'mt-2')}>
            Privacy Policy
          </h1>
          <p className={clsx('text-xs', 'sm:text-sm', 'text-gray-400', 'mt-2')}>
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* ── Content Card ── */}
      <div className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6')}>
        <div className={clsx('bg-white', 'rounded-[32px]', 'p-6', 'sm:p-12', 'border', 'border-gray-200/80', 'shadow-sm', 'space-y-10')}>
          
          {/* Summary Box */}
          <div className="bg-brand-50/60 rounded-2xl p-5 sm:p-6 border border-brand-100/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <CheckmarkCircle02Icon size={20} />
            </div>
            <div className="space-y-1 text-left">
              <h3 className="text-sm font-bold text-gray-900">Zero Advertising & Zero Health Data Selling</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Swasthya is built on privacy-first architecture. Your medication regimens, sleep patterns, and vitals are encrypted and used solely to empower your personal wellness and family circle oversight.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8 divide-y divide-gray-100">
            {sections.map((sec, idx) => (
              <div key={idx} className={clsx('pt-8 first:pt-0', 'text-left', 'space-y-3')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100/60">
                    {sec.icon}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-11">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Footer Box */}
          <div className="pt-8 border-t border-gray-100 text-center space-y-2">
            <h3 className="text-sm font-bold text-gray-900">Questions about our Privacy Policy?</h3>
            <p className="text-xs text-gray-500">
              Reach out to our Data Protection Officer at{' '}
              <a href="mailto:privacy@swasthya.info" className="text-brand-600 font-semibold hover:underline">
                privacy@swasthya.info
              </a>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;

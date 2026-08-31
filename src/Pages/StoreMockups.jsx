import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IPhoneMockup } from '../Components/IPhoneMockup';
import { AppScreenshots } from '../assets/Images';
import {
  SparklesIcon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  Download01Icon,
  ViewIcon
} from 'hugeicons-react';
import clsx from 'clsx';

const MOCKUP_SLIDES = [
  {
    id: 1,
    badge: "All-In-One Health",
    badgeBg: "bg-white/10 text-white border-white/20",
    headline: "Your complete\nhealth ecosystem",
    subtext: "Connect daily medications, sleep architecture, and family care in one clinical platform.",
    bg: "from-[#0d0b18] via-[#16122a] to-[#0d0b18]",
    screenType: "home-dashboard",
    phoneTransform: "translate-y-4 hover:translate-y-2",
    accentArrow: "purple",
    footerBadges: ["AI Dose Schedule", "Restorative Sleep", "Care Circle"],
  },
  {
    id: 2,
    badge: "Track Daily Doses",
    badgeBg: "bg-black/40 text-white border-white/10",
    headline: "Log anytime,\nnever miss a dose",
    subtext: "1-tap intake tracking with instant auditory feedback and multi-time alarms.",
    bg: "from-[#7c3aed] via-[#6d28d9] to-[#5b21b6]",
    screenType: "medication-schedule",
    phoneTransform: "translate-y-6 hover:translate-y-2",
    accentArrow: "white",
    footerBadges: ["1-Tap Intake", "Critical Reminders", "Flexible Timing"],
  },
  {
    id: 3,
    badge: "Clinical Adherence",
    badgeBg: "bg-purple-900/60 text-purple-200 border-purple-500/30",
    headline: "Health tracking\nyou can trust",
    subtext: "30-day adherence calendar, taken/missed statistics, and audit logs.",
    bg: "from-[#0f0e17] via-[#1a172e] to-[#0f0e17]",
    screenType: "medication-history",
    phoneTransform: "translate-y-3 hover:translate-y-1",
    accentArrow: "violet",
    footerBadges: ["30-Day History", "Adherence Score", "Export Reports"],
  },
  {
    id: 4,
    badge: "Smart Refills",
    badgeBg: "bg-black/40 text-white border-white/10",
    headline: "Refill before\nyour pills run out",
    subtext: "Automated depletion forecasts with 1-tap quick refill restocking (+15, +30, +60).",
    bg: "from-[#6d28d9] via-[#5b21b6] to-[#4c1d95]",
    screenType: "refill-alerts",
    phoneTransform: "translate-y-6 hover:translate-y-2",
    accentArrow: "white",
    footerBadges: ["Days-of-Supply", "1-Tap Restock", "Pharmacy Ready"],
  },
  {
    id: 5,
    badge: "Care Circle Network",
    badgeBg: "bg-white/15 text-white border-white/20",
    headline: "Protect the ones\nyou love most",
    subtext: "Manage prescriptions and monitor vitals for aging parents and dependents remotely.",
    bg: "from-[#7c3aed] via-[#8b5cf6] to-[#6d28d9]",
    screenType: "care-circle-medications",
    phoneTransform: "translate-y-4 hover:translate-y-2",
    accentArrow: "white",
    footerBadges: ["Family Sync", "Doctor Access", "Encrypted Invites"],
  },
];

const HandDrawnArrow = ({ color = "white", className = "" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx('w-16 h-12 pointer-events-none', className)}
  >
    <path
      d="M10 20 C 35 10, 65 25, 80 50 M 80 50 L 65 48 M 80 50 L 76 35"
      stroke={color === "white" ? "rgba(255,255,255,0.7)" : "#a78bfa"}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StoreMockups = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <div className={clsx('min-h-screen', 'bg-[#0f0e17]', 'text-white', 'pt-28', 'pb-24', 'font-sans')}>

      {/* ── Header ── */}
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'text-center', 'mb-16', 'space-y-4')}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className={clsx('text-purple-400', 'font-bold', 'text-xs', 'tracking-[0.25em]', 'uppercase')}>
            APP STORE & PLAY STORE ASSETS
          </span>
          <h1 className={clsx('text-3xl', 'sm:text-5xl', 'md:text-6xl', 'font-extrabold', 'tracking-tight')}>
            App Store Promotional Mockups
          </h1>
          <p className={clsx('text-sm', 'sm:text-base', 'text-gray-400', 'max-w-2xl', 'mx-auto', 'leading-relaxed')}>
            High-resolution 1290 × 2796 px formatted screenshots for Google Play Console and Apple App Store showcase listings.
          </p>
        </motion.div>
      </div>

      {/* ── 5-Slide Horizontal Showcase Gallery ── */}
      <div className={clsx('max-w-[1400px]', 'mx-auto', 'px-4', 'sm:px-6')}>
        <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-5', 'gap-6')}>
          {MOCKUP_SLIDES.map((slide, idx) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={clsx('flex', 'flex-col', 'items-center')}
            >
              {/* Mockup Card (1290x2796 aspect ~ 1:2.16) */}
              <div
                className={clsx(
                  'w-full', 'rounded-[36px]', 'p-6', 'flex', 'flex-col', 'items-center', 'text-center',
                  'bg-gradient-to-b', slide.bg,
                  'border', 'border-white/15', 'shadow-2xl',
                  'overflow-hidden', 'relative', 'group',
                  'transition-all', 'duration-500', 'hover:scale-[1.02]', 'hover:border-white/30'
                )}
                style={{
                  minHeight: '620px',
                }}
              >
                {/* Decorative Ambient Radial Glow */}
                <div className={clsx('absolute', '-top-20', '-left-20', 'w-48', 'h-48', 'bg-white/10', 'rounded-full', 'blur-3xl', 'pointer-events-none')} />
                <div className={clsx('absolute', '-bottom-20', '-right-20', 'w-48', 'h-48', 'bg-purple-500/20', 'rounded-full', 'blur-3xl', 'pointer-events-none')} />

                {/* Top Badge */}
                <div className={clsx('mb-4', 'z-10')}>
                  <span className={clsx('text-[11px]', 'font-bold', 'px-3', 'py-1', 'rounded-full', 'border', slide.badgeBg)}>
                    {slide.badge}
                  </span>
                </div>

                {/* Main Punchy Headline */}
                <h2 className={clsx('text-xl', 'sm:text-2xl', 'font-extrabold', 'text-white', 'tracking-tight', 'leading-snug', 'mb-2', 'whitespace-pre-line', 'z-10')}>
                  {slide.headline}
                </h2>

                {/* Subtitle */}
                <p className={clsx('text-[11px]', 'text-white/70', 'max-w-[200px]', 'leading-relaxed', 'mb-6', 'z-10')}>
                  {slide.subtext}
                </p>

                {/* Decorative Arrow */}
                <div className={clsx('absolute', 'top-24', 'right-4', 'hidden', 'sm:block', 'z-10')}>
                  <HandDrawnArrow color={slide.accentArrow} />
                </div>

                {/* Real iPhone Mockup with User Frame */}
                <div className={clsx('relative', 'z-10', 'transition-transform', 'duration-500', slide.phoneTransform, 'mt-auto')}>
                  <IPhoneMockup
                    screenType={slide.screenType}
                    alt={slide.headline}
                    width={200}
                  />
                </div>

                {/* Bottom Feature Pills */}
                <div className={clsx('mt-4', 'pt-3', 'border-t', 'border-white/10', 'w-full', 'flex', 'flex-wrap', 'justify-center', 'gap-1', 'z-10')}>
                  {slide.footerBadges.map((badge, bIdx) => (
                    <span key={bIdx} className={clsx('text-[9px]', 'font-semibold', 'text-white/80', 'bg-white/10', 'px-2', 'py-0.5', 'rounded-md')}>
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

              {/* Slide Spec Label */}
              <div className={clsx('mt-3', 'text-center', 'space-y-0.5')}>
                <span className={clsx('text-xs', 'font-bold', 'text-gray-300')}>#{slide.id} {slide.badge}</span>
                <p className={clsx('text-[11px]', 'text-gray-500', 'font-mono')}>1290px × 2796px (9:19.5)</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Play Store / App Store Submission Tips ── */}
      <div className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'mt-20')}>
        <div className={clsx('bg-white/5', 'rounded-3xl', 'p-8', 'border', 'border-white/10', 'space-y-4', 'text-left')}>
          <div className={clsx('flex', 'items-center', 'gap-3')}>
            <div className={clsx('w-10', 'h-10', 'rounded-xl', 'bg-purple-600/30', 'text-purple-400', 'flex', 'items-center', 'justify-center', 'border', 'border-purple-500/30')}>
              <SparklesIcon size={20} />
            </div>
            <div>
              <h3 className={clsx('text-base', 'font-bold', 'text-white')}>Google Play Store & Apple App Store Guidelines</h3>
              <p className={clsx('text-xs', 'text-gray-400')}>Ready for App Store 6.7" Super Retina XDR & Play Store High-Res submissions</p>
            </div>
          </div>

          <ul className={clsx('space-y-2', 'text-xs', 'text-gray-300', 'pt-2', 'divide-y', 'divide-white/5')}>
            <li className={clsx('flex', 'items-center', 'gap-2', 'pt-2')}>
              <CheckmarkCircle02Icon size={16} className={clsx('text-purple-400', 'shrink-0')} />
              <span><strong>Resolution:</strong> 1290 × 2796 px (Portrait 9:19.5 ratio) is standard for flagship iPhone and Android displays.</span>
            </li>
            <li className={clsx('flex', 'items-center', 'gap-2', 'pt-2')}>
              <CheckmarkCircle02Icon size={16} className={clsx('text-purple-400', 'shrink-0')} />
              <span><strong>Color Cohesion:</strong> Built using royal purple (`#7C3AED`) and midnight violet matching your Swasthya logo.</span>
            </li>
            <li className={clsx('flex', 'items-center', 'gap-2', 'pt-2')}>
              <CheckmarkCircle02Icon size={16} className={clsx('text-purple-400', 'shrink-0')} />
              <span><strong>Authentic iPhone Hardware:</strong> Integrates the transparent titanium bezel and dynamic island frame provided for pixel-accurate preview.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default StoreMockups;

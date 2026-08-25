import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppLogo, AppStoreBadge } from '../Components/AppLogo';
import { IPhoneMockup } from '../Components/IPhoneMockup';
import { 
  RefreshIcon, 
  AiBrain01Icon, 
  Clock01Icon, 
  Calendar03Icon, 
  CloudIcon, 
  UserMultiple02Icon, 
  Notification01Icon, 
  SparklesIcon, 
  ArrowDown01Icon,
  ArrowRight01Icon
} from 'hugeicons-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const HomeScreen = () => {
  // Intro animation states: 'center' -> 'moving' -> 'hero'
  const [introPhase, setIntroPhase] = useState('center');
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    // Phase 1: Logo starts in center
    setIntroPhase('center');

    // Phase 2: After 900ms, start moving smoothly towards Hero position
    const moveTimer = setTimeout(() => {
      setIntroPhase('moving');
    }, 900);

    // Phase 3: Logo reaches hero and unlocks hero content
    const heroTimer = setTimeout(() => {
      setIntroPhase('hero');
    }, 1800);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(heroTimer);
    };
  }, [replayKey]);

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setReplayKey(prev => prev + 1);
  };

  const isIntroMovingOrHero = introPhase === 'moving' || introPhase === 'hero';
  const isHeroReady = introPhase === 'hero';

  return (
    <div className={clsx('min-h-screen', 'bg-white', 'text-gray-900', 'font-sans', 'selection:bg-brand-100', 'selection:text-brand-600', 'relative', 'overflow-x-hidden')}>
      
      {/* Replay Intro Button (floating trigger for quick testing) */}
      <div className={clsx('fixed', 'bottom-6', 'right-6', 'z-40')}>
        <button
          onClick={handleReplay}
          className={clsx('flex', 'items-center', 'space-x-2', 'bg-white/90', 'hover:bg-white', 'text-gray-700', 'text-xs', 'font-semibold', 'px-4', 'py-2.5', 'rounded-full', 'shadow-lg', 'border', 'border-gray-200', 'backdrop-blur-md', 'hover:shadow-xl', 'hover:text-brand-500', 'transition-all', 'group')}
          title="Replay center-to-hero opening animation"
        >
          <RefreshIcon size={16} className={clsx('group-hover:rotate-180', 'transition-transform', 'duration-500')} />
          <span>Replay Intro</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN INTRO OVERLAY (Shows logo in center, then flies to hero spot) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {!isHeroReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={clsx('fixed', 'inset-0', 'z-40', 'bg-white/95', 'backdrop-blur-sm', 'pointer-events-none', 'flex', 'items-center', 'justify-center')}
          />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className={clsx('relative', 'pt-32', 'pb-20', 'md:pt-40', 'md:pb-28', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-7xl', 'mx-auto', 'flex', 'flex-col', 'items-center', 'text-center')}>
        
        {/* Animated Flying Logo Anchor */}
        <div className={clsx('relative', 'mb-6', 'flex', 'flex-col', 'items-center', 'justify-center', 'min-h-[110px]')}>
          {introPhase === 'center' ? (
            /* Phase 1: Logo centered in the entire viewport */
            <motion.div
              key={`center-${replayKey}`}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1.1, opacity: 1, y: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20, 
                duration: 0.6 
              }}
              className={clsx('fixed', 'inset-0', 'z-50', 'flex', 'flex-col', 'items-center', 'justify-center', 'pointer-events-none')}
            >
              <div className={clsx('relative', 'flex', 'flex-col', 'items-center')}>
                {/* Glow ring behind logo */}
                <div className={clsx('absolute', '-inset-4', 'bg-brand-500/20', 'rounded-full', 'blur-2xl', 'animate-pulse')} />
                <AppLogo size="center-intro" showText={true} />
              </div>
            </motion.div>
          ) : introPhase === 'moving' ? (
            /* Phase 2: Logo animating seamlessly from center to hero anchor */
            <motion.div
              key={`moving-${replayKey}`}
              initial={{ 
                position: 'fixed', 
                top: '50%', 
                left: '50%', 
                x: '-50%', 
                y: '-50%', 
                scale: 1.1,
                zIndex: 50 
              }}
              animate={{ 
                position: 'fixed', 
                top: '190px', 
                left: '50%', 
                x: '-50%', 
                y: '0%', 
                scale: 0.75,
                zIndex: 50 
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 120, 
                damping: 18, 
                mass: 0.9 
              }}
              className={clsx('pointer-events-none', 'flex', 'flex-col', 'items-center')}
            >
              <AppLogo size="center-intro" showText={true} />
            </motion.div>
          ) : (
            /* Phase 3: Logo settled in Hero */
            <motion.div
              key={`hero-${replayKey}`}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={clsx('flex', 'flex-col', 'items-center')}
            >
              <AppLogo size="hero" showText={true} />
            </motion.div>
          )}
        </div>

        {/* Hero Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={clsx('max-w-3xl', 'mx-auto', 'space-y-4')}
        >
          <h1 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'font-extrabold', 'tracking-tight', 'text-gray-900', 'leading-[1.12]')}>
            Smart health & medication tracking powered by intelligent care.
          </h1>

          <p className={clsx('text-base', 'sm:text-lg', 'md:text-xl', 'text-gray-500', 'font-normal', 'max-w-2xl', 'mx-auto', 'leading-relaxed')}>
            Swasthya transforms your medication adherence, sleep architecture, vitals monitoring, and care circle coordination into instant actionable insights. Perfect for personal wellness and family health oversight.
          </p>
        </motion.div>

        {/* App Store Download Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={clsx('mt-8', 'mb-24', 'md:mb-28', 'relative', 'z-20')}
          id="download"
        >
          <AppStoreBadge />
        </motion.div>

        {/* ========================================================================= */}
        {/* 5-DEVICE STEPPED ARCH SHOWCASE (Spread Left & Right, No Clipping, Full Visibility) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={clsx('w-full', 'max-w-7xl', 'mx-auto', 'relative', 'pt-6', 'pb-28', 'px-4', 'overflow-visible')}
        >
          {/* Subtle gradient background glow */}
          <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[900px]', 'h-[450px]', 'bg-gradient-to-r', 'from-red-100/40', 'via-amber-50/50', 'to-blue-100/40', 'blur-3xl', '-z-10', 'rounded-full', 'pointer-events-none')} />

          {/* Stepped Arch Container (Side-by-side spread, fully unclipped) */}
          <div className={clsx('w-full', 'flex', 'justify-center', 'py-6', 'overflow-visible')}>
            <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6', 'select-none', 'transform', 'origin-top', 'scale-[0.44]', 'xs:scale-[0.52]', 'sm:scale-[0.66]', 'md:scale-[0.82]', 'lg:scale-[0.95]', 'xl:scale-100', 'transition-transform', 'duration-300')}>
              
              {/* Phone 1: Outer Left (Lowest / Stepped Down) */}
              <div className={clsx('shrink-0', 'transform', 'translate-y-10', 'sm:translate-y-12', 'md:translate-y-14', 'hover:translate-y-6', 'transition-all', 'duration-300')}>
                <IPhoneMockup 
                  screenType="medication-schedule" 
                  alt="Medication Regimen Schedule" 
                  width={210}
                  height={445}
                  className={clsx('shadow-lg', 'hover:shadow-xl')}
                />
              </div>

              {/* Phone 2: Inner Left (Little Down) */}
              <div className={clsx('shrink-0', 'transform', 'translate-y-3', 'sm:translate-y-4', 'md:translate-y-5', 'hover:translate-y-0', 'transition-all', 'duration-300')}>
                <IPhoneMockup 
                  screenType="sleep-routine-details" 
                  alt="Sleep Stages Hypnogram" 
                  width={225}
                  height={480}
                  className={clsx('shadow-xl', 'hover:shadow-2xl')}
                />
              </div>

              {/* Phone 3: Center (Elevated Little Above / Highest) */}
              <div className={clsx('shrink-0', 'transform', '-translate-y-6', 'sm:-translate-y-8', 'md:-translate-y-10', 'hover:-translate-y-14', 'transition-all', 'duration-300')}>
                <IPhoneMockup 
                  screenType="home-dashboard" 
                  elevated={true} 
                  alt="Home Dashboard" 
                  width={245}
                  height={520}
                  className={clsx('shadow-phone-elevated', 'ring-1', 'ring-black/5')}
                />
              </div>

              {/* Phone 4: Inner Right (Little Down) */}
              <div className={clsx('shrink-0', 'transform', 'translate-y-3', 'sm:translate-y-4', 'md:translate-y-5', 'hover:translate-y-0', 'transition-all', 'duration-300')}>
                <IPhoneMockup 
                  screenType="refill-alerts" 
                  alt="Prescription Refill Alerts" 
                  width={225}
                  height={480}
                  className={clsx('shadow-xl', 'hover:shadow-2xl')}
                />
              </div>

              {/* Phone 5: Outer Right (Lowest / Stepped Down) */}
              <div className={clsx('shrink-0', 'transform', 'translate-y-10', 'sm:translate-y-12', 'md:translate-y-14', 'hover:translate-y-6', 'transition-all', 'duration-300')}>
                <IPhoneMockup 
                  screenType="care-circle-medications" 
                  alt="Care Circle Prescriptions" 
                  width={210}
                  height={445}
                  className={clsx('shadow-lg', 'hover:shadow-xl')}
                />
              </div>

            </div>
          </div>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* EXPERIENCE SECTION (an app unlike any other) */}
      {/* ========================================================================= */}
      <section id="experience" className={clsx('py-24', 'bg-[#fafafa]', 'border-t', 'border-gray-100', 'relative')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-16', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              EXPERIENCE
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              an app unlike any other
            </h2>
            <p className={clsx('text-gray-500', 'text-base', 'sm:text-lg', 'max-w-xl', 'mx-auto', 'font-normal')}>
              Designed with clinical precision and intuitive depth to make daily medications, sleep routines, and family vitals effortlessly clear.
            </p>
          </div>

          {/* 3 Staggered / Perspective iPhone Showcase */}
          <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'gap-8', 'lg:gap-8', 'max-w-5xl', 'mx-auto')}>
            
            {/* Left Phone: Add Medication Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx('flex', 'flex-col', 'items-center', 'shrink-0', 'transform', 'lg:translate-y-6', 'hover:translate-y-0', 'transition-all', 'duration-300', 'bg-white/70', 'lg:bg-transparent', 'p-4', 'lg:p-0', 'rounded-3xl', 'border', 'border-gray-100', 'lg:border-none', 'shadow-sm', 'lg:shadow-none')}
            >
              <IPhoneMockup screenType="add-medication" alt="Add Medication Screen" />
              <div className={clsx('text-center', 'mt-5')}>
                <span className={clsx('font-bold', 'text-sm', 'text-gray-900', 'block')}>Smart Dose Logging</span>
                <p className={clsx('text-xs', 'text-gray-500', 'mt-0.5')}>1-tap intake tracking & instant stock updates</p>
              </div>
            </motion.div>

            {/* Center Phone: Sleep Architecture Calculator (Elevated) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={clsx('flex', 'flex-col', 'items-center', 'shrink-0', 'transform', 'lg:-translate-y-4', 'hover:-translate-y-6', 'transition-all', 'duration-300', 'bg-white/70', 'lg:bg-transparent', 'p-4', 'lg:p-0', 'rounded-3xl', 'border', 'border-gray-100', 'lg:border-none', 'shadow-sm', 'lg:shadow-none')}
            >
              <IPhoneMockup screenType="sleep-schedule-calculator" elevated={true} alt="Sleep Restorative Calculator" />
              <div className={clsx('text-center', 'mt-5')}>
                <span className={clsx('font-bold', 'text-sm', 'text-brand-600', 'block')}>Sleep Score & Rest Architecture</span>
                <p className={clsx('text-xs', 'text-gray-500', 'mt-0.5')}>90-min cycle calculator & bedtime dials</p>
              </div>
            </motion.div>

            {/* Right Phone: Care Circle Connections */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={clsx('flex', 'flex-col', 'items-center', 'shrink-0', 'transform', 'lg:translate-y-6', 'hover:translate-y-0', 'transition-all', 'duration-300', 'bg-white/70', 'lg:bg-transparent', 'p-4', 'lg:p-0', 'rounded-3xl', 'border', 'border-gray-100', 'lg:border-none', 'shadow-sm', 'lg:shadow-none')}
            >
              <IPhoneMockup screenType="care-circle-connections" alt="Care Circle Network" />
              <div className={clsx('text-center', 'mt-5')}>
                <span className={clsx('font-bold', 'text-sm', 'text-gray-900', 'block')}>Care Circle Network</span>
                <p className={clsx('text-xs', 'text-gray-500', 'mt-0.5')}>Multi-member prescription & vitals oversight</p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* POWERFUL FEATURES SECTION */}
      {/* ========================================================================= */}
      <section id="features" className={clsx('py-24', 'bg-white', 'border-t', 'border-gray-100')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-20', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              FEATURES
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              powerful features
            </h2>
          </div>

          {/* Feature 1: Medication & Refill Forecasting (Phone Left, Text Right) */}
          <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-between', 'gap-12', 'lg:gap-20', 'max-w-5xl', 'mx-auto', 'mb-28', 'lg:mb-36')}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx('w-full', 'lg:w-1/2', 'flex', 'justify-center')}
            >
              <IPhoneMockup screenType="refill-alerts" alt="Refill Alerts & Depletion Forecasting" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={clsx('w-full', 'lg:w-1/2', 'text-center', 'lg:text-left', 'space-y-6')}
            >
              <h3 className={clsx('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight', 'leading-[1.15]')}>
                Smart Medication<br />& Refill Alerts
              </h3>
              <p className={clsx('text-base', 'sm:text-lg', 'text-gray-500', 'font-normal', 'max-w-md', 'mx-auto', 'lg:mx-0', 'leading-relaxed')}>
                Intelligent dose scheduling with automated days-of-supply depletion forecasts, low-stock warnings, and 1-tap quick refills.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className={clsx('inline-block', 'bg-brand-500', 'hover:bg-brand-600', 'text-white', 'font-medium', 'text-sm', 'px-7', 'py-3', 'rounded-full', 'shadow-md', 'shadow-brand-500/25', 'hover:shadow-brand-500/40', 'active:scale-95', 'transition-all', 'duration-200')}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Sleep Architecture & Cycles (Text Left, Phone Right) */}
          <div className={clsx('flex', 'flex-col-reverse', 'lg:flex-row', 'items-center', 'justify-between', 'gap-12', 'lg:gap-20', 'max-w-5xl', 'mx-auto', 'mb-28', 'lg:mb-36')}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx('w-full', 'lg:w-1/2', 'text-center', 'lg:text-left', 'space-y-6')}
            >
              <h3 className={clsx('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight', 'leading-[1.15]')}>
                Sleep Architecture<br />& Circadian Cycles
              </h3>
              <p className={clsx('text-base', 'sm:text-lg', 'text-gray-500', 'font-normal', 'max-w-md', 'mx-auto', 'lg:mx-0', 'leading-relaxed')}>
                Optimal 90-minute sleep cycle calculator, hypnogram sleep stage breakdowns (Deep, REM, Core), and 7-day recovery trend charts.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className={clsx('inline-block', 'bg-brand-500', 'hover:bg-brand-600', 'text-white', 'font-medium', 'text-sm', 'px-7', 'py-3', 'rounded-full', 'shadow-md', 'shadow-brand-500/25', 'hover:shadow-brand-500/40', 'active:scale-95', 'transition-all', 'duration-200')}
                >
                  Get Started
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={clsx('w-full', 'lg:w-1/2', 'flex', 'justify-center')}
            >
              <IPhoneMockup screenType="sleep-routine-details" alt="Sleep Architecture & Hypnogram" />
            </motion.div>
          </div>

          {/* Feature 3: Care Circle & Family Coordination (Phone Left, Text Right) */}
          <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-between', 'gap-12', 'lg:gap-20', 'max-w-5xl', 'mx-auto')}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx('w-full', 'lg:w-1/2', 'flex', 'justify-center')}
            >
              <IPhoneMockup screenType="care-circle-medications" alt="Care Circle Prescriptions" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={clsx('w-full', 'lg:w-1/2', 'text-center', 'lg:text-left', 'space-y-6')}
            >
              <h3 className={clsx('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight', 'leading-[1.15]')}>
                Care Circle<br />Family Network
              </h3>
              <p className={clsx('text-base', 'sm:text-lg', 'text-gray-500', 'font-normal', 'max-w-md', 'mx-auto', 'lg:mx-0', 'leading-relaxed')}>
                Prescribe and monitor medications for family members and children with real-time adherence updates and instant invite connections.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className={clsx('inline-block', 'bg-brand-500', 'hover:bg-brand-600', 'text-white', 'font-medium', 'text-sm', 'px-7', 'py-3', 'rounded-full', 'shadow-md', 'shadow-brand-500/25', 'hover:shadow-brand-500/40', 'active:scale-95', 'transition-all', 'duration-200')}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* BENEFITS BENTO GRID SECTION */}
      {/* ========================================================================= */}
      <section id="benefits" className={clsx('py-24', 'bg-[#fafafa]', 'border-t', 'border-gray-100')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-20', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              BENEFITS
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              it does a lot of things
            </h2>
          </div>

          <div className={clsx('max-w-5xl', 'mx-auto', 'space-y-8')}>
            
            {/* Bento Card 1: Intelligent Medication Tracking (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx('bg-[#f2f2f4]', 'rounded-[36px]', 'pt-10', 'px-8', 'sm:px-12', 'border', 'border-gray-200/70', 'overflow-hidden', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'group', 'flex', 'flex-col', 'items-center', 'text-center')}
            >
              <div className={clsx('max-w-2xl', 'mx-auto', 'space-y-2', 'mb-8')}>
                <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
                  Intelligent Medication & Refill Forecasting
                </h3>
                <p className={clsx('text-sm', 'sm:text-base', 'text-gray-600', 'font-normal', 'leading-relaxed')}>
                  Our system predicts prescription run-out dates based on your daily dosage frequencies, sending proactive low-stock reminders before your supply runs dry.
                </p>
              </div>

              {/* iPhone Mockup emerging from bottom */}
              <div className={clsx('w-full', 'flex', 'justify-center', 'h-[380px]', 'sm:h-[440px]', 'overflow-hidden', 'relative')}>
                <div className={clsx('transform', 'translate-y-8', 'group-hover:translate-y-2', 'transition-transform', 'duration-500')}>
                  <IPhoneMockup screenType="medication-history" alt="Medication Adherence History" />
                </div>
              </div>
            </motion.div>

            {/* Bento Cards 2 & 3: 2-Column Grid (Sleep Architecture & Care Circle) */}
            <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8')}>
              
              {/* Left Column Card: Sleep Architecture */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={clsx('bg-[#f2f2f4]', 'rounded-[36px]', 'pt-10', 'px-8', 'border', 'border-gray-200/70', 'overflow-hidden', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'group', 'flex', 'flex-col', 'justify-between')}
              >
                <div className={clsx('space-y-2', 'mb-8')}>
                  <h3 className={clsx('text-xl', 'sm:text-2xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
                    Sleep Architecture & Cycles
                  </h3>
                  <p className={clsx('text-xs', 'sm:text-sm', 'text-gray-600', 'font-normal', 'leading-relaxed')}>
                    Track Deep, REM, Core, and Awake stages with an optimal 90-minute cycle calculator, wind-down timers, and bedtime checklists.
                  </p>
                </div>

                {/* iPhone Mockup emerging from bottom */}
                <div className={clsx('w-full', 'flex', 'justify-center', 'h-[360px]', 'sm:h-[410px]', 'overflow-hidden', 'relative')}>
                  <div className={clsx('transform', 'translate-y-8', 'group-hover:translate-y-2', 'transition-transform', 'duration-500')}>
                    <IPhoneMockup screenType="sleep-schedule-calculator" alt="Sleep Schedule Calculator" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column Card: Care Circle Network */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={clsx('bg-[#f2f2f4]', 'rounded-[36px]', 'pt-10', 'px-8', 'border', 'border-gray-200/70', 'overflow-hidden', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'group', 'flex', 'flex-col', 'justify-between')}
              >
                <div className={clsx('space-y-2', 'mb-8')}>
                  <h3 className={clsx('text-xl', 'sm:text-2xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
                    Care Circle Network & Invites
                  </h3>
                  <p className={clsx('text-xs', 'sm:text-sm', 'text-gray-600', 'font-normal', 'leading-relaxed')}>
                    Coordinate health schedules for family members, caregivers, and doctors with multi-member prescription oversight.
                  </p>
                </div>

                {/* iPhone Mockup emerging from bottom */}
                <div className={clsx('w-full', 'flex', 'justify-center', 'h-[360px]', 'sm:h-[410px]', 'overflow-hidden', 'relative')}>
                  <div className={clsx('transform', 'translate-y-8', 'group-hover:translate-y-2', 'transition-transform', 'duration-500')}>
                    <IPhoneMockup screenType="care-circle-invitations" alt="Care Circle Invitations" />
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bento Card 4: Hydration & Health Vitals (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={clsx('bg-[#f2f2f4]', 'rounded-[36px]', 'pt-10', 'px-8', 'sm:px-12', 'border', 'border-gray-200/70', 'overflow-hidden', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'group', 'flex', 'flex-col', 'items-center', 'text-center')}
            >
              <div className={clsx('max-w-2xl', 'mx-auto', 'space-y-2', 'mb-8')}>
                <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
                  Health Biometrics & Profile
                </h3>
                <p className={clsx('text-sm', 'sm:text-base', 'text-gray-600', 'font-normal', 'leading-relaxed')}>
                  Monitor biometric telemetry, weight, height, BMI, dietary targets, and profile settings with encrypted on-device synchronization.
                </p>
              </div>

              {/* iPhone Mockup emerging from bottom */}
              <div className={clsx('w-full', 'flex', 'justify-center', 'h-[380px]', 'sm:h-[440px]', 'overflow-hidden', 'relative')}>
                <div className={clsx('transform', 'translate-y-8', 'group-hover:translate-y-2', 'transition-transform', 'duration-500')}>
                  <IPhoneMockup screenType="user-profile-biometrics" alt="User Profile & Biometrics" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14-SCREEN INTERACTIVE APP TOUR GALLERY SECTION */}
      {/* ========================================================================= */}
      <AppScreensGallery />

      {/* ========================================================================= */}
      {/* 6-GRID FEATURES SECTION */}
      {/* ========================================================================= */}
      <section className={clsx('py-24', 'bg-white', 'border-t', 'border-gray-100')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-20', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              FEATURES
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              powerful features
            </h2>
          </div>

          {/* 6-Grid Feature Cards */}
          <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-12', 'max-w-6xl', 'mx-auto')}>
            {[
              {
                icon: <AiBrain01Icon size={22} className="text-white" />,
                title: "Medication & Refill Alerts",
                desc: "Smart dose scheduling, supply forecasting, and 1-tap instant refill restocking."
              },
              {
                icon: <Clock01Icon size={22} className="text-white" />,
                title: "Sleep Stage Hypnogram",
                desc: "Deep, REM, and Core stage breakdown with 90-minute sleep cycle optimization."
              },
              {
                icon: <Calendar03Icon size={22} className="text-white" />,
                title: "Care Circle Oversight",
                desc: "Manage prescriptions for family members with shared adherence timeline logs."
              },
              {
                icon: <CloudIcon size={22} className="text-white" />,
                title: "Hydration & Vitals Grid",
                desc: "Daily water intake goal tracking and biometric telemetry (SpO2, bpm)."
              },
              {
                icon: <UserMultiple02Icon size={22} className="text-white" />,
                title: "Smart Push Dose Alarms",
                desc: "High-priority synchronized dose alarms with auditory feedback & snooze options."
              },
              {
                icon: <Notification01Icon size={22} className="text-white" />,
                title: "Adherence & Health Trends",
                desc: "Interactive adherence gauges, daily timeline logs, and weekly wellness progress."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={clsx('flex', 'flex-col', 'items-center', 'text-center', 'space-y-3.5', 'group')}
              >
                {/* Red Squircle Icon */}
                <div className={clsx('w-12', 'h-12', 'rounded-[14px]', 'bg-gradient-to-b', 'from-[#ff5b52]', 'to-[#e8382f]', 'flex', 'items-center', 'justify-center', 'shadow-md', 'shadow-red-500/20', 'group-hover:scale-105', 'transition-transform', 'duration-300')}>
                  {feature.icon}
                </div>

                <h3 className={clsx('text-lg', 'sm:text-xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
                  {feature.title}
                </h3>

                <p className={clsx('text-xs', 'sm:text-sm', 'text-gray-500', 'leading-relaxed', 'max-w-xs')}>
                  {feature.desc}
                </p>

                <a 
                  href="#features" 
                  className={clsx('text-xs', 'font-semibold', 'text-brand-500', 'hover:text-brand-600', 'transition-colors', 'pt-1', 'flex', 'items-center')}
                >
                  Learn more &gt;
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <section id="testimonials" className={clsx('py-24', 'bg-[#fafafa]', 'border-t', 'border-gray-100')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-16', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              TESTIMONIALS
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              what our users say
            </h2>
          </div>

          {/* 4-Column Testimonial Cards Grid */}
          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-6', 'max-w-6xl', 'mx-auto')}>
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "Primary Care Physician",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
                text: "Swasthya has revolutionized how my patients track medication adherence. It is a genuine clinical asset."
              },
              {
                name: "George Harris",
                role: "Health & Wellness Coach",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
                text: "The sleep cycle calculator and hypnogram breakdown helped me improve my recovery and daily vitality."
              },
              {
                name: "Natalie Owens",
                role: "Family Caregiver",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
                text: "Managing my elderly mother's daily medications remotely is finally stress-free with the Care Circle feature."
              },
              {
                name: "David Chen",
                role: "Cardiac Patient",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
                text: "The refill forecasting alerts saved me from running out of critical blood pressure medicine twice."
              },
              {
                name: "Priya Sharma",
                role: "Working Mother",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
                text: "Tracking both my kids' and my own daily vitamins and prescriptions in one app is seamless."
              },
              {
                name: "Hannah Irving",
                role: "Fitness Enthusiast",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
                text: "The hydration logger and sleep score ring keep me accountable and energized every single day."
              },
              {
                name: "Marcus Miller",
                role: "Remote Software Engineer",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
                text: "The push dose alarms are exact and never fail. A must-have health app for anyone on a daily prescription."
              },
              {
                name: "Victoria White",
                role: "Healthcare Analyst",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
                text: "Swasthya's clean UI makes complex health schedules simple and intuitive for the whole family."
              },
              {
                name: "Charlie Davis",
                role: "Marathon Runner",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
                text: "The vitals telemetry and bedtime checklist have significantly elevated my athletic rest and recovery."
              },
              {
                name: "Anita Roy",
                role: "Nutritionist",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
                text: "I recommend Swasthya to all my clients who need structured water intake and meal schedules."
              },
              {
                name: "Patricia Quinn",
                role: "Active Senior",
                avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=120&auto=format&fit=crop&q=80",
                text: "The large, clear buttons and 1-tap dose logging make taking my daily pills completely effortless."
              },
              {
                name: "William Xavier",
                role: "Health-Tech Researcher",
                avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=120&auto=format&fit=crop&q=80",
                text: "The combination of on-device privacy, care circles, and sleep analytics sets a new gold standard."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -3 }}
                className={clsx('bg-white', 'rounded-2xl', 'p-5', 'border', 'border-gray-100/80', 'shadow-subtle', 'hover:shadow-md', 'transition-all', 'flex', 'flex-col', 'justify-between')}
              >
                <div className={clsx('flex', 'items-center', 'space-x-3', 'mb-3.5')}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={clsx('w-10', 'h-10', 'rounded-full', 'object-cover', 'ring-1', 'ring-gray-100')}
                    loading="lazy"
                  />
                  <div>
                    <h4 className={clsx('text-xs', 'font-bold', 'text-gray-900', 'leading-tight')}>{item.name}</h4>
                    <p className={clsx('text-[10px]', 'text-gray-400', 'font-medium')}>{item.role}</p>
                  </div>
                </div>
                <p className={clsx('text-xs', 'text-gray-600', 'leading-relaxed', 'font-normal')}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className={clsx('py-24', 'bg-white', 'border-t', 'border-gray-100')}>
        <div className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          
          {/* Section Header */}
          <div className={clsx('text-center', 'max-w-2xl', 'mx-auto', 'mb-16', 'space-y-3')}>
            <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
              FAQ
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
              frequently asked questions
            </h2>
          </div>

          {/* Interactive Accordion */}
          <div className={clsx('space-y-4', 'divide-y', 'divide-gray-100')}>
            {[
              {
                q: "How does Swasthya track medications and forecast refills?",
                a: "Swasthya logs your prescribed dose frequencies and dynamically calculates your remaining days of supply, triggering automatic refill alerts when stock hits critical thresholds."
              },
              {
                q: "How does the Care Circle feature work for families?",
                a: "Care Circle lets you link accounts with loved ones or caregivers. You can prescribe medications for relatives, view their daily adherence, and coordinate care in real time."
              },
              {
                q: "What sleep metrics does Swasthya analyze?",
                a: "Swasthya breaks down your sleep into Deep, REM, Core, and Awake stages, provides an aggregate Sleep Score (0–100), and calculates natural 90-minute sleep cycles for optimal rest."
              },
              {
                q: "Is my medical and personal data secure?",
                a: "Absolutely. Swasthya uses end-to-end encrypted protocols for all health metrics and personal records. Your privacy and medical confidentiality are strictly protected."
              },
              {
                q: "Can I log doses and view schedules offline?",
                a: "Yes, Swasthya supports full offline dose logging on your mobile device. Any changes automatically synchronize with the cloud once you reconnect."
              }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRE-FOOTER CTA BANNER — Tilted card rows with center radial fade */}
      {/* ========================================================================= */}
      <section className={clsx('py-12', 'sm:py-16', 'px-4', 'sm:px-6', 'lg:px-8', 'bg-white')}>
        <div
          className={clsx(
            'max-w-6xl', 'mx-auto', 'rounded-[36px]', 'sm:rounded-[44px]',
            'border', 'border-gray-200/60', 'bg-white',
            'relative', 'overflow-hidden',
            'shadow-xl', 'shadow-gray-900/[0.04]',
            'min-h-[420px]', 'sm:min-h-[480px]',
            'flex', 'flex-col', 'items-center', 'justify-end',
            'pb-12', 'sm:pb-16', 'px-6', 'sm:px-10'
          )}
        >

          {/* ── Animated tilted card rows ── */}
          <div className={clsx('absolute', 'inset-0', 'overflow-hidden', 'pointer-events-none', 'select-none')}>

            {/* Tilted wrapper — denser card grid covering more area */}
            <div
              className={clsx(
                'absolute', 'left-1/2', 'top-0',
                '-translate-x-1/2', '-translate-y-[18%]',
                'w-[220%]',
                'flex', 'flex-col', 'items-center',
                'transform', '-rotate-[22deg]',
                'gap-3', 'pt-0'
              )}
            >

              {/* Row 0 — scrolls right */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [-1800, 0] }}
                  transition={{ repeat: Infinity, duration: 36, ease: 'linear' }}
                >
                  {[
                    { name: 'Alice', tag: '@alice', gradient: 'from-fuchsia-400 to-purple-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'David', tag: '@david', gradient: 'from-cyan-400 to-blue-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Sarah', tag: '@sarah', gradient: 'from-orange-400 to-red-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Emma', tag: '@emma', gradient: 'from-teal-400 to-emerald-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Lucas', tag: '@lucas', gradient: 'from-indigo-400 to-violet-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Alice', tag: '@alice', gradient: 'from-fuchsia-400 to-purple-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'David', tag: '@david', gradient: 'from-cyan-400 to-blue-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Sarah', tag: '@sarah', gradient: 'from-orange-400 to-red-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Emma', tag: '@emma', gradient: 'from-teal-400 to-emerald-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Lucas', tag: '@lucas', gradient: 'from-indigo-400 to-violet-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Alice', tag: '@alice', gradient: 'from-fuchsia-400 to-purple-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'David', tag: '@david', gradient: 'from-cyan-400 to-blue-500', text: "I've never seen anything like this before. It's amazing." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 1 — scrolls left */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [0, -1800] }}
                  transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                >
                  {[
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-red-400 via-amber-400 to-green-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-teal-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-amber-400 to-pink-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-violet-500 to-indigo-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-red-400 via-amber-400 to-green-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-teal-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-amber-400 to-pink-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-violet-500 to-indigo-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-red-400 via-amber-400 to-green-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 — scrolls right */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [-1800, 0] }}
                  transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                >
                  {[
                    { name: 'Jill', tag: '@jill', gradient: 'from-pink-500 to-rose-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-cyan-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-amber-300 to-rose-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-lime-400 to-emerald-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-pink-500 to-rose-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-cyan-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-amber-300 to-rose-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-lime-400 to-emerald-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-pink-500 to-rose-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 3 — scrolls left */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [0, -1800] }}
                  transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
                >
                  {[
                    { name: 'Jack', tag: '@jack', gradient: 'from-lime-400 to-emerald-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-pink-400 to-amber-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-sky-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-rose-400 to-pink-600', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-teal-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-lime-400 to-emerald-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-pink-400 to-amber-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-sky-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-rose-400 to-pink-600', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'James', tag: '@james', gradient: 'from-emerald-400 to-teal-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-lime-400 to-emerald-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-pink-400 to-amber-400', text: "I'm at a loss for words. This is amazing. I love it." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 4 — scrolls right */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [-1800, 0] }}
                  transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                >
                  {[
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-sky-500 to-indigo-600', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-red-400 via-amber-400 to-green-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-pink-500 to-rose-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-sky-500 to-indigo-600', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-red-400 via-amber-400 to-green-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-pink-500 to-rose-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-violet-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'James', tag: '@james', gradient: 'from-sky-500 to-indigo-600', text: "I'm at a loss for words. This is amazing. I love it." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 5 — scrolls left */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [0, -1800] }}
                  transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
                >
                  {[
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-amber-400 to-pink-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-violet-500 to-indigo-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-sky-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-amber-300 to-rose-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-amber-400 to-pink-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Jill', tag: '@jill', gradient: 'from-violet-500 to-indigo-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Jane', tag: '@jane', gradient: 'from-sky-400 to-indigo-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jenny', tag: '@jenny', gradient: 'from-amber-300 to-rose-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'John', tag: '@john', gradient: 'from-lime-300 to-emerald-400', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Jack', tag: '@jack', gradient: 'from-amber-400 to-pink-500', text: "I've never seen anything like this before. It's amazing." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 6 — scrolls right */}
              <div className={clsx('w-full', 'overflow-visible')}>
                <motion.div
                  className={clsx('flex', 'gap-3', 'w-max')}
                  animate={{ x: [-1800, 0] }}
                  transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                >
                  {[
                    { name: 'Emma', tag: '@emma', gradient: 'from-teal-400 to-emerald-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Lucas', tag: '@lucas', gradient: 'from-indigo-400 to-violet-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Alice', tag: '@alice', gradient: 'from-fuchsia-400 to-purple-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'David', tag: '@david', gradient: 'from-cyan-400 to-blue-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Sarah', tag: '@sarah', gradient: 'from-orange-400 to-red-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Emma', tag: '@emma', gradient: 'from-teal-400 to-emerald-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Lucas', tag: '@lucas', gradient: 'from-indigo-400 to-violet-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Alice', tag: '@alice', gradient: 'from-fuchsia-400 to-purple-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'David', tag: '@david', gradient: 'from-cyan-400 to-blue-500', text: "I've never seen anything like this before. It's amazing." },
                    { name: 'Sarah', tag: '@sarah', gradient: 'from-orange-400 to-red-500', text: "I don't know what to say. I'm speechless. This is amazing." },
                    { name: 'Emma', tag: '@emma', gradient: 'from-teal-400 to-emerald-500', text: "I'm at a loss for words. This is amazing. I love it." },
                    { name: 'Lucas', tag: '@lucas', gradient: 'from-indigo-400 to-violet-500', text: "I've never seen anything like this before. It's amazing." }
                  ].map((c, i) => (
                    <div key={i} className={clsx('w-[300px]', 'shrink-0', 'rounded-[18px]', 'border', 'border-gray-100', 'bg-white', 'px-4', 'py-3', 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]', 'text-left', 'flex', 'items-start', 'gap-3')}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.gradient} shrink-0 shadow-sm mt-0.5`} />
                      <div className={clsx('min-w-0')}>
                        <p className={clsx('font-bold', 'text-[12px]', 'text-gray-900', 'leading-tight')}>{c.name} <span className={clsx('text-gray-400', 'font-normal')}>{c.tag}</span></p>
                        <p className={clsx('text-[10.5px]', 'text-gray-500', 'leading-snug', 'mt-0.5')}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>

            {/* ── Bottom blur fade — cards visible at top, fade out toward bottom ── */}
            <div
              className={clsx('absolute', 'inset-x-0', 'bottom-0', 'h-[65%]', 'pointer-events-none')}
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,1) 35%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0) 100%)',
              }}
            />

          </div>

          {/* ── Central foreground content ── */}
          <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'text-center')}>

            {/* Squircle icon badge with subtle glass shadow */}
            <div className={clsx('relative', 'mb-6')}>
              {/* Ambient glow behind badge */}
              <div className={clsx('absolute', '-inset-3', 'rounded-[30px]', 'bg-gray-200/40', 'blur-2xl')} />
              <div
                className={clsx(
                  'relative', 'w-[88px]', 'h-[88px]', 'sm:w-[100px]', 'sm:h-[100px]',
                  'rounded-[24px]', 'sm:rounded-[28px]',
                  'bg-white', 'border', 'border-gray-200/80',
                  'shadow-2xl', 'shadow-gray-900/10',
                  'flex', 'items-center', 'justify-center'
                )}
              >
                <svg className={clsx('w-11', 'h-11', 'sm:w-[52px]', 'sm:h-[52px]', 'text-gray-950')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9" />
                  <path d="m14 10 2.07 1.9c.87.8 2.18.77 3-.07v0a2.17 2.17 0 0 0 0-3.08L16.1 5.8" />
                </svg>
              </div>
            </div>

            <h2 className={clsx('text-[28px]', 'sm:text-4xl', 'md:text-[42px]', 'font-extrabold', 'text-gray-950', 'tracking-tight', 'leading-[1.15]', 'mb-3')}>
              Take control of your health today.
            </h2>

            <p className={clsx('text-sm', 'sm:text-[15px]', 'text-gray-500', 'font-normal', 'max-w-md', 'mx-auto', 'leading-relaxed', 'mb-7')}>
              Start your wellness journey with Swasthya, a comprehensive health management app designed to help you live a healthier, happier life.
            </p>

            <a
              href="#download"
              className={clsx(
                'inline-flex', 'items-center', 'gap-1.5',
                'bg-white', 'hover:bg-gray-50',
                'text-gray-950', 'font-semibold', 'text-sm',
                'px-7', 'py-2.5',
                'rounded-full', 'border', 'border-gray-200',
                'shadow-sm', 'hover:shadow',
                'active:scale-[0.97]', 'transition-all', 'duration-200'
              )}
            >
              <span>Get Started</span>
              <span className={clsx('text-xs', 'font-bold')}>&gt;</span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

// 14-Screens Interactive Gallery Component
const AppScreensGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Screens (14)' },
    { id: 'medication', label: 'Medication & Refills' },
    { id: 'sleep', label: 'Sleep & Circadian' },
    { id: 'care-circle', label: 'Care Circle' },
    { id: 'profile-alerts', label: 'Profile & Alerts' },
  ];

  const screens = [
    {
      screenType: 'home-dashboard',
      category: 'profile-alerts',
      title: 'Home Dashboard',
      subtitle: 'Medication schedule, resting heart rate, and sleep score overview.',
      tag: 'Core Hub',
    },
    {
      screenType: 'medication-schedule',
      category: 'medication',
      title: 'Medication Regimen',
      subtitle: 'Daily dose timeline with adherence percentage and status tags.',
      tag: 'Medication',
    },
    {
      screenType: 'medication-history',
      category: 'medication',
      title: 'Medication History',
      subtitle: '30-day adherence calendar, taken/missed statistics, and logs.',
      tag: 'Adherence',
    },
    {
      screenType: 'refill-alerts',
      category: 'medication',
      title: 'Refill Alerts',
      subtitle: 'Stock depletion forecasts and 1-tap quick refill actions (+15, +30, +60).',
      tag: 'Smart Refills',
    },
    {
      screenType: 'add-medication',
      category: 'medication',
      title: 'Add Medication Form',
      subtitle: 'Configure dosage forms, tablet strength, quantity, and course duration.',
      tag: 'Prescriptions',
    },
    {
      screenType: 'add-medication-datepicker',
      category: 'medication',
      title: 'Interactive Date Picker',
      subtitle: 'Intuitive date wheel selection for precise prescription schedules.',
      tag: 'Schedule',
    },
    {
      screenType: 'sleep-routine-details',
      category: 'sleep',
      title: 'Sleep Routine & Hypnogram',
      subtitle: '88% optimal rest score with Deep, REM, Core stage hypnogram.',
      tag: 'Hypnogram',
    },
    {
      screenType: 'sleep-schedule-calculator',
      category: 'sleep',
      title: '90-Min Cycle Calculator',
      subtitle: 'Target restorative cycles with interactive bedtime & wake dials.',
      tag: 'Circadian',
    },
    {
      screenType: 'care-circle-medications',
      category: 'care-circle',
      title: 'Care Circle Prescriptions',
      subtitle: 'Prescribe and monitor medications for family members and dependents.',
      tag: 'Family Care',
    },
    {
      screenType: 'care-circle-connections',
      category: 'care-circle',
      title: 'Support Circle Network',
      subtitle: 'Connected family members, emergency contacts, and physician portal.',
      tag: 'Connections',
    },
    {
      screenType: 'care-circle-invitations',
      category: 'care-circle',
      title: 'Circle Invitations & Privacy',
      subtitle: 'Manage sent and received caregiving invitations with access control.',
      tag: 'Privacy',
    },
    {
      screenType: 'notifications-alerts',
      category: 'profile-alerts',
      title: 'Notification Center',
      subtitle: 'Consolidated alerts for prescription refills, hydration, and bedtime.',
      tag: 'Alerts Hub',
    },
    {
      screenType: 'user-profile-biometrics',
      category: 'profile-alerts',
      title: 'Profile & Health Biometrics',
      subtitle: 'Weight, height, dietary focus, user ID, and contact telemetry.',
      tag: 'Biometrics',
    },
    {
      screenType: 'notification-permission',
      category: 'profile-alerts',
      title: 'Push Dose Alarms',
      subtitle: 'High-priority notification prompt ensuring critical doses are never missed.',
      tag: 'System',
    },
  ];

  const filteredScreens = activeCategory === 'all' 
    ? screens 
    : screens.filter(s => s.category === activeCategory);

  return (
    <section id="gallery" className={clsx('py-24', 'bg-white', 'border-t', 'border-gray-100')}>
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        
        {/* Header */}
        <div className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-12', 'space-y-3')}>
          <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'sm:text-sm', 'tracking-[0.2em]', 'uppercase')}>
            APP SHOWCASE
          </span>
          <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
            explore all 14 app screens
          </h2>
          <p className={clsx('text-gray-500', 'text-base', 'sm:text-lg', 'max-w-xl', 'mx-auto', 'font-normal')}>
            Take an interactive tour of every screen inside Swasthya on iOS — crafted with precision for you and your family.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={clsx('flex', 'items-center', 'justify-center', 'flex-wrap', 'gap-2', 'mb-14')}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'bg-gray-100 hover:bg-gray-200/80 text-gray-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Screens Grid */}
        <motion.div 
          layout
          className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-8', 'justify-items-center')}
        >
          <AnimatePresence>
            {filteredScreens.map((screen) => (
              <motion.div
                key={screen.screenType}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={clsx('flex', 'flex-col', 'items-center', 'group', 'max-w-[270px]')}
              >
                <div className={clsx('transform', 'group-hover:-translate-y-2', 'transition-transform', 'duration-300')}>
                  <IPhoneMockup 
                    screenType={screen.screenType} 
                    alt={screen.title} 
                    width={250}
                    height={535}
                  />
                </div>

                <div className={clsx('text-center', 'mt-5', 'space-y-1', 'w-full')}>
                  <div className={clsx('flex', 'items-center', 'justify-center', 'gap-1.5', 'mb-1')}>
                    <span className={clsx('bg-brand-50', 'text-brand-600', 'text-[10px]', 'font-bold', 'px-2', 'py-0.5', 'rounded-full')}>
                      {screen.tag}
                    </span>
                  </div>
                  <h4 className={clsx('font-bold', 'text-sm', 'text-gray-900', 'leading-tight')}>
                    {screen.title}
                  </h4>
                  <p className={clsx('text-[11px]', 'text-gray-500', 'leading-snug')}>
                    {screen.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx('w-full', 'py-3', 'flex', 'items-center', 'justify-between', 'text-left', 'group', 'focus:outline-none')}
      >
        <span className={clsx('text-base', 'sm:text-lg', 'font-semibold', 'text-gray-900', 'group-hover:text-brand-500', 'transition-colors')}>
          {question}
        </span>
        <span className={`ml-4 text-gray-400 group-hover:text-brand-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ArrowDown01Icon size={18} />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className={clsx('text-sm', 'text-gray-500', 'pb-4', 'leading-relaxed')} >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeScreen;



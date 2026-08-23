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
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-600 relative overflow-x-hidden">
      
      {/* Replay Intro Button (floating trigger for quick testing) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleReplay}
          className="flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg border border-gray-200 backdrop-blur-md hover:shadow-xl hover:text-brand-500 transition-all group"
          title="Replay center-to-hero opening animation"
        >
          <RefreshIcon size={16} className="group-hover:rotate-180 transition-transform duration-500" />
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pointer-events-none flex items-center justify-center"
          />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Animated Flying Logo Anchor */}
        <div className="relative mb-6 flex flex-col items-center justify-center min-h-[110px]">
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
              className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative flex flex-col items-center">
                {/* Glow ring behind logo */}
                <div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-2xl animate-pulse" />
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
              className="pointer-events-none flex flex-col items-center"
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
              className="flex flex-col items-center"
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
          className="max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
            Smart scheduling powered by AI.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed">
            Swasthya transforms your health and schedule tracking into instant actionable insights. 
            Perfect for organizing your day, monitoring wellness, and reaching peak performance on-the-go.
          </p>
        </motion.div>

        {/* App Store Download Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 mb-16"
          id="download"
        >
          <AppStoreBadge />
        </motion.div>

        {/* ========================================================================= */}
        {/* 5-DEVICE SHOWCASE STRIP (From Image 1 & Image 3) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative pt-4 overflow-hidden"
        >
          {/* Subtle gradient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-red-100/40 via-amber-50/50 to-blue-100/40 blur-3xl -z-10 rounded-full pointer-events-none" />

          {/* Horizontal scroll container with 5 realistic iPhones */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto pb-12 pt-4 px-4 scrollbar-none">
            
            {/* Phone 1: Day View */}
            <div className="shrink-0 transform transition-transform hover:-translate-y-2 duration-300">
              <IPhoneMockup screenType="day-schedule" />
            </div>

            {/* Phone 2: Month Grid View */}
            <div className="shrink-0 transform transition-transform hover:-translate-y-2 duration-300">
              <IPhoneMockup screenType="month-view" />
            </div>

            {/* Phone 3: What's New Feature Sheet (Elevated Center) */}
            <div className="shrink-0 transform transition-transform hover:-translate-y-3 duration-300">
              <IPhoneMockup screenType="whats-new" elevated={true} />
            </div>

            {/* Phone 4: Location Permission Dialog */}
            <div className="shrink-0 transform transition-transform hover:-translate-y-2 duration-300">
              <IPhoneMockup screenType="permission-location" />
            </div>

            {/* Phone 5: Notification Permission Dialog */}
            <div className="shrink-0 transform transition-transform hover:-translate-y-2 duration-300">
              <IPhoneMockup screenType="permission-notification" />
            </div>

          </div>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* EXPERIENCE SECTION (Image 2: an app unlike any other) */}
      {/* ========================================================================= */}
      <section id="experience" className="py-24 bg-[#fafafa] border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              an app unlike any other
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Designed with Apple precision and AI depth to make daily routines, appointments, and vitals effortlessly clear.
            </p>
          </div>

          {/* 3 Staggered / Perspective iPhone Showcase */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Left Phone: New Event & iOS Keyboard */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center shrink-0 transform lg:translate-y-6 hover:translate-y-0 transition-all duration-300 bg-white/70 lg:bg-transparent p-4 lg:p-0 rounded-3xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none"
            >
              <IPhoneMockup screenType="new-event" />
              <div className="text-center mt-5">
                <span className="font-bold text-sm text-gray-900 block">Smart Fast Logging</span>
                <p className="text-xs text-gray-500 mt-0.5">Natural speech & event inputs in seconds</p>
              </div>
            </motion.div>

            {/* Center Phone: Routine & Event Details (Elevated) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-center shrink-0 transform lg:-translate-y-4 hover:-translate-y-6 transition-all duration-300 bg-white/70 lg:bg-transparent p-4 lg:p-0 rounded-3xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none"
            >
              <IPhoneMockup screenType="event-details" elevated={true} />
              <div className="text-center mt-5">
                <span className="font-bold text-sm text-brand-600 block">Daily Routines & Vitals</span>
                <p className="text-xs text-gray-500 mt-0.5">Context-aware habits and reminders</p>
              </div>
            </motion.div>

            {/* Right Phone: Telehealth & FaceTime Consultation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center shrink-0 transform lg:translate-y-6 hover:translate-y-0 transition-all duration-300 bg-white/70 lg:bg-transparent p-4 lg:p-0 rounded-3xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none"
            >
              <IPhoneMockup screenType="facetime-details" />
              <div className="text-center mt-5">
                <span className="font-bold text-sm text-gray-900 block">1-Tap Consultations</span>
                <p className="text-xs text-gray-500 mt-0.5">Instant video calls & health sync</p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* POWERFUL FEATURES SECTION (From User Reference Images) */}
      {/* ========================================================================= */}
      <section id="features" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              powerful features
            </h2>
          </div>

          {/* Feature 1: AI-Powered Scheduling (Phone Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-5xl mx-auto mb-28 lg:mb-36">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <IPhoneMockup screenType="month-view" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                AI-Powered<br />Scheduling
              </h3>
              <p className="text-base sm:text-lg text-gray-500 font-normal max-w-md mx-auto lg:mx-0 leading-relaxed">
                Intelligent scheduling that learns your preferences and optimizes your time.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm px-7 py-3 rounded-full shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-95 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Smart Time Blocking (Text Left, Phone Right) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-5xl mx-auto mb-28 lg:mb-36">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Smart Time<br />Blocking
              </h3>
              <p className="text-base sm:text-lg text-gray-500 font-normal max-w-md mx-auto lg:mx-0 leading-relaxed">
                Automatically block time for focused work and personal activities.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm px-7 py-3 rounded-full shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-95 transition-all duration-200"
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
              className="w-full lg:w-1/2 flex justify-center"
            >
              <IPhoneMockup screenType="whats-new" />
            </motion.div>
          </div>

          {/* Feature 3: Predictive Event Planning (Phone Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <IPhoneMockup screenType="permission-location" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Predictive<br />Event Planning
              </h3>
              <p className="text-base sm:text-lg text-gray-500 font-normal max-w-md mx-auto lg:mx-0 leading-relaxed">
                AI suggests optimal times for meetings and events based on your habits.
              </p>
              <div className="pt-2">
                <a
                  href="#download"
                  className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm px-7 py-3 rounded-full shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-95 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* BENEFITS BENTO GRID SECTION (From User Reference Images) */}
      {/* ========================================================================= */}
      <section id="benefits" className="py-24 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              BENEFITS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              it does a lot of things
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Bento Card 1: AI-Powered Scheduling (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f2f2f4] rounded-[36px] pt-10 px-8 sm:px-12 border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="max-w-2xl mx-auto space-y-2 mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  AI-Powered Scheduling
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  Our app uses advanced AI to optimize your calendar, suggesting the best times for meetings and tasks based on your preferences and habits.
                </p>
              </div>

              {/* iPhone Mockup emerging from bottom */}
              <div className="w-full flex justify-center h-[320px] sm:h-[380px] overflow-hidden relative">
                <div className="transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                  <IPhoneMockup screenType="day-schedule" />
                </div>
              </div>
            </motion.div>

            {/* Bento Cards 2 & 3: 2-Column Grid (Smart Time Blocking & Intelligent Reminders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Column Card: Smart Time Blocking */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#f2f2f4] rounded-[36px] pt-10 px-8 border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                    Smart Time Blocking
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    Automatically block out time for focused work, breaks, and personal activities to maintain a balanced and productive schedule.
                  </p>
                </div>

                {/* iPhone Mockup emerging from bottom */}
                <div className="w-full flex justify-center h-[300px] sm:h-[350px] overflow-hidden relative">
                  <div className="transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                    <IPhoneMockup screenType="month-view" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column Card: Intelligent Reminders */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f2f2f4] rounded-[36px] pt-10 px-8 border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                    Intelligent Reminders
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    Receive context-aware notifications that adapt to your schedule, ensuring you never miss important events or deadlines.
                  </p>
                </div>

                {/* iPhone Mockup emerging from bottom */}
                <div className="w-full flex justify-center h-[300px] sm:h-[350px] overflow-hidden relative">
                  <div className="transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                    <IPhoneMockup screenType="whats-new" />
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bento Card 4: Team Collaboration (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#f2f2f4] rounded-[36px] pt-10 px-8 sm:px-12 border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="max-w-2xl mx-auto space-y-2 mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Team Collaboration
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  Effortlessly coordinate schedules with team members and clients, finding optimal meeting times across different time zones.
                </p>
              </div>

              {/* iPhone Mockup emerging from bottom */}
              <div className="w-full flex justify-center h-[320px] sm:h-[380px] overflow-hidden relative">
                <div className="transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                  <IPhoneMockup screenType="day-schedule" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6-GRID FEATURES SECTION (From User Reference Image 1) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              powerful features
            </h2>
          </div>

          {/* 6-Grid Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <AiBrain01Icon size={22} className="text-white" />,
                title: "AI-Powered Scheduling",
                desc: "Intelligent scheduling that learns your preferences and optimizes your time."
              },
              {
                icon: <Clock01Icon size={22} className="text-white" />,
                title: "Smart Time Blocking",
                desc: "Automatically block time for focused work and personal activities."
              },
              {
                icon: <Calendar03Icon size={22} className="text-white" />,
                title: "Predictive Event Planning",
                desc: "AI suggests optimal times for meetings and events based on your habits."
              },
              {
                icon: <CloudIcon size={22} className="text-white" />,
                title: "Cloud Sync",
                desc: "Access your schedule across all devices in real-time."
              },
              {
                icon: <UserMultiple02Icon size={22} className="text-white" />,
                title: "Team Collaboration",
                desc: "Easily coordinate schedules with team members and clients."
              },
              {
                icon: <Notification01Icon size={22} className="text-white" />,
                title: "Smart Reminders",
                desc: "Contextual notifications that adapt to your schedule and priorities."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center space-y-3.5 group"
              >
                {/* Red Squircle Icon */}
                <div className="w-12 h-12 rounded-[14px] bg-gradient-to-b from-[#ff5b52] to-[#e8382f] flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                  {feature.desc}
                </p>

                <a 
                  href="#features" 
                  className="text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors pt-1 flex items-center"
                >
                  Learn more &gt;
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* TESTIMONIALS SECTION (From User Reference Image 3) */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-24 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              what our users say
            </h2>
          </div>

          {/* 4-Column Testimonial Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Alice Johnson",
                role: "Freelance Designer",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
                text: "Cal AI has revolutionized how I manage my time. It's like having a personal assistant."
              },
              {
                name: "George Harris",
                role: "Productivity Coach",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
                text: "The AI-driven insights have helped me optimize my daily routines significantly."
              },
              {
                name: "Natalie Owens",
                role: "Personal Trainer",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
                text: "Cal AI's habit tracking feature has helped me build better routines."
              },
              {
                name: "Ulysses Vaughn",
                role: "Executive Assistant",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
                text: "The AI-powered meeting summarizer has saved me hours of note-taking."
              },
              {
                name: "Bob Brown",
                role: "Project Manager, Tech Innovations",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
                text: "The AI-powered scheduling has significantly reduced conflicts in our team's calendar."
              },
              {
                name: "Hannah Irving",
                role: "Digital Nomad",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
                text: "Cal AI's integration with my other tools has created a seamless workflow."
              },
              {
                name: "Oscar Parker",
                role: "Remote Worker",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
                text: "The AI suggestions for breaks have improved my work-from-home productivity."
              },
              {
                name: "Victoria White",
                role: "Business Analyst",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
                text: "Cal AI's personalized productivity insights have been eye-opening."
              },
              {
                name: "Charlie Davis",
                role: "Entrepreneur",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
                text: "The smart time blocking feature has helped me maintain better focus and energy."
              },
              {
                name: "Ian Johnson",
                role: "Sales Executive",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
                text: "The smart reminders have drastically reduced my missed follow-ups."
              },
              {
                name: "Patricia Quinn",
                role: "Tech Enthusiast",
                avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=120&auto=format&fit=crop&q=80",
                text: "Cal AI's integration with my smart home devices has streamlined my daily flow."
              },
              {
                name: "William Xavier",
                role: "Startup Founder",
                avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=120&auto=format&fit=crop&q=80",
                text: "The AI-suggested networking opportunities have expanded my horizons."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-subtle hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3 mb-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-100"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FAQ SECTION (From User Reference Image 2) */}
      {/* ========================================================================= */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              frequently asked questions
            </h2>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-4 divide-y divide-gray-100">
            {[
              {
                q: "How does AI improve my scheduling?",
                a: "Cal AI learns your work habits, peak focus hours, and meeting preferences over time to automatically suggest optimal slots, prevent burnout, and avoid conflicting appointments."
              },
              {
                q: "Can I integrate Cal AI with other apps?",
                a: "Yes! Cal AI integrates seamlessly with Apple Calendar, Google Calendar, Outlook, Apple HealthKit, FaceTime, Zoom, and Siri Shortcuts for smooth workflow automation."
              },
              {
                q: "How does the team collaboration feature work?",
                a: "Team collaboration allows members to share availability, coordinate multi-attendee meetings across time zones in 1 tap, and respect individual buffer times automatically."
              },
              {
                q: "Is my data secure with Cal AI?",
                a: "Absolutely. Your data is encrypted end-to-end both in transit and at rest with strict zero-knowledge architecture. We never sell your personal information or calendar data."
              },
              {
                q: "Can I use Cal AI offline?",
                a: "Yes, Cal AI provides full offline support on your iOS device. Any events, habits, or schedule changes will automatically synchronize the moment you reconnect."
              }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRE-FOOTER CTA BANNER SECTION (From User Reference Screenshot) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto rounded-[36px] sm:rounded-[44px] border border-blue-100/80 bg-white relative overflow-hidden shadow-lg shadow-blue-500/5 py-14 sm:py-20 px-6 sm:px-12 text-center">
          
          {/* Tilted Feedback Speech Bubbles Background Mosaic */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 select-none">
            <div className="absolute -inset-10 flex flex-col justify-center items-center transform -rotate-12 space-y-4 scale-110">
              
              {/* Row 1 */}
              <div className="flex space-x-4">
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">Jane <span className="text-gray-400 font-normal">@jane</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I'm at a loss for words. This is amazing. I love it.</p>
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-lime-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">John <span className="text-gray-400 font-normal">@john</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I don't know what to say. I'm speechless. This is amazing.</p>
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">Jenny <span className="text-gray-400 font-normal">@jenny</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I'm at a loss for words. This is amazing. I love it.</p>
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">Jack <span className="text-gray-400 font-normal">@jack</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I've never seen anything like this before. It's amazing.</p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex space-x-4">
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">Jill <span className="text-gray-400 font-normal">@jill</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I don't know what to say. I'm speechless. I love it.</p>
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">James <span className="text-gray-400 font-normal">@james</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">I'm at a loss for words. This is amazing. I love it.</p>
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-start space-x-3 w-64 text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 shrink-0" />
                  <div>
                    <span className="font-bold text-[11px] text-gray-800 block leading-tight">Alice <span className="text-gray-400 font-normal">@alice</span></span>
                    <p className="text-[9px] text-gray-500 mt-1 line-clamp-2">Revolutionized how I manage my time. A must have.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Soft Radial Center Mask so text pops */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-white/90" />
          </div>

          {/* Central Content */}
          <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto space-y-4">
            
            {/* White Squircle Handshake / Heart Logo Badge */}
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 shadow-md flex items-center justify-center mb-2">
              <svg className="w-9 h-9 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9" />
                <path d="m14 10 2.07 1.9c.87.8 2.18.77 3-.07v0a2.17 2.17 0 0 0 0-3.08L16.1 5.8" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Stop wasting time on design.
            </h2>

            <p className="text-sm sm:text-base text-gray-500 font-normal">
              Start your 7-day free trial. No credit card required.
            </p>

            <div className="pt-2">
              <a
                href="#download"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full border border-gray-200 shadow-sm hover:shadow active:scale-95 transition-all duration-200"
              >
                <span>Get Started</span>
                <span className="text-xs">&gt;</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
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
            <p className="text-sm text-gray-500 pb-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeScreen;


import React from 'react';
import { IonIcon } from '@ionic/react';
import { 
  fitness, 
  nutrition, 
  heart, 
  time, 
  analytics, 
  notifications, 
  trophy, 
  sparklesOutline,
  checkmarkCircle
} from 'ionicons/icons';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '../Components/AppLogo';
import { IPhoneMockup } from '../Components/IPhoneMockup';

const Features = () => {
  const features = [
    {
      icon: fitness,
      title: "Physical Activity Tracking",
      description: "Monitor your daily activities, workouts, and exercise routines with detailed analytics and progress tracking.",
      details: [
        "Step counting and distance tracking",
        "Workout session recording",
        "Exercise library with instructions",
        "Calorie burn calculation"
      ]
    },
    {
      icon: nutrition,
      title: "Dietary Management",
      description: "Track your nutrition, meal plans, and water intake to maintain a balanced diet with ease.",
      details: [
        "Meal planning and tracking",
        "Nutritional information database",
        "Water intake monitoring",
        "Dietary goal setting"
      ]
    },
    {
      icon: heart,
      title: "Mental Health & Wellness",
      description: "Monitor your mental well-being with mood tracking, journaling, and guided mindfulness exercises.",
      details: [
        "Mood tracking and journaling",
        "Meditation and breathing exercises",
        "Stress level monitoring",
        "Sleep quality analysis"
      ]
    },
    {
      icon: analytics,
      title: "Comprehensive Analytics",
      description: "Get detailed insights into your health metrics with easy-to-understand Apple-grade visualizations.",
      details: [
        "Progress charts and graphs",
        "Health trend analysis",
        "Personalized recommendations",
        "Goal achievement tracking"
      ]
    },
    {
      icon: notifications,
      title: "Smart Reminders",
      description: "Stay on track with your health goals through timely notifications and proactive reminders.",
      details: [
        "Customizable reminders",
        "Medication tracking",
        "Appointment scheduling",
        "Goal milestone alerts"
      ]
    },
    {
      icon: trophy,
      title: "Achievement System",
      description: "Stay motivated with our gamified achievement system, streaks, and milestone badges.",
      details: [
        "Daily and weekly challenges",
        "Achievement badges",
        "Progress milestones",
        "Community competitions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="text-brand-500 font-bold text-xs tracking-widest uppercase">
            POWERFUL CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Designed for every facet of your well-being.
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the intelligent features designed to make daily health logging intuitive and insightful.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#fafafa] rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-500 shadow-sm mb-6">
                <IonIcon icon={feature.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-2.5">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-xs font-medium text-gray-600">
                    <IonIcon icon={checkmarkCircle} className="text-brand-500 text-sm mr-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interactive Feature Demo */}
        <div className="bg-[#fafafa] rounded-3xl p-8 md:p-14 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-lg space-y-5 text-center lg:text-left">
            <span className="text-brand-500 font-bold text-xs tracking-widest uppercase">
              APPLE HEALTH INTEGRATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Synchronized seamlessly with your iOS devices.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Swasthya reads and correlates data directly with Apple HealthKit, Siri Shortcuts, and interactive iOS widgets so you never miss a beat.
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <AppStoreBadge />
            </div>
          </div>

          <div className="shrink-0">
            <IPhoneMockup screenType="whats-new" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
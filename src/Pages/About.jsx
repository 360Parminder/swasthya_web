import React from 'react';
import { 
  UserGroupIcon, 
  Award01Icon, 
  Globe02Icon, 
  FavouriteIcon, 
  CheckmarkCircle02Icon 
} from 'hugeicons-react';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '../Components/AppLogo';

const About = () => {
  const stats = [
    { number: "1M+", label: "Active Users", icon: <UserGroupIcon size={24} /> },
    { number: "50+", label: "Countries Supported", icon: <Globe02Icon size={24} /> },
    { number: "99.4%", label: "User Satisfaction", icon: <FavouriteIcon size={24} /> },
    { number: "24/7", label: "Proactive AI Guidance", icon: <Award01Icon size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="text-brand-500 font-bold text-xs tracking-widest uppercase">
            OUR PURPOSE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Empowering healthier lives through intelligent design.
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We build tools that seamlessly turn complex health metrics into simple, delightful daily actions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#fafafa] rounded-3xl p-8 text-center border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-500 shadow-sm mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-[#fafafa] rounded-3xl p-8 md:p-14 border border-gray-100 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-brand-500 font-bold text-xs tracking-widest uppercase">
                THE SWASTHYA VISION
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Health tracking that respects your time.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most health applications are cluttered and tedious to update. At Swasthya, we believe personal well-being should feel as smooth and natural as glancing at your calendar.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We blend Apple-quality craftsmanship, state-of-the-art AI parsing, and clinical data models to give you real peace of mind.
              </p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Our Core Values</h3>
              {[
                { title: "User-Centric Privacy", desc: "Your health records are end-to-end encrypted and on-device first." },
                { title: "Clarity Over Noise", desc: "No confusing medical jargon—only actionable insights." },
                { title: "Seamless Integration", desc: "Works flawlessly with Apple Health, Siri, and widgets." }
              ].map((val, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckmarkCircle02Icon size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-gray-900">{val.title}</h4>
                    <p className="text-xs text-gray-400">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Be part of the next era of health.
          </h2>
          <div className="flex justify-center">
            <AppStoreBadge />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
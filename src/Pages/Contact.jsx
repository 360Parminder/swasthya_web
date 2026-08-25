import React, { useState } from 'react';
import { 
  Mail01Icon, 
  Call02Icon, 
  Location01Icon, 
  Clock01Icon, 
  CheckmarkCircle02Icon 
} from 'hugeicons-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={clsx('min-h-screen', 'bg-white', 'pt-28', 'pb-20')}>
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-6')}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx('text-center', 'max-w-3xl', 'mx-auto', 'mb-16', 'space-y-4')}
        >
          <span className={clsx('text-brand-500', 'font-bold', 'text-xs', 'tracking-widest', 'uppercase')}>
            WE ARE HERE FOR YOU
          </span>
          <h1 className={clsx('text-4xl', 'sm:text-5xl', 'font-extrabold', 'text-gray-900', 'tracking-tight')}>
            Get in touch with our team.
          </h1>
          <p className={clsx('text-lg', 'text-gray-500', 'max-w-2xl', 'mx-auto')}>
            Have questions, feedback, or need early clinical access? Send us a message and we'll reply shortly.
          </p>
        </motion.div>

        <div className={clsx('grid', 'md:grid-cols-2', 'gap-12', 'max-w-5xl', 'mx-auto')}>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className={clsx('bg-[#fafafa]', 'rounded-3xl', 'p-8', 'border', 'border-gray-100', 'space-y-6')}>
              <h2 className={clsx('text-xl', 'font-bold', 'text-gray-900')}>Direct Channels</h2>
              
              <div className="space-y-5">
                <div className={clsx('flex', 'items-start', 'space-x-4')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-xl', 'bg-white', 'border', 'border-gray-100', 'flex', 'items-center', 'justify-center', 'text-brand-500', 'shadow-sm', 'shrink-0')}>
                    <Mail01Icon size={20} />
                  </div>
                  <div>
                    <h3 className={clsx('text-xs', 'font-semibold', 'text-gray-400', 'uppercase')}>Email Support</h3>
                    <p className={clsx('text-sm', 'font-semibold', 'text-gray-800')}>360.parminder@gmail.com</p>
                  </div>
                </div>

                <div className={clsx('flex', 'items-start', 'space-x-4')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-xl', 'bg-white', 'border', 'border-gray-100', 'flex', 'items-center', 'justify-center', 'text-brand-500', 'shadow-sm', 'shrink-0')}>
                    <Call02Icon size={20} />
                  </div>
                  <div>
                    <h3 className={clsx('text-xs', 'font-semibold', 'text-gray-400', 'uppercase')}>Direct Phone</h3>
                    <p className={clsx('text-sm', 'font-semibold', 'text-gray-800')}>+91 9461486865</p>
                  </div>
                </div>

                <div className={clsx('flex', 'items-start', 'space-x-4')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-xl', 'bg-white', 'border', 'border-gray-100', 'flex', 'items-center', 'justify-center', 'text-brand-500', 'shadow-sm', 'shrink-0')}>
                    <Location01Icon size={20} />
                  </div>
                  <div>
                    <h3 className={clsx('text-xs', 'font-semibold', 'text-gray-400', 'uppercase')}>Location</h3>
                    <p className={clsx('text-sm', 'font-semibold', 'text-gray-800')}>Alwar, Rajasthan, India</p>
                  </div>
                </div>

                <div className={clsx('flex', 'items-start', 'space-x-4')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-xl', 'bg-white', 'border', 'border-gray-100', 'flex', 'items-center', 'justify-center', 'text-brand-500', 'shadow-sm', 'shrink-0')}>
                    <Clock01Icon size={20} />
                  </div>
                  <div>
                    <h3 className={clsx('text-xs', 'font-semibold', 'text-gray-400', 'uppercase')}>Response Hours</h3>
                    <p className={clsx('text-sm', 'font-semibold', 'text-gray-800')}>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Card */}
            <div className={clsx('bg-[#fafafa]', 'rounded-3xl', 'p-6', 'border', 'border-gray-100', 'space-y-3')}>
              <h3 className={clsx('text-xs', 'font-bold', 'text-gray-900', 'uppercase', 'tracking-wide')}>Quick FAQ</h3>
              <p className={clsx('text-xs', 'text-gray-500', 'leading-relaxed')}>
                When will the app be released? We are preparing our public iOS App Store launch soon. Join the early-access list to be notified on day one!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={clsx('bg-[#fafafa]', 'rounded-3xl', 'p-8', 'border', 'border-gray-100')}>
            {submitted ? (
              <div className={clsx('h-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'py-12', 'space-y-4')}>
                <div className={clsx('w-14', 'h-14', 'rounded-full', 'bg-emerald-50', 'text-emerald-600', 'flex', 'items-center', 'justify-center', 'text-3xl')}>
                  <CheckmarkCircle02Icon size={32} />
                </div>
                <h3 className={clsx('text-xl', 'font-bold', 'text-gray-900')}>Message Received!</h3>
                <p className={clsx('text-sm', 'text-gray-500', 'max-w-xs')}>
                  Thank you for reaching out. We will get back to your email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={clsx('mt-4', 'text-xs', 'font-semibold', 'text-brand-500', 'hover:underline')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <h2 className={clsx('text-xl', 'font-bold', 'text-gray-900', 'mb-6')}>Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className={clsx('block', 'text-xs', 'font-semibold', 'text-gray-700', 'mb-1.5')}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={clsx('w-full', 'px-4', 'py-2.5', 'rounded-xl', 'bg-white', 'text-gray-900', 'border', 'border-gray-200', 'focus:border-brand-500', 'focus:ring-2', 'focus:ring-brand-500/20', 'focus:outline-none', 'text-sm', 'transition-all')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={clsx('block', 'text-xs', 'font-semibold', 'text-gray-700', 'mb-1.5')}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={clsx('w-full', 'px-4', 'py-2.5', 'rounded-xl', 'bg-white', 'text-gray-900', 'border', 'border-gray-200', 'focus:border-brand-500', 'focus:ring-2', 'focus:ring-brand-500/20', 'focus:outline-none', 'text-sm', 'transition-all')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={clsx('block', 'text-xs', 'font-semibold', 'text-gray-700', 'mb-1.5')}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="General Inquiry / Beta Access"
                      className={clsx('w-full', 'px-4', 'py-2.5', 'rounded-xl', 'bg-white', 'text-gray-900', 'border', 'border-gray-200', 'focus:border-brand-500', 'focus:ring-2', 'focus:ring-brand-500/20', 'focus:outline-none', 'text-sm', 'transition-all')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={clsx('block', 'text-xs', 'font-semibold', 'text-gray-700', 'mb-1.5')}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="How can we help you?"
                      className={clsx('w-full', 'px-4', 'py-2.5', 'rounded-xl', 'bg-white', 'text-gray-900', 'border', 'border-gray-200', 'focus:border-brand-500', 'focus:ring-2', 'focus:ring-brand-500/20', 'focus:outline-none', 'text-sm', 'transition-all')}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={clsx('w-full', 'bg-brand-500', 'hover:bg-brand-600', 'text-white', 'font-semibold', 'py-3', 'px-6', 'rounded-xl', 'shadow-md', 'shadow-brand-500/25', 'active:scale-95', 'transition-all', 'duration-200', 'text-sm')}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline, callOutline, locationOutline, timeOutline } from 'ionicons/icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-800 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <IonIcon icon={mailOutline} className="text-2xl text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold">Email</h3>
                                        <p className="text-gray-300">360.parminder@gmail.com</p>
                                        {/* <p className="text-gray-300">info@swasthya.com</p> */}
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <IonIcon icon={callOutline} className="text-2xl text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold">Phone</h3>
                                        <p className="text-gray-300">+91 8779112732</p>
                                        {/* <p className="text-gray-300">+1 (555) 987-6543</p> */}
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <IonIcon icon={locationOutline} className="text-2xl text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold">Address</h3>
                                        <p className="text-gray-300">Alwar, Rajasthan</p>
                                        <p className="text-gray-300">India</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <IonIcon icon={timeOutline} className="text-2xl text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold">Business Hours</h3>
                                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-gray-800 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="border-b border-gray-700 pb-4">
                                    <h3 className="text-white font-semibold mb-2">How do I get started?</h3>
                                    <p className="text-gray-300">Simply download our app from the App Store or Google Play Store and create an account to begin your health journey.</p>
                                </div>
                                <div className="border-b border-gray-700 pb-4">
                                    <h3 className="text-white font-semibold mb-2">Is my data secure?</h3>
                                    <p className="text-gray-300">Yes, we take data security seriously. All your health data is encrypted and stored securely.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Do you offer customer support?</h3>
                                    <p className="text-gray-300">Yes, our customer support team is available 24/7 to assist you with any questions or concerns.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 
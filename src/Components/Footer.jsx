import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoApple, logoGooglePlaystore, logoFacebook, logoTwitter, logoInstagram, mailOutline, callOutline, locationOutline, moonOutline, sunnyOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useTheme } from '../Utils/ThemeContext';

const Footer = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Swasthya</h3>
                        <p className="text-sm">Your personal health companion for a better lifestyle. Track, monitor, and improve your well-being with our comprehensive health monitoring app.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <IonIcon icon={logoFacebook} className="text-2xl" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <IonIcon icon={logoTwitter} className="text-2xl" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <IonIcon icon={logoInstagram} className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to={'/features'} className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link to={'/about'} className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to={'/contact'}  className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to={''} className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to={''} className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <IonIcon icon={mailOutline} className="text-xl" />
                                <span>360.parminder@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <IonIcon icon={callOutline} className="text-xl" />
                                <span>+91 8779112732</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <IonIcon icon={locationOutline} className="text-xl" />
                                <span>Alwar, Rajasthan, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Download App</h4>
                        <p className="text-sm">Get our app for a better health monitoring experience.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <IonIcon icon={logoApple} className="text-3xl" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <IonIcon icon={logoGooglePlaystore} className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <div className="flex justify-center items-center space-x-4">
                        <p>&copy; {new Date().getFullYear()} Swasthya. All rights reserved.</p>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <IonIcon icon={sunnyOutline} className="text-xl text-yellow-400" />
                            ) : (
                                <IonIcon icon={moonOutline} className="text-xl text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
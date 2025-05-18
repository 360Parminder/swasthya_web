import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoApple, logoGooglePlaystore, logoFacebook, logoTwitter, logoInstagram, mailOutline, callOutline, locationOutline } from 'ionicons/icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
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
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
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
                    <p>&copy; {new Date().getFullYear()} Swasthya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
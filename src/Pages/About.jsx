import React from 'react';
import { IonIcon } from '@ionic/react';
import { people, trophy, globe, heart } from 'ionicons/icons';

const About = () => {
    const stats = [
        { number: "1M+", label: "Active Users", icon: people },
        { number: "50+", label: "Countries", icon: globe },
        { number: "95%", label: "User Satisfaction", icon: heart },
        { number: "24/7", label: "Support", icon: trophy }
    ];

    const team = [
        {
            name: "Dr. Sarah Johnson",
            role: "Chief Medical Officer",
            description: "20+ years of experience in preventive healthcare and digital health solutions."
        },
        {
            name: "Michael Chen",
            role: "Head of Technology",
            description: "Expert in health tech and AI-driven wellness solutions."
        },
        {
            name: "Dr. Emily Rodriguez",
            role: "Wellness Director",
            description: "Specialist in mental health and holistic wellness approaches."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Swasthya</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're on a mission to revolutionize personal health monitoring through innovative technology and user-centric design.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                            <IonIcon icon={stat.icon} className="text-4xl text-blue-400 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="bg-gray-800 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-300 mb-4">
                                At Swasthya, we believe that everyone deserves access to comprehensive health monitoring tools that are both easy to use and effective. Our mission is to empower individuals to take control of their health journey through innovative technology and personalized insights.
                            </p>
                            <p className="text-gray-300">
                                We combine cutting-edge technology with medical expertise to create a platform that not only tracks health metrics but also provides actionable insights and recommendations for better health outcomes.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
                            <div className="flex items-center space-x-3">
                                <IonIcon icon={heart} className="text-2xl text-blue-400" />
                                <span className="text-gray-300">User-Centric Design</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <IonIcon icon={trophy} className="text-2xl text-blue-400" />
                                <span className="text-gray-300">Excellence in Healthcare</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <IonIcon icon={globe} className="text-2xl text-blue-400" />
                                <span className="text-gray-300">Global Accessibility</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                                <div className="text-blue-400 mb-4">{member.role}</div>
                                <p className="text-gray-300">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
                    <p className="text-gray-300 mb-8">Be part of our mission to transform personal health monitoring.</p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About; 
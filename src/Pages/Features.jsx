import React from 'react';
import { IonIcon } from '@ionic/react';
import { fitness, nutrition, heart, time, analytics, notifications, trophy, settings } from 'ionicons/icons';
import { motion } from 'framer-motion';

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
            description: "Track your nutrition, meal plans, and water intake to maintain a balanced diet.",
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
            description: "Monitor your mental well-being with mood tracking and mindfulness exercises.",
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
            description: "Get detailed insights into your health metrics with easy-to-understand visualizations.",
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
            description: "Stay on track with your health goals through timely notifications and reminders.",
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
            description: "Stay motivated with our gamified achievement system and rewards.",
            details: [
                "Daily and weekly challenges",
                "Achievement badges",
                "Progress milestones",
                "Community competitions"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">App Features</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover the comprehensive features designed to help you achieve your health and wellness goals.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center mb-4"
                            >
                                <IonIcon icon={feature.icon} className="text-4xl text-blue-400 mr-4" />
                                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                            </motion.div>
                            <p className="text-gray-300 mb-4">{feature.description}</p>
                            <motion.ul 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className="space-y-2"
                            >
                                {feature.details.map((detail, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        className="flex items-center text-gray-400"
                                    >
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                                        />
                                        {detail}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Health Journey?</h2>
                    <p className="text-gray-300 mb-8">Download our app today and take the first step towards a healthier lifestyle.</p>
                    <div className="flex justify-center gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Download Now
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Features; 
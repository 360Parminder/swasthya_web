import Homescreen from "../assets/Images/HomeScreen.png";
import Home_Profile from "../assets/Images/Home-Profile.png";
import { IonIcon } from '@ionic/react';
import { logoApple, logoGooglePlaystore, fitness, nutrition, heart,bed } from 'ionicons/icons';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row pt-24 md:pt-32 px-4 md:px-10 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen">
                <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            The Future of Health
                        </h2>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-blue-400 leading-tight">
                            Monitoring is Here.
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                    >
                        Track, manage, and improve your well-being—all in one powerful app.
                        Personalized insights and tools to help you achieve your health goals.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 items-center"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-blue-500/25"
                        >
                            Get Started
                        </motion.button>
                        
                        <div className="flex gap-4">
                            <motion.div 
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9 }}
                                className="transform transition-all duration-300"
                            >
                                <IonIcon 
                                    icon={logoApple} 
                                    className="text-3xl border-2 border-gray-600 rounded-full p-3 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer transition-colors" 
                                />
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9 }}
                                className="transform transition-all duration-300"
                            >
                                <IonIcon 
                                    icon={logoGooglePlaystore} 
                                    className="text-3xl border-2 border-gray-600 rounded-full p-3 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer transition-colors" 
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl" 
                        src={Home_Profile} 
                        alt="App Preview" 
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 px-10 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Key Features
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: fitness,
                                title: "Physical Activity",
                                description: "Track your workouts, steps, and daily activities with detailed analytics."
                            },
                            {
                                icon: nutrition,
                                title: "Dietary Habits",
                                description: "Monitor your nutrition, meal plans, and water intake for better health."
                            },
                            {
                                icon: bed,
                                title: "Sleep Patterns",
                                description: "Analyze your sleep quality and get personalized recommendations."
                            },
                            {
                                icon: heart,
                                title: "Mental Health",
                                description: "Track your mood, stress levels, and practice mindfulness exercises."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                                <IonIcon icon={feature.icon} className="text-4xl text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* App Preview Section */}
            <div className="py-20 px-10 bg-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Your Personal Health Companion</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Set goals, track progress, and receive personalized reminders to stay on track with your health objectives. Our app makes it easy to maintain a healthy lifestyle.
                        </p>
                        <div className="flex flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Download Now
                            </motion.button>
                            
                            <motion.button
                                // to="/features"
                                as={Link}
                                to="/features"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }} 

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex justify-center"
                    >
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            className="w-[900px] h-[600px] object-contain" 
                            src={Homescreen} 
                            alt="App Preview" 
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
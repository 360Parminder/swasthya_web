import iPhone from "../assets/Images/iPhone.png";
import AppStore from "../assets/Images/apple.png";
import GoogleStore from "../assets/Images/googlePlay.png";
import { IonIcon } from '@ionic/react';
import { logoApple, logoGooglePlaystore, fitness, nutrition, heart } from 'ionicons/icons';

const HomeScreen = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="flex flex-col pt-32 px-10 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-[4rem] font-[600] text-white">The Future of Health</h2>
                    <h2 className="text-[4rem] italic text-blue-400">Monitoring is Here.</h2>
                    <p className="text-[1.5rem] font-[500] text-gray-300 mt-4 max-w-2xl">
                        Track, manage, and improve your well-being—all in one powerful app.
                        Personalized insights and tools to help you achieve your health goals.
                    </p>
                    <div className="flex flex-row mt-8 items-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                        <div className="flex flex-row gap-4">
                            <IonIcon icon={logoApple} className="text-3xl border-[1px] border-gray-600 rounded-full p-2 text-gray-300 hover:bg-gray-800 cursor-pointer" />
                            <IonIcon icon={logoGooglePlaystore} className="text-3xl border-[1px] border-gray-600 rounded-full p-2 text-gray-300 hover:bg-gray-800 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 px-10 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                            <IonIcon icon={fitness} className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white">Physical Activity</h3>
                            <p className="text-gray-400">Track your workouts, steps, and daily activities with detailed analytics.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                            <IonIcon icon={nutrition} className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white">Dietary Habits</h3>
                            <p className="text-gray-400">Monitor your nutrition, meal plans, and water intake for better health.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                            <IonIcon icon={heart} className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white">Sleep Patterns</h3>
                            <p className="text-gray-400">Analyze your sleep quality and get personalized recommendations.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                            <IonIcon icon={heart} className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white">Mental Health</h3>
                            <p className="text-gray-400">Track your mood, stress levels, and practice mindfulness exercises.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* App Preview Section */}
            <div className="py-20 px-10 bg-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6 text-white">Your Personal Health Companion</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Set goals, track progress, and receive personalized reminders to stay on track with your health objectives. Our app makes it easy to maintain a healthy lifestyle.
                        </p>
                        <div className="flex flex-row gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                Download Now
                            </button>
                            <button className="border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img className="w-[300px] h-[500px] object-contain" src={iPhone} alt="App Preview" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
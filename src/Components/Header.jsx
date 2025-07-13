import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { logoApple, logoGooglePlaystore } from 'ionicons/icons';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed transition-all duration-300 z-50 ${scrolled ? 'bg-gray-800 shadow-lg w-[90%] top-5 rounded-lg ml-[5%]' : 'bg-transparent w-full'}`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/" className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-white'}`}>Swasthya</Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li><Link to="/features" className={`hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-300' : 'text-white'}`}>Features</Link></li>
                        <li><Link to="/about" className={`hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-300' : 'text-white'}`}>About</Link></li>
                        <li><Link to="/contact" className={`hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-300' : 'text-white'}`}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <IonIcon icon={logoApple} className={`text-xl border-[1px] rounded-full p-2 ${scrolled ? 'text-gray-300 border-gray-600' : 'text-white border-white'} hover:bg-gray-700 cursor-pointer`} />
                        <IonIcon icon={logoGooglePlaystore} className={`text-xl border-[1px] rounded-full p-2 ${scrolled ? 'text-gray-300 border-gray-600' : 'text-white border-white'} hover:bg-gray-700 cursor-pointer`} />
                    </div>
                    <button className={`px-4 py-2 rounded-full ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'} transition-colors`}>
                        Comming Soon
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
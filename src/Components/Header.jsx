import React, { useState, useEffect } from 'react';

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
        <header className={`fixed transition-all duration-300 ${scrolled ? 'bg-gray-800 shadow-lg w-[90%] top-5 rounded-lg' : 'bg-transparent w-full'}`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-white text-2xl font-bold">Logo</div>
                <nav>
                    <ul className="flex space-x-6 text-white">
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#how-to" className="hover:text-gray-400">How To</a></li>
                        <li><a href="#features" className="hover:text-gray-400">Features</a></li>
                        <li><a href="#download" className="hover:text-gray-400">Download</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </nav>
                        <a href="#demo" className="hover:text-gray-400">Get a Demo</a>
            </div>
        </header>
    );
};

export default Header;
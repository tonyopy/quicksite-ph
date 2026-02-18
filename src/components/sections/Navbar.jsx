import React from 'react';
import { Logo } from '../ui/Logo';

function Navbar({ toggleMenu, isMenuOpen }) {
    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Logo className="h-9 w-auto" />
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Services</a>
                        <a href="#templates" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Templates</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Pricing</a>
                        <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105">Get Started</a>
                    </div>
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#services" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium" onClick={toggleMenu}>Services</a>
                        <a href="#templates" className="block w-full text-left text-gray-600 hover:text-blue-600 px-3 py-2 font-medium" onClick={toggleMenu}>Templates</a>
                        <a href="#pricing" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium" onClick={toggleMenu}>Pricing</a>
                        <a href="#contact" className="block bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 font-medium text-center" onClick={toggleMenu}>Get Started</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

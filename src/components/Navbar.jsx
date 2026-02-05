import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Services', href: '#services' },
        { title: 'Portfolio', href: '#portfolio' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/30">
                            <Code2 className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            DevPortfolio
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
                            >
                                {link.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5">
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="pt-4">
                                <button className="w-full px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                                    Hire Me
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

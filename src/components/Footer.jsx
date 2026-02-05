import React from 'react';
import { Code2, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <Code2 className="text-indigo-500 w-8 h-8 mr-2" />
                            <span className="text-xl font-bold text-white">DevPortfolio</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building modern, responsive, and user-friendly web experiences using the latest technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Web Development</li>
                            <li>UI/UX Design</li>
                            <li>React Applications</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
                    <p className="flex items-center mt-4 md:mt-0">
                        Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

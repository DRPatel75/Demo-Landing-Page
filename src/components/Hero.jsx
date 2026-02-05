import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-white">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-bl-[100px] blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-tr-[100px] blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for Freelance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight"
                    >
                        Build Responsive <span className="text-indigo-600">React Frontend</span> Website with Modern UI
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I craft high-performance, pixel-perfect, and fully responsive websites using React.js and Tailwind CSS. Turn your design into reality today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                            Order Now <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-700 font-bold text-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-sm">
                            <Layers className="mr-2 w-5 h-5" /> View Portfolio
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-commerce Dashboard',
        category: 'React Application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        description: 'A comprehensive admin dashboard for managing products, orders, and analytics.'
    },
    {
        id: 2,
        title: 'SaaS Landing Page',
        category: 'Landing Page',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        description: 'High-conversion landing page with modern animations and responsive layout.'
    },
    {
        id: 3,
        title: 'Real Estate Platform',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        description: 'Property search and listing platform with map integration and filters.'
    },
    {
        id: 4,
        title: 'Personal Portfolio',
        category: 'Portfolio',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        description: 'Minimalist developer portfolio showcasing skills and projects.'
    },
    {
        id: 5,
        title: 'Fitness Tracking App',
        category: 'Mobile First',
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
        description: 'Progressive web app for tracking workouts and nutrition goals.'
    },
    {
        id: 6,
        title: 'Travel Booking Site',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        description: 'Complete booking flow for flights and hotels with payment integration.'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        A selection of my recent work showcasing React.js expertise and modern design patterns.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 bg-white"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-3 bg-white rounded-full text-indigo-600 hover:text-indigo-700 hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-gray-900 hover:text-black hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                        <Github className="w-5 h-5" />
                                    </button>
                                </div>
                                {/* Decorative Pattern Placeholder - Removed as we have real images now */}
                            </div>

                            <div className="p-6">
                                <span className="text-sm font-medium text-indigo-600 mb-2 block uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="w-0 h-full bg-indigo-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

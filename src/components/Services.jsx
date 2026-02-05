import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Palette, Bug } from 'lucide-react';

const services = [
    {
        icon: <Layout className="w-8 h-8 text-indigo-600" />,
        title: 'React Frontend Development',
        description: 'Scalable and maintainable React applications with component-based architecture.'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
        title: 'Responsive Website Design',
        description: 'Websites that look perfect on all devices: desktops, tablets, and mobile phones.'
    },
    {
        icon: <Palette className="w-8 h-8 text-indigo-600" />,
        title: 'Modern UI / UX Design',
        description: 'Beautiful, intuitive interfaces with smooth animations and user-friendly interactions.'
    },
    {
        icon: <Bug className="w-8 h-8 text-indigo-600" />,
        title: 'Bug Fixing & Optimization',
        description: 'Troubleshooting issues, improving performance, and optimizing code for better speed.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        My Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        High-quality frontend development services tailored to your needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                {React.cloneElement(service.icon, { className: 'w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300' })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

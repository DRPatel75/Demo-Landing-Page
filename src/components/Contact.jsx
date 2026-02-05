import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? internal or have a question? Feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Mail className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Email Me</h4>
                                        <p className="text-gray-600">hello@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Call Me</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                                        <p className="text-gray-600">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg shadow-indigo-500/10 border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 flex items-center justify-center"
                            >
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Grid, Heart } from 'lucide-react';

const reasons = [
    {
        icon: <Code className="w-10 h-10 text-white" />,
        title: 'Clean Code',
        description: 'I write clean, modular, and maintainable code that is easy to scale and debug.',
        color: 'bg-blue-500'
    },
    {
        icon: <Zap className="w-10 h-10 text-white" />,
        title: 'Fast Delivery',
        description: 'Timely delivery without compromising on quality. I respect deadlines.',
        color: 'bg-yellow-500'
    },
    {
        icon: <Grid className="w-10 h-10 text-white" />,
        title: 'Pixel Perfect',
        description: 'Attention to detail is my forte. I ensure the design is implemented precisely.',
        color: 'bg-pink-500'
    },
    {
        icon: <Heart className="w-10 h-10 text-white" />,
        title: 'Client Satisfaction',
        description: 'I prioritize your needs and work until you are 100% satisfied with the result.',
        color: 'bg-indigo-500'
    }
];

const WhyChooseMe = () => {
    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Why Choose Me?
                    </motion.h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        I bring a combination of technical expertise and creative problem-solving to every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors duration-300"
                        >
                            <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;

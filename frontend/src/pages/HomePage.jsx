import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const handleAskQuestion = () => {
        if (user) {
            navigate('/chat');
        } else {
            navigate('/login');
        }
    };

    // Scroll reveal animation
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <motion.section
                className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
                style={{ opacity }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    {/* Lotus Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-saffron-400 via-spiritual-gold to-spiritual-blue flex items-center justify-center animate-pulse-slow shadow-2xl">
                            <span className="text-6xl">🪷</span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-saffron-400 via-spiritual-gold to-saffron-600 bg-clip-text text-transparent"
                    >
                        Margdarshi
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-3xl font-devanagari text-saffron-300 mb-6"
                    >
                        मार्गदर्शी
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Your Divine Guide to Life's Questions
                        <br />
                        <span className="text-saffron-400">Powered by the Eternal Wisdom of Shrimad Bhagavad Gita</span>
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        onClick={handleAskQuestion}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 50px rgba(255, 153, 51, 0.8)' }}
                        whileTap={{ scale: 0.95 }}
                        className="glow-button px-12 py-5 bg-gradient-to-r from-saffron-500 via-saffron-600 to-spiritual-gold text-white text-xl font-bold rounded-full shadow-2xl relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <span>Ask Your Question</span>
                            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </motion.button>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-20"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-saffron-400"
                        >
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Bhagavad Gita Wisdom Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="scroll-reveal text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-saffron-400 mb-4">
                            Timeless Wisdom for Modern Life
                        </h2>
                        <p className="text-xl text-gray-300">
                            Discover guidance rooted in 5,000 years of spiritual knowledge
                        </p>
                    </div>

                    {/* Shloka 1 - Karma Yoga */}
                    <div className="scroll-reveal spiritual-card mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-saffron-400 to-spiritual-blue flex items-center justify-center text-5xl shadow-xl">
                                        ☸️
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-saffron-400 mb-4">Dharma Chakra</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    The wheel of righteousness guides us through life's journey,
                                    teaching us to perform our duties without attachment to results.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-spiritual-blue/20 to-saffron-500/20 p-8 rounded-xl">
                                <p className="sanskrit-text mb-4 text-center">
                                    कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                                    <br />
                                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                                </p>
                                <p className="text-gray-200 italic text-center">
                                    "You have the right to perform your duty, but not to the fruits of action.
                                    Never consider yourself the cause of results, nor be attached to inaction."
                                </p>
                                <p className="text-sm text-saffron-300 text-center mt-4">
                                    - Bhagavad Gita 2.47
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Shloka 2 - Krishna's Divine Form */}
                    <div className="scroll-reveal spiritual-card mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 bg-gradient-to-br from-saffron-500/20 to-spiritual-gold/20 p-8 rounded-xl">
                                <p className="sanskrit-text mb-4 text-center">
                                    यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
                                    <br />
                                    अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥
                                </p>
                                <p className="text-gray-200 italic text-center">
                                    "Whenever there is a decline in righteousness and a rise in unrighteousness,
                                    O Arjuna, at that time I manifest myself on earth."
                                </p>
                                <p className="text-sm text-saffron-300 text-center mt-4">
                                    - Bhagavad Gita 4.7
                                </p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-spiritual-blue to-saffron-400 flex items-center justify-center text-5xl shadow-xl animate-float">
                                        🦚
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-spiritual-gold mb-4">Divine Protection</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Lord Krishna promises to appear whenever dharma is threatened,
                                    reminding us that divine grace is always present in our lives.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Shloka 3 - Self-Realization */}
                    <div className="scroll-reveal spiritual-card mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-spiritual-gold to-saffron-500 flex items-center justify-center text-5xl shadow-xl">
                                        ∞
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-spiritual-gold mb-4">Eternal Karma</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Every action creates a ripple in the universe. Understanding karma
                                    helps us make choices aligned with our highest purpose.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-spiritual-gold/20 to-spiritual-blue/20 p-8 rounded-xl">
                                <p className="sanskrit-text mb-4 text-center">
                                    योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
                                    <br />
                                    सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥
                                </p>
                                <p className="text-gray-200 italic text-center">
                                    "Perform your duty equipoised, abandoning all attachment to success or failure.
                                    Such equanimity is called yoga."
                                </p>
                                <p className="text-sm text-saffron-300 text-center mt-4">
                                    - Bhagavad Gita 2.48
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Shloka 4 - Inner Peace */}
                    <div className="scroll-reveal spiritual-card mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 bg-gradient-to-br from-spiritual-blue/20 to-spiritual-lotus/20 p-8 rounded-xl">
                                <p className="sanskrit-text mb-4 text-center">
                                    समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः।
                                    <br />
                                    तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः॥
                                </p>
                                <p className="text-gray-200 italic text-center">
                                    "One who is equal in happiness and distress, who is steady,
                                    who regards a clod of earth, stone, and gold as of equal value,
                                    and who remains balanced in honor and dishonor—such a person is dear to Me."
                                </p>
                                <p className="text-sm text-saffron-300 text-center mt-4">
                                    - Bhagavad Gita 14.24
                                </p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-spiritual-lotus to-spiritual-gold flex items-center justify-center text-5xl shadow-xl animate-pulse-slow">
                                        🧘
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-saffron-400 mb-4">Inner Equilibrium</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    True peace comes from maintaining equanimity in all situations,
                                    treating success and failure, praise and criticism with equal grace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="scroll-reveal glass-dark rounded-3xl p-12 shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-saffron-400 mb-6">
                            Ready to Find Your Path?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Let the ancient wisdom of Bhagavad Gita illuminate your journey.
                            Ask your questions and receive guidance rooted in timeless spiritual truth.
                        </p>
                        <motion.button
                            onClick={handleAskQuestion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="glow-button px-10 py-4 bg-gradient-to-r from-saffron-500 to-spiritual-gold text-white text-lg font-bold rounded-full shadow-2xl"
                        >
                            Begin Your Journey
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-gray-700">
                <div className="max-w-6xl mx-auto text-center text-gray-400">
                    <p className="mb-2">
                        <span className="text-saffron-400 font-bold">Margdarshi</span> - Guidance Through Bhagavad Gita
                    </p>
                    <p className="text-sm">
                        © 2025 Margdarshi. All rights reserved. | Built with devotion and technology.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

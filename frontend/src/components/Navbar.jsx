import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-saffron-500 to-spiritual-gold flex items-center justify-center"
                        >
                            <span className="text-2xl">🪷</span>
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-gradient-to-r from-saffron-400 to-spiritual-gold bg-clip-text text-transparent">
                                Margdarshi
                            </span>
                            <span className="text-xs text-gray-400 font-devanagari">मार्गदर्शी</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ThemeToggle />

                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-300">
                                    Welcome, <span className="text-saffron-400 font-semibold">{user.name}</span>
                                </span>
                                <Link to="/chat">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-lg font-medium shadow-lg hover:shadow-saffron-500/50"
                                    >
                                        Ask Question
                                    </motion.button>
                                </Link>
                                <motion.button
                                    onClick={handleLogout}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-800"
                                >
                                    Logout
                                </motion.button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 text-gray-300 hover:text-saffron-400"
                                    >
                                        Login
                                    </motion.button>
                                </Link>
                                <Link to="/signup">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-lg font-medium shadow-lg hover:shadow-saffron-500/50"
                                    >
                                        Sign Up
                                    </motion.button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-saffron-400"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass-dark border-t border-gray-700"
                >
                    <div className="px-4 py-4 space-y-3">
                        {user ? (
                            <>
                                <div className="text-sm text-gray-300 pb-2 border-b border-gray-700">
                                    Welcome, <span className="text-saffron-400 font-semibold">{user.name}</span>
                                </div>
                                <Link to="/chat" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-lg font-medium">
                                        Ask Question
                                    </button>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 border border-gray-500 text-gray-300 rounded-lg"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full px-4 py-2 text-gray-300 border border-gray-600 rounded-lg">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-lg font-medium">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;

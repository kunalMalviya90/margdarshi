import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: 'Namaste 🙏 I am Margdarshi, your guide powered by the wisdom of Shrimad Bhagavad Gita. Ask me any question about life, purpose, dharma, or karma, and I will share insights from this eternal scripture.'
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(false);

    const messagesEndRef = useRef(null);
    const { user } = useAuth();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, typing]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');

        console.log('📤 Sending question:', userMessage);

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

        setLoading(true);
        setTyping(true);

        try {
            const response = await axios.post('/api/chat/geeta', {
                question: userMessage
            });

            console.log('✅ Received response:', response.data);
            setTyping(false);

            // Add AI response
            setMessages(prev => [...prev, {
                role: 'ai',
                content: response.data.answer
            }]);
        } catch (error) {
            console.error('❌ Chat API Error:', error.response?.data || error.message);
            setTyping(false);
            setMessages(prev => [...prev, {
                role: 'ai',
                content: 'I apologize, but I encountered an issue. Please try again or rephrase your question. Remember, I can only answer questions related to spiritual guidance based on Bhagavad Gita.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-16 pb-4 px-4">
            <div className="max-w-5xl mx-auto h-[calc(100vh-5rem)] flex flex-col">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-dark rounded-t-3xl p-6 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-saffron-400 to-spiritual-gold bg-clip-text text-transparent mb-2">
                        Ask Margdarshi
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Guidance from Bhagavad Gita for {user?.name}
                    </p>
                </motion.div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto glass-dark p-6 space-y-6">
                    <AnimatePresence>
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex items-start space-x-3 max-w-3xl ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                    {/* Avatar */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user'
                                        ? 'bg-gradient-to-r from-saffron-500 to-saffron-600'
                                        : 'bg-gradient-to-r from-spiritual-blue to-saffron-400'
                                        }`}>
                                        <span className="text-xl">
                                            {message.role === 'user' ? '👤' : '🪷'}
                                        </span>
                                    </div>

                                    {/* Message Bubble */}
                                    <div className={message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                                        <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {typing && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-spiritual-blue to-saffron-400 flex items-center justify-center">
                                    <span className="text-xl">🪷</span>
                                </div>
                                <div className="chat-bubble-ai">
                                    <div className="flex space-x-2">
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                            className="w-2 h-2 bg-saffron-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                            className="w-2 h-2 bg-spiritual-gold rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                            className="w-2 h-2 bg-saffron-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="glass-dark rounded-b-3xl p-6">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask your question about life, dharma, karma..."
                            disabled={loading}
                            className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: loading ? 1 : 1.05 }}
                            whileTap={{ scale: loading ? 1 : 0.95 }}
                            disabled={loading || !input.trim()}
                            className={`px-8 py-4 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-bold rounded-full shadow-lg transition-all ${loading || !input.trim()
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:shadow-saffron-500/50'
                                }`}
                        >
                            {loading ? (
                                <div className="spiritual-spinner"></div>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-3">
                        Margdarshi provides guidance based on Bhagavad Gita's teachings
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ChatPage;

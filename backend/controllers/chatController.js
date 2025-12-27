import { getAIResponse } from '../config/aiConfig.js';

/**
 * Get Gita-based AI response
 * POST /api/chat/geeta
 */
export const getGitaResponse = async (req, res) => {
    try {
        const { question } = req.body;
        console.log('\n📝 New chat request from user:', req.user?.name || 'Unknown');

        // Validation
        if (!question || typeof question !== 'string' || !question.trim()) {
            console.log('⚠️ Invalid question received');
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid question'
            });
        }

        // Trim and limit question length
        const trimmedQuestion = question.trim();
        if (trimmedQuestion.length > 1000) {
            console.log('⚠️ Question too long');
            return res.status(400).json({
                success: false,
                message: 'Question is too long. Please keep it under 1000 characters.'
            });
        }

        console.log('🔍 Processing question:', trimmedQuestion);

        // Get AI response
        const answer = await getAIResponse(trimmedQuestion);

        console.log('✅ Sending response to user');
        res.json({
            success: true,
            question: trimmedQuestion,
            answer,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('❌ Chat error:', error);

        // Handle specific AI API errors
        if (error.response?.status === 429) {
            return res.status(429).json({
                success: false,
                message: 'Too many requests. Please wait a moment and try again.'
            });
        }

        if (error.response?.status === 401) {
            return res.status(500).json({
                success: false,
                message: 'AI service configuration error. Please contact support.'
            });
        }

        res.status(500).json({
            success: false,
            message: 'I apologize for the inconvenience. Please try again or rephrase your question.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

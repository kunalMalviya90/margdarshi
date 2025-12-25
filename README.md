# 🪷 Margdarshi - Divine Life Guidance from Bhagavad Gita

> **मार्गदर्शी** - Your spiritual guide powered by the eternal wisdom of Shrimad Bhagavad Gita

Margdarshi is a production-ready, full-stack AI-powered spiritual guidance website that answers life questions exclusively based on the teachings of Bhagavad Gita. Built with modern web technologies and Indian cultural aesthetics.

![Tech Stack](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)

## ✨ Features

### 🎨 Frontend
- **Beautiful UI**: Indian cultural theme with saffron, deep blue, and gold colors
- **Animations**: Framer Motion powered smooth transitions, scroll reveals, and particle effects
- **Dark/Light Mode**: Seamless theme switching with adaptive backgrounds
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Spiritual Aesthetics**: Gradient backgrounds, mandala patterns, glassmorphism effects

### 🔐 Authentication
- Secure JWT-based authentication
- User registration with email, name, and age
- Password hashing with bcryptjs
- Protected routes for chat functionality

### 🤖 AI Integration
- **FREE Groq AI** (Recommended) - Fast, multilingual support for English & Hindi
- Powered by LLaMA 3.3 70B - latest open model
- Alternative: Google Gemini or OpenAI
- **Strict Guardrails**: Only answers based on Bhagavad Gita
- Refuses medical, legal, and financial advice
- Provides spiritual guidance on life, dharma, karma, purpose
- Responds fluently in English and Hindi (हिंदी)
- Cites relevant shlokas and verses

### 📖 Content
- Home page with 4 authentic Bhagavad Gita shlokas in Sanskrit
- Modern interpretations of ancient wisdom
- Beautiful spiritual iconography (Dharma Chakra, Lotus, Om)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool (lightning fast!)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **Axios** - HTTP client
- **JWT Decode** - Token handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Groq AI** - Free, fast inference (Recommended)
- **Google Gemini / OpenAI** - Alternative AI providers

## 📁 Project Structure

```
margdarshi/
├── frontend/                    # React application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/            # React contexts
│   │   │   ├── ThemeContext.jsx
│   │   │   └── AuthContext.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   └── ChatPage.jsx
│   │   ├── App.jsx             # Main app
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── index.html
│   ├── tailwind.config.js      # Custom colors & animations
│   ├── vite.config.js
│   └── package.json
│
└── backend/                     # Node.js server
    ├── models/
    │   └── User.js             # User schema
    ├── routes/
    │   ├── auth.js             # Auth routes
    │   └── chat.js             # Chat routes
    ├── controllers/
    │   ├── authController.js   # Auth logic
    │   └── chatController.js   # AI chat logic
    ├── middleware/
    │   └── auth.js             # JWT middleware
    ├── config/
    │   └── aiConfig.js         # AI provider config
    ├── server.js               # Express server
    ├── .env.example            # Environment template
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- **Groq API key** (FREE) OR Google Gemini / OpenAI API key

### Step 1: Clone/Navigate to Project
```bash
cd C:\Users\malvi\.gemini\antigravity\scratch\margdarshi
```

### Step 2: Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file from template
copy .env.example .env

# Edit .env file with your configuration
notepad .env
```

**Configure `.env` file:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/margdarshi
JWT_SECRET=your_super_secret_jwt_key_change_this
AI_PROVIDER=groq
GROQ_API_KEY=your_groq_api_key_here
```

**To get a FREE Groq API key (RECOMMENDED):**
1. Visit https://console.groq.com/keys
2. Sign up with Google or GitHub (Free, no credit card)
3. Click "Create API Key"
4. Copy and paste into `.env`

**Alternative - Gemini API key:**
1. Visit https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy and paste into `.env`
4. Set `AI_PROVIDER=gemini`

### Step 3: Frontend Setup

```bash
# Navigate to frontend (from project root)
cd frontend

# Install dependencies
npm install
```

### Step 4: Start MongoDB

**Option A - Local MongoDB:**
```bash
# Start MongoDB service (if installed locally)
mongod
```

**Option B - MongoDB Atlas (Cloud):**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Server will start at `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will start at `http://localhost:3000`

### Step 6: Open in Browser
Navigate to `http://localhost:3000`

## 🎯 Usage

### 1. Sign Up
- Click "Sign Up" in navbar
- Enter name, email, age, and password
- Account will be created

### 2. Login
- Click "Login" with your credentials
- JWT token will be stored

### 3. Ask Questions
- Click "Ask Question" button on home page
- Or navigate to `/chat` when logged in
- Ask spiritual or life-related questions
- Receive guidance based on Bhagavad Gita

### Example Questions
✅ **Good Questions (English):**
- "How can I find peace in difficult times?"
- "What is my dharma as a student?"
- "How do I deal with fear of failure?"
- "What does Bhagavad Gita say about karma?"

✅ **हिंदी में प्रश्न (Questions in Hindi):**
- "कठिन समय में शांति कैसे पाएं?"
- "कर्म योग क्या है?"
- "डर से कैसे निपटें?"
- "जीवन का उद्देश्य क्या है?"

❌ **Questions AI Will Refuse:**
- "What medicine should I take?" (Medical advice)
- "How to invest money?" (Financial advice)
- "What's the weather today?" (Non-spiritual)

## 🎨 Design Features

### Color Palette
- **Saffron**: `#FF9933` - Primary brand color
- **Deep Blue**: `#000080` - Spiritual depth
- **Gold**: `#FFD700` - Divine accent
- **Lotus Pink**: `#FFC0CB` - Softness

### Animations
- Floating particles on background
- Gradient animation (15s cycle)
- Scroll reveal effects
- Glow buttons with pulse
- Typing indicator in chat
- Smooth page transitions

### Typography
- **Primary**: Inter (modern, clean)
- **Sanskrit**: Noto Sans Devanagari (authentic)

## 🔒 Security Features

- Passwords hashed with bcryptjs (10 salt rounds)
- JWT tokens with 7-day expiration
- Protected API routes
- Input validation on all endpoints
- MongoDB injection prevention via Mongoose
- CORS enabled for frontend-backend communication

## 🤖 AI System Prompt

The AI is configured with a comprehensive system prompt that:
- Enforces Bhagavad Gita-only responses
- Provides compassionate guidance
- Refuses inappropriate questions politely
- References shlokas when relevant
- Applies ancient wisdom to modern life

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login and receive JWT

### Chat (Protected)
- `POST /api/chat/geeta` - Get AI response (requires JWT)

### Health
- `GET /api/health` - Server health check
- `GET /` - API documentation

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- For Atlas, whitelist your IP address

### AI API Error
- Verify API key in `.env`
- Check API quota/billing
- Ensure `AI_PROVIDER` matches your key (gemini or openai)

### Frontend Can't Connect to Backend
- Ensure backend is running on port 5000
- Check Vite proxy config in `vite.config.js`
- Verify CORS is enabled in backend

### Dark Mode Not Working
- Check localStorage is enabled
- Clear browser cache
- Verify ThemeContext is wrapping App

## 🌟 Features

- [x] Multi-language support (English, Hindi)
- [x] Free AI with Groq (LLaMA 3.3)
- [ ] Audio Gita shlokas
- [ ] Daily wisdom notifications
- [ ] Chat history persistence
- [ ] Gita verse of the day
- [ ] User profile customization
- [ ] Social sharing features

## 📝 License

This project is created for educational and spiritual purposes.

## 🙏 Credits

- **Shrimad Bhagavad Gita** - The eternal scripture
- **Google Fonts** - Inter & Noto Sans Devanagari
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool
- **MongoDB** - Database

## 💫 Contributing

This is a devotional project. Contributions that maintain the spiritual integrity and Bhagavad Gita focus are welcome.

---

**Built with devotion to share the timeless wisdom of Bhagavad Gita** 🕉️

*"योगस्थः कुरु कर्माणि" - Perform your duty established in yoga*

# Margdarshi - Quick Start Guide

## 🎯 Fastest Way to Get Started

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` in backend folder:
```bash
cd backend
copy .env.example .env
```

**Required Configuration:**
Edit `.env` file and add:
1. **MongoDB URI**: 
   - Local: `mongodb://localhost:27017/margdarshi`
   - Atlas: Get from https://cloud.mongodb.com
2. **JWT Secret**: Any random string (e.g., `margdarshi_secret_2025`)
3. **AI API Key**: Get from https://makersuite.google.com/app/apikey

### 3. Start Services

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```
Should see: "MongoDB connected successfully" and "Margdarshi server running on port 5000"

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
Should see: "Local: http://localhost:3000"

### 4. Access Application
Open browser: http://localhost:3000

---

## 🐛 Common Issues

**"MongoDB connection error"**
→ Start MongoDB or use MongoDB Atlas cloud database

**"AI API error"**
→ Check your Gemini API key in `.env`

**"Port already in use"**
→ Change PORT in backend `.env` to different number

---

## 📚 Default Test Account
After signing up, you can create any test account. Example:
- Email: test@margdarshi.com
- Name: Test User
- Age: 25
- Password: test123

---

## ✅ Verification Checklist
- [ ] Backend server running (http://localhost:5000)
- [ ] Frontend dev server running (http://localhost:3000)
- [ ] MongoDB connected
- [ ] Can signup new user
- [ ] Can login
- [ ] Can ask question in chat
- [ ] Receives AI response

---

**Need help?** Check the main README.md for detailed documentation.

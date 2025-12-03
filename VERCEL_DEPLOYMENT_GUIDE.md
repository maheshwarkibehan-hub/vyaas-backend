# 🚀 VYAAS AI - Vercel Deployment Guide (Hinglish)

> **Complete step-by-step guide to deploy VYAAS AI on Vercel**

---

## 📋 Prerequisites (Pehle ye check karo)

- [ ] GitHub account (zaruri hai)
- [ ] Vercel account ([vercel.com](https://vercel.com) pe free signup karo)
- [ ] Git installed on your computer
- [ ] All environment variables ready (Firebase, Supabase, LiveKit keys)

---

## 🎯 Step 1: GitHub Repository Setup

### 1.1 Git Initialize karo (agar nahi kiya hai to)

```bash
# Frontend folder mein jao
cd c:\Users\mahes\OneDrive\Desktop\vyaasaiupdated

# Check if git is already initialized
git status
```

### 1.2 GitHub pe naya repository banao

1. [GitHub.com](https://github.com) pe jao
2. Click on **"New Repository"** (green button)
3. Repository name: `vyaas-ai` (ya koi bhi naam)
4. **Private** ya **Public** select karo
5. **DO NOT** initialize with README (already files hain)
6. Click **"Create Repository"**

### 1.3 Code ko GitHub pe push karo

```bash
# Agar pehli baar hai to:
git init
git add .
git commit -m "Initial commit - VYAAS AI"

# GitHub repository URL add karo (apna URL use karo)
git remote add origin https://github.com/YOUR_USERNAME/vyaas-ai.git

# Push karo
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Vercel Account Setup

### 2.1 Vercel pe signup/login karo

1. [vercel.com](https://vercel.com) pe jao
2. **"Sign Up"** pe click karo
3. **"Continue with GitHub"** select karo (recommended)
4. GitHub se authorize karo

---

## 🚀 Step 3: Vercel pe Deploy karo

### 3.1 New Project banao

1. Vercel Dashboard pe jao
2. Click **"Add New..."** → **"Project"**
3. **"Import Git Repository"** section mein apna `vyaas-ai` repository dhundo
4. Click **"Import"**

### 3.2 Project Configuration

#### **Framework Preset:**
- Automatically **Next.js** detect hoga ✅

#### **Root Directory:**
- Click **"Edit"** next to Root Directory
- Select: **`Frontend`** folder
- Ye bahut important hai! 🔴

#### **Build Settings:**
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 3.3 Environment Variables Add karo

Click **"Environment Variables"** section mein, ye sab add karo:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=1:1019026039342:web:3b8139289374da2e36b5bf

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# LiveKit Configuration
NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret

# Email Configuration (Optional)
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password

# Other
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

> **💡 Tip:** Environment variables ko `.env.local` file se copy kar sakte ho

### 3.4 Deploy karo!

1. Sab settings check karo
2. Click **"Deploy"** button 🚀
3. Wait karo 2-3 minutes (build hone tak)

---

## ✅ Step 4: Deployment Verify karo

### 4.1 Build Success check karo

- Build logs mein errors nahi hone chahiye
- Green checkmark ✅ dikhna chahiye
- **"Visit"** button pe click karo

### 4.2 App Test karo

1. Homepage load ho raha hai? ✅
2. Login/Signup kaam kar raha hai? ✅
3. LiveKit voice agent connect ho raha hai? ✅
4. Database operations kaam kar rahe hain? ✅

---

## ⚠️ Important Notes (Backend ke liye)

### Backend Deployment (Separate service chahiye)

**VYAAS AI ka Backend (Python LiveKit Agent) Vercel pe nahi chalega!** 

Kyunki:
- Vercel sirf **serverless functions** support karta hai
- Python LiveKit agent ko **long-running process** chahiye
- WebSocket connections ko persistent server chahiye

### Backend ke liye options:

#### Option 1: **Render.com** (Recommended - Free tier available)
```bash
# Backend folder mein jao
cd Backend

# Render pe deploy karo (web service)
# Procfile ya start.sh use karo
```

#### Option 2: **Railway.app** (Free tier available)
- GitHub se connect karo
- Backend folder select karo
- Auto-deploy hoga

#### Option 3: **Heroku** (Paid)
- Traditional deployment
- Dyno use karta hai

---

## 🔧 Step 5: Custom Domain (Optional)

### 5.1 Domain add karo

1. Vercel Dashboard → **Settings** → **Domains**
2. Apna domain enter karo (e.g., `vyaas-ai.com`)
3. DNS settings update karo (Vercel instructions follow karo)

---

## 🔄 Step 6: Automatic Deployments

### Git Push pe Auto-Deploy

Jab bhi tum GitHub pe code push karoge, Vercel automatically deploy karega:

```bash
# Code changes karo
git add .
git commit -m "Updated feature X"
git push origin main

# Vercel automatically deploy karega! 🎉
```

### Preview Deployments

- Har Git branch ka alag preview URL milega
- Pull requests pe automatic preview deployments

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Failed

**Solution:**
```bash
# Local pe build test karo
cd Frontend
npm run build

# Agar errors aaye to fix karo, phir push karo
```

### Issue 2: Environment Variables Missing

**Solution:**
- Vercel Dashboard → Settings → Environment Variables
- Sab variables dobara check karo
- Redeploy karo

### Issue 3: 404 Errors on Routes

**Solution:**
- Next.js automatically handles routing
- Check `next.config.js` configuration
- Ensure `output: 'standalone'` nahi hai (unless needed)

### Issue 4: API Routes Not Working

**Solution:**
```javascript
// Check API route files in app/api/
// Ensure proper export format:
export async function GET(request) {
  // your code
}
```

---

## 📊 Monitoring & Analytics

### Vercel Dashboard mein dekho:

1. **Analytics** - Page views, performance
2. **Logs** - Runtime logs, errors
3. **Speed Insights** - Performance metrics
4. **Deployments** - Deployment history

---

## 🎉 Final Checklist

- [ ] GitHub repository created & code pushed
- [ ] Vercel account setup
- [ ] Project imported from GitHub
- [ ] Root directory set to `Frontend`
- [ ] All environment variables added
- [ ] Successful deployment
- [ ] App tested and working
- [ ] Backend deployed separately (Render/Railway)
- [ ] Custom domain configured (optional)
- [ ] Auto-deployments working

---

## 📞 Need Help?

### Vercel Resources:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

### Common Commands:

```bash
# Vercel CLI install karo (optional)
npm i -g vercel

# CLI se deploy karo
cd Frontend
vercel

# Production deploy
vercel --prod
```

---

## 🚀 Quick Deploy Command (Alternative)

Agar Vercel CLI use karna hai:

```bash
# Install Vercel CLI
npm i -g vercel

# Frontend folder mein jao
cd c:\Users\mahes\OneDrive\Desktop\vyaasaiupdated\Frontend

# Deploy karo
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? vyaas-ai
# - Directory? ./
# - Override settings? No

# Production deploy
vercel --prod
```

---

## 🎯 Architecture Overview

```
┌─────────────────────────────────────────┐
│         VYAAS AI Deployment             │
├─────────────────────────────────────────┤
│                                         │
│  Frontend (Next.js)                     │
│  ├─ Vercel ✅                           │
│  ├─ Auto-deploy from GitHub             │
│  └─ Environment Variables               │
│                                         │
│  Backend (Python LiveKit Agent)         │
│  ├─ Render.com / Railway.app ✅         │
│  ├─ WebSocket support                   │
│  └─ Long-running process                │
│                                         │
│  Database                               │
│  └─ Supabase ✅ (Already hosted)        │
│                                         │
│  Authentication                         │
│  └─ Firebase ✅ (Already hosted)        │
│                                         │
└─────────────────────────────────────────┘
```

---

**🎊 Congratulations! Tumhara VYAAS AI ab live hai Vercel pe! 🎊**

> **Pro Tip:** Deployment ke baad, apne friends ko link share karo aur feedback lo! 🚀

# 🔧 FIX LOGIN ERROR ON VERCEL

## The Problem:
After login on Vercel, you get an error because environment variables are missing.

## ✅ SOLUTION - Add Environment Variables to Vercel:

### Step 1: Go to Vercel Settings
**URL:** https://vercel.com/shiexamagic/theater-reveiw/settings/environment-variables

### Step 2: Add These 2 Variables

#### Variable 1: NEXTAUTH_SECRET
- **Name:** `NEXTAUTH_SECRET`
- **Value:** `georgian-theater-secret-key-2025-demo-production`
- **Environment:** Select **ALL** (Production, Preview, Development)
- Click "Save"

#### Variable 2: NEXTAUTH_URL
- **Name:** `NEXTAUTH_URL`
- **Value:** `https://theater-reveiw.vercel.app` (or your actual Vercel URL)
- **Environment:** Select **Production** only
- Click "Save"

### Step 3: Redeploy
1. Go to: https://vercel.com/shiexamagic/theater-reveiw
2. Click "Deployments" tab
3. Find your latest deployment
4. Click the "..." menu
5. Click "Redeploy"
6. Wait ~2 minutes

### Step 4: Test Login
- Go to your Vercel URL
- Login with: **jeff@demo.com** / **demo123**
- Should work! ✅

---

## 🎯 Quick Links:

**Add Variables Here:**
https://vercel.com/shiexamagic/theater-reveiw/settings/environment-variables

**Your Project:**
https://vercel.com/shiexamagic/theater-reveiw

**Your Live Site:**
https://theater-reveiw.vercel.app

---

## 📋 Summary:

The app needs these 2 environment variables to work on Vercel:
1. `NEXTAUTH_SECRET` - For authentication security
2. `NEXTAUTH_URL` - For callback URLs

Without them, login will fail with errors.

After adding them and redeploying, everything will work! 🎭✨

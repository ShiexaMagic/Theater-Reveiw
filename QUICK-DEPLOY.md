# 🎯 Quick Deploy Commands

## Step 1: Create GitHub Repository
Go to: **https://github.com/new**
- Name: `georgian-theater-reviews`
- Make it Public or Private
- Don't add README, .gitignore, or license
- Click "Create repository"

## Step 2: Push to GitHub

Copy your GitHub username first, then run:

```powershell
cd "c:\Users\vamek\Theater\theater-reviews"

# Replace YOUR-USERNAME with your GitHub username!
git remote add origin https://github.com/YOUR-USERNAME/georgian-theater-reviews.git

# Rename branch to main (if needed)
git branch -M main

# Push code
git push -u origin main
```

If it asks for credentials, use:
- **Username:** Your GitHub username
- **Password:** Personal Access Token (not your password)
  - Get token at: https://github.com/settings/tokens/new
  - Select: `repo` scope
  - Copy the token and use it as password

## Step 3: Deploy to Vercel

**Easiest way:**
1. Go to: **https://vercel.com/new**
2. Sign in with GitHub
3. Click "Import" on your `georgian-theater-reviews` repo
4. Click "Deploy"
5. Done! 🎉

**Your site will be live at:** `georgian-theater-reviews.vercel.app`

---

## 🚨 Current Status:
✅ Code committed locally
⏳ Need to push to GitHub
⏳ Need to deploy to Vercel

**See full instructions in:** `DEPLOY-TO-VERCEL.md`

# 🚀 Deploy to Vercel - Step by Step Guide

## ✅ Git Setup Complete!
Your code is committed and ready to push to GitHub!

## 📋 Next Steps:

### Step 1: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new
2. **Repository name:** `georgian-theater-reviews` (or your preferred name)
3. **Description:** `Georgian Theater Review Website - Letterboxd for Georgian Theaters`
4. **Visibility:** Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. **Click:** "Create repository"

### Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
cd "c:\Users\vamek\Theater\theater-reviews"

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/georgian-theater-reviews.git

# Push your code
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

### Step 3: Deploy to Vercel

#### Option A: Using Vercel Website (Recommended)

1. **Go to Vercel:** https://vercel.com/new
2. **Sign in** with your GitHub account
3. **Click:** "Import Project"
4. **Select** your `georgian-theater-reviews` repository
5. **Configure:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build` (leave default)
   - **Output Directory:** `.next` (leave default)
6. **Environment Variables:** Add these in Vercel dashboard (optional for demo):
   ```
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   MONGODB_URI=mongodb+srv://... (if you want database)
   ```
7. **Click:** "Deploy"

#### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "c:\Users\vamek\Theater\theater-reviews"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? `georgian-theater-reviews`
- In which directory is your code located? `./`
- Want to modify settings? **N**

### Step 4: Configure Domain (Optional)

After deployment:
1. Vercel gives you a URL like: `georgian-theater-reviews.vercel.app`
2. You can add a custom domain in Vercel dashboard
3. Update `NEXTAUTH_URL` environment variable to your new domain

## 🎭 What's Included in Your Deploy:

✅ **Features:**
- Georgian language theater review system
- Demo user login (jeff@demo.com / demo123)
- 3 theaters: Atoneli, Haraki, Factory 42
- Review system with 5-star ratings
- Promo code rewards (10% after 5 reviews)
- Picton Blue color scheme
- Your atmospheric theater photos

✅ **Pages:**
- Homepage with hero section
- Theater listing and individual pages
- Play pages with reviews
- User profile with stats
- Authentication (sign in/sign up)

✅ **Tech Stack:**
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS 4
- NextAuth.js
- MongoDB (optional - demo works without it)
- Responsive design

## 🔧 Post-Deployment Setup (Optional)

### To Enable Full Functionality:

1. **Set up MongoDB Atlas:**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Add to Vercel environment variables as `MONGODB_URI`

2. **Generate Secret Key:**
   ```powershell
   # Generate a random secret
   openssl rand -base64 32
   ```
   Add to Vercel as `NEXTAUTH_SECRET`

3. **Update Environment Variables in Vercel:**
   - Go to: Your Project → Settings → Environment Variables
   - Add/Update variables
   - Redeploy: Deployments → ... → Redeploy

## 📸 Your Photos Are Included!

All 4 atmospheric theater photos are committed and will deploy:
- hero-performance.jpg
- actress-portrait.jpg
- ensemble-scene.jpg
- solo-performance.jpg

## 🎉 Demo Mode Works Out of the Box!

The website works perfectly without MongoDB using the demo user:
- **Email:** jeff@demo.com
- **Password:** demo123
- Shows 3 sample reviews
- Has 1 promo code

## 🆘 Troubleshooting

### If build fails:
1. Check Vercel build logs
2. Make sure Node version is compatible (18.x or later)
3. Verify all dependencies are in package.json

### If photos don't show:
1. Check file paths are correct
2. Verify photos are in `/public/images/theater/`
3. Check file extensions match (.jpg)

### If authentication fails:
1. Set `NEXTAUTH_URL` to your Vercel domain
2. Generate and set `NEXTAUTH_SECRET`
3. Redeploy after adding environment variables

## 📚 Useful Commands

```powershell
# View remote repository
git remote -v

# Push changes after updates
git add .
git commit -m "Your update message"
git push

# Deploy to Vercel again
vercel --prod
```

## 🌟 You're Ready!

Follow these steps and your Georgian Theater Review website will be live on the internet! 🎭✨

---

**Need help?** Check Vercel documentation: https://vercel.com/docs

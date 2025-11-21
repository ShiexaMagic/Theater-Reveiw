# 🎭 START HERE - Georgian Theater Reviews

## Welcome! მოგესალმებით!

Your Georgian theater review website is **ready to run**! Follow these simple steps:

---

## ⚡ Quick Start (5 Minutes)

### 1️⃣ **Set Up MongoDB** (Choose One)

**OPTION A: Use MongoDB Atlas (Cloud - Easiest)**
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up (free)
3. Click "Build a Database" → "Free" tier
4. Create cluster (keep defaults)
5. Create database user (username + password)
6. Add IP: Click "Network Access" → "Add IP Address" → "Allow Access from Anywhere"
7. Get connection string: "Database" → "Connect" → "Connect your application"
8. Copy the string (looks like: `mongodb+srv://username:password@cluster...`)

**OPTION B: Use Local MongoDB**
```powershell
# If MongoDB is installed:
net start MongoDB
```

---

### 2️⃣ **Update .env.local File**

Open `.env.local` and add your MongoDB connection:

**For Atlas:**
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/theater-reviews?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-super-secret-key-change-this
NEXTAUTH_URL=http://localhost:3000
```

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/theater-reviews
NEXTAUTH_SECRET=your-super-secret-key-change-this
NEXTAUTH_URL=http://localhost:3000
```

⚠️ Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, and `your-super-secret-key-change-this`

---

### 3️⃣ **Run These Commands**

```powershell
# Make sure you're in the theater-reviews directory
cd theater-reviews

# Install dependencies (takes 2-3 minutes)
npm install

# Add sample theaters and plays (optional)
npm run seed

# Start the website!
npm run dev
```

---

### 4️⃣ **Open Your Browser**

Go to: **http://localhost:3000**

You should see the Georgian homepage! 🎉

---

## 🎯 What to Do Next

1. **Register** - Click "რეგისტრაცია" (blue button, top right)
2. **Browse** - Click "თეატრები" in the menu
3. **Review** - Click on a play → "დაწერე რეცენზია"
4. **Repeat** - Write 5 reviews to get your first promo code! 🎁

---

## 🆘 Troubleshooting

### "Cannot connect to MongoDB"
- **Atlas**: Check username/password in `.env.local`
- **Atlas**: Make sure IP is whitelisted (allow from anywhere)
- **Local**: Run `net start MongoDB`

### "Port 3000 is already in use"
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000
# Kill it (replace XXXX with the PID from above)
taskkill /PID XXXX /F
# Try again
npm run dev
```

### "Module not found" errors
```powershell
# Delete and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 📚 More Information

- **QUICKSTART.md** - Detailed setup instructions
- **PROJECT-SUMMARY.md** - Complete feature list
- **README.md** - Full documentation

---

## ✅ Success Checklist

You'll know it's working when:
- ✅ Website loads at http://localhost:3000
- ✅ You see Georgian text (ქართული)
- ✅ You can register a new account
- ✅ You can browse theaters (Atoneli, Haraki, Factory 42)
- ✅ You can write a review
- ✅ Profile shows your review count

---

## 🎁 The Promo Code System

Write reviews and earn rewards:
- **Review 1-4**: Building up...
- **Review 5**: 🎉 **Get 10% discount promo code!**
- **Review 6-9**: Building up...
- **Review 10**: 🎉 **Another promo code!**
- And so on...

Check your profile (ჩემი პროფილი) to see all your codes!

---

## 🚀 You're All Set!

That's it! Your Georgian theater review website is running.

**Current Setup:**
- ✅ Next.js 15 + TypeScript
- ✅ MongoDB database
- ✅ User authentication
- ✅ Review system
- ✅ Promo code rewards
- ✅ Georgian language
- ✅ 3 Theaters with plays

**Have fun reviewing Georgian theater! 🎭**

---

**Questions?** Check the other documentation files or the code comments.

**მოგესალმებით და გისურვებთ წარმატებას!** 🎉

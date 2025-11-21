# Quick Start Guide - Georgian Theater Reviews

## Before You Start

Make sure you have:
- **Node.js 18+** installed
- **MongoDB** installed and running (or MongoDB Atlas account)

## Step 1: Environment Setup

1. Update the `.env.local` file with your MongoDB connection string:

For **Local MongoDB**:
```env
MONGODB_URI=mongodb://localhost:27017/theater-reviews
NEXTAUTH_SECRET=change-this-to-a-random-secret-key
NEXTAUTH_URL=http://localhost:3000
```

For **MongoDB Atlas** (cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/theater-reviews?retryWrites=true&w=majority
NEXTAUTH_SECRET=change-this-to-a-random-secret-key
NEXTAUTH_URL=http://localhost:3000
```

⚠️ **Important**: Generate a secure secret for `NEXTAUTH_SECRET`. You can use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Step 2: Start MongoDB

### Windows (Local MongoDB):
```powershell
net start MongoDB
```

### macOS/Linux (Local MongoDB):
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### MongoDB Atlas (Cloud):
- No need to start anything, just make sure your connection string is correct in `.env.local`

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Seed Database (Optional)

Add initial theaters and plays data:

```bash
npm run seed
```

This will create:
- 3 Theaters: Atoneli, Haraki, Factory 42
- 3 Sample plays

## Step 5: Run Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

## Step 6: Create Your First Account

1. Go to http://localhost:3000
2. Click "რეგისტრაცია" (Register)
3. Fill in your details
4. Start writing reviews!

## Features to Test

### 1. Browse Theaters
- Click "თეატრები" in the navigation
- Explore Atoneli, Haraki, and Factory 42

### 2. Write Reviews
- Navigate to a play
- Click "დაწერე რეცენზია"
- Rate and review the play
- Submit your review

### 3. Earn Promo Codes
- Write 5 reviews
- Automatically receive a 10% discount promo code
- View your codes in your profile

### 4. Track Progress
- Click "ჩემი პროფილი" (My Profile)
- See your review count
- View all your promo codes
- Track progress to next reward

## Troubleshooting

### MongoDB Connection Error
- **Local**: Make sure MongoDB service is running
- **Atlas**: Check your IP is whitelisted in MongoDB Atlas

### Port 3000 Already in Use
```bash
# Find and kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill
```

### Cannot Find Module Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## Need Help?

- Check the main README.md for detailed documentation
- Review the code in the `app/` directory
- Check MongoDB connection in `.env.local`

---

**გაუმარჯოს! (Hello!)** Enjoy building your theater review website! 🎭

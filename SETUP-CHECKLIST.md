# Georgian Theater Reviews - Complete Setup Checklist ✅

## Project Overview
A Georgian-language theater review website featuring Atoneli, Haraki, and Factory 42 theaters. Users can write reviews and earn 10% discount promo codes after 5 reviews.

## ✅ What's Been Created

### Core Files & Structure
- ✅ Next.js 15 with TypeScript and Tailwind CSS
- ✅ MongoDB database with Mongoose ODM
- ✅ NextAuth.js authentication system
- ✅ Georgian language (Noto Sans Georgian font)

### Database Models
- ✅ User (with review count and promo codes)
- ✅ Theater (Atoneli, Haraki, Factory 42)
- ✅ Play (theater productions)
- ✅ Review (user reviews with ratings)
- ✅ PromoCode (10% discount codes)

### Pages Created
- ✅ Homepage with theater showcase
- ✅ Theaters listing page
- ✅ Individual theater pages
- ✅ Play detail pages with reviews
- ✅ Login/Register pages
- ✅ User profile page
- ✅ Review submission form

### Features Implemented
- ✅ User registration & login
- ✅ Write reviews (5-star rating)
- ✅ Automatic promo code generation (every 5 reviews)
- ✅ Review display with user info
- ✅ Progress tracking in profile
- ✅ One review per user per play
- ✅ Real-time average rating calculation

### API Routes
- ✅ `/api/auth/register` - User registration
- ✅ `/api/auth/[...nextauth]` - Authentication
- ✅ `/api/reviews` - Create and fetch reviews
- ✅ `/api/user/profile` - User profile data

## 🚀 Next Steps to Run

### 1. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition from mongodb.com
# Start the service
net start MongoDB  # Windows
```

**Option B: MongoDB Atlas (Recommended for beginners)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Get connection string
5. Update `.env.local`

### 2. Configure Environment

Edit `.env.local`:
```env
MONGODB_URI=your-mongodb-connection-string
NEXTAUTH_SECRET=generate-random-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 3. Install & Seed

```bash
npm install
npm run seed  # Optional: adds sample theaters and plays
```

### 4. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## 📝 Test Workflow

1. **Register a new account**
   - Click "რეგისტრაცია" (Register)
   - Create account with email/password

2. **Browse theaters**
   - Click "თეატრები" (Theaters)
   - Select a theater
   - Click on a play

3. **Write first review**
   - Click "დაწერე რეცენზია" (Write Review)
   - Rate 1-5 stars
   - Write title and content
   - Submit

4. **Write more reviews**
   - Review different plays
   - After 5th review, receive promo code!

5. **Check profile**
   - Click "ჩემი პროფილი" (My Profile)
   - View review count
   - See promo codes
   - Track progress to next reward

## 🎯 Key Features to Showcase

### Promo Code System
- Automatically generated after every 5 reviews
- Unique codes with format: `THEATER{count}{timestamp}`
- 10% discount
- 3-month expiration
- Displayed in profile

### Review System
- 5-star rating
- Title and detailed content
- User attribution
- Prevents duplicate reviews (1 per user per play)
- Updates play's average rating

### Georgian Language
- All UI text in Georgian
- Georgian fonts (Noto Sans Georgian)
- Date formatting in Georgian locale

## 📂 Key Files to Know

```
theater-reviews/
├── .env.local              # Your configuration (IMPORTANT!)
├── package.json            # Dependencies and scripts
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Main layout with Georgian font
│   ├── api/               # Backend API routes
│   ├── auth/              # Login/Register pages
│   ├── theaters/          # Theater pages
│   ├── plays/             # Play detail pages
│   └── profile/           # User profile
├── components/
│   ├── Header.tsx         # Navigation
│   └── ReviewForm.tsx     # Review submission
├── models/                # MongoDB schemas
└── lib/
    └── mongodb.ts         # Database connection
```

## 🔧 Common Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run seed       # Seed database with sample data
npm install        # Install dependencies
```

## 🎭 Theater Information

### თეატრი ატონელი (Atoneli)
- Contemporary theater
- Location: ტაბიძის 21, თბილისი

### თეატრი ხარაკი (Haraki)
- Avant-garde performances
- Location: შარტავას 5, თბილისი

### ქარხანა 42 (Factory 42)
- Cultural space & theater
- Location: აღმაშენებლის 42, თბილისი

## ⚠️ Important Notes

1. **MongoDB Required**: The app won't work without MongoDB connection
2. **Environment Variables**: Must set up `.env.local` correctly
3. **NextAuth Secret**: Generate a secure random string
4. **Port 3000**: Make sure it's available

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Homepage loads with Georgian text
- ✅ Can register and login
- ✅ Can browse theaters and plays
- ✅ Can write and see reviews
- ✅ Profile shows review count
- ✅ Receive promo code after 5 reviews

---

**მოგესალმებით თეატრის რეცენზიების პლატფორმაზე!** 🎭

Need help? Check:
- README.md for full documentation
- QUICKSTART.md for step-by-step setup
- MongoDB connection troubleshooting

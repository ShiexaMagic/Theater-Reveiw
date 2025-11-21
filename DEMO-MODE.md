# 🎭 DEMO MODE - Quick Login

## Demo User Credentials

**For quick demonstration without MongoDB:**

```
Email: jeff@demo.com
Password: demo123
Name: Jeff Temo
```

## How to Use Demo Mode

### 1. **Homepage**
- Visit http://localhost:3000
- You'll see a green banner with demo credentials at the top

### 2. **Quick Login**
- Click "შესვლა" (Sign In) button in top right
- You'll see a blue demo banner
- Click "შედით როგორც Jeff Temo" button
- OR manually enter:
  - Email: `jeff@demo.com`
  - Password: `demo123`

### 3. **What Works in Demo Mode**

✅ **Working Features:**
- Login as Jeff Temo
- Browse theaters and plays
- View profile page
- See demo statistics (3 reviews written)
- See demo promo code (THEATER2024DEMO - 10% off)
- Navigate all pages

❌ **Limited Features (Requires MongoDB):**
- Writing new reviews
- Creating new accounts
- Updating real data

## Demo User Profile

When logged in as Jeff Temo, you'll see:
- **Review Count**: 3 reviews
- **Promo Codes**: 1 active code
  - Code: `THEATER2024DEMO`
  - Discount: 10%
  - Status: Active
  - Expires: 90 days from now
- **Progress**: 2 more reviews until next promo code

## Quick Demo Workflow

1. **Start**: Open http://localhost:3000
2. **See Demo Notice**: Green banner shows credentials
3. **Click "შესვლა"**: Top right corner
4. **Quick Login**: Click the blue demo button
5. **Explore**: 
   - Click "ჩემი პროფილი" (My Profile) - see stats
   - Click "თეატრები" (Theaters) - browse theaters
   - Click on any play - see play details
6. **Show Features**:
   - Profile shows 3 reviews and 1 promo code
   - Progress bar shows 2 more reviews needed
   - Georgian language throughout

## Why Demo Mode?

Demo mode allows you to:
- **Present the website** without MongoDB setup
- **Show all UI features** and Georgian language
- **Demonstrate the flow** from login to profile
- **Display promo code system** without writing 5 reviews

## To Enable Full Features

To use all features (writing reviews, registration):
1. Set up MongoDB (see START-HERE.md)
2. Update `.env.local` with MongoDB connection
3. Restart server
4. Demo user will still work, plus full functionality

---

**Quick Login:** jeff@demo.com / demo123 🎭

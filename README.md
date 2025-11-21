# Georgian Theater Reviews Website 🎭

A full-stack web application for writing and reading reviews of Georgian theater performances, similar to Goodreads or Letterboxd but specifically for theater in Georgia.

## Features ✨

- **Georgian Language Support**: Entire website in Georgian (ქართული)
- **Theater Coverage**: Atoneli, Haraki, Factory 42
- **User Authentication**: Login and registration system
- **Review System**: Write and read reviews for theater plays
- **Rating System**: 5-star rating for performances
- **Promo Code Rewards**: Get 10% discount promo code after writing 5 reviews
- **User Profile**: Track your reviews and promo codes

## Tech Stack 🛠️

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Font**: Noto Sans Georgian

## Getting Started 🚀

### Prerequisites

- Node.js 18+ installed
- MongoDB installed and running locally, or MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
cd theater-reviews
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
MONGODB_URI=mongodb://localhost:27017/theater-reviews
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. (Optional) Seed the database with initial data:
```bash
npm run seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup 💾

### Option 1: Local MongoDB
Install MongoDB locally and start the service:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### Option 2: MongoDB Atlas
1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env.local`

## Usage 📖

### For Users:
1. **Register**: Create an account with email and password
2. **Browse**: Explore theaters and plays
3. **Review**: Write reviews for plays you've seen
4. **Earn Rewards**: Get 10% discount code after 5 reviews
5. **Track Progress**: View your reviews and promo codes in your profile

### For Developers:
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Seed database
npm run seed
```

## Project Structure 📁

```
theater-reviews/
├── app/                      # Next.js app router pages
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── reviews/        # Review endpoints
│   │   └── user/           # User profile endpoints
│   ├── auth/               # Auth pages (signin, signup)
│   ├── theaters/           # Theater pages
│   ├── plays/              # Play detail pages
│   ├── profile/            # User profile page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Providers.tsx       # Session provider
│   └── ReviewForm.tsx      # Review submission form
├── models/                  # Mongoose models
│   ├── User.ts
│   ├── Theater.ts
│   ├── Play.ts
│   ├── Review.ts
│   └── PromoCode.ts
├── lib/                     # Utility functions
│   └── mongodb.ts          # Database connection
├── scripts/                 # Utility scripts
│   └── seed.ts             # Database seeding
└── types/                   # TypeScript types
```

## Features Details 🎯

### Promo Code System
- Users earn a 10% discount promo code after writing 5 reviews
- Codes are unique and have a 3-month expiration
- Track progress in user profile
- View all earned codes in profile page

### Review System
- One review per user per play
- 5-star rating system
- Title and detailed content
- Display user name and date
- Real-time updates

### Theaters Included
1. **თეატრი ატონელი (Atoneli Theater)** - Contemporary theater
2. **თეატრი ხარაკი (Haraki Theater)** - Avant-garde performances
3. **ქარხანა 42 (Factory 42)** - Cultural space and theater

## Contributing 🤝

This is a personal project, but suggestions and feedback are welcome!

## License 📄

This project is for educational and demonstration purposes.

## Contact 📧

For questions or feedback, please open an issue in the repository.

---

**მოგესალმებით თეატრის რეცენზიების პლატფორმაზე!** 🎭

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('გთხოვთ შეიყვანოთ ელ.ფოსტა და პაროლი');
        }

        // Demo user for Jeff Temo (works without MongoDB)
        if (credentials.email === 'jeff@demo.com' && credentials.password === 'demo123') {
          return {
            id: 'demo-user-123',
            email: 'jeff@demo.com',
            name: 'Jeff Temo',
          };
        }

        try {
          await dbConnect();
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error('მომხმარებელი არ მოიძებნა');
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error('არასწორი პაროლი');
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error: any) {
          // If MongoDB is not connected, only allow demo user
          if (error.message?.includes('MongooseServerSelectionError')) {
            throw new Error('მონაცემთა ბაზა არ არის ხელმისაწვდომი. გამოიყენეთ დემო მომხმარებელი.');
          }
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-development-only-change-in-production',
  debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST };

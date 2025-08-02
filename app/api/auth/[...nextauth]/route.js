import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment.model';
import connectDB from '@/db/connectDb';



export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectDB();

      const currentUser = await User.findOne({ email: user.email });

      if (!currentUser) {
        await User.create({
          email: user.email,
          username: user.email.split('@')[0],
          name: user.name,
        });
      }

      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@gmail.com');
      }

      return true;
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser?.username || session.user.name;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
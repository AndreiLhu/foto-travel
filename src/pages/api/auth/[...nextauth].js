import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../../lib/mongodb.js';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          // This ID is required but it will not be saved in your users collection
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,

          // You can add any other properties you want to the user object
          admin: false,
          preferedColors: ['#dddddd', '#ffffff'],
        };
      },
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    async session({ session, user }) {
      session.user.userId = user._id;
      return session;
    },
  },
};

export default NextAuth(authOptions);

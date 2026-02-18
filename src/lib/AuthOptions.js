import { credentialsProvider, } from "./Provider/AuthProvider/AuthProvider";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

  providers: [
    credentialsProvider,
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],


  callbacks: {
    async signIn() {
      return true
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.userId = token.userId;
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.userId = user._id;
      }
      return token
    }

  }
}

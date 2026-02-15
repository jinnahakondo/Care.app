import { credentialsProvider } from "./Provider/AuthProvider/AuthProvider";



export const authOptions = {

  providers: [
    credentialsProvider
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
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user}) {
      if (user) {
        token.role = user.role
      }
      return token
    }

  }
}

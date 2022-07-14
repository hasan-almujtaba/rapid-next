import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

/**
 * Next auth options
 * @see https://next-auth.js.org/configuration/initialization
 */
export const authOptions: NextAuthOptions = {
  /**
   * Provider configuration
   * @see https://next-auth.js.org/configuration/providers/oauth
   * @see https://next-auth.js.org/providers/google
   */
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  /**
   * Callback configuration
   * @see https://next-auth.js.org/configuration/callbacks
   */
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub || ''

      return session
    },
  },
}

export default NextAuth(authOptions)

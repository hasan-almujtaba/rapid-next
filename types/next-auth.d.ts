import { DefaultSession } from 'next-auth'

/**
 * Extend next auth typing
 * @see https://next-auth.js.org/getting-started/typescript
 */
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's unique id from provider. */
      id: string
    } & DefaultSession['user']
  }
}

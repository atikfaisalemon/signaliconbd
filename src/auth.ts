import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              phone: credentials.phone as string,
            },
          });
          if (!user) {
            throw new Error("User not found");
          }
          return user ?? null;
        } catch (error) {
          throw new Error("Invalid phone number");
        }
      },
    }),
  ],
});

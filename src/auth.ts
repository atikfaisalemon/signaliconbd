import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        usernameOrPhone: {
          label: "Username Or Phone",
          type: "text",
        },
      },
      authorize: async (credentials) => {
        let user = null;
        console.log("credentials", credentials);

        user = await prisma.user.findFirst({
          where: {
            OR: [
              {
                username: credentials.usernameOrPhone as string,
              },
              {
                phone: credentials.usernameOrPhone as string,
              },
            ],
          },
        });
        console.log("User", user);

        if (!user) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
});

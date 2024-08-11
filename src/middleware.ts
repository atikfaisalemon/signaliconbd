import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "./lib/routes";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

// const { auth } = NextAuth(authConfig);

// export default auth((req: NextRequest) => {
//   const { nextUrl } = req;

//   const isAuthenticated = !!req.auth;
//   const path = req.nextUrl.pathname;
//   const isPublicRoute = PUBLIC_ROUTES.includes(path);

//   if (isPublicRoute && isAuthenticated)
//     return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

//   if (!isAuthenticated && !isPublicRoute)
//     return Response.redirect(new URL(ROOT, nextUrl));
// });

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

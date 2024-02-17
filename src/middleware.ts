import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/trpc/post.getById",
    "/api/trpc/post.getAll",
    "/api/trpc/post.getPostByUserId",
    "/api/trpc/profile.getUserByUsername",
  ],
  afterAuth: () => {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};
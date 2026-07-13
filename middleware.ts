import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/:path*"],
};

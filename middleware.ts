import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

  // If accessing auth pages without token
  if (isAuthPage && !token) {
    return NextResponse.next();
  }

  // If accessing auth pages with token
  if (isAuthPage && token) {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If accessing admin pages without token
  if (isAdminPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If accessing admin pages with user token
  if (isAdminPage && token && role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If accessing regular pages without token
  if (!isAdminPage && !isAuthPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

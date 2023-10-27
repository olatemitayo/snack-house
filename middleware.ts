import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/cart/information", "/cart/payment", "/cart/shipping", "/profile"],
};

export function middleware(req: NextRequest) {
  // Retrieve the user token from cookies
  const userToken = req.cookies.get("sh_auth")?.value as string;

  //check if your user token exists
  if (userToken) {
    //parse the user token to access its properties
    const auth = JSON.parse(userToken);

    //check if the 'token' property exists in 'auth'
    if (auth && auth.access) {
      //user is authenticated, allow access ti the protected route
      return null;
    }
  }
  // User is not authenticated, check if the current route is in the matcher
  const currentRoute = req.nextUrl.pathname;
  if (config.matcher.includes(currentRoute)) {
    // Redirect to the home page for unauthorized access to protected routes
    return NextResponse.redirect(new URL("/login", req.url).toString());
  }
  // For non-protected routes, allow access
  return null;
}

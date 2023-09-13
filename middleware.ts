import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  console.log(req.cookies.get("sh_auth"));
  return NextResponse.next();
};

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};

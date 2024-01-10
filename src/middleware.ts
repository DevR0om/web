import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n";
import { getLocale } from "./utils/getLocale";
import pageError from "./utils/pageError";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const url = request.nextUrl.href;
  const error404 = await pageError(url);

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
   else if (error404) {
    return NextResponse.redirect(`http://localhost:3000/`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

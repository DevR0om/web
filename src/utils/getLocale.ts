import type { NextRequest } from "next/server";
import { i18n } from "../../i18n";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

export function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  
    const locales: string[] = i18n.locales;
  
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
      locales
    );
  
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
  
    return locale;
  }
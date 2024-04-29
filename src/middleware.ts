import createIntlMiddleware from 'next-intl/middleware';

import type { NextRequest } from 'next/server';

import { LOCALES, intlProps } from './services';

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!_next|_vercel|favicon.ico|.*\\..*).*)'
  ]
};
// '/((?!api|_next/static|_next/image|images|favicon.ico).*)'

export default async function middleware(req: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    ...intlProps,
    defaultLocale: LOCALES[0]
  });

  const response = handleI18nRouting(req);

  return response;
}

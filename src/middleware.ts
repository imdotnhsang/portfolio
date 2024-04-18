import createIntlMiddleware from 'next-intl/middleware';

import type { NextRequest } from 'next/server';

import { LOCALES } from './services';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
};

export default async function middleware(req: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: LOCALES,
    defaultLocale: LOCALES[0]
  });

  const response = handleI18nRouting(req);

  return response;
}

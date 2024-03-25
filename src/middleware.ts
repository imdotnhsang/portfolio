import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export default createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|vi)/:path*']
};

export function middleware(req: NextRequest) {
  req.nextUrl.pathname = '/vi/coming-soon';
  return NextResponse.rewrite(req.nextUrl);
}

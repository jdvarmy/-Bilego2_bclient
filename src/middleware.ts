import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { AvailableCities } from '@/screens/City/City';

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === '/') {
    // todo: добавить геолокацию по городу
    return NextResponse.redirect(new URL(`/${AvailableCities.spb}`, request.url), 302);
  }
}

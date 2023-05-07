import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { AvailableCities } from '@/application/screens/City/enums';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === '/') {
    // todo: добавить геолокацию по городу
    return NextResponse.redirect(new URL(`/${AvailableCities.spb}`, request.url), 302);
  }
}

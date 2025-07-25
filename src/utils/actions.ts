'use server';

import { cookies } from 'next/headers';

export async function setLocale(locale: Locale) {
  const currentCookies = await cookies();
  currentCookies.set('locale', locale, { path: '/' });
}

export async function getLocale(): Promise<Locale> {
  const currentCookies = await cookies();
  return (currentCookies.get('locale')?.value || 'en') as Locale;
}

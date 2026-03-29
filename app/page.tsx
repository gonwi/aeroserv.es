import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const spanishSpeakingCountries = new Set([
  'AR',
  'BO',
  'CL',
  'CO',
  'EC',
  'ES',
  'PE',
  'PY',
  'UY',
  'VE',
]);

export default async function Page() {
  const requestHeaders = await headers();
  const country =
    requestHeaders.get('x-vercel-ip-country') ??
    requestHeaders.get('cf-ipcountry') ??
    requestHeaders.get('x-country-code');
  const acceptLanguage = requestHeaders.get('accept-language') ?? '';

  const locale = country && spanishSpeakingCountries.has(country.toUpperCase())
    ? 'es'
    : acceptLanguage.toLowerCase().includes('es')
      ? 'es'
      : 'en';

  redirect(`/${locale}`);
}

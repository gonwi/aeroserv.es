import { LegalPage } from '@/components/legal-page';
import { type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'cookies');
}

export default async function CookiesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <LegalPage page="cookies" lang={lang} />;
}

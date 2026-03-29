import { LegalPage } from '@/components/legal-page';
import { type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'privacy');
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <LegalPage page="privacy" lang={lang} />;
}

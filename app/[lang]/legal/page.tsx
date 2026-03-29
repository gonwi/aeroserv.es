import { LegalPage } from '@/components/legal-page';
import { type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'legal');
}

export default async function LegalNoticePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <LegalPage page="legal" lang={lang} />;
}

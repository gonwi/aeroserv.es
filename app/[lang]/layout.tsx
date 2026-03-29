import { notFound } from 'next/navigation';
import { languages, type Lang } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  if (!languages.includes(lang)) notFound();

  return (
    <>
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </>
  );
}

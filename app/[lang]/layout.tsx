import { notFound } from 'next/navigation';
import { languages, type Lang } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ScrollReset } from '@/components/scroll-reset';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.some((item) => item === lang)) notFound();
  const currentLang = lang as Lang;

  return (
    <>
      <ScrollReset />
      <SiteHeader lang={currentLang} />
      <main>{children}</main>
      <SiteFooter lang={currentLang} />
    </>
  );
}

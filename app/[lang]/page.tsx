import { Hero, ServicesPreview, StoryBlock, Facilities, ClientStrip, QualitySection, ContactCta } from '@/components/sections';
import { type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'home');
}

export default async function HomePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;

  return (
    <>
      <Hero lang={lang} />
      <ServicesPreview lang={lang} />
      <StoryBlock lang={lang} />
      <Facilities lang={lang} />
      <ClientStrip lang={lang} />
      <QualitySection lang={lang} />
      <ContactCta lang={lang} />
    </>
  );
}

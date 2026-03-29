import type { Lang } from '@/lib/i18n';
import { generateOgImage, ogImageContentType, ogImageSize } from '@/lib/og';

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return generateOgImage(lang, 'about');
}

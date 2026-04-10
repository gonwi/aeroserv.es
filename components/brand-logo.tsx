import Image from 'next/image';
import Link from 'next/link';
import { type Lang } from '@/lib/i18n';

type BrandLogoProps = {
  lang: Lang;
  priority?: boolean;
};

export function BrandLogo({ lang, priority = false }: BrandLogoProps) {
  return (
    <Link href={`/${lang}`} className="brand-link" aria-label="Aeroserv">
      <Image src="/aeroserv-new-logo-color.png" alt="Aeroserv" width={168} height={56} priority={priority} className="theme-logo theme-logo--light" />
      <Image src="/Aeroserv_new_logo_BLANCO.png" alt="Aeroserv" width={168} height={56} priority={priority} className="theme-logo theme-logo--dark" />
    </Link>
  );
}

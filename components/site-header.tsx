import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, type Lang } from '@/lib/i18n';
import { LanguageSwitcher } from './language-switcher';

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, backdropFilter: 'blur(14px)', background: 'rgba(4,11,20,0.74)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 84, gap: 16, flexWrap: 'wrap', paddingBlock: 10 }}>
        <Link href={`/${lang}`} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Image src="/logo-aeroserv.png" alt="Aeroserv" width={164} height={58} priority />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <Link href={`/${lang}`} style={{ color: '#f8fbff', fontWeight: 700 }}>{t.nav.home}</Link>
          <Link href={`/${lang}/servicios`} style={{ color: '#dbe4ef' }}>{t.nav.services}</Link>
          <Link href={`/${lang}/sobre-nosotros`} style={{ color: '#dbe4ef' }}>{t.nav.about}</Link>
          <Link href={`/${lang}/contacto`} style={{ color: '#dbe4ef' }}>{t.nav.contact}</Link>
          <LanguageSwitcher currentLang={lang} label={t.switcherLabel} />
        </nav>
      </div>
    </header>
  );
}

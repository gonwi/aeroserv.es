'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n';

export function LanguageSwitcher({ currentLang, label }: { currentLang: Lang; label: string }) {
  const pathname = usePathname();
  const pathFor = (nextLang: Lang) => {
    const parts = pathname.split('/');
    parts[1] = nextLang;
    return parts.join('/') || `/${nextLang}`;
  };

  return (
    <div className="lang-switcher" aria-label={label} role="group">
      <Link href={pathFor('es')} className={`lang-switcher__item ${currentLang === 'es' ? 'is-active' : ''}`} aria-current={currentLang === 'es' ? 'page' : undefined}>
        <span aria-hidden="true">🇪🇸</span>
        <span>ES</span>
      </Link>
      <Link href={pathFor('en')} className={`lang-switcher__item ${currentLang === 'en' ? 'is-active' : ''}`} aria-current={currentLang === 'en' ? 'page' : undefined}>
        <span aria-hidden="true">🇬🇧</span>
        <span>EN</span>
      </Link>
    </div>
  );
}

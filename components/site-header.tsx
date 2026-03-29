'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getDictionary, type Lang } from '@/lib/i18n';
import { BrandLogo } from './brand-logo';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (href: string) => pathname === href || (href !== `/${lang}` && pathname.startsWith(`${href}/`));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__frame">
          <div className="site-header__inner">
            <BrandLogo lang={lang} priority />

            <nav className="site-nav site-nav--desktop" aria-label="Primary">
              <Link href={`/${lang}`} className={`site-nav__link ${isActive(`/${lang}`) ? 'site-nav__link--active' : ''}`} aria-current={isActive(`/${lang}`) ? 'page' : undefined}>{t.nav.home}</Link>
              <Link href={`/${lang}/servicios`} className={`site-nav__link ${isActive(`/${lang}/servicios`) ? 'site-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/servicios`) ? 'page' : undefined}>{t.nav.services}</Link>
              <Link href={`/${lang}/sobre-nosotros`} className={`site-nav__link ${isActive(`/${lang}/sobre-nosotros`) ? 'site-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/sobre-nosotros`) ? 'page' : undefined}>{t.nav.about}</Link>
              <Link href={`/${lang}/contacto`} className={`site-nav__link ${isActive(`/${lang}/contacto`) ? 'site-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/contacto`) ? 'page' : undefined}>{t.nav.contact}</Link>
            </nav>

            <div className="site-header__actions">
              <div className="site-header__tools site-header__tools--desktop">
                <ThemeToggle />
                <LanguageSwitcher currentLang={lang} label={t.switcherLabel} />
              </div>
              <button
                type="button"
                className="mobile-nav-toggle"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
                aria-label={isOpen ? 'Cerrar navegación' : 'Abrir navegación'}
                onClick={() => setIsOpen((open) => !open)}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-nav-panel" className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
        <div className="container">
          <nav className="mobile-nav__panel" aria-label="Mobile">
            <div className="mobile-nav__links">
              <Link href={`/${lang}`} className={`mobile-nav__link ${isActive(`/${lang}`) ? 'mobile-nav__link--active' : ''}`} aria-current={isActive(`/${lang}`) ? 'page' : undefined}>{t.nav.home}</Link>
              <Link href={`/${lang}/servicios`} className={`mobile-nav__link ${isActive(`/${lang}/servicios`) ? 'mobile-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/servicios`) ? 'page' : undefined}>{t.nav.services}</Link>
              <Link href={`/${lang}/sobre-nosotros`} className={`mobile-nav__link ${isActive(`/${lang}/sobre-nosotros`) ? 'mobile-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/sobre-nosotros`) ? 'page' : undefined}>{t.nav.about}</Link>
              <Link href={`/${lang}/contacto`} className={`mobile-nav__link ${isActive(`/${lang}/contacto`) ? 'mobile-nav__link--active' : ''}`} aria-current={isActive(`/${lang}/contacto`) ? 'page' : undefined}>{t.nav.contact}</Link>
            </div>
            <div className="mobile-nav__tools">
              <ThemeToggle />
              <LanguageSwitcher currentLang={lang} label={t.switcherLabel} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

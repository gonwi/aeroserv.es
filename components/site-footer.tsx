import Link from 'next/link';
import { company, getDictionary, type Lang } from '@/lib/i18n';
import { BrandLogo } from './brand-logo';

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__panel card">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <div className="site-footer__eyebrow">Aeroserv Puerto Real</div>
              <BrandLogo lang={lang} />
              <p className="site-footer__tagline">{t.footer.tagline}</p>
            </div>

            <div className="site-footer__column">
              <h2 className="site-footer__title">{t.footer.contactTitle}</h2>
              <div className="site-footer__list">
                <div className="site-footer__item">
                  <span className="site-footer__label">{t.footer.addressLabel}</span>
                  <span className="site-footer__value">{company.address}</span>
                </div>
                <div className="site-footer__item">
                  <span className="site-footer__label">{t.footer.phoneLabel}</span>
                  <a className="site-footer__value site-footer__value--link" href={`tel:${company.phone.replace(/\s+/g, '')}`}>
                    {company.phone}
                  </a>
                </div>
                <div className="site-footer__item">
                  <span className="site-footer__label">{t.footer.salesPhoneLabel}</span>
                  <a className="site-footer__value site-footer__value--link" href={`tel:${company.salesPhone.replace(/\s+/g, '')}`}>
                    {company.salesPhone}
                  </a>
                </div>
                <div className="site-footer__item">
                  <span className="site-footer__label">{t.footer.emailLabel}</span>
                  <a className="site-footer__value site-footer__value--link" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="site-footer__column">
              <h2 className="site-footer__title">{t.footer.legalTitle}</h2>
              <nav className="site-footer__list" aria-label={t.footer.legalTitle}>
                <Link className="site-footer__legal-link" href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
                <Link className="site-footer__legal-link" href={`/${lang}/legal`}>{t.footer.legal}</Link>
                <Link className="site-footer__legal-link" href={`/${lang}/cookies`}>{t.footer.cookies}</Link>
              </nav>
            </div>
          </div>

          <div className="site-footer__bar">
            <p>© {year} Aeroserv Puerto Real SL. {t.footer.rights}</p>
            <p>{t.footer.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { company, getDictionary, type Lang } from '@/lib/i18n';
import { BrandLogo } from './brand-logo';

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <BrandLogo lang={lang} />
          <p style={{ color: 'var(--muted)', maxWidth: 420, lineHeight: 1.7, marginTop: 16 }}>
            Aeroserv · Servicios aeronáuticos y logística industrial.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Contacto</div>
          <div style={{ color: 'var(--muted)', lineHeight: 1.8 }}>{company.address}</div>
          <div style={{ color: 'var(--muted)' }}>{company.phone}</div>
          <div style={{ color: 'var(--muted)' }}>{company.email}</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Legal</div>
          <div style={{ display: 'grid', gap: 10, color: 'var(--text)' }}>
            <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
            <Link href={`/${lang}/legal`}>{t.footer.legal}</Link>
            <Link href={`/${lang}/cookies`}>{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

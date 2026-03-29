import Link from 'next/link';
import Image from 'next/image';
import { company, getDictionary, type Lang } from '@/lib/i18n';

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '32px 0 52px', marginTop: 40 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 24 }}>
        <div>
          <Image src="/logo-aeroserv.png" alt="Aeroserv" width={160} height={56} />
          <p style={{ color: '#9fb0c3', maxWidth: 420, lineHeight: 1.7, marginTop: 16 }}>
            Aeroserv · Servicios aeronáuticos y logística industrial.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Contacto</div>
          <div style={{ color: '#9fb0c3', lineHeight: 1.8 }}>{company.address}</div>
          <div style={{ color: '#9fb0c3' }}>{company.phone}</div>
          <div style={{ color: '#9fb0c3' }}>{company.email}</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Legal</div>
          <div style={{ display: 'grid', gap: 10, color: '#dbe4ef' }}>
            <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
            <Link href={`/${lang}/legal`}>{t.footer.legal}</Link>
            <Link href={`/${lang}/cookies`}>{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

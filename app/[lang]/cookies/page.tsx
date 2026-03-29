import { type Lang } from '@/lib/i18n';

export default async function CookiesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const title = lang === 'es' ? 'Política de cookies' : 'Cookie policy';
  const text = lang === 'es'
    ? 'Sustituye este contenido por la versión jurídica definitiva de la política de cookies antes de publicar.'
    : 'Replace this content with the final cookie policy before publishing.';

  return (
    <section className="section">
      <div className="container card" style={{ padding: 32 }}>
        <div className="eyebrow">AEROSERV</div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', margin: '14px 0 10px' }}>{title}</h1>
        <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>{text}</p>
      </div>
    </section>
  );
}

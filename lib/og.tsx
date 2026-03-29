import { ImageResponse } from 'next/og';
import type { Lang } from '@/lib/i18n';
import { getPageSeoEntry, type PageKey } from '@/lib/seo';

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = 'image/png';

const heroImage = new URL('../public/home/home-hero.jpg', import.meta.url).toString();

export function generateOgImage(lang: Lang, page: PageKey) {
  const entry = getPageSeoEntry(lang, page);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#071421',
          color: 'white',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <img
          src={heroImage}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(7,18,31,0.94) 0%, rgba(7,18,31,0.86) 40%, rgba(7,18,31,0.52) 70%, rgba(7,18,31,0.22) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(220,235,250,0.24), transparent 26%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '54px 56px 42px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 760 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  padding: '10px 16px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#E7EEF6',
                  fontSize: 18,
                  letterSpacing: 3.6,
                  textTransform: 'uppercase',
                }}
              >
                {lang === 'es' ? 'Servicios aeronáuticos y logística industrial' : 'Aeronautical services and industrial logistics'}
              </div>
              <div
                style={{
                  display: 'flex',
                  padding: '10px 14px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(231,238,246,0.84)',
                  fontSize: 18,
                  letterSpacing: 2.8,
                  textTransform: 'uppercase',
                }}
              >
                {lang.toUpperCase()}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 74,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: -3.2,
                  maxWidth: 860,
                }}
              >
                {entry.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  maxWidth: 820,
                  color: 'rgba(255,255,255,0.84)',
                  fontSize: 28,
                  lineHeight: 1.38,
                }}
              >
                {entry.description}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: '18px 22px',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ display: 'flex', fontSize: 18, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(231,238,246,0.72)' }}>
                aeroserv.es
              </div>
              <div style={{ display: 'flex', fontSize: 22, color: '#FFFFFF' }}>
                {lang === 'es' ? 'Soporte industrial para fabricantes aeronáuticos' : 'Industrial support for aerospace manufacturers'}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-end',
              }}
            >
              <div style={{ display: 'flex', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(231,238,246,0.7)' }}>
                Aeroserv
              </div>
              <div style={{ display: 'flex', fontSize: 26, fontWeight: 700 }}>
                EN9100 / ISO 9001
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}

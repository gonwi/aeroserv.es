import type { CSSProperties } from 'react';
import { company, getDictionary, type Lang } from '@/lib/i18n';

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 24 }}>
        <div className="card" style={{ padding: 30 }}>
          <div className="eyebrow">AEROSERV</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', margin: '14px 0 10px' }}>{t.contact.title}</h1>
          <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>{t.contact.intro}</p>
          <div style={{ display: 'grid', gap: 14, marginTop: 24, color: '#dce6f2' }}>
            <div><strong>Ubicación:</strong><br />{company.address}</div>
            <div><strong>Teléfono central:</strong><br />{company.phone}</div>
            <div><strong>Teléfono comercial:</strong><br />{company.salesPhone}</div>
            <div><strong>Email:</strong><br />{company.email}<br />{company.secondaryEmail}</div>
          </div>
        </div>
        <div className="card" style={{ padding: 30 }}>
          <h2 style={{ marginTop: 0 }}>Formulario de contacto</h2>
          <p style={{ color: '#aebdd0', lineHeight: 1.7 }}>{t.contact.formNote}</p>
          <div style={{ display: 'grid', gap: 14, marginTop: 20 }}>
            {['Nombre', 'Empresa', 'Email', 'Mensaje'].map((field, idx) => (
              idx === 3 ? (
                <textarea key={field} placeholder={field} rows={6} style={fieldStyle} />
              ) : (
                <input key={field} placeholder={field} style={fieldStyle} />
              )
            ))}
            <button className="button-primary" style={{ border: 'none', cursor: 'pointer', width: 'fit-content' }}>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldStyle: CSSProperties = {
  width: '100%',
  borderRadius: 18,
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.03)',
  color: 'white',
  padding: '14px 16px',
  outline: 'none',
};

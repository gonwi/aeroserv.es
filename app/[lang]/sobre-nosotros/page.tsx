import { getDictionary, type Lang } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const milestones = [
    '2004 · Fundación y primer contrato logístico',
    '2007 · Primer contrato de servicios',
    '2009 · Primer contrato de montaje',
    '2016 · Soporte en FAL con un Tier One',
    '2019 · Soporte en línea final con Airbus',
    '2025 · Nueva visión empresarial',
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <div className="eyebrow">AEROSERV</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 4rem)', margin: '14px 0 10px' }}>{t.about.title}</h1>
          <p style={{ color: '#aebdd0', lineHeight: 1.8, maxWidth: 900 }}>{t.about.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="card" style={{ padding: 28 }}>
            <h2 style={{ marginTop: 0 }}>Nuestra historia</h2>
            <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>
              Aeroserv es una empresa fundada en 2004 con sede en Puerto Real, presencia en Sevilla y Madrid y capacidad industrial complementaria en El Puerto de Santa María.
            </p>
            <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
              {milestones.map((item) => (
                <div key={item} style={{ padding: 14, borderRadius: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>{item}</div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <h2 style={{ marginTop: 0 }}>Capacidad operativa</h2>
            <ul style={{ margin: 0, paddingLeft: 18, color: '#dce6f2', lineHeight: 1.9 }}>
              <li>Más de 70 personas de alta especialización técnica.</li>
              <li>Equipo estructurado para producción, calidad, RRHH, montaje, utillaje y herramientas.</li>
              <li>Seguimiento mensual de proveedores y control de no conformidades.</li>
              <li>Aplicación Odoo a medida y evolución a ERP modernizado.</li>
              <li>Experiencia con AIRBUS, AIRBUS DS, ALESTIS y otros proveedores del ecosistema aeronáutico.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

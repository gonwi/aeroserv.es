import { Cog, Droplets, Factory, Package, Truck, Wrench } from 'lucide-react';
import { getDictionary, services, type Lang } from '@/lib/i18n';

const icons = [Wrench, Factory, Cog, Droplets, Package, Truck];

export default async function ServicesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <div className="eyebrow">AEROSERV</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 4rem)', margin: '14px 0 10px' }}>{t.services.title}</h1>
          <p style={{ color: '#aebdd0', lineHeight: 1.8, maxWidth: 860 }}>{t.services.intro}</p>
        </div>

        <div className="grid-auto">
          {services[lang].map((service, index) => {
            const Icon = icons[index] ?? Cog;
            return (
              <article key={service.title} className="card" style={{ padding: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Icon size={24} />
                </div>
                <h2 style={{ fontSize: 24, margin: '18px 0 10px' }}>{service.title}</h2>
                <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="card" style={{ padding: 30, marginTop: 24 }}>
          <h2 style={{ marginTop: 0 }}>Soporte adicional</h2>
          <div className="grid-auto">
            {[
              'Sistema FOD control',
              'Soporte industrial',
              'Soporte I+D+I',
              'Gestión documental y trazabilidad',
            ].map((item) => (
              <div key={item} style={{ padding: 18, borderRadius: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

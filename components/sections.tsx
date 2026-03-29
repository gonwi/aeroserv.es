import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, MapPin, ShieldCheck, Wrench, Package, Truck, Droplets, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clients, company, getDictionary, services, stats, type Lang } from '@/lib/i18n';

const serviceIcons = [Wrench, Factory, Cog, Droplets, Package, Truck];

export function Hero({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24, alignItems: 'stretch' }}>
        <div className="card" style={{ padding: 32 }}>
          <div className="eyebrow">{t.hero.eyebrow}</div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.7rem)', lineHeight: 1, margin: '18px 0 18px', maxWidth: 760 }}>
            {t.hero.title}
          </h1>
          <p style={{ color: '#b8c5d5', fontSize: 18, lineHeight: 1.7, maxWidth: 720 }}>{t.hero.description}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Button href={`/${lang}/contacto`}>{t.hero.primary}</Button>
            <Button href={`/${lang}/servicios`} variant="secondary">{t.hero.secondary}</Button>
          </div>
        </div>
        <div className="card" style={{ padding: 24, display: 'grid', gap: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Capacidad industrial</div>
          <div className="grid-auto">
            {stats[lang].map((stat) => (
              <div key={stat.label} style={{ padding: 18, borderRadius: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ color: '#aebdd0', fontSize: 13 }}>{stat.label}</div>
                <div style={{ fontWeight: 800, fontSize: 28, marginTop: 6 }}>{stat.value}</div>
              </div>
            ))}
          </div>
          <div style={{ color: '#aebdd0', lineHeight: 1.7 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}><MapPin size={18} /> {company.address}</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><ShieldCheck size={18} /> EN9100 · ISO 9001 · procesos especiales</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{ marginBottom: 22 }}>
          <div className="eyebrow">AEROSERV</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', margin: '12px 0 8px' }}>{t.home.servicesTitle}</h2>
        </div>
        <div className="grid-auto">
          {services[lang].map((service, index) => {
            const Icon = serviceIcons[index] ?? Cog;
            return (
              <article key={service.title} className="card" style={{ padding: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: 22, margin: '18px 0 10px' }}>{service.title}</h3>
                <p style={{ color: '#aebdd0', lineHeight: 1.7 }}>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StoryBlock({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="card" style={{ padding: 28 }}>
          <div className="eyebrow">{t.home.expansionTitle}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', margin: '12px 0 16px' }}>{t.home.expansionTitle}</h2>
          <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>{t.home.expansionText}</p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 20, display: 'grid', gap: 12 }}>
            {['Puerto Real', 'El Puerto de Santa María', 'Sevilla', 'Madrid'].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <CheckCircle2 size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ padding: 28 }}>
          <div className="eyebrow">{t.home.solutionsTitle}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', margin: '12px 0 16px' }}>{t.home.solutionsTitle}</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {t.home.solutionsBullets.map((bullet) => (
              <div key={bullet} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 14, borderRadius: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle2 size={18} style={{ marginTop: 3, flex: '0 0 auto' }} />
                <span style={{ color: '#dce6f2', lineHeight: 1.7 }}>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Facilities({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section">
      <div className="container card" style={{ padding: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 22 }}>
          <div>
            <div className="eyebrow">{t.home.facilitiesTitle}</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', margin: '12px 0 10px' }}>{t.home.facilitiesTitle}</h2>
            <p style={{ color: '#aebdd0', lineHeight: 1.7, maxWidth: 800 }}>{t.home.facilitiesText}</p>
          </div>
        </div>
        <div className="grid-auto">
          {[
            { title: 'Puerto Real', text: '1.100 m² de suelo industrial para actividades aeronáuticas y logísticas.' },
            { title: 'El Puerto de Santa María', text: '750 m² con sala acondicionada en temperatura y humedad y zona de montaje.' },
            { title: 'Gestión de información', text: 'Operativa soportada por Odoo a medida y transición a ERP modernizado.' },
            { title: 'Calidad', text: 'Seguimiento de proveedores, control de no conformidades y acciones correctivas/preventivas.' },
          ].map((item) => (
            <div key={item.title} style={{ padding: 22, borderRadius: 22, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}><Factory size={18} /> <strong>{item.title}</strong></div>
              <div style={{ color: '#aebdd0', lineHeight: 1.7 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientStrip({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section" style={{ paddingTop: 16 }}>
      <div className="container">
        <div className="eyebrow">{t.home.clientsTitle}</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', margin: '12px 0 20px' }}>{t.home.clientsTitle}</h2>
        <div className="client-grid">
          {clients.map((client) => (
            <article key={client.name} className="client-card">
              <div className="client-logo-frame">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="client-logo"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 24 }}>
        <div className="card" style={{ padding: 28 }}>
          <div className="eyebrow">{t.home.qualityTitle}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', margin: '12px 0 12px' }}>{t.home.qualityTitle}</h2>
          <p style={{ color: '#aebdd0', lineHeight: 1.8 }}>{t.home.qualityText}</p>
        </div>
        <div className="card" style={{ padding: 28 }}>
          <div className="grid-auto">
            {[
              'EN9100 / ISO 9001',
              'I+D-P-146 Sellado de estructuras aeronáuticas',
              'I+D-P-202 Conversiones químicas en aluminio',
              'I+D-P-231 Preparación de agujeros en no metálicos',
              'I+D-P-393 Refrigeración y descongelado de sellantes',
              'CASA 1400 7.3 Coordinación interna de procesos',
            ].map((item) => (
              <div key={item} style={{ padding: 18, borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', display: 'flex', gap: 12, alignItems: 'center' }}>
                <ShieldCheck size={18} /> <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCta({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <section className="section">
      <div className="container card" style={{ padding: 30, display: 'grid', gridTemplateColumns: '1fr auto', gap: 18, alignItems: 'center' }}>
        <div>
          <div className="eyebrow">{t.home.contactTitle}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', margin: '12px 0 10px' }}>{t.home.contactTitle}</h2>
          <p style={{ color: '#aebdd0', lineHeight: 1.7 }}>{t.home.contactText}</p>
        </div>
        <Button href={`/${lang}/contacto`}>
          {t.nav.contact} <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}

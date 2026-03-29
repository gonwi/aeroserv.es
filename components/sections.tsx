import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clients, company, getDictionary, stats, type Lang } from '@/lib/i18n';
import { IsoModalGallery } from './iso-modal-gallery';

function getHomeContent(lang: Lang) {
  return lang === 'es'
    ? {
        heroEyebrow: 'Servicios aeronáuticos y logística industrial',
        heroTitle: 'Soporte industrial y logístico para fabricantes aeronáuticos de primer nivel.',
        heroDescription:
          'Aeroserv integra soporte de montaje, mantenimiento, logística y control operativo en entornos exigentes, con una estructura pensada para responder con flexibilidad y sostener los estándares de calidad del cliente.',
        capacityTitle: 'Capacidad industrial',
        certifications: 'EN9100:2018 · ISO 9001:2015 · certificaciones en procesos especiales',
        servicesTitle: 'Servicios principales',
        servicesSubtitle:
          'Montaje, mantenimiento, utillaje, sellantes, logística y transporte especial integrados en una misma plataforma de servicio.',
        services: [
          {
            title: 'Servicio de montaje',
            description: 'Servicios de soporte a nuestro cliente, tanto in situ como en nuestras propias instalaciones.',
            icon: '/services/service-aero.png',
          },
          {
            title: 'Mantenimiento de herramientas neumáticas',
            description: 'Especialistas en el asesoramiento, mantenimiento y reparaciones de máquinas neumáticas y eléctricas para el montaje.',
            icon: '/services/service-tools.png',
          },
          {
            title: 'Utillaje',
            description: 'Fabricación y mantenimiento de utillajes para el montaje.',
            icon: '/services/service-logistica.png',
          },
          {
            title: 'Sellantes',
            description: 'Mezcla, dosificación y distribución de sellantes.',
            icon: '/services/service-fod.png',
          },
          {
            title: 'Almacén logístico',
            description: 'Almacén logístico de materia prima, corte previo y expediciones. Corte de materiales mediante tecnología de chorro de agua.',
            icon: '/services/service-industrial.png',
          },
          {
            title: 'Transporte',
            description: 'Gestión de transportes especiales para elementos aeronáuticos.',
            icon: '/services/service-logistica.png',
          },
        ],
        expansionEyebrow: 'Trayectoria y expansión',
        expansionTitle: 'Trayectoria y expansión',
        expansionText:
          'Aeroserv ha consolidado una trayectoria de crecimiento sostenido, ampliando su presencia en mercados, clientes y capacidad operativa a partir de una base industrial especializada.',
        expansionTextSecondary:
          'La división de montaje in situ ha alcanzado un nivel de madurez que permite ampliar el alcance hacia MRO, modificaciones estructurales y soporte global a nuevas necesidades del cliente.',
        expansionLocations: ['Puerto Real', 'El Puerto de Santa María', 'Sevilla', 'Madrid'],
        solutionsEyebrow: 'Creamos soluciones',
        solutionsTitle: 'Creamos soluciones',
        solutionsBullets: [
          'Nos adaptamos a los requisitos operativos y productivos de cada cliente.',
          'Diseñamos soluciones útiles para problemas compartidos entre operación, calidad y logística.',
          'Colaboramos en iniciativas de mejora de coste, plazo y eficiencia.',
          'Reforzamos capacidades y recursos para acompañar el crecimiento de cada programa.',
        ],
        facilitiesEyebrow: 'Instalaciones Aeroserv',
        facilitiesTitle: 'Instalaciones Aeroserv',
        facilitiesText:
          'Las instalaciones y sistemas de trabajo evolucionan de forma continua para mejorar rendimiento, recursos, trazabilidad y control operativo.',
        facilitiesCards: [
          { title: 'Puerto Real', text: '1.100 m² de suelo industrial para actividades aeronáuticas y logísticas.' },
          { title: 'El Puerto de Santa María', text: '750 m² con sala acondicionada en temperatura y humedad y zona de montaje.' },
          { title: 'Gestión de información', text: 'Operativa soportada por Odoo a medida y transición a un ERP modernizado.' },
          { title: 'Calidad y proveedores', text: 'Seguimiento de proveedores, control de no conformidades y acciones correctivas y preventivas.' },
        ],
        clientsTitle: 'Algunos de nuestros clientes',
        clientsText: 'Línea de montaje, control FOD, reparaciones, mantenimiento de tooling y soporte industrial.',
        qualityEyebrow: 'Máxima calidad',
        qualityTitle: 'Máxima calidad',
        qualityText:
          'Aeroserv está certificada en las normas EN9100:2018 e ISO 9001:2015, además de poseer certificaciones en procesos especiales.',
        contactTitle: 'Contacto',
        contactText: 'Si necesitas soporte industrial, logístico o aeronáutico, podemos estudiar el alcance y responder con una solución adecuada.',
      }
    : {
        heroEyebrow: 'Aeronautical services and industrial logistics',
        heroTitle: 'Industrial and logistics support for tier-one aerospace manufacturers.',
        heroDescription:
          'Aeroserv integrates assembly support, maintenance, logistics and operational control in demanding environments, with a structure built to respond flexibly and maintain customer quality standards.',
        capacityTitle: 'Industrial capability',
        certifications: 'EN9100:2018 · ISO 9001:2015 · special process certifications',
        servicesTitle: 'Core services',
        servicesSubtitle:
          'Assembly, maintenance, tooling, sealants, logistics and special transport integrated into one service platform.',
        services: [
          {
            title: 'Assembly services',
            description: 'Support services for our customers, both on-site and at our own facilities.',
            icon: '/services/service-aero.png',
          },
          {
            title: 'Pneumatic tool maintenance',
            description: 'Specialists in advisory, maintenance and repair of pneumatic and electric equipment used in assembly operations.',
            icon: '/services/service-tools.png',
          },
          {
            title: 'Tooling',
            description: 'Manufacture and maintenance of tooling for assembly operations.',
            icon: '/services/service-logistica.png',
          },
          {
            title: 'Sealants',
            description: 'Mixing, dispensing and distribution of sealants.',
            icon: '/services/service-fod.png',
          },
          {
            title: 'Logistics warehouse',
            description: 'Raw-material logistics, pre-cutting and dispatch operations, including waterjet cutting technology.',
            icon: '/services/service-industrial.png',
          },
          {
            title: 'Transport',
            description: 'Management of special transport for aeronautical components.',
            icon: '/services/service-logistica.png',
          },
        ],
        expansionEyebrow: 'Track record and growth',
        expansionTitle: 'Track record and growth',
        expansionText:
          'Aeroserv has built a sustained growth track record, expanding its footprint across markets, customers and operational capacity from a specialised industrial base.',
        expansionTextSecondary:
          'Its on-site assembly division has reached the maturity required to expand into MRO, structural modifications and broader customer support programmes.',
        expansionLocations: ['Puerto Real', 'El Puerto de Santa Maria', 'Seville', 'Madrid'],
        solutionsEyebrow: 'We create solutions',
        solutionsTitle: 'We create solutions',
        solutionsBullets: [
          'We adapt to each customer’s operating and production requirements.',
          'We design practical solutions for shared operational, quality and logistics challenges.',
          'We contribute to cost, timing and efficiency improvement initiatives.',
          'We strengthen resources and capabilities to accompany programme growth.',
        ],
        facilitiesEyebrow: 'Aeroserv facilities',
        facilitiesTitle: 'Aeroserv facilities',
        facilitiesText:
          'Facilities and working systems are continuously refined to improve performance, resources, traceability and operational control.',
        facilitiesCards: [
          { title: 'Puerto Real', text: '1,100 m² of industrial space dedicated to aeronautical and logistics activity.' },
          { title: 'El Puerto de Santa Maria', text: '750 m² with temperature- and humidity-controlled room and assembly area.' },
          { title: 'Information management', text: 'Operations supported by custom Odoo workflows and transition to a modernised ERP.' },
          { title: 'Quality and suppliers', text: 'Supplier follow-up, non-conformity control, and corrective and preventive actions.' },
        ],
        clientsTitle: 'Some of our clients',
        clientsText: 'Assembly line support, FOD control, repairs, tooling maintenance and industrial support.',
        qualityEyebrow: 'Maximum quality',
        qualityTitle: 'Maximum quality',
        qualityText:
          'Aeroserv is certified to EN9100:2018 and ISO 9001:2015 standards, in addition to holding special process certifications.',
        contactTitle: 'Contact',
        contactText: 'If you need industrial, logistics or aeronautical support, we can review the scope and respond with an appropriate solution.',
      };
}

export function Hero({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const content = getHomeContent(lang);

  return (
    <section className="section">
      <div className="container hero-container">
        <div className="card hero-shell">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">{content.heroEyebrow}</div>
            <h1 className="hero-title">{content.heroTitle}</h1>
            <p className="hero-lead">{content.heroDescription}</p>
            <div className="hero-actions">
              <Button href={`/${lang}/contacto`}>{t.hero.primary}</Button>
              <Button href={`/${lang}/servicios`} variant="secondary">{t.hero.secondary}</Button>
            </div>
          </div>

          <div className="hero-footer">
            <div className="hero-meta-strip">
              <div className="hero-meta-item">
                <MapPin size={16} />
                <span>{company.address}</span>
              </div>
              <div className="hero-meta-item">
                <ShieldCheck size={16} />
                <span>{content.certifications}</span>
              </div>
            </div>
            <div className="hero-stat-grid">
              {stats[lang].map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <div className="hero-stat-label">{stat.label}</div>
                  <div className="hero-stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview({ lang }: { lang: Lang }) {
  const content = getHomeContent(lang);

  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{ marginBottom: 22 }}>
          <div className="eyebrow">{content.heroEyebrow}</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', marginBottom: 8 }}>{content.servicesTitle}</h2>
          <p className="section-copy" style={{ maxWidth: 860 }}>{content.servicesSubtitle}</p>
        </div>
        <div className="grid-auto">
          {content.services.map((service) => (
            <article key={service.title} className="card" style={{ padding: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, display: 'grid', placeItems: 'center', background: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.03)' }}>
                <Image src={service.icon} alt="" width={36} height={36} style={{ width: 36, height: 36, objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: 22, margin: '18px 0 10px' }}>{service.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryBlock({ lang }: { lang: Lang }) {
  const content = getHomeContent(lang);

  return (
    <section className="section">
      <div className="container section-two-col story-shell">
        <div className="card media-frame" style={{ alignSelf: 'start' }}>
          <Image
            src="/home/home-expansion.jpg"
            alt={lang === 'es' ? 'Trayectoria y expansión de Aeroserv' : 'Aeroserv track record and growth'}
            width={982}
            height={620}
            style={{ width: '100%', height: 'auto', borderRadius: 18 }}
          />
        </div>
        <div className="card section-block">
          <div className="eyebrow">{content.expansionEyebrow}</div>
          <h2 className="section-title">{content.expansionTitle}</h2>
          <p className="section-copy">{content.expansionText}</p>
          <p className="section-copy" style={{ marginTop: 14 }}>{content.expansionTextSecondary}</p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 20, display: 'grid', gap: 12 }}>
            {content.expansionLocations.map((item) => (
              <li key={item} className="surface-panel" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <CheckCircle2 size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Facilities({ lang }: { lang: Lang }) {
  const content = getHomeContent(lang);

  return (
    <section className="section">
      <div className="container section-two-col">
        <div className="card section-block story-shell">
          <div className="eyebrow">{content.solutionsEyebrow}</div>
          <h2 className="section-title">{content.solutionsTitle}</h2>
          <div className="stack-md">
            {content.solutionsBullets.map((bullet) => (
              <div key={bullet} className="surface-panel" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ marginTop: 3, flex: '0 0 auto' }} />
                <span style={{ color: 'var(--text)', lineHeight: 1.7 }}>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card media-frame">
          <Image
            src="/home/home-solutions.jpg"
            alt={lang === 'es' ? 'Soluciones Aeroserv' : 'Aeroserv solutions'}
            width={658}
            height={530}
            className="media-frame__image media-frame__image--show-full"
          />
        </div>
      </div>

      <div className="container card section-block story-shell" style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 22 }}>
          <div>
            <div className="eyebrow">{content.facilitiesEyebrow}</div>
            <h2 className="section-title" style={{ marginBottom: 10 }}>{content.facilitiesTitle}</h2>
            <p className="section-copy" style={{ maxWidth: 800 }}>{content.facilitiesText}</p>
          </div>
        </div>
        <div className="section-two-col" style={{ alignItems: 'stretch' }}>
          <div className="card media-frame" style={{ background: 'var(--surface)' }}>
            <Image
              src="/home/home-facilities.jpg"
              alt={lang === 'es' ? 'Instalaciones de Aeroserv' : 'Aeroserv facilities'}
              width={940}
              height={788}
              className="media-frame__image media-frame__image--contain-mobile"
            />
          </div>
          <div className="grid-auto">
            {content.facilitiesCards.map((item) => (
              <div key={item.title} className="surface-panel">
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}><Factory size={18} /> <strong>{item.title}</strong></div>
                <div style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientStrip({ lang }: { lang: Lang }) {
  const content = getHomeContent(lang);

  return (
    <section className="section" style={{ paddingTop: 16 }}>
      <div className="container">
        <div className="eyebrow">{content.clientsTitle}</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', margin: '12px 0 8px' }}>{content.clientsTitle}</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20 }}>{content.clientsText}</p>
        <div className="client-grid">
          {clients.map((client) => (
            <a key={client.name} href={client.href} target="_blank" rel="noopener noreferrer" className="client-card">
              <div className="client-logo-frame">
                {'src' in client ? (
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="client-logo"
                  />
                ) : (
                  <div className="client-wordmark">{client.fallback}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection({ lang }: { lang: Lang }) {
  const content = getHomeContent(lang);

  return (
    <section className="section">
      <div className="container section-split quality-shell">
        <div className="card section-block">
          <div className="eyebrow">{content.qualityEyebrow}</div>
          <h2 className="section-title">{content.qualityTitle}</h2>
          <p className="section-copy">{content.qualityText}</p>
          <IsoModalGallery />
        </div>

        <div className="card section-block">
          <div className="grid-auto">
            {[
              'EN9100 / ISO 9001',
              'I+D-P-146 Sellado de estructuras aeronáuticas',
              'I+D-P-202 Conversiones químicas en aluminio',
              'I+D-P-231 Preparación de agujeros en no metálicos',
              'I+D-P-393 Refrigeración y descongelado de sellantes',
              'CASA 1400 7.3 Coordinación interna de procesos',
            ].map((item) => (
              <div key={item} className="surface-panel" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
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
  const content = getHomeContent(lang);
  const t = getDictionary(lang);

  return (
    <section className="section">
      <div className="container card contact-cta-card" style={{ padding: 30, display: 'grid', gridTemplateColumns: '1fr auto', gap: 18, alignItems: 'center' }}>
        <div>
          <div className="eyebrow">{content.contactTitle}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', margin: '12px 0 10px' }}>{content.contactTitle}</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{content.contactText}</p>
        </div>
        <Button href={`/${lang}/contacto`}>
          {t.nav.contact} <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}

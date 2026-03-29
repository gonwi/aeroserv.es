import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'services');
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const content = lang === 'es'
    ? {
        subtitle: 'Soluciones a medida a coste optimizado',
        introTitle: 'Nuestros servicios',
        introText:
          'Aeroserv desarrolla servicios industriales, logísticos y aeronáuticos concebidos para integrarse en la operación del cliente con flexibilidad, control y capacidad de respuesta. La estructura de servicio cubre desde soportes especializados de planta hasta soluciones completas de mantenimiento, trazabilidad y apoyo a fabricación.',
        strengthsTitle: 'Capacidad operativa',
        strengthsIntro:
          'Una propuesta de servicio orientada a entornos industriales exigentes, con foco en continuidad operativa, coste optimizado y calidad de ejecución.',
        strengths: [
          'Integración directa en entornos aeronáuticos e industriales con equipos adaptados a cada programa.',
          'Combinación de soporte técnico, gestión logística y mantenimiento especializado.',
          'Capacidad para escalar recursos, medios auxiliares y soporte documental según necesidad del cliente.',
          'Orientación a trazabilidad, control de herramientas, prevención FOD y mejora continua.',
        ],
        servicesTitle: 'Áreas de servicio',
        services: [
          {
            title: 'Servicios de logística',
            description: 'Soluciones a medida para nuestros clientes: embalajes, utillaje y transportes.',
            icon: '/services/service-logistica.png',
            href: 'http://aeroserv.es/servicios-de-logistica/',
          },
          {
            title: 'Sistema FOD control',
            description: 'Experiencia exitosa de más de 10 años en la gestión integral de reparaciones de herramientas.',
            icon: '/services/service-fod.png',
            href: 'http://aeroserv.es/sistema-fod-control/',
          },
          {
            title: 'Mantenimiento de herramientas',
            description: 'Experiencia contrastada en mantenimiento, reparación y control de herramientas en entornos con requerimientos FOD.',
            icon: '/services/service-tools.png',
            href: 'http://aeroserv.es/servicio-de-mantenimiento-de-herramientas-2/',
          },
          {
            title: 'Soporte en industria aeronáutica',
            description: 'Amplia experiencia en soporte industrial en la aeronáutica, desde equipos de blue collars hasta gestión integral.',
            icon: '/services/service-aero.png',
            href: 'http://aeroserv.es/servicios-soporte-aeronautica/',
          },
          {
            title: 'Soporte industrial',
            description: 'Soporte técnico y humano para distintos entornos industriales, incorporando soluciones útiles procedentes de otros sectores.',
            icon: '/services/service-industrial.png',
            href: 'http://aeroserv.es/servicio-de-soporte-industrial/',
          },
          {
            title: 'Soporte I+D+I',
            description: 'Soporte integral para fabricación de prototipos.',
            icon: '/services/service-idi.png',
            href: 'http://aeroserv.es/soporte-idi/',
          },
        ],
        closingTitle: 'Soporte industrial con enfoque de servicio',
        closingText:
          'La cartera de servicios de Aeroserv combina experiencia técnica, medios operativos y cercanía de gestión para responder a necesidades recurrentes o proyectos específicos dentro de cadenas de fabricación complejas.',
      }
    : {
        subtitle: 'Tailored solutions at optimised cost',
        introTitle: 'Our services',
        introText:
          'Aeroserv delivers industrial, logistics and aeronautical services designed to integrate into each customer’s operation with flexibility, control and responsiveness. The service structure covers both specialised plant support and complete maintenance, traceability and manufacturing-support solutions.',
        strengthsTitle: 'Operational capability',
        strengthsIntro:
          'A service platform built for demanding industrial environments, with a focus on continuity, optimised cost and execution quality.',
        strengths: [
          'Direct integration into aeronautical and industrial environments with teams adapted to each programme.',
          'Combined technical support, logistics management and specialised maintenance capability.',
          'Ability to scale resources, auxiliary means and documentary support according to customer needs.',
          'Strong orientation to traceability, tool control, FOD prevention and continuous improvement.',
        ],
        servicesTitle: 'Service areas',
        services: [
          {
            title: 'Logistics services',
            description: 'Tailored solutions for our customers, including packaging, tooling and transport.',
            icon: '/services/service-logistica.png',
            href: 'http://aeroserv.es/servicios-de-logistica/',
          },
          {
            title: 'FOD control system',
            description: 'More than 10 years of successful experience in the integrated management of tool repairs.',
            icon: '/services/service-fod.png',
            href: 'http://aeroserv.es/sistema-fod-control/',
          },
          {
            title: 'Tool maintenance',
            description: 'Proven experience in tool maintenance, repair and tooling control within FOD-sensitive environments.',
            icon: '/services/service-tools.png',
            href: 'http://aeroserv.es/servicio-de-mantenimiento-de-herramientas-2/',
          },
          {
            title: 'Aeronautical industry support',
            description: 'Broad experience in aeronautical industrial support, from blue-collar teams to integrated management.',
            icon: '/services/service-aero.png',
            href: 'http://aeroserv.es/servicios-soporte-aeronautica/',
          },
          {
            title: 'Industrial support',
            description: 'Technical and human support for a wide range of industrial environments, incorporating useful practices from other sectors.',
            icon: '/services/service-industrial.png',
            href: 'http://aeroserv.es/servicio-de-soporte-industrial/',
          },
          {
            title: 'R&D&I support',
            description: 'Integrated support for prototype manufacturing.',
            icon: '/services/service-idi.png',
            href: 'http://aeroserv.es/soporte-idi/',
          },
        ],
        closingTitle: 'Industrial support with a service mindset',
        closingText:
          'Aeroserv’s service portfolio combines technical experience, operational capability and close programme management to respond to recurring needs or project-specific work within complex manufacturing chains.',
      };

  return (
    <section className="section">
      <div className="container">
        <div
          className="card page-hero"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(15,46,69,0.48) 0%, rgba(15,46,69,0.9) 100%), url('/services/services-hero.jpg')",
          }}
        >
          <div>
            <div className="eyebrow page-hero__eyebrow">
              AEROSERV
            </div>
            <h1 className="page-hero__title">{t.services.title}</h1>
            <p className="page-hero__lead">{content.subtitle}</p>
          </div>
        </div>

        <div className="section-two-col">
          <div className="card section-block">
            <div className="section-header">
              <div className="eyebrow">AEROSERV</div>
              <h2 className="section-title">{content.introTitle}</h2>
              <p className="section-copy">{content.introText}</p>
            </div>
          </div>

          <div className="card section-block">
            <div className="section-header">
              <h2 className="section-title" style={{ marginTop: 0 }}>{content.strengthsTitle}</h2>
              <p className="section-copy" style={{ marginBottom: 18 }}>{content.strengthsIntro}</p>
            </div>
            <div className="stack-md">
              {content.strengths.map((item) => (
                <div key={item} className="surface-panel">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card section-block" style={{ marginTop: 24 }}>
          <div className="eyebrow">AEROSERV</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>{content.servicesTitle}</h2>
          <div className="grid-auto" style={{ marginTop: 18 }}>
            {content.services.map((service, index) => (
              <article key={service.title} className={`surface-panel surface-panel--plain ${index % 3 === 0 ? 'service-card--featured' : ''}`} style={{ minHeight: 320 }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, display: 'grid', placeItems: 'center', background: 'var(--surface-muted)', border: '1px solid var(--border-soft)', marginBottom: 18 }}>
                  <Image src={service.icon} alt="" width={40} height={40} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: 24, margin: '0 0 10px' }}>{service.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>{service.description}</p>
                <Link href={service.href} target="_blank" rel="noopener noreferrer" className="button-secondary" style={{ width: 'fit-content' }}>
                  {lang === 'es' ? 'Ver referencia' : 'View reference'}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="section-two-col" style={{ marginTop: 24 }}>
          <div className="card media-frame">
            <Image
              src="/services/services-hero.jpg"
              alt={lang === 'es' ? 'Instalaciones y servicios de Aeroserv' : 'Aeroserv facilities and services'}
              width={1920}
              height={1080}
              className="media-frame__image"
            />
          </div>

          <div className="card section-block" style={{ display: 'grid', alignContent: 'center' }}>
            <div className="eyebrow">{lang === 'es' ? 'Capacidad de respuesta' : 'Responsiveness'}</div>
            <h2 className="section-title">{content.closingTitle}</h2>
            <p className="section-copy">{content.closingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { getDictionary, type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'about');
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const content = lang === 'es'
    ? {
        subtitle: 'Servicios logísticos y aeronáuticos desde 2004',
        historyTitle: 'Nuestra historia',
        historyText:
          'Aeroserv fue fundada en 2004. Su sede se ubica en el Polígono Industrial de El Trocadero, en Puerto Real, Cádiz, y mantiene además presencia operativa en Getafe y Sevilla. La compañía ha desarrollado una red de colaboración industrial con socios y apoyo técnico en España, Francia, Portugal y Alemania.',
        managementTitle: 'Equipo de gestión',
        managementCards: [
          {
            title: 'Experiencia de gestión',
            text: 'El equipo directivo reúne experiencia directa en control de producción, soporte técnico, fabricación y calidad en actividades FAL y entornos aeronáuticos complejos.',
          },
          {
            title: 'Capacidad de organización',
            text: 'La estructura de gestión está preparada para diseñar, desarrollar y controlar sistemas de reparación de herramientas, control de utillaje, prevención FOD y soluciones logísticas industriales con enfoque de mejora continua.',
          },
          {
            title: 'Adaptación al cliente',
            text: 'Aeroserv puede dimensionar recursos y ajustar el volumen de actividad según las necesidades del cliente, incluyendo capacidad de compras para piezas estándar y especiales en calendarios exigentes.',
          },
        ],
        missionTitle: 'Misión',
        missionText:
          'Nuestra misión es prestar servicios con los más altos niveles de calidad en cada proyecto, manteniendo flexibilidad operativa y un coste optimizado para el cliente.',
        skillsTitle: 'Capacidades',
        skillsIntro: 'Un equipo experimentado, cualificado y orientado a la ejecución industrial.',
        skills: [
          'Equipo multifuncional en calidad, operaciones, producción, ingeniería de fabricación, PC&L, RRHH y prevención.',
          'Alta experiencia en gestión de programas y gestión de operaciones.',
          'Alta experiencia en mantenimiento y reparación de herramientas.',
          'Diseño y fabricación de soluciones logísticas para clientes industriales.',
          'Desarrollo de sistemas FOD, DIM, REACH y PDCA alineados con los requerimientos del cliente.',
          'Excelentes resultados en calidad, coste y planes de entrega.',
          'Capacidad de trabajo en español, inglés y portugués.',
        ],
        vision: 'Nuestra visión es duplicar la facturación en dos años y expandir nuestros servicios a otros países.',
      }
    : {
        subtitle: 'Logistics and aeronautical services since 2004',
        historyTitle: 'Our history',
        historyText:
          'Aeroserv was founded in 2004. Its headquarters are located at El Trocadero Industrial Estate in Puerto Real, Cádiz, and it also maintains an operational presence in Getafe and Seville. The company has developed an industrial collaboration network with partners and technical support across Spain, France, Portugal and Germany.',
        managementTitle: 'Management team',
        managementCards: [
          {
            title: 'Management experience',
            text: 'The leadership team brings direct experience in production control, technical support, manufacturing and quality within FAL activities and demanding aerospace environments.',
          },
          {
            title: 'Organisational capability',
            text: 'The management structure is prepared to design, develop and control tool repair systems, tooling control, FOD prevention and industrial logistics solutions with a continuous-improvement mindset.',
          },
          {
            title: 'Adapted to client requirements',
            text: 'Aeroserv can scale resources and activity volume to match customer requirements, supported by purchasing capability for both standard and special parts on demanding schedules.',
          },
        ],
        missionTitle: 'Mission',
        missionText:
          'Our mission is to deliver services at the highest quality level on every project while maintaining operational flexibility and an optimised cost structure for the customer.',
        skillsTitle: 'Capabilities',
        skillsIntro: 'An experienced, qualified team focused on industrial execution.',
        skills: [
          'Multifunctional team covering quality, operations, production, manufacturing engineering, PC&L, HR and prevention.',
          'Strong experience in programme management and operations management.',
          'Strong experience in tool maintenance and repair.',
          'Design and manufacture of logistics solutions for industrial customers.',
          'Development of FOD, DIM, REACH and PDCA systems aligned with customer requirements.',
          'Strong results in quality, cost and delivery plans.',
          'Working capability in Spanish, English and Portuguese.',
        ],
        vision: 'Our vision is to double turnover within two years and expand our services into other countries.',
      };

  return (
    <section className="section">
      <div className="container">
        <div
          className="card page-hero"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(20,61,88,0.52) 0%, rgba(20,61,88,0.92) 100%), url('/about/about-hero.jpg')",
          }}
        >
          <div>
            <div className="eyebrow page-hero__eyebrow">AEROSERV</div>
            <h1 className="page-hero__title">{t.about.title}</h1>
            <p className="page-hero__lead">{content.subtitle}</p>
          </div>
        </div>

        <div className="section-two-col">
          <div className="card section-block">
            <div className="section-header">
              <h2 className="section-title" style={{ marginTop: 0 }}>{content.historyTitle}</h2>
              <p className="section-copy">{content.historyText}</p>
            </div>
            <Image
              src="/about/about-history.png"
              alt={lang === 'es' ? 'Cronología de Aeroserv' : 'Aeroserv timeline'}
              width={1000}
              height={1447}
              style={{ width: '100%', height: 'auto', borderRadius: 18, border: '1px solid var(--border-soft)', background: 'white' }}
            />
          </div>

          <div className="card section-block">
            <div className="section-header">
              <h2 className="section-title" style={{ marginTop: 0 }}>{content.managementTitle}</h2>
            </div>
            <div className="kicker-grid">
              {content.managementCards.map((card) => (
                <div key={card.title} className="kicker-item">
                  <h3 className="kicker-item__title">{card.title}</h3>
                  <p className="kicker-item__text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-two-col" style={{ marginTop: 24 }}>
          <div className="card section-block">
            <div className="eyebrow">AEROSERV</div>
            <h2 className="section-title">{content.missionTitle}</h2>
            <p className="section-copy">{content.missionText}</p>
            <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.75, color: 'var(--heading)', fontWeight: 600 }}>
              “{content.vision}”
            </p>
          </div>

          <div className="card media-frame">
            <Image
              src="/about/about-team.jpg"
              alt={lang === 'es' ? 'Equipo de Aeroserv' : 'Aeroserv team'}
              width={1000}
              height={700}
              className="media-frame__image"
            />
          </div>
        </div>

        <div className="card section-block" style={{ marginTop: 24 }}>
          <div className="eyebrow">AEROSERV</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>{content.skillsTitle}</h2>
          <p className="section-copy" style={{ marginBottom: 18 }}>{content.skillsIntro}</p>
          <div className="grid-auto">
            {content.skills.map((item) => (
              <div key={item} className="surface-panel">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

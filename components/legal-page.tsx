import { type Lang } from '@/lib/i18n';
import { getLegalPageContent } from '@/lib/legal';

export function LegalPage({ page, lang }: { page: 'legal' | 'privacy' | 'cookies'; lang: Lang }) {
  const content = getLegalPageContent(page, lang);

  return (
    <section className="section">
      <div className="container card legal-card">
        <div className="eyebrow">AEROSERV</div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', margin: '14px 0 10px' }}>{content.title}</h1>
        <p className="legal-intro">{content.intro}</p>
        <div className="legal-stack">
          {content.sections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

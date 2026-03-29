import { ContactForm } from '@/components/contact-form';
import { company, getDictionary, type Lang } from '@/lib/i18n';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, 'contact');
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <section className="section">
      <div className="container section-split">
        <div className="card section-block">
          <div className="eyebrow">AEROSERV</div>
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="section-copy">{t.contact.intro}</p>
          <div className="contact-list">
            <div className="contact-list__item">
              <span className="contact-list__label">{lang === 'es' ? 'Ubicación' : 'Location'}</span>
              <div className="contact-list__value">{company.address}</div>
            </div>
            <div className="contact-list__item">
              <span className="contact-list__label">{lang === 'es' ? 'Teléfono central' : 'Main phone'}</span>
              <div className="contact-list__value">{company.phone}</div>
            </div>
            <div className="contact-list__item">
              <span className="contact-list__label">{lang === 'es' ? 'Teléfono comercial' : 'Sales phone'}</span>
              <div className="contact-list__value">{company.salesPhone}</div>
            </div>
            <div className="contact-list__item">
              <span className="contact-list__label">Email</span>
              <div className="contact-list__value">{company.email}<br />{company.secondaryEmail}</div>
            </div>
          </div>
        </div>
        <div className="card section-block">
          <h2 className="section-title" style={{ marginTop: 0 }}>{lang === 'es' ? 'Formulario de contacto' : 'Contact form'}</h2>
          <p className="section-copy">{t.contact.formNote}</p>
          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}

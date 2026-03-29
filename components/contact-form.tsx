'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { sendContactEmail } from '@/app/[lang]/contacto/actions';

const initialContactFormState = {
  status: 'idle' as const,
  message: '',
};

export function ContactForm({ lang }: { lang: 'es' | 'en' }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialContactFormState);

  const labels = lang === 'es'
    ? {
        note: 'Las solicitudes se envían por correo electrónico a nuestro equipo.',
        fields: ['Nombre', 'Empresa', 'Email', 'Mensaje'] as const,
        submit: 'Enviar solicitud',
        consent: 'He leído y acepto la política de privacidad.',
      }
    : {
        note: 'Requests are sent by email to our team.',
        fields: ['Name', 'Company', 'Email', 'Message'] as const,
        submit: 'Send request',
        consent: 'I have read and accept the privacy policy.',
      };

  return (
    <form action={formAction} className="contact-form">
      <p className="contact-form__note">{labels.note}</p>
      <input name="name" placeholder={labels.fields[0]} className="field-control" required />
      <input name="company" placeholder={labels.fields[1]} className="field-control" required />
      <input name="email" type="email" placeholder={labels.fields[2]} className="field-control" required />
      <textarea name="message" placeholder={labels.fields[3]} rows={6} className="field-control" required />
      <label className="consent-row">
        <input name="consent" type="checkbox" value="yes" required />
        <span>
          {labels.consent} <Link href={`/${lang}/privacy`}>{
            lang === 'es' ? 'Ver política' : 'View policy'
          }</Link>
        </span>
      </label>
      <button className="button-primary" style={{ border: 'none', cursor: 'pointer', width: 'fit-content' }} disabled={isPending}>
        {isPending ? '...' : labels.submit}
      </button>
      {state.message ? (
        <p className={`form-feedback ${state.status === 'success' ? 'is-success' : 'is-error'}`}>{state.message}</p>
      ) : null}
    </form>
  );
}

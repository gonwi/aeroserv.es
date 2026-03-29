import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n';

export const siteUrl = 'https://aeroserv.es';
const siteName = 'Aeroserv';

type PageKey = 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'legal' | 'cookies';

const pageSeo: Record<PageKey, Record<Lang, { title: string; description: string; path: string }>> = {
  home: {
    es: {
      title: 'Inicio',
      description: 'Aeroserv ofrece servicios aeronáuticos, logísticos e industriales con soporte de montaje, mantenimiento, utillaje, sellantes, transporte y control de calidad.',
      path: '',
    },
    en: {
      title: 'Home',
      description: 'Aeroserv delivers aeronautical, logistics and industrial services including assembly support, maintenance, tooling, sealants, transport and quality control.',
      path: '',
    },
  },
  services: {
    es: {
      title: 'Servicios',
      description: 'Servicios de logística, sistema FOD control, mantenimiento de herramientas, soporte aeronáutico, soporte industrial y soporte I+D+I.',
      path: '/servicios',
    },
    en: {
      title: 'Services',
      description: 'Logistics services, FOD control, tool maintenance, aeronautical support, industrial support and R&D&I support.',
      path: '/servicios',
    },
  },
  about: {
    es: {
      title: 'Sobre nosotros',
      description: 'Conoce la trayectoria de Aeroserv desde 2004, su equipo de gestión, capacidades industriales y presencia operativa en el sector aeronáutico.',
      path: '/sobre-nosotros',
    },
    en: {
      title: 'About us',
      description: 'Learn about Aeroserv since 2004, its management team, industrial capabilities and operational presence in the aeronautical sector.',
      path: '/sobre-nosotros',
    },
  },
  contact: {
    es: {
      title: 'Contacto',
      description: 'Contacta con Aeroserv para consultas comerciales, técnicas o industriales relacionadas con soporte aeronáutico y logística industrial.',
      path: '/contacto',
    },
    en: {
      title: 'Contact',
      description: 'Contact Aeroserv for commercial, technical or industrial enquiries related to aeronautical support and industrial logistics.',
      path: '/contacto',
    },
  },
  privacy: {
    es: {
      title: 'Política de privacidad',
      description: 'Información sobre el tratamiento de datos personales realizado por Aeroserv de conformidad con el RGPD y la normativa española aplicable.',
      path: '/privacy',
    },
    en: {
      title: 'Privacy policy',
      description: 'Information about the processing of personal data carried out by Aeroserv in accordance with GDPR and applicable Spanish regulation.',
      path: '/privacy',
    },
  },
  legal: {
    es: {
      title: 'Aviso legal',
      description: 'Aviso legal del sitio web de Aeroserv con información corporativa, condiciones de uso, propiedad intelectual y limitación de responsabilidad.',
      path: '/legal',
    },
    en: {
      title: 'Legal notice',
      description: 'Legal notice for the Aeroserv website including corporate information, terms of use, intellectual property and limitation of liability.',
      path: '/legal',
    },
  },
  cookies: {
    es: {
      title: 'Política de cookies',
      description: 'Política de cookies de Aeroserv con información sobre cookies técnicas, preferencias, conservación y forma de gestión por el usuario.',
      path: '/cookies',
    },
    en: {
      title: 'Cookie policy',
      description: 'Aeroserv cookie policy covering technical cookies, preferences, retention periods and user controls.',
      path: '/cookies',
    },
  },
};

export function getPageMetadata(lang: Lang, page: PageKey): Metadata {
  const current = pageSeo[page][lang];
  const canonical = `${siteUrl}/${lang}${current.path}`;

  return {
    title: `${current.title} | ${siteName}`,
    description: current.description,
    alternates: {
      canonical,
      languages: {
        es: `${siteUrl}/es${pageSeo[page].es.path}`,
        en: `${siteUrl}/en${pageSeo[page].en.path}`,
        'x-default': `${siteUrl}/es${pageSeo[page].es.path}`,
      },
    },
    openGraph: {
      title: `${current.title} | ${siteName}`,
      description: current.description,
      url: canonical,
      siteName,
      locale: lang === 'es' ? 'es_ES' : 'en_GB',
      type: 'website',
      images: [
        {
          url: `${siteUrl}/favicon-aeroserv.png`,
          width: 512,
          height: 512,
          alt: 'Aeroserv',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${current.title} | ${siteName}`,
      description: current.description,
      images: [`${siteUrl}/favicon-aeroserv.png`],
    },
  };
}

export const localizedRoutes = [
  { lang: 'es' as const, path: '', priority: 1 },
  { lang: 'en' as const, path: '', priority: 1 },
  { lang: 'es' as const, path: '/servicios', priority: 0.9 },
  { lang: 'en' as const, path: '/servicios', priority: 0.9 },
  { lang: 'es' as const, path: '/sobre-nosotros', priority: 0.8 },
  { lang: 'en' as const, path: '/sobre-nosotros', priority: 0.8 },
  { lang: 'es' as const, path: '/contacto', priority: 0.8 },
  { lang: 'en' as const, path: '/contacto', priority: 0.8 },
  { lang: 'es' as const, path: '/privacy', priority: 0.3 },
  { lang: 'en' as const, path: '/privacy', priority: 0.3 },
  { lang: 'es' as const, path: '/legal', priority: 0.3 },
  { lang: 'en' as const, path: '/legal', priority: 0.3 },
  { lang: 'es' as const, path: '/cookies', priority: 0.3 },
  { lang: 'en' as const, path: '/cookies', priority: 0.3 },
];

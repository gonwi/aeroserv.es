export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'es';

export const dictionary = {
  es: {
    localeLabel: 'ES',
    switcherLabel: 'Idioma',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Sobre nosotros',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Servicios aeronáuticos y logística industrial',
      title: 'Soporte industrial y logístico para operaciones aeronáuticas exigentes.',
      description:
        'Integramos soporte de montaje, mantenimiento, utillaje, logística y transporte especial con foco en calidad, trazabilidad y capacidad de respuesta.',
      primary: 'Contactar',
      secondary: 'Ver servicios',
    },
    home: {
      servicesTitle: 'Servicios principales',
      expansionTitle: 'Trayectoria y expansión',
      expansionText:
        'Aeroserv mantiene una trayectoria sostenida de crecimiento en mercados, clientes y capacidad operativa, con sedes en Puerto Real, El Puerto de Santa María, Sevilla y Madrid.',
      solutionsTitle: 'Creamos soluciones',
      solutionsBullets: [
        'Nuestra misión es adaptarnos a las necesidades de los clientes.',
        'Ofrecemos soluciones a problemas conjuntos.',
        'Colaboramos en iniciativas de mejora de costes.',
        'Fortalecemos nuestras capacidades para ampliar el volumen de cualquier proyecto.',
      ],
      facilitiesTitle: 'Instalaciones Aeroserv',
      facilitiesText:
        'Aeroserv está en constante desarrollo, con mejoras de rendimiento, recursos, nuevos sistemas y procedimientos.',
      clientsTitle: 'Algunos de nuestros clientes',
      qualityTitle: 'Máxima calidad',
      qualityText:
        'Aeroserv está certificado en EN9100 e ISO 9001, además de disponer de aprobaciones de procesos especiales vinculadas a montaje, sellado y control de calidad.',
      contactTitle: '¿Quieres contactarnos?',
      contactText: 'Atendemos consultas comerciales, técnicas e industriales relacionadas con fabricación, soporte de planta y logística aeronáutica.',
    },
    services: {
      title: 'Servicios',
      intro:
        'Una estructura preparada para responder con agilidad a necesidades de montaje, mantenimiento, logística, sellado, utillaje y transporte especial.',
    },
    about: {
      title: 'Sobre nosotros',
      intro:
        'Servicios logísticos y aeronáuticos desde 2004, con experiencia en montaje, soporte industrial, mantenimiento y mejora continua.',
    },
    contact: {
      title: 'Contacto',
      intro: 'Si necesitas soporte industrial, logístico o aeronáutico, nuestro equipo puede estudiar el alcance y responder con la solución adecuada.',
      formNote: 'Completa el formulario y tu solicitud será remitida por correo electrónico al equipo correspondiente.',
    },
    footer: {
      privacy: 'Política de privacidad',
      legal: 'Aviso legal',
      cookies: 'Política de cookies',
    },
  },
  en: {
    localeLabel: 'EN',
    switcherLabel: 'Language',
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Aeronautical services and industrial logistics',
      title: 'Industrial and logistics support for demanding aeronautical operations.',
      description:
        'We combine assembly support, maintenance, tooling, logistics and special transport with a strong focus on quality, traceability and responsiveness.',
      primary: 'Contact us',
      secondary: 'View services',
    },
    home: {
      servicesTitle: 'Core services',
      expansionTitle: 'Track record and expansion',
      expansionText:
        'Aeroserv maintains a steady growth path across markets, customers and operational capacity, with facilities in Puerto Real, El Puerto de Santa María, Seville and Madrid.',
      solutionsTitle: 'We create solutions',
      solutionsBullets: [
        'Our mission is to adapt to each client’s needs.',
        'We provide joint problem-solving solutions.',
        'We collaborate on cost improvement initiatives.',
        'We strengthen our capabilities to scale any project volume.',
      ],
      facilitiesTitle: 'Aeroserv facilities',
      facilitiesText:
        'Aeroserv is in continuous development, improving performance, resources, systems and procedures.',
      clientsTitle: 'Some of our clients',
      qualityTitle: 'Maximum quality',
      qualityText:
        'Aeroserv is certified to EN9100 and ISO 9001 and also holds approvals for special processes related to assembly, sealing and quality control.',
      contactTitle: 'Would you like to contact us?',
      contactText: 'We handle commercial, technical and industrial enquiries related to manufacturing support, plant assistance and aeronautical logistics.',
    },
    services: {
      title: 'Services',
      intro:
        'An operating structure built to respond quickly to assembly, maintenance, logistics, sealing, tooling and special transport needs.',
    },
    about: {
      title: 'About us',
      intro:
        'Aeronautical and logistics services since 2004, with experience in assembly, industrial support, maintenance and continuous improvement.',
    },
    contact: {
      title: 'Contact',
      intro: 'If you need industrial, logistics or aeronautical support, our team can review the scope and respond with the right solution.',
      formNote: 'Complete the form and your enquiry will be forwarded by email to the relevant team.',
    },
    footer: {
      privacy: 'Privacy policy',
      legal: 'Legal notice',
      cookies: 'Cookie policy',
    },
  },
} as const;

export function getDictionary(lang: Lang) {
  return dictionary[lang] ?? dictionary[defaultLang];
}

export const company = {
  phone: '+34 956 474 744',
  salesPhone: '+34 676 561 100',
  email: 'info@aeroserv.es',
  secondaryEmail: 'israel.barro@aeroserv.es',
  address: 'Pol. Ind. El Trocadero, Parcela 18-9, Calle Alemania, 11510 Puerto Real, Cádiz',
};

export const services = {
  es: [
    {
      slug: 'herramientas',
      title: 'Mantenimiento de herramientas neumáticas',
      description: 'Especialistas en asesoramiento, mantenimiento y reparación de máquinas neumáticas y eléctricas para montaje.',
    },
    {
      slug: 'montaje',
      title: 'Servicio de montaje',
      description: 'Soporte al cliente tanto in situ como en nuestras propias instalaciones.',
    },
    {
      slug: 'utillaje',
      title: 'Utillaje',
      description: 'Fabricación y mantenimiento de utillajes para el montaje y operaciones industriales.',
    },
    {
      slug: 'sellantes',
      title: 'Sellantes',
      description: 'Mezcla, dosificación, distribución y control de sellantes con procesos aprobados.',
    },
    {
      slug: 'logistica',
      title: 'Almacén logístico',
      description: 'Gestión de materia prima, corte previo y expediciones, incluyendo corte por chorro de agua.',
    },
    {
      slug: 'transporte',
      title: 'Transporte',
      description: 'Gestión de transportes especiales para elementos aeronáuticos.',
    },
  ],
  en: [
    {
      slug: 'tools',
      title: 'Pneumatic tool maintenance',
      description: 'Specialists in advisory, maintenance and repair of pneumatic and electric equipment for assembly operations.',
    },
    {
      slug: 'assembly',
      title: 'Assembly services',
      description: 'Customer support both on-site and from our own facilities.',
    },
    {
      slug: 'tooling',
      title: 'Tooling',
      description: 'Manufacturing and maintenance of tooling for assembly and industrial operations.',
    },
    {
      slug: 'sealants',
      title: 'Sealants',
      description: 'Mixing, dispensing, distribution and process-controlled sealant operations.',
    },
    {
      slug: 'logistics',
      title: 'Logistics warehouse',
      description: 'Raw material handling, pre-cutting and dispatch operations, including waterjet cutting.',
    },
    {
      slug: 'transport',
      title: 'Transport',
      description: 'Management of special transport for aeronautical structures and elements.',
    },
  ],
};

export const stats = {
  es: [
    { label: 'Fundación', value: '2004' },
    { label: 'Equipo', value: '80 FTEs' },
    { label: 'Puerto Real', value: '1.100 m²' },
    { label: 'El Puerto', value: '750 m²' },
  ],
  en: [
    { label: 'Founded', value: '2004' },
    { label: 'Team', value: '80 FTEs' },
    { label: 'Puerto Real', value: '1,100 m²' },
    { label: 'El Puerto', value: '750 m²' },
  ],
};

export const clients = [
  { name: 'Airbus', src: '/client-logos/airbus.svg', width: 399, height: 74, href: 'https://www.airbus.com/en' },
  { name: 'Airbus DS', src: '/client-logos/airbus-ds.svg', width: 254, height: 58, href: 'https://www.airbus.com/en/products-services/defence' },
  { name: 'Alestis', fallback: 'ALESTIS', href: 'https://www.alestis.aero/' },
  { name: 'Aciturri', src: '/client-logos/aciturri.png', width: 250, height: 60, href: 'https://www.aciturri.com/en/' },
  { name: 'Aernnova', src: '/client-logos/aernnova.png', width: 392, height: 45, href: 'https://www.aernnova.com/' },
  { name: 'Aritex', src: '/client-logos/aritex.svg', width: 444, height: 134, href: 'https://www.aritex.io/' },
  { name: 'Latecoere', src: '/client-logos/latecoere.webp', width: 561, height: 90, href: 'https://www.latecoere.aero/' },
] as const;

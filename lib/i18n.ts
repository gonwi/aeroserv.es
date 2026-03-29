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
      eyebrow: 'Empresa multiservicio',
      title: 'Servicios aeronáuticos y logísticos de alta eficiencia.',
      description:
        'Contamos con los procedimientos más adecuados para cumplir las expectativas de nuestros clientes, con soporte in situ y en nuestras propias instalaciones.',
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
      contactText: 'Estamos disponibles para consultas comerciales, industriales y técnicas.',
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
      intro: 'Para cualquier consulta, puedes contactarnos a través de nuestros teléfonos o por correo electrónico.',
      formNote: 'Formulario no conectado. Sustituye este bloque por tu integración preferida.',
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
      eyebrow: 'Multi-service company',
      title: 'High-efficiency aeronautical and logistics services.',
      description:
        'We operate with the right procedures to meet customer expectations, both on-site and from our own facilities.',
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
      contactText: 'We are available for commercial, industrial and technical enquiries.',
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
      intro: 'For any enquiry, you can contact us by phone or email.',
      formNote: 'Form not connected. Replace this block with your preferred integration.',
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
  { name: 'Airbus', src: '/client-logos/airbus.svg', width: 399, height: 74 },
  { name: 'Aciturri', src: '/client-logos/aciturri.png', width: 250, height: 60 },
  { name: 'Aernnova', src: '/client-logos/aernnova.png', width: 294, height: 33 },
  { name: 'Aritex', src: '/client-logos/aritex.svg', width: 444, height: 134 },
] as const;

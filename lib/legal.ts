import type { Lang } from '@/lib/i18n';

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageContent = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

const legalNotice = {
  es: {
    title: 'Aviso legal',
    intro:
      'Este sitio web se pone a disposición de los usuarios con el fin de ofrecer información corporativa y comercial sobre los servicios aeronáuticos, logísticos e industriales de AEROSERV. El acceso y uso del sitio implica la aceptación de las condiciones incluidas en este aviso legal.',
    sections: [
      {
        title: '1. Identificación del titular',
        bullets: [
          'Titular: AEROSERV PUERTO REAL, S.L.',
          'NIF: B11784485',
          'Domicilio: Pol. Ind. El Trocadero, Parcela 18-9, Calle Alemania, 11510 Puerto Real, Cádiz, España.',
          'Correo electrónico: info@aeroserv.es',
          'Teléfono: +34 956 474 744',
          'Nombre de dominio asociado: aeroserv.es',
        ],
      },
      {
        title: '2. Objeto del sitio web',
        paragraphs: [
          'El presente sitio web tiene carácter informativo y corporativo. Su finalidad es facilitar a clientes, proveedores y terceros información sobre la actividad de la empresa, sus capacidades industriales, certificaciones, centros de trabajo, datos de contacto y vías de solicitud de información comercial o técnica.',
          'La información publicada no constituye por sí sola una oferta contractual vinculante, salvo que se indique expresamente lo contrario en un documento específico suscrito por la empresa. Cualquier propuesta comercial o técnica quedará sujeta a validación posterior por AEROSERV.',
        ],
      },
      {
        title: '3. Condiciones de uso',
        bullets: [
          'El usuario se compromete a utilizar el sitio web de forma diligente, lícita y conforme a la buena fe.',
          'Queda prohibido utilizar los contenidos con fines ilícitos, lesivos de derechos o que puedan perjudicar el funcionamiento del sitio o de terceros.',
          'No se permite introducir virus, malware, bots, scraping abusivo o cualquier mecanismo destinado a alterar la integridad, disponibilidad o seguridad del sitio.',
          'El usuario responderá frente a AEROSERV o frente a terceros de cualesquiera daños o perjuicios que pudieran derivarse del incumplimiento de estas condiciones.',
        ],
      },
      {
        title: '4. Propiedad intelectual e industrial',
        paragraphs: [
          'Los textos, diseños, código fuente, estructura, fotografías, imágenes, elementos gráficos, logotipos, marcas y demás contenidos del sitio están protegidos por la normativa de propiedad intelectual e industrial y corresponden a AEROSERV o a sus legítimos titulares.',
          'La mera navegación no supone cesión, licencia o autorización alguna sobre dichos derechos. Queda prohibida la reproducción, distribución, transformación, comunicación pública o reutilización total o parcial sin autorización previa y por escrito del titular correspondiente, salvo en los casos legalmente permitidos.',
          'Las marcas, nombres comerciales, logotipos y signos distintivos de clientes, socios o terceros que puedan aparecer en el sitio se muestran únicamente con fines identificativos o de referencia comercial y pertenecen a sus respectivos titulares.',
        ],
      },
      {
        title: '5. Responsabilidad',
        paragraphs: [
          'AEROSERV adopta medidas razonables para mantener la información del sitio actualizada y para reducir errores, interrupciones o incidencias técnicas. No obstante, no garantiza la ausencia absoluta de errores ni la disponibilidad permanente del sitio web.',
          'AEROSERV no será responsable de los daños derivados del uso indebido del sitio, de la falta de disponibilidad temporal, ni de la actuación de terceros ajenos, incluidos proveedores de telecomunicaciones o servicios tecnológicos.',
          'En la medida permitida por la ley, AEROSERV excluye cualquier responsabilidad derivada de decisiones adoptadas por el usuario con base exclusiva en la información publicada en el sitio sin contraste técnico, contractual o comercial adicional.',
        ],
      },
      {
        title: '6. Enlaces externos',
        paragraphs: [
          'El sitio web puede incluir enlaces a páginas de terceros únicamente a efectos informativos o de referencia comercial. AEROSERV no controla ni asume responsabilidad por los contenidos, políticas o prácticas de dichos sitios externos.',
        ],
      },
      {
        title: '7. Disponibilidad, seguridad y continuidad',
        paragraphs: [
          'AEROSERV podrá suspender, limitar o modificar temporalmente el acceso al sitio por motivos técnicos, de mantenimiento, seguridad o mejora, sin que ello genere derecho a indemnización. La empresa se reserva el derecho a actualizar contenidos, estructura, diseño o funcionalidades en cualquier momento.',
        ],
      },
      {
        title: '8. Protección de datos y cookies',
        paragraphs: [
          'El tratamiento de datos personales derivado del uso del sitio y del formulario de contacto se regula en la Política de privacidad. La información sobre cookies y tecnologías similares se recoge en la Política de cookies.',
        ],
      },
      {
        title: '9. Legislación aplicable y jurisdicción',
        paragraphs: [
          'Este aviso legal se rige por la normativa española. Salvo que la normativa imperativa disponga otra cosa, cualquier controversia relacionada con el sitio web se someterá a los juzgados y tribunales del domicilio del titular del sitio o, cuando proceda, al fuero legalmente aplicable al consumidor o usuario.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice',
    intro:
      'This website is made available to users to provide corporate and commercial information about AEROSERV’s aeronautical, logistics and industrial services. Access to and use of the website implies acceptance of the terms set out in this legal notice.',
    sections: [
      {
        title: '1. Website owner',
        bullets: [
          'Owner: AEROSERV PUERTO REAL, S.L.',
          'Tax ID: B11784485',
          'Registered address: Pol. Ind. El Trocadero, Parcela 18-9, Calle Alemania, 11510 Puerto Real, Cádiz, Spain.',
          'Email: info@aeroserv.es',
          'Phone: +34 956 474 744',
          'Associated domain name: aeroserv.es',
        ],
      },
      {
        title: '2. Purpose of the website',
        paragraphs: [
          'This website is for informational and corporate purposes. Its aim is to provide customers, suppliers and third parties with information about the company’s activities, industrial capabilities, certifications, facilities, contact data and channels for commercial or technical enquiries.',
          'Information published on the website does not by itself constitute a binding contractual offer unless expressly stated otherwise in a specific document issued by the company. Any commercial or technical proposal remains subject to subsequent validation by AEROSERV.',
        ],
      },
      {
        title: '3. Terms of use',
        bullets: [
          'Users must use the website lawfully, diligently and in good faith.',
          'Use of the content for unlawful purposes, rights infringements or actions that may damage the website or third parties is prohibited.',
          'The introduction of viruses, malware, abusive scraping, bots or any mechanism intended to alter the integrity, availability or security of the website is forbidden.',
          'Users shall be liable to AEROSERV or to third parties for any damage arising from a breach of these conditions.',
        ],
      },
      {
        title: '4. Intellectual and industrial property',
        paragraphs: [
          'Texts, layouts, source code, structure, photographs, images, graphic elements, logos, trademarks and all other content on the website are protected under intellectual and industrial property laws and belong to AEROSERV or their rightful owners.',
          'Browsing the website does not grant any transfer, licence or authorisation over such rights. Total or partial reproduction, distribution, transformation, public communication or reuse is prohibited without prior written permission, except where expressly allowed by law.',
          'Any trademarks, trade names, logos or distinctive signs belonging to clients, partners or third parties that may appear on the website are displayed solely for identification or business-reference purposes and remain the property of their respective owners.',
        ],
      },
      {
        title: '5. Liability',
        paragraphs: [
          'AEROSERV takes reasonable steps to keep website information updated and to minimise errors, interruptions or technical incidents. However, it does not guarantee the total absence of errors or uninterrupted availability.',
          'AEROSERV shall not be liable for damages arising from improper use of the website, temporary unavailability, or actions by third parties outside its control, including telecommunications or technology providers.',
          'To the extent permitted by law, AEROSERV excludes liability for decisions taken by users solely on the basis of information published on the website without additional technical, contractual or commercial verification.',
        ],
      },
      {
        title: '6. External links',
        paragraphs: [
          'The website may include links to third-party sites for informational or business reference purposes only. AEROSERV does not control and is not responsible for the content, policies or practices of such external websites.',
        ],
      },
      {
        title: '7. Availability, security and continuity',
        paragraphs: [
          'AEROSERV may temporarily suspend, limit or modify access to the website for technical, maintenance, security or improvement reasons, without giving rise to any right to compensation. The company reserves the right to update content, structure, design or functionality at any time.',
        ],
      },
      {
        title: '8. Data protection and cookies',
        paragraphs: [
          'Processing of personal data arising from use of the website and the contact form is governed by the Privacy Policy. Information on cookies and similar technologies is set out in the Cookie Policy.',
        ],
      },
      {
        title: '9. Governing law and jurisdiction',
        paragraphs: [
          'This legal notice is governed by Spanish law. Unless mandatory rules provide otherwise, any dispute relating to the website shall be submitted to the courts of the owner’s registered address or, where applicable, to the legally competent courts for consumers and users.',
        ],
      },
    ],
  },
} as const satisfies Record<Lang, LegalPageContent>;

const privacyPolicy = {
  es: {
    title: 'Política de privacidad',
    intro:
      'En esta política se explica cómo AEROSERV trata los datos personales recabados a través del sitio web, especialmente mediante el formulario de contacto y las comunicaciones recibidas por correo electrónico o teléfono. El tratamiento se realiza conforme al Reglamento (UE) 2016/679 (RGPD), a la Ley Orgánica 3/2018 (LOPDGDD) y a la normativa española aplicable.',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        bullets: [
          'Responsable: AEROSERV PUERTO REAL, S.L.',
          'NIF: B11784485',
          'Dirección postal: Pol. Ind. El Trocadero, Parcela 18-9, Calle Alemania, 11510 Puerto Real, Cádiz, España.',
          'Correo de contacto: info@aeroserv.es',
          'Teléfono: +34 956 474 744',
        ],
      },
      {
        title: '2. Datos que tratamos',
        bullets: [
          'Datos identificativos y de contacto facilitados por el usuario, como nombre, empresa, correo electrónico, teléfono y contenido del mensaje.',
          'Datos incluidos voluntariamente en comunicaciones remitidas por email o a través del formulario de contacto.',
          'Datos técnicos mínimos necesarios para la seguridad y funcionamiento del sitio, como registros del servidor o información básica de conexión.',
          'Preferencias técnicas no publicitarias necesarias para recordar ajustes de interfaz, como el modo claro u oscuro cuando el usuario interactúa con esa funcionalidad.',
        ],
      },
      {
        title: '3. Finalidades del tratamiento',
        bullets: [
          'Atender solicitudes de información comercial, técnica o corporativa.',
          'Gestionar comunicaciones con potenciales clientes, proveedores o colaboradores.',
          'Hacer seguimiento de solicitudes relacionadas con servicios, presupuestos, visitas o soporte.',
          'Mantener evidencias de las comunicaciones para la defensa de derechos e intereses legítimos de la empresa.',
        ],
      },
      {
        title: '4. Base jurídica',
        bullets: [
          'Consentimiento del interesado al remitir voluntariamente sus datos mediante el formulario o por correo electrónico.',
          'Aplicación de medidas precontractuales o ejecución de relaciones comerciales cuando la solicitud esté vinculada a una posible contratación.',
          'Interés legítimo de la empresa en gestionar comunicaciones profesionales, mantener la seguridad del sitio y responder a consultas relacionadas con su actividad.',
        ],
      },
      {
        title: '5. Destinatarios y encargados',
        paragraphs: [
          'Con carácter general, los datos no se ceden a terceros salvo obligación legal. No obstante, pueden acceder a ellos proveedores que prestan servicios tecnológicos o de alojamiento, servicios de correo electrónico, mantenimiento web o soporte informático, siempre bajo contratos de encargo del tratamiento y siguiendo instrucciones de AEROSERV.',
          'En particular, cuando el formulario de contacto remite mensajes por correo electrónico, los datos pueden ser tratados por el proveedor de servicios de correo o infraestructura SMTP utilizado por AEROSERV o por su proveedor técnico para la correcta entrega de la comunicación.',
        ],
      },
      {
        title: '6. Transferencias internacionales',
        paragraphs: [
          'Con carácter general, AEROSERV procurará que los proveedores que accedan a datos personales ofrezcan garantías adecuadas y operen dentro del Espacio Económico Europeo o, en su caso, con mecanismos válidos conforme al RGPD. Si existieran transferencias internacionales derivadas del proveedor de correo o infraestructura tecnológica, estas se apoyarán en las garantías legales aplicables.',
        ],
      },
      {
        title: '7. Conservación de los datos',
        bullets: [
          'Los datos derivados de consultas generales se conservarán durante el tiempo necesario para responder a la solicitud y, posteriormente, durante los plazos necesarios para atender posibles responsabilidades.',
          'Cuando exista una relación comercial o precontractual, los datos podrán conservarse mientras dicha relación se mantenga y durante los plazos legales aplicables.',
          'Los datos que deban conservarse por obligaciones legales, fiscales, mercantiles o de defensa jurídica se mantendrán bloqueados durante los plazos exigidos por la normativa.',
        ],
      },
      {
        title: '8. Derechos de las personas interesadas',
        paragraphs: [
          'Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento cuando proceda, enviando una solicitud a info@aeroserv.es o por escrito a la dirección postal indicada. Para tramitar la solicitud, AEROSERV podrá pedir información razonable para verificar la identidad del solicitante.',
          'Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento no se ajusta a la normativa vigente.',
        ],
      },
      {
        title: '9. Decisiones automatizadas y perfiles',
        paragraphs: [
          'AEROSERV no adopta decisiones automatizadas con efectos jurídicos sobre el usuario ni elabora perfiles comerciales automatizados a partir de la información facilitada mediante este sitio web.',
        ],
      },
      {
        title: '10. Seguridad y confidencialidad',
        paragraphs: [
          'AEROSERV aplica medidas técnicas y organizativas razonables para proteger los datos personales frente a acceso no autorizado, alteración, pérdida o tratamiento indebido, teniendo en cuenta la naturaleza de la información y los riesgos asociados.',
        ],
      },
      {
        title: '11. Comunicaciones comerciales',
        paragraphs: [
          'AEROSERV no enviará comunicaciones comerciales electrónicas no solicitadas salvo que exista una base legítima para ello y se facilite al destinatario la posibilidad de oponerse o darse de baja de forma sencilla, de acuerdo con la normativa aplicable.',
        ],
      },
      {
        title: '12. Menores de edad',
        paragraphs: [
          'Este sitio web y sus servicios de contacto no están dirigidos a menores de 14 años. Si se detecta que se han recibido datos de un menor sin la debida autorización, dichos datos se eliminarán tan pronto como sea posible.',
        ],
      },
      {
        title: '13. Cambios en la política',
        paragraphs: [
          'AEROSERV podrá actualizar esta política para adaptarla a cambios legislativos, jurisprudenciales o técnicos. La versión publicada en el sitio web será la vigente en cada momento.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    intro:
      'This policy explains how AEROSERV processes personal data collected through the website, especially through the contact form and communications received by email or phone. Processing is carried out in accordance with Regulation (EU) 2016/679 (GDPR), Organic Law 3/2018 and applicable Spanish law.',
    sections: [
      {
        title: '1. Data controller',
        bullets: [
          'Controller: AEROSERV PUERTO REAL, S.L.',
          'Tax ID: B11784485',
          'Postal address: Pol. Ind. El Trocadero, Parcela 18-9, Calle Alemania, 11510 Puerto Real, Cádiz, Spain.',
          'Contact email: info@aeroserv.es',
          'Phone: +34 956 474 744',
        ],
      },
      {
        title: '2. Data we process',
        bullets: [
          'Identification and contact data provided by the user, such as name, company, email address, phone number and message content.',
          'Information voluntarily included in communications sent by email or through the contact form.',
          'Minimum technical data required for website security and operation, such as server logs or basic connection information.',
          'Non-advertising technical preferences needed to remember interface settings, such as light or dark mode when users interact with that feature.',
        ],
      },
      {
        title: '3. Purposes of processing',
        bullets: [
          'To respond to commercial, technical or corporate enquiries.',
          'To manage communications with potential customers, suppliers or partners.',
          'To follow up on requests related to services, quotations, visits or support.',
          'To keep records of communications for the defence of the company’s rights and legitimate interests.',
        ],
      },
      {
        title: '4. Legal basis',
        bullets: [
          'The data subject’s consent when data is voluntarily submitted through the form or by email.',
          'Performance of pre-contractual steps or commercial relations when the request relates to a possible business engagement.',
          'The company’s legitimate interest in managing professional communications, maintaining website security and responding to business-related requests.',
        ],
      },
      {
        title: '5. Recipients and processors',
        paragraphs: [
          'As a general rule, personal data is not disclosed to third parties unless legally required. However, it may be accessed by service providers supplying hosting, email, website maintenance or IT support services, always under data processing agreements and following AEROSERV’s instructions.',
          'In particular, where the contact form forwards messages by email, the data may be processed by the email service or SMTP infrastructure provider used by AEROSERV or by its technical provider for proper delivery of the communication.',
        ],
      },
      {
        title: '6. International transfers',
        paragraphs: [
          'As a general rule, AEROSERV seeks to work with providers offering appropriate safeguards and operating within the European Economic Area or, where applicable, under valid mechanisms in accordance with the GDPR. If international transfers arise from the email provider or technical infrastructure, they will rely on the applicable legal safeguards.',
        ],
      },
      {
        title: '7. Data retention',
        bullets: [
          'Data derived from general enquiries will be kept for the time necessary to handle the request and afterwards for as long as needed to address possible liabilities.',
          'Where there is a commercial or pre-contractual relationship, data may be retained for the duration of that relationship and for the legally required retention periods.',
          'Data that must be retained to comply with legal, tax, commercial or defence obligations will remain blocked for the periods required by law.',
        ],
      },
      {
        title: '8. Data subject rights',
        paragraphs: [
          'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw consent where applicable, by emailing info@aeroserv.es or writing to the postal address indicated above. AEROSERV may request reasonable information to verify the identity of the applicant.',
          'You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) if you believe processing does not comply with applicable regulations.',
        ],
      },
      {
        title: '9. Automated decisions and profiling',
        paragraphs: [
          'AEROSERV does not carry out automated decisions producing legal effects on users, nor does it build automated commercial profiles based on information submitted through this website.',
        ],
      },
      {
        title: '10. Security and confidentiality',
        paragraphs: [
          'AEROSERV applies reasonable technical and organisational measures to protect personal data against unauthorised access, alteration, loss or improper processing, taking into account the nature of the information and the associated risks.',
        ],
      },
      {
        title: '11. Commercial communications',
        paragraphs: [
          'AEROSERV will not send unsolicited electronic marketing communications unless there is a lawful basis to do so and recipients are given a simple way to object or unsubscribe, in accordance with applicable law.',
        ],
      },
      {
        title: '12. Minors',
        paragraphs: [
          'This website and its contact services are not intended for children under 14 years of age. If data from a child is detected without the appropriate authorisation, it will be deleted as soon as possible.',
        ],
      },
      {
        title: '13. Policy changes',
        paragraphs: [
          'AEROSERV may update this policy to reflect legal, case law or technical changes. The version published on the website is the version currently in force.',
        ],
      },
    ],
  },
} as const satisfies Record<Lang, LegalPageContent>;

const cookiePolicy = {
  es: {
    title: 'Política de cookies',
    intro:
      'Esta política informa sobre el uso de cookies y tecnologías similares en este sitio web. Su contenido se ha redactado de acuerdo con la normativa española aplicable, especialmente el artículo 22.2 de la Ley 34/2002 (LSSI-CE), el RGPD y la Guía sobre el uso de las cookies publicada por la Agencia Española de Protección de Datos.',
    sections: [
      {
        title: '1. Qué son las cookies',
        paragraphs: [
          'Las cookies son pequeños archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Permiten, entre otras cosas, garantizar el funcionamiento técnico del sitio, recordar determinadas preferencias o recabar información estadística sobre la navegación cuando se habilitan herramientas de medición.',
        ],
      },
      {
        title: '2. Cookies utilizadas en este sitio',
        paragraphs: [
          'En la configuración actual de este sitio web no se instalan cookies analíticas, publicitarias ni de personalización de terceros. El sitio opera, con carácter general, sin herramientas de seguimiento comercial ni medición avanzada del comportamiento del usuario.',
          'Podrán existir cookies o mecanismos estrictamente necesarios para el funcionamiento técnico, la seguridad, la gestión de sesión o la prestación de servicios expresamente solicitados por el usuario. Estas cookies técnicas no requieren consentimiento previo cuando son indispensables para prestar el servicio.',
          'Adicionalmente, determinadas preferencias de interfaz, como la elección entre modo claro y modo oscuro, pueden almacenarse en el navegador mediante mecanismos de almacenamiento local similares a las cookies con finalidad exclusivamente técnica y funcional.',
        ],
      },
      {
        title: '3. Gestión del consentimiento',
        paragraphs: [
          'Si en el futuro se incorporan cookies analíticas, de preferencia o de publicidad no exentas, AEROSERV habilitará un mecanismo de información y obtención de consentimiento previo, granular y revocable, antes de su instalación.',
        ],
      },
      {
        title: '4. Tipología de cookies según la normativa',
        bullets: [
          'Cookies técnicas o estrictamente necesarias: permiten la navegación y el funcionamiento básico del sitio.',
          'Cookies de preferencias o personalización: recuerdan opciones del usuario cuando la funcionalidad lo justifica.',
          'Cookies analíticas: permiten medir el uso del sitio.',
          'Cookies publicitarias o de publicidad comportamental: permiten gestionar espacios publicitarios o perfilar hábitos de navegación.',
        ],
      },
      {
        title: '5. Cómo desactivar o eliminar cookies',
        paragraphs: [
          'El usuario puede permitir, bloquear o eliminar cookies mediante la configuración de su navegador. La desactivación de determinadas cookies técnicas puede afectar al correcto funcionamiento del sitio web.',
        ],
        bullets: [
          'Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.',
          'Mozilla Firefox: Ajustes > Privacidad y seguridad.',
          'Safari: Preferencias > Privacidad.',
          'Microsoft Edge: Configuración > Cookies y permisos del sitio.',
        ],
      },
      {
        title: '6. Actualizaciones',
        paragraphs: [
          'Esta política podrá modificarse si cambian los criterios normativos, técnicos o de configuración del sitio. Se recomienda revisarla periódicamente.',
        ],
      },
    ],
  },
  en: {
    title: 'Cookie policy',
    intro:
      'This policy explains the use of cookies and similar technologies on this website. It has been drafted in accordance with applicable Spanish law, in particular Article 22.2 of Law 34/2002, the GDPR and the guidance on cookies issued by the Spanish Data Protection Agency.',
    sections: [
      {
        title: '1. What cookies are',
        paragraphs: [
          'Cookies are small files downloaded to a user’s device when visiting certain websites. They can help ensure the technical operation of the website, remember preferences or collect statistical information on browsing where measurement tools are enabled.',
        ],
      },
      {
        title: '2. Cookies used on this website',
        paragraphs: [
          'In the website’s current configuration, no third-party analytics, advertising or personalisation cookies are installed. The website generally operates without commercial tracking tools or advanced user behaviour analytics.',
          'Strictly necessary cookies or similar mechanisms may exist where required for technical operation, security, session management or to provide services expressly requested by the user. Such technical cookies do not require prior consent when they are essential to provide the service.',
          'In addition, certain interface preferences, such as the choice between light and dark mode, may be stored in the browser through local storage or similar browser-side mechanisms for purely technical and functional purposes.',
        ],
      },
      {
        title: '3. Consent management',
        paragraphs: [
          'If analytics, preference or advertising cookies that are not exempt are added in the future, AEROSERV will implement an information and consent mechanism that is prior, granular and revocable before those cookies are installed.',
        ],
      },
      {
        title: '4. Types of cookies under applicable rules',
        bullets: [
          'Technical or strictly necessary cookies: enable browsing and core website operation.',
          'Preference or personalisation cookies: remember user choices where the functionality justifies it.',
          'Analytics cookies: measure website use.',
          'Advertising or behavioural advertising cookies: manage ad spaces or profile browsing habits.',
        ],
      },
      {
        title: '5. How to disable or delete cookies',
        paragraphs: [
          'Users may allow, block or delete cookies through their browser settings. Disabling certain technical cookies may affect the proper functioning of the website.',
        ],
        bullets: [
          'Google Chrome: Settings > Privacy and security > Cookies and other site data.',
          'Mozilla Firefox: Settings > Privacy & Security.',
          'Safari: Preferences > Privacy.',
          'Microsoft Edge: Settings > Cookies and site permissions.',
        ],
      },
      {
        title: '6. Updates',
        paragraphs: [
          'This policy may be updated if legal, technical or website configuration criteria change. Users are encouraged to review it periodically.',
        ],
      },
    ],
  },
} as const satisfies Record<Lang, LegalPageContent>;

export function getLegalPageContent(page: 'legal' | 'privacy' | 'cookies', lang: Lang): LegalPageContent {
  if (page === 'legal') return legalNotice[lang];
  if (page === 'privacy') return privacyPolicy[lang];
  return cookiePolicy[lang];
}

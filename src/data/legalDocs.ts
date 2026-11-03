export interface LegalDocItem {
  id: 'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos' | 'politica-cookies';
  code: string;
  version: string;
  date: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  pdfUrl: string;
  directPdfFileName: string;
  sections: {
    title: string;
    content: string | string[];
    isHighlighted?: boolean;
  }[];
}

export const LEGAL_DOCS: LegalDocItem[] = [
  {
    id: 'autorizacion-datos',
    code: 'AT-01',
    version: '02',
    date: '2 de noviembre de 2026',
    title: 'Autorización para el Tratamiento de Datos Personales',
    shortTitle: 'Autorización Tratamiento de Datos Personales',
    badge: 'Documento Oficial AT-01',
    description: 'Documento informativo para aceptación digital previa al envío de formularios de contacto, diagnósticos, registros y solicitudes de consultoría.',
    pdfUrl: './docs/autorizacion-tratamiento-datos.pdf',
    directPdfFileName: '04_Autorizacion_Tratamiento_Datos_PL_CyM_7e1d08c5.pdf',
    sections: [
      {
        title: 'Documento Informativo para Aceptación Digital',
        content: 'Este documento contiene las condiciones de autorización que se presentan al titular antes de marcar la casilla de aceptación en un formulario digital. La aceptación se registra en el formulario; por tanto, no se requiere imprimir ni firmar este documento.'
      },
      {
        title: '1. Identificación de la Responsable',
        content: [
          'La Responsable del tratamiento es Patricia Loaiza, persona natural domiciliada en Medellín, Colombia, quien actúa bajo las marcas PATRICIA LOAIZA™ y CREA Y MONETIZA™.',
          'Correo electrónico: info@patriloaiza.com | Teléfono / WhatsApp: +57 300 813 5043',
          'Dirección: Calle 34A 40-51, Medellín, Antioquia, Colombia.',
          'Sitio web oficial: https://soypatricialoaiza.com'
        ]
      },
      {
        title: '2. Autorización y Finalidades',
        content: [
          'En cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1074 de 2015 y las normas que los modifiquen o complementen, al marcar la casilla de aceptación del formulario, autorizo de manera previa, expresa e informada a Patricia Loaiza para recolectar, almacenar, consultar, usar, actualizar, circular, transmitir y suprimir mis datos personales para las siguientes finalidades:',
          '• Gestionar solicitudes de información, formularios, prediagnósticos, diagnósticos, cotizaciones, propuestas y procesos de vinculación.',
          '• Prestar y administrar servicios de consultoría, mentoría, acompañamiento estratégico, formación y acceso a plataformas, herramientas, recursos o comunidades; coordinar sesiones, entregas, seguimiento y comunicaciones.',
          '• Gestionar la relación contractual, administrativa, contable y tributaria, incluida facturación, cobros, pagos y cumplimiento de obligaciones legales.',
          '• Organizar y conservar la información profesional y de negocio entregada voluntariamente para el desarrollo de los servicios.',
          '• Atender consultas, peticiones, quejas y reclamos; velar por la seguridad de los sistemas y prevenir usos no autorizados o fraudulentos.',
          '• Elaborar estadísticas internas y evaluar la calidad de los servicios mediante información agregada o anonimizada.'
        ]
      },
      {
        title: '3. Finalidades de Marketing, Publicidad y Prospección',
        content: [
          'Si marco la casilla opcional de autorización comercial del formulario, autorizo adicionalmente a Patricia Loaiza | Crea y Monetiza a tratar mis datos de contacto, perfil profesional, preferencias e interacciones para:',
          '• Captar y administrar prospectos provenientes de formularios, landing pages, anuncios, redes sociales, webinars y eventos.',
          '• Clasificar y segmentar contactos según profesión, actividad, intereses y servicios consultados.',
          '• Realizar prospección comercial, seguimiento de interesados y nutrición de prospectos para presentar servicios, consultorías y ofertas.',
          '• Enviar comunicaciones comerciales por email, WhatsApp, SMS, llamadas o mensajería (boletines, secuencias automatizadas, lanzamientos, invitaciones y novedades).',
          '• Administrar campañas en plataformas propias o de terceros, incluyendo audiencias personalizadas, públicos similares y remarketing/retargeting cuando la normativa lo permita.',
          '• Automatizar tareas de marketing y gestión comercial mediante CRM (asignación de etiquetas, etapas y recordatorios).',
          '• Analizar resultados para mejorar la pertinencia de los contenidos y servicios ofrecidos.',
          'Nota: La autorización comercial no implica la venta de datos. No se autoriza que aliados comerciales utilicen los datos para sus propias campañas independientes sin autorización previa.'
        ]
      },
      {
        title: '4. Proveedores Tecnológicos y Transmisiones',
        content: [
          'Mis datos podrán ser tratados por proveedores tecnológicos por cuenta de la Responsable: plataformas CRM y de automatización, correo y mensajería, hosting y almacenamiento en la nube, agenda, pasarelas de pago, analítica y herramientas de inteligencia artificial utilizadas como apoyo para organizar información, transcribir o redactar borradores.',
          'Estos proveedores podrán procesar datos desde Colombia u otros países bajo estándares de seguridad y confidencialidad. Los datos de tarjetas son gestionados exclusivamente por pasarelas certificadas; Patricia Loaiza no almacena números de tarjeta.',
          'Esta autorización no permite vender datos ni entregarlos a terceros para fines propios no informados.'
        ]
      },
      {
        title: '5. Derechos del Titular y Canales de Atención',
        content: [
          'Tengo derecho a conocer, actualizar, rectificar y suprimir mis datos; solicitar prueba de la autorización; conocer el uso dado; revocar la autorización cuando proceda; y acceder gratuitamente a mis datos.',
          'Para ejercer estos derechos puedo escribir a: info@patriloaiza.com indicando en el asunto "Protección de Datos Personales – Ejercicio de Derechos".',
          'También puedo acudir ante la Superintendencia de Industria y Comercio (SIC) una vez agotado el trámite ante la Responsable.'
        ]
      },
      {
        title: '6. Datos Sensibles y Menores de Edad',
        content: 'El suministro de datos sensibles es facultativo. Los servicios están dirigidos exclusivamente a mayores de 18 años y no se solicitan intencionalmente datos de menores de edad.'
      },
      {
        title: '7. Política Aplicable y Constancia Digital',
        content: 'Declaro que tuve la posibilidad de consultar la Política de Tratamiento de Datos Personales PL-01 y el Aviso de Privacidad AV-01 en https://bio.patriloaiza.com o en info@patriloaiza.com. La Responsable conservará evidencia de la aceptación digital.'
      },
      {
        title: '8. Textos Oficiales para Configurar en Formulario (GoHighLevel / Web)',
        isHighlighted: true,
        content: [
          'CASILLA OBLIGATORIA (sin marcar por defecto):',
          '«He leído y autorizo el tratamiento de mis datos personales por Patricia Loaiza, conforme a la Autorización para el Tratamiento de Datos Personales AT-01 y a la Política de Tratamiento de Datos Personales PL-01. Entiendo las finalidades, mis derechos y los canales para ejercerlos.»',
          '----------------------------------------',
          'CASILLA OPCIONAL E INDEPENDIENTE (Comercial / Marketing):',
          '«SÍ AUTORIZO, de manera libre, previa, expresa e informada, a Patricia Loaiza | Crea y Monetiza a utilizar mis datos de contacto, perfil profesional, preferencias e interacciones para prospección comercial, segmentación, envío de email marketing, WhatsApp, SMS y llamadas comerciales; boletines, secuencias automatizadas, campañas, lanzamientos, promociones, invitaciones y ofertas; administración de CRM; medición de aperturas, clics y conversiones; y publicidad en redes sociales y buscadores conforme a la sección 3 del documento AT-01. Esta autorización es opcional y puedo retirarla en cualquier momento.»'
        ]
      }
    ]
  },
  {
    id: 'politica-datos',
    code: 'PL-01',
    version: '01',
    date: '2 de noviembre de 2026',
    title: 'Política de Tratamiento de Datos Personales',
    shortTitle: 'Política de Tratamiento de Datos (PL-01)',
    badge: 'Normativa General Colombia & Internacional',
    description: 'Manual de políticas y procedimientos para el tratamiento de datos personales conforme a la Ley 1581 de 2012, Decreto 1074 de 2015, RGPD (Unión Europea) y CCPA/CPRA.',
    pdfUrl: './docs/politica-tratamiento-datos.pdf',
    directPdfFileName: '02_Politica_Tratamiento_Datos_PL_CyM_f45cbe19.pdf',
    sections: [
      {
        title: '1. Base Legal y Ámbito de Aplicación',
        content: 'Expedida en cumplimiento de los artículos 15 y 20 de la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012 (LEPD), el Decreto 1074 de 2015, la Ley 1266 de 2008, la Ley 2300 de 2023 y actos administrativos de la SIC. Asimismo incorpora estándares del RGPD (UE 2016/679), UK GDPR, CCPA/CPRA (California), LGPD (Brasil), Ley 25.326 (Argentina) y LFPDPPP (México).'
      },
      {
        title: '2. Responsable del Tratamiento',
        content: 'Patricia Loaiza, persona natural con domicilio en Medellín, Colombia. Correo: info@patriloaiza.com | WhatsApp: +57 300 813 5043. Asume también las funciones de Oficial de Protección de Datos.'
      },
      {
        title: '3. Principios Rectores',
        content: 'Legalidad, finalidad, libertad, veracidad/calidad, transparencia, acceso y circulación restringida, seguridad, confidencialidad y responsabilidad demostrada (privacy by design).'
      },
      {
        title: '4. Datos que se Tratan',
        content: 'Identificación y contacto, perfil profesional y de negocio, contenidos y materiales entregados voluntariamente, datos transaccionales de facturación (procesados por pasarelas externas seguras sin almacenar tarjetas), grabaciones de sesiones previo aviso y datos técnicos de navegación.'
      },
      {
        title: '5. Uso de Herramientas de Inteligencia Artificial',
        content: 'Patricia Loaiza puede utilizar herramientas de IA y automatización para transcribir, organizar información o elaborar borradores de consultoría. Se seleccionan proveedores con cláusulas de confidencialidad y configuraciones que limitan el entrenamiento de modelos de terceros con datos del cliente. No se toman decisiones automatizadas con efectos jurídicos sin intervención humana.'
      },
      {
        title: '6. Procedimiento para Ejercicio de Derechos',
        content: 'Escribir a info@patriloaiza.com. Plazos de respuesta: Consultas en máximo 10 días hábiles; Reclamos en máximo 15 días hábiles; RGPD en máximo 1 mes; CCPA en 45 días.'
      },
      {
        title: '7. Cookies y Tecnologías Similares',
        content: 'Se utilizan cookies funcionales, de analítica y de publicidad. Salvo las necesarias, las cookies requieren consentimiento previo mediante el panel correspondiente y pueden gestionarse desde el navegador.'
      },
      {
        title: '8. Vigencia',
        content: 'Rige a partir del 2 de noviembre de 2026 y permanece vigente mientras se traten datos personales conforme a los plazos legales de conservación.'
      }
    ]
  },
  {
    id: 'aviso-privacidad',
    code: 'AV-01',
    version: '01',
    date: '2 de noviembre de 2026',
    title: 'Aviso de Privacidad',
    shortTitle: 'Aviso de Privacidad (AV-01)',
    badge: 'Aviso Legal & Privacidad Web',
    description: 'Comunicación resumida al titular que informa la existencia de la Política de Tratamiento, las finalidades del tratamiento, datos de contacto y canales de atención.',
    pdfUrl: './docs/aviso-privacidad.pdf',
    directPdfFileName: '03_Aviso_Privacidad_PL_CyM_240702ab.pdf',
    sections: [
      {
        title: '1. Responsable del Tratamiento',
        content: 'Patricia Loaiza, con domicilio en Medellín, Colombia (marcas PATRICIA LOAIZA™ y CREA Y MONETIZA™). Correo: info@patriloaiza.com | WhatsApp: +57 300 813 5043.'
      },
      {
        title: '2. Finalidades Principales',
        content: [
          '• Prestar servicios de consultoría estratégica, mentoría, formación y herramientas.',
          '• Gestión administrativa, facturación y pagos.',
          '• Envío de comunicaciones comerciales y prospección comercial previa autorización.',
          '• Elaboración de estadísticas internas y mejora continua.',
          '• Atención de consultas, reclamos y cumplimiento legal.',
          'Los datos no serán vendidos ni usados para finalidades no autorizadas.'
        ]
      },
      {
        title: '3. Derechos del Titular',
        content: 'Conocer, actualizar, rectificar y suprimir datos, solicitar prueba de la autorización, revocar el consentimiento y presentar quejas ante la SIC o autoridades competentes.'
      },
      {
        title: '4. Canales para Ejercer Derechos',
        content: 'Correo electrónico: info@patriloaiza.com con el asunto "Ejercicio de Derechos de Datos Personales".'
      },
      {
        title: '5. Ubicación de la Política Completa',
        content: 'La Política de Tratamiento de Datos Personales PL-01 completa está publicada en el sitio web oficial https://soypatricialoaiza.com y disponible mediante solicitud por correo.'
      }
    ]
  },
  {
    id: 'politica-cookies',
    code: 'CK-01',
    version: '01',
    date: '3 de noviembre de 2026',
    title: 'Política de Cookies y Tecnologías Similares',
    shortTitle: 'Política de Cookies (CK-01)',
    badge: 'Normativa Web & Analítica',
    description: 'Información sobre el uso de cookies técnicas, de preferencias, analíticas (Google Analytics 4) y de medición en https://soypatricialoaiza.com.',
    pdfUrl: './docs/politica-cookies.pdf',
    directPdfFileName: '05_Politica_Cookies_PL_CyM_91ab48e2.pdf',
    sections: [
      {
        title: '1. Identificación de la Responsable',
        content: 'Patricia Loaiza, domiciliada en Medellín, Colombia (marcas PATRICIA LOAIZA™ y CREA Y MONETIZA™). Correo: info@patriloaiza.com | WhatsApp: +57 300 813 5043. Sitio web: https://soypatricialoaiza.com'
      },
      {
        title: '2. ¿Qué son las Cookies?',
        content: 'Archivos de datos descargados en el navegador del usuario al visitar el sitio web para recordar preferencias, autenticar sesiones y medir el tráfico de forma agregada.'
      },
      {
        title: '3. Tipos de Cookies Utilizadas',
        content: [
          '• Técnicas y necesarias: Imprescindibles para el funcionamiento y seguridad de la plataforma.',
          '• Analíticas y de medición: Miden visitas y comportamiento agregado con Google Analytics 4 (_ga, _ga_*).',
          '• De preferencias: Guardan tu elección sobre el uso de cookies (pl_cookie_consent).',
          '• De marketing/conversión: Evalúan la efectividad de campañas y clics hacia los embudos de consultoría.'
        ]
      },
      {
        title: '4. Gestión y Desactivación',
        content: 'Puedes gestionar o revocar tu consentimiento en cualquier momento mediante las opciones de configuración de tu navegador (Chrome, Firefox, Safari, Edge) o mediante las opciones de privacidad del sitio.'
      }
    ]
  }
];

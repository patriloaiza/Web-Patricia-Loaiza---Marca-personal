const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'pages');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const BASE_URL = 'https://soypatricialoaiza.com';
const PREDIAGNOSTICO_URL = 'https://test.creaymonetiza.online/diagnostico_p1-page';

const createPageLayout = ({ title, description, canonicalUrl, h1, kicker, subname, tagline, modality, duration, contentHtml, schemaJson, pilarNum }) => `<!doctype html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Patricia Loaiza</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/jpeg" href="../assets/aistudio/isotipo_fondo_transparente_f86013c4.jpeg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  
  <!-- OpenGraph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${title} | Patricia Loaiza" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${BASE_URL}/assets/aistudio/Patri_Medio_cuerpo_web_745a0efc.webp" />
  <meta property="og:site_name" content="Patricia Loaiza · Consultora de Marketing y Negocios" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title} | Patricia Loaiza" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${BASE_URL}/assets/aistudio/Patri_Medio_cuerpo_web_745a0efc.webp" />

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaJson, null, 2)}
  </script>

  <style>
    body { font-family: 'Montserrat', sans-serif; background-color: #0A0A0A; color: #E5E5E5; margin: 0; line-height: 1.6; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .red { color: #E30613; }
    .bg-red { background-color: #E30613; }
    .border-red { border-color: #E30613; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
    header.hero { background: #0D0D0D; padding: 60px 0 50px; border-bottom: 1px solid #222; }
    .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-family: 'JetBrains Mono', monospace; }
    .badge-red { background: #E30613; color: #FFF; }
    .badge-dark { background: #1C1C1C; color: #AAA; border: 1px solid #333; }
    .card { background: #141414; border: 1px solid #262626; padding: 25px; margin-bottom: 25px; }
    .cta-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #E30613; color: #FFF; text-decoration: none; padding: 14px 28px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; font-family: 'JetBrains Mono', monospace; transition: background 0.2s; }
    .cta-btn:hover { background: #b8050f; }
    footer { background: #050505; border-top: 1px solid #1A1A1A; padding: 40px 0; font-size: 12px; color: #777; }
    a.link { color: #FFF; text-decoration: none; }
    a.link:hover { color: #E30613; text-decoration: underline; }
  </style>
</head>
<body>
  <!-- Top Global Bar -->
  <nav style="background: #000; border-bottom: 1px solid #222; padding: 14px 0;">
    <div class="container" style="display: flex; align-items: center; justify-content: space-between;">
      <a href="${BASE_URL}/" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: #FFF;">
        <span style="font-weight: 900; font-size: 15px; letter-spacing: 1px;">PATRICIA LOAIZA</span>
        <span class="mono red" style="font-size: 10px; font-weight: 700; border: 1px solid #E30613; padding: 1px 6px;">CREA Y MONETIZA®</span>
      </a>
      <div style="display: flex; align-items: center; gap: 15px;">
        <a href="${BASE_URL}/" class="link mono" style="font-size: 12px; font-weight: 700; color: #AAA;">← VOLVER AL INICIO</a>
        <a href="${PREDIAGNOSTICO_URL}?utm_source=seo&utm_medium=page&utm_campaign=pilar-${pilarNum || '0'}" target="_blank" rel="noopener noreferrer" class="cta-btn" style="padding: 6px 14px; font-size: 11px;">
          PREDIAGNÓSTICO OFICIAL ↗
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Header -->
  <header class="hero">
    <div class="container">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
        <span class="badge badge-red">${kicker}</span>
        <span class="badge badge-dark">${modality}</span>
        ${duration ? `<span class="badge badge-dark">${duration}</span>` : ''}
      </div>
      <h1 style="font-size: 38px; line-height: 1.15; font-weight: 900; color: #FFF; margin: 0 0 15px 0;">${h1}</h1>
      <p style="font-size: 18px; font-weight: 700; color: #E30613; margin: 0 0 12px 0;">${subname}</p>
      <p style="font-size: 15px; color: #BBB; max-width: 800px; margin: 0 0 25px 0;">${tagline}</p>
      <div>
        <a href="${PREDIAGNOSTICO_URL}?utm_source=seo&utm_medium=hero-cta&utm_campaign=pilar-${pilarNum || '0'}" target="_blank" rel="noopener noreferrer" class="cta-btn">
          Solicitar Prediagnóstico Estratégico Oficial ↗
        </a>
      </div>
    </div>
  </header>

  <!-- Main Body Content -->
  <main class="container" style="padding: 50px 20px;">
    ${contentHtml}
    
    <!-- CTA Block -->
    <div class="card" style="border-left: 4px solid #E30613; background: #0E0E0E; text-align: center; padding: 45px 25px; margin-top: 50px;">
      <h2 style="font-size: 26px; font-weight: 900; color: #FFF; margin: 0 0 12px;">¿Listo para transformar tu experiencia profesional?</h2>
      <p style="font-size: 14px; color: #AAA; max-width: 650px; margin: 0 auto 25px;">
        El primer paso no es contratar a ciegas, sino realizar un prediagnóstico estratégico para evaluar el estado real de tu oferta, precios y capacidad instalada.
      </p>
      <a href="${PREDIAGNOSTICO_URL}?utm_source=seo&utm_medium=footer-cta&utm_campaign=pilar-${pilarNum || '0'}" target="_blank" rel="noopener noreferrer" class="cta-btn">
        Completar Prediagnóstico Estratégico (10-15 Min) ↗
      </a>
    </div>
  </main>

  <!-- Footer with Direct PDF Legal Documents -->
  <footer>
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px;">
        <div>
          <strong style="color: #FFF; font-size: 13px;">Patricia Loaiza · Consultora de Marketing y Negocios</strong>
          <p style="margin: 4px 0 0; font-size: 11px;">Medellín, Colombia · Metodología CREA Y MONETIZA®</p>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 15px; font-size: 11px;" class="mono">
          <a href="${BASE_URL}/docs/aviso-privacidad.pdf" target="_blank" rel="noopener noreferrer" class="link">Aviso de Privacidad (AV-01)</a>
          <span style="color: #444;">·</span>
          <a href="${BASE_URL}/docs/politica-tratamiento-datos.pdf" target="_blank" rel="noopener noreferrer" class="link">Política de Datos (PL-01)</a>
          <span style="color: #444;">·</span>
          <a href="${BASE_URL}/docs/autorizacion-tratamiento-datos.pdf" target="_blank" rel="noopener noreferrer" class="link" style="color: #E30613;">Autorización Tratamiento Datos (AT-01)</a>
          <span style="color: #444;">·</span>
          <a href="${BASE_URL}/docs/politica-cookies.pdf" target="_blank" rel="noopener noreferrer" class="link">Política de Cookies (CK-01)</a>
        </div>
      </div>
      <div style="border-top: 1px solid #1C1C1C; padding-top: 15px; font-size: 11px; text-align: center; color: #555;">
        © 2026 PATRICIA LOAIZA®. TODOS LOS DERECHOS RESERVADOS. DOMINIO CANÓNICO: SOYPATRICIALOAIZA.COM
      </div>
    </div>
  </footer>
</body>
</html>`;

// 1. PILAR 1: Estrategia de Negocio
const pilar1Html = `
<section>
  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">¿Para quién es este servicio?</h2>
    <p><strong>Perfil Profesional:</strong> Consultores, terapeutas, psicólogos y profesionales del conocimiento (+40 a 65 años) con años de experiencia acumulada y clientes activos, pero cuyo modelo depende por completo de vender su tiempo por horas o cotizar desde cero para cada cliente.</p>
    <p><strong>El problema que resolvemos:</strong> Tienes conocimientos sólidos y clientes satisfechos, pero no cuentas con una estructura que conecte tu modelo, tus servicios y tus prioridades comerciales. Vives en un desgaste operativo constante por resolver sobre la marcha sin límites claros.</p>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
    <div class="card" style="border-top: 3px solid #777;">
      <h3 style="color: #AAA; font-size: 14px; text-transform: uppercase;" class="mono">Situación Inicial (Antes)</h3>
      <p style="color: #CCC; font-size: 14px;">Servicios dispersos, cotizaciones a medida desde cero en cada llamada, cobro por horas de atención y desgaste operativo constante por resolver sobre la marcha sin límites claros.</p>
    </div>
    <div class="card" style="border-top: 3px solid #E30613;">
      <h3 style="color: #E30613; font-size: 14px; text-transform: uppercase;" class="mono">Transformación Lograda (Después)</h3>
      <p style="color: #FFF; font-size: 14px; font-weight: 600;">Un modelo de consultoría estructurado con ofertas productizadas, política de precios basada en valor y una ruta comercial que escala sin multiplicar tus horas de trabajo.</p>
    </div>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Entregables Tangibles del Pilar 01</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Diagnóstico clínico inicial y matriz de brechas de oferta y ventas:</strong> radiografía integral de tu situación actual.</li>
      <li><strong>Productización del saber hacer:</strong> empaquetado de tu experiencia en ofertas delimitadas con entregables y alcance definido.</li>
      <li><strong>Arquitectura de portafolio con frameworks BMS:</strong> adaptación de Portafolio Hexagonal y Portafolio Órbita de Vilma Núñez.</li>
      <li><strong>Política de precios basada en valor:</strong> argumentación comercial y pricing estratégico bajo Sistema PEPE.</li>
      <li><strong>Plan de Transformación táctico de 100 Días:</strong> ciclos de ejecución de 30-60-90 días y One Page Strategy.</li>
      <li><strong>Espacio de Trabajo en Notion:</strong> repositorio privado con fichas técnicas de la oferta y grabaciones de sesiones.</li>
    </ul>
  </div>
</section>
`;

const pilar1Page = createPageLayout({
  title: 'Estrategia de Negocio y Productización de Servicios',
  description: 'Convierte tu saber hacer en una oferta estructurada, con precios basados en valor y una ruta de ventas que no dependa de vender horas.',
  canonicalUrl: `${BASE_URL}/pages/estrategia-de-negocio.html`,
  h1: 'Estrategia de Negocio',
  kicker: 'PILAR 01 · CREA Y MONETIZA®',
  subname: 'Oferta, precio y ruta de ventas estructurada para tu negocio',
  tagline: 'Acompañamiento colaborativo para profesionales senior del conocimiento que desean productizar sus servicios y salir de la trampa del cobro por horas.',
  modality: 'Lo hacemos juntos',
  duration: '45 días estimados',
  contentHtml: pilar1Html,
  pilarNum: '1',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Estrategia de Negocio y Productización de Servicios",
    "provider": { "@type": "Person", "name": "Patricia Loaiza", "url": BASE_URL },
    "serviceType": "Consultoría Estratégica de Negocios",
    "description": "Oferta, precio y ruta de ventas estructurada para tu negocio. Modalidad colaborativa Lo hacemos juntos.",
    "url": `${BASE_URL}/pages/estrategia-de-negocio.html`
  }
});
fs.writeFileSync(path.join(targetDir, 'estrategia-de-negocio.html'), pilar1Page);

// 2. PILAR 2: Marca Personal
const pilar2Html = `
<section>
  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">¿Para quién es este servicio?</h2>
    <p><strong>Perfil Profesional:</strong> El "Experto Invisible": profesionales con 15, 20 o 25 años de trayectoria impecable en su especialidad, pero cuyo perfil público no refleja su verdadero calibre. Dependen de recomendaciones casuales y les cuesta cobrar tarifas High Ticket.</p>
    <p><strong>El problema que resolvemos:</strong> La desconexión entre tu autoridad real y tu percepción digital. Si el mercado no entiende en 5 segundos tu calibre profesional, compites por precio con recién graduados.</p>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Entregables Tangibles del Pilar 02</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Manual Maestro de Marca Personal:</strong> definición de arquetipo, voz, postura y pilares conceptuales.</li>
      <li><strong>Relato Corporativo y Storytelling de Autoridad:</strong> narrativa profesional bajo marco PERE para conectar con tomadores de decisiones.</li>
      <li><strong>Estrategia de Posicionamiento High Ticket:</strong> propuesta de valor diferencial y argumentario de autoridad.</li>
      <li><strong>Matriz de Respuestas a Objeciones Comerciales:</strong> respuestas estratégicas a dudas de precio, tiempo y confianza.</li>
      <li><strong>Banco de Narrativas en Notion:</strong> repositorio de historias, casos y aprendizajes listos para comunicar.</li>
    </ul>
  </div>
</section>
`;

const pilar2Page = createPageLayout({
  title: 'Marca Personal y Posicionamiento de Autoridad High Ticket',
  description: 'Transforma tu trayectoria acumulada en un mensaje de alto impacto que justifique precios premium y atraiga clientes calificados.',
  canonicalUrl: `${BASE_URL}/pages/marca-personal.html`,
  h1: 'Marca Personal de Autoridad',
  kicker: 'PILAR 02 · CREA Y MONETIZA®',
  subname: 'Posicionamiento, mensaje y conexión con la monetización high ticket',
  tagline: 'Construye una marca personal sólida y respetada que refleje tus más de 15 años de trayectoria profesional.',
  modality: 'Lo hacemos juntos',
  duration: '45 días estimados',
  contentHtml: pilar2Html,
  pilarNum: '2',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marca Personal y Posicionamiento de Autoridad High Ticket",
    "provider": { "@type": "Person", "name": "Patricia Loaiza", "url": BASE_URL },
    "serviceType": "Consultoría de Marca Personal",
    "description": "Posicionamiento, mensaje y conexión con la monetización high ticket. Modalidad colaborativa Lo hacemos juntos.",
    "url": `${BASE_URL}/pages/marca-personal.html`
  }
});
fs.writeFileSync(path.join(targetDir, 'marca-personal.html'), pilar2Page);

// 3. PILAR 3: Sistema de Contenidos
const pilar3Html = `
<section>
  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">¿Para quién es este servicio?</h2>
    <p><strong>Perfil Profesional:</strong> Expertos y consultores con falta de tiempo o bloqueo editorial para crear contenidos de forma constante. Publican de manera reactiva o no logran que sus publicaciones se traduzcan en consultas comerciales.</p>
    <p><strong>El problema que resolvemos:</strong> La trampa de la creación manual agotadora. Implementamos un motor de contenidos asistido por inteligencia artificial que replica tu tono de voz exacto sin perder rigor profesional.</p>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Entregables Tangibles del Pilar 03</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Documento de Voz de Marca (brand-voice.md):</strong> ingeniería de prompts y directrices para que la IA escriba como tú.</li>
      <li><strong>Estrategia Dual de Crecimiento:</strong> combinación de contenidos de autoridad perpetua y campañas de captación.</li>
      <li><strong>Cerebro de Marca en Notion:</strong> base de conocimiento estructurada con tus metodologías, anécdotas y frameworks.</li>
      <li><strong>Motor de Contenidos por Lotes (Batch Engine):</strong> calendario editorial con 30 piezas base para 8 semanas de publicación.</li>
    </ul>
  </div>
</section>
`;

const pilar3Page = createPageLayout({
  title: 'Sistema de Contenidos con Inteligencia Artificial',
  description: 'Crea un motor de contenidos constante y alineado con tu voz de marca utilizando inteligencia artificial y procesos por lotes.',
  canonicalUrl: `${BASE_URL}/pages/sistema-de-contenidos.html`,
  h1: 'Sistema de Contenidos con IA',
  kicker: 'PILAR 03 · CREA Y MONETIZA®',
  subname: 'Voz auténtica de marca, estrategia y motor de contenidos con IA',
  tagline: 'Publica con consistencia y autoridad sin desgastarte horas frente a la pantalla en blanco.',
  modality: 'Lo hacemos juntos',
  duration: '30 días estimados',
  contentHtml: pilar3Html,
  pilarNum: '3',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sistema de Contenidos con Inteligencia Artificial",
    "provider": { "@type": "Person", "name": "Patricia Loaiza", "url": BASE_URL },
    "serviceType": "Estrategia de Contenidos y Brand Voice",
    "description": "Voz auténtica de marca, estrategia y motor de contenidos con IA. Modalidad colaborativa Lo hacemos juntos.",
    "url": `${BASE_URL}/pages/sistema-de-contenidos.html`
  }
});
fs.writeFileSync(path.join(targetDir, 'sistema-de-contenidos.html'), pilar3Page);

// 4. PILAR 4: Día de Negocios Digitales
const pilar4Html = `
<section>
  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">¿Para quién es este servicio?</h2>
    <p><strong>Perfil Profesional:</strong> Consultores o fundadores consolidados que necesitan una inmersión estratégica de alto impacto para tomar decisiones críticas de modelo, precios y automatización sin esperar meses.</p>
    <p><strong>Formato:</strong> Jornada intensiva 1 a 1 de 7 horas (10:00 a. m. a 5:00 p. m.) con auditoría previa, co-creación estratégica en vivo y plan de acción táctico de 30-60-90 días.</p>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Entregables Tangibles del Pilar 04</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Radiografía previa de negocio y growth marketing.</strong></li>
      <li><strong>Estrategia AI-First priorizada para tu empresa o consultoría.</strong></li>
      <li><strong>Estructuración de servicio productizado de alta rentabilidad.</strong></li>
      <li><strong>Plan comercial táctico de 30-60-90 días con responsables y fechas.</strong></li>
      <li><strong>Grabación completa de la jornada y Documento Master en Notion.</strong></li>
    </ul>
  </div>
</section>
`;

const pilar4Page = createPageLayout({
  title: 'Digital Business Day · Jornada Intensiva 1 a 1 con IA',
  description: 'Una inmersión estratégica de 7 horas con Patricia Loaiza para rediseñar tu modelo de consultoría, pricing y roadmap comercial con IA.',
  canonicalUrl: `${BASE_URL}/pages/dia-de-negocios-digitales.html`,
  h1: 'Día de Negocios Digitales',
  kicker: 'PILAR 04 · CREA Y MONETIZA®',
  subname: 'Jornada intensiva 1 a 1 de 10:00 a. m. a 5:00 p. m. con plan 30-60-90',
  tagline: 'Inmersión estratégica exclusiva para acelerar decisiones críticas de negocio y tecnología en un solo día.',
  modality: 'Lo hacemos juntos (Intensivo)',
  duration: '1 Día Completo (7 Horas)',
  contentHtml: pilar4Html,
  pilarNum: '4',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Business Day: Sistemas Digitales con IA",
    "provider": { "@type": "Person", "name": "Patricia Loaiza", "url": BASE_URL },
    "serviceType": "Consultoría Estratégica Intensiva",
    "description": "Jornada intensiva 1 a 1 de 10:00 a. m. a 5:00 p. m. con plan de acción 30-60-90. Modalidad colaborativa Lo hacemos juntos.",
    "url": `${BASE_URL}/pages/dia-de-negocios-digitales.html`
  }
});
fs.writeFileSync(path.join(targetDir, 'dia-de-negocios-digitales.html'), pilar4Page);

// 5. PILAR 5: Ecosistema Digital Llave en Mano
const pilar5Html = `
<section>
  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">¿Para quién es este servicio?</h2>
    <p><strong>Perfil Profesional:</strong> Consultores y expertos que no quieren lidiar con herramientas técnicas dispersas (calendarios que no sincronizan, correos que caen en spam, integraciones de WhatsApp rotas) y desean una solución técnica llave en mano.</p>
    <p><strong>Modalidad:</strong> «Lo hago por ti». Nosotros configuramos toda la infraestructura comercial técnica en GoHighLevel (GHL) lista para operar.</p>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Entregables Tangibles del Pilar 05</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Embudos de captación y formularios de prediagnóstico integrados en GoHighLevel.</strong></li>
      <li><strong>Automatización comercial por correo electrónico y WhatsApp oficial.</strong></li>
      <li><strong>Calendario sincronizado con recordatorios automáticos antifaltas.</strong></li>
      <li><strong>Pipelines de ventas en CRM con etapas claras de prospección.</strong></li>
      <li><strong>Capacitación operativa grabada para ti o tu equipo.</strong></li>
    </ul>
  </div>
</section>
`;

const pilar5Page = createPageLayout({
  title: 'Ecosistema Digital Llave en Mano sobre GoHighLevel',
  description: 'Implementación técnica de presencia digital, captación de leads, automatización de WhatsApp y CRM comercial en un solo sistema.',
  canonicalUrl: `${BASE_URL}/pages/ecosistema-digital.html`,
  h1: 'Ecosistema Digital Llave en Mano',
  kicker: 'PILAR 05 · CREA Y MONETIZA®',
  subname: 'Presencia digital, captación y gestión comercial en un solo sistema sobre GoHighLevel',
  tagline: 'Infraestructura técnica comercial completa implementada para ti sin fricción operativa.',
  modality: 'Lo hago por ti',
  duration: '30 días de implementación',
  contentHtml: pilar5Html,
  pilarNum: '5',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ecosistema Digital Llave en Mano en GoHighLevel",
    "provider": { "@type": "Person", "name": "Patricia Loaiza", "url": BASE_URL },
    "serviceType": "Implementación Técnica y Automatización CRM",
    "description": "Presencia digital, captación y gestión comercial en un solo sistema sobre GoHighLevel. Modalidad técnica Lo hago por ti.",
    "url": `${BASE_URL}/pages/ecosistema-digital.html`
  }
});
fs.writeFileSync(path.join(targetDir, 'ecosistema-digital.html'), pilar5Page);

// 6. Sobre Patricia
const sobrePatriciaHtml = `
<section>
  <div class="card">
    <h2 style="font-size: 22px; font-weight: 800; color: #FFF; margin-top: 0;">Trayectoria y Autoridad</h2>
    <p>Patricia Loaiza es administradora de empresas por la Universidad Cooperativa de Colombia, especialista en Gestión de Proyectos y Desarrollo Organizacional, y certificada en Inteligencia Artificial aplicada a negocios.</p>
    <p>Cuenta con más de 30 años de experiencia acumulada (desde 1996) en el sector corporativo, entidades multilaterales, organizaciones productivas y como profesional independiente:</p>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>FAO (Naciones Unidas):</strong> formulación y evaluación de planes estratégicos departamentales.</li>
      <li><strong>CISP (Unión Europea):</strong> coordinación y acompañamiento a organizaciones productivas en 11 municipios.</li>
      <li><strong>Red Adelco:</strong> aplicación de Metodología de Marco Lógico en proyectos territoriales.</li>
      <li><strong>Nestlé S.A.:</strong> administración, cartera y tesorería en el sector corporativo privado (1996-2006).</li>
    </ul>
  </div>

  <div class="card" style="border-left: 4px solid #E30613;">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Postura y Filosofía de Consultoría</h2>
    <p style="font-size: 16px; font-style: italic; color: #FFF;">
      "No vendo lo que la persona cree que necesita. Le muestro, a partir de lo que encontramos en su diagnóstico, qué necesita resolver primero y cómo puedo ayudarla a hacerlo."
    </p>
    <p>Trabajamos bajo 4 principios inquebrantables: Rigor Metodológico, Productización Honesta, Transferencia de Autonomía y Gobernanza Comercial.</p>
  </div>
</section>
`;

const sobrePatriciaPage = createPageLayout({
  title: 'Sobre Patricia Loaiza · Trayectoria, Credenciales y Filosofía',
  description: 'Conoce la trayectoria de más de 30 años (desde 1996) de Patricia Loaiza: Nestlé S.A., FAO (ONU), Unión Europea (CISP), Red Adelco y +9 años como profesional independiente.',
  canonicalUrl: `${BASE_URL}/pages/sobre-patricia.html`,
  h1: 'Sobre Patricia Loaiza',
  kicker: 'AUTORIDAD & TRAYECTORIA',
  subname: 'Estrategia · Experiencia · Impacto. Tu experiencia. Tu método. Tu legado.',
  tagline: 'Consultoría estratégica de negocios y marketing para profesionales senior del conocimiento.',
  modality: 'Perfil Institucional',
  duration: '+15 Años de Experiencia',
  contentHtml: sobrePatriciaHtml,
  pilarNum: '0',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre Patricia Loaiza",
    "url": `${BASE_URL}/pages/sobre-patricia.html`,
    "mainEntity": {
      "@type": "Person",
      "name": "Patricia Loaiza",
      "url": BASE_URL,
      "jobTitle": "Consultora de Marketing y Negocios"
    }
  }
});
fs.writeFileSync(path.join(targetDir, 'sobre-patricia.html'), sobrePatriciaPage);

// 7. Metodología Crea y Monetiza
const creaMonetizaHtml = `
<section>
  <div class="card">
    <h2 style="font-size: 22px; font-weight: 800; color: #FFF; margin-top: 0;">Las 5 Fases del Método Crea y Monetiza®</h2>
    <ol style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Fase 01: Entender:</strong> Diagnóstico clínico de tu negocio actual, matriz de tiempo vs. ingresos y mapa de clientes.</li>
      <li><strong>Fase 02: Diagnosticar:</strong> Identificación de brechas de empaquetado, fijación de precios y barreras de escala.</li>
      <li><strong>Fase 03: Priorizar:</strong> Selección del pilar de transformación con mayor retorno inmediato según tu diagnóstico.</li>
      <li><strong>Fase 04: Orientar / Transformar:</strong> Co-creación de tu oferta productizada, narrativa de autoridad y motor de contenidos.</li>
      <li><strong>Fase 05: Evolucionar:</strong> Instalación de capacidad operativa y gobernanza comercial con inteligencia artificial.</li>
    </ol>
  </div>

  <div class="card">
    <h2 style="font-size: 20px; font-weight: 800; color: #FFF; margin-top: 0;">Créditos Metodológicos Explícitos</h2>
    <p>CREA Y MONETIZA® es una metodología registrada propiedad de Patricia Loaiza. En los ejercicios analíticos de portafolio y precios adaptamos frameworks de Business Marketing Strategy (BMS) de Vilma Núñez y Journi con crédito explícito (Portafolio Hexagonal, Portafolio Órbita, Sistema PEPE y One Page Strategy).</p>
  </div>
</section>
`;

const creaMonetizaPage = createPageLayout({
  title: 'Metodología Crea y Monetiza® · 5 Fases Estructuradas',
  description: 'El método estructurado en 5 fases para transformar tu experiencia profesional en un negocio productizado y escalable con IA.',
  canonicalUrl: `${BASE_URL}/pages/crea-y-monetiza.html`,
  h1: 'Metodología Crea y Monetiza®',
  kicker: 'MÉTODO REGISTRADO PROPIETARIO',
  subname: 'El camino probado para pasar de vender horas a un negocio estructurado',
  tagline: 'Rigor metodológico derivado de formulación de proyectos, adaptado a consultores y expertos del conocimiento.',
  modality: 'Marco Metodológico',
  duration: '5 Fases de Transformación',
  contentHtml: creaMonetizaHtml,
  pilarNum: '0',
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Metodología Crea y Monetiza®",
    "url": `${BASE_URL}/pages/crea-y-monetiza.html`,
    "description": "Las 5 fases de la metodología Crea y Monetiza® de Patricia Loaiza."
  }
});
fs.writeFileSync(path.join(targetDir, 'crea-y-monetiza.html'), creaMonetizaPage);

console.log('All 7 static SEO & AEO HTML pages successfully generated in public/pages/');

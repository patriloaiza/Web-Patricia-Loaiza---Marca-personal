const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Corporate Brand Colors
const brandRed = rgb(227 / 255, 6 / 255, 19 / 255);       // #E30613
const darkGray = rgb(25 / 255, 25 / 255, 25 / 255);       // #191919
const medGray = rgb(105 / 255, 105 / 255, 105 / 255);     // #696969
const lightBorder = rgb(224 / 255, 224 / 255, 224 / 255); // #E0E0E0
const highlightBg = rgb(250 / 255, 250 / 255, 250 / 255); // #FAFAFA

// Helper to wrap text into lines based on maximum width
function wrapText(text, font, fontSize, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

async function buildLegalPdf(docConfig) {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Load official horizontal brand logo on white background
  const logoPath = path.join(process.cwd(), 'public/assets/aistudio/logo_horizontal_fondo_blanco_a4fe62ce.jpeg');
  let embeddedLogo = null;
  if (fs.existsSync(logoPath)) {
    const logoBytes = fs.readFileSync(logoPath);
    embeddedLogo = await pdfDoc.embedJpg(logoBytes);
  }

  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89; // A4
  const MARGIN_LEFT = 45;
  const MARGIN_RIGHT = 45;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  // Header geometry: pure white background, no black patches
  const PAGE1_TOP_MARGIN = 740;
  const SUBSEQUENT_TOP_MARGIN = 765;
  const BOTTOM_MARGIN = 62;

  let pages = [];
  let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  pages.push(currentPage);
  let y = PAGE1_TOP_MARGIN;

  function ensureSpace(neededHeight) {
    if (y - neededHeight < BOTTOM_MARGIN) {
      currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      pages.push(currentPage);
      y = SUBSEQUENT_TOP_MARGIN;
    }
  }

  // Document Title (Page 1)
  currentPage.drawText(docConfig.title.toUpperCase(), {
    x: MARGIN_LEFT,
    y: y,
    size: 13,
    font: fontBold,
    color: darkGray,
  });
  y -= 16;

  currentPage.drawText('PATRICIA LOAIZA™ | CREA Y MONETIZA™', {
    x: MARGIN_LEFT,
    y: y,
    size: 9.5,
    font: fontBold,
    color: brandRed,
  });
  y -= 13;

  if (docConfig.description) {
    const descLines = wrapText(docConfig.description, fontOblique, 8.5, CONTENT_WIDTH);
    for (const dLine of descLines) {
      currentPage.drawText(dLine, {
        x: MARGIN_LEFT,
        y: y,
        size: 8.5,
        font: fontOblique,
        color: medGray,
      });
      y -= 12;
    }
  }
  y -= 10;

  // Render Sections
  for (const section of docConfig.sections) {
    ensureSpace(35);

    // Section Title
    currentPage.drawText(section.title.toUpperCase(), {
      x: MARGIN_LEFT,
      y: y,
      size: 9.5,
      font: fontBold,
      color: brandRed,
    });
    y -= 14;

    // Section Content
    const contents = Array.isArray(section.content) ? section.content : [section.content];

    for (const paragraph of contents) {
      const isBullet = paragraph.startsWith('• ') || paragraph.startsWith('  • ') || paragraph.startsWith('- ');
      const fontSize = 8.5;
      const font = section.isHighlighted && paragraph.startsWith('CASILLA') ? fontBold : fontRegular;
      const indent = isBullet ? 12 : 0;
      const pWidth = CONTENT_WIDTH - indent;

      const lines = wrapText(paragraph, font, fontSize, pWidth);
      ensureSpace(lines.length * 11.5 + 6);

      if (section.isHighlighted) {
        currentPage.drawRectangle({
          x: MARGIN_LEFT - 4,
          y: y - (lines.length * 11.5) + 2,
          width: CONTENT_WIDTH + 8,
          height: lines.length * 11.5 + 8,
          color: highlightBg,
          borderColor: lightBorder,
          borderWidth: 0.5,
        });
      }

      for (const line of lines) {
        currentPage.drawText(line, {
          x: MARGIN_LEFT + indent,
          y: y,
          size: fontSize,
          font: font,
          color: darkGray,
        });
        y -= 11.5;
      }
      y -= 4; // Paragraph gap
    }

    y -= 8; // Section gap
  }

  // Draw headers and footers on all pages now that we know totalPages
  const totalPages = pages.length;
  pages.forEach((page, idx) => {
    const pageNum = idx + 1;

    if (pageNum === 1) {
      // PAGE 1 HEADER: Official white background logo + Document info badge
      if (embeddedLogo) {
        // Logo dimensions: 1510 x 446 (ratio: 3.3857)
        const logoH = 38;
        const logoW = logoH * (embeddedLogo.width / embeddedLogo.height);
        page.drawImage(embeddedLogo, {
          x: MARGIN_LEFT,
          y: PAGE_HEIGHT - 66,
          width: logoW,
          height: logoH,
        });
      }

      // Top-right document metadata block
      const metaRight = PAGE_WIDTH - MARGIN_RIGHT;
      page.drawText('CREA Y MONETIZA™', {
        x: metaRight - 150,
        y: PAGE_HEIGHT - 38,
        size: 9.5,
        font: fontBold,
        color: darkGray,
      });

      page.drawText('MARCO LEGAL · PROTECCIÓN DE DATOS', {
        x: metaRight - 150,
        y: PAGE_HEIGHT - 48,
        size: 6.5,
        font: fontBold,
        color: brandRed,
      });

      page.drawText(`Código: ${docConfig.code}  ·  Versión: ${docConfig.version}`, {
        x: metaRight - 150,
        y: PAGE_HEIGHT - 58,
        size: 6.5,
        font: fontRegular,
        color: medGray,
      });

      page.drawText(`Emisión: ${docConfig.date}  ·  Medellín, Colombia`, {
        x: metaRight - 150,
        y: PAGE_HEIGHT - 67,
        size: 6.5,
        font: fontRegular,
        color: medGray,
      });

      // Refined double separator rule (Brand Red + Light Gray)
      page.drawLine({
        start: { x: MARGIN_LEFT, y: PAGE_HEIGHT - 74 },
        end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: PAGE_HEIGHT - 74 },
        thickness: 1.25,
        color: brandRed,
      });

      page.drawLine({
        start: { x: MARGIN_LEFT, y: PAGE_HEIGHT - 76.5 },
        end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: PAGE_HEIGHT - 76.5 },
        thickness: 0.5,
        color: lightBorder,
      });
    } else {
      // SUBSEQUENT PAGES: Compact letterhead with white background logo
      if (embeddedLogo) {
        const logoH = 22;
        const logoW = logoH * (embeddedLogo.width / embeddedLogo.height);
        page.drawImage(embeddedLogo, {
          x: MARGIN_LEFT,
          y: PAGE_HEIGHT - 44,
          width: logoW,
          height: logoH,
        });
      }

      page.drawText(`${docConfig.code} v${docConfig.version}  ·  ${docConfig.title}  |  CREA Y MONETIZA™`, {
        x: MARGIN_LEFT + 95,
        y: PAGE_HEIGHT - 36,
        size: 7.5,
        font: fontRegular,
        color: medGray,
      });

      page.drawLine({
        start: { x: MARGIN_LEFT, y: PAGE_HEIGHT - 50 },
        end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: PAGE_HEIGHT - 50 },
        thickness: 0.75,
        color: lightBorder,
      });
    }

    // FOOTER (All Pages): Pristine, verified canonical domain & official contact
    page.drawLine({
      start: { x: MARGIN_LEFT, y: 44 },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: 44 },
      thickness: 0.75,
      color: lightBorder,
    });

    page.drawText(`Patricia Loaiza™ | CREA Y MONETIZA™ · Dominio: https://soypatricialoaiza.com · Contacto: hola@soypatricialoaiza.com`, {
      x: MARGIN_LEFT,
      y: 32,
      size: 7,
      font: fontRegular,
      color: medGray,
    });

    page.drawText(`Página ${pageNum} de ${totalPages}`, {
      x: PAGE_WIDTH - MARGIN_RIGHT - 65,
      y: 32,
      size: 7,
      font: fontBold,
      color: darkGray,
    });
  });

  const pdfBytes = await pdfDoc.save();

  // Write to both public/docs and public/assets/aistudio
  if (docConfig.outputDocPath) {
    fs.mkdirSync(path.dirname(docConfig.outputDocPath), { recursive: true });
    fs.writeFileSync(docConfig.outputDocPath, pdfBytes);
  }
  if (docConfig.outputAssetPath) {
    fs.mkdirSync(path.dirname(docConfig.outputAssetPath), { recursive: true });
    fs.writeFileSync(docConfig.outputAssetPath, pdfBytes);
  }

  console.log(`✓ Generated ${docConfig.code} (${docConfig.title}) -> ${docConfig.outputDocPath}`);
}

async function generateAll() {
  // 1. AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES (AT-01)
  await buildLegalPdf({
    code: 'AT-01',
    version: '02',
    date: '2 de noviembre de 2026',
    title: 'Autorización para el Tratamiento de Datos Personales',
    description: 'Documento informativo para aceptación digital previa al envío de formularios de contacto, diagnósticos, registros y solicitudes de consultoría.',
    outputDocPath: 'public/docs/autorizacion-tratamiento-datos.pdf',
    outputAssetPath: 'public/assets/aistudio/04_Autorizacion_Tratamiento_Datos_PL_CyM_7e1d08c5.pdf',
    sections: [
      {
        title: 'Documento Informativo para Aceptación Digital',
        content: 'Este documento contiene las condiciones de autorización que se presentan al titular antes de marcar la casilla de aceptación en un formulario digital. La aceptación se registra en el formulario; por tanto, no se requiere imprimir ni firmar este documento.',
      },
      {
        title: '1. Identificación de la Responsable',
        content: [
          'La Responsable del tratamiento es Patricia Loaiza, persona natural domiciliada en Medellín, Colombia, quien actúa bajo las marcas registradas PATRICIA LOAIZA™ y CREA Y MONETIZA™.',
          '• Correo electrónico oficial: hola@soypatricialoaiza.com',
          '• Teléfono / WhatsApp oficial: +57 300 813 5043',
          '• Domicilio profesional: Medellín, Antioquia, Colombia',
          '• Sitio web canónico oficial: https://soypatricialoaiza.com',
        ],
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
          '• Elaborar estadísticas internas y evaluar la calidad de los servicios mediante información agregada o anonimizada.',
        ],
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
          'Nota de transparencia: La autorización comercial no implica la venta de datos personales. No se autoriza que aliados comerciales utilicen los datos para sus propias campañas independientes sin autorización previa.',
        ],
      },
      {
        title: '4. Proveedores Tecnológicos y Transmisiones',
        content: [
          'Mis datos podrán ser tratados por proveedores tecnológicos por cuenta de la Responsable: plataformas CRM y de automatización, correo y mensajería, hosting y almacenamiento en la nube, agenda, pasarelas de pago, analítica y herramientas de inteligencia artificial utilizadas como apoyo para organizar información, transcribir o redactar borradores.',
          'Estos proveedores podrán procesar datos desde Colombia u otros países bajo estándares de seguridad y confidencialidad. Los datos de tarjetas son gestionados exclusivamente por pasarelas certificadas; Patricia Loaiza no almacena números de tarjeta.',
          'Esta autorización no permite vender datos ni entregarlos a terceros para fines propios no informados.',
        ],
      },
      {
        title: '5. Derechos del Titular y Canales de Atención',
        content: [
          'Tengo derecho a conocer, actualizar, rectificar y suprimir mis datos; solicitar prueba de la autorización; conocer el uso dado; revocar la autorización cuando proceda; y acceder gratuitamente a mis datos personales.',
          '• Canal oficial para ejercer derechos: hola@soypatricialoaiza.com',
          '• Asunto del correo: "Protección de Datos Personales – Ejercicio de Derechos"',
          '• Canal complementario WhatsApp: +57 300 813 5043',
          'También puedo acudir ante la Superintendencia de Industria y Comercio (SIC) una vez agotado el trámite directo ante la Responsable.',
        ],
      },
      {
        title: '6. Datos Sensibles y Menores de Edad',
        content: 'El suministro de datos sensibles es facultativo. Los servicios están dirigidos exclusivamente a mayores de 18 años y no se solicitan intencionalmente datos de menores de edad.',
      },
      {
        title: '7. Política Aplicable y Constancia Digital',
        content: 'Declaro que tuve la posibilidad de consultar la Política de Tratamiento de Datos Personales PL-01 y el Aviso de Privacidad AV-01 en el sitio oficial https://soypatricialoaiza.com o mediante solicitud escrita al correo hola@soypatricialoaiza.com. La Responsable conservará evidencia digital de la aceptación.',
      },
      {
        title: '8. Textos Oficiales para Configurar en Formulario (GoHighLevel / Web)',
        isHighlighted: true,
        content: [
          'CASILLA OBLIGATORIA (sin marcar por defecto):',
          '«He leído y autorizo el tratamiento de mis datos personales por Patricia Loaiza, conforme a la Autorización para el Tratamiento de Datos Personales AT-01 y a la Política de Tratamiento de Datos Personales PL-01. Entiendo las finalidades, mis derechos y los canales para ejercerlos.»',
          'CASILLA OPCIONAL E INDEPENDIENTE (Comercial / Marketing):',
          '«SÍ AUTORIZO, de manera libre, previa, expresa e informada, a Patricia Loaiza | Crea y Monetiza a utilizar mis datos de contacto, perfil profesional, preferencias e interacciones para prospección comercial, segmentación, envío de email marketing, WhatsApp, SMS y llamadas comerciales; boletines, secuencias automatizadas, campañas, lanzamientos, promociones, invitaciones y ofertas; administración de CRM; medición de aperturas, clics y conversiones; y publicidad en redes sociales y buscadores conforme a la sección 3 del documento AT-01. Esta autorización es opcional y puedo retirarla en cualquier momento.»',
        ],
      },
    ],
  });

  // 2. AVISO DE PRIVACIDAD (AV-01)
  await buildLegalPdf({
    code: 'AV-01',
    version: '01',
    date: '2 de noviembre de 2026',
    title: 'Aviso de Privacidad',
    description: 'Comunicación resumida al titular que informa la existencia de la Política de Tratamiento, las finalidades del tratamiento, datos de contacto y canales de atención.',
    outputDocPath: 'public/docs/aviso-privacidad.pdf',
    outputAssetPath: 'public/assets/aistudio/03_Aviso_Privacidad_PL_CyM_240702ab.pdf',
    sections: [
      {
        title: '1. Responsable del Tratamiento',
        content: [
          'Patricia Loaiza, persona natural con domicilio profesional en Medellín, Colombia, quien actúa bajo las marcas registradas PATRICIA LOAIZA™ y CREA Y MONETIZA™, es la Responsable del tratamiento de sus datos personales.',
          '• Correo electrónico oficial: hola@soypatricialoaiza.com',
          '• Teléfono / WhatsApp oficial: +57 300 813 5043',
          '• Domicilio profesional: Medellín, Antioquia, Colombia',
          '• Sitio web oficial: https://soypatricialoaiza.com',
        ],
      },
      {
        title: '2. Finalidades Principales del Tratamiento',
        content: [
          'Los datos personales suministrados voluntariamente por el titular serán tratados para las siguientes finalidades legítimas:',
          '• Prestar y administrar servicios de consultoría estratégica, mentoría, formación, acompañamiento y herramientas tecnológicas.',
          '• Gestionar solicitudes, diagnósticos, cotizaciones, propuestas y la relación contractual, administrativa, contable y de facturación.',
          '• Enviar comunicaciones informativas, operativas y de seguimiento del servicio.',
          '• Previa autorización comercial expresa: enviar comunicaciones de marketing, boletines informativos y ofertas por correo electrónico o WhatsApp.',
          '• Elaboración de estadísticas internas anonimizadas y mejora continua de la oferta y de la experiencia del usuario.',
          '• Cumplir con obligaciones legales, tributarias y atender requerimientos de autoridades competentes.',
          'Garantía: Los datos personales nunca serán vendidos, comercializados ni cedidos a terceros para fines propios no autorizados.',
        ],
      },
      {
        title: '3. Derechos del Titular',
        content: [
          'El titular de los datos personales tiene derecho a:',
          '• Conocer, actualizar y rectificar sus datos personales frente a la Responsable.',
          '• Solicitar prueba de la autorización otorgada.',
          '• Ser informado sobre el uso que se ha dado a sus datos personales.',
          '• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa de protección de datos.',
          '• Revocar la autorización y/o solicitar la supresión del dato cuando proceda legalmente.',
          '• Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.',
        ],
      },
      {
        title: '4. Canales para Ejercer los Derechos de Privacidad',
        content: [
          'Para ejercer cualquiera de los derechos mencionados, el titular o su apoderado pueden enviar una comunicación escrita a los canales oficiales:',
          '• Correo electrónico oficial: hola@soypatricialoaiza.com',
          '• Asunto del correo: "Ejercicio de Derechos de Datos Personales – [Nombre del Titular]"',
          '• Canal WhatsApp de orientación: +57 300 813 5043',
          'La solicitud será atendida en los términos de la Ley 1581 de 2012 (máximo 10 días hábiles para consultas y 15 días hábiles para reclamos).',
        ],
      },
      {
        title: '5. Ubicación y Disponibilidad de la Política Completa',
        content: [
          'La versión completa de la Política de Tratamiento de Datos Personales (Código: PL-01) se encuentra a disposición permanente del público en el sitio web oficial:',
          '• Sitio web oficial: https://soypatricialoaiza.com',
          '• Solicitud directa en formato digital por correo electrónico: hola@soypatricialoaiza.com',
        ],
      },
    ],
  });

  // 3. POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES (PL-01)
  await buildLegalPdf({
    code: 'PL-01',
    version: '01',
    date: '2 de noviembre de 2026',
    title: 'Política de Tratamiento de Datos Personales',
    description: 'Manual de políticas y procedimientos para el tratamiento de datos personales conforme a la Ley 1581 de 2012, Decreto 1074 de 2015, RGPD (Unión Europea) y CCPA/CPRA.',
    outputDocPath: 'public/docs/politica-tratamiento-datos.pdf',
    outputAssetPath: 'public/assets/aistudio/02_Politica_Tratamiento_Datos_PL_CyM_f45cbe19.pdf',
    sections: [
      {
        title: '1. Base Legal y Ámbito de Aplicación',
        content: 'Expedida en cumplimiento de los artículos 15 y 20 de la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012 (LEPD), el Decreto 1074 de 2015, la Ley 1266 de 2008, la Ley 2300 de 2023 y actos administrativos de la SIC. Asimismo incorpora estándares del RGPD (UE 2016/679), UK GDPR, CCPA/CPRA (California), LGPD (Brasil), Ley 25.326 (Argentina) y LFPDPPP (México). Aplica a todo tratamiento de datos personales realizado por Patricia Loaiza en Colombia y a través de sus canales digitales internacionales.',
      },
      {
        title: '2. Responsable del Tratamiento y Oficial de Protección de Datos',
        content: [
          'Patricia Loaiza, persona natural domiciliada en Medellín, Colombia, quien actúa bajo las marcas registradas PATRICIA LOAIZA™ y CREA Y MONETIZA™.',
          '• Correo electrónico oficial: hola@soypatricialoaiza.com',
          '• Teléfono / WhatsApp oficial: +57 300 813 5043',
          '• Domicilio profesional: Medellín, Antioquia, Colombia',
          '• Sitio web canónico oficial: https://soypatricialoaiza.com',
          'Patricia Loaiza asume directamente las funciones de Oficial de Protección de Datos Personales.',
        ],
      },
      {
        title: '3. Principios Rectores',
        content: 'El tratamiento de datos personales se rige estrictamente por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad, confidencialidad y el principio de responsabilidad demostrada (privacy by design and by default).',
      },
      {
        title: '4. Categorías de Datos que se Tratan',
        content: [
          '• Datos de identificación y contacto: Nombre, apellidos, correo electrónico, teléfono, país y ciudad de residencia.',
          '• Datos de perfil profesional y de negocio: Profesión, especialidad, experiencia, modelo de servicios, expectativas comerciales y respuestas a diagnósticos o prediagnósticos.',
          '• Contenidos y materiales entregados voluntariamente para el desarrollo de la consultoría estratégica o mentoría.',
          '• Datos transaccionales y de facturación: Información tributaria necesaria para la emisión de facturas y soportes de pago. Los datos de tarjetas bancarias son procesados directamente por pasarelas externas certificadas (Stripe, Hotmart, Wompi); Patricia Loaiza no almacena números de tarjeta ni códigos de seguridad.',
          '• Grabaciones de sesiones de trabajo: Realizadas con previo conocimiento y consentimiento del cliente con fines exclusivos de consulta y entrega en su portal privado.',
          '• Datos técnicos de navegación: Dirección IP, identificadores de cookies técnicas y métricas agregadas recopiladas mediante Google Analytics 4 bajo consentimiento.',
        ],
      },
      {
        title: '5. Uso Ético de Herramientas de Inteligencia Artificial',
        content: [
          'Patricia Loaiza puede utilizar herramientas de inteligencia artificial y automatización como apoyo técnico para organizar notas, estructurar esquemas, transcribir sesiones o redactar borradores de trabajo.',
          'Compromiso de privacidad con IA:',
          '• Se seleccionan plataformas empresariales que garantizan mediante acuerdos de confidencialidad que los datos de los clientes no son utilizados para entrenar modelos públicos de terceros.',
          '• No se adoptan decisiones automatizadas que produzcan efectos jurídicos sobre los clientes sin supervisión y criterio profesional humano directo.',
        ],
      },
      {
        title: '6. Procedimiento para el Ejercicio de Derechos (Habeas Data)',
        content: [
          'El titular puede solicitar en cualquier momento el acceso, rectificación, actualización o supresión de sus datos personales, así como revocar la autorización otorgada.',
          '• Canal oficial de recepción: Correo electrónico a hola@soypatricialoaiza.com con el asunto "Protección de Datos Personales – Ejercicio de Derechos".',
          '• Canal WhatsApp complementario: +57 300 813 5043',
          'Plazos legales de atención:',
          '• Consultas: Plazo máximo de diez (10) días hábiles contados a partir de la fecha de recibo.',
          '• Reclamos: Plazo máximo de quince (15) días hábiles contados a partir del día siguiente a la fecha de recibo.',
          '• Solicitudes bajo RGPD (residentes UE): Plazo máximo de un (1) mes.',
          '• Solicitudes bajo CCPA/CPRA (residentes California): Plazo máximo de cuarenta y cinco (45) días.',
        ],
      },
      {
        title: '7. Cookies y Tecnologías de Rastreo',
        content: 'El sitio web https://soypatricialoaiza.com utiliza cookies técnicas indispensables y cookies analíticas para medir visitas de forma agregada. El usuario puede configurar sus preferencias en cualquier momento conforme a la Política de Cookies (Código: CK-01).',
      },
      {
        title: '8. Vigencia y Actualizaciones',
        content: 'La presente Política rige a partir del 2 de noviembre de 2026 y permanecerá vigente mientras se desarrollen las actividades profesionales y comerciales de Patricia Loaiza, conforme a los plazos legales de prescripción y conservación de archivos.',
      },
    ],
  });

  // 4. POLÍTICA DE COOKIES Y TECNOLOGÍAS SIMILARES (CK-01)
  await buildLegalPdf({
    code: 'CK-01',
    version: '01',
    date: '3 de noviembre de 2026',
    title: 'Política de Cookies y Tecnologías Similares',
    description: 'Información sobre el uso de cookies técnicas, analíticas (Google Analytics 4), de preferencias y medición en https://soypatricialoaiza.com.',
    outputDocPath: 'public/docs/politica-cookies.pdf',
    outputAssetPath: 'public/assets/aistudio/05_Politica_Cookies_PL_CyM_91ab48e2.pdf',
    sections: [
      {
        title: '1. Identificación de la Responsable',
        content: [
          'Responsable: Patricia Loaiza, persona natural con domicilio profesional en Medellín, Colombia (marcas PATRICIA LOAIZA™ y CREA Y MONETIZA™).',
          '• Correo electrónico oficial: hola@soypatricialoaiza.com',
          '• Teléfono / WhatsApp oficial: +57 300 813 5043',
          '• Domicilio profesional: Medellín, Antioquia, Colombia',
          '• Sitio web canónico oficial: https://soypatricialoaiza.com',
        ],
      },
      {
        title: '2. ¿Qué son las Cookies?',
        content: 'Las cookies son pequeños archivos de datos que se descargan en el navegador del usuario al visitar una página web. Permiten a la plataforma recordar información sobre su visita, como su idioma de preferencia, autenticación de sesión y datos de navegación agregada, para facilitar el uso de los servicios y medir la eficacia de los contenidos ofrecidos.',
      },
      {
        title: '3. Categorías de Cookies Utilizadas en este Sitio',
        content: [
          '• Técnicas y Estrictamente Necesarias: Indispensables para la navegación, seguridad y carga eficiente de la web. No requieren consentimiento previo al ser imprescindibles para el funcionamiento técnico del sitio.',
          '• Analíticas y de Rendimiento: Permiten medir el volumen de visitas, páginas consultadas y comportamiento agregado para mejorar la experiencia del usuario y optimizar la arquitectura del sitio web (Google Analytics 4: _ga, _ga_*).',
          '• De Preferencias: Recuerdan opciones elegidas por el usuario, como el consentimiento de privacidad o idioma (pl_cookie_consent).',
          '• De Marketing y Conversión: Utilizadas para evaluar el rendimiento de campañas y enlaces a los funnels de consultoría.',
        ],
      },
      {
        title: '4. Tabla de Cookies Principales',
        content: [
          '• _ga / _ga_* | Proveedor: Google LLC (GA4) | Finalidad: Identificar usuarios únicos y métricas agregadas de sesión | Duración: 2 años | Tipo: Analítica',
          '• pl_cookie_consent | Proveedor: soypatricialoaiza.com | Finalidad: Almacenar preferencia de aceptación de cookies | Duración: 1 año | Tipo: Técnica',
          '• cf_clearance / cdn | Proveedor: Cloudflare / CDN | Finalidad: Seguridad perimetral y mitigación de bots | Duración: 1 año | Tipo: Necesaria',
        ],
      },
      {
        title: '5. Consentimiento y Configuración de Cookies',
        content: 'Con excepción de las cookies estrictamente necesarias para el funcionamiento del sitio, las cookies analíticas y publicitarias se activan únicamente cuando el usuario otorga su consentimiento previo mediante el banner informativo del sitio web. El usuario puede aceptar, rechazar o modificar sus preferencias en cualquier momento desde el pie de página de la web o configurando su navegador.',
      },
      {
        title: '6. Cómo Desactivar o Eliminar Cookies en tu Navegador',
        content: [
          'El usuario puede restringir, bloquear o borrar las cookies instaladas en su equipo mediante las opciones de configuración de su navegador:',
          '• Google Chrome: Configuración > Privacidad y seguridad > Cookies de terceros y datos de sitios.',
          '• Mozilla Firefox: Opciones > Privacidad & Seguridad > Cookies y datos del sitio.',
          '• Apple Safari: Preferencias > Privacidad > Bloquear todas las cookies o gestionar datos del sitio web.',
          '• Microsoft Edge: Configuración > Privacidad, búsqueda y servicios > Cookies y permisos del sitio.',
          'Si decide bloquear todas las cookies, es posible que algunas funciones técnicas de navegación o visualización se vean limitadas.',
        ],
      },
      {
        title: '7. Señales de Exclusión y Global Privacy Control (GPC)',
        content: 'El sitio web reconoce y respeta las señales estándar de control de privacidad, tales como Global Privacy Control (GPC), emitidas por navegadores o extensiones configuradas por el usuario para manifestar su oposición al rastreo no esencial.',
      },
      {
        title: '8. Enlace con la Política de Tratamiento y Canal de Atención',
        content: [
          'Esta Política de Cookies complementa la Política de Tratamiento de Datos Personales (Código: PL-01) y el Aviso de Privacidad (AV-01) disponibles en https://soypatricialoaiza.com.',
          '• Canal de atención para consultas sobre cookies y privacidad: hola@soypatricialoaiza.com',
          '• Teléfono / WhatsApp: +57 300 813 5043',
          '• Vigencia: Esta Política de Cookies rige desde el 3 de noviembre de 2026.',
        ],
      },
    ],
  });

  console.log('✓ All 4 legal PDFs successfully generated and synchronized with white background logos and verified canonical data!');
}

generateAll().catch(console.error);

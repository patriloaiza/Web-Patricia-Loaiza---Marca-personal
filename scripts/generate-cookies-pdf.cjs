const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createCookiePolicyPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Red brand color #E30613
  const brandRed = rgb(227 / 255, 6 / 255, 19 / 255);
  const darkGray = rgb(30 / 255, 30 / 255, 30 / 255);
  const medGray = rgb(100 / 255, 100 / 255, 100 / 255);
  const lightGray = rgb(240 / 255, 240 / 255, 240 / 255);

  const drawHeader = (page, pageNum, totalPages) => {
    const { width, height } = page.getSize();
    
    // Top banner bar
    page.drawRectangle({
      x: 40,
      y: height - 60,
      width: width - 80,
      height: 25,
      color: rgb(15 / 255, 15 / 255, 15 / 255),
    });

    page.drawText('PATRICIA LOAIZA', {
      x: 55,
      y: height - 52,
      size: 11,
      font: fontBold,
      color: rgb(1, 1, 1),
    });

    page.drawText('CREA Y MONETIZA', {
      x: width - 180,
      y: height - 52,
      size: 11,
      font: fontBold,
      color: brandRed,
    });

    // Metadata subheader
    page.drawText('Código: CK-01    Versión: 01    Fecha de emisión: 3 de noviembre de 2026', {
      x: 40,
      y: height - 78,
      size: 8.5,
      font: fontRegular,
      color: medGray,
    });

    page.drawLine({
      start: { x: 40, y: height - 85 },
      end: { x: width - 40, y: height - 85 },
      thickness: 1,
      color: rgb(220 / 255, 220 / 255, 220 / 255),
    });

    // Footer
    page.drawLine({
      start: { x: 40, y: 45 },
      end: { x: width - 40, y: 45 },
      thickness: 1,
      color: rgb(220 / 255, 220 / 255, 220 / 255),
    });

    page.drawText(`Patricia Loaiza™ | CREA Y MONETIZA™ · CK-01 v01 · Página ${pageNum} de ${totalPages}`, {
      x: 40,
      y: 32,
      size: 8,
      font: fontRegular,
      color: medGray,
    });
  };

  // PAGE 1
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  drawHeader(page1, 1, 2);

  let y = 730;
  page1.drawText('POLÍTICA DE COOKIES Y TECNOLOGÍAS SIMILARES', {
    x: 40,
    y: y,
    size: 15,
    font: fontBold,
    color: darkGray,
  });
  y -= 18;
  page1.drawText('PATRICIA LOAIZA™ | CREA Y MONETIZA™', {
    x: 40,
    y: y,
    size: 11,
    font: fontBold,
    color: brandRed,
  });
  y -= 25;

  const p1Intro = [
    'En cumplimiento de la Ley Estatutaria 1581 de 2012 de Colombia, el Decreto 1074 de 2015, y conforme a los',
    'estándares del Reglamento General de Protección de Datos de la Unión Europea (RGPD 2016/679) y la Directiva',
    'ePrivacy (2002/58/CE), esta Política informa sobre el uso de cookies en el sitio web https://soypatricialoaiza.com.',
  ];
  for (const line of p1Intro) {
    page1.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 10;

  // Sec 1
  page1.drawText('1. IDENTIFICACIÓN DE LA RESPONSABLE', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec1 = [
    'Responsable: Patricia Loaiza, persona natural con domicilio en Medellín, Colombia (marcas PATRICIA LOAIZA™ y CREA Y MONETIZA™).',
    'Correo de contacto: hola@soypatricialoaiza.com  |  Teléfono / WhatsApp: +57 300 813 5043  |  Domicilio profesional: Medellín, Antioquia, Colombia.',
    'Sitio web oficial: https://soypatricialoaiza.com',
  ];
  for (const line of sec1) {
    page1.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 10;

  // Sec 2
  page1.drawText('2. ¿QUÉ SON LAS COOKIES?', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec2 = [
    'Las cookies son pequeños archivos de datos que se descargan en el navegador del usuario al visitar una página web. Permiten a la',
    'plataforma recordar información sobre su visita, como su idioma de preferencia, autenticación de sesión y datos de navegación, para',
    'facilitar el uso de los servicios y medir la eficacia de los contenidos ofrecidos.',
  ];
  for (const line of sec2) {
    page1.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 10;

  // Sec 3
  page1.drawText('3. CATEGORÍAS DE COOKIES UTILIZADAS EN ESTE SITIO', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec3 = [
    '• Técnicas y Estrictamente Necesarias: Indispensables para la navegación, seguridad y carga eficiente de la web.',
    '  No requieren consentimiento previo al ser imprescindibles para el funcionamiento técnico del sitio.',
    '• Analíticas y de Rendimiento: Permiten medir el volumen de visitas, páginas consultadas y comportamiento agregado para',
    '  mejorar la experiencia del usuario y optimizar la arquitectura del sitio web (Google Analytics 4).',
    '• De Preferencias: Recuerdan opciones elegidas por el usuario, como el consentimiento de privacidad o idioma.',
    '• De Marketing y Conversión: Utilizadas para evaluar el rendimiento de campañas y enlaces a los funnels de consultoría.',
  ];
  for (const line of sec3) {
    page1.drawText(line, { x: 40, y, size: 8.5, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 10;

  // Sec 4
  page1.drawText('4. TABLA DETALLADA DE COOKIES Y PROVEEDORES', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;

  // Table Header Box
  page1.drawRectangle({ x: 40, y: y - 5, width: 515, height: 18, color: lightGray });
  page1.drawText('Cookie', { x: 45, y: y, size: 8, font: fontBold, color: darkGray });
  page1.drawText('Proveedor', { x: 130, y: y, size: 8, font: fontBold, color: darkGray });
  page1.drawText('Finalidad', { x: 230, y: y, size: 8, font: fontBold, color: darkGray });
  page1.drawText('Duración', { x: 430, y: y, size: 8, font: fontBold, color: darkGray });
  page1.drawText('Tipo', { x: 485, y: y, size: 8, font: fontBold, color: darkGray });
  y -= 18;

  const cookieRows = [
    ['_ga', 'Google LLC (GA4)', 'Identificar usuarios únicos y métricas agregadas', '2 años', 'Analítica'],
    ['_ga_*', 'Google LLC (GA4)', 'Mantener el estado de la sesión de analítica', '2 años', 'Analítica'],
    ['pl_cookie_consent', 'soypatricialoaiza.com', 'Almacenar preferencia de aceptación de cookies', '1 año', 'Técnica'],
    ['cf_clearance / cdn', 'Cloudflare / Fastly', 'Seguridad perimetral y mitigación de bots', '1 año', 'Necesaria'],
  ];

  for (const row of cookieRows) {
    page1.drawText(row[0], { x: 45, y, size: 8, font: fontBold, color: darkGray });
    page1.drawText(row[1], { x: 130, y, size: 8, font: fontRegular, color: darkGray });
    page1.drawText(row[2], { x: 230, y, size: 7.5, font: fontRegular, color: darkGray });
    page1.drawText(row[3], { x: 430, y, size: 8, font: fontRegular, color: darkGray });
    page1.drawText(row[4], { x: 485, y, size: 8, font: fontRegular, color: darkGray });
    y -= 16;
  }

  // PAGE 2
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  drawHeader(page2, 2, 2);

  y = 730;
  page2.drawText('5. CONSENTIMIENTO Y CONFIGURACIÓN DE COOKIES', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec5 = [
    'Con excepción de las cookies estrictamente necesarias para el funcionamiento del sitio, las cookies analíticas y publicitarias se',
    'activan únicamente cuando el usuario otorga su consentimiento previo mediante el banner informativo del sitio web.',
    'El usuario puede aceptar, rechazar o modificar sus preferencias en cualquier momento desde el pie de página de la web o configurando',
    'su navegador de internet.',
  ];
  for (const line of sec5) {
    page2.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 15;

  page2.drawText('6. CÓMO DESACTIVAR O ELIMINAR COOKIES EN TU NAVEGADOR', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec6 = [
    'El usuario puede restringir, bloquear o borrar las cookies instaladas en su equipo mediante las opciones de configuración de su navegador:',
    '• Google Chrome: Configuración > Privacidad y seguridad > Cookies de terceros y datos de sitios.',
    '• Mozilla Firefox: Opciones > Privacidad & Seguridad > Cookies y datos del sitio.',
    '• Apple Safari: Preferencias > Privacidad > Bloquear todas las cookies o gestionar datos del sitio web.',
    '• Microsoft Edge: Configuración > Privacidad, búsqueda y servicios > Cookies y permisos del sitio.',
    'Si decide bloquear todas las cookies, es posible que algunas funciones técnicas de navegación o visualización se vean limitadas.',
  ];
  for (const line of sec6) {
    page2.drawText(line, { x: 40, y, size: 8.5, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 15;

  page2.drawText('7. SEÑALES DE EXCLUSIÓN Y GLOBAL PRIVACY CONTROL (GPC)', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec7 = [
    'El sitio web reconoce y respeta las señales estándar de control de privacidad, tales como Global Privacy Control (GPC), emitidas',
    'por navegadores o extensiones configuradas por el usuario para manifestar su oposición al rastreo no esencial.',
  ];
  for (const line of sec7) {
    page2.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }
  y -= 15;

  page2.drawText('8. ENLACE CON LA POLÍTICA DE TRATAMIENTO Y CANAL DE ATENCIÓN', { x: 40, y, size: 10, font: fontBold, color: brandRed });
  y -= 16;
  const sec8 = [
    'Esta Política de Cookies complementa la Política de Tratamiento de Datos Personales (Código: PL-01) y el Aviso de Privacidad (AV-01)',
    'disponibles en https://soypatricialoaiza.com.',
    'Para cualquier duda, solicitud o ejercicio de derechos de privacidad, puede escribir a: hola@soypatricialoaiza.com.',
    'Vigencia: Esta Política de Cookies rige desde el 3 de noviembre de 2026.',
  ];
  for (const line of sec8) {
    page2.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: darkGray });
    y -= 13;
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/docs/politica-cookies.pdf', pdfBytes);
  fs.writeFileSync('public/assets/aistudio/05_Politica_Cookies_PL_CyM_91ab48e2.pdf', pdfBytes);
  console.log('PDF generated successfully at public/docs/politica-cookies.pdf');
}

createCookiePolicyPdf().catch(console.error);

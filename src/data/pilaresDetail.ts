import { PilarFullDetail } from '../types/index.ts';

export const PILARES_FULL_DETAIL: PilarFullDetail[] = [
  // ==========================================
  // PILAR 1: ESTRATEGIA DE NEGOCIO
  // ==========================================
  {
    id: "pilar-1",
    number: "01",
    commercialName: "Estrategia de Negocio",
    subname: "Oferta, precio y ruta de ventas estructurada para tu consultoría",
    referenceService: "Estrategia de Negocio",
    shortNavName: "Estrategia de Negocio",
    tagline: "Oferta, precio y ruta de ventas estructurada para tu negocio de consultoría.",
    targetProfile: "Profesional Saturado: consultor, terapeuta, psicólogo o experto con años de experiencia y clientes activos, pero cuyo modelo depende por completo de su esfuerzo individual y venta de horas.",
    priceTestimonials: "USD 1.500",
    priceRange: "$1,500 – $3,000 USD por proyecto",
    duration: "45 días estimados",
    modality: "Modalidad colaborativa «Lo hacemos juntos»",
    modalityBadge: "LO HACEMOS JUNTOS",
    modalityNote: "Patricia acompaña el análisis, la dirección estratégica, la toma de decisiones y el desarrollo de los entregables; la ejecución de las acciones y tareas acordadas corresponde al cliente.",
    methodologyNote: "Metodología propia CREA Y MONETIZA® adaptando frameworks analíticos de BMS (Business Marketing Strategy) de Vilma Núñez y Journi con crédito explícito.",
    objective: "Transformar un negocio de servicios que funciona de manera reactiva o depende excesivamente de la atención individual del profesional en un negocio estructurado estratégicamente, con una oferta organizada, una propuesta de valor clara y una dirección de crecimiento sostenible.",
    needSolved: "El profesional tiene experiencia, clientes y conocimientos sólidos, pero no cuenta con una estructura que conecte su modelo, sus servicios, sus oportunidades comerciales y sus prioridades de crecimiento. Cotiza desde cero para cada cliente y resuelve cada situación sobre la marcha.",
    transformation: {
      before: "Servicios dispersos, cotizaciones a medida desde cero, cobro por horas y desgaste operativo constante por resolver sobre la marcha sin límites claros.",
      after: "Un modelo de consultoría estructurado con ofertas productizadas, política de precios basada en valor y una ruta comercial que escala sin multiplicar tus horas de trabajo."
    },
    keyComponents: [
      "Diagnóstico clínico inicial y matriz de brechas de oferta y ventas",
      "Productización del saber hacer en ofertas delimitadas con entregables definidos",
      "Arquitectura de servicios con Portafolio Hexagonal y Portafolio Órbita (BMS)",
      "Política de precios basada en valor y argumentación comercial con Sistema PEPE",
      "One Page Strategy y Plan de Transformación táctico de 100 Días"
    ],
    phases: [
      {
        number: "00",
        name: "Toma de radiografía del negocio y análisis",
        subtitle: "Radiografía integral de la marca, modelo y situación actual",
        exercisesCount: "2 ejercicios",
        realDeliverable: "Radiografía completa de tu marca, negocio, visión y objetivos (Briefing Estratégico Maestro).",
        summary: "Punto de partida del proyecto. Se realiza la toma de radiografía profunda y el análisis exhaustivo de la situación real, modelos previos, clientes atendidos y auditoría de la situación actual para fundamentar las decisiones estratégicas.",
        bullets: [
          "Toma de radiografía del negocio y análisis exhaustivo del modelo y clientes históricos",
          "Auditoría de activos existentes y análisis de compromisos operativos",
          "Documento unificado de visión, expectativas y objetivos prioritarios"
        ]
      },
      {
        number: "01",
        name: "Diagnóstico inicial",
        subtitle: "Lectura clara de la situación y la oportunidad",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Informe de Diagnóstico Estratégico y Matriz de Brechas Críticas.",
        summary: "Momento donde la consultora sintetiza la radiografía del negocio y las auditorías en una lectura clara de la situación real. Define dónde está el cuello de botella comercial y dónde radica la mayor oportunidad de crecimiento.",
        bullets: [
          "Mapeo de fugas de rentabilidad y servicios poco rentables",
          "Identificación del techo de cristal operativo por venta de horas",
          "Definición de la prioridad estratégica número uno a intervenir"
        ]
      },
      {
        number: "02",
        name: "Investigación, estrategia y consultoría",
        subtitle: "El corazón del servicio: información convertida en decisiones",
        exercisesCount: "27 ejercicios",
        realDeliverable: "Arquitectura de Oferta Productizada + Portafolio Hexagonal y Órbita + Sistema PEPE + One Page Strategy + Plan 100 Días.",
        summary: "Aquí se convierte la información levantada en decisiones de negocio, portafolio y marketing. Se estructuran las ofertas que sustituyen la venta de horas por servicios con entregables delimitados.",
        bullets: [
          "Definición y segmentación del cliente ideal de alta disposición de pago",
          "Productización de tu servicio estrella: alcance, entregables, cronograma y límites",
          "Portafolio Hexagonal: diversificación armónica de servicios de conocimiento (adaptado de BMS)",
          "Portafolio Órbita: atracción gravitacional sin venta agresiva (adaptado de BMS)",
          "Sistema PEPE: Problema · Enfoque · Plan · Evidencia para propuestas comerciales",
          "One Page Strategy: síntesis ejecutiva del negocio en una sola matriz visual",
          "Plan de Transformación de 100 Días estructurado en ciclos de 30, 60 y 90 días"
        ]
      },
      {
        number: "03",
        name: "Activos de IA",
        subtitle: "Workflows, agentes, skills y/o GPTs",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Herramientas de IA metodológicas para ejecutar tácticas y delegar con criterio a tu equipo.",
        summary: "Herramientas de inteligencia artificial de la plataforma metodológica diseñadas para que la estrategia no quede en papel: flujos, prompts y asistentes que nutres con tu Portal de Notion personalizado para operar con autonomía y delegar tareas a tu equipo sabiendo qué esperar.",
        bullets: [
          "Herramientas de IA para evaluar encaje de prospectos y cualificación comercial",
          "Prompts metodológicos para estructurar propuestas comerciales bajo el Sistema PEPE",
          "Protocolos de delegación a tu equipo conociendo el estándar de calidad y resultado a exigir"
        ]
      },
      {
        number: "04",
        name: "Offboarding",
        subtitle: "Entrega y acompañamiento en 3 pistas",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Dossier Maestro de Cierre en Notion + Repositorio Vitalicio de Grabaciones + Plan de Autonomía.",
        summary: "Cierre formal del proyecto con todos los entregables organizados en tu portal privado de Notion, acuerdos formalizados y soporte posterior para garantizar que el cliente ejecute con autonomía.",
        bullets: [
          "Pista 1: Entrega formal de documentación y manuales de la oferta",
          "Pista 2: Repositorio centralizado con todas las grabaciones de sesiones",
          "Pista 3: Hoja de ruta para los 100 días posteriores con checkpoints de revisión"
        ]
      }
    ],
    deliverablesTangibles: [
      "Informe Clínico de Diagnóstico Estratégico y Matriz de Brechas",
      "Oferta Productizada Empaquetada (Productiza tu Servicio) con alcance y límites",
      "Portafolio Hexagonal y Portafolio Órbita estructurados (adaptados de BMS)",
      "Sistema PEPE (Problema · Enfoque · Plan · Evidencia) para propuestas de alta autoridad",
      "One Page Strategy con matriz visual de control",
      "Plan de Transformación táctico de 100 Días",
      "Herramientas de IA metodológicas para operar con autonomía y delegar a tu equipo",
      "Portal individual en Notion (100% personalizado) con acceso vitalicio"
    ],
    notionWorkspace: [
      "Ruta estratégica y cronograma del proyecto",
      "Tablero Kanban con ejercicios estratégicos y asignación de tareas del cliente",
      "Repositorio de fichas técnicas de la oferta y matrices de precios",
      "Grabaciones en video de todas las sesiones de consultoría y acuerdos tomados"
    ],
    aiPlatform: [
      "Prompts y skills metodológicos de IA para análisis de prospectos y estructuración de ofertas",
      "Herramientas diseñadas para delegar tareas operativas a tu equipo sabiendo qué esperar",
      "Sinergia directa: nutres las herramientas de la plataforma con los datos de tu Notion"
    ],
    scopeLimits: {
      included: [
        "Diagnóstico clínico previo de la situación actual y modelo de negocio",
        "Acompañamiento estratégico 1 a 1 en sesiones de consultoría colaborativa",
        "Diseño completo de la oferta productizada, portafolios y política de precios",
        "Configuración del portal privado en Notion (100% personalizado) con acceso permanente",
        "Acceso a la plataforma de IA con herramientas metodológicas para crear y delegar"
      ],
      notIncluded: [
        "Ejecución de las tareas cotidianas del negocio en nombre del cliente",
        "Gestión de ventas en llamadas comerciales sustituyendo al consultor",
        "Desarrollo de software a medida o programación desde cero",
        "Contratación o pago de herramientas externas o software que el cliente elija"
      ]
    },
    faqs: [
      {
        question: "¿Cuál es la diferencia entre consultoría a medida y servicio productizado?",
        answer: "La consultoría tradicional a medida cotiza horas sueltas sin fin y resuelve lo que surge. Un servicio productizado tiene un diagnóstico previo, un nombre propio, un alcance delimitado, entregables tangibles específicos y un precio fijado por valor, lo que permite cobrar mejor y evitar el agotamiento."
      },
      {
        question: "¿Por qué se menciona a BMS (Business Marketing Strategy) de Vilma Núñez?",
        answer: "Patricia Loaiza estudia y adapta frameworks analíticos de BMS (como el Portafolio Hexagonal, Portafolio Órbita, PEPE y One Page Strategy) dentro de su metodología propia CREA Y MONETIZA®. Se otorga crédito formal y explícito a Vilma Núñez y Journi para garantizar total rigor ético y académico."
      },
      {
        question: "¿Qué compromiso de tiempo requiere este pilar por parte del cliente?",
        answer: "Al ser una modalidad colaborativa «Lo hacemos juntos», requiere asistencia a las sesiones estratégicas acordadas y aproximadamente 3 a 5 horas semanales para validar información, revisar ejercicios en Notion y ejecutar las decisiones pactadas."
      }
    ]
  },

  // ==========================================
  // PILAR 2: MARCA PERSONAL
  // ==========================================
  {
    id: "pilar-2",
    number: "02",
    commercialName: "Marca Personal",
    subname: "Posicionamiento, mensaje y conexión con la monetización de alto valor",
    referenceService: "Marca Personal",
    shortNavName: "Marca Personal",
    tagline: "Posicionamiento, mensaje y conexión con la monetización de alto valor.",
    targetProfile: "Experto Invisible: terapeutas, psicólogos, consultores y profesionales consolidados con más de 10 a 20 años de experiencia que son excelentes en lo que hacen, pero cuya reputación no se proyecta con claridad en canales digitales y cobran por debajo de su valor.",
    priceTestimonials: "USD 1.500",
    priceRange: "$1,500 – $3,500 USD por proyecto",
    duration: "45 días estimados",
    modality: "Modalidad colaborativa «Lo hacemos juntos»",
    modalityBadge: "LO HACEMOS JUNTOS",
    modalityNote: "Trabajo conjunto en esencia, narrativa y mensajes comerciales; el cliente valida y asume la comunicación en sus canales.",
    objective: "Construir una marca personal clara, diferenciada y reconocible, capaz de comunicar el valor de la experiencia profesional, fortalecer el posicionamiento de autoridad y respaldar ofertas de alto valor (High Ticket).",
    needSolved: "El profesional tiene experiencia y conocimientos profundos, pero no logra transmitir con claridad qué lo hace diferente, cuál es su propuesta de valor o por qué deberían elegirlo. Su comunicación es dispersa o genérica y depende de recomendaciones casuales.",
    transformation: {
      before: "Trayectoria profesional no comunicada estratégicamente, mensajes genéricos, dependencia del boca a boca casual y tarifas bajas por falta de autoridad percibida.",
      after: "Marca personal estructurada con identidad nítida, posicionamiento de autoridad indiscutible y capacidad para respaldar ofertas de alto valor sin regateos."
    },
    keyComponents: [
      "Manual Maestro de Marca y Cimientos de Identidad",
      "Relato Corporativo y Storytelling de Autoridad profesional",
      "Estrategia de Comunicación, Microautoridad y Calendario a 4 semanas",
      "Arquitectura de Mensajes de Venta y Posicionamiento High Ticket",
      "Herramientas de IA para redacción estratégica y delegación con criterio a tu equipo"
    ],
    phases: [
      {
        number: "00",
        name: "Toma de radiografía y análisis de trayectoria",
        subtitle: "Radiografía profunda de trayectoria, autoridad y visión",
        exercisesCount: "0 ejercicios del cliente",
        realDeliverable: "Radiografía completa de tu marca, trayectoria y visión (Briefing Maestro de Marca).",
        summary: "Toma de radiografía integral y análisis de la historia profesional, casos de éxito, filosofía de trabajo, temas dominantes y objetivos comerciales.",
        bullets: [
          "Toma de radiografía profunda de la trayectoria profesional y casos de éxito reales",
          "Consolidación y análisis del expediente de identidad y antecedentes del profesional"
        ]
      },
      {
        number: "01",
        name: "Marca",
        subtitle: "Cimientos, voces y narrativa de la marca personal",
        exercisesCount: "10 ejercicios",
        realDeliverable: "Manual de Identidad y Cimientos de Marca Personal.",
        summary: "Definir quién es el profesional como marca personal: identidad operativa, perfil de comunicación DISC, cimientos filosóficos, voces de marca, temas que domina, palabras clave y bio oficial optimizada.",
        bullets: [
          "Cimientos y principios rectores de la marca personal",
          "Arquetipo de marca y perfil conductual/comunicativo DISC",
          "Matriz de temas maestros que domina y vocabulario prohibido vs. propio",
          "Biografías profesionales optimizadas para LinkedIn, sitio web y presentaciones"
        ]
      },
      {
        number: "02",
        name: "Mensaje",
        subtitle: "Pilares, formatos y framework de microautoridad",
        exercisesCount: "8 ejercicios",
        realDeliverable: "Estrategia de Comunicación, Framework de Microautoridad y Plan de Contenidos a 4 Semanas.",
        summary: "Del cimiento al calendario: tono de voz, pilares de contenido y posicionamiento, formatos prioritarios, framework de microautoridad y plan estructurado a 4 semanas para proyectar prestigio.",
        bullets: [
          "Matriz de pilares de contenido: autoridad, educación, contraste de mercado y conversión",
          "Framework de Microautoridad para posicionarte como referente en tu nicho",
          "Estructura narrativa y storytelling de casos de estudio sin tecnicismos vacíos",
          "Plan de comunicación y contenidos para el primer mes de validación"
        ]
      },
      {
        number: "03",
        name: "Monetización",
        subtitle: "Cómo la marca personal genera ingresos de alto valor",
        exercisesCount: "15 ejercicios",
        realDeliverable: "Estrategia de Posicionamiento High Ticket y Matriz de Precios/Oferta.",
        summary: "Segmentación, avatares, oferta, precio, portafolio y mensaje de venta. Todo lo que necesita el cliente para vender con criterio y respaldar honorarios premium.",
        bullets: [
          "Segmentación del perfil de cliente que valora el criterio senior y paga sin regateos",
          "Alineación del relato de marca con la oferta comercial de alto valor",
          "Matriz de objeciones comerciales y respuestas de alta autoridad",
          "Guión de conversación consultiva para reuniones de diagnóstico con prospectos"
        ]
      },
      {
        number: "04",
        name: "Activos de IA",
        subtitle: "Workflows, agentes, skills y/o GPTs",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Herramientas de IA de Marca Personal para redacción de autoridad y delegación con criterio.",
        summary: "Herramientas y prompts metodológicos de IA que el cliente alimenta con los cimientos y manual de marca de su Portal de Notion personalizado, permitiéndole crear contenidos con autonomía y delegar tareas operativas a su equipo sabiendo con precisión qué esperar.",
        bullets: [
          "Asistentes y prompts metodológicos para redacción de reflexiones y artículos de autoridad",
          "Capacidad para delegar la creación de borradores a tu equipo con pautas claras de estilo",
          "Sinergia con tu Notion: la IA trabaja con tus cimientos documentados y no alucina"
        ]
      },
      {
        number: "05",
        name: "Offboarding",
        subtitle: "Entrega y acompañamiento post-servicio",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Dossier Maestro de Marca en Notion + Repositorio de Activos y Sesión de Transferencia.",
        summary: "Cierre formal del proyecto con todos los entregables organizados en tu portal privado, banco de historias clasificadas y soporte posterior.",
        bullets: [
          "Entrega del Manual Maestro de Marca completo en Notion y PDF ejecutivo",
          "Banco de historias y relatos personales ordenados por objetivos",
          "Sesión de transferencia para asegurar que operes tu comunicación con autonomía"
        ]
      }
    ],
    deliverablesTangibles: [
      "Radiografía completa de Marca y Briefing Maestro",
      "Manual de Identidad y Cimientos de Marca Personal (DISC, arquetipo, bio)",
      "Estrategia de Comunicación y Framework de Microautoridad",
      "Plan de Contenidos a 4 Semanas listo para ejecutar",
      "Estrategia de Posicionamiento High Ticket y Matriz de Precios",
      "Herramientas de IA de Marca Personal para autonomía operativa y delegación a tu equipo",
      "Dossier Maestro de Marca en Notion (100% personalizado) con acceso permanente"
    ],
    notionWorkspace: [
      "Repositorio maestro de identidad, tono y arquetipo (100% personalizado)",
      "Banco de historias personales y casos corporativos clasificados",
      "Matriz de objeciones comerciales y respuestas de alta autoridad",
      "Grabaciones completas de todas las sesiones de consultoría"
    ],
    aiPlatform: [
      "Herramientas de IA metodológicas para proyectar autoridad y estructurar reflexiones",
      "Pautas y prompts diseñados para delegar tareas a tu equipo sabiendo qué resultado exigir",
      "Sinergia directa: nutres las herramientas de la plataforma con los datos de tu Notion"
    ],
    scopeLimits: {
      included: [
        "Definición estratégica de identidad, relato de autoridad y mensajes comerciales",
        "Acompañamiento colaborativo 1 a 1 en sesiones con Patricia Loaiza",
        "Diseño de la estrategia de monetización High Ticket y guiones consultivos",
        "Portal privado en Notion (100% personalizado) y acceso a herramientas de IA en la plataforma"
      ],
      notIncluded: [
        "Gestión diaria o publicación rutinaria de redes sociales sustituyendo al cliente",
        "Servicio de community management, respuesta a mensajes directos o moderación",
        "Diseño gráfico publicitario masivo o producción audiovisual de video",
        "Compra de pauta publicitaria en redes o medios"
      ]
    },
    faqs: [
      {
        question: "¿Tengo que convertirme en 'influencer' o hacer bailes en redes?",
        answer: "Rotundamente no. La marca personal para profesionales senior (terapeutas, psicólogos, consultores) se basa en Microautoridad y Rigor Clínico. No buscamos aplausos masivos, sino respeto profesional, confianza inmediata y clientes cualificados que valoren tu trayectoria."
      },
      {
        question: "¿Cómo se asegura que la IA mantenga un tono profesional y sin clichés?",
        answer: "Con la información estructurada de tu Manual de Marca y Cimientos en Notion, alimentas las herramientas de IA de la plataforma con tu contexto real. Así la IA trabaja con pautas estrictas y tú o tu equipo producen contenidos con absoluto criterio y autoridad."
      }
    ]
  },

  // ==========================================
  // PILAR 3: SISTEMA DE CONTENIDOS
  // ==========================================
  {
    id: "pilar-3",
    number: "03",
    commercialName: "Sistema de Contenidos",
    subname: "Voz, estrategia y producción de contenidos asistida por IA con retorno comercial",
    referenceService: "Sistema de Contenidos",
    shortNavName: "Sistema de Contenidos",
    tagline: "Voz, estrategia y producción de contenidos asistida por IA con retorno comercial.",
    targetProfile: "Experto sin tiempo: profesional con conocimiento valioso que publica de forma aislada, siente bloqueo frente a la hoja en blanco o pierde horas redactando sin ver retorno comercial en clientes.",
    priceTestimonials: "USD 1.500",
    priceRange: "$1,200 – $2,500 USD por proyecto",
    duration: "45 días estimados (ciclo inicial de 8 semanas de producción)",
    modality: "Modalidad colaborativa «Lo hacemos juntos»",
    modalityBadge: "LO HACEMOS JUNTOS",
    modalityNote: "Configuramos tu sistema, pilares, bases de conocimiento y copilotos de IA; la grabación, validación y publicación del contenido es responsabilidad del cliente.",
    objective: "Desarrollar un sistema estratégico de contenidos que permita atraer atención cualificada, fortalecer la autoridad del experto, conectar con la audiencia y generar oportunidades comerciales constantes mediante contenidos asistidos por IA.",
    needSolved: "El profesional publica sin un sistema claro, no consigue mantener consistencia, invierte demasiado tiempo en crear contenidos o no logra conectar su comunicación con sus objetivos comerciales. Publica mucho y vende poco.",
    transformation: {
      before: "Publicaciones dispersas, bloqueo frente a la hoja en blanco, horas perdidas redactando y contenidos sin retorno comercial.",
      after: "Un sistema de contenidos asistido por IA nutrido con la base de conocimiento de tu Notion, con pilares temáticos que educan prospectos hacia tu oferta."
    },
    keyComponents: [
      "Auditoría de Contenido y Mapa de Audiencia",
      "Estrategia Dual de Viralidad: Perpetua (Evergreen) + Por Campañas",
      "Brand Voice documentado (`brand-voice.md`) y Herramientas Copywriter",
      "Brand Design System documentado (`Design.md`)",
      "Brand Knowledge Base (Cerebro en Gemini Notebook o repositorio)",
      "Viral Content Engine: ciclo de 8 semanas con 30 piezas producidas"
    ],
    phases: [
      {
        number: "00",
        name: "Toma de radiografía y análisis de audiencia",
        subtitle: "Radiografía estratégica de oferta, temas clave y audiencia",
        exercisesCount: "0 ejercicios del cliente",
        realDeliverable: "Radiografía estratégica de audiencia y Briefing Maestro de Contenidos.",
        summary: "Toma de radiografía integral y análisis ágil de los insumos clave del negocio, temas prioritarios, audiencia y referentes visuales.",
        bullets: [
          "Toma de radiografía de los pilares de la oferta y problemas que resuelve el negocio",
          "Identificación y análisis de preguntas frecuentes, dudas y necesidades de prospectos reales"
        ]
      },
      {
        number: "01",
        name: "Business Context",
        subtitle: "Entender el negocio a fondo",
        exercisesCount: "9 ejercicios",
        realDeliverable: "Documento Estratégico del Negocio.",
        summary: "Comprendemos el negocio a fondo: qué vende, a quién se dirige, propuesta de valor, portafolio, cliente ideal, diferenciadores y objetivos del negocio.",
        bullets: [
          "Mapeo de la propuesta de valor comercial que el contenido debe respaldar",
          "Definición de las barreras y objeciones habituales de la audiencia",
          "Conexión explícita entre temáticas editoriales y servicios de pago"
        ]
      },
      {
        number: "02",
        name: "Auditoría de Contenido",
        subtitle: "Medir el estado actual y hallar oportunidades",
        exercisesCount: "12 ejercicios",
        realDeliverable: "Auditoría con Diagnóstico Clínico + Plan de Oportunidades.",
        summary: "Evaluamos el estado actual de la presencia digital, contenido previo, métricas, posicionamiento, canales y competidores para identificar vacíos y aciertos.",
        bullets: [
          "Análisis forense de publicaciones previas y temas con mayor tracción",
          "Diagnóstico de canales (LinkedIn, Instagram, Web) y formatos idóneos",
          "Detección de ángulos temáticos desatendidos por los competidores"
        ]
      },
      {
        number: "03",
        name: "Estrategia de Viralidad",
        subtitle: "Diseñar el sistema de crecimiento dual",
        exercisesCount: "14 ejercicios",
        realDeliverable: "Estrategia de Crecimiento Dual: Viralidad Perpetua + Por Campañas.",
        summary: "Diseñamos el sistema de crecimiento adaptado al negocio, diferenciando entre Viralidad Perpetua (evergreen que educa a diario) y Viralidad por Campañas (picos de tracción para lanzamientos).",
        bullets: [
          "Flujo de Viralidad Perpetua para nutrir y filtrar a nuevos seguidores constantemente",
          "Flujo de Viralidad por Campañas para activar promociones de servicios específicos",
          "Matriz de ganchos (hooks), giros de curiosidad y llamadas a la acción comerciales"
        ]
      },
      {
        number: "04",
        name: "Brand Voice",
        subtitle: "Reconstruir la voz real mediante ingeniería inversa",
        exercisesCount: "1 ejercicio",
        realDeliverable: "brand-voice.md + Herramientas Copywriter metodológicas configuradas.",
        summary: "Un procedimiento riguroso: recopilar evidencia real escrita/oral del cliente, ejecutar el análisis lingüístico, validar el documento brand-voice.md y configurar herramientas para redactar con fidelidad.",
        bullets: [
          "Extracción de cadencia, muletillas, tono, metáforas y expresiones características",
          "Documento brand-voice.md como estándar permanente de redacción",
          "Herramientas de IA metodológicas configuradas para redactar con total fidelidad a tus estándares"
        ]
      },
      {
        number: "05",
        name: "Brand Design System",
        subtitle: "Documentar la identidad visual",
        exercisesCount: "16 ejercicios",
        realDeliverable: "Design.md con estilos y lineamientos visuales.",
        summary: "Documentamos la identidad visual para mantener consistencia en todos los contenidos generados: carruseles, infografías, citas y portadas.",
        bullets: [
          "Paleta cromática oficial, contrastes aprobados y jerarquía tipográfica",
          "Estructura visual de carruseles de alta retención (portada, desarrollo, cierre)",
          "Plantillas y especificaciones visuales documentadas en Design.md"
        ]
      },
      {
        number: "06",
        name: "Brand Knowledge Base",
        subtitle: "Centralizar todo para que la IA trabaje con contexto correcto",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Cerebro del cliente en Gemini Notebook o repositorio de conocimiento.",
        summary: "Centralizamos toda la información relevante del negocio para que la IA siempre trabaje con el contexto correcto, sin inventar datos ni alucinar.",
        bullets: [
          "Consolidación de las fases 1 a 5 en una sola base documental conectada",
          "Configuración del repositorio en Gemini Notebook / Plataforma de IA",
          "Fuente única de verdad que alimenta a todos los copilotos editoriales"
        ]
      },
      {
        number: "07",
        name: "Viral Content",
        subtitle: "Motor de producción con IA: del objetivo al calendario visible",
        exercisesCount: "6 ejercicios",
        realDeliverable: "Ciclo de 8 Semanas con 30 Piezas Producidas y Calendario Editorial Visualizado.",
        summary: "Flujo secuencial de 6 pasos que ensambla todo lo anterior (Cerebro + Voz + Sistema Visual) y produce un ciclo de 8 semanas de contenido listo para publicar.",
        bullets: [
          "30 piezas de contenido terminadas (carruseles, posts de texto, hilos, ideas de video)",
          "Calendario editorial visualizado en Notion con fechas y estados de publicación",
          "Procedimiento operativo estándar (SOP) para producir 10 piezas en 2 horas"
        ]
      },
      {
        number: "08",
        name: "Cierre y Offboarding",
        subtitle: "Entrega formal y acompañamiento post-servicio",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Plan de Offboarding + Board del proyecto con checkpoints a 30 y 60 días.",
        summary: "Cierre profesional del proyecto: se entrega el sistema completo, se definen los checkpoints de seguimiento a 30/60 días y se verifica la autonomía del cliente.",
        bullets: [
          "Transferencia de la base de conocimiento y credenciales",
          "Checkpoints de seguimiento estratégico a los 30 y 60 días del lanzamiento"
        ]
      }
    ],
    deliverablesTangibles: [
      "Briefing estratégico y Radiografía de audiencia",
      "Documento Estratégico del Negocio y Audiencia",
      "Auditoría de Contenidos con Diagnóstico Clínico + Plan de Oportunidades",
      "Estrategia Dual de Crecimiento: Viralidad Perpetua + Por Campañas",
      "Manual Maestro brand-voice.md + Herramientas de IA para redacción y delegación",
      "Brand Design System documentado (Design.md)",
      "Brand Knowledge Base (Cerebro del cliente en Gemini Notebook)",
      "Ciclo de 8 Semanas con 30 Piezas Producidas y Calendario Editorial en Notion",
      "Plan de Offboarding con checkpoints a 30 y 60 días"
    ],
    notionWorkspace: [
      "Calendario editorial y tablero de producción de contenidos por lotes (100% personalizado)",
      "Repositorio de ideas, ganchos y ángulos temáticos alineados con la oferta",
      "Estructura de la base de conocimiento clasificada",
      "Protocolos de revisión rápida antes de publicar"
    ],
    aiPlatform: [
      "Plataforma unificada de herramientas y prompts de IA para producción de contenidos por lotes",
      "Pautas para delegar la redacción a tu equipo sabiendo qué resultado exigir y cómo evaluarlo",
      "Sinergia directa: nutres las herramientas de IA con la Base de Conocimiento de tu Notion"
    ],
    scopeLimits: {
      included: [
        "Configuración completa del sistema de contenidos y base de conocimiento",
        "Diseño de la estrategia dual (evergreen y campañas)",
        "Documentación de tu Brand Voice y configuración de herramientas para redacción",
        "Lote inicial de 30 piezas producidas y calendario para 8 semanas"
      ],
      notIncluded: [
        "Grabación o edición presencial de videos sustituyendo al cliente",
        "Publicación manual diaria o respuesta a mensajes directos de redes",
        "Garantía de viralidad en millones de vistas (se diseña alcance cualificado de conversión)",
        "Gestión continua indefinida sin los checkpoints estipulados"
      ]
    },
    faqs: [
      {
        question: "¿La viralidad garantiza ventas?",
        answer: "No. Millones de vistas de personas equivocadas solo traen ruido. Nuestra estrategia de 'Viral Sales Content' está diseñada para conseguir alcance cualificado: llegar a personas que tienen el problema que resuelves y guiarlas hacia tu diagnóstico u oferta de consultoría."
      },
      {
        question: "¿Cuánto tiempo me tomará crear contenidos con este sistema?",
        answer: "Con el Viral Content Engine y tu base de conocimiento configurada en Notion, pasarás de invertir 10-15 horas semanales a producir por lotes un mes completo de contenidos en solo 2 a 3 horas de trabajo enfocado."
      }
    ]
  },

  // ==========================================
  // PILAR 4: DÍA DE NEGOCIOS DIGITALES
  // ==========================================
  {
    id: "pilar-4",
    number: "04",
    commercialName: "Día de Negocios Digitales: Sistemas Digitales con IA",
    subname: "Jornada intensiva 1 a 1 de estructuración, activos de IA y plan 30-60-90",
    referenceService: "Día de Negocios Digitales",
    shortNavName: "Día de Negocios Digitales",
    tagline: "Un día para redefinir el negocio con inteligencia artificial. Jornada intensiva de 10:00 a. m. a 5:00 p. m.",
    targetProfile: "Profesional o experto interesado en la creación, aceleración o evolución de productos y negocios digitales con IA sin perder semanas ni meses en ensayo y error.",
    priceTestimonials: "USD 2.000",
    priceRange: "$2,000 – $5,000 USD por jornada",
    duration: "1 jornada intensiva de 7 horas (10:00 a. m. a 5:00 p. m. Online o Presencial) + Diagnóstico previo + Plan 30-60-90",
    modality: "Modalidad colaborativa intensiva «Lo hacemos juntos»",
    modalityBadge: "LO HACEMOS JUNTOS",
    modalityNote: "Jornada intensiva 1 a 1 de 10:00 a. m. a 5:00 p. m. con trabajo estratégico mano a mano; el cliente ejecuta el plan posterior con sus recursos.",
    methodologyNote: "Metodología AI-First y Plan de Acción táctico 30-60-90 días.",
    objective: "Analizar y orientar la evolución de un negocio hacia un modelo digital más estructurado, identificando oportunidades de monetización, productización, marketing, ventas e integración de inteligencia artificial en una jornada de alto rendimiento.",
    needSolved: "El profesional tiene una idea de producto digital, una oferta que desea escalar o un negocio que necesita evolucionar, pero requiere claridad sobre el modelo, las oportunidades comerciales, la aplicación real de IA y las decisiones prioritarias.",
    transformation: {
      before: "Ideas digitales dispersas, parálisis por exceso de herramientas, dudas sobre cómo aplicar IA y semanas postergando la digitalización de tu negocio.",
      after: "Una jornada intensiva donde sales con tu modelo digital definido, arquitectura técnica clara, copilotos de IA configurados y un plan de acción de 30-60-90 días listo para ejecutar."
    },
    keyComponents: [
      "Frente 01: Estrategia AI-First (IA como ventaja competitiva real)",
      "Frente 02: Adquisición con tracción medible y campañas con IA",
      "Frente 03: Recorrido comercial y maximización del ticket",
      "Frente 04 y 05: Productización y los 3 Agentes de IA operativos",
      "Frente 06: Visión a 10 años, prioridades y liderazgo del fundador",
      "Plan Maestro de Transformación 30-60-90 días"
    ],
    phases: [
      {
        number: "00",
        name: "Toma de radiografía previa y análisis del modelo",
        subtitle: "Radiografía estratégica y análisis previo antes de la jornada",
        exercisesCount: "1 ejercicio",
        realDeliverable: "Briefing estratégico previo a la jornada (Radiografía completa del negocio).",
        summary: "Antes de la jornada se realiza la toma de radiografía y el análisis previo del negocio para que Patricia llegue con el diagnóstico preliminar listo y se aprovechen al máximo las 7 horas en decisiones y construcción.",
        bullets: [
          "Toma de radiografía previa sobre modelo de negocio, márgenes, procesos y oferta actual",
          "Análisis preliminar de cuellos de botella e insumo base para las decisiones estratégicas del día intensivo"
        ]
      },
      {
        number: "01",
        name: "Auditoría del modelo de negocio",
        subtitle: "Diagnóstico previo de negocio y growth marketing",
        exercisesCount: "10 ejercicios",
        realDeliverable: "Auditoría del modelo de negocio + Portafolio y pricing ordenados.",
        summary: "Se lee dónde está el negocio hoy, cuál es el cuello de botella real y dónde está la oportunidad mayor. Se construyen los avatares, se ordena el portafolio y se definen precios.",
        bullets: [
          "Análisis del cuello de botella comercial actual",
          "Construcción y validación de avatares de cliente de alto valor",
          "Reordenamiento del portafolio y corrección de política de precios"
        ]
      },
      {
        number: "02",
        name: "Estrategia AI-First",
        subtitle: "Frente 01: Integrar la IA como ventaja competitiva",
        exercisesCount: "3 ejercicios",
        realDeliverable: "Estrategia AI-First Priorizada.",
        summary: "Se define el enfoque AI-First del negocio: dónde se aplica la IA, con qué criterio y con qué prioridad. No es una capa cosmética, sino una ventaja competitiva real.",
        bullets: [
          "Mapa de procesos del negocio: qué automatizar, qué asistir y qué dejar 100% humano",
          "Matriz de impacto vs. esfuerzo en la adopción de herramientas de IA",
          "Priorización de la arquitectura técnica digital"
        ]
      },
      {
        number: "03",
        name: "Estrategia de marketing y ventas con IA",
        subtitle: "Frente 02: Adquisición con tracción medible",
        exercisesCount: "9 ejercicios",
        realDeliverable: "Growth Marketing Plan + Business Marketing Plan aterrizado + Campaña diseñada.",
        summary: "Se diseña el plan de adquisición con benchmark real de industria (ROAS de 3 a 5 escalando). Se aterriza el Business Marketing Plan con campañas claras.",
        bullets: [
          "Diseño del funnel de adquisición de prospectos asistido por IA",
          "Estructuración de la campaña de captación con mensajes y ángulos",
          "Métricas clave y benchmark de conversión para seguimiento"
        ]
      },
      {
        number: "04",
        name: "Ventas & Comercial",
        subtitle: "Frente 03: Recorrido comercial y maximización del ticket",
        exercisesCount: "7 ejercicios",
        realDeliverable: "Estructura comercial y recorrido del cliente definidos.",
        summary: "Con el portafolio y pricing definidos, aquí se diseña el recorrido comercial completo: desde el lead magnet hasta la maximización del ticket medio.",
        bullets: [
          "Mapa paso a paso del viaje del cliente (customer journey)",
          "Estrategia de ascensión de clientes desde ofertas iniciales a High Ticket",
          "Guión consultivo para calificación y cierre de prospectos"
        ]
      },
      {
        number: "05",
        name: "Visión y Liderazgo",
        subtitle: "Frente 06: Alinear visión, prioridades y liderazgo del fundador",
        exercisesCount: "3 ejercicios",
        realDeliverable: "Visión a 10 años + Tablero de KPIs y North Star Metric.",
        summary: "Se alinea la visión a 10 años con las decisiones del día a día. El negocio y su líder quedan apuntando al mismo lugar con indicadores claros.",
        bullets: [
          "Definición de la North Star Metric del negocio",
          "Tablero de control de KPIs prioritarios para evitar la dispersión",
          "Plan de gobierno del tiempo del fundador para proteger su foco"
        ]
      },
      {
        number: "06",
        name: "Productización y los 3 Agentes de IA",
        subtitle: "Frentes 04 y 05: Productizar la entrega y automatizarla con IA",
        exercisesCount: "3 ejercicios",
        realDeliverable: "Servicio Productizado Completo + Los 3 Agentes de IA metodológicos operativos.",
        summary: "Primero se diseña el servicio productizado completo: nombre, promesa, oferta, objeciones, pricing y pitch. Después se configuran los 3 agentes de IA metodológicos para operar o delegar con autonomía.",
        bullets: [
          "Ficha maestra del servicio productizado con alcance y precio",
          "Agente de IA 1: Calificador de prospectos y diagnóstico inicial",
          "Agente de IA 2: Generador de borradores y propuestas comerciales",
          "Agente de IA 3: Asistente de soporte y entrega de contenidos al cliente"
        ]
      },
      {
        number: "07",
        name: "Plan 30-60-90",
        subtitle: "Después de la jornada: cristalizar todo en la guía de crecimiento",
        exercisesCount: "2 ejercicios",
        realDeliverable: "Plan de Acción 30-60-90 + Documento Master del Negocio.",
        summary: "El entregable principal, construido al final porque necesita todo lo anterior: hallazgos, plan de marketing, estrategia de contenidos, plan de ventas y cronograma.",
        bullets: [
          "Mes 1 (Días 1–30): Ajuste de oferta, validación y lanzamiento de campaña",
          "Mes 2 (Días 31–60): Optimización de captación y primeros clientes productizados",
          "Mes 3 (Días 61–90): Consolidación de sistemas, métricas y delegación con IA"
        ]
      },
      {
        number: "08",
        name: "Cierre y Offboarding",
        subtitle: "Entrega formal, ecosistema, prueba de resultado y acompañamiento",
        exercisesCount: "3 ejercicios",
        realDeliverable: "Plan de Offboarding + Grabación íntegra de 7 horas + Repositorio en Notion con entregables.",
        summary: "Cierre profesional: se entrega el documento maestro, la grabación completa de 7 horas, los 3 agentes de IA configurados y la prueba de resultado.",
        bullets: [
          "Grabación en video de alta definición de las 7 horas de la jornada",
          "Espacio de trabajo en Notion con todos los tableros y documentos aprobados",
          "Prueba de resultado y protocolos para resolver dudas post-jornada"
        ]
      }
    ],
    deliverablesTangibles: [
      "Briefing estratégico previo a la jornada",
      "Auditoría del modelo de negocio + Portafolio y pricing ordenados",
      "Estrategia AI-First del negocio priorizada",
      "Growth Marketing Plan + Business Marketing Plan aterrizado",
      "Estructura comercial y recorrido del cliente definidos",
      "Visión a 10 años + Tablero de KPIs y North Star Metric",
      "Servicio productizado completo + Los 3 Agentes de IA metodológicos operativos",
      "Plan de Acción 30-60-90 Días + Documento Master",
      "Grabación íntegra de 7 horas de la jornada intensiva",
      "Portal en Notion (100% personalizado) con todos los acuerdos y accesos permanentes"
    ],
    notionWorkspace: [
      "Tablero ejecutivo de la jornada con decisiones tomadas y mapa de arquitectura (100% personalizado)",
      "Plan de Acción 30-60-90 días detallado por semanas y entregables",
      "Grabación íntegra de la sesión intensiva (7 horas) para repaso permanente",
      "Protocolos de seguimiento y puntos de control a 30, 60 y 90 días"
    ],
    aiPlatform: [
      "3 mini agentes y herramientas de IA metodológicas configuradas durante la jornada",
      "Prompts estratégicos para prospección, calificación y supervisión de tareas delegadas a tu equipo",
      "Sinergia directa: nutres las herramientas con los insumos estructurados de tu Notion"
    ],
    scopeLimits: {
      included: [
        "Auditoría previa exhaustiva del negocio con Briefing estructurado",
        "Jornada intensiva 1 a 1 de 7 horas (10:00 a. m. a 5:00 p. m. Online o Presencial)",
        "Desarrollo completo de los 6 frentes estratégicos durante el encuentro",
        "Configuración de los 3 Agentes de IA y entrega del Plan 30-60-90",
        "Grabación íntegra en video y portal en Notion con acceso permanente"
      ],
      notIncluded: [
        "Ejecución de las tareas tácticas del plan 30-60-90 en nombre del cliente",
        "Desarrollo de software a medida o programación informática desde cero",
        "Gastos de desplazamiento o alojamiento si la jornada se realiza presencial fuera de sede",
        "Gestión continua diaria de campañas publicitarias"
      ]
    },
    faqs: [
      {
        question: "¿Por qué hacer una jornada de un día en vez de meses de consultoría?",
        answer: "Porque muchos profesionales senior ya tienen experiencia y clientes, pero están bloqueados por exceso de dispersión o indecisión tecnológica. Una jornada intensiva de 7 horas permite tomar decisiones definitivas, diseñar la oferta, configurar los agentes de IA y salir con una hoja de ruta 30-60-90 sin dilatar el proceso."
      },
      {
        question: "¿Qué insumos debo tener listos antes del Digital Business Day?",
        answer: "Se te envía con anticipación el Briefing previo estructurado. Con tus respuestas sobre tu modelo actual, ofertas y clientes, Patricia llega a la jornada con el diagnóstico preliminar listo para aprovechar las 7 horas en decisiones y construcción."
      }
    ]
  },

  // ==========================================
  // PILAR 5: ECOSISTEMA DIGITAL LLAVE EN MANO
  // ==========================================
  {
    id: "pilar-5",
    number: "05",
    commercialName: "Ecosistema Digital Llave en Mano",
    subname: "Presencia digital, captación y gestión comercial en un solo sistema",
    referenceService: "Ecosistema Digital Llave en Mano",
    shortNavName: "Ecosistema Digital",
    tagline: "Página web de marca personal, embudo de venta, CRM y automatizaciones sincronizadas en GoHighLevel.",
    targetProfile: "Profesional o negocio que necesita un ecosistema de ventas configurado y listo para operar sin asumir la curva técnica ni el desgaste de conectar herramientas dispersas.",
    priceTestimonials: "USD 2.500",
    priceRange: "$2,500 – $4,500 USD por implementación",
    duration: "3 semanas estimadas a partir de la recepción formal de insumos",
    modality: "Modalidad de implementación técnica «Lo hago por ti»",
    modalityBadge: "LO HAGO POR TI",
    modalityNote: "Implementación técnica prediseñada llave en mano que se adapta a la marca, oferta y necesidades del cliente sobre GoHighLevel (GHL). Salvedad: no es un desarrollo desde cero ni diseño a medida sin límites.",
    techStack: "GoHighLevel (GHL)",
    objective: "Implementar un ecosistema digital prediseñado y adaptado al negocio del cliente, conectando su presencia digital, la captación de prospectos, las comunicaciones automatizadas y la gestión comercial en una infraestructura unificada.",
    needSolved: "El negocio tiene herramientas desconectadas, procesos comerciales manuales, una presencia digital poco estructurada o carece de un sistema que permita organizar contactos y dar seguimiento a las oportunidades comerciales.",
    transformation: {
      before: "Herramientas desconectadas, procesos de venta manuales, fuga de prospectos y frustración por la complejidad tecnológica.",
      after: "Un ecosistema comercial integrado sobre GoHighLevel listo para operar: página web de marca personal, embudo, CRM y automatizaciones sincronizadas con capacitación técnica para tu autonomía."
    },
    keyComponents: [
      "Página Web de Marca Personal adaptada a tu propuesta",
      "Embudo de Venta con formulario y confirmación conectados",
      "Automatización Inicial de secuencias de seguimiento por correo",
      "Configuración de CRM en GoHighLevel con pipeline de ventas",
      "Sesión de capacitación técnica y transferencia para autonomía operativa"
    ],
    phases: [
      {
        number: "01",
        name: "Página web de marca personal",
        subtitle: "Estructura prediseñada y adaptada a tu identidad",
        exercisesCount: "Semana 1",
        isInternalTool: false,
        realDeliverable: "Página web de marca personal instalada y configurada con textos, fotos y criterios de SEO/AEO.",
        summary: "Desarrollo de una página web basada en una estructura prediseñada y adaptada a la identidad y propuesta del cliente.",
        bullets: [
          "Presentación profesional y trayectoria del experto",
          "Propuesta de valor y desglose claro de servicios",
          "Llamados a la acción (CTA) orientados a captación de prospectos",
          "Elementos de identidad visual, tipografías y contrastes aprobados",
          "Textos revisados y criterios básicos de SEO y posicionamiento para IA (AEO)"
        ]
      },
      {
        number: "02",
        name: "Embudo de venta conectado",
        subtitle: "Captación y conversión estructurada",
        exercisesCount: "Semana 2",
        isInternalTool: false,
        realDeliverable: "Embudo de Venta operativo con páginas de registro/oferta, formulario y confirmación.",
        summary: "Configuración de un embudo prediseñado y adaptado a la oferta del cliente para captar prospectos cualificados.",
        bullets: [
          "Página de registro u oferta principal con copy persuasivo",
          "Formulario integrado de calificación previa del prospecto",
          "Página de agradecimiento y confirmación de cita/solicitud conectada"
        ]
      },
      {
        number: "03",
        name: "Automatización de comunicaciones",
        subtitle: "Secuencias activas de seguimiento",
        exercisesCount: "Semana 2",
        isInternalTool: false,
        realDeliverable: "Secuencias de automatización configuradas (bienvenida, confirmación y recordatorios).",
        summary: "Configuración de una automatización inicial para conectar los pasos del proceso de captación y comunicación sin intervención manual.",
        bullets: [
          "Correo automático de bienvenida y entrega de recurso/información",
          "Secuencia de recordatorio y confirmación de reuniones agendadas",
          "Notificaciones internas inmediatas al consultor cuando entra un nuevo lead"
        ]
      },
      {
        number: "04",
        name: "Configuración de CRM en GoHighLevel",
        subtitle: "Gestión comercial y pipeline de oportunidades",
        exercisesCount: "Semana 3",
        isInternalTool: false,
        realDeliverable: "CRM en GoHighLevel configurado con etapas de pipeline y base de datos.",
        summary: "Configuración inicial del sistema de gestión de contactos y oportunidades comerciales en GHL para evitar la pérdida de prospectos.",
        bullets: [
          "Pipeline comercial con etapas visuales de venta (Nuevo prospecto, Calificado, Cita agendada, Propuesta, Cerrado)",
          "Etiquetado automático de contactos según su comportamiento",
          "Centralización de conversaciones e historial de cada cliente"
        ]
      },
      {
        number: "05",
        name: "Capacitación técnica y transferencia",
        subtitle: "Capacidad instalada y autonomía operativa",
        exercisesCount: "Semana 3",
        isInternalTool: false,
        realDeliverable: "Sesión de capacitación en vivo grabada + Tutoriales de uso de herramientas básicas en GHL.",
        summary: "Capacitación para el uso de las herramientas básicas configuradas dentro del ecosistema para que el cliente gobierne su plataforma sin depender de agencias.",
        bullets: [
          "Sesión individual de capacitación técnica en vivo paso a paso",
          "Grabación en video de la sesión para repaso permanente",
          "Manuales operativos en video y texto para gestionar contactos y embudos"
        ]
      }
    ],
    deliverablesTangibles: [
      "Una Página Web de Marca Personal adaptada e instalada",
      "Un Embudo de Venta conectado (páginas + formulario + confirmación)",
      "Una Automatización inicial de correos de seguimiento",
      "Una Configuración de CRM en GoHighLevel con pipeline de ventas",
      "Sesión de Capacitación técnica en el uso de herramientas básicas de GHL",
      "Espacio de entrega en Notion con manuales, accesos y tutoriales grabados"
    ],
    notionWorkspace: [
      "Centro de entrega del ecosistema digital con credenciales seguras (100% personalizado)",
      "Manuales operativos y tutoriales en video para la gestión diaria del CRM y embudos",
      "Checklist de lanzamiento y pruebas comerciales del ecosistema",
      "Guía de protocolo para resolución de dudas técnicas"
    ],
    aiPlatform: [
      "Integración de automatizaciones comerciales con asistentes de respuesta rápida para tu equipo",
      "Plantillas de correos de seguimiento listas para supervisar o delegar con criterio",
      "Sinergia directa: nutres las comunicaciones con los datos de tu Notion"
    ],
    scopeLimits: {
      included: [
        "Desarrollo de 1 página web de marca personal basada en estructura prediseñada y adaptada",
        "Configuración de 1 embudo de venta (páginas y conexiones correspondientes)",
        "Configuración de 1 automatización inicial de comunicaciones",
        "Configuración inicial de CRM en GoHighLevel",
        "Capacitación para el uso de herramientas básicas en GHL"
      ],
      notIncluded: [
        "Desarrollo de software a medida ni programación personalizada desde cero",
        "Integraciones externas complejas no contempladas en el alcance básico",
        "Páginas web adicionales o embudos adicionales a los estipulados",
        "Automatizaciones complejas adicionales",
        "Administración permanente cotidiana del CRM ni seguimiento comercial diario",
        "Gestión publicitaria diaria ni costes de licencias, dominios o servicios externos",
        "Garantía de ventas (el ecosistema es una infraestructura comercial lista para operar)"
      ]
    },
    faqs: [
      {
        question: "¿Cómo accedo a la plataforma GoHighLevel (GHL)?",
        answer: "Para la implementación debes disponer de acceso a GoHighLevel mediante cuenta propia, licencia o subcuenta. Si no cuentas con una, Patricia te ofrece como alternativa la suscripción a través de Universidad Online con su enlace de afiliación, lo que te permite acceder a las herramientas bajo las condiciones de dicha plataforma."
      },
      {
        question: "¿El costo de la licencia de GoHighLevel (GHL) está incluido en la implementación?",
        answer: "No. La inversión del servicio cubre la implementación técnica completa, diseño adaptado, automatizaciones y capacitación por parte de Patricia. La suscripción de software (GoHighLevel o Universidad Online) es un costo independiente de la plataforma tecnológica contratado directamente por el cliente."
      },
      {
        question: "¿Qué significa que sea 'llave en mano prediseñado y adaptado'?",
        answer: "Significa que utilizamos una arquitectura técnica probada y optimizada para la conversión, la cual personalizamos con tus textos, identidad visual, servicios y embudo. Esto garantiza rapidez y estabilidad sin los costes prohibitivos ni los retrasos de programar una web desde cero."
      }
    ]
  }
];

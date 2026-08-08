// ─────────────────────────────────────────────────────────────
//  CATÁLOGO DE SERVICIOS — fuente única de las páginas de servicio.
//  Precios = honorarios técnicos orientativos (sin tasas ni IVA).
//  Añadir/editar un servicio aquí crea/actualiza su página automáticamente.
// ─────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string; // título de página / H1
  metaTitle: string; // <title> optimizado para SEO
  short: string; // descripción corta (tarjetas)
  price: string; // rango orientativo
  image: string; // foto en /public, p.ej. '/industrial-nave.jpg'
  category: 'licencias' | 'agro' | 'agroalimentaria';
  keywords: string[];
  intro: string; // párrafo de apertura
  forWho: string; // a quién va dirigido
  includes: string[]; // qué incluye
  faq: Faq[];
};

export const CATEGORIES: Record<Service['category'], { label: string; desc: string }> = {
  licencias: {
    label: 'Licencias y autorizaciones ambientales',
    desc: 'Trámites para abrir y legalizar tu actividad: de la comunicación de actividad inocua a la licencia ambiental.',
  },
  agro: {
    label: 'Proyectos agrícolas y ganaderos',
    desc: 'Naves y explotaciones en suelo rústico: proyectos técnicos, memoria agronómica y legalización.',
  },
  agroalimentaria: {
    label: 'Industria agroalimentaria',
    desc: 'Obradores, plantas de procesado y explotaciones con proyecto, licencias y registro sanitario.',
  },
};

export const services: Service[] = [
  // ── LICENCIAS Y AUTORIZACIONES AMBIENTALES ──────────────────
  {
    slug: 'comunicacion-actividad-inocua',
    title: 'Comunicación de actividad inocua',
    metaTitle: 'Comunicación de actividad inocua en la Comunidad Valenciana',
    short: 'Aviso al ayuntamiento para abrir un negocio sin impacto ambiental relevante: oficinas, tiendas y pequeños almacenes.',
    price: '500–700 €',
    image: '/project-building.jpg',
    category: 'licencias',
    keywords: ['comunicación actividad inocua valencia', 'licencia actividad inocua comunidad valenciana', 'abrir oficina valencia'],
    intro:
      'La comunicación de actividad inocua es el trámite más sencillo para poner en marcha un negocio de bajo impacto en la Comunidad Valenciana. Sirve para oficinas, comercios, despachos y pequeños almacenes sin incidencia ambiental relevante.',
    forWho: 'Oficinas, tiendas, despachos profesionales, pequeños almacenes y comercios sin ruido, emisiones ni residuos significativos.',
    includes: [
      'Estudio previo de la actividad y del local',
      'Redacción y firma técnica de la documentación',
      'Certificado técnico de cumplimiento',
      'Presentación ante el ayuntamiento correspondiente',
    ],
    faq: [
      { q: '¿Puedo abrir nada más presentarla?', a: 'En la mayoría de municipios sí: la comunicación permite iniciar la actividad desde su presentación, sujeta a comprobación posterior del ayuntamiento.' },
      { q: '¿Qué diferencia hay con la declaración responsable?', a: 'La inocua es para actividades sin impacto ambiental; la declaración responsable ambiental se usa cuando hay incidencia moderada (ruido, emisiones, residuos).' },
      { q: '¿El precio incluye las tasas municipales?', a: 'No. El rango indicado son honorarios técnicos. Las tasas del ayuntamiento y el IVA van aparte.' },
    ],
  },
  {
    slug: 'declaracion-responsable-ambiental',
    title: 'Declaración responsable ambiental',
    metaTitle: 'Declaración responsable ambiental de actividad en la C. Valenciana',
    short: 'Para actividades con incidencia ambiental moderada. Declaras que cumples la normativa y puedes empezar a funcionar.',
    price: '800–1.100 €',
    image: '/team-meeting.jpg',
    category: 'licencias',
    keywords: ['declaración responsable ambiental valencia', 'declaración responsable actividad comunidad valenciana'],
    intro:
      'La declaración responsable ambiental permite poner en marcha actividades con incidencia ambiental moderada sin esperar a una licencia previa, bajo la responsabilidad técnica de que se cumple toda la normativa aplicable.',
    forWho: 'Actividades con algo más de impacto que las inocuas, pero sin ser industria pesada: pequeños talleres, hostelería, obradores en núcleo urbano.',
    includes: [
      'Análisis de encaje en el instrumento de intervención ambiental',
      'Proyecto técnico y memoria ambiental',
      'Justificación de ruido, emisiones y residuos',
      'Presentación y seguimiento del trámite',
    ],
    faq: [
      { q: '¿Necesito licencia ambiental o me vale la declaración responsable?', a: 'Depende de la actividad y su impacto. Hacemos un estudio previo para determinar el instrumento correcto y evitar que te la rechacen.' },
      { q: '¿Cuánto tarda?', a: 'La actividad puede iniciarse desde la presentación, pero conviene tener toda la documentación técnica revisada antes para evitar requerimientos.' },
    ],
  },
  {
    slug: 'licencia-ambiental',
    title: 'Licencia ambiental',
    metaTitle: 'Licencia ambiental en la Comunidad Valenciana | Talleres e industria',
    short: 'Autorización completa para actividades con impacto claro (ruido, emisiones, residuos): talleres, industria ligera y granjas medianas.',
    price: '1.200–2.200 €',
    image: '/industrial-nave.jpg',
    category: 'licencias',
    keywords: ['licencia ambiental comunidad valenciana', 'licencia ambiental valencia', 'licencia actividad taller valencia'],
    intro:
      'La licencia ambiental es la autorización necesaria para actividades con impacto ambiental claro. Es el trámite habitual para talleres, industria ligera y explotaciones agroganaderas medianas en la Comunidad Valenciana.',
    forWho: 'Talleres, pequeñas industrias, explotaciones agroganaderas y actividades con ruido, emisiones o residuos relevantes.',
    includes: [
      'Proyecto de actividad completo',
      'Estudio de impacto ambiental cuando proceda',
      'Justificación técnica frente a la normativa sectorial',
      'Tramitación integral hasta la resolución',
    ],
    faq: [
      { q: '¿Qué actividades necesitan licencia ambiental?', a: 'Las que generan impacto ambiental claro: ruido, emisiones, vertidos o residuos. Analizamos tu caso para confirmar el instrumento exacto.' },
      { q: '¿Incluye la puesta en marcha?', a: 'Podemos encargarnos también del acta de comprobación y la puesta en funcionamiento tras la concesión.' },
    ],
  },
  {
    slug: 'autorizacion-ambiental-integrada',
    title: 'Autorización Ambiental Integrada (AAI)',
    metaTitle: 'Autorización Ambiental Integrada (AAI) en la Comunidad Valenciana',
    short: 'La "mega-licencia" ambiental para grandes industrias: integra todas las autorizaciones ambientales en una.',
    price: 'Honorarios a medida',
    image: '/project-bridge.jpg',
    category: 'licencias',
    keywords: ['autorización ambiental integrada valencia', 'AAI comunidad valenciana', 'ippc valencia'],
    intro:
      'La Autorización Ambiental Integrada (AAI) es el instrumento para grandes instalaciones industriales. Integra en un único procedimiento todas las autorizaciones ambientales: aire, agua, residuos y suelo.',
    forWho: 'Plantas industriales grandes (química, alimentación a gran escala, gestión de residuos, etc.) sujetas a control integrado de la contaminación.',
    includes: [
      'Proyecto básico y documentación técnica IPPC',
      'Estudio de impacto ambiental',
      'Coordinación con la administración autonómica',
      'Seguimiento hasta la resolución y condiciones de la AAI',
    ],
    faq: [
      { q: '¿Por qué el precio es a medida?', a: 'La AAI depende del tamaño y complejidad de la instalación. Tras un estudio inicial te damos un presupuesto cerrado.' },
      { q: '¿Cuánto dura el procedimiento?', a: 'Es el trámite ambiental más largo. Planificamos con margen y te acompañamos en todas las fases.' },
    ],
  },

  // ── PROYECTOS AGRÍCOLAS Y GANADEROS (SUELO RÚSTICO) ─────────
  {
    slug: 'memoria-agronomica',
    title: 'Memoria agronómica',
    metaTitle: 'Memoria agronómica para suelo rústico en la Comunidad Valenciana',
    short: 'Informe técnico que justifica por qué necesitas construir en suelo rústico: naves agrícolas, balsas, granjas y casetas de aperos.',
    price: '600–1.500 €',
    image: '/project-agriculture.jpg',
    category: 'agro',
    keywords: ['memoria agronómica valencia', 'memoria agronómica suelo rústico comunidad valenciana', 'construir suelo rústico valencia'],
    intro:
      'La memoria agronómica es el documento técnico que justifica la necesidad y vinculación agraria de una construcción en suelo rústico. Es imprescindible para obtener licencia en naves agrícolas, balsas de riego, granjas y casetas de aperos.',
    forWho: 'Agricultores y ganaderos que necesitan construir o legalizar en suelo no urbanizable de la Comunidad Valenciana.',
    includes: [
      'Justificación de vinculación y necesidad agraria',
      'Descripción de la explotación y del uso previsto',
      'Encaje en la normativa urbanística y de suelo rústico',
      'Documentación para acompañar al proyecto o licencia',
    ],
    faq: [
      { q: '¿La memoria agronómica sustituye al proyecto?', a: 'No. Justifica la necesidad agraria; suele acompañar a un proyecto técnico y a la licencia correspondiente.' },
      { q: '¿Sirve para legalizar algo ya construido?', a: 'En muchos casos sí, siempre que la construcción sea legalizable. Estudiamos la situación antes de comprometernos.' },
    ],
  },
  {
    slug: 'proyecto-nave-agricola',
    title: 'Proyecto de nave agrícola',
    metaTitle: 'Proyecto de nave agrícola en la Comunidad Valenciana | Ingeniería',
    short: 'Proyecto técnico para almacén de aperos, maquinaria o grano. Base para pedir la licencia de obras.',
    price: '2.000–4.000 €',
    image: '/project-construction.jpg',
    category: 'agro',
    keywords: ['proyecto nave agrícola valencia', 'proyecto nave agrícola comunidad valenciana', 'nave almacén agrícola valencia'],
    intro:
      'Redactamos el proyecto técnico de tu nave agrícola: almacén de aperos, maquinaria o grano. El proyecto define la solución constructiva y es la base para solicitar la licencia de obras.',
    forWho: 'Explotaciones agrícolas que necesitan almacenar maquinaria, aperos o cosecha en suelo rústico.',
    includes: [
      'Diseño y cálculo estructural de la nave',
      'Cumplimiento de normativa urbanística y de suelo rústico',
      'Documentación para licencia de obras',
      'Coordinación con memoria agronómica si es necesaria',
    ],
    faq: [
      { q: '¿El precio depende del tamaño?', a: 'Sí. El rango es orientativo; para naves grandes o con instalaciones especiales trabajamos con presupuesto cerrado según el PEM.' },
      { q: '¿Incluye la memoria agronómica?', a: 'Se puede incluir como paquete. En suelo rústico casi siempre hace falta, así que lo valoramos juntos.' },
    ],
  },
  {
    slug: 'proyecto-nave-agricola-pequena',
    title: 'Proyecto de nave agrícola pequeña o caseta de aperos',
    metaTitle: 'Proyecto de caseta de aperos o nave agrícola pequeña | C. Valenciana',
    short: 'Para casetas de aperos o naves muy sencillas. Solución técnica ajustada y económica.',
    price: 'Desde 1.200 €',
    image: '/team-work.jpg',
    category: 'agro',
    keywords: ['proyecto caseta aperos valencia', 'caseta aperos suelo rústico comunidad valenciana', 'legalizar caseta aperos valencia'],
    intro:
      'Para casetas de aperos o naves agrícolas muy sencillas ofrecemos un proyecto técnico ajustado, con la documentación justa para obtener la licencia sin sobrecostes.',
    forWho: 'Pequeñas explotaciones y particulares con parcela agrícola que necesitan una caseta o nave básica.',
    includes: [
      'Proyecto técnico simplificado',
      'Justificación de uso agrícola',
      'Documentación para el ayuntamiento',
      'Asesoramiento sobre superficies y usos permitidos',
    ],
    faq: [
      { q: '¿Puedo poner una caseta de aperos en mi parcela?', a: 'Depende del municipio, la superficie de la parcela y el uso. Lo comprobamos antes de redactar nada.' },
      { q: '¿Sirve para legalizar una caseta existente?', a: 'Si es legalizable, sí. Revisamos la situación urbanística primero.' },
    ],
  },
  {
    slug: 'proyecto-nave-ganadera',
    title: 'Proyecto de nave ganadera',
    metaTitle: 'Proyecto de nave ganadera en la Comunidad Valenciana | Ingeniería',
    short: 'Naves de bovino, porcino o avícola con proyecto técnico, licencias y legalización completa.',
    price: '4–8% del PEM',
    image: '/industrial-nave.jpg',
    category: 'agro',
    keywords: ['proyecto nave ganadera valencia', 'proyecto granja comunidad valenciana', 'legalización explotación ganadera valencia'],
    intro:
      'Redactamos el proyecto de tu nave ganadera (bovino, porcino, avícola u otras) con el cálculo estructural, las instalaciones y toda la tramitación ambiental y sanitaria necesaria.',
    forWho: 'Explotaciones ganaderas que van a construir o ampliar naves para el manejo de animales.',
    includes: [
      'Proyecto técnico e instalaciones',
      'Tramitación ambiental (licencia ambiental o la que proceda)',
      'Gestión de estiércoles y bienestar animal',
      'Documentación para registro de explotación',
    ],
    faq: [
      { q: '¿Por qué se cobra como % del PEM?', a: 'En proyectos ganaderos el trabajo escala con el presupuesto de ejecución material (PEM). Por ejemplo, una nave de 500 m² con coste 90.000–275.000 € supone honorarios aprox. de 3.600–22.000 €.' },
      { q: '¿Incluye la licencia ambiental?', a: 'Sí, la tramitación ambiental forma parte del encargo. Lo definimos en el presupuesto según la explotación.' },
    ],
  },

  // ── INDUSTRIA AGROALIMENTARIA ───────────────────────────────
  {
    slug: 'proyecto-actividad-agroalimentaria',
    title: 'Proyecto de actividad agroalimentaria en local urbano',
    metaTitle: 'Proyecto de actividad agroalimentaria (obrador) | C. Valenciana',
    short: 'Obradores, carnicerías y salas de despiece en núcleo urbano. Proyecto de actividad y licencia.',
    price: '1.200–2.200 €',
    image: '/project-agriculture.jpg',
    category: 'agroalimentaria',
    keywords: ['proyecto actividad obrador valencia', 'licencia obrador comunidad valenciana', 'proyecto carnicería valencia'],
    intro:
      'Redactamos el proyecto de actividad para negocios agroalimentarios en local urbano: obradores, carnicerías, salas de despiece y similares, con la licencia y el registro que correspondan.',
    forWho: 'Obradores, carnicerías, panaderías, salas de despiece y pequeños negocios de alimentación en núcleo urbano.',
    includes: [
      'Proyecto de actividad y memoria técnica',
      'Cumplimiento higiénico-sanitario del local',
      'Tramitación de licencia o declaración responsable',
      'Orientación sobre registro sanitario',
    ],
    faq: [
      { q: '¿Necesito registro sanitario además de la licencia?', a: 'Para manipular alimentos normalmente sí. Te orientamos sobre el registro que aplica a tu actividad.' },
      { q: '¿Vale para un local que ya existía como otra cosa?', a: 'Sí, es un caso habitual (cambio de actividad). Revisamos qué obras y adaptaciones exige la normativa.' },
    ],
  },
  {
    slug: 'nave-agroalimentaria-frio',
    title: 'Nave agroalimentaria con frío y legalización',
    metaTitle: 'Proyecto de nave agroalimentaria con cámaras de frío | C. Valenciana',
    short: 'Nave de manipulado con cámaras frigoríficas: proyecto, instalaciones, licencias y legalización completa.',
    price: '5.000–15.000 €',
    image: '/industrial-nave.jpg',
    category: 'agroalimentaria',
    keywords: ['nave agroalimentaria valencia', 'proyecto cámara frigorífica comunidad valenciana', 'nave manipulado alimentos valencia'],
    intro:
      'Proyecto integral para naves de manipulado y procesado de alimentos con cámaras frigoríficas: obra, instalaciones de frío, licencias ambientales y legalización, normalmente en suelo rústico.',
    forWho: 'Cooperativas y empresas agroalimentarias que necesitan una nave de manipulado, confección o procesado con cadena de frío.',
    includes: [
      'Proyecto de obra e instalaciones (incluido frío industrial)',
      'Tramitación ambiental y de actividad',
      'Cumplimiento higiénico-sanitario y APPCC',
      'Documentación para registro sanitario',
    ],
    faq: [
      { q: '¿El precio incluye las instalaciones de frío?', a: 'El proyecto sí las define y calcula. El coste de ejecución de las instalaciones es aparte, dentro del presupuesto de obra.' },
      { q: '¿Podéis llevar todo el conjunto (obra + licencias + sanitario)?', a: 'Sí, trabajamos el paquete completo para que tengas un único interlocutor.' },
    ],
  },
  {
    slug: 'explotacion-avicola',
    title: 'Explotación avícola (nave, centro y registro)',
    metaTitle: 'Proyecto de explotación avícola en la Comunidad Valenciana',
    short: 'Nave de gallinas + centro de clasificación + documentación de registro sanitario, como conjunto.',
    price: '≈ 4.500 € el conjunto',
    image: '/project-agriculture.jpg',
    category: 'agroalimentaria',
    keywords: ['proyecto explotación avícola valencia', 'nave gallinas comunidad valenciana', 'registro sanitario avícola valencia'],
    intro:
      'Proyecto conjunto para explotaciones avícolas: nave de gallinas, centro de clasificación de huevos y la documentación necesaria para el registro sanitario, con toda la tramitación coordinada.',
    forWho: 'Explotaciones avícolas (huevo o carne) que van a montar o legalizar nave y centro asociado.',
    includes: [
      'Proyecto de la nave y del centro de clasificación',
      'Tramitación ambiental y de actividad',
      'Bienestar animal y bioseguridad',
      'Documentación de registro sanitario',
    ],
    faq: [
      { q: '¿El precio es cerrado?', a: 'El importe indicado es orientativo para el conjunto de una explotación tipo. Ajustamos según número de plazas e instalaciones.' },
      { q: '¿Incluye el registro de explotación?', a: 'Sí, preparamos la documentación para el registro y te acompañamos en el proceso.' },
    ],
  },
];

export const getServicesByCategory = (cat: Service['category']) =>
  services.filter((s) => s.category === cat);

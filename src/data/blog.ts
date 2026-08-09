// ─────────────────────────────────────────────────────────────
//  BLOG — contenido de descubrimiento (capa superior del embudo SEO).
//  A diferencia de /servicios (intención transaccional), estos artículos
//  responden preguntas de quien todavía no sabe qué trámite necesita.
//  Añadir un post aquí crea/actualiza su página automáticamente.
// ─────────────────────────────────────────────────────────────

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string; // H1
  metaTitle: string; // <title> optimizado para SEO
  description: string; // meta description / excerpt en el listado
  publishDate: string; // ISO 8601
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  relatedServices: string[]; // slugs de src/data/services.ts
};

export const posts: BlogPost[] = [
  {
    slug: 'comunicacion-actividad-inocua-o-declaracion-responsable-ambiental',
    title: 'Comunicación de actividad inocua o declaración responsable ambiental: ¿cuál necesitas?',
    metaTitle: '¿Comunicación de actividad inocua o declaración responsable ambiental?',
    description:
      'Son los dos trámites que más se confunden al abrir un negocio en la Comunidad Valenciana. Te explicamos la diferencia y cómo saber cuál te corresponde.',
    publishDate: '2026-08-08',
    keywords: [
      'comunicación actividad inocua o declaración responsable',
      'diferencia licencia actividad valencia',
      'qué trámite necesito para abrir un negocio valencia',
    ],
    intro:
      'Si vas a abrir un negocio en la Comunidad Valenciana, el primer obstáculo no suele ser el proyecto en sí, sino saber qué papel tienes que presentar en el ayuntamiento. Los dos trámites que más se confunden son la comunicación de actividad inocua y la declaración responsable ambiental. Se parecen porque los dos te dejan empezar a funcionar sin esperar una resolución previa, pero no son intercambiables: presentar el que no toca puede acabar en un requerimiento o en el cierre de la actividad.',
    sections: [
      {
        heading: '¿Qué es la comunicación de actividad inocua?',
        paragraphs: [
          'Es el trámite más sencillo. Sirve para actividades sin impacto ambiental relevante: oficinas, tiendas, despachos profesionales y pequeños almacenes sin ruido, emisiones ni residuos significativos.',
          'En la mayoría de municipios, presentarla te permite iniciar la actividad de inmediato, sujeta a comprobación posterior del ayuntamiento.',
        ],
      },
      {
        heading: '¿Qué es la declaración responsable ambiental?',
        paragraphs: [
          'Es un peldaño por encima: se usa para actividades con una incidencia ambiental moderada, como pequeños talleres, hostelería u obradores en núcleo urbano.',
          'Aquí declaras, bajo tu responsabilidad técnica, que cumples toda la normativa aplicable en ruido, emisiones y residuos. También permite empezar a funcionar desde la presentación, pero exige un proyecto técnico y una memoria ambiental que respalden esa declaración.',
        ],
      },
      {
        heading: 'La diferencia clave: el impacto de tu actividad',
        paragraphs: [
          'La pregunta que decide cuál te corresponde no es el tipo de negocio, sino su impacto real: ¿genera ruido, emisiones, vertidos o residuos por encima de lo mínimo? Si la respuesta es no, la comunicación de actividad inocua basta. Si hay algo de impacto, aunque sea moderado, necesitas declaración responsable ambiental.',
          'La confusión más habitual es presentar una comunicación de actividad inocua para un negocio que en realidad tiene incidencia ambiental (un obrador con horno, un taller con maquinaria). El ayuntamiento puede detectarlo en la comprobación posterior y exigir que se subsane, con el consiguiente parón de la actividad.',
        ],
      },
      {
        heading: 'Cómo lo resolvemos',
        paragraphs: [
          'Antes de redactar nada, estudiamos tu actividad y tu local para confirmar el instrumento correcto — evitar que te rechacen el trámite sale más barato que corregirlo después. Si tu caso tiene más incidencia de lo que parece a primera vista, también valoramos si necesitas licencia ambiental en lugar de cualquiera de estos dos trámites.',
        ],
      },
    ],
    relatedServices: ['comunicacion-actividad-inocua', 'declaracion-responsable-ambiental', 'licencia-ambiental'],
  },
  {
    slug: 'test-post-verificacion',
    title: 'Test de verificación',
    metaTitle: 'Test verificación',
    description:
      'Este es un test de verificación del script de generación de blog posts para Licenza Ingenieros.',
    publishDate: '2026-08-09',
    keywords: ['test'],
    intro:
      'Este es un post de prueba para verificar que el script funciona.',
    sections: [
      {
        heading: 'Sección de prueba',
        paragraphs: [
          'Párrafo de prueba con tildes y eñes.',
          'Segundo párrafo con apóstrofe y más texto.',
        ],
      },
    ],
    relatedServices: ['comunicacion-actividad-inocua'],
  },
  {
    slug: 'que-licencia-necesito-para-abrir-un-negocio-en-valencia',
    title: 'Guía Completa: ¿Qué Licencia Necesito para Abrir un Negocio en Valencia?',
    metaTitle: 'Licencia Negocio Valencia: Guía para Emprendedores',
    description:
      'Descubre las licencias y trámites necesarios para abrir tu negocio en la Comunidad Valenciana. Evita errores y agiliza tu apertura con nuestra guía experta.',
    publishDate: '2026-08-09',
    keywords: ['licencia negocio valencia', 'abrir negocio valencia', 'comunicacion actividad inocua valencia', 'declaracion responsable ambiental', 'licencia ambiental comunidad valenciana'],
    intro:
      'Abrir un negocio en la Comunidad Valenciana implica cumplir con una serie de requisitos legales y administrativos, siendo la obtención de la licencia de actividad uno de los pasos fundamentales. La clave está en determinar qué tipo de licencia se ajusta a las características específicas de tu actividad para evitar contratiempos. En esta guía, te desglosamos las opciones más comunes y te orientamos en el proceso.',
    sections: [
      {
        heading: 'Comunicación de Actividad Inocua: La Vía Rápida',
        paragraphs: [
          'Si tu negocio no genera molestias significativas, impacto ambiental ni riesgo para la salud o seguridad, es probable que solo necesites una Comunicación de Actividad Inocua. Este procedimiento, simplificado, es ideal para oficinas, pequeños comercios minoristas o servicios sin gran afluencia de público, y permite iniciar la actividad de forma casi inmediata una vez presentada la documentación técnica correspondiente en el Ayuntamiento de Valencia o de tu municipio.',
          'El principal beneficio de la comunicación de actividad inocua es su agilidad. No requiere una licencia previa, sino una mera declaración de que cumples con la normativa. Sin embargo, esto no exime de la necesidad de un proyecto técnico firmado por un ingeniero que certifique el cumplimiento de la legalidad, especialmente en cuanto a urbanismo, seguridad y accesibilidad. Un proyecto bien elaborado es crucial para evitar futuras inspecciones desfavorables.',
        ],
      },
      {
        heading: 'Declaración Responsable Ambiental: Para Actividades de Mayor Impacto',
        paragraphs: [
          'Cuando la actividad de tu negocio, aunque no sea extremadamente contaminante, sí pueda generar cierto impacto ambiental (ruido, residuos, consumo de agua), entrará dentro del régimen de Declaración Responsable Ambiental. Este trámite, regulado por la Ley 6/2014, de Prevención, Calidad y Control Ambiental de Actividades en la Comunidad Valenciana, exige una memoria técnica más exhaustiva que detalle las medidas correctoras y preventivas.',
          'A diferencia de la comunicación, la Declaración Responsable implica un control posterior por parte de la administración. Puedes iniciar la actividad tras presentarla, pero estás sujeto a verificaciones. Es fundamental que la memoria ambiental esté impecablemente redactada y que el negocio cumpla estrictamente con todas las condiciones declaradas para evitar sanciones. Este proceso puede llevar unas semanas, dependiendo de la complejidad y la gestión municipal.',
        ],
      },
      {
        heading: 'Licencia Ambiental: El Proceso Detallado',
        paragraphs: [
          'Para actividades con un impacto ambiental más significativo, como industrias, talleres de gran envergadura o ciertas actividades agroalimentarias, se requerirá una Licencia Ambiental. Este es el procedimiento más riguroso y complejo, con plazos más extensos que pueden oscilar entre los 6 meses y más de un año, ya que implica un estudio detallado de impactos, informes sectoriales y un proceso de información pública.',
          'La Ley de Prevención, Calidad y Control Ambiental de Actividades de la Comunidad Valenciana establece los supuestos que requieren esta licencia. El proyecto debe ser exhaustivo, abordando aspectos como la emisión de contaminantes, gestión de residuos, vertidos y afecciones al entorno. Es un proceso donde la intervención de una ingeniería especializada es indispensable para garantizar el éxito y la aprobación final.',
        ],
      },
      {
        heading: 'La Importancia de la Normativa Local y la Planificación',
        paragraphs: [
          'Independientemente del tipo de licencia, la normativa municipal en la Comunidad Valenciana juega un papel crucial. Cada ayuntamiento, ya sea el de Valencia, Castellón o Alicante, puede tener ordenanzas específicas que complementen la legislación autonómica. Aspectos como el uso del suelo, alturas máximas, retranqueos o condiciones de insonorización varían, y un buen estudio de viabilidad urbanística es el primer paso antes de cualquier inversión.',
          'Planificar con antelación y contar con el asesoramiento adecuado es clave. Un error en la elección del tipo de licencia o en la interpretación de la normativa puede traducirse en retrasos, costes adicionales e incluso la imposibilidad de abrir el negocio. En la Comunidad Valenciana, un enfoque preventivo es siempre la mejor estrategia para cualquier emprendedor.',
        ],
      },
      {
        heading: 'Cómo lo resolvemos',
        paragraphs: [
          'En Licenza Ingenieros comprendemos la complejidad de los trámites para abrir un negocio en la Comunidad Valenciana. Nuestro equipo de ingenieros especializados en licencias de actividad y proyectos técnicos te ofrece un servicio integral. Desde la evaluación inicial para determinar la licencia adecuada Comunicación de Actividad Inocua Declaración Responsable o Licencia Ambiental hasta la redacción del proyecto técnico y la gestión completa con el Ayuntamiento. Nos aseguramos de que tu negocio cumpla con toda la normativa vigente agilizando el proceso y permitiéndote enfocar en lo que realmente importa: tu actividad. Contáctanos para un asesoramiento personalizado y sin compromiso.',
        ],
      },
    ],
    relatedServices: ['comunicacion-actividad-inocua', 'declaracion-responsable-ambiental', 'licencia-ambiental'],
  },
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

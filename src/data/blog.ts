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
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

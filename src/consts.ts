// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN CENTRAL DE MARCA — Licenza Ingenieros
//  Cambiar aquí nombre, dominio, zona y (más adelante) contacto.
//  El dominio también está en astro.config.mjs (site).
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Licenza Ingenieros',
  legalName: 'Licenza Ingenieros S.L.',
  shortName: 'Licenza',
  url: 'https://javifer31.github.io/valencia-ingenieria-web', // GitHub Pages
  tagline: 'Ingeniería técnica para la Comunidad Valenciana',
  description:
    'Licenza Ingenieros: consultoría técnica especializada en licencias de actividad, proyectos ambientales, naves agrícolas y ganaderas, e industria agroalimentaria en Valencia, Alicante y Castellón.',
  locale: 'es-ES',
  lang: 'es',
} as const;

// Zona de servicio (SEO local). De momento toda la Comunidad Valenciana.
export const AREA = {
  region: 'Comunidad Valenciana',
  provinces: ['Valencia', 'Alicante', 'Castellón'],
  // Ciudades/comarcas para futuras landing locales (fase 2).
  cities: [
    'Valencia',
    'Alicante',
    'Castellón de la Plana',
    'Elche',
    'Torrent',
    'Gandía',
    'Sagunto',
    'Alzira',
    'Xàtiva',
    'Vila-real',
  ],
} as const;

// Contacto — PENDIENTE. Rellenar cuando lo tengáis.
// Al completar, se activan enlaces y schema LocalBusiness con dirección/teléfono.
export const CONTACT = {
  email: '', // p.ej. 'hola@valenciaingenieria.es'
  phone: '', // p.ej. '+34 600 000 000'
  phoneDisplay: '',
  address: '', // dirección física exacta (clave para Google local)
  city: '',
  postalCode: '',
  mapUrl: '',
} as const;

export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Sobre nosotros', href: '/sobre-nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;

export const hasContact = Boolean(CONTACT.email || CONTACT.phone);

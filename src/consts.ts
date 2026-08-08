// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN CENTRAL DE MARCA — Valencia Ingeniería
//  Cambiar aquí nombre, dominio, zona y (más adelante) contacto.
//  El dominio también está en astro.config.mjs (site).
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Valencia Ingeniería',
  legalName: 'Valencia Ingeniería',
  shortName: 'Valencia Ingeniería',
  url: 'https://www.valenciaingenieria.es', // provisional
  tagline: 'Ingeniería industrial y agroalimentaria en la Comunidad Valenciana',
  description:
    'Consultoría de ingeniería en la Comunidad Valenciana: licencias de actividad, licencias ambientales, proyectos de naves agrícolas y ganaderas, y legalización de industria agroalimentaria. Presupuesto sin compromiso.',
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
  { label: 'Sobre nosotros', href: '/sobre-nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;

export const hasContact = Boolean(CONTACT.email || CONTACT.phone);

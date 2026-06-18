/*
  ──────────────────────────────────────────────────────────────
  CONFIG CENTRAL DEL SITIO
  Editá este archivo para cambiar nombre, contacto, redes y catálogo.
  Los valores marcados con TODO son placeholders: reemplazar por los reales.
  ──────────────────────────────────────────────────────────────
*/

export const SITE = {
  name: "Tutti Rosca",
  shortName: "Tutti Rosca",
  legalName: "Tutti Rosca", // TODO: razón social exacta si difiere
  tagline: "Fabricación de agropartes y piezas metalúrgicas a medida",
  subtitle:
    "Calidad industrial desde Bombal, Santa Fe, para toda la región y países limítrofes.",
  description:
    "Tutti Rosca — metalúrgica en Bombal, Santa Fe. Fabricación de agropartes, gatos para maquinaria agrícola, varillas roscadas ACME y piezas metalúrgicas a medida. Envíos a todo el país y Mercosur.",
  url: "https://www.tuttirosca.com.ar", // TODO: confirmar dominio definitivo

  location: "Bombal, Santa Fe, Argentina",
  // TODO: dirección exacta del taller
  address: "Ruta 00 km 000, Bombal (2603), Santa Fe, Argentina",

  // Contacto — TODO: reemplazar por datos reales
  phoneDisplay: "+54 9 3464 00-0000",
  whatsapp: "5493464000000", // formato internacional sin "+" ni espacios
  whatsappMessage:
    "Hola, vi la web y quería consultar por un producto / presupuesto.",
  email: "ventas@tuttirosca.com.ar",

  hours: "Lun a Vie 8:00–17:30 · Sáb 8:00–12:00",

  // Mapa — TODO: pegar el "src" del iframe de Google Maps del taller
  mapsEmbed:
    "https://www.google.com/maps?q=Bombal,+Santa+Fe,+Argentina&output=embed",
  mapsLink: "https://www.google.com/maps?q=Bombal,+Santa+Fe,+Argentina",

  social: {
    instagram: "https://instagram.com/", // TODO
    facebook: "https://facebook.com/", // TODO
    linkedin: "https://linkedin.com/", // TODO
  },
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "A medida", href: "#a-medida" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

/* Empresas / social proof — TODO: confirmar y sumar logos reales en /public/logos */
export const CLIENTS = [
  "Empresa 1",
  "Empresa 2",
  "Empresa 3",
  "Empresa 4",
  "Empresa 5",  
  "Empresa 6",
  "Empresa 7",
  "Empresa 8",
  "Empresa 9",
  "Empresa 10",
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  highlights: string[];
  uses: string[];
  /* Tabla técnica: filas [especificación, valor] */
  specs: [string, string][];
  /*
    Imágenes — convención: /public/productos/<slug>/...
    `image`  = portada (card + apertura del detalle). Ej: "/productos/varilla-roscada-acme/cover.jpg"
    `gallery`= fotos extra para la galería del detalle.
    Si quedan vacías, se muestra un placeholder estilo plano.
  */
  image?: string;
  gallery?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "varilla-roscada-acme",
    name: "Varillas Roscadas ACME",
    category: "Roscas trapeciales de precisión",
    tagline:
      "Rosca ACME (trapecial) de alta resistencia para transmisión de movimiento y carga.",
    highlights: [
      "Rosca ACME mecanizada con tolerancias controladas",
      "Acero de alta resistencia, terminación pareja",
      "Largos y diámetros a pedido",
    ],
    uses: [
      "Compuertas de agua y riego",
      "Husillos y mecanismos de avance",
      "Prensas, gatos y elevadores",
      "Industria y maquinaria en general",
    ],
    specs: [
      ["Tipo de rosca", "ACME / trapecial"],
      ["Diámetros", '1/2" a 3" (otros a pedido)'],
      ["Material", "Acero SAE 1045 / a especificar"],
      ["Largo", "Estándar y a medida"],
      ["Tuerca compañera", "Disponible (bronce / acero)"],
      ["Terminación", "En bruto, fosfatizada o cincada"],
    ],
    image: "/productos/varilla-roscada-acme/D_NQ_NP_2X_802889-MLA82742968119_022025-F.webp",
    gallery: [
      "/productos/varilla-roscada-acme/D_NQ_NP_2X_993336-MLA108414408783_032026-F.webp",
    ],
  },
  {
    slug: "gatos-maquinaria-agricola",
    name: "Gatos para Maquinaria Agrícola",
    category: "Agropartes",
    tagline:
      "Gatos mecánicos robustos para sembradoras, tolvas y maquinaria de campo.",
    highlights: [
      "Diseñados para uso intensivo a la intemperie",
      "Husillo de rosca ACME de fabricación propia",
      "Repuestos y medidas compatibles a pedido",
    ],
    uses: [
      "Sembradoras y plantadoras",
      "Tolvas y acoplados",
      "Niveladores y plataformas",
      "Implementos agrícolas en general",
    ],
    specs: [
      ["Aplicación", "Sembradoras, tolvas, implementos"],
      ["Husillo", "Rosca ACME de fabricación propia"],
      ["Capacidad", "Según modelo / a especificar"],
      ["Cuerpo", "Acero, soldadura reforzada"],
      ["Terminación", "Pintura industrial / cincado"],
      ["Compatibilidad", "Medidas originales y a medida"],
    ],
    image: "/productos/gatos-maquinaria-agricola/D_NQ_NP_2X_626611-MLA104868144104_012026-F.webp",
    gallery: [
      "/productos/gatos-maquinaria-agricola/D_NQ_NP_2X_716644-MLA100559078644_122025-F.webp",
    ],
  },
  {
    slug: "piezas-a-medida",
    name: "Piezas Metalúrgicas a Medida",
    category: "Fabricación bajo plano",
    tagline:
      "Mecanizado y fabricación de piezas únicas según el plano o la necesidad del cliente.",
    highlights: [
      "Desde una muestra, un plano o una idea",
      "Torneado, fresado, soldadura y roscado",
      "Series cortas y piezas únicas",
    ],
    uses: [
      "Repuestos discontinuados",
      "Adaptaciones y prototipos",
      "Componentes industriales",
      "Reparaciones de maquinaria",
    ],
    specs: [
      ["Procesos", "Torneado, fresado, soldadura, roscado"],
      ["Materiales", "Acero, inoxidable, bronce, aluminio"],
      ["Insumo", "Plano, muestra o pieza a copiar"],
      ["Cantidad", "Unitaria o serie corta"],
      ["Entrega", "A convenir según complejidad"],
      ["Asesoría", "Diseño de plano incluido"],
    ],
    image: "/productos/piezas-a-medida/Gemini_Generated_Image_yxjrgzyxjrgzyxjr.png",
  },
];

/** Ruta del detalle de un producto. */
export function productPath(slug: string) {
  return `/productos/${slug}`;
}

/** Devuelve un producto por slug (o undefined si no existe). */
export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

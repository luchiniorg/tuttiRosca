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
    "Tutti Rosca — metalúrgica en Bombal, Santa Fe. Fabricación de agropartes para acoplados y maquinaria: varillas roscadas ACME, gatos de lanza, gatos auto descargables, grampas Whitworth, puntas de eje, elásticos, aros giratorios y piezas metalúrgicas a medida. Envíos a todo el país y Mercosur.",
  url: "https://www.tuttirosca.com.ar", // TODO: confirmar dominio definitivo

  location: "Bombal, Santa Fe, Argentina",
  address: "Galez 147, S2179 Bombal, Santa Fe",

  // Contacto
  contactName: "José María Meladolce",
  phoneDisplay: "3465-651059",
  phoneTel: "+5493465651059", // limpio para el link tel:
  whatsapp: "5493465651059", // 3465-651059 en formato internacional
  whatsappMessage:
    "Hola, vi la web y quería consultar por un producto / presupuesto.",
  email: "tutti-rosca@hotmail.com",

  hours: "Lun a Vie 8:00–17:30 · Sáb 8:00–12:00",

  // Mapa
  mapsEmbed:
    "https://maps.google.com/maps?q=Tutti+Rosca,+Galez+147,+Bombal,+Santa+Fe,+Argentina&output=embed",
  mapsLink:
    "https://www.google.com/maps/place/Tutti+Rosca/@-33.4593985,-61.3178656,16z/data=!4m6!3m5!1s0x95b7e1003546b13f:0x7130349974ce388b!8m2!3d-33.4593985!4d-61.3128445!16s%2Fg%2F11z73mdnn8",

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

/* Empresas / social proof — logos reales en /public/empresas */
export const CLIENTS = [
  { name: "AHT — Alzuarte Hydro Tracción", logo: "/empresas/AHT.png" },
  { name: "Metalúrgica Diego Canalis", logo: "/empresas/diego-canalis.png" },
  { name: "Distrimaq", logo: "/empresas/distrimaq.png" },
  { name: "Fontana", logo: "/empresas/fontana.png" },
  { name: "Genovese", logo: "/empresas/genovese.png" },
  { name: "Grosspal", logo: "/empresas/grospal.png" },
  { name: "Industria FAMER", logo: "/empresas/Industria-FAMER.png" },
  { name: "John Deere", logo: "/empresas/john-deere.png" },
  { name: "Palou", logo: "/empresas/palou.png" },
  { name: "Secman", logo: "/empresas/secman.png" },
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
    Medidas disponibles (opcional). Para productos que se fabrican en muchas
    medidas/variantes (varillas, grampas, elásticos, gatos por tamaño, etc.).
    - `columns` de 1 elemento => se muestra como grilla de "chips".
    - `columns` de 2+ elementos => se muestra como tabla comparativa.
  */
  measures?: {
    columns: string[];
    rows: string[][];
    note?: string;
  };
  /*
    Imágenes — convención: /public/productos/<slug>/...
    `image`  = portada (card + apertura del detalle). Ej: "/productos/varilla-roscada-acme/cover.png"
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
    category: "Roscas trapeciales",
    tagline:
      "Rosca ACME (trapecial) de alta resistencia para transmisión de movimiento y carga, en rosca derecha e izquierda.",
    highlights: [
      "Rosca ACME mecanizada, derecha e izquierda",
      "Diámetros de 5/8\" a 2\"",
      "Largo estándar 1000mm · medidas especiales a pedido",
    ],
    uses: [
      "Compuertas de agua y riego",
      "Husillos y mecanismos de avance",
      "Prensas, gatos y elevadores",
      "Industria y maquinaria en general",
    ],
    specs: [
      ["Tipo de rosca", "ACME / trapecial"],
      ["Sentido", "Derecha e izquierda"],
      ["Diámetros", '5/8" a 2"'],
      ["Largo", "1000 mm (estándar)"],
      ["Material", "Acero de alta resistencia"],
      ["Medidas especiales", "A pedido"],
    ],
    measures: {
      columns: ["Diámetro"],
      rows: [['5/8"'], ['3/4"'], ['7/8"'], ['1"'], ['1 1/4"'], ['1 1/2"'], ['1 3/4"'], ['2"']],
      note: "Largo estándar 1000 mm · rosca derecha e izquierda · consultar por medidas especiales.",
    },
    image: "/productos/varilla-roscada-acme/cover.png",
  },
  {
    slug: "gatos-de-lanza",
    name: "Gatos de Lanza",
    category: "Patas de apoyo",
    tagline:
      "Patas de apoyo a manivela con husillo de rosca ACME, en distintas alturas y capacidades.",
    highlights: [
      "Caño estructural 50×50, 60×60 o 70×70 (3,2 mm)",
      "Versión baja y alta según altura de trabajo",
      "Husillo de rosca ACME de fabricación propia",
    ],
    uses: [
      "Acoplados y carros",
      "Tolvas y bateas",
      "Casillas rurales",
      "Implementos agrícolas",
    ],
    specs: [
      ["Material", "Caño estructural 3,2 mm"],
      ["Rosca", 'ACME 7/8" a 1"'],
      ["Altura estándar", "37 – 47 cm"],
      ["Altura máxima", "64 – 74 cm"],
      ["Capacidad", "400 a 900 kg"],
      ["Accionamiento", "Manivela"],
    ],
    measures: {
      columns: ["Modelo", "Caño", "Altura est.", "Altura máx.", "Rosca", "Capacidad"],
      rows: [
        ["50×50 Bajo", "50×50 3,2", "37 cm", "64 cm", 'ACME 7/8"', "400–500 kg"],
        ["50×50 Alto", "50×50 3,2", "47 cm", "74 cm", 'ACME 7/8"', "400–500 kg"],
        ["60×60 Bajo", "60×60 3,2", "37 cm", "64 cm", 'ACME 1"', "600–750 kg"],
        ["60×60 Alto", "60×60 3,2", "47 cm", "74 cm", 'ACME 1"', "600–750 kg"],
        ["70×70 Bajo", "70×70 3,2", "37 cm", "64 cm", 'ACME 1"', "800–900 kg"],
        ["70×70 Alto", "70×70 3,2", "47 cm", "74 cm", 'ACME 1"', "800–900 kg"],
      ],
    },
    image: "/productos/gatos-de-lanza/cover.png",
  },
  {
    slug: "gatos-auto-descargables",
    name: "Gatos Auto Descargables",
    category: "Gatos reforzados",
    tagline:
      "Gato con sistema de engranaje sinfín, vaina y pie regulables, para alta capacidad.",
    highlights: [
      "Sistema de engranaje a sinfín",
      "Vaina y pie regulables en 4 posiciones",
      "Manija de trafilado 15,8 mm + crapodina",
    ],
    uses: [
      "Acoplados de gran porte",
      "Tolvas y bateas",
      "Carros de arrastre",
      "Maquinaria pesada",
    ],
    specs: [
      ["Rosca", 'ACME 1 1/4"'],
      ["Sistema", "Engranaje sinfín + crapodina"],
      ["Manija", "Trafilado 15,8 mm"],
      ["Vaina", "Regulable 4 posiciones"],
      ["Pie", "Regulable 4 posiciones"],
      ["Capacidad", "1500 a 3500 kg"],
    ],
    measures: {
      columns: ["Modelo", "Caño", "Capacidad"],
      rows: [
        ["Grande", "90×90 3,2", "1500–2500 kg"],
        ["Chico", "80×80 3,2", "2500–3500 kg"],
      ],
    },
    image: "/productos/gatos-auto-descargables/cover.png",
  },
  {
    slug: "gato-mixer",
    name: "Gato Mixer",
    category: "Gatos reforzados",
    tagline:
      "Gato reforzado con engranaje y manija tipo Z, pensado para mixers y acoplados.",
    highlights: [
      "Caño 70×70 (3,2 mm)",
      "Rosca ACME 1\" + crapodina",
      "Vaina y pie regulables en 4 posiciones",
    ],
    uses: ["Mixers", "Acoplados", "Tolvas", "Carros de arrastre"],
    specs: [
      ["Caño", "70×70 3,2"],
      ["Rosca", 'ACME 1"'],
      ["Altura estándar", "50 cm"],
      ["Altura máxima", "82 cm"],
      ["Manija", "Trafilado 15,8 mm (Z)"],
      ["Regulación", "Vaina y pie 4 posiciones"],
    ],
    image: "/productos/gato-mixer/cover.png",
  },
  {
    slug: "nivelador-de-casilla",
    name: "Nivelador de Casilla",
    category: "Patas de apoyo",
    tagline:
      "Gato con cabezal para nivelar casillas rurales, con rosca ACME derecha o izquierda.",
    highlights: [
      "Caño 50×50 (3,2 mm)",
      "Cabezal + crapodina",
      "Rosca ACME 1\" derecha o izquierda",
    ],
    uses: [
      "Casillas rurales",
      "Casillas de campo",
      "Estructuras móviles",
      "Trailers y remolques",
    ],
    specs: [
      ["Caño", "50×50 3,2"],
      ["Rosca", 'ACME 1" (Der/Izq)'],
      ["Altura estándar", "37 cm"],
      ["Altura máxima", "64 cm"],
      ["Cabezal", "Sí"],
      ["Crapodina", "Sí"],
    ],
    image: "/productos/nivelador-de-casilla/cover.png",
  },
  {
    slug: "criquet",
    name: "Criquet",
    category: "Criques y niveladores",
    tagline:
      "Criquet con sistema o versión común (económica) para lanza de acoplados.",
    highlights: [
      "Tubo mecánico 3 mm",
      "Versión con sistema criquet o común (económica)",
      "Perno de 1\"",
    ],
    uses: [
      "Lanza de acoplados",
      "Carros y zorras",
      "Implementos agrícolas",
    ],
    specs: [
      ["Tubo", "Mecánico 3 mm"],
      ["Roscas", '1", 1 1/4", 1 1/2"'],
      ["Perno", '1"'],
      ["Desarrollo estándar", "52 cm"],
      ["Desarrollo máximo", "80 cm"],
      ["Versiones", "Con sistema / común"],
    ],
    image: "/productos/criquet/cover.png",
  },
  {
    slug: "crique-compensador",
    name: "Crique Compensador",
    category: "Criques y niveladores",
    tagline:
      "Nivelador de lanza con resorte compensador, en roscas 1 1/4\" y 1 1/2\".",
    highlights: [
      "Compensa el peso de la lanza",
      "Resorte amortiguador",
      "Roscas 1 1/4\" y 1 1/2\"",
    ],
    uses: [
      "Lanza de acoplados",
      "Enganche de tractores",
      "Carros de arrastre",
    ],
    specs: [
      ["Función", "Nivelador de lanza"],
      ["Roscas", '1 1/4" y 1 1/2"'],
      ["Desarrollo estándar", "72 cm"],
      ["Desarrollo máximo", "94 cm"],
      ["Resorte", "Compensador"],
    ],
    image: "/productos/crique-compensador/cover.png",
  },
  {
    slug: "grampas-whitworth",
    name: "Grampas Whitworth 5/8",
    category: "Bulonería y abrazaderas",
    tagline:
      "Grampas (abrazaderas en U) con rosca Whitworth 5/8, en múltiples medidas de estándar.",
    highlights: [
      "Rosca Whitworth 5/8\"",
      "11 medidas de estándar",
      "Otras medidas a pedido",
    ],
    uses: [
      "Sujeción de ejes",
      "Elásticos y suspensión",
      "Chasis y estructuras",
      "Acoplados y carros",
    ],
    specs: [
      ["Rosca", 'Whitworth 5/8"'],
      ["Formato", "Grampa en U"],
      ["Medidas estándar", "11 (ver tabla)"],
      ["A medida", "Sí"],
    ],
    measures: {
      columns: ["Medida (A×B×C mm)"],
      rows: [
        ["165×63×165"], ["180×63×180"], ["200×63×200"], ["220×63×220"],
        ["240×63×240"], ["280×63×280"], ["200×77×200"], ["220×77×240"],
        ["240×77×240"], ["248×77×280"], ["145×104×145"],
      ],
      note: "Todas en rosca Whitworth 5/8\". Otras medidas a pedido.",
    },
    image: "/productos/grampas-whitworth/cover.png",
  },
  {
    slug: "puntas-de-eje",
    name: "Puntas de Eje",
    category: "Ejes y suspensión",
    tagline:
      "Puntas de eje para acoplados y carros, en medidas tipo Fiat y reforzadas.",
    highlights: [
      "Compatibles con ejes tipo Fiat",
      "Versión reforzada disponible",
      "Varias medidas de estándar",
    ],
    uses: ["Acoplados", "Carros y zorras", "Ejes rurales", "Remolques"],
    specs: [
      ["Tipos", "Fiat / reforzada / punta"],
      ["Medidas", "Fiat 4/5 a 7/9"],
      ["Diámetros", '2" y 2 1/2"'],
    ],
    measures: {
      columns: ["Modelo"],
      rows: [
        ["Fiat 4/5"], ["Fiat reforzada 4/6"], ["Punta 5/6"], ['Punta 5/7 · 2"'],
        ['Punta 6/8 · 2"'], ['Punta 7/9 · 2"'], ['Punta 7/9 · 2 1/2"'],
      ],
    },
    image: "/productos/puntas-de-eje/cover.png",
  },
  {
    slug: "elasticos",
    name: "Elásticos",
    category: "Ejes y suspensión",
    tagline:
      "Paquetes de elásticos 50×7 para suspensión de acoplados, de 2 a 11 hojas.",
    highlights: [
      "Sección 50 × 7 mm",
      "De 2 a 11 hojas",
      "Para acoplados y carros",
    ],
    uses: [
      "Suspensión de acoplados",
      "Carros y zorras",
      "Remolques rurales",
    ],
    specs: [
      ["Sección", "50 × 7 mm"],
      ["Hojas", "2 a 11"],
      ["Aplicación", "Suspensión de acoplados"],
    ],
    measures: {
      columns: ["Medida"],
      rows: [
        ["50×7×2h"], ["50×7×3h"], ["50×7×4h"], ["50×7×5h"], ["50×7×6h"],
        ["50×7×7h"], ["50×7×8h"], ["50×7×9h"], ["50×7×11h"],
      ],
      note: "h = cantidad de hojas.",
    },
    image: "/productos/elasticos/cover-v2.png",
  },
  {
    slug: "aros-giratorios",
    name: "Aros Giratorios",
    category: "Ejes y suspensión",
    tagline:
      "Aros giratorios para el tren delantero de acoplados, en tipo Z y U.",
    highlights: [
      "Para dirección de acoplados",
      "Tipo Z y tipo U",
      "Varios diámetros",
    ],
    uses: [
      "Tren delantero de acoplados",
      "Carros giratorios",
      "Zorras",
    ],
    specs: [
      ["Tipos", "Z y U"],
      ["Diámetros", "500 a 950 mm"],
      ["Aplicación", "Giro de tren delantero"],
    ],
    measures: {
      columns: ["Medida"],
      rows: [
        ["500×50 Z"], ["500×50 U"], ["550×50 Z"], ["550×50 U"], ["660×50 Z"],
        ["660×50 U"], ["770×50 Z"], ["870×10 Z"], ["950×14 Z"],
      ],
    },
    image: "/productos/aros-giratorios/cover-v2.png",
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

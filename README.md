# Metalúrgica — Sitio web (catálogo industrial)

Landing institucional + catálogo técnico para una metalúrgica de Bombal, Santa Fe.
Stack: **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## ⚙️ Qué editar antes de publicar

Casi todo el contenido vive en **un solo archivo**: [`src/lib/site.ts`](src/lib/site.ts).
Buscá los comentarios `// TODO` y reemplazá:

| Dato | Dónde |
|------|-------|
| Nombre real de la empresa | `SITE.name`, `SITE.shortName`, `SITE.legalName` |
| WhatsApp (formato `549...`) | `SITE.whatsapp` |
| Email, teléfono, dirección | `SITE.email`, `SITE.phoneDisplay`, `SITE.address` |
| Horarios | `SITE.hours` |
| Mapa de Google (src del iframe) | `SITE.mapsEmbed` |
| Instagram / Facebook / LinkedIn | `SITE.social` |
| Dominio final | `SITE.url` |
| Logos de clientes | `CLIENTS` (texto) o imágenes en `/public/logos` |
| Productos y tablas técnicas | `PRODUCTS` |

## 🎬 Hero (video)

El hero usa un video de fondo. Colocá en `/public`:

- `hero.mp4` — video del taller (chispas / torno / soldadura), ~10-15s, en loop, sin audio.
- `hero-poster.jpg` — primer frame (se muestra mientras carga el video).

Hasta que existan, el hero muestra un fondo oscuro sólido (no se rompe).

## 🔎 SEO

- Metadata, OpenGraph y keywords en `src/app/layout.tsx`.
- `H1` (propuesta de valor) en el hero · `H2` con **"varillas roscadas ACME"** en Productos.
- JSON-LD `ManufacturingBusiness` para Google (SEO local).
- `robots.txt` y `sitemap.xml` autogenerados.
- **Recordatorio:** crear y optimizar la ficha de **Google Mi Negocio** (Maps).

## ✉️ Formulario de contacto

Hoy abre el cliente de correo del visitante (`mailto:`) — funciona sin backend.
Para envío automático, crear `src/app/api/contact/route.ts` con un proveedor
(ej. Resend) y apuntar el `fetch` del formulario ahí.

## 🚀 Deploy

Recomendado **Vercel**: importar el repo, no requiere configuración.
Acordate de setear `SITE.url` al dominio definitivo.

## Estructura

```
src/
  app/         layout (SEO/fuentes), page, globals.css, robots, sitemap
  components/  Navbar, Hero, TrustBar, Products, CustomWork, About,
               Expansion, Contact, Footer, FloatingWhatsApp, Reveal…
  lib/         site.ts (config central), motion.ts
docs/info.md   brief original del proyecto
```

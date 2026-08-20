import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { ProductMeasures } from "@/components/ProductMeasures";
import { TechLabel } from "@/components/ui";
import {
  PRODUCTS,
  SITE,
  getProduct,
  productPath,
  whatsappUrl,
} from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto no encontrado" };

  const title = product.name;
  const description = product.tagline;
  const url = productPath(product.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE.name}`,
      description,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const images = [product.image, ...(product.gallery ?? [])].filter(
    (x): x is string => Boolean(x)
  );
  const related = PRODUCTS.filter((p) => p.slug !== product.slug);
  const msg = `Hola, quería consultar por: ${product.name}.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.tagline,
    image: product.image ? `${SITE.url}${product.image}` : undefined,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "ARS",
      seller: { "@type": "Organization", name: SITE.name },
      url: `${SITE.url}${productPath(product.slug)}`,
    },
  };

  return (
    <>
      <Navbar />
      <main className="w-full flex-1 bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Detalle */}
        <section className="px-5 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav aria-label="Migas" className="flex items-center gap-2">
              <Link
                href="/#productos"
                className="label inline-flex items-center gap-1.5 text-steel-500 transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-3.5" />
                Catálogo
              </Link>
              <span className="text-steel-300">/</span>
              <span className="label text-steel-400">{product.name}</span>
            </nav>

            <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Galería */}
              <ProductGallery
                images={images}
                name={product.name}
                transitionName={`product-${product.slug}`}
              />

              {/* Info */}
              <div className="flex flex-col">
                <TechLabel index="01">{product.category}</TechLabel>
                <h1 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-ink sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-600 sm:text-lg">
                  {product.tagline}
                </p>

                <ul className="mt-7 space-y-3">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-steel-600">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ember-soft text-ember">
                        <Check className="size-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-ember-bright"
                  >
                    Consultar por WhatsApp
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink hover:bg-paper-2"
                  >
                    Pedir presupuesto
                  </Link>
                </div>

                {/* Usos */}
                <div className="mt-8">
                  <TechLabel>Aplicaciones</TechLabel>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span
                        key={use}
                        className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-steel-500"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ficha técnica */}
            <div className="mt-14 overflow-hidden rounded-2xl border border-line-strong bg-paper-2">
              <div className="flex items-center justify-between border-b border-line-strong px-6 py-4">
                <TechLabel>Especificaciones técnicas</TechLabel>
                <span className="label text-steel-300">REF · 01</span>
              </div>
              <dl className="grid sm:grid-cols-2">
                {product.specs.map(([k, v], i) => (
                  <div
                    key={k}
                    className={[
                      "grid grid-cols-[1fr_1.2fr] gap-4 px-6 py-4",
                      i % 2 !== 0 ? "sm:border-l sm:border-line-strong" : "",
                      i >= (product.specs.length % 2 === 0 ? 2 : 1)
                        ? "border-t border-line-strong"
                        : "",
                    ].join(" ")}
                  >
                    <dt className="font-mono text-xs uppercase tracking-wide text-steel-500">
                      {k}
                    </dt>
                    <dd className="font-mono text-sm font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Medidas disponibles */}
            {product.measures && <ProductMeasures measures={product.measures} />}
          </div>
        </section>

        {/* Otros productos */}
        <section className="border-t border-line-strong bg-paper-2 px-5 py-20 sm:px-10">
          <div className="mx-auto max-w-7xl">
            <TechLabel index="02">Seguí explorando</TechLabel>
            <h2 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              Otros productos
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={String(i + 1).padStart(2, "0")} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

"use client";

import { PRODUCTS } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section id="productos" className="border-b border-line-strong bg-paper px-5 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            index="01"
            kicker="Catálogo técnico"
            title="Agropartes para acoplados, tolvas y casillas rurales"
            intro="Gatos, varillas roscadas ACME, grampas, elásticos, puntas de eje y más — cada producto con su ficha técnica exacta y contacto directo. ¿No encontrás la medida? La fabricamos."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08} className="h-full">
              <ProductCard product={product} index={String(i + 1).padStart(2, "0")} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ProductMedia } from "./ProductMedia";

/**
 * Galería del detalle: imagen principal + miniaturas.
 * Si no hay imágenes reales, muestra un placeholder estilo plano.
 */
export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const main = images[active];

  return (
    <div>
      <ProductMedia
        src={main}
        alt={name}
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[4/3] w-full rounded-2xl border border-line-strong"
      />

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1} de ${name}`}
              aria-pressed={i === active}
              className={[
                "relative aspect-square overflow-hidden rounded-xl border transition-colors",
                i === active ? "border-ink" : "border-line-strong hover:border-steel-400",
              ].join(" ")}
            >
              <ProductMedia
                src={img}
                alt={`${name} — vista ${i + 1}`}
                label=""
                sizes="120px"
                className="size-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

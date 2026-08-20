import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { type Product, productPath } from "@/lib/site";
import { TechLabel } from "./ui";
import { ProductMedia } from "./ProductMedia";

export function ProductCard({ product, index }: { product: Product; index: string }) {
  return (
    <Link
      href={productPath(product.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_50px_-24px_rgba(12,13,15,0.35)]"
    >
      {/* Imagen — el name compartido hace el "morph" hacia el detalle */}
      <ViewTransition name={`product-${product.slug}`}>
        <ProductMedia
          src={product.image}
          alt={product.name}
          label={`PRODUCTO ${index}`}
          className="aspect-[4/3] w-full"
        />
      </ViewTransition>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <TechLabel index={index}>{product.category}</TechLabel>
          <span className="grid size-9 place-items-center rounded-full border border-line-strong text-steel-500 transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-steel-600">
          {product.tagline}
        </p>

        <ul className="mt-5 space-y-2">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-steel-600">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" />
              {h}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-ink">
          Ver producto
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

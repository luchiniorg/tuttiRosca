import Image from "next/image";

/**
 * Media de producto: renderiza la foto con next/image (optimizada, lazy,
 * WebP/AVIF) o un placeholder estilo plano mientras no haya imagen real.
 *
 * `fit="contain"` (por defecto) muestra el producto completo sin recortar
 * —ideal para catálogo técnico con fotos de distinta proporción—. `fit="cover"`
 * rellena la caja recortando (útil si alguna vez se quiere una grilla pareja).
 */
export function ProductMedia({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  label = "FOTO DEL PRODUCTO",
  className = "",
  fit = "contain",
  padded = true,
}: {
  src?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
  className?: string;
  fit?: "contain" | "cover";
  padded?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-paper-2 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={[
            fit === "contain" ? "object-contain" : "object-cover",
            fit === "contain" && padded ? "p-4 sm:p-6" : "",
          ].join(" ")}
        />
      ) : (
        <div className="blueprint absolute inset-0 grid place-items-center text-steel-300">
          <span className="label">[ {label} ]</span>
        </div>
      )}
    </div>
  );
}

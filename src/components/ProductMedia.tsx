import Image from "next/image";

/**
 * Media de producto: renderiza la foto con next/image (optimizada, lazy,
 * WebP/AVIF) o un placeholder estilo plano mientras no haya imagen real.
 */
export function ProductMedia({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  label = "FOTO DEL PRODUCTO",
  className = "",
}: {
  src?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
  className?: string;
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
          className="object-cover"
        />
      ) : (
        <div className="blueprint absolute inset-0 grid place-items-center text-steel-300">
          <span className="label">[ {label} ]</span>
        </div>
      )}
    </div>
  );
}

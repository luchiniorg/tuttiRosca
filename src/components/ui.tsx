import type { ReactNode } from "react";

/** Etiqueta monoespaciada estilo plano: "(01) — PRODUCTOS". */
export function TechLabel({
  index,
  children,
  dark = false,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={[
        "label inline-flex items-center gap-2",
        dark ? "text-white/55" : "text-steel-500",
        className,
      ].join(" ")}
    >
      {index && <span className="text-ember">[{index}]</span>}
      {children}
    </span>
  );
}

/**
 * Encabezado de sección técnico: marcador numerado + regla + título grande.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  intro,
  dark = false,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <TechLabel index={index} dark={dark}>
          {kicker}
        </TechLabel>
        <span
          className={[
            "h-px flex-1",
            dark ? "bg-line-dark" : "bg-line-strong",
          ].join(" ")}
        />
      </div>
      <h2
        className={[
          "mt-6 max-w-4xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={[
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-white/60" : "text-steel-600",
          ].join(" ")}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

import { SITE } from "@/lib/site";

/**
 * Logotipo Tutti Rosca: glifo de rosca/perno + wordmark.
 * Reemplazable por el logo real del cliente.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={[
          "grid size-9 place-items-center rounded-full",
          light ? "bg-white text-ink" : "bg-ember text-white",
        ].join(" ")}
      >
        {/* Glifo: tuerca hexagonal (hardware) */}
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12,2.5 20.1,7.25 20.1,16.75 12,21.5 3.9,16.75 3.9,7.25" />
          <circle cx="12" cy="12" r="3.4" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={[
            "font-display text-base font-extrabold uppercase tracking-tight",
            light ? "text-white" : "text-ink",
          ].join(" ")}
        >
          {SITE.shortName}
        </span>
        <span
          className={[
            "label mt-1 text-[9px] tracking-[0.22em]",
            light ? "text-white/45" : "text-steel-400",
          ].join(" ")}
        >
          Fábrica metalúrgica
        </span>
      </span>
    </span>
  );
}

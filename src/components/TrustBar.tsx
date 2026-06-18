import { CLIENTS } from "@/lib/site";
import { TechLabel } from "./ui";

export function TrustBar() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section
      id="confianza"
      className="grid items-center gap-px border-b border-line-strong bg-line-strong md:grid-cols-[260px_1fr]"
    >
      <div className="bg-paper px-5 py-5 sm:px-10">
        <TechLabel index="00">Clientes</TechLabel>
        <p className="mt-2 text-sm font-medium text-ink">
          Empresas que confían en nosotros
        </p>
      </div>

      <div className="marquee-mask overflow-hidden bg-paper py-5">
        <div className="flex w-max animate-marquee items-center">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span className="font-mono text-sm font-medium uppercase tracking-wide text-steel-500 transition-colors hover:text-ink">
                {name}
              </span>
              <span className="mx-7 text-steel-300">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

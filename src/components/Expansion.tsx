"use client";

import { Reveal } from "./Reveal";
import { TechLabel } from "./ui";
import { Truck, GlobeHemisphereWest, Package } from "@/components/icons";

const ITEMS = [
  { k: "Nacional", icon: Truck, t: "Envíos a todo el país", d: "Despacho coordinado a cualquier punto de Argentina." },
  { k: "Exportación", icon: GlobeHemisphereWest, t: "Mercosur", d: "Capacidad de exportar a Uruguay, Brasil y la región." },
  { k: "Logística", icon: Package, t: "Embalaje industrial", d: "Cada pedido preparado para llegar en perfecto estado." },
];

export function Expansion() {
  return (
    <section className="border-b border-line-strong bg-paper-2 px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <TechLabel index="04">Alcance</TechLabel>
            <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-ink sm:text-4xl">
              Llegamos a todo el país y al exterior
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-line-strong sm:grid-cols-3">
            {ITEMS.map((it, i) => (
              <div
                key={it.k}
                className={[
                  "bg-paper p-6",
                  i !== 0 ? "border-t border-line-strong sm:border-l sm:border-t-0" : "",
                ].join(" ")}
              >
                <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-ember-soft text-ember">
                  <it.icon className="size-6" weight="duotone" />
                </span>
                <TechLabel>{it.k}</TechLabel>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {it.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{it.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

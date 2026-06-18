"use client";

import { ArrowUpRight, Lightbulb, Ruler, Gear } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const STEPS = [
  {
    n: "01",
    icon: Lightbulb,
    title: "Tu necesidad",
    text: "Nos traés una muestra, un plano, una pieza a copiar o simplemente el problema a resolver.",
  },
  {
    n: "02",
    icon: Ruler,
    title: "Diseño del plano",
    text: "Definimos medidas, material y tipo de rosca, y armamos el plano técnico de la pieza con vos.",
  },
  {
    n: "03",
    icon: Gear,
    title: "Fabricación",
    text: "Mecanizamos y fabricamos la pieza única o la serie, con la calidad industrial de siempre.",
  },
];

export function CustomWork() {
  return (
    <section
      id="a-medida"
      className="relative overflow-hidden border-b border-line-strong bg-paper-2 px-5 py-20 sm:px-10 sm:py-24"
    >
      <div className="blueprint absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            index="02"
            kicker="Fabricación bajo plano"
            title={
              <>
                ¿Necesitás una pieza especial?
                <br className="hidden sm:block" /> La fabricamos.
              </>
            }
            intro="Si la pieza no existe en catálogo, la hacemos según tus especificaciones. De la idea a la pieza terminada, en tres pasos."
          />
        </Reveal>

        <Reveal className="mt-14 grid overflow-hidden rounded-2xl border border-line-strong bg-paper md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={[
                "group relative p-7 transition-colors hover:bg-paper-2 sm:p-9",
                i !== 0 ? "border-t border-line-strong md:border-l md:border-t-0" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-ember-soft text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                  <step.icon className="size-6" weight="duotone" />
                </span>
                <span className="font-display text-5xl font-extrabold text-steel-200 transition-colors group-hover:text-ember">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-bold uppercase tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">{step.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <a
            href={whatsappUrl("Hola, necesito fabricar una pieza a medida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember"
          >
            Contanos tu proyecto
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

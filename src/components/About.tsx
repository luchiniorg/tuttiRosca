"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading, TechLabel } from "./ui";
import { Wrench, UsersThree, Factory, GlobeHemisphereWest } from "@/components/icons";

const STATS = [
  { value: "+25", label: "años de oficio", icon: Wrench },
  { value: "7", label: "personas", icon: UsersThree },
  { value: "100%", label: "fabricación propia", icon: Factory },
  { value: "3", label: "países (Mercosur)", icon: GlobeHemisphereWest },
];

export function About() {
  return (
    <section id="nosotros" className="border-b border-line-strong bg-paper px-5 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              index="03"
              kicker="Nosotros"
              title={<>Metalúrgica familiar, raíces en Bombal</>}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-600">
              <p>
                Somos una empresa familiar con más de dos décadas fabricando
                agropartes y piezas metalúrgicas. Desde nuestro taller en Bombal,
                Santa Fe, trabajamos para productores, talleres y grandes empresas
                de toda la región.
              </p>
              <p>
                Nuestro equipo combina oficio y máquinas de precisión para resolver
                desde una varilla roscada estándar hasta una pieza única bajo plano.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-strong bg-paper-2">
              <Image
                src="/taller.jpg"
                alt="Equipo de la metalúrgica familiar en su taller de Bombal, Santa Fe"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-bottom"
              />
              <div className="absolute left-3 top-3 z-10">
                <span className="label bg-ink/70 px-2 py-1 text-white/85 backdrop-blur-sm">
                  Taller · Bombal
                </span>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Stats como tabla técnica */}
        <Reveal className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-line-strong sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "p-6 sm:p-8",
                i % 2 !== 0 ? "border-l border-line-strong" : "",
                i >= 2 ? "border-t border-line-strong sm:border-t-0" : "",
                i !== 0 ? "sm:border-l sm:border-line-strong" : "",
              ].join(" ")}
            >
              <s.icon className="size-7 text-ember" weight="duotone" />
              <p className="mt-4 font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {s.value}
              </p>
              <p className="label mt-3 text-steel-500">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

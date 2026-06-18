"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "@/components/icons";
import { SITE, whatsappUrl } from "@/lib/site";
import { EASE } from "@/lib/motion";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* Video de fondo a pantalla completa */}
      <div className="absolute inset-0 -z-10">
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/geminiVideo.mp4" type="video/mp4" />
        </video>
        {/* Capas de oscurecimiento para legibilidad */}
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-10">
        {/* Kicker */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 text-white/70"
        >
          <span className="label text-ember-bright">[ 00 ]</span>
          <span className="label">Fábrica metalúrgica · Bombal · Santa Fe</span>
        </motion.div>

        {/* Titular */}
        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-4xl font-display text-[2.7rem] uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="font-semibold text-white/80">
            Acero que rinde en el campo.{" "}
          </span>
          <span className="font-black text-white">
            Rosca <span className="text-ember-bright">ACME</span>, agropartes y piezas a medida.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          {SITE.subtitle}
        </motion.p>

        {/* Acciones */}
        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-ember-bright"
          >
            Solicitar presupuesto
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#productos"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            Ver catálogo
            <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Indicador inferior */}
      <a
        href="#confianza"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-white/55 transition-colors hover:text-white sm:flex"
      >
        <span className="h-px w-8 bg-white/40" />
        <span className="label">Mirá más</span>
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}

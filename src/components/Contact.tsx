"use client";

import { useState, type FormEvent } from "react";
import { WhatsappLogo, ArrowUpRight } from "@/components/icons";
import { Instagram, Facebook, Linkedin } from "./SocialIcons";
import { SITE, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading, TechLabel } from "./ui";

const inputCls =
  "w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-steel-400 focus:border-ink";

const DATA: [string, string, string?][] = [
  ["Email", SITE.email, `mailto:${SITE.email}`],
  ["Teléfono", SITE.phoneDisplay, `tel:${SITE.phoneDisplay.replace(/\s/g, "")}`],
  ["Dirección", SITE.address, SITE.mapsLink],
  ["Horarios", SITE.hours],
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const subject = encodeURIComponent(`Consulta web — ${nombre || "Sin nombre"}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    // Sin backend: abre el cliente de correo. TODO: conectar /api/contact (Resend).
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="border-b border-line-strong bg-paper px-5 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            index="05"
            kicker="Contacto"
            title="Pedinos tu presupuesto"
            intro="Escribinos por WhatsApp para una respuesta rápida o completá el formulario y te contactamos."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong lg:grid-cols-[1fr_1.25fr]">
          {/* Datos */}
          <Reveal className="flex flex-col bg-paper">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-line-strong bg-ink p-6 text-white transition-colors hover:bg-ember"
            >
              <span className="flex items-center gap-4">
                <WhatsappLogo className="size-7" weight="fill" />
                <span>
                  <span className="label text-white/60">Respuesta rápida</span>
                  <span className="mt-1.5 block font-display text-lg font-bold uppercase">
                    WhatsApp
                  </span>
                </span>
              </span>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <dl className="divide-y divide-line">
              {DATA.map(([k, v, href]) => {
                const content = (
                  <div className="grid grid-cols-[100px_1fr] items-baseline gap-3 px-6 py-4">
                    <dt className="label text-steel-400">{k}</dt>
                    <dd className="text-sm font-medium text-ink">{v}</dd>
                  </div>
                );
                return (
                  <div key={k} className="transition-colors hover:bg-paper-2">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </dl>

            <div className="mt-auto flex items-center gap-px border-t border-line-strong bg-line-strong">
              {[
                { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
                { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-1 items-center justify-center bg-paper py-4 text-steel-500 transition-colors hover:bg-ink hover:text-white"
                >
                  <Icon className="size-5" weight="fill" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1} className="bg-paper">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
                <Field label="Empresa" name="empresa" placeholder="Opcional" />
                <Field label="Email" name="email" type="email" required placeholder="tu@email.com" />
                <Field label="Teléfono" name="telefono" placeholder="Opcional" />
              </div>
              <label className="mt-4 block">
                <span className="label mb-2 block text-steel-500">Mensaje</span>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Producto o pieza, medidas, cantidad…"
                  className={inputCls + " resize-none"}
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember sm:w-auto"
              >
                Enviar consulta
                <ArrowUpRight className="size-4" />
              </button>
              {sent && (
                <p className="mt-3 text-sm text-steel-500">
                  Se abrió tu cliente de correo con la consulta cargada. Si no, escribinos por WhatsApp.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        {/* Mapa */}
        <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-2xl border border-line-strong">
          <div className="flex items-center justify-between border-b border-line-strong px-5 py-3">
            <TechLabel>Ubicación</TechLabel>
            <span className="label text-steel-400">{SITE.location}</span>
          </div>
          <iframe
            title="Ubicación del taller"
            src={SITE.mapsEmbed}
            className="h-80 w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="label mb-2 block text-steel-500">
        {label}
        {required && <span className="text-ember"> *</span>}
      </span>
      <input type={type} name={name} required={required} placeholder={placeholder} className={inputCls} />
    </label>
  );
}

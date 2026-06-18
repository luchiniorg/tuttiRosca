"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { NAV_LINKS, SITE, whatsappUrl } from "@/lib/site";

const MENU_ID = "nav-mobile-menu";
const MENU_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Cierre al hacer click fuera de la cápsula.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        ref={ref}
        initial={reduce ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: MENU_EASE }}
        style={{ borderRadius: open ? "1.375rem" : "2rem" }}
        className="mx-auto max-w-[80rem] bg-ink/55 p-2.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[border-radius] duration-300 sm:p-3"
      >
        {/* Barra principal */}
        <div className="relative flex items-center justify-between">
          {/* Marca */}
          <a
            href="#inicio"
            aria-label={SITE.name}
            className="flex items-center gap-2.5 pl-1"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-full bg-ember text-white">
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
            <span className="font-display text-[15px] font-extrabold uppercase tracking-tight text-white">
              {SITE.shortName}
            </span>
          </a>

          {/* Nav centrada (desktop) */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Acciones (desktop) + hamburguesa (mobile) */}
          <div className="flex items-center gap-1">
            <a
              href="#contacto"
              className="hidden rounded-full px-4 py-2.5 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white lg:inline-flex"
            >
              Contacto
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-ember-bright lg:inline-flex"
            >
              Presupuesto
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls={MENU_ID}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={[
                    "absolute left-0 block h-[1.5px] w-4 rounded-[2px] bg-white transition-all duration-300",
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute bottom-0 left-0 block h-[1.5px] w-4 rounded-[2px] bg-white transition-all duration-300",
                    open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Menú mobile expandible */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={MENU_ID}
              initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: MENU_EASE }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="mt-2 px-1 pt-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.05, ease: MENU_EASE }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 text-[0.95rem] font-medium text-white/85 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="size-4 text-white/35" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ember-bright"
              >
                Solicitar presupuesto
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

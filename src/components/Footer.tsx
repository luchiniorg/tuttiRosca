import { Instagram, Facebook, Linkedin } from "./SocialIcons";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { TechLabel } from "./ui";

export function Footer() {
  return (
    <footer className="bg-paper-2 text-ink">
      <div className="blueprint border-b border-line-strong">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-600">
              {SITE.tagline}. {SITE.subtitle}
            </p>
            <div className="mt-6 flex w-fit gap-px overflow-hidden rounded-full border border-line-strong bg-line-strong">
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
                  className="grid size-11 place-items-center bg-paper text-steel-500 transition-colors hover:bg-ink hover:text-white"
                >
                  <Icon className="size-5" weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <TechLabel>Navegación</TechLabel>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="flex items-center gap-3">
                  <span className="label text-steel-300">{String(i + 1).padStart(2, "0")}</span>
                  <a href={l.href} className="text-sm text-steel-600 transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel>Contacto</TechLabel>
            <ul className="mt-5 space-y-3 text-sm text-steel-600">
              <li>{SITE.address}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-ink">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="transition-colors hover:text-ink">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-steel-400 sm:flex-row sm:px-10">
        <p className="label">© {new Date().getFullYear()} {SITE.name}</p>
        <p className="label">Fábrica metalúrgica · {SITE.location}</p>
      </div>
    </footer>
  );
}

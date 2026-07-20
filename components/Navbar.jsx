import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
];

function NavLink({ href, label, onClick, className = "" }) {
  const router = useRouter();
  const isActive = href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-semibold transition ${
        isActive ? "text-white" : "text-ink-400 hover:text-white"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight text-white">
          Joaco<span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">Dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-200 transition hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink-200 transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-5 rounded-full bg-ink-200 transition ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink-200 transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                onClick={() => setIsOpen(false)}
                className="py-1 text-base"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

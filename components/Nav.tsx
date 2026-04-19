"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoLockup } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";

const GITHUB_URL = "https://github.com/mirakuta-dev/mirakuta";

export function Nav() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/products", label: t.nav.products },
    { href: "/docs", label: t.nav.docs },
    { href: "/changelog", label: t.nav.changelog },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-dark">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="mirakuta home"
        >
          <LogoLockup size={28} variant="dark" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-brand-textDark">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LocaleToggle className="border-white/15 text-brand-textDark" />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-brand-primary text-brand-light text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            {t.nav.github}
          </a>

          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/15 text-brand-textDark"
          >
            <span aria-hidden className="font-mono text-sm">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-brand-textDark">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-brand-primary text-brand-light text-sm px-4 py-2 rounded-md"
              >
                {t.nav.github}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

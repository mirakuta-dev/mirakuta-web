"use client";

import { useLocale } from "./LocaleProvider";

const GITHUB_URL = "https://github.com/mirakuta-dev/mirakuta";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-brand-border dark:border-white/10 px-6 md:px-12 lg:px-24 py-8 text-sm text-brand-muted">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>{t.footer.left}</p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-neutral dark:hover:text-white transition-colors"
          >
            {t.footer.github}
          </a>
          <span aria-hidden>|</span>
          <a
            href={`mailto:${t.footer.email}`}
            className="hover:text-brand-neutral dark:hover:text-white transition-colors"
          >
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

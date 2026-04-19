"use client";

import { LOCALES, type Locale } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";

type Props = {
  className?: string;
};

export function LocaleToggle({ className = "" }: Props) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.locale.label}
      className={`inline-flex items-center rounded-md border border-brand-border text-xs font-mono ${className}`}
    >
      {LOCALES.map((code: Locale) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`px-2.5 py-1 transition-colors ${
              active
                ? "bg-brand-primary text-brand-light"
                : "text-brand-muted hover:text-brand-neutral dark:hover:text-white"
            } first:rounded-l-md last:rounded-r-md`}
          >
            {t.locale[code]}
          </button>
        );
      })}
    </div>
  );
}

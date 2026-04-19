"use client";

import { useLocale } from "@/components/LocaleProvider";

const GITHUB_URL = "https://github.com/mirakuta-dev/mirakuta";

export function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 text-center">
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-neutral dark:text-white text-balance">
        {t.socialProof.heading}
      </h2>
      <p className="mt-3 text-brand-muted dark:text-gray-400 text-balance">
        {t.socialProof.body}
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md border border-brand-border dark:border-white/15 text-brand-neutral dark:text-white hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors"
      >
        {t.socialProof.cta}
      </a>
    </section>
  );
}

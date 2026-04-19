"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/Button";

const GITHUB_URL = "https://github.com/mirakuta-dev/mirakuta";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="bg-brand-dark px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight text-balance">
          {t.hero.headline}
        </h1>
        <p className="mt-5 text-lg text-brand-textDark max-w-2xl mx-auto text-balance">
          {t.hero.subline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={GITHUB_URL} external>
            {t.hero.primary}
          </Button>
          <a
            href="#solution"
            className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

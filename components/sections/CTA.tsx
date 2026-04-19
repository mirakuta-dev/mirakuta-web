"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/Button";

const GITHUB_URL = "https://github.com/mirakuta-dev/mirakuta";

export function CTA() {
  const { t } = useLocale();

  return (
    <section className="bg-brand-dark px-6 md:px-12 lg:px-24 py-20 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white text-balance">
        {t.cta.headline}
      </h2>
      <p className="mt-3 text-brand-textDark text-balance">{t.cta.subline}</p>
      <div className="mt-8 flex justify-center">
        <Button href={GITHUB_URL} external>
          {t.cta.primary}
        </Button>
      </div>
    </section>
  );
}

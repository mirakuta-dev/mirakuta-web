"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Solution() {
  const { t } = useLocale();

  return (
    <section
      id="solution"
      className="bg-brand-surface dark:bg-transparent border-y border-brand-border dark:border-white/10 px-6 md:px-12 lg:px-24 py-16 md:py-24"
    >
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-neutral dark:text-white max-w-3xl mx-auto text-center text-balance">
        {t.solution.heading}
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {t.solution.cards.map((card, idx) => (
          <article
            key={idx}
            className="border border-brand-border dark:border-white/10 rounded-lg p-6 bg-white dark:bg-gray-900 text-center"
          >
            <h3 className="text-lg font-medium tracking-tight text-brand-neutral dark:text-white text-balance">
              {card.title}
            </h3>
            <p className="mt-2 text-brand-muted dark:text-gray-400 text-balance">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

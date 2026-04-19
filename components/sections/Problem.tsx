"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Problem() {
  const { t } = useLocale();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-neutral dark:text-white max-w-3xl">
        {t.problem.heading}
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.problem.quotes.map((quote, idx) => (
          <blockquote
            key={idx}
            className="border border-brand-border dark:border-white/10 rounded-lg p-5 text-brand-neutral dark:text-gray-200"
          >
            <p className="before:content-['\201C'] after:content-['\201D'] before:mr-0.5 after:ml-0.5">
              {quote}
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Fragment } from "react";
import { useLocale } from "@/components/LocaleProvider";

export function Problem() {
  const { t } = useLocale();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-neutral dark:text-white max-w-3xl mx-auto text-center">
        {t.problem.heading.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {t.problem.quotes.map((quote, idx) => (
          <blockquote
            key={idx}
            className="border border-brand-border dark:border-white/10 rounded-lg p-6 text-brand-neutral dark:text-gray-200 text-center flex items-center justify-center"
          >
            <p>
              &ldquo;
              {quote.map((sentence, sIdx) => (
                <Fragment key={sIdx}>
                  {sIdx > 0 && <br />}
                  {sentence}
                </Fragment>
              ))}
              &rdquo;
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

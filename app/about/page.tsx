"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/components/LocaleProvider";

const STACK = ["Go", "TypeScript", "Next.js", "Tailwind CSS", "Cobra", "Viper"];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      <Nav />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-neutral dark:text-white">
          {t.about.title}
        </h1>

        <p className="mt-6 text-lg text-brand-neutral dark:text-gray-200 leading-relaxed">
          {t.about.intro}
        </p>

        <section className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-brand-muted mb-3">
            {t.about.stackHeading}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {STACK.map((tag) => (
              <li
                key={tag}
                className="text-xs text-brand-muted border border-brand-border dark:border-white/10 rounded-md px-2 py-1 font-mono"
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-brand-muted mb-3">
            {t.about.builtHeading}
          </h2>
          <Link
            href="/products"
            className="text-brand-primary hover:opacity-80 transition-opacity"
          >
            → /products
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-brand-muted mb-3">
            {t.about.contactHeading}
          </h2>
          <ul className="flex flex-col gap-2 text-brand-neutral dark:text-gray-200">
            <li>
              <a
                href="https://github.com/mirakuta-dev/mirakuta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:help@mirakuta.dev"
                className="hover:text-brand-primary transition-colors"
              >
                help@mirakuta.dev
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

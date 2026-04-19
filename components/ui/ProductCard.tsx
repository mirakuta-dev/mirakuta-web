"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { Product } from "@/lib/products";
import { Badge } from "./Badge";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { t } = useLocale();

  return (
    <article className="border border-brand-border dark:border-white/10 rounded-lg p-6 bg-white dark:bg-gray-900">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-medium tracking-tight text-brand-neutral dark:text-white">
          {product.name}
        </h3>
        <Badge
          status={product.status}
          label={t.products.status[product.status]}
        />
      </div>

      <p className="text-brand-muted dark:text-gray-400 mb-4">
        {product.description}
      </p>

      {product.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-brand-muted border border-brand-border dark:border-white/10 rounded-md px-2 py-0.5 font-mono"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center gap-4 text-sm">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary hover:opacity-80 transition-opacity"
        >
          {t.products.visit}
        </a>
        <a
          href={product.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-muted hover:text-brand-neutral dark:hover:text-white transition-colors"
        >
          {t.products.source}
        </a>
      </div>
    </article>
  );
}

"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { useLocale } from "@/components/LocaleProvider";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const { t } = useLocale();

  return (
    <>
      <Nav />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <header className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-neutral dark:text-white">
            {t.products.title}
          </h1>
          <p className="mt-3 text-brand-muted dark:text-gray-400">
            {t.products.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

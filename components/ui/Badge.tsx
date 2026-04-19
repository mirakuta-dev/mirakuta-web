import type { ProductStatus } from "@/lib/products";

const STYLES: Record<ProductStatus, string> = {
  active:
    "bg-brand-light text-brand-primary dark:bg-brand-primary/20 dark:text-brand-mid",
  beta: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  archived:
    "bg-brand-surface text-brand-muted dark:bg-gray-800 dark:text-gray-400",
  "coming-soon":
    "bg-brand-surface text-brand-neutral dark:bg-gray-800 dark:text-gray-200",
};

type Props = {
  status: ProductStatus;
  label: string;
};

export function Badge({ status, label }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${STYLES[status]}`}
    >
      {label}
    </span>
  );
}

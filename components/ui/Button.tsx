import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary";

const BASE =
  "inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md transition-opacity transition-colors";

const STYLES: Record<Variant, string> = {
  primary: "bg-brand-primary text-brand-light hover:opacity-90",
  secondary:
    "border border-brand-border text-brand-neutral dark:text-white hover:bg-brand-surface dark:hover:bg-gray-800",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  external,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: Props) {
  const merged = `${BASE} ${STYLES[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={merged}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={merged} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={merged}
    >
      {children}
    </button>
  );
}

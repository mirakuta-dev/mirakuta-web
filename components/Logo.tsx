type LogoProps = {
  size?: number;
  variant?: "light" | "dark";
};

export function Logo({ size = 40, variant = "light" }: LogoProps) {
  const outer = variant === "light" ? "#4338CA" : "#818CF8";
  const inner = variant === "light" ? "#E0E7FF" : "#1E1B4B";
  const text = variant === "light" ? "#4338CA" : "#C7D2FE";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="mirakuta logo"
      role="img"
    >
      <g transform="translate(200, 200)">
        <rect
          x="-120"
          y="-120"
          width="240"
          height="240"
          rx="24"
          fill={outer}
          transform="rotate(45)"
        />
        <rect
          x="-72"
          y="-72"
          width="144"
          height="144"
          rx="14"
          fill={inner}
          transform="rotate(45)"
        />
        <text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="80"
          fontWeight="700"
          fill={text}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          &gt;_
        </text>
      </g>
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-sans font-medium tracking-tight text-brand-dark dark:text-brand-textDark ${className}`}
    >
      mirakuta
    </span>
  );
}

type LogoLockupProps = {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
};

export function LogoLockup({
  size = 32,
  variant = "light",
  className = "",
}: LogoLockupProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={size} variant={variant} />
      <Wordmark className="text-lg" />
    </div>
  );
}

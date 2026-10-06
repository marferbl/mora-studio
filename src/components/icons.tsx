type IconProps = {
  className?: string;
  strokeWidth?: number;
};

// Drawn as SVG instead of the ↗ ↓ ✳ ✓ glyphs, which some platforms render as emoji.

export function ArrowUpRight({ className, strokeWidth = 1.2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className ?? "size-[0.7em]"}
    >
      <path d="M2.5 11.5 11 3M4.5 3H11v6.5" />
    </svg>
  );
}

export function ArrowDown({ className, strokeWidth = 1.2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className ?? "size-[0.8em]"}
    >
      <path d="M7 1.5v11M2.5 8 7 12.5 11.5 8" />
    </svg>
  );
}

export function Asterisk({ className, strokeWidth = 2.4 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className ?? "size-[0.75em]"}
    >
      <path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M19.8 4.2 4.2 19.8" />
    </svg>
  );
}

export function Check({ className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className ?? "size-[0.8em]"}
    >
      <path d="M1.5 6.5 4.5 10l6-8" />
    </svg>
  );
}

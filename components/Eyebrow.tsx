import type { ReactNode } from "react";

/** Amber uppercase section label. Reused across stats, grid, differentiation, CTA. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.22em] text-amber ${className}`}
    >
      {children}
    </p>
  );
}

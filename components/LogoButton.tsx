"use client";

import { LogoLockup } from "./LogoLockup";

export function LogoButton() {
  return (
    <button
      type="button"
      aria-label="Lumivita — til toppen"
      onClick={() => window.scrollTo(0, 0)}
      className="cursor-pointer"
    >
      <LogoLockup variant="light" />
    </button>
  );
}

import Image from "next/image";

type Variant = "light" | "dark";

/**
 * Mark vector (real logo asset) stacked above a live Cormorant wordmark.
 * The wordmark is rendered as text — not the baked SVG lockup — so it uses
 * the loaded webfont and stays pixel-accurate. See project handoff notes.
 *
 * light: navy mark + ink "Lumi" (nav, on sand bg)
 * dark:  amber mark + cream "Lumi" (footer, on ink-deep bg)
 */
export function LogoLockup({ variant = "light" }: { variant?: Variant }) {
  const dark = variant === "dark";
  return (
    <div className={`flex flex-col items-center ${dark ? "gap-1.5" : "gap-1.25"}`}>
      <Image
        src={dark ? "/logo/lumivita-mark-amber.svg" : "/logo/lumivita-mark.svg"}
        alt=""
        aria-hidden
        width={dark ? 78 : 68}
        height={dark ? 17 : 15}
      />
      <div className="font-display text-[26px] font-medium leading-none tracking-[0.01em]">
        <span className={dark ? "text-sand" : "text-ink"}>Lumi</span>
        <span className="text-amber">vita</span>
      </div>
    </div>
  );
}

import { LogoButton } from "./LogoButton";

// Nav links hidden for the pre-launch coming-soon page — only the logo and the
// early-access CTA show. Restore the links (and the map in the <nav>) when the
// linked sections are ready to navigate to:
// const links = [
//   { href: "#om", label: "Om" },
//   { href: "#produkter", label: "Produkter" },
//   { href: "#samarbeid", label: "Samarbeid" },
// ];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/8 bg-sand/92 px-[6vw] py-5 backdrop-blur-[10px]">
      <LogoButton />
      <a
        href="#pamelding"
        className="rounded-pill bg-amber px-5.5 py-2.75 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
      >
        Tidlig tilgang
      </a>
    </nav>
  );
}

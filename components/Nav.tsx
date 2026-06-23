import { LogoButton } from "./LogoButton";

const links = [
  { href: "#om", label: "Om" },
  { href: "#produkter", label: "Produkter" },
  { href: "#tillit", label: "Tillit" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/8 bg-sand/92 px-[6vw] py-5 backdrop-blur-[10px]">
      <LogoButton />
      <div className="flex items-center gap-0 md:gap-[30px]">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden text-[11px] font-normal uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink/80 md:inline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#tilgang"
          className="rounded-pill bg-amber px-[22px] py-[11px] text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
        >
          Tidlig tilgang
        </a>
      </div>
    </nav>
  );
}

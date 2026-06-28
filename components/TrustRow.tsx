const badges = [
  "CE godkjent",
  "GMP sertifiserte EU produsenter",
  "Registrert i Norge",
  "Betal med Vipps",
  "Norsk kundeservice",
];

function CheckBadge() {
  return (
    <span className="flex h-5.25 w-5.25 flex-none items-center justify-center rounded-full bg-forest/14">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2D4A3E"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function TrustRow() {
  return (
    <div
      id="samarbeid"
      className="scroll-mt-20 border-y border-ink/8 bg-sand px-[6vw] py-9.5"
    >
      <div className="mx-auto flex max-w-260 flex-col items-start gap-3.75 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-7 md:gap-y-4">
        {badges.map((label) => (
          <span
            key={label}
            className="flex items-center gap-2.25 text-xs tracking-[0.03em] text-body"
          >
            <CheckBadge />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

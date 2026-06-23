import Image from "next/image";

export type ProductAccent = "ink" | "forest";

export type Product = {
  image: string;
  title: string;
  description: string;
  meta: string;
  accent: ProductAccent;
};

export function ProductCard({
  image,
  title,
  description,
  meta,
  accent = "ink",
}: Product) {
  const forest = accent === "forest";
  return (
    <div
      className={`group cursor-pointer overflow-hidden rounded-card border bg-white transition duration-[250ms] hover:-translate-y-[5px] hover:shadow-[0_18px_42px_rgba(28,43,58,0.16)] ${
        forest
          ? "border-forest/18 hover:border-forest/50"
          : "border-ink/8 hover:border-amber/45"
      }`}
    >
      <div className={`relative h-[190px] ${forest ? "bg-forest" : "bg-ink"}`}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover"
        />
      </div>
      <div className="px-7 pb-7 pt-[26px]">
        <h3
          className={`mb-[10px] font-display text-2xl font-medium ${
            forest ? "text-forest" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <p className="mb-4 text-sm leading-[1.65] text-body-muted">
          {description}
        </p>
        <div className="flex flex-col items-start gap-[9px] md:flex-row md:items-center md:justify-between md:gap-[10px]">
          <span
            className={`text-[10px] uppercase tracking-[0.13em] ${
              forest ? "text-forest/60" : "text-ink/45"
            }`}
          >
            {meta}
          </span>
          <span
            className={`whitespace-nowrap text-[11px] font-medium ${
              forest ? "text-forest" : "text-amber"
            }`}
          >
            Lanseres høst 2025
          </span>
        </div>
      </div>
    </div>
  );
}

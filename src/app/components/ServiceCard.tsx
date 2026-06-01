import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  serviceType: "haircut" | "kids" | "skinfade" | "color" | "shave" | "full";
};

const backgroundImages: Record<ServiceCardProps["serviceType"], string> = {
  haircut: "/haircut1.png",
  kids: "/haircut2.png",
  skinfade: "/haircut3.png",
  color: "/haircut4.png",
  shave: "/haircut5.png",
  full: "/haircut6.png",
};

export default function ServiceCard({
  title,
  description,
  price,
  serviceType,
}: ServiceCardProps) {
  return (
    <article
      className="group relative min-h-[280px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundImage: `url(${backgroundImages[serviceType]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30 transition-opacity duration-300 group-hover:via-[var(--ink)]/80" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="font-display text-2xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-[var(--gold)] font-semibold text-lg">
            {price}
          </span>
          <Link
            href="/booking"
            className="text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-[var(--gold)] transition opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 duration-300"
          >
            Book →
          </Link>
        </div>
      </div>
    </article>
  );
}

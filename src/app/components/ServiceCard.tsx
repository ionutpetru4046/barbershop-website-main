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
      className="group relative min-h-[340px] md:min-h-[370px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300 transform-gpu hover:-translate-y-1"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(27,30,36,0.85) 55%, rgba(27,30,36,0.5) 100%), url(${backgroundImages[serviceType]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1.5px solid rgba(217,181,0,0.13)",
        boxShadow:
          "0 8px 32px 0 rgba(31,38,135,0.13), 0 1.5px 6px 0 rgba(217,181,0,0.06)",
      }}
    >
      {/* Gold edge top-right shimmer */}
      <div className="absolute top-0 right-0 w-32 h-1.5 bg-gradient-to-l from-[var(--gold)] via-transparent to-transparent blur-sm opacity-55" />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 backdrop-blur-[3.5px]">
        {/* Modern floating price card */}
        <div className="flex justify-end">
          <span className="bg-[var(--gold)]/90 text-[var(--ink)] font-display text-lg font-bold rounded-xl px-4 py-1 shadow-md border border-yellow-200/40 backdrop-blur-sm select-none hover:scale-105 transition-transform duration-200">
            {price}
          </span>
        </div>
        {/* Title and description */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-2 text-white/90 drop-shadow-md">
            {title}
          </h3>
          <p className="mb-6 text-white/80 text-[15px] leading-relaxed line-clamp-3 font-medium drop-shadow-sm">
            {description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/booking"
              className="btn-primary !bg-[var(--gold)] !text-[var(--ink)] !font-semibold text-xs uppercase tracking-wide rounded-lg py-2 px-5 shadow-lg shadow-[var(--gold)]/10 ring-1 ring-[var(--gold)]/50 hover:scale-105 hover:bg-[var(--ink)] hover:text-[var(--gold)] hover:ring-[var(--gold)]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              style={{
                boxShadow:
                  "0 3px 12px 0 rgba(217,181,0,0.17), 0 1.5px 6px 0 rgba(217,181,0,0.13)",
              }}
              tabIndex={0}
            >
              Book&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-0.5">&#8594;</span>
            </Link>
            {/* subtle micro-interaction: shimmer under book btn on group hover */}
            <span className="hidden sm:inline-block w-14 h-1 rounded-full bg-gradient-to-r from-[var(--gold)]/50 to-transparent opacity-0 group-hover:opacity-80 translate-y-2 group-hover:translate-y-0 transition duration-300 blur-[1.5px]" />
          </div>
        </div>
      </div>

      {/* Gold edge shimmer bottom left */}
      <div className="absolute left-0 bottom-0 w-24 h-1 bg-gradient-to-r from-[var(--gold)]/70 via-transparent to-transparent blur-[1.5px] opacity-60" />
      {/* Golden glowing dot for a modern touch */}
      <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[var(--gold)]/60 blur-[2px] pointer-events-none" />
    </article>
  );
}

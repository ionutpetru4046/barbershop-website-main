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
    <div
      className="text-white rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImages[serviceType]})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 rounded-xl z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 border-b border-white/20 pb-2">
          {title}
        </h3>
        <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
        <div className="text-right">
          <span className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-gray-400 transition">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

import type { MarqueeImage as MarqueeImageType } from "./constants";

interface MarqueeImageProps {
  image: MarqueeImageType;
}

export function MarqueeImage({ image }: MarqueeImageProps) {
  return (
    <div className="flex-shrink-0 group relative">
      <div className="w-48 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white ring-2 ring-primary-200 hover:ring-primary-400 sm:w-56 sm:h-32 sm:rounded-2xl lg:w-64 lg:h-40">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {image.alt}
        </div>
      </div>
    </div>
  );
}

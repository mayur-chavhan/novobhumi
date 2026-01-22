import type { StatCard } from "./constants";

interface StatsCardProps {
  card: StatCard;
  compact?: boolean;
}

export function StatsCard({ card, compact = false }: StatsCardProps) {
  if (compact) {
    return (
      <div className="rounded-xl bg-white/90 p-3 shadow-sm backdrop-blur-sm border border-gray-100">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600">
          {card.label}
        </p>
        <p className="mt-1 text-lg font-bold text-gray-900">{card.value}</p>
        <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">{card.helper}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur border border-gray-100/50 hover:shadow-md transition-shadow">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
        {card.label}
      </p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{card.value}</p>
      <p className="mt-1 text-sm text-gray-600">{card.helper}</p>
    </div>
  );
}

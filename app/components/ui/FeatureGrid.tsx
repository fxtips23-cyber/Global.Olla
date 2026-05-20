import type { ComponentType } from "react";

interface Feature {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  features: Feature[];
  cols?: 2 | 3 | 4;
  dark?: boolean;
  compact?: boolean;
}

/** Consistent feature-card grid used across all inner pages. */
export default function FeatureGrid({ features, cols = 3, dark = false, compact = false }: FeatureGridProps) {
  const grid = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  const cardBase = dark
    ? "bg-white/5 border-white/8 hover:border-white/16"
    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-md";
  const iconBase = dark
    ? "border-white/12 bg-white/8 text-white/45 group-hover:text-white/70"
    : "border-gray-200 bg-[#F5F7FA] text-gray-500 group-hover:border-gray-300 group-hover:text-[#111827]";
  const headingColor = dark ? "text-white/80" : "text-[#111827]";
  const bodyColor = dark ? "text-white/38" : "text-gray-500";
  const pad = compact ? "p-5" : "p-6";

  return (
    <div className={`grid ${grid} gap-4`}>
      {features.map(({ Icon, title, desc }) => (
        <div
          key={title}
          className={`group border rounded-2xl ${pad} ${cardBase} transition-all duration-250`}
        >
          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 mb-5 transition-colors ${iconBase}`}>
            <Icon className="w-4 h-4" />
          </div>
          <h4 className={`text-[14px] font-bold mb-2 ${headingColor}`}>{title}</h4>
          <p className={`text-[13px] leading-relaxed ${bodyColor}`}>{desc}</p>
        </div>
      ))}
    </div>
  );
}

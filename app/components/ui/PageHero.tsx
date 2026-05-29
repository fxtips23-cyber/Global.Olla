import Link from "next/link";
import type { ReactNode } from "react";

interface Crumb { label: string; href?: string; }
interface Stat  { value: string; label: string; }
interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  cta?: { label: string; href: string };
  stats?: Stat[];
  children?: ReactNode;
}

export default function PageHero({ badge, title, subtitle, breadcrumbs, cta, stats, children }: PageHeroProps) {
  return (
    <section className="bg-[#07111F] pt-10 pb-14 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,181,212,0.03) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(41,181,212,0.03) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blue glow — top right */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px]"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(41,181,212,0.08) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-white/10">/</span>
                {b.href
                  ? <Link href={b.href} className="hover:text-white/45 transition-colors">{b.label}</Link>
                  : <span className="text-white/40">{b.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full bg-[#29B5D4]" />
            <span className="text-[11px] font-bold text-[#29B5D4] uppercase tracking-widest">{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 max-w-4xl leading-tight">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-white/38 max-w-2xl leading-relaxed mb-8">{subtitle}</p>
        )}

        {/* CTA + stats */}
        {(cta || stats) && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-2">
            {cta && (
              <Link href={cta.href}
                className="inline-flex items-center gap-2 bg-[#29B5D4] hover:bg-[#1FA5C4] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-[#29B5D4]/20">
                {cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            )}
            {stats && stats.length > 0 && (
              <div className="flex gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-[11px] text-white/30 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

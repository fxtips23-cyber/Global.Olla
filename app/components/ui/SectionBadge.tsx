export default function SectionBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5 ${dark ? "bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44]" : "bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00AA38]"}`}>
      {children}
    </div>
  );
}

export default function SectionBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5 ${dark ? "bg-[#29B5D4]/15 border border-[#29B5D4]/25 text-[#29B5D4]" : "bg-[#29B5D4]/10 border border-[#29B5D4]/20 text-[#29B5D4]"}`}>
      {children}
    </div>
  );
}

interface Row { [key: string]: string; }
interface TradingConditionsTableProps {
  title?: string;
  headers: string[];
  rows: Row[];
  highlightCol?: number;
}

export default function TradingConditionsTable({ title, headers, rows, highlightCol }: TradingConditionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
      {title && (
        <div className="px-6 py-4 border-b border-gray-100 bg-[#F5F7FA]">
          <h3 className="text-base font-bold text-[#111827]">{title}</h3>
        </div>
      )}
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr className="border-b border-gray-100">
            {headers.map((h, i) => (
              <th key={h} className={`px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider ${i === 0 ? "text-gray-400" : i === highlightCol ? "text-[#00CC44]" : "text-gray-400"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-[#F5F7FA] transition-colors">
              {headers.map((h, ci) => (
                <td key={h} className={`px-5 py-3.5 ${ci === 0 ? "font-semibold text-[#111827]" : ci === highlightCol ? "font-bold text-[#00CC44]" : "text-gray-600"}`}>
                  {row[h]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import type { Product } from "@/lib/site";
import { TechLabel } from "./ui";

/**
 * Muestra las medidas disponibles de un producto.
 * - 1 columna  => grilla de "chips" (listado de medidas).
 * - 2+ columnas => tabla comparativa con scroll horizontal en mobile.
 */
export function ProductMeasures({ measures }: { measures: NonNullable<Product["measures"]> }) {
  const { columns, rows, note } = measures;
  const isList = columns.length === 1;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-line-strong bg-paper-2">
      <div className="flex items-center justify-between border-b border-line-strong px-6 py-4">
        <TechLabel>Medidas disponibles</TechLabel>
        <span className="label text-steel-300">{rows.length} MED.</span>
      </div>

      {isList ? (
        <div className="grid grid-cols-2 gap-2 p-6 sm:grid-cols-3 lg:grid-cols-4">
          {rows.map((row) => (
            <span
              key={row[0]}
              className="rounded-lg border border-line-strong bg-paper px-3 py-2 text-center font-mono text-sm font-medium text-ink"
            >
              {row[0]}
            </span>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 font-mono text-xs uppercase tracking-wide text-steel-500"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.join("|")}
                  className={i % 2 !== 0 ? "bg-paper/60" : ""}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={[
                        "px-6 py-3 font-mono text-sm text-ink",
                        j === 0 ? "font-semibold" : "text-steel-600",
                      ].join(" ")}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {note && (
        <p className="border-t border-line-strong px-6 py-4 text-sm leading-relaxed text-steel-500">
          {note}
        </p>
      )}
    </div>
  );
}

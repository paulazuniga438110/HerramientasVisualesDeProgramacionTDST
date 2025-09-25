import React, { useState, useMemo } from "react";

const Lista1 = [
  "Arepa",
  "Bandeja paisa",
  "Empanada",
  "Ajiaco",
  "Tamale",
  "Sancocho",
  "Bollo",
  "Pandebono",
  "Buñuelo",
  "Posta negra",
];

export const Lista: React.FC = () => {
  const [query, setQuery] = useState("");

  // useMemo para evitar recalcular si no cambia query
  const list = useMemo(
    () =>
      Lista1.filter((n) =>
        n.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query]
  );

  return (
    <section className="p-4 border rounded-md max-w-md mt-6">
      <h2 className="text-xl font-semibold mb-3">Lista con filtrado en vivo</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar... (case-insensitive)"
        className="w-full mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        aria-label="Filtrar lista"
      />

      <ul className="divide-y divide-gray-200">
        {query === "" && (
          
          <></>
        )}

        {list.length === 0 ? (
          <li className="py-3 text-gray-500">No se encontraron coincidencias.</li>
        ) : (
          list.map((item) => (
            <li
              key={item}
              className="py-3 px-2 hover:bg-gray-50 transition-colors cursor-default"
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

"use client";

import { useEffect, useState } from "react";
import { getContracts, saveContracts, Contract } from "@/services/mock/contracts";
import { Modal } from "@/components/ui/Modal";

export function ContractsTable() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [selected, setSelected] = useState<Contract | null>(null);

  useEffect(() => {
    setContracts(getContracts());
  }, []);

  function handleSave() {
    const updated = contracts.map((c) =>
      c.id === selected?.id ? selected : c
    );

    setContracts(updated);
    saveContracts(updated);
    setSelected(null);
  }

  return (
    <div className="mt-10 bg-slate-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Contratos</h3>

      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th>Cliente</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((c) => (
            <tr
              key={c.id}
              onClick={() => setSelected(c)}
              className="border-t border-slate-700 cursor-pointer hover:bg-slate-700 transition"
            >
              <td>{c.client}</td>
              <td className={c.status === "ativo" ? "text-green-400" : "text-red-400"}>
                {c.status}
              </td>
              <td>{c.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <h3 className="text-lg font-bold mb-4">
            Editar contrato
          </h3>

          <input
            className="w-full mb-3 p-2 rounded bg-slate-700"
            value={selected.client}
            onChange={(e) =>
              setSelected({ ...selected, client: e.target.value })
            }
          />

          <input
            className="w-full mb-3 p-2 rounded bg-slate-700"
            value={selected.value}
            onChange={(e) =>
              setSelected({ ...selected, value: e.target.value })
            }
          />

          <select
            className="w-full mb-4 p-2 rounded bg-slate-700"
            value={selected.status}
            onChange={(e) =>
              setSelected({ ...selected, status: e.target.value })
            }
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          <button
            onClick={handleSave}
            className="w-full bg-sky-400 text-black py-2 rounded font-semibold"
          >
            Salvar alterações
          </button>
        </Modal>
      )}
    </div>
  );
}

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
    <div
      className="
        relative mt-10

        bg-card/70 backdrop-blur-xl
        text-card-foreground

        border border-border/50
        rounded-xl p-6

        shadow-lg shadow-black/5

        transition-all duration-300

        hover:shadow-xl hover:shadow-primary/5
      "
    >
      <h3 className="text-lg font-semibold mb-4 tracking-tight">
        Contratos
      </h3>

      <table className="w-full">
        <thead>
          <tr className="
            text-left
            text-muted-foreground
            border-b border-border/50
          ">
            <th className="pb-3 font-medium">Cliente</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Valor</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((c) => (
            <tr
              key={c.id}
              onClick={() => setSelected(c)}
              className="
                group
                border-b border-border/30
                cursor-pointer

                transition-all duration-200 ease-out

                hover:bg-muted/40
                hover:scale-[1.005]
              "
            >
              <td className="py-4 font-medium">
                {c.client}
              </td>

              <td
                className={`
                  ${
                    c.status === "ativo"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }

                  transition-colors
                `}
              >
                {c.status}
              </td>

              <td className="font-medium">
                {c.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <h3 className="text-lg font-semibold mb-4">
            Editar contrato
          </h3>

          <input
            className="
              w-full mb-3 p-2 rounded-md

              bg-background/80 backdrop-blur
              border border-border/50

              focus:ring-2 focus:ring-primary/40
              outline-none
            "
            value={selected.client}
            onChange={(e) =>
              setSelected({ ...selected, client: e.target.value })
            }
          />

          <input
            className="
              w-full mb-3 p-2 rounded-md

              bg-background/80 backdrop-blur
              border border-border/50

              focus:ring-2 focus:ring-primary/40
              outline-none
            "
            value={selected.value}
            onChange={(e) =>
              setSelected({ ...selected, value: e.target.value })
            }
          />

          <select
            className="
              w-full mb-4 p-2 rounded-md

              bg-background/80 backdrop-blur
              border border-border/50

              focus:ring-2 focus:ring-primary/40
              outline-none
            "
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
            className="
              w-full

              bg-primary text-primary-foreground

              py-2 rounded-md font-semibold

              transition-all duration-200 ease-out

              hover:brightness-110
              hover:shadow-lg hover:shadow-primary/20
              hover:-translate-y-0.5

              active:translate-y-0
            "
          >
            Salvar alterações
          </button>
        </Modal>
      )}
    </div>
  );
}
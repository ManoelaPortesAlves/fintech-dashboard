export type Contract = {
  id: number;
  client: string;
  value: string;
  status: string;
};

const initialData: Contract[] = [
  { id: 1, client: "Banco Aurora", value: "R$ 12.400", status: "ativo" },
  { id: 2, client: "Finance Corp", value: "R$ 8.900", status: "ativo" },
  { id: 3, client: "XP Crédito", value: "R$ 4.200", status: "inativo" },
];

export function getContracts(): Contract[] {
  if (typeof window === "undefined") return initialData;

  const stored = localStorage.getItem("contracts");
  return stored ? JSON.parse(stored) : initialData;
}

export function saveContracts(data: Contract[]) {
  localStorage.setItem("contracts", JSON.stringify(data));
}

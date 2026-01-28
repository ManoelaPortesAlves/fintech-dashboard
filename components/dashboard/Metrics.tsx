export function Metrics() {
  const data = [
    { label: "Contratos Ativos", value: 1248 },
    { label: "Receita Mensal", value: "R$ 82.450" },
    { label: "Inadimplência", value: "2.1%" },
  ];

  return (
    <section className="grid grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.label}
          className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"  
        >
          <p className="text-slate-400">{item.label}</p>
          <strong className="text-2xl">{item.value}</strong>
        </div>
      ))}
    </section>
  );
}

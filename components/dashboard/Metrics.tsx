export function Metrics() {
  const data = [
    { label: "Contratos Ativos", value: 1248 },
    { label: "Receita Mensal", value: "R$ 82.450" },
    { label: "Inadimplência", value: "2.1%" },
  ];

  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-3 gap-6
        animate-in fade-in duration-700
      "
    >
      {data.map((item) => (
        <div
          key={item.label}
          className="
            relative

            bg-card/70 backdrop-blur-xl
            text-card-foreground

            border border-border/50
            rounded-xl p-6

            shadow-lg shadow-black/5

            transition-all duration-300 ease-out

            hover:shadow-xl hover:shadow-primary/10
            hover:-translate-y-1 hover:scale-[1.02]

            before:absolute before:inset-0
            before:rounded-xl
            before:bg-gradient-to-r
            before:from-primary/0
            before:via-primary/5
            before:to-primary/0
            before:opacity-0
            before:transition-opacity
            hover:before:opacity-100
          "
        >
          <p className="text-muted-foreground text-sm">
            {item.label}
          </p>

          <strong
            className="
              text-2xl font-semibold mt-1 block
              tracking-tight
            "
          >
            {item.value}
          </strong>
        </div>
      ))}
    </section>
  );
}
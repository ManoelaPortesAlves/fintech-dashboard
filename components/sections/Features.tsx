export function Features() {
  const items = ["Performance", "Segurança", "Produtividade"];

  return (
    <section className="flex gap-6 px-16 pb-32 bg-background">
      {items.map((item) => (
        <div
          key={item}
          className="
            bg-card text-card-foreground
            border border-border
            p-6 rounded-xl flex-1
            shadow-sm
            transition hover:shadow-md
          "
        >
          <h3 className="text-lg font-semibold">
            {item}
          </h3>

          <p className="mt-2 text-muted-foreground">
            Ferramentas pensadas para escalar operações financeiras com qualidade.
          </p>
        </div>
      ))}
    </section>
  );
}
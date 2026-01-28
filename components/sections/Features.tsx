export function Features() {
  const items = ["Performance", "Segurança", "Produtividade"];

  return (
    <section className="flex gap-6 px-16 pb-32 bg-slate-800 text-white">
      {items.map((item) => (
        <div
          key={item}
          className="bg-slate-700 p-6 rounded-xl flex-1"
        >
          <h3 className="text-lg font-semibold">{item}</h3>
          <p className="mt-2 text-slate-300">
            Ferramentas pensadas para escalar operações financeiras com qualidade.
          </p>
        </div>
      ))}
    </section>
  );
}

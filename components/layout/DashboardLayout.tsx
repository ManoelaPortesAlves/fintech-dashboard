import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen relative">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <main
          className="
            flex-1 p-6
            relative
            bg-gradient-to-br
            from-background
            via-background
            to-muted/30
          "
        >
          {/* emerald accent */}
          <div
            className="
              absolute inset-x-0 top-0 h-32
              bg-gradient-to-b from-primary/10 to-transparent
              pointer-events-none
            "
          />

          <div className="relative z-10">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}
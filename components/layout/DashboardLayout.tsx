import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: 24 }}>{children}</main>
      </div>
    </div>
  );
}

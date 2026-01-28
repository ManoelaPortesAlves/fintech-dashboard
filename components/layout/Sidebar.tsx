import Link from "next/link";

export function Sidebar() {
  return (
    <aside style={{ width: 200, background: "#111", color: "#fff", padding: 16 }}>
      <h3>Menu</h3>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  );
}

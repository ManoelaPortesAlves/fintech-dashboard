import Link from "next/link";

export function Sidebar() {
  return (
    <aside
      className="
        w-56
        bg-sidebar/70 backdrop-blur-xl
        border-r border-sidebar-border/50
        min-h-screen
        p-4
      "
    >
      <h3 className="font-semibold mb-6 text-sidebar-foreground">
        Fintech Pro
      </h3>

      <nav className="flex flex-col gap-2">
        <Link
          href="/dashboard"
          className="
            px-3 py-2 rounded-lg
            hover:bg-sidebar-accent
            hover:text-sidebar-accent-foreground
            transition
          "
        >
          Dashboard
        </Link>
      </nav>
    </aside>
  );
}
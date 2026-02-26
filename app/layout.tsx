import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/hooks/useTheme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body
        suppressHydrationWarning
        className="
          font-sans
          text-foreground
          antialiased
          min-h-screen
          bg-gradient-to-br
          from-background
          via-background
          to-muted/40
          relative
        "
      >
        {/* emerald glow */}
        <div
          className="
            fixed inset-0 pointer-events-none
            bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]
          "
        />

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
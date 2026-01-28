import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

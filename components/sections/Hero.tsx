"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="
        px-16 py-32
        bg-gradient-to-b
        from-background
        to-muted
        text-foreground
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold max-w-3xl"
      >
        Plataforma inteligente para gestão financeira
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-muted-foreground max-w-xl"
      >
        Controle contratos, clientes e indicadores em um único painel moderno,
        rápido e seguro.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10"
      >
        <Link
          href="/dashboard"
          className="
            inline-flex items-center
            bg-primary text-primary-foreground
            px-6 py-3
            rounded-lg
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Começar agora
        </Link>
      </motion.div>
    </section>
  );
}
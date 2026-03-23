"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(0,0,0,0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="flex justify-between items-center mx-auto"
        style={{
          height: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          maxWidth: "1280px",
        }}
      >
        {/* Logo */}
        <Image
          src="/dfn.tutorjs/Logo-laranja.png"
          alt="Logo DFN"
          width={120}
          height={40}
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Links desktop */}
        <div className="hidden md:flex items-center" style={{ gap: "32px" }}>
          <a
            href="#metodologia"
            className="uppercase text-white/70 hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              letterSpacing: "0.1em",
            }}
          >
            Metodologia
          </a>
          <a
            href="#recursos"
            className="uppercase text-white/70 hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              letterSpacing: "0.1em",
            }}
          >
            Recursos
          </a>
          <a
            href="#precos"
            className="uppercase text-white/70 hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              letterSpacing: "0.1em",
            }}
          >
            Planos
          </a>
          <a
            href="#faq"
            className="uppercase text-white/70 hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              letterSpacing: "0.1em",
            }}
          >
            FAQ
          </a>
        </div>

        {/* Botao CTA navbar */}
        <motion.a
          href="#precos"
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="rounded-full text-white uppercase cursor-pointer"
          style={{
            backgroundColor: "#FF4500",
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            letterSpacing: "0.1em",
            padding: "12px 24px",
          }}
        >
          Começar Agora
        </motion.a>
      </div>
    </nav>
  );
}

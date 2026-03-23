"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden" style={{ paddingTop: "128px", paddingBottom: "80px" }}>
      {/* Orange Glow fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,69,0,0.08) 0%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Container grid 2 colunas */}
      <div
        className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center"
        style={{
          maxWidth: "1280px",
          paddingLeft: "24px",
          paddingRight: "24px",
          gap: "48px",
        }}
      >
        {/* Coluna esquerda — Texto */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <AnimateOnScroll delay={0}>
            <span
              className="inline-block rounded-full bg-white/5 text-white uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                padding: "6px 16px",
                border: "1px solid rgba(255,255,255,0.2)",
                marginBottom: "24px",
                fontFamily: "var(--font-sans)",
              }}
            >
              Disponível direto no WhatsApp
            </span>
          </AnimateOnScroll>

          {/* Headline */}
          <AnimateOnScroll delay={1}>
            <h1
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.04em",
                marginBottom: "24px",
              }}
            >
              APRENDA INGLÊS{" "}
              <span style={{ color: "#FF4500" }}>FALANDO</span>{" "}
              DESDE O PRIMEIRO DIA
            </h1>
          </AnimateOnScroll>

          {/* Subheadline */}
          <AnimateOnScroll delay={2}>
            <p
              className="text-white/70"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "1.4",
                maxWidth: "480px",
                marginBottom: "40px",
                fontWeight: 500,
              }}
            >
              Pratique inglês de verdade com o único Tutor que não te deixa travado.
              Uma experiencia imersiva direto no seu WhatsApp.
            </p>
          </AnimateOnScroll>

          {/* CTA com glow */}
          <AnimateOnScroll delay={3}>
            <div className="relative group">
              {/* Glow atras do botao */}
              <div
                className="absolute rounded-full opacity-25 group-hover:opacity-50 transition-opacity"
                style={{
                  inset: "-4px",
                  background: "#3edfaa",
                  filter: "blur(16px)",
                  transitionDuration: "1000ms",
                }}
                aria-hidden="true"
              />
              <CTAButton className="relative flex items-center gap-3" />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Coluna direita — Mockup celular */}
        <AnimateOnScroll delay={2} className="relative flex justify-center">
          {/* Glow atras do celular */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "-80px",
              background: "rgba(255,69,0,0.1)",
              filter: "blur(80px)",
            }}
            aria-hidden="true"
          />

          {/* Mascote como imagem principal */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Image
              src="/dfn.tutorjs/WhatsApp Image 2026-03-12 at 14.41.57 (2).jpeg"
              alt="Mascote Tutor DFN"
              width={420}
              height={500}
              className="relative z-10 drop-shadow-2xl"
              style={{
                objectFit: "contain",
                maxWidth: "340px",
                width: "100%",
                borderRadius: "3rem",
              }}
              priority
            />

            {/* Mockup celular placeholder (sobreposto ao mascote) */}
            <div
              className="absolute z-20 rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                width: "160px",
                height: "300px",
                bottom: "5%",
                right: "-20%",
                border: "8px solid #27272a",
                background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="text-white/20 text-center"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  padding: "12px",
                  lineHeight: "1.3",
                }}
              >
                Mockup WhatsApp
                (aguardando imagem)
              </span>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

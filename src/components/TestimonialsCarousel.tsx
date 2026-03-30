"use client";

import { useState, useRef, useCallback } from "react";

const testimonials = [
  {
    text: "O Tutor DFN me deu a confiança que faltava para pregar em uma conferência na África do Sul. A IA entende os termos bíblicos melhor que qualquer professor que já tive.",
    name: "Pr. Ricardo Silva",
    role: "Missão Global",
    initials: "RS",
  },
  {
    text: "Estudar inglês sempre foi um peso, mas com os cenários de Boardroom eu finalmente consegui me comunicar com parceiros internacionais do meu ministério.",
    name: "Ana Luiza Mello",
    role: "Coordenadora de Projetos",
    initials: "AM",
  },
  {
    text: "Uso o Street Talk todos os dias antes de sair para o campo. É como ter um amigo nativo te dando dicas reais de como as pessoas falam na rua.",
    name: "Gabriel Santos",
    role: "Missionário de Campo",
    initials: "GS",
  },
];

const items = [...testimonials, ...testimonials];

function Card({ t, compact = false }: { t: typeof testimonials[0]; compact?: boolean }) {
  return (
    <>
      <p
        className="text-black/70 italic text-[13px] md:text-base mb-3 md:mb-8"
        style={{
          fontFamily: "var(--font-body)",
          lineHeight: "1.4",
          display: compact ? "-webkit-box" : "block",
          WebkitLineClamp: compact ? 3 : undefined,
          WebkitBoxOrient: compact ? "vertical" : undefined,
          overflow: compact ? "hidden" : "visible",
        }}
      >
        &quot;{t.text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#FF4500]/15 flex items-center justify-center text-[#FF4500] font-bold text-xs md:text-sm shrink-0"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-black text-[13px] md:text-base" style={{ fontFamily: "var(--font-body)" }}>
            {t.name}
          </p>
          <p className="text-[9px] md:text-xs text-[#FF4500] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
            {t.role}
          </p>
        </div>
      </div>
    </>
  );
}

export default function TestimonialsCarousel() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const isPaused = expanded !== null;
  const expandedItem = expanded !== null ? testimonials[expanded % testimonials.length] : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = useCallback((i: number, el: HTMLDivElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Offset from viewport center
    const offsetX = centerX - window.innerWidth / 2;
    const offsetY = centerY - window.innerHeight / 2;
    setOrigin({ x: offsetX, y: offsetY });
    setExpanded(i);
  }, []);

  return (
    <div className="overflow-hidden -mx-4 relative">
      <div
        className="flex gap-4 px-4 testimonials-scroll"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            onClick={() => handleClick(i, cardRefs.current[i])}
            className="shrink-0 rounded-xl md:rounded-2xl border border-black/5 bg-white flex flex-col justify-between cursor-pointer"
            style={{
              borderLeft: "3px solid #FF4500",
              width: "clamp(260px, 65vw, calc(33.333vw - 2rem))",
              padding: "clamp(16px, 2vw, 32px) clamp(18px, 2vw, 32px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Card t={t} compact />
          </div>
        ))}
      </div>

      {/* Expanded overlay — card salta da posição original para o centro */}
      {expandedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          onClick={() => setExpanded(null)}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />
          <div
            className="relative bg-white rounded-2xl flex flex-col justify-between w-full max-w-[85vw]"
            style={{
              borderLeft: "4px solid #FF4500",
              padding: "24px",
              boxShadow: "0 20px 60px rgba(255,69,0,0.2)",
              animation: "cardLeap 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              ["--from-x" as string]: `${origin.x}px`,
              ["--from-y" as string]: `${origin.y}px`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card t={expandedItem} />
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/5 flex items-center justify-center text-black/40 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

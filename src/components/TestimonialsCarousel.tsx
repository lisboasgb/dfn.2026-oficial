"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const testimonials = [
  {
    text: "Muito melhor do que eu imaginei, eu consigo conversar sobre vários temas e assuntos",
    name: "Kelly Fernandes",
    role: "",
    initials: "KF",
  },
  {
    text: "Achei incrível, responde com áudio como se fosse conversando com uma pessoa no Wpp, e ainda corrige meus erros de inglês, perfeito!!",
    name: "Jordanna Lissa",
    role: "",
    initials: "JL",
  },
  {
    text: "Maravilhoso, conversei com ele e nem vi o tempo passar, melhor maneira de aprender inglês com conversação",
    name: "Matheus Nass",
    role: "",
    initials: "MN",
  },
  {
    text: "Excelente! Em minutos tirou várias dúvidas sobre como responder em inglês durante uma reunião de trabalho",
    name: "Gabriel Lisboa",
    role: "",
    initials: "GL",
  },
];

// Enough copies so the track is always wider than the viewport
const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

function Card({ t, compact = false }: { t: typeof testimonials[0]; compact?: boolean }) {
  return (
    <>
      <div className="flex gap-0.5 mb-2 md:mb-3">
        {[1,2,3,4,5].map((s) => (
          <svg key={s} width="14" height="14" viewBox="0 0 20 20" fill="#FF4500" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"/>
          </svg>
        ))}
      </div>
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
        <div>
          <p className="font-bold text-black text-[13px] md:text-base" style={{ fontFamily: "var(--font-body)" }}>
            {t.name}
          </p>
        </div>
      </div>
    </>
  );
}

const SPEED = 0.6; // px per frame

export default function TestimonialsCarousel() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const isPaused = expanded !== null;
  const expandedItem = expanded !== null ? testimonials[expanded % testimonials.length] : null;

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused) {
        offsetRef.current += SPEED;
        // Width of one full set of testimonials (including gaps)
        const firstCard = track.children[0] as HTMLElement;
        if (!firstCard) { rafRef.current = requestAnimationFrame(animate); return; }
        const gap = 16; // gap-4 = 16px
        const setWidth = testimonials.length * (firstCard.offsetWidth + gap);
        // Reset offset once we've scrolled one full set — seamlessly loops to identical content
        if (offsetRef.current >= setWidth) {
          offsetRef.current -= setWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  const handleClick = useCallback((i: number, el: HTMLDivElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = centerX - window.innerWidth / 2;
    const offsetY = centerY - window.innerHeight / 2;
    setOrigin({ x: offsetX, y: offsetY });
    setExpanded(i);
  }, []);

  return (
    <div className="relative" style={{ overflow: "hidden", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
      <div
        ref={trackRef}
        className="flex gap-4"
        style={{ willChange: "transform", paddingLeft: "calc(50vw - 50%)", paddingRight: "calc(50vw - 50%)" }}
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

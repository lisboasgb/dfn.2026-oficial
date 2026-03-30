"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const waveHeights = [7, 12, 5, 10, 14, 6, 11, 8, 13, 5, 9, 14, 6, 10, 7, 12, 8, 11, 5, 13];

const chatVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const bubbleFade = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  images?: string[];
}

export default function PhoneMockup({ children, className = "", images }: PhoneMockupProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasCarousel = images && images.length > 1;

  return (
    <div className={`relative transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 ${className}`}>
      {/* ---- iPhone physical buttons (titanium) ---- */}
      <div className="absolute pointer-events-none z-20" style={{ left: "-4px", top: "0", width: "calc(100% + 8px)", height: "100%" }}>
        <div
          className="absolute -left-[1px] top-[100px] lg:top-[115px] w-[3px] h-[20px] rounded-l-[2px]"
          style={{ background: "linear-gradient(180deg, #B8B8BC, #8E8E93, #A0A0A5)", boxShadow: "-1px 0 2px rgba(0,0,0,0.3)" }}
        />
        <div
          className="absolute -left-[1px] top-[140px] lg:top-[158px] w-[3px] h-[34px] rounded-l-[2px]"
          style={{ background: "linear-gradient(180deg, #B8B8BC, #8E8E93, #A0A0A5)", boxShadow: "-1px 0 2px rgba(0,0,0,0.3)" }}
        />
        <div
          className="absolute -left-[1px] top-[182px] lg:top-[202px] w-[3px] h-[34px] rounded-l-[2px]"
          style={{ background: "linear-gradient(180deg, #B8B8BC, #8E8E93, #A0A0A5)", boxShadow: "-1px 0 2px rgba(0,0,0,0.3)" }}
        />
        <div
          className="absolute -right-[1px] top-[155px] lg:top-[175px] w-[3px] h-[44px] rounded-r-[2px]"
          style={{ background: "linear-gradient(180deg, #B8B8BC, #8E8E93, #A0A0A5)", boxShadow: "1px 0 2px rgba(0,0,0,0.3)" }}
        />
      </div>

      <div
        className="rounded-[52px] w-[300px] h-[610px] lg:w-[340px] lg:h-[690px] relative overflow-hidden flex flex-col cursor-default shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
      >
        {/* Titanium frame layers */}
        <div
          className="absolute inset-0 rounded-[52px]"
          style={{ background: "linear-gradient(145deg, #D4D4D8 0%, #A1A1AA 20%, #71717A 50%, #A1A1AA 80%, #D4D4D8 100%)" }}
        />
        <div
          className="absolute inset-0 rounded-[52px] pointer-events-none"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.25), inset -1px 0 0 rgba(255,255,255,0.25)" }}
        />
        <div
          className="absolute inset-0 rounded-[52px] pointer-events-none z-30"
          style={{ boxShadow: "0 0 0 0.5px rgba(0,0,0,0.4)" }}
        />
        {/* Black bezel */}
        <div
          className="absolute inset-[8px] rounded-[44px] pointer-events-none z-10"
          style={{ background: "#000", boxShadow: "inset 0 0 4px rgba(0,0,0,0.9)" }}
        />

        {/* Screen area */}
        <div className="absolute inset-[10px] rounded-[42px] overflow-hidden flex flex-col bg-black z-20">
          {images ? (
            /* ---- IMAGE / CAROUSEL MODE ---- */
            <div className="relative w-full h-full">
              <img
                src={images[currentSlide]}
                alt="Print WhatsApp Tutor DFN"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            /* ---- ORIGINAL WHATSAPP UI MODE ---- */
            <>
              {/* Status bar */}
              <div className="bg-[#F0F2F5] px-5 pt-3 pb-0 flex items-center justify-between shrink-0">
                <span className="text-black text-[13px] font-semibold w-12">10:50</span>
                {/* Dynamic Island */}
                <div className="w-[80px] h-[22px] bg-black rounded-full" />
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <div className="flex items-end gap-[1.5px]">
                    <div className="w-[3px] h-[4px] bg-black rounded-[0.5px]" />
                    <div className="w-[3px] h-[6px] bg-black rounded-[0.5px]" />
                    <div className="w-[3px] h-[8px] bg-black rounded-[0.5px]" />
                    <div className="w-[3px] h-[10px] bg-black/30 rounded-[0.5px]" />
                  </div>
                  <span className="text-black text-[10px] font-bold">5G</span>
                  <div className="flex items-center gap-[1px]">
                    <div className="w-[20px] h-[10px] border border-black/50 rounded-[2.5px] p-[1.5px]">
                      <div className="bg-white h-full w-[70%] rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-[4px] bg-black/40 rounded-r-full" />
                  </div>
                </div>
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#F0F2F5] px-2 py-1.5 flex items-center gap-1.5 shrink-0 border-b border-black/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#00A884] shrink-0">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex items-center gap-2 flex-1 min-w-0 cursor-default">
                  <img src="/tutor-dfn-avatar.png" alt="Tutor DFN" className="w-8 h-8 rounded-full object-cover shrink-0" loading="lazy" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-black font-medium text-[14px] leading-tight truncate">Tutor DFN</span>
                    <span className="text-[11px] text-[#667781] leading-tight">@tutordfn</span>
                  </div>
                </div>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="text-[#54656F] shrink-0">
                  <path d="M15.5 5H4a2 2 0 00-2 2v10a2 2 0 002 2h11.5a2 2 0 002-2V7a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M17.5 9.5l4-2.5v10l-4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-[#54656F] shrink-0 ml-1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Chat area */}
              {children ? (
                <div className="flex-1 overflow-hidden relative" style={{ background: "#ECE5DD" }}>
                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cdefs%3E%3Cstyle%3Etext%7Bfont-family:sans-serif;font-size:11px;fill:%23546E7A%7D%3C/style%3E%3C/defs%3E%3Ctext x='8' y='18'%3E%F0%9F%93%B1%3C/text%3E%3Ctext x='55' y='42'%3E%E2%9C%89%EF%B8%8F%3C/text%3E%3Ctext x='110' y='22'%3E%F0%9F%94%92%3C/text%3E%3Ctext x='160' y='48'%3E%E2%8F%B0%3C/text%3E%3Ctext x='210' y='25'%3E%F0%9F%93%8E%3C/text%3E%3Ctext x='260' y='45'%3E%F0%9F%8E%B5%3C/text%3E%3C/svg%3E")`,
                    backgroundSize: "300px 300px",
                  }} />
                  <div className="relative z-10 h-full p-3 flex flex-col gap-2.5">
                    {children}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center" style={{ background: "#ECE5DD" }}>
                  <span className="text-[#667781] text-sm">Tutor DFN</span>
                </div>
              )}

              {/* Input bar */}
              <div className="bg-[#F0F2F5] px-2 py-1.5 flex items-center gap-2 shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#54656F] shrink-0">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="flex-1 bg-white rounded-full px-3 py-2 flex items-center gap-2 border border-[#E9EDEF]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8696A0] shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9" cy="10" r="1" fill="currentColor"/>
                    <circle cx="15" cy="10" r="1" fill="currentColor"/>
                  </svg>
                  <span className="text-[12px] text-[#8696A0] flex-1">Mensagem</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#8696A0] shrink-0">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#54656F] shrink-0">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#54656F] shrink-0">
                  <rect x="9" y="1" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 10a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 17v4M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Home indicator */}
              <div className="bg-[#F0F2F5] flex justify-center pb-2 pt-1 shrink-0">
                <div className="w-[100px] h-[4px] bg-black/20 rounded-full" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Carousel controls OUTSIDE the phone */}
      {hasCarousel && (
        <>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center text-black/60 hover:bg-black/20 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center text-black/60 hover:bg-black/20 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-[#FF4500] scale-110" : "bg-black/20"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

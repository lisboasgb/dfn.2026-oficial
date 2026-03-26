"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
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
        <div className="absolute inset-[10px] rounded-[42px] overflow-hidden flex flex-col bg-white z-20">
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
            <div
              className="flex-1 p-3 flex flex-col gap-2 overflow-hidden relative"
              style={{ background: "#ECE5DD" }}
            >
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cdefs%3E%3Cstyle%3Etext%7Bfont-family:sans-serif;font-size:11px;fill:%23546E7A%7D%3C/style%3E%3C/defs%3E%3Ctext x='8' y='18'%3E%F0%9F%93%B1%3C/text%3E%3Ctext x='55' y='42'%3E%E2%9C%89%EF%B8%8F%3C/text%3E%3Ctext x='110' y='22'%3E%F0%9F%94%92%3C/text%3E%3Ctext x='160' y='48'%3E%E2%8F%B0%3C/text%3E%3Ctext x='210' y='25'%3E%F0%9F%93%8E%3C/text%3E%3Ctext x='260' y='45'%3E%F0%9F%8E%B5%3C/text%3E%3Ctext x='25' y='78'%3E%F0%9F%92%AC%3C/text%3E%3Ctext x='80' y='95'%3E%F0%9F%93%9E%3C/text%3E%3Ctext x='140' y='80'%3E%E2%AD%90%3C/text%3E%3Ctext x='195' y='98'%3E%F0%9F%93%B7%3C/text%3E%3Ctext x='245' y='82'%3E%F0%9F%94%94%3C/text%3E%3Ctext x='12' y='130'%3E%F0%9F%93%96%3C/text%3E%3Ctext x='65' y='148'%3E%E2%99%A5%3C/text%3E%3Ctext x='120' y='135'%3E%F0%9F%8C%8D%3C/text%3E%3Ctext x='170' y='152'%3E%F0%9F%93%9D%3C/text%3E%3Ctext x='225' y='138'%3E%F0%9F%8E%A4%3C/text%3E%3Ctext x='275' y='155'%3E%F0%9F%91%8B%3C/text%3E%3Ctext x='35' y='185'%3E%F0%9F%94%8A%3C/text%3E%3Ctext x='90' y='200'%3E%F0%9F%93%8C%3C/text%3E%3Ctext x='150' y='188'%3E%F0%9F%92%A1%3C/text%3E%3Ctext x='205' y='202'%3E%F0%9F%96%8A%3C/text%3E%3Ctext x='258' y='190'%3E%F0%9F%93%A2%3C/text%3E%3Ctext x='15' y='240'%3E%E2%9C%85%3C/text%3E%3Ctext x='70' y='255'%3E%F0%9F%93%8A%3C/text%3E%3Ctext x='130' y='242'%3E%F0%9F%94%97%3C/text%3E%3Ctext x='185' y='258'%3E%F0%9F%93%85%3C/text%3E%3Ctext x='240' y='245'%3E%F0%9F%92%AD%3C/text%3E%3Ctext x='40' y='290'%3E%F0%9F%93%A3%3C/text%3E%3Ctext x='100' y='288'%3E%E2%9C%8F%EF%B8%8F%3C/text%3E%3Ctext x='165' y='295'%3E%F0%9F%94%8D%3C/text%3E%3Ctext x='230' y='285'%3E%F0%9F%93%B0%3C/text%3E%3C/svg%3E")`,
                backgroundSize: "300px 300px",
              }} />

              {/* Aluno message (green, right) */}
              <div className="self-end max-w-[85%] relative z-10">
                <div className="bg-[#D9FDD3] rounded-lg rounded-tr-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  I did a missionary travel to Malawi last year and I very liked to help the people.
                  <span className="flex items-center justify-end gap-1 mt-0.5">
                    <span className="text-[10px] text-[#667781]">10:16</span>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M11.07 0.73L4.44 7.36L1.93 4.85L0.5 6.28L4.44 10.22L12.5 2.16L11.07 0.73ZM14.07 0.73L7.44 7.36L6.03 5.96L4.6 7.39L7.44 10.22L15.5 2.16L14.07 0.73Z" fill="#53BDEB"/></svg>
                  </span>
                </div>
              </div>

              {/* Tutor correction (white, left) */}
              <div className="self-start max-w-[85%] relative z-10">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  Uma forma mais natural de dizer isso é:
                  <br /><br />
                  <strong>I went on a missionary trip to Malawi last year and I really liked helping the people.</strong>
                  <span className="block text-right mt-0.5">
                    <span className="text-[10px] text-[#667781]">10:17</span>
                  </span>
                </div>
              </div>

              {/* Tutor follow-up (white, left) */}
              <div className="self-start max-w-[85%] relative z-10">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  What kind of work did you do there?
                  <span className="block text-right mt-0.5">
                    <span className="text-[10px] text-[#667781]">10:17</span>
                  </span>
                </div>
              </div>

              {/* Aluno audio (green, right) */}
              <div className="self-end max-w-[80%] relative z-10">
                <div className="bg-[#D9FDD3] rounded-lg rounded-tr-none px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#54656F" className="shrink-0"><path d="M8 5v14l11-7z"/></svg>
                    <div className="flex items-center gap-[1px] flex-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-[2.5px] rounded-full bg-[#6BC17F]" style={{ height: `${4 + Math.random() * 10}px` }} />
                      ))}
                    </div>
                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                      <img src="/estudante.png" alt="Aluno" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] text-[#667781]">0:08</span>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M11.07 0.73L4.44 7.36L1.93 4.85L0.5 6.28L4.44 10.22L12.5 2.16L11.07 0.73ZM14.07 0.73L7.44 7.36L6.03 5.96L4.6 7.39L7.44 10.22L15.5 2.16L14.07 0.73Z" fill="#53BDEB"/></svg>
                  </div>
                </div>
              </div>

              {/* Tutor audio (neutral/white, left) */}
              <div className="self-start max-w-[80%] relative z-10">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#54656F" className="shrink-0"><path d="M8 5v14l11-7z"/></svg>
                    <div className="flex items-center gap-[1px] flex-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-[2.5px] rounded-full bg-[#8696A0]" style={{ height: `${4 + Math.random() * 10}px` }} />
                      ))}
                    </div>
                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                      <img src="/tutor-dfn-avatar.png" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-[10px] text-[#667781] mt-0.5 block">0:12</span>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
}

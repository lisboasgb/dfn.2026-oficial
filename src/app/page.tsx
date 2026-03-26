"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import PhoneMockup from "@/components/PhoneMockup";
import {
  ArrowRight,
  Ban,
  Clock,
  Frown,
  DollarSign,
  CircleStop,
  CircleCheck,
  Rocket,
  BarChart3,
  TrendingUp,
  RotateCcw,
  MessageCircle,
  BookOpen,
  Briefcase,
  CheckCircle2,
  XCircle,
  Check,
  Lock,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Fundo Escuro) */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-40 bg-[#FDFCFB] dot-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/15 bg-black/5 font-extrabold uppercase tracking-[0.15em] text-xs text-black" style={{ fontFamily: "var(--font-headline)" }}>
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              Disponível direto no WhatsApp
            </div>
            <h1 className="font-black text-black tracking-normal mb-3" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.15", fontSize: "clamp(1.75rem, 7vw, 5rem)" }}>
              APRENDA INGLÊS FALANDO<br /> <span className="bg-[#FF4500] text-white px-2 py-0.5 sm:px-3 sm:py-1 inline-block mt-1">DESDE O PRIMEIRO DIA</span>
            </h1>
            <p className="text-black/60 text-base sm:text-lg md:text-xl max-w-lg mb-8 sm:mb-10 font-bold" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Pratique inglês de <span className="text-[#FF4500]">verdade</span><br />
              Com o único <span className="text-[#FF4500]">Tutor</span> que não te deixa travado<br />
              <span className="text-[#FF4500]">Corrigindo</span> e ensinando em tempo real
            </p>
            <a
              href="#precos"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
              <ArrowRight size={20} />
            </a>
            <div className="mt-6 text-black/30 font-bold text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-headline)" }}>
              Aprenda Inglês IA
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-20 bg-[#FF4500]/10 rounded-full blur-3xl" />
            <Image
              src="/tutor-prototipo.webp"
              alt="Tutor DFN"
              width={500}
              height={500}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-md h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Ticker: Hero → Problema */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>Tutor DFN &bull; Aprenda Inglês Falando &bull; </span>
          ))}
        </div>
      </div>

      {/* 3. Secao Problema (Fundo Escuro) */}
      <section className="relative bg-black overflow-hidden" style={{ paddingTop: "clamp(48px, 8vw, 96px)", paddingBottom: "clamp(48px, 8vw, 96px)" }}>
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna esquerda — Headline */}
          <div className="flex flex-col justify-between text-center md:text-left items-center md:items-start">
            <div>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 uppercase text-xs text-white" style={{ fontFamily: "var(--font-headline)", fontWeight: 800, letterSpacing: "0.15em" }}>
                O PROBLEMA REAL
              </div>
              <h2 className="font-black text-white tracking-normal" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 5.5vw, 3.5rem)", lineHeight: "1.15", marginBottom: "16px" }}>
                NO BRASIL ENSINAM INGLÊS<br />
                NO PAPEL.<br />
                <span className="text-[#FF4500] italic">NA HORA DE FALAR,<br />
                TODOS TRAVAM.</span>
              </h2>
              <p className="text-white/50 italic font-medium mx-auto lg:mx-0" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.4", maxWidth: "420px" }}>
                O país com mais escolas de inglês do mundo e apenas 2% são fluentes. No fim é muita teoria e pouca prática.
              </p>
            </div>
          </div>

          {/* Coluna direita — 6 cards empilhados */}
          <div className="flex flex-col px-2 sm:px-0" style={{ gap: "12px" }}>
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <Ban className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Escolas tradicionais focam na <strong className="text-white">gramática</strong> e não te ensinam a conversar
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <DollarSign className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Aulas de conversação <strong className="text-white">custam caro</strong> e dependem de agenda
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <Clock className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Sem praticar todo dia, você <strong className="text-white">não expande vocabulário</strong> nem fixa os aprendizados
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <Frown className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Em turma, o professor não tem como te corrigir o tempo todo — quando tem prática, <strong className="text-white">você fala pouco</strong>
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <XCircle className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Sem correção em tempo real, você <strong className="text-white">não sabe seus erros</strong> e os repete sem perceber
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white/5 border border-white/10 rounded-xl flex items-start hover:bg-white/10 hover:-translate-y-1 active:bg-white/10 active:-translate-y-1 transition-all duration-200 cursor-default" style={{ padding: "16px 16px", gap: "12px", borderLeft: "4px solid #FF4500" }}>
              <Ban className="text-[#FF4500] shrink-0 mt-0.5" size={20} />
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Falar para o espelho ou repetir frases gravadas <strong className="text-white">não simula uma conversa de verdade</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Texto transição + CTA — centralizado abaixo dos blocos */}
        <div className="flex flex-col items-center text-center mt-12" style={{ gap: "20px" }}>
          <p className="text-[#FF4500] font-bold text-base sm:text-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-headline)" }}>
            O Tutor DFN resolve todos esses problemas
          </p>
          <a
            href="#precos"
            className="cta-btn cta-orange rounded-full max-w-xs sm:max-w-md font-bold uppercase cursor-pointer text-center"
            style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2vw, 1.3rem)", padding: "14px 28px" }}
          >
            QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} />
          </a>
        </div>
      </section>

      {/* Ticker: Problema → O que é */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>Seu Tutor de IA no WhatsApp &bull; 15 minutos por dia &bull; </span>
          ))}
        </div>
      </div>

      {/* 4. Secao O que e o Tutor DFN (Fundo Claro) - Z-pattern */}
      <section className="relative py-24 md:py-32 bg-[#FDFCFB] dot-pattern overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 font-extrabold uppercase tracking-[0.15em] text-xs text-black" style={{ fontFamily: "var(--font-headline)" }}>
            O QUE É O TUTOR DFN
          </div>
          <h2 className="font-black text-black text-2xl sm:text-3xl md:text-6xl mb-8 leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
            SEU TUTOR DE IA <span className="bg-[#FF4500] text-white px-3 py-1 sm:px-5 sm:py-2 ml-1 sm:ml-1.5 inline-block mt-1 sm:mt-0">NO WHATSAPP</span>
          </h2>
          <p className="text-black/60 text-base sm:text-xl mb-12 md:mb-24 max-w-2xl font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
            O Tutor DFN é um assistente de conversação em inglês movido por inteligência artificial. Sem instalar app novo. Sem desculpa. Só você, o WhatsApp e 15 minutos por dia.
          </p>

          {/* Z-pattern list */}
          <div className="space-y-16 md:space-y-32">
            {/* Row 1: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>01</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>MANDE TEXTO OU ÁUDIO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Em inglês, no nível que você estiver. Pode errar. Pode travar. O tutor já espera isso e começa a trabalhar com o que você mandou.
                  <br /><br />
                  Funciona com <strong className="text-black">mensagem de texto ou áudio gravado</strong>, você escolhe o que for mais fácil no momento.
                </p>
              </div>
              <div className="flex justify-center">
                <PhoneMockup />
              </div>
            </div>

            {/* Row 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="order-2 md:order-1 flex justify-center">
                <PhoneMockup>
                  {/* Aluno message (green, right) */}
                  <div className="self-end max-w-[85%]">
                    <div className="bg-[#D9FDD3] rounded-lg rounded-tr-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      When I was child, I play soccer every day.
                      <span className="flex items-center justify-end gap-1 mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:35</span>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M11.07 0.73L4.44 7.36L1.93 4.85L0.5 6.28L4.44 10.22L12.5 2.16L11.07 0.73ZM14.07 0.73L7.44 7.36L6.03 5.96L4.6 7.39L7.44 10.22L15.5 2.16L14.07 0.73Z" fill="#53BDEB"/></svg>
                      </span>
                    </div>
                  </div>
                  {/* Tutor correction + continuation (white, left) */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <span className="text-[11px] font-bold text-[#667781] uppercase tracking-wide">Correção</span>
                      <p className="mt-1"><strong>&quot;When I was a child, I played soccer every day.&quot;</strong></p>
                      <p className="mt-1.5 text-[#667781] text-[12px]">Faltou o artigo &quot;a&quot; e o verbo precisa estar no passado.</p>
                      <div className="border-t border-black/5 mt-2 pt-2">
                        <span className="text-[11px] font-bold text-[#667781] uppercase tracking-wide">Continuação</span>
                        <p className="mt-1">Do you still play soccer nowadays?</p>
                      </div>
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:35</span>
                      </span>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>02</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RECEBA CORREÇÃO E CONTINUE CONVERSANDO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  O tutor identifica cada erro de gramática e vocabulário, explica em português o que estava errado e como corrigir.
                  <br /><br />
                  Na sequência já manda a próxima pergunta para você continuar praticando. Nenhum erro passa. Nenhuma prática é interrompida.
                </p>
              </div>
            </div>

            {/* Row 3: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>03</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>VEJA SUA NOTA DE PRECISÃO EM TEMPO REAL</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Depois de cada áudio, você recebe um scorecard visual com sua porcentagem de acerto, o que você disse e a forma correta.
                  <br /><br />
                  A correção é feita em relação à sua pronúncia e à sua gramática aplicada. Verde, amarelo ou vermelho... Você sabe exatamente como está.
                </p>
              </div>
              <div className="flex justify-center">
                <PhoneMockup>
                  {/* 1. Tutor audio — propõe frase */}
                  <div className="self-start max-w-[80%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#54656F" className="shrink-0"><path d="M8 5v14l11-7z"/></svg>
                        <div className="flex items-center gap-[1px] flex-1">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={`t3a${i}`} className="w-[2.5px] rounded-full bg-[#8696A0]" style={{ height: `${4 + Math.random() * 10}px` }} />
                          ))}
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                          <img src="/tutor-dfn-avatar.png" alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <span className="text-[10px] text-[#667781] mt-0.5 block">0:05</span>
                    </div>
                  </div>

                  {/* 2. Aluno audio — responde */}
                  <div className="self-end max-w-[80%]">
                    <div className="bg-[#D9FDD3] rounded-lg rounded-tr-none px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#54656F" className="shrink-0"><path d="M8 5v14l11-7z"/></svg>
                        <div className="flex items-center gap-[1px] flex-1">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={`a3a${i}`} className="w-[2.5px] rounded-full bg-[#6BC17F]" style={{ height: `${4 + Math.random() * 10}px` }} />
                          ))}
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                          <img src="/estudante.png" alt="Aluno" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-[10px] text-[#667781]">0:11</span>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M11.07 0.73L4.44 7.36L1.93 4.85L0.5 6.28L4.44 10.22L12.5 2.16L11.07 0.73ZM14.07 0.73L7.44 7.36L6.03 5.96L4.6 7.39L7.44 10.22L15.5 2.16L14.07 0.73Z" fill="#53BDEB"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* 3. Tutor text — intro feedback */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      Great job! Here&apos;s your performance:
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:37</span>
                      </span>
                    </div>
                  </div>

                  {/* 4. Tutor image — scorecard/dashboard */}
                  <div className="self-start max-w-[90%]">
                    <div className="bg-white rounded-lg rounded-tl-none p-1 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <img src="/dashboard-dfn.jpeg" alt="Scorecard Tutor DFN" className="w-full rounded-md" />
                      <span className="block text-right px-2 py-0.5">
                        <span className="text-[10px] text-[#667781]">10:37</span>
                      </span>
                    </div>
                  </div>

                  {/* 5. Tutor text — complementar */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      You can see your score, what you said, and a better way to say it. Let&apos;s keep practicing.
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:37</span>
                      </span>
                    </div>
                  </div>

                  {/* 6. Tutor text — nova pergunta */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      What did you do yesterday?
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:37</span>
                      </span>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>

            {/* Row 4: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="order-2 md:order-1 flex justify-center">
                <PhoneMockup>
                  {/* 1. Tutor text — pergunta */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      Tell me about your daily routine.
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:40</span>
                      </span>
                    </div>
                  </div>

                  {/* 2. Tutor audio — mesma pergunta falada */}
                  <div className="self-start max-w-[80%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#54656F" className="shrink-0"><path d="M8 5v14l11-7z"/></svg>
                        <div className="flex items-center gap-[1px] flex-1">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={`t4a${i}`} className="w-[2.5px] rounded-full bg-[#8696A0]" style={{ height: `${4 + Math.random() * 10}px` }} />
                          ))}
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                          <img src="/tutor-dfn-avatar.png" alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <span className="text-[10px] text-[#667781] mt-0.5 block">0:06</span>
                    </div>
                  </div>

                  {/* 3. Botões interativos */}
                  <div className="self-start w-[85%] flex flex-col gap-1.5">
                    <div className="bg-white rounded-lg px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 border border-[#E9EDEF]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#00A884] shrink-0">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[13px] font-medium text-[#00A884]">Como responder?</span>
                    </div>
                    <div className="bg-white rounded-lg px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 border border-[#E9EDEF]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#00A884] shrink-0">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[13px] font-medium text-[#00A884]">Traduzir áudio</span>
                    </div>
                  </div>

                  {/* 4. Tutor — sugestões de resposta */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <span className="text-[11px] font-bold text-[#667781] uppercase tracking-wide">Sugestões</span>
                      <p className="mt-1">1. &quot;I usually wake up at 7 and go to work.&quot;</p>
                      <p className="mt-1">2. &quot;Every morning I read my Bible and pray.&quot;</p>
                      <p className="mt-1">3. &quot;I spend most of my day studying English.&quot;</p>
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:40</span>
                      </span>
                    </div>
                  </div>

                  {/* 5. Tutor — tradução do áudio */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <span className="text-[11px] font-bold text-[#667781] uppercase tracking-wide">Tradução</span>
                      <p className="mt-1 text-[#667781]">&quot;Me conta sobre a sua rotina do dia a dia.&quot;</p>
                      <span className="block text-right mt-0.5">
                        <span className="text-[10px] text-[#667781]">10:40</span>
                      </span>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>04</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>QUANDO TRAVAR, O TUTOR TE AJUDA</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Não sabe como responder? Clica em &quot;Como responder?&quot; e recebe <strong className="text-black">3 sugestões</strong> de frases prontas para continuar a conversa.
                  <br /><br />
                  Não entendeu o áudio do tutor? Clica em &quot;Traduzir áudio&quot; e recebe a tradução na hora. Sem sair do WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <a
              href="#precos"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
          </div>
        </div>
      </section>

      {/* Ticker: O que e → Relatório */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>Correção em tempo real &bull; Relatório completo &bull; </span>
          ))}
        </div>
      </div>

      {/* 5. Secao Relatório (Fundo Escuro) */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white font-extrabold uppercase tracking-[0.15em] text-xs" style={{ fontFamily: "var(--font-headline)" }}>
              AO FINAL DE CADA SESSÃO
            </div>
            <h2 className="font-black text-xl sm:text-3xl md:text-5xl text-white mb-6 max-w-4xl mx-auto leading-normal px-2 sm:px-0" style={{ fontFamily: "var(--font-headline)" }}>
              CADA SESSÃO FECHA COM UM <span className="bg-[#FF4500] px-2 py-0.5 sm:px-3 sm:py-1 text-white inline-block mt-1 sm:mt-0">RELATÓRIO COMPLETO</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Você precisa saber o que melhorou e o que ainda precisa de atenção. Só o Tutor DFN te entrega um ciclo exclusivo de análises ao final de cada sessão.
            </p>
          </div>

          {/* Top row cards with colored top borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card Parar (Red) */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl border-t-8 border-t-[#DC2626] hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CircleStop className="text-[#DC2626]" size={28} />
                <h4 className="font-extrabold text-xl text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>PARAR</h4>
              </div>
              <p className="text-white/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Os principais erros que você repetiu na sessão, com explicação de por que está errado e como corrigir.</p>
              <div className="p-3 rounded-lg text-[#DC2626] font-bold text-xs italic" style={{ background: "rgba(186,26,26,0.15)", border: "1px solid rgba(186,26,26,0.3)" }}>
                &quot;Past tense — você disse &apos;I go yesterday&apos; mas o correto é &apos;I went yesterday&apos;&quot;
              </div>
            </div>
            {/* Card Continuar (Green) */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl border-t-8 border-t-[#00B046] hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CircleCheck className="text-[#00B046]" size={28} />
                <h4 className="font-extrabold text-xl text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>CONTINUAR</h4>
              </div>
              <p className="text-white/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>O que você está fazendo bem e deve continuar praticando para solidificar.</p>
              <div className="p-3 rounded-lg text-[#00B046] font-bold text-xs italic" style={{ background: "rgba(0,133,97,0.15)", border: "1px solid rgba(0,133,97,0.3)" }}>
                &quot;Bom uso de vocabulário variado e estrutura de frases naturais&quot;
              </div>
            </div>
            {/* Card Começar (Orange) */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>COMEÇAR</h4>
              </div>
              <p className="text-white/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Integração completa com os cursos da Destra for the Nations, indicando onde encontrar a aula do erro cometido.</p>
              <div className="p-3 rounded-lg text-[#FF4500] font-bold text-xs italic" style={{ background: "rgba(173,44,0,0.15)", border: "1px solid rgba(173,44,0,0.3)" }}>
                &quot;Cap. 2 - Circuito 1: Simple Past — para praticar o passado simples&quot;
              </div>
            </div>
          </div>

          {/* Banner style blocks */}
          <div className="space-y-6">
            {/* Resumo da Sessao */}
            <div className="bg-white/5 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <BarChart3 className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RESUMO DA SESSÃO</h4>
                </div>
                <p className="text-white/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Ao encerrar cada sessão, você recebe um resumo visual com tudo que aconteceu na prática: nota geral, interações, palavras novas e tempo.</p>
              </div>
              <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold" style={{ fontFamily: "var(--font-body)" }}>Tempo</span>
                  <span className="text-[#FF4500]" style={{ fontFamily: "var(--font-headline)" }}>24 min</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-[#FF4500]" style={{ width: "75%" }} />
                </div>
                <div className="text-center font-black text-4xl text-white" style={{ fontFamily: "var(--font-headline)" }}>+2.4k</div>
                <div className="text-center text-xs text-[#FF4500] font-bold uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-body)" }}>Palavras</div>
              </div>
            </div>

            {/* Sua Evolução */}
            <div className="bg-white/5 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>SUA EVOLUÇÃO</h4>
                </div>
                <p className="text-white/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Acesse a qualquer momento: sequência de dias, posição no ranking do mês, horas totais de prática e conquistas desbloqueadas.</p>
              </div>
              <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                <div className="text-5xl font-black text-white" style={{ fontFamily: "var(--font-headline)" }}>5h</div>
                <div className="text-xs uppercase mt-2 text-[#FF4500] font-bold tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Próxima Conquista</div>
              </div>
            </div>

            {/* Revisao de Erros */}
            <div className="bg-white/5 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <RotateCcw className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>REVISÃO DE ERROS</h4>
                </div>
                <p className="text-white/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Revise cada erro individualmente: gramática, pronúncia, vocabulário e expressões. O erro só sai da fila quando você acerta.</p>
              </div>
              <div className="w-full md:w-1/3 grid grid-cols-2 gap-2">
                <span className="col-span-2 mx-auto bg-white/10 text-xs px-3 py-1.5 rounded-full font-medium italic border border-white/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;She don&apos;t&quot;</span>
                <span className="bg-white/10 text-xs px-3 py-1.5 rounded-full font-medium italic border border-white/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;I have went&quot;</span>
                <span className="bg-white/10 text-xs px-3 py-1.5 rounded-full font-medium italic border border-white/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;Pronunciation of World&quot;</span>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center space-y-8">
            <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Você já viu algum professor passando todas essas informações tão específicas?</p>
            <a
              href="#precos"
              className="cta-btn cta-orange rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
          </div>
        </div>
      </section>

      {/* Ticker: Relatório → Modos de Pratica */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>Street Talk &bull; Devotional &bull; Boardroom &bull; </span>
          ))}
        </div>
      </div>

      {/* 6. Secao Modos de Pratica (Fundo Claro) */}
      <section className="bg-[#FDFCFB] dot-pattern pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="font-extrabold text-black tracking-normal mb-8 sm:mb-16 text-center md:text-left md:whitespace-nowrap" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}>
            PRATIQUE O INGLÊS QUE<br className="sm:hidden" /> VOCÊ VAI <span className="bg-[#FF4500] text-white px-2 py-0.5 sm:px-3 sm:py-1 inline-block mt-1 sm:mt-0">REALMENTE USAR</span>
          </h2>
          {/* === MOBILE: cards compactos, texto sempre visível, fade-in no scroll === */}
          <div className="flex flex-col gap-6 md:hidden">
            {[
              { title: "Street Talk", desc: "Gírias, expressões e o ritmo real das conversas cotidianas nas nações.", img: "/TUTOR_02.png", icon: <MessageCircle size={28} />, delay: 0 },
              { title: "Devotional", desc: "Vocabulário bíblico e teológico para pregar e orar com autoridade espiritual.", img: "/devotional-tutor.png", icon: <BookOpen size={28} />, delay: 1 },
              { title: "Boardroom", desc: "Inglês executivo para reuniões, projetos e networking profissional global.", img: "/boardroom-tutor.png", icon: <Briefcase size={28} />, delay: 2 },
            ].map((card) => (
              <AnimateOnScroll key={card.title} delay={card.delay}>
                <div className="bg-white rounded-2xl overflow-hidden relative shadow-sm border border-black/5">
                  <div className="flex items-center gap-5 p-6 relative z-10">
                    <Image src={card.img} alt={`Tutor DFN ${card.title}`} width={120} height={120} className="w-20 h-20 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#FF4500]">{card.icon}</span>
                        <h3 className="font-bold text-lg text-black" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.4" }}>{card.title}</h3>
                      </div>
                      <p className="text-black/60 text-sm font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>{card.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* === DESKTOP: efeito carta descendo no hover === */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Street Talk */}
            <div className="rounded-2xl group relative overflow-visible cursor-pointer" style={{ height: "500px" }}>
              <div className="absolute inset-0 z-[1] rounded-2xl flex flex-col items-center text-center px-8 pt-10" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                <div className="mb-3 text-white">
                  <MessageCircle size={28} />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Street Talk</h3>
                <p className="text-white/90 font-medium max-w-[260px] text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Gírias, expressões e o ritmo real das conversas cotidianas nas nações.</p>
              </div>
              <div className="glass-card absolute inset-0 z-[2] rounded-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out group-hover:translate-y-[85%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "0 8px 30px rgba(0,0,0,0.25)", border: "2px solid #000" }}>
                <Image src="/TUTOR_02.png" alt="Tutor DFN Street Talk" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out group-hover:-translate-y-[55%]" style={{ bottom: "-15%" }} />
                <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                  <MessageCircle size={36} />
                </div>
              </div>
            </div>
            {/* Devotional */}
            <div className="rounded-2xl group relative overflow-visible cursor-pointer" style={{ height: "500px" }}>
              <div className="absolute inset-0 z-[1] rounded-2xl flex flex-col items-center text-center px-8 pt-10" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                <div className="mb-3 text-white">
                  <BookOpen size={28} />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Devotional</h3>
                <p className="text-white/90 font-medium max-w-[260px] text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Vocabulário bíblico e teológico para pregar e orar com autoridade espiritual.</p>
              </div>
              <div className="glass-card absolute inset-0 z-[2] rounded-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out group-hover:translate-y-[85%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "0 8px 30px rgba(0,0,0,0.25)", border: "2px solid #000" }}>
                <Image src="/TUTOR_04.png" alt="Tutor DFN Devotional" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out group-hover:-translate-y-[42%]" style={{ bottom: "-15%" }} />
                <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                  <BookOpen size={36} />
                </div>
              </div>
            </div>
            {/* Boardroom */}
            <div className="rounded-2xl group relative overflow-visible cursor-pointer" style={{ height: "500px" }}>
              <div className="absolute inset-0 z-[1] rounded-2xl flex flex-col items-center text-center px-8 pt-10" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                <div className="mb-3 text-white">
                  <Briefcase size={28} />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Boardroom</h3>
                <p className="text-white/90 font-medium max-w-[260px] text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Inglês executivo para reuniões, projetos e networking profissional global.</p>
              </div>
              <div className="glass-card absolute inset-0 z-[2] rounded-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out group-hover:translate-y-[85%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "0 8px 30px rgba(0,0,0,0.25)", border: "2px solid #000" }}>
                <Image src="/TUTOR_03.png" alt="Tutor DFN Boardroom" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out group-hover:-translate-y-[50%]" style={{ bottom: "-15%" }} />
                <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                  <Briefcase size={36} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Tabela Comparativa (Fundo Claro) */}
      <section className="bg-[#FDFCFB] py-12 md:py-16 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-extrabold text-xl sm:text-3xl md:text-5xl text-center mb-8 sm:mb-16 tracking-normal leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
            NENHUM APP, ESCOLA OU PROFESSOR<br /><span className="bg-[#FF4500] text-white px-3 py-1 inline-block mt-2">FAZ O QUE O TUTOR DFN FAZ</span>

          </h2>
          {/* === MOBILE: cards comparativos empilhados === */}
          <div className="flex flex-col gap-4 md:hidden">
            {[
              { recurso: "IA com Contexto de Reino", dfn: true, trad: false, apps: false },
              { recurso: "Conversação Ilimitada 24/7", dfn: true, trad: false, apps: false },
              { recurso: "Correção em Tempo Real", dfn: true, trad: "Apenas em aula", apps: false },
              { recurso: "Foco em Missões/Ministério", dfn: true, trad: false, apps: false },
            ].map((item) => (
              <div key={item.recurso} className="bg-white rounded-xl p-4 shadow-sm border border-black/5">
                <p className="font-bold text-sm mb-3 text-black" style={{ fontFamily: "var(--font-body)" }}>{item.recurso}</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <span className="block font-bold text-[#FF4500] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Tutor DFN</span>
                    {item.dfn === true ? <CheckCircle2 className="text-[#FF4500] mx-auto" size={18} /> : <XCircle className="text-[#9CA3AF] mx-auto" size={18} />}
                  </div>
                  <div>
                    <span className="block font-bold text-[#6B7280] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Tradicionais</span>
                    {item.trad === true ? <CheckCircle2 className="text-[#00B046] mx-auto" size={18} /> : item.trad === false ? <XCircle className="text-[#9CA3AF] mx-auto" size={18} /> : <span className="text-[#6B7280]">{item.trad}</span>}
                  </div>
                  <div>
                    <span className="block font-bold text-[#6B7280] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Apps</span>
                    {item.apps === true ? <CheckCircle2 className="text-[#00B046] mx-auto" size={18} /> : <XCircle className="text-[#9CA3AF] mx-auto" size={18} />}
                  </div>
                </div>
              </div>
            ))}
            {/* Preço */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-black/5">
              <p className="font-bold text-sm mb-3 text-black" style={{ fontFamily: "var(--font-headline)" }}>Custo Mensal Médio</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block font-bold text-[#FF4500] text-lg" style={{ fontFamily: "var(--font-headline)" }}>R$ 59,70</span>
                </div>
                <div>
                  <span className="block font-medium text-[#6B7280] text-sm" style={{ fontFamily: "var(--font-body)" }}>R$ 400+</span>
                </div>
                <div>
                  <span className="block font-medium text-[#6B7280] text-sm" style={{ fontFamily: "var(--font-body)" }}>R$ 150+</span>
                </div>
              </div>
            </div>
          </div>

          {/* === DESKTOP: tabela completa === */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F5F5]">
                  <th className="p-6 font-bold text-[#6B7280] text-base" style={{ fontFamily: "var(--font-headline)" }}>Recursos</th>
                  <th className="p-6 font-bold text-[#FF4500] text-center text-base" style={{ fontFamily: "var(--font-headline)", background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}>Tutor DFN</th>
                  <th className="p-6 font-bold text-[#6B7280] text-center text-base" style={{ fontFamily: "var(--font-headline)" }}>Tradicionais</th>
                  <th className="p-6 font-bold text-[#6B7280] text-center text-base" style={{ fontFamily: "var(--font-headline)" }}>Apps Comuns</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(231,189,178,0.2)" }}>
                  <td className="p-6 font-medium text-base" style={{ fontFamily: "var(--font-body)" }}>IA com Contexto de Reino</td>
                  <td className="p-6 text-center" style={{ background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}><CheckCircle2 className="text-[#FF4500] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(231,189,178,0.2)" }}>
                  <td className="p-6 font-medium text-base" style={{ fontFamily: "var(--font-body)" }}>Conversação Ilimitada 24/7</td>
                  <td className="p-6 text-center" style={{ background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}><CheckCircle2 className="text-[#FF4500] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(231,189,178,0.2)" }}>
                  <td className="p-6 font-medium text-base" style={{ fontFamily: "var(--font-body)" }}>Correção em Tempo Real</td>
                  <td className="p-6 text-center" style={{ background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}><CheckCircle2 className="text-[#FF4500] mx-auto" size={22} /></td>
                  <td className="p-6 text-center text-xs text-[#6B7280]">Apenas em aula</td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(231,189,178,0.2)" }}>
                  <td className="p-6 font-medium text-base" style={{ fontFamily: "var(--font-body)" }}>Foco em Missões/Ministério</td>
                  <td className="p-6 text-center" style={{ background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}><CheckCircle2 className="text-[#FF4500] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                  <td className="p-6 text-center"><XCircle className="text-[#9CA3AF] mx-auto" size={22} /></td>
                </tr>
                <tr className="bg-[#F5F5F5]/50">
                  <td className="p-6 font-bold text-base" style={{ fontFamily: "var(--font-headline)" }}>Custo Mensal Médio</td>
                  <td className="p-6 text-center font-bold text-[#FF4500]" style={{ fontFamily: "var(--font-headline)", background: "rgba(255,219,209,0.3)", borderLeft: "1px solid rgba(173,44,0,0.1)", borderRight: "1px solid rgba(173,44,0,0.1)" }}>R$ 59,70</td>
                  <td className="p-6 text-center font-medium" style={{ fontFamily: "var(--font-body)" }}>R$ 400+</td>
                  <td className="p-6 text-center font-medium" style={{ fontFamily: "var(--font-body)" }}>R$ 150+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ticker: Comparativo → Depoimentos */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>Quem já usou aprova &bull; Veja os depoimentos &bull; </span>
          ))}
        </div>
      </div>

      {/* 9. Depoimentos (Fundo Escuro) */}
      <section className="bg-black py-24 relative">
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-8 sm:mb-16 tracking-normal text-center md:text-left" style={{ fontFamily: "var(--font-headline)" }}>
            NÃO É O QUE A GENTE DIZ.<br /><span className="text-[#FF4500]">É O QUE ELES VIVERAM.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between" style={{ borderLeft: "4px solid #FF4500" }}>
              <p className="text-white/80 italic mb-8" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>&quot;O Tutor DFN me deu a confiança que faltava para pregar em uma conferência na África do Sul. A IA entende os termos bíblicos melhor que qualquer professor que já tive.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF4500]/30 flex items-center justify-center text-white font-bold" style={{ fontFamily: "var(--font-headline)" }}>RS</div>
                <div>
                  <p className="font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>Pr. Ricardo Silva</p>
                  <p className="text-xs text-[#FF4500] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>Missão Global</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between" style={{ borderLeft: "4px solid #FF4500" }}>
              <p className="text-white/80 italic mb-8" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>&quot;Estudar inglês sempre foi um peso, mas com os cenários de Boardroom eu finalmente consegui me comunicar com parceiros internacionais do meu ministério.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF4500]/30 flex items-center justify-center text-white font-bold" style={{ fontFamily: "var(--font-headline)" }}>AM</div>
                <div>
                  <p className="font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>Ana Luiza Mello</p>
                  <p className="text-xs text-[#FF4500] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>Coordenadora de Projetos</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between" style={{ borderLeft: "4px solid #FF4500" }}>
              <p className="text-white/80 italic mb-8" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>&quot;Uso o Street Talk todos os dias antes de sair para o campo. É como ter um amigo nativo te dando dicas reais de como as pessoas falam na rua.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF4500]/30 flex items-center justify-center text-white font-bold" style={{ fontFamily: "var(--font-headline)" }}>GS</div>
                <div>
                  <p className="font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>Gabriel Santos</p>
                  <p className="text-xs text-[#FF4500] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>Missionário de Campo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker: Depoimentos → Pricing */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>1 ano completo &bull; 12x de R$ 59,70 &bull; Acesso imediato &bull; </span>
          ))}
        </div>
      </div>

      {/* 10. Oferta/Pricing (Fundo Claro) */}
      <section className="bg-[#FDFCFB] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-center md:text-left"><span className="bg-[#FF4500]/10 text-[#FF4500] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 inline-block" style={{ fontFamily: "var(--font-label)" }}>Acesso Anual</span></div>
              <h2 className="font-extrabold tracking-normal mb-6 sm:mb-8 text-center md:text-left" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.25rem, 4vw, 3rem)", lineHeight: "1.2" }}>
                UM ANO INTEIRO DO TUTOR DFN.<br />
                <span className="text-[#FF4500]" style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.8rem)" }}>POR MENOS DO QUE UMA AULA PARTICULAR.</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="text-[#FF4500]" size={20} />
                  <span className="font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Acesso ilimitado 24h por dia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#FF4500]" size={20} />
                  <span className="font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Feedback instantâneo de gramática e pronúncia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#FF4500]" size={20} />
                  <span className="font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Cenários de Missões, Devocional e Negócios</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#FF4500]" size={20} />
                  <span className="font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Trilha de aprendizado personalizada pela IA</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <Check className="text-[#FF4500]" size={20} />
                  <span className="font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>+5 bônus exclusivos de aceleração</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full px-2 sm:px-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl relative overflow-hidden" style={{ borderTop: "8px solid #FF4500" }}>
                <div className="absolute top-4 right-4 bg-[#2DD4A0] text-[#FFFFFF] font-bold px-3 py-1 rounded-full text-xs" style={{ fontFamily: "var(--font-label)" }}>MAIS POPULAR</div>
                <p className="font-bold text-[#6B7280] mb-4 uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-headline)" }}>Plano de Embaixador</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-body)" }}>12x de</span>
                  <span className="text-4xl sm:text-6xl font-black text-[#FF4500] tracking-normal" style={{ fontFamily: "var(--font-headline)" }}>R$ 59,70</span>
                </div>
                <p className="text-[#6B7280]/70 mb-8 font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Ou R$ 597 à vista (economize R$ 119)</p>
                <a
                  href="#"
                  className="cta-btn cta-green animate-pulse-cta block w-full text-center py-4 rounded-xl font-bold text-lg sm:text-xl uppercase mb-6 cursor-pointer"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Quero Ser Aluno Agora
                </a>
                <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#6B7280]/50 uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
                  <span className="flex items-center gap-1"><Lock size={14} /> Checkout Seguro</span>
                  <span className="flex items-center gap-1"><ShieldCheck size={14} /> Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker: Pricing → Garantia+FAQ */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(0.95rem, 2.3vw, 1.58rem)" }}>7 dias de garantia &bull; Sem risco &bull; 100% do seu dinheiro de volta &bull; </span>
          ))}
        </div>
      </div>

      {/* 11. Garantia e FAQ (Fundo Escuro) */}
      <section className="relative bg-black py-24 text-white overflow-hidden">
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Guarantee Card */}
          <div className="glass-card rounded-2xl p-5 sm:p-8 mb-12 md:mb-24 flex flex-col md:flex-row items-center gap-6 sm:gap-8" style={{ borderColor: "rgba(173,44,0,0.2)" }}>
            <div className="w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0">
              <div className="w-full h-full bg-[#FF4500] rounded-full flex items-center justify-center" style={{ boxShadow: "0 0 50px rgba(173,44,0,0.5)" }}>
                <ShieldCheck className="text-white" size={56} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4 text-center md:text-left" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>Garantia Incondicional de 7 Dias</h3>
              <p className="text-white/70" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Você testa o Tutor DFN por uma semana inteira. Se não sentir que seu inglês está evoluindo ou que a IA não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.</p>
            </div>
          </div>

          <h2 className="font-extrabold text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-headline)" }}>SE VOCÊ AINDA TEM ALGUMA DÚVIDA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* P1 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Preciso ser aluno do Combo da Fluência para usar o Tutor DFN?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Não. O Tutor DFN é vendido separadamente e funciona de forma independente. Dito isso, quem tem o Combo aproveitará ainda mais, pois o tutor usa o currículo de 32 circuitos para indicar exatamente o que estudar com base nos seus erros reais.
              </div>
            </details>
            {/* P2 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                É só um ChatGPT com outro nome?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Não. O Tutor DFN é movido por IA de ponta, mas foi construído com uma personalidade definida, regras específicas de feedback, integração metodológica com a DFN e um sistema de relatórios, gamificação e evolução que não existe em nenhuma ferramenta genérica.
              </div>
            </details>
            {/* P3 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Funciona para iniciantes?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Sim. O tutor se adapta ao seu nível, usa frases mais simples e dá mais sugestões para quem está começando, além disso você pode configurar a velocidade de fala do Tutor. Você não precisa falar bem para começar. Você começa para aprender a falar bem.
              </div>
            </details>
            {/* P4 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                E se eu travar e não souber o que dizer?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Você clica em &quot;Como responder?&quot; e recebe 3 sugestões de frases prontas para continuar a conversa. O tutor também aceita português; se você realmente travar, pode enviar em português que ele te ajuda a construir a frase em inglês.
              </div>
            </details>
            {/* P5 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Precisa do WhatsApp Business ou é no WhatsApp normal?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                No WhatsApp normal. Você recebe o número do Tutor DFN, adiciona nos seus contatos e começa a praticar. Zero instalação, zero configuração.
              </div>
            </details>
            {/* P6 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Quantas vezes por semana devo usar?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Quanto mais, melhor. Mas 10 a 15 minutos por dia já fazem diferença real. O sistema de sequência de dias foi criado justamente para construir esse hábito de prática diária consistente.
              </div>
            </details>
            {/* P7 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Como funciona o acesso? Recebo um link, um app?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                Após a confirmação do pagamento, você recebe o número do Tutor DFN pelo WhatsApp. É só adicionar, mandar uma mensagem e já começar. Sem login, sem plataforma, sem app para baixar.
              </div>
            </details>
            {/* P8 */}
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Posso cancelar quando quiser?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                O Tutor DFN oferece 7 dias de garantia incondicional. Se dentro desse período você decidir que não é para você, devolvemos 100% do valor sem perguntas. Após os 7 dias, a compra é definitiva — você está adquirindo uma licença de uso de 1 ano completo, não uma assinatura recorrente.
              </div>
            </details>
            {/* P9 */}
            <details className="group glass-card rounded-xl overflow-hidden md:col-span-2">
              <summary className="p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Posso usar o Tutor DFN em mais de um número de WhatsApp?
                <ChevronDown className="shrink-0 ml-2 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-white/60 text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                O acesso é vinculado a um único número de WhatsApp por licença. Se você quiser habilitar para um familiar ou para um segundo número seu, entre em contato com nossa equipe — temos condições especiais para esse caso e vamos te orientar sobre a melhor forma de resolver.
                <a href="#" className="block mt-4 text-[#FF4500] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors" style={{ fontFamily: "var(--font-headline)" }}>Falar com a equipe DFN</a>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 12. CTA Final (Extreme Glow) */}
      <section className="bg-black py-32 relative overflow-hidden text-center">
        <div className="orange-glow" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-60 pointer-events-none"
          style={{ backgroundImage: "url('/mundo.svg')", backgroundSize: "cover" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-extrabold text-3xl sm:text-5xl md:text-7xl tracking-normal text-white mb-8 sm:mb-12 leading-none" style={{ fontFamily: "var(--font-headline)" }}>
            QUAL NAÇÃO QUEIMA EM SEU CORAÇÃO?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
            Não deixe a barreira do idioma ser o limite para o que Deus quer fazer através de você. Comece sua jornada agora.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="#precos"
              className="cta-btn cta-orange animate-pulse-cta py-4 px-8 sm:py-5 sm:px-14 rounded-xl text-lg sm:text-xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Destravar Minha Fluência
            </a>
            <p className="text-xs font-bold text-white/30 uppercase" style={{ fontFamily: "var(--font-label)", letterSpacing: "0.2em" }}>Vagas limitadas para a turma atual</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black w-full py-8 sm:py-12 px-4 sm:px-6 md:px-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-headline)" }}>Tutor DFN</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Termos de Uso</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Política de Privacidade</a>
            <a href="#" className="text-sm text-white/50 hover:text-[#2DD4A0] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Suporte WhatsApp</a>
          </div>
          <div className="text-sm text-white/50 text-center md:text-right" style={{ fontFamily: "var(--font-body)" }}>
            &copy; 2024 Destra For The Nations. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

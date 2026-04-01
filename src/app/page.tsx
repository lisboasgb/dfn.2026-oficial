"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import PhoneMockup from "@/components/PhoneMockup";
import { CountUp, AnimatedBar } from "@/components/CountUp";
import { FAQItem } from "@/components/FAQItem";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StickySection from "@/components/StickySection";

const waveHeights = [7, 12, 5, 10, 14, 6, 11, 8, 13, 5, 9, 14, 6, 10, 7, 12, 8, 11, 5, 13];
const waveHeights2 = [9, 6, 13, 8, 11, 5, 14, 7, 10, 12, 6, 9, 13, 5, 11, 8, 14, 7, 12, 6];
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
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [phoneModal, setPhoneModal] = useState(false);
  return (
    <>
      <div className="bg-[#FF4500] py-3 flex items-center justify-center gap-3">
        <span className="w-3.5 h-3.5 rounded-full bg-[#00FF5E] animate-pulse shadow-[0_0_12px_#00FF5E,0_0_4px_#00FF5E]" />
        <span className="text-white font-black uppercase tracking-[0.2em] text-lg sm:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Disponível direto no WhatsApp</span>
      </div>
      {/* Wrapper sticky: Hero fica fixa, Ticker+Problema sobem por cima */}
      <div className="relative">
      {/* 1. Hero Section (Fundo Escuro) */}
      <section className="sticky top-0 z-[1] relative bg-[#FDFCFB] dot-pattern overflow-hidden" style={{ padding: "12px 0 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="flex flex-col gap-2 sm:gap-4 items-center text-center md:items-start md:text-left">
            <h1 className="font-black text-black tracking-normal" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.1", fontSize: "clamp(1.6rem, 7vw, 5rem)" }}>
              APRENDA INGLÊS FALANDO<br /> <span className="bg-[#FF4500] text-white px-2 py-0.5 sm:px-3 sm:py-1 inline-block">DESDE O PRIMEIRO DIA</span>
            </h1>
            <p className="text-black/60 text-sm sm:text-lg md:text-xl max-w-lg font-bold" style={{ fontFamily: "var(--font-body)", lineHeight: "1.3" }}>
              Pratique inglês de <span className="text-[#FF4500]">verdade</span><br />
              com o <span className="text-[#FF4500]">único Tutor</span> que não te deixa travado.<br />
              <span className="text-[#FF4500]">Corrigindo</span> e <span className="text-[#FF4500]">ensinando</span> em tempo real,<br />
              <strong className="text-[#FF4500]">SEMPRE</strong> que precisar.
            </p>
            <a
              href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
              className="cta-btn cta-green block w-full max-w-xs sm:max-w-sm text-center py-3 sm:py-4 rounded-full font-bold text-2xl sm:text-3xl md:text-4xl uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
            <div className="text-black/40 font-bold text-lg sm:text-xl uppercase tracking-widest text-center w-full max-w-xs sm:max-w-sm" style={{ fontFamily: "var(--font-headline)" }}>
              Aprenda Inglês IA
            </div>
          </div>
          <div className="relative flex justify-center items-center -mt-6 md:mt-0">
            <img
              src="/Tutor_DFN2.webp"
              alt="Tutor DFN"
              className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[420px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Ticker: Hero → Problema */}
      <div className="relative z-[2] bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 3.5vw, 1.8rem)" }}>Tutor DFN &bull; Aprenda Inglês Falando &bull; </span>
          ))}
        </div>
      </div>

      </div>{/* Fim wrapper sticky Hero */}

      {/* 3. Secao Problema (Fundo Escuro) */}
      <div className="relative">
      <StickySection zIndex={1} as="section" className="relative bg-black overflow-hidden" style={{ paddingTop: "clamp(48px, 8vw, 96px)", paddingBottom: "clamp(48px, 8vw, 96px)" }}>
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna esquerda — Headline */}
          <div className="flex flex-col justify-between text-center md:text-left items-center md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 uppercase text-xs text-white" style={{ fontFamily: "var(--font-headline)", fontWeight: 800, letterSpacing: "0.15em" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF5E] animate-pulse shadow-[0_0_8px_#00FF5E]" />
                O PROBLEMA REAL
              </div>
              <h2 className="font-black text-white tracking-normal" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 5.5vw, 3.5rem)", lineHeight: "1.15", marginBottom: "16px" }}>
                NO BRASIL ENSINAM INGLÊS<br />
                NO PAPEL.<br />
                <span className="text-[#FF4500] italic">NA HORA DE FALAR,<br />
                TODOS TRAVAM.</span>
              </h2>
              <p className="text-white/50 italic font-medium mx-auto lg:mx-0" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.4", maxWidth: "420px" }}>
                O país com mais escolas de inglês do mundo<br />e apenas 2% são fluentes.<br />No fim é muita teoria e pouca prática.
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
                Em turma, o professor não tem como te corrigir o tempo todo<br />e quando tem prática, <strong className="text-white">você fala pouco</strong>
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
                Falar para o espelho ou repetir frases gravadas<br /><strong className="text-white">não simula uma conversa de verdade</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Texto transição + CTA — centralizado abaixo dos blocos */}
        <div className="flex flex-col items-center text-center mt-12" style={{ gap: "20px" }}>
          <p className="text-white font-bold text-base sm:text-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-headline)" }}>
            O Tutor DFN resolve todos esses problemas
          </p>
          <a
            href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
            className="cta-btn cta-green block w-full max-w-xs sm:max-w-sm text-center py-3 sm:py-4 rounded-full font-bold text-2xl sm:text-3xl md:text-4xl uppercase cursor-pointer"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} />
          </a>
        </div>
      </StickySection>

      {/* Ticker: Problema → O que é */}
      <div className="relative z-[2] bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 3.5vw, 1.8rem)" }}>Seu Tutor de IA no WhatsApp &bull; 15 minutos por dia &bull; </span>
          ))}
        </div>
      </div>

      </div>{/* Fim wrapper sticky Problema */}

      {/* 4. Secao O que e o Tutor DFN (Fundo Claro) - Z-pattern */}
      <div className="relative">
      <StickySection zIndex={1} as="section" className="relative py-24 md:py-32 bg-[#FDFCFB] dot-pattern overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-black/5 border border-black/10 font-extrabold uppercase tracking-[0.15em] text-sm sm:text-base text-black" style={{ fontFamily: "var(--font-headline)" }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF5E] animate-pulse shadow-[0_0_8px_#00FF5E]" />
              O QUE É O TUTOR DFN
            </div>
            <h2 className="font-black text-black text-4xl sm:text-5xl md:text-7xl mb-8 leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
              SEU TUTOR DE IA <span className="bg-[#FF4500] text-white px-3 py-1 sm:px-5 sm:py-2 ml-1 sm:ml-1.5 inline-block mt-1 sm:mt-0">NO WHATSAPP</span>
            </h2>
            <p className="text-black/60 text-sm sm:text-lg mb-6 md:mb-24 max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
            O Tutor DFN é um assistente de conversação em inglês movido por inteligência artificial.<br />
            Sem instalar app novo. Sem desculpa.<br />
            Só você, o WhatsApp e 15 minutos por dia.
            </p>
          </div>

          {/* Z-pattern list */}
          <div className="space-y-10 md:space-y-32">
            {/* Row 1: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
              <div className="pt-8 md:pt-16 flex flex-col h-full">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>01</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>MANDE TEXTO OU ÁUDIO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Em inglês, <span className="text-[#FF4500] font-bold">no nível que você estiver</span>.
                  <br /><br />
                  Pode errar. Pode travar.<br />
                  O tutor já espera isso e começa a trabalhar com o que você mandou.
                  <br /><br />
                  Funciona com <strong className="text-[#FF4500]">mensagem de texto ou áudio gravado</strong>, você escolhe o que for mais fácil no momento.
                </p>
                <div className="flex-1 hidden md:flex items-start justify-start pt-[15%]">
                  <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-8 rounded-full font-bold text-lg sm:text-xl md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <PhoneMockup images={["/print-bloco01.jpeg", "/print-bloco01b.jpeg"]} />
                <div className="md:hidden"><a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green py-3 px-8 rounded-full font-bold text-lg uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a></div>
              </div>
            </div>

            {/* Row 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
              <div className="order-2 md:order-1 flex flex-col items-center gap-6">
                <PhoneMockup images={["/print-bloco02.jpeg", "/print-bloco02b.jpeg"]} />
                <div className="md:hidden"><a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green py-3 px-8 rounded-full font-bold text-lg uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a></div>
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16 flex flex-col h-full">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>02</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RECEBA CORREÇÃO E CONTINUE CONVERSANDO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  O tutor identifica cada erro de gramática e vocabulário,<br />explica em português o que estava errado e <span className="text-[#FF4500] font-bold">como corrigir</span>
                  <br /><br />
                  Na sequência já manda a próxima pergunta<br />para você continuar praticando.
                  <br /><br />
                  Nenhum erro passa. <span className="text-[#FF4500] font-bold">Nenhuma prática é interrompida.</span>
                </p>
                <div className="flex-1 hidden md:flex items-start justify-start pt-[15%]">
                  <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-8 rounded-full font-bold text-lg sm:text-xl md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a>
                </div>
              </div>
            </div>

            {/* Row 3: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
              <div className="pt-8 md:pt-16 flex flex-col h-full">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>03</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>VEJA SUA NOTA DE PRECISÃO EM TEMPO REAL</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Depois de cada áudio, você recebe um scorecard visual com sua porcentagem de acerto, o que você disse e a forma correta.
                  <br /><br />
                  A correção é feita em relação à sua pronúncia e à sua gramática aplicada. Verde, amarelo ou vermelho... <span className="text-[#FF4500] font-bold">Você sabe exatamente como está.</span>
                </p>
                <div className="flex-1 hidden md:flex items-start justify-start pt-[15%]">
                  <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-8 rounded-full font-bold text-lg sm:text-xl md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <PhoneMockup images={["/print-bloco03.jpeg", "/print-bloco03b.jpeg"]} />
                <div className="md:hidden"><a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green py-3 px-8 rounded-full font-bold text-lg uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a></div>
              </div>
            </div>

            {/* Row 4: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
              <div className="order-2 md:order-1 flex flex-col items-center gap-6">
                <PhoneMockup images={["/print-bloco04.jpeg", "/print-bloco04b.jpeg"]} />
                <div className="md:hidden"><a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green py-3 px-8 rounded-full font-bold text-lg uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a></div>
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16 flex flex-col h-full">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>04</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>QUANDO TRAVAR, O TUTOR TE AJUDA</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Não sabe como responder? Clica em &quot;Como responder?&quot; e receba <strong className="text-[#FF4500]">3 sugestões</strong> de frases prontas para continuar a conversa.
                  <br /><br />
                  Não entendeu o áudio do tutor? Clica em &quot;Traduzir áudio&quot; e receba <span className="text-[#FF4500] font-bold">a tradução na hora.</span> Sem sair do WhatsApp.
                </p>
                <div className="flex-1 hidden md:flex items-start justify-start pt-[15%]">
                  <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-8 rounded-full font-bold text-lg sm:text-xl md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={22} /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </StickySection>

      {/* Ticker: O que e → Relatório */}
      <div className="relative z-[2] bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 3.5vw, 1.8rem)" }}>Correção em tempo real &bull; Relatório completo &bull; </span>
          ))}
        </div>
      </div>

      {/* 5. Secao Relatório (Fundo Claro) */}
      <section className="relative z-[2] py-24 md:py-32 bg-[#FDFCFB] dot-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-black/10 bg-black/5 text-black font-extrabold uppercase tracking-[0.15em] text-sm sm:text-base" style={{ fontFamily: "var(--font-headline)" }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF5E] animate-pulse shadow-[0_0_8px_#00FF5E]" />
              AO FINAL DE CADA SESSÃO
            </div>
            <h2 className="font-black text-4xl sm:text-5xl md:text-7xl text-black mb-8 max-w-4xl mx-auto leading-normal px-2 sm:px-0" style={{ fontFamily: "var(--font-headline)" }}>
              CADA SESSÃO FECHA COM UM <span className="bg-[#FF4500] px-3 py-1 sm:px-5 sm:py-2 text-white inline-block mt-1 sm:mt-0">RELATÓRIO COMPLETO</span>
            </h2>
            <p className="text-black/60 text-sm sm:text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Você precisa saber o que melhorou e o que ainda precisa de atenção.<br />
              Só o Tutor DFN te entrega um ciclo exclusivo de análises<br />
              ao final de cada sessão.
            </p>
          </div>

          {/* Top row cards with colored top borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-2 sm:px-0">
            {/* Card Parar (Red) */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#DC2626] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <CircleStop className="text-[#DC2626]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>PARAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Os principais erros que você repetiu na sessão, com explicação de por que está errado e como corrigir.</p>
              <div className="p-3 rounded-lg text-[#DC2626] font-bold text-xs italic" style={{ background: "rgba(186,26,26,0.08)", border: "1px solid rgba(186,26,26,0.2)" }}>
                &quot;Past tense: você disse &apos;I go yesterday&apos; mas o correto é &apos;I went yesterday&apos;&quot;
              </div>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
            {/* Card Continuar (Green) */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#00B046] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <CircleCheck className="text-[#00B046]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>CONTINUAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>O que você está fazendo bem e deve continuar praticando para solidificar.</p>
              <div className="p-3 rounded-lg text-[#00B046] font-bold text-xs italic" style={{ background: "rgba(0,133,97,0.08)", border: "1px solid rgba(0,133,97,0.2)" }}>
                &quot;Bom uso de vocabulário variado e estrutura de frases naturais&quot;
              </div>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
            {/* Card Começar (Orange) */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>COMEÇAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Integração completa com os cursos da Destra for the Nations, indicando onde encontrar a aula do erro cometido na sessão.</p>
              <div className="p-3 rounded-lg text-[#FF4500] font-bold text-xs italic" style={{ background: "rgba(173,44,0,0.08)", border: "1px solid rgba(173,44,0,0.2)" }}>
                &quot;Cap. 2 - Circuito 1: Simple Past, para praticar o passado simples&quot;
              </div>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
          </div>

          {/* Banner style blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 sm:px-0">
            {/* Resumo da Sessão */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RESUMO DA SESSÃO</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-3" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Ao encerrar cada sessão, você recebe um resumo visual com tudo que aconteceu na prática:</p>
              <ul className="space-y-1.5 mb-4">
                {["Nota geral de desempenho", "Número de interações", "Quantidade de palavras novas usadas", "Tempo total de conversa"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-black/70 font-medium text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
            {/* Sua Evolução */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>SUA EVOLUÇÃO</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Acesse a qualquer momento: sequência de dias, posição no ranking do mês, horas totais de prática e conquistas desbloqueadas.</p>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
            {/* Revisão de Erros */}
            <div onClick={() => setPhoneModal(true)} className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>REVISÃO DE ERROS</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Depois de cada sessão, revise cada erro individualmente: gramática, pronúncia, vocabulário e expressões.<br />O erro só é marcado como resolvido quando você pratica a versão correta com nota suficiente.</p>
              <div className="mt-4 flex items-center gap-1 text-[#FF4500] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais <ArrowRight size={12} /></div>
            </div>
          </div>

          <div className="mt-20 text-center space-y-8">
            <p className="text-black font-bold text-sm sm:text-base md:text-lg px-4 sm:px-0" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Você já viu algum professor passando<br className="sm:hidden" /> todas essas informações tão específicas?<br />Não perca tempo, use a tecnologia como<br className="sm:hidden" /> sua aliada para <span className="bg-[#FF4500] text-white px-1">aprender inglês.</span></p>
            <a
              href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-2xl sm:text-3xl md:text-4xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
          </div>
        </div>
      </section>
      </div>{/* Fim wrapper sticky OqueE→Relatorio */}

      {/* Ticker: Relatório → Modos de Pratica */}
      <div className="bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 3.5vw, 1.8rem)" }}>Street Talk &bull; Devotional &bull; Boardroom &bull; </span>
          ))}
        </div>
      </div>

      {/* 6. Secao Modos de Pratica (Fundo Claro) */}
      <section className="relative z-[2] bg-[#FDFCFB] dot-pattern pt-10 pb-6 md:pt-24 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-black/10 bg-black/5 text-black font-extrabold uppercase tracking-[0.15em] text-sm sm:text-base" style={{ fontFamily: "var(--font-headline)" }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF5E] animate-pulse shadow-[0_0_8px_#00FF5E]" />
              MODOS DE PRÁTICA
            </div>
            <h2 className="font-black text-3xl sm:text-5xl md:text-7xl text-black leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
              PRATIQUE O INGLÊS QUE VOCÊ VAI<br /><span className="bg-[#FF4500] text-white px-4 py-2 sm:px-6 sm:py-3 inline-block mt-2 text-5xl sm:text-6xl md:text-8xl">REALMENTE USAR</span>
            </h2>
            <p className="text-black/60 text-sm sm:text-xl max-w-2xl mx-auto font-medium mt-6" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Agentes especializados.<br />
              Cada um com personalidade e foco diferentes,<br />
              para o inglês que o seu <span className="bg-[#FF4500] text-white font-bold px-2 py-0.5">chamado exige.</span>
            </p>
          </div>
          {/* === MOBILE: cards verticais === */}
          <div className="md:hidden flex flex-col gap-6 px-4 pb-10">
            {/* Street Talk */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
              <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
                <Image src="/TUTOR_02.png" alt="Tutor DFN Street Talk" width={200} height={200} className="w-40 h-auto object-contain mb-4" />
                <div className="flex items-center gap-2 mb-3 text-white"><MessageCircle size={24} /><h3 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-headline)" }}>Street Talk</h3></div>
                <p className="text-white/90 font-medium text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Inglês informal · Gírias<br /><br />Para quando você precisa falar com pessoas reais, no dia a dia, sem soar como um livro didático.<br />Este agente usa gírias contemporâneas, expressões coloquiais e phrasal verbs do jeito que os nativos realmente falam.</p>
              </div>
              <div className="bg-[#00873A] cursor-pointer" onClick={() => setOpenCard(openCard === 0 ? null : 0)}>
                <div className="flex items-center justify-center gap-2 px-6 py-3">
                  <span className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-white transition-transform duration-300" style={{ display: "inline-block", transform: openCard === 0 ? "rotate(180deg)" : "rotate(0deg)" }}>↓</span>
                </div>
                <div style={{ maxHeight: openCard === 0 ? "200px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p className="font-black text-white text-xl italic text-center px-6 pb-5">"No cap · Vibe · Lowkey · Slay · Bussin · W / L"</p>
                </div>
              </div>
            </div>
            {/* Devotional */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
              <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
                <Image src="/TUTOR_04.png" alt="Tutor DFN Devotional" width={200} height={200} className="w-40 h-auto object-contain mb-4" />
                <div className="flex items-center gap-2 mb-3 text-white"><BookOpen size={24} /><h3 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-headline)" }}>Devotional</h3></div>
                <p className="text-white/90 font-medium text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Para quando você quiser praticar<br />em seu momento devocional.<br />Este agente te guia por passagens bíblicas em inglês, reflexões e até oração.<br />O inglês com propósito.</p>
              </div>
              <div className="bg-[#00873A] cursor-pointer" onClick={() => setOpenCard(openCard === 1 ? null : 1)}>
                <div className="flex items-center justify-center gap-2 px-6 py-3">
                  <span className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-white transition-transform duration-300" style={{ display: "inline-block", transform: openCard === 1 ? "rotate(180deg)" : "rotate(0deg)" }}>↓</span>
                </div>
                <div style={{ maxHeight: openCard === 1 ? "200px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <ul className="text-white/90 font-medium text-base text-center px-6 pb-5 space-y-2" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                    <li>→ Estudar um versículo ou passagem escolhida por você</li>
                    <li>→ Devocional guiado: passagem, reflexão, aplicação e oração</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Boardroom */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
              <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
                <Image src="/TUTOR_03.png" alt="Tutor DFN Boardroom" width={200} height={200} className="w-40 h-auto object-contain mb-4" />
                <div className="flex items-center gap-2 mb-3 text-white"><Briefcase size={24} /><h3 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-headline)" }}>Boardroom</h3></div>
                <p className="text-white/90 font-medium text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Inglês profissional · Business<br /><br />Para entrevistas, reuniões, apresentações e e-mails em inglês.<br />Este agente te prepara para os contextos formais onde comunicar bem faz diferença real.</p>
              </div>
              <div className="bg-[#00873A] cursor-pointer" onClick={() => setOpenCard(openCard === 2 ? null : 2)}>
                <div className="flex items-center justify-center gap-2 px-6 py-3">
                  <span className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-white transition-transform duration-300" style={{ display: "inline-block", transform: openCard === 2 ? "rotate(180deg)" : "rotate(0deg)" }}>↓</span>
                </div>
                <div style={{ maxHeight: openCard === 2 ? "200px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <ul className="text-white/90 font-medium text-base text-center px-6 pb-5 space-y-2" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                    <li>→ Entrevistas de emprego em organizações internacionais</li>
                    <li>→ Reuniões, apresentações e negociações</li>
                    <li>→ Redação de e-mails e mensagens profissionais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* === DESKTOP: efeito carta descendo no hover === */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 cards-focus-group">
            {/* Street Talk */}
            <AnimateOnScroll delay={0}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "580px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {/* Faixa fixa no topo do card */}
                <div className="absolute top-0 left-0 right-0 z-[3] flex items-center justify-center gap-2 bg-[#FF4500] py-3">
                  <span className="text-black font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-black">↓</span>
                </div>
                <div className="absolute inset-0 z-[1] flex flex-col items-center text-center px-8 pt-16 pb-8 justify-between" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                  <div className="mb-2 text-white"><MessageCircle size={24} /></div>
                  <h3 className="font-bold text-xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Street Talk</h3>
                  <p className="text-white/90 font-medium max-w-[260px] text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Inglês informal · Gírias<br /><br />Para quando você precisa falar com pessoas reais, no dia a dia, sem soar como um livro didático.<br />Este agente usa gírias contemporâneas, expressões coloquiais e phrasal verbs do jeito que os nativos realmente falam.</p>
                  <ul className="text-white/90 font-medium text-base text-left w-full max-w-[260px] mt-3 space-y-1" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                    <li className="font-black text-white text-lg italic text-center">"No cap · Vibe · Lowkey · Slay · Bussin · W / L"</li>
                  </ul>
                </div>
                <div className="glass-card absolute top-[44px] left-0 right-0 bottom-0 z-[2] p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:translate-y-[100%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "inset 0 2px 0 #000, inset 2px 0 0 #000, inset -2px 0 0 #000, inset 0 -2px 0 #000, 0 8px 30px rgba(0,0,0,0.25)" }}>
                  <Image src="/TUTOR_02.png" alt="Tutor DFN Street Talk" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out" style={{ bottom: "-15%" }} />
                  <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                    <MessageCircle size={36} />
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
            {/* Devotional */}
            <AnimateOnScroll delay={1}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "580px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 z-[3] flex items-center justify-center gap-2 bg-[#FF4500] py-3">
                  <span className="text-black font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-black">↓</span>
                </div>
                <div className="absolute inset-0 z-[1] flex flex-col items-center text-center px-8 pt-16 pb-8 justify-between" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                  <div className="mb-2 text-white"><BookOpen size={24} /></div>
                  <h3 className="font-bold text-xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Devotional</h3>
                  <p className="text-white/90 font-medium max-w-[260px] text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Para quando você quiser praticar em seu momento devocional.<br />Este agente te guia por passagens bíblicas em inglês, reflexões e até oração.<br />O inglês com propósito.</p>
                  <ul className="text-white/90 font-medium text-base text-center w-full max-w-[260px] mt-3 space-y-1" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                    <li className="font-black text-white text-lg italic">→ Estudar um versículo ou passagem escolhida por você</li>
                    <li className="font-black text-white text-lg italic">→ Devocional guiado: passagem, reflexão, aplicação e oração</li>
                  </ul>
                </div>
                <div className="glass-card absolute top-[44px] left-0 right-0 bottom-0 z-[2] p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:translate-y-[100%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "inset 0 2px 0 #000, inset 2px 0 0 #000, inset -2px 0 0 #000, inset 0 -2px 0 #000, 0 8px 30px rgba(0,0,0,0.25)" }}>
                  <Image src="/TUTOR_04.png" alt="Tutor DFN Devotional" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out" style={{ bottom: "-15%" }} />
                  <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                    <BookOpen size={36} />
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
            {/* Boardroom */}
            <AnimateOnScroll delay={2}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "580px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 z-[3] flex items-center justify-center gap-2 bg-[#FF4500] py-3">
                  <span className="text-black font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Veja mais</span>
                  <span className="text-black">↓</span>
                </div>
                <div className="absolute inset-0 z-[1] flex flex-col items-center text-center px-8 pt-16 pb-8 justify-between" style={{ background: "linear-gradient(180deg, #FF4500 0%, #CC3700 100%)" }}>
                  <div className="mb-2 text-white"><Briefcase size={24} /></div>
                  <h3 className="font-bold text-xl mb-2 text-white" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.3" }}>Boardroom</h3>
                  <p className="text-white/90 font-medium max-w-[260px] text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Inglês profissional · Business<br /><br />Para entrevistas, reuniões, apresentações e e-mails em inglês.<br />Este agente te prepara para os contextos formais onde comunicar bem faz diferença real.</p>
                  <ul className="text-white/90 font-medium text-base text-center w-full max-w-[260px] mt-3 space-y-1" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                    <li className="font-black text-white italic" style={{ fontSize: "17px" }}>→ Entrevistas de emprego em organizações internacionais</li>
                    <li className="font-black text-white italic" style={{ fontSize: "17px" }}>→ Reuniões, apresentações e negociações</li>
                    <li className="font-black text-white italic" style={{ fontSize: "17px" }}>→ Redação de e-mails e mensagens profissionais</li>
                  </ul>
                </div>
                <div className="glass-card absolute top-[44px] left-0 right-0 bottom-0 z-[2] p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:translate-y-[100%]" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)", boxShadow: "inset 0 2px 0 #000, inset 2px 0 0 #000, inset -2px 0 0 #000, inset 0 -2px 0 #000, 0 8px 30px rgba(0,0,0,0.25)" }}>
                  <Image src="/TUTOR_03.png" alt="Tutor DFN Boardroom" width={1028} height={1056} className="absolute left-1/2 -translate-x-1/2 w-[85%] h-auto z-[30] transition-transform duration-500 ease-out" style={{ bottom: "-15%" }} />
                  <div className="relative z-20 mt-auto text-[#FF4500]" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>
                    <Briefcase size={36} />
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          </div>

          {/* Rodapé da seção */}
          <div className="mt-12 flex flex-col items-center text-center gap-6">
            <p className="text-black/60 font-medium text-base sm:text-lg max-w-xl" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Novos agentes serão disponibilizados mês a mês.<br />
              Dessa forma você sempre se mantém um passo a frente.
            </p>
            <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-10 rounded-full font-bold text-lg md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>
              QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Tabela Comparativa (Fundo Claro) */}
      <section className="bg-[#FDFCFB] py-6 md:py-16 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-extrabold text-xl sm:text-3xl md:text-5xl text-center tracking-normal leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
            NENHUM APP, ESCOLA OU PROFESSOR<br /><span className="bg-[#FF4500] text-white px-3 py-1 inline-block mt-2">FAZ O QUE O TUTOR DFN FAZ</span>
          </h2>
          <p className="text-center text-black/60 font-medium mt-4 mb-8 sm:mb-16 text-sm sm:text-base md:text-lg px-4 sm:px-0" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Compare e veja por que praticar com o Tutor DFN<br className="sm:hidden" /> é diferente de tudo que você já tentou.</p>
          {/* === MOBILE: cards comparativos === */}
          <div className="flex flex-col gap-4 md:hidden px-2">
            {[
              { criterio: "Método de prática", trad: "Aulas teóricas com foco em gramática", apps: "Flashcards e exercícios repetitivos", dfn: "Método 12:2 com conversação real em inglês desde o Dia 1" },
              { criterio: "Correção de erros", trad: "Feedback pontual no fim da aula (se sobrar tempo)", apps: "Sem correção personalizada", dfn: "Correção imediata a cada palavra em texto ou áudio" },
              { criterio: "Disponibilidade", trad: "Limitada ao horário da aula", apps: "A qualquer hora, mas sem interação real", dfn: "24 horas por dia, direto no WhatsApp" },
              { criterio: "Tempo necessário por dia", trad: "1h a 2h", apps: "30 minutos", dfn: "15 minutos já é suficiente" },
              { criterio: "Relatório de progresso", trad: "Nenhum", apps: "Nenhum", dfn: "Relatório completo ao fim de cada sessão: o que parar, continuar e começar" },
              { criterio: "Imersão no Inglês", trad: "Muita teoria, pouca prática", apps: "Sem contexto real de conversação", dfn: "Prática 100% interativa focada nas situações da sua vida" },
              { criterio: "Propósito do aprendizado", trad: "Inglês genérico", apps: "Inglês genérico", dfn: "Inglês conectado ao seu Chamado" },
            ].map((item) => (
              <div key={item.criterio} className="bg-white rounded-xl p-4 shadow-sm border border-black/5">
                <p className="font-bold text-sm mb-3 text-black" style={{ fontFamily: "var(--font-headline)" }}>{item.criterio}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="block font-bold text-[#6B7280] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Tradicionais</span>
                    <span className="text-[#6B7280]" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>{item.trad}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-[#6B7280] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Apps</span>
                    <span className="text-[#6B7280]" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>{item.apps}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-[#FF4500] mb-1" style={{ fontFamily: "var(--font-headline)" }}>Tutor DFN</span>
                    <span className="text-[#FF4500] font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>{item.dfn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* === DESKTOP: tabela completa === */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <th className="py-8 px-6 text-left text-sm font-black text-[#1a1a1a] uppercase tracking-wide w-1/4" style={{ fontFamily: "var(--font-headline)", background: "#F5F5F5", WebkitFontSmoothing: "antialiased" }}>Critério</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-[#6B7280] uppercase tracking-wide w-1/4" style={{ fontFamily: "var(--font-headline)", background: "#F5F5F5", WebkitFontSmoothing: "antialiased" }}>Escolas Tradicionais</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-[#6B7280] uppercase tracking-wide w-1/4" style={{ fontFamily: "var(--font-headline)", background: "#F5F5F5", WebkitFontSmoothing: "antialiased" }}>Apps de Inglês</th>
                  <th className="py-8 px-6 text-center text-base font-black text-white uppercase tracking-wide w-1/4" style={{ fontFamily: "var(--font-headline)", background: "#FF4500", WebkitFontSmoothing: "antialiased" }}>Tutor DFN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterio: "Método de Prática", trad: "Aulas teóricas com foco em gramática", apps: "Flashcards e exercícios repetitivos", dfn: "Método 12:2 com conversação real em inglês desde o Dia 1" },
                  { criterio: "Correção de Erros", trad: "Feedback pontual no fim da aula (se sobrar tempo)", apps: "Sem correção personalizada", dfn: "Correção imediata a cada palavra em texto ou áudio" },
                  { criterio: "Disponibilidade", trad: "Limitada ao horário da aula", apps: "A qualquer hora, mas sem interação real", dfn: "24 horas por dia, direto no WhatsApp" },
                  { criterio: "Tempo Necessário por Dia", trad: "1h a 2h", apps: "30 minutos", dfn: "15 minutos já é suficiente" },
                  { criterio: "Relatório de Progresso", trad: "Nenhum", apps: "Nenhum", dfn: "Relatório completo ao fim de cada sessão: o que parar, continuar e começar" },
                  { criterio: "Imersão no Inglês", trad: "Muita teoria, pouca prática", apps: "Sem contexto real de conversação", dfn: "Prática 100% interativa focada nas situações da sua vida" },
                  { criterio: "Propósito do Aprendizado", trad: "Inglês genérico", apps: "Inglês genérico", dfn: "Inglês conectado ao seu Chamado" },
                ].map((row) => (
                  <tr key={row.criterio} style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <td className="py-6 px-6 text-base font-extrabold text-black" style={{ fontFamily: "var(--font-headline)", background: "#ffffff" }}>{row.criterio}</td>
                    <td className="py-6 px-6 text-center text-[#9CA3AF] text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.6", background: "#ffffff" }}>{row.trad}</td>
                    <td className="py-6 px-6 text-center text-[#9CA3AF] text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.6", background: "#ffffff" }}>{row.apps}</td>
                    <td className="py-6 px-6 text-center text-[#FF4500] font-bold text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: "1.6", background: "#FFF5F2" }}>
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <span className="text-[#FF4500] font-black">✓</span>
                        {row.dfn}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb" className="cta-btn cta-green inline-block py-3 px-10 rounded-full font-bold text-lg md:text-2xl uppercase cursor-pointer" style={{ fontFamily: "var(--font-headline)" }}>
              QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. Depoimentos (Fundo Escuro) */}
      <section className="bg-[#FDFCFB] dot-pattern pt-6 pb-16 md:pt-8 md:pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-black tracking-normal text-center" style={{ fontFamily: "var(--font-headline)" }}>
            NÃO É O QUE A GENTE DIZ.<br /><span className="text-[#FF4500]">É O QUE ELES VIVERAM.</span>
          </h2>
          <p className="text-center text-black/60 font-medium mt-4 mb-8 sm:mb-16 text-sm sm:text-base md:text-lg px-4 sm:px-0" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Veja o que estão dizendo quem já pratica<br className="sm:hidden" /> com o Tutor DFN.</p>

          <TestimonialsCarousel />
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-xl sm:text-2xl md:text-3xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
          </div>
        </div>
      </section>

      {/* 10. Oferta/Pricing (Fundo Claro) */}
      <div className="relative">
      <StickySection zIndex={1} as="section" className="bg-[#FDFCFB] dot-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="flex flex-col items-center justify-center w-full">
            
            {/* 1. Top Header Centered Container */}
            <div className="w-full max-w-5xl px-2 sm:px-0 mb-10 text-center flex flex-col items-center">
              <h2 className="font-extrabold tracking-normal mb-8 text-center" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.1" }}>
                UM ANO INTEIRO DO TUTOR DFN.<br />
                <span className="text-[#FF4500]">POR MENOS DO QUE UMA AULA PARTICULAR.</span>
              </h2>
              <p className="text-lg sm:text-xl font-bold text-black/90 text-center" style={{ fontFamily: "var(--font-body)" }}>
                Acesso completo ao Tutor DFN por 1 ano.<br className="hidden sm:block" /> <span className="bg-[#FF4500] text-white px-1">Sem limite de uso.</span> Sem horário definido.
              </p>
            </div>

            {/* 2. Anchor Block — Savings Card */}
            <div className="w-full max-w-3xl md:max-w-7xl px-2 sm:px-0 mb-16">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(10,10,10,0.96)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,69,0,0.08)",
                }}
              >
                {/* Orange left accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ background: "#FF4500", boxShadow: "0 0 18px rgba(255,69,0,0.6), 0 0 40px rgba(255,69,0,0.2)" }}
                />
                {/* Orange glow blob bottom-right */}
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "rgba(255,69,0,0.08)", filter: "blur(32px)" }}
                />

                <div className="px-8 sm:px-12 py-8 sm:py-10 space-y-6 relative z-10">
                  {/* Block 1 — Setup */}
                  <p className="text-white/60 text-base sm:text-lg font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.5" }}>
                    Um professor particular de inglês cobra em média{" "}
                    <span className="text-white font-semibold">R$100 a hora de aula.</span>
                  </p>

                  {/* Block 2 — Shock */}
                  <div>
                    <p className="text-white/50 text-sm sm:text-base mb-0.5" style={{ fontFamily: "var(--font-body)", lineHeight: "1.3" }}>
                      Para ter o mesmo nível de prática e correção do{" "}
                      <span className="text-white/80">Tutor DFN</span> por 1 ano...
                    </p>
                    <p className="text-white font-extrabold leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1rem, 3.8vw, 2.8rem)" }}>
                      Você gastaria facilmente mais de{" "}
                      <span className="text-[#FF4500]" style={{ textShadow: "0 0 20px rgba(255,69,0,0.4)" }}>R$ 30.000,00</span>
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)" }} />

                  {/* Block 3 — Relief */}
                  <div className="space-y-1">
                    <p className="text-white/90 text-base sm:text-lg font-semibold" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                      Com o Tutor DFN, tudo se torna mais fácil e acessível.
                    </p>
                    <p className="text-white/45 text-sm sm:text-base italic" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                      Sendo que está sempre disponível... Pelo tempo que precisar, na hora que quiser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Pricing Card (Largura maior, full span) */}
            <div className="w-full max-w-5xl px-2 sm:px-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden text-black" style={{ borderTop: "8px solid #FF4500" }}>
                
                {/* Card Title & Sub */}
                <div className="mb-10 text-center">
                  <h3 className="font-black text-4xl sm:text-5xl text-black tracking-wide mb-4" style={{ fontFamily: "var(--font-headline)" }}>TUTOR <span className="text-[#FF4500]">DFN</span></h3>
                  <div className="inline-block bg-[#FF4500] px-5 py-2">
                    <p className="text-white font-bold text-base sm:text-lg tracking-widest uppercase leading-none" style={{ fontFamily: "var(--font-body)" }}>
                      Acesso completo &middot; 1 ano &middot; Uso ilimitado
                    </p>
                  </div>
                </div>

                {/* Checklist (9 items - expanded to 3 columns since it's wider) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-12">
                  {[
                    { title: "Modo Conversa", desc: "Sessões reais de conversação por texto ou áudio. Tema livre ou sugerido pelo tutor." },
                    { title: "Modo Correção", desc: "Cada mensagem é analisada em tempo real. Erro, explicação e forma correta, nada passa." },
                    { title: "Scorecard de Pronúncia", desc: "Nota de precisão após cada áudio. Verde, amarelo ou vermelho, você sempre sabe onde está." },
                    { title: "Revisão de Erros", desc: "Revise cada erro por categoria: gramática, pronúncia, vocabulário. Só sai da fila quando você pratica certo." },
                    { title: "Relatório Visual de Sessão", desc: "Ao encerrar, receba uma imagem com score geral, palavras novas e tempo de conversa." },
                    { title: "Modo Tira-Dúvidas", desc: "Gramática, vocabulário, pronúncia. Resposta direta com exemplos práticos a qualquer momento." },
                    { title: "Curiosidade do Dia", desc: "Aprenda algo novo de inglês sem precisar formular perguntas." },
                    { title: "Agentes Especializados", desc: "Street Talk, Devotional, Boardroom. Novos agentes sempre sendo atualizados." },
                    { title: "Minha Evolução", desc: "Sequência de dias, ranking, horas praticadas e conquistas. Após 5h, Relatório de Aprendizado Avançado por IA." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="text-[#FF4500] flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-bold text-lg text-black leading-tight mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.title}</p>
                        <p className="text-black/60 text-sm leading-snug" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price + CTA side by side */}
                <div
                  className="relative rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
                  style={{
                    background: "rgba(10,10,10,0.96)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,69,0,0.08)",
                  }}
                >
                  {/* Orange left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#FF4500", boxShadow: "0 0 18px rgba(255,69,0,0.6)" }} />
                  {/* Glow blob */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none" style={{ background: "rgba(255,69,0,0.07)", filter: "blur(32px)" }} />
                  {/* Price */}
                  <div className="text-center md:text-left relative z-10">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1 line-through">De R$ 1.497,00</p>
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-bold text-white/80">12x de</span>
                      <span className="text-4xl sm:text-6xl font-black text-[#FF4500] tracking-normal" style={{ fontFamily: "var(--font-headline)" }}>R$ 59,70</span>
                    </div>
                    <p className="text-white/60 font-medium text-sm sm:text-base">ou R$ 597,00 à vista</p>
                  </div>

                  {/* CTA */}
                  <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center relative z-10">
                    <a
                      href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
                      className="cta-btn cta-green animate-pulse-cta block text-center py-4 sm:py-5 px-8 sm:px-12 rounded-full font-bold text-xl sm:text-2xl md:text-3xl uppercase cursor-pointer text-white w-full md:w-auto"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      QUERO O TUTOR DFN
                    </a>
                    <p className="text-center text-white/40 text-xs mt-4 font-medium">
                      Acesso liberado após confirmação &middot; Pagamento seguro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="mt-12 rounded-none md:rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-transparent md:bg-black/5 border-0 md:border md:border-black/10">
            <div className="w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
              <Image src="/garantia-7dias.png" alt="Garantia 7 dias" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4 text-center md:text-left" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>Garantia Incondicional de 7 Dias</h3>
              <p className="text-black/60 text-center md:text-left" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Você testa o Tutor DFN por uma semana inteira. Se não sentir que seu inglês está evoluindo ou que a IA não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.</p>
            </div>
          </div>
        </div>
      </StickySection>

      {/* Ticker: Pricing → Garantia+FAQ */}
      <div className="relative z-[2] bg-[#FF4500] ticker-wrap" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <div className="ticker-move">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-black text-white uppercase mx-3" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.5rem, 3.5vw, 1.8rem)" }}><span className="text-[#FF4500]">7 dias</span> de garantia &bull; Sem risco &bull; 100% do seu dinheiro de volta &bull;</span>
          ))}
        </div>
      </div>

      {/* 11. Garantia e FAQ (Fundo Escuro) */}
      <section className="relative z-[2] bg-black py-8 md:py-10 text-white overflow-hidden">
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white font-extrabold uppercase tracking-[0.15em] text-sm sm:text-base" style={{ fontFamily: "var(--font-headline)" }}>GARANTIA</span>
          </div>
          <h2 className="font-extrabold text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: "var(--font-headline)" }}>SE VOCÊ AINDA TEM ALGUMA DÚVIDA</h2>
          <div className="flex flex-col gap-1.5">
            <FAQItem question="Preciso ser aluno do Combo da Fluência para usar o Tutor DFN?">
              Não. O Tutor DFN é vendido separadamente e funciona de forma independente. Dito isso, quem tem o Combo aproveitará ainda mais pois o tutor usa o currículo de 32 circuitos para indicar exatamente o que estudar com base nos seus erros reais.
            </FAQItem>
            <FAQItem question="É só um ChatGPT com outro nome?">
              Não. O Tutor DFN é movido por IA de ponta, mas foi construído com uma personalidade definida, regras específicas de feedback, integração metodológica com a DFN e um sistema de relatórios, gamificação e evolução que não existe em nenhuma ferramenta genérica.
            </FAQItem>
            <FAQItem question="Funciona para iniciantes?">
              Sim. O tutor se adapta ao seu nível, usa frases mais simples e dá mais sugestões para quem está começando, além disso você pode configurar a velocidade de fala do Tutor. Você não precisa falar bem para começar. Você começa para aprender a falar bem.
            </FAQItem>
            <FAQItem question="E se eu travar e não souber o que dizer?">
              Você clica em &quot;Como responder?&quot; e recebe 3 sugestões de frases prontas para continuar a conversa. O tutor também aceita português, se você realmente travar, pode enviar em português que ele te ajuda a construir a frase em inglês.
            </FAQItem>
            <FAQItem question="Precisa do WhatsApp Business ou é no WhatsApp normal?">
              No WhatsApp normal. Você recebe o número do Tutor DFN, adiciona nos seus contatos e começa a praticar. Zero instalação, zero configuração.
            </FAQItem>
            <FAQItem question="Quantas vezes por semana devo usar?">
              Quanto mais, melhor. Mas 10 a 15 minutos por dia já fazem diferença real. O sistema de sequência de dias foi criado justamente para construir esse hábito de prática diária consistente.
            </FAQItem>
            <FAQItem question="Como funciona o acesso? Recebo um link, um app?">
              Após a confirmação do pagamento, você recebe o número do Tutor DFN pelo WhatsApp. É só adicionar, mandar uma mensagem e já começar. Sem login, sem plataforma, sem app para baixar.
            </FAQItem>
            <FAQItem question="Posso cancelar quando quiser?">
              O Tutor DFN oferece 7 dias de garantia incondicional. Se dentro desse período você decidir que não é para você, devolvemos 100% do valor sem perguntas. Após os 7 dias, a compra é definitiva. Você está adquirindo uma licença de uso de 1 ano completo, não uma assinatura recorrente.
            </FAQItem>
            <FAQItem question="Posso usar o Tutor DFN em mais de um número de WhatsApp?">
              O acesso é vinculado a um único número de WhatsApp por licença. Se você quiser habilitar para um familiar ou para um segundo número seu, entre em contato com nossa equipe, temos condições especiais para esse caso e vamos te orientar sobre a melhor forma de resolver.
              <a href="https://wa.me/556293162141" target="_blank" rel="noopener noreferrer" className="block mt-8 text-[#FF4500] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors" style={{ fontFamily: "var(--font-headline)" }}>&nbsp;Falar com a equipe DFN</a>
            </FAQItem>
          </div>
        </div>
      </section>
      </div>{/* Fim wrapper sticky Pricing→FAQ */}

      {/* 12. Seção Final — CTA de Impacto */}
      <section className="relative bg-black py-16 md:py-32 text-white overflow-hidden">
        {/* Fundo do Mapa: Mobile-only */}
        <div className="absolute inset-0 md:hidden" style={{ backgroundImage: "url('/mapa-vertical-dfn.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        {/* Fundo do Mapa: Tablet/Desktop */}
        <div className="absolute inset-0 hidden md:block" style={{ backgroundImage: "url('/map.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div className="absolute inset-x-0 top-0 h-64 md:h-80 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 z-[1]" style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)" }} />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center">
          {/* Headline */}
          <h2 className="font-black text-3xl sm:text-5xl md:text-7xl text-white mb-3" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.05", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            VOCÊ NÃO FOI CHAMADO<br />PARA FICAR PARADO
          </h2>
          {/* Subheadline caixa preta */}
          <h3 className="font-black text-base sm:text-2xl md:text-4xl leading-[1.05] mb-8 sm:mb-10 text-center flex justify-center" style={{ fontFamily: "var(--font-headline)" }}>
            <span className="bg-black text-[#FF4500] px-3 py-1.5 sm:px-6 sm:py-3 inline-block">QUAL NAÇÃO QUEIMA EM SEU CORAÇÃO?</span>
          </h3>
          {/* Body */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-medium mb-3" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4", textShadow: "0 2px 15px rgba(0,0,0,0.7)" }}>
            O inglês é a língua das nações.<br />
            Quem não fala, limita o alcance do que pode viver.<br />
            Quem pratica, vai mais longe.
          </p>
          <p className="text-white font-bold text-sm sm:text-lg md:text-xl mb-8 sm:mb-10" style={{ fontFamily: "var(--font-body)", textShadow: "0 2px 15px rgba(0,0,0,0.7)" }}>
            Comece hoje.
          </p>
          {/* CTA */}
          <a
            href="https://pay.onprofit.com.br/7aoEwLP9?off=2VlFyb"
            className="cta-btn cta-green cta-green-map inline-block py-3 sm:py-4 px-8 sm:px-12 rounded-full font-bold text-xl sm:text-3xl md:text-4xl uppercase cursor-pointer"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            QUERO O TUTOR DFN <ArrowRight className="inline ml-2" size={20} />
          </a>
          {/* Micro-copy */}
          <p className="mt-5 text-white/50 text-xs sm:text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
            7 dias de garantia &middot; Acesso imediato &middot; Direto no WhatsApp
          </p>
        </div>
      </section>

      {/* Footer - Forced Next.js Hot Reload */}
      <footer className="bg-black w-full py-8 sm:py-12 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          <div className="text-sm text-white/50 text-center md:text-left" style={{ fontFamily: "var(--font-body)" }}>
            &copy; 2026 Destra For The Nations. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="https://destraforthenations.com.br/termos/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Termos de Uso</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Política de Privacidade</a>
            <a href="https://wa.me/556293162141" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#2DD4A0] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Suporte WhatsApp</a>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/logo-tutor-dfn.png" alt="Tutor DFN" width={60} height={20} className="h-5 w-auto" />
            <Image src="/logo-dfn.png" alt="Destra For The Nations" width={60} height={20} className="h-5 w-auto" />
          </div>
        </div>
      </footer>

      {/* Modal Phone */}
      {phoneModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.6)" }}
          onClick={() => setPhoneModal(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <button
              onClick={() => setPhoneModal(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Fechar ✕
            </button>
            <PhoneMockup images={["/print-bloco01.jpeg", "/print-bloco01b.jpeg"]} />
          </div>
        </div>
      )}
    </>
  );
}

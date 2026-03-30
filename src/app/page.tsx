"use client";

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
  return (
    <>
      <div className="bg-[#FF4500] py-2 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-white font-extrabold uppercase tracking-[0.15em] text-base sm:text-sm" style={{ fontFamily: "var(--font-headline)" }}>Disponível direto no WhatsApp</span>
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
              Com o único <span className="text-[#FF4500]">Tutor</span> que não te deixa travado<br />
              <span className="text-[#FF4500]">Corrigindo</span> e ensinando em tempo real
            </p>
            <a
              href="#precos"
              className="cta-btn cta-green block w-full max-w-xs sm:max-w-sm text-center py-3 sm:py-4 rounded-xl font-bold text-xl sm:text-xl uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
            <div className="text-black/30 font-bold text-[10px] sm:text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-headline)" }}>
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
          <p className="text-white font-bold text-base sm:text-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-headline)" }}>
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
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 font-extrabold uppercase tracking-[0.15em] text-xs text-black" style={{ fontFamily: "var(--font-headline)" }}>
            O QUE É O TUTOR DFN
          </div>
          <h2 className="font-black text-black text-2xl sm:text-3xl md:text-6xl mb-8 leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
            SEU TUTOR DE IA <span className="bg-[#FF4500] text-white px-3 py-1 sm:px-5 sm:py-2 ml-1 sm:ml-1.5 inline-block mt-1 sm:mt-0">NO WHATSAPP</span>
          </h2>
          <p className="text-black/60 text-base sm:text-xl mb-6 md:mb-24 max-w-2xl font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
            O Tutor DFN é um assistente de conversação em inglês movido por inteligência artificial. Sem instalar app novo. Sem desculpa. Só você, o WhatsApp e 15 minutos por dia.
          </p>

          {/* Z-pattern list */}
          <div className="space-y-10 md:space-y-32">
            {/* Row 1: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>01</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>MANDE TEXTO OU ÁUDIO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Em inglês, no <span className="text-[#FF4500] font-bold">nível que você estiver</span>. Pode errar. Pode travar. O tutor já espera isso e começa a trabalhar com o que você mandou.
                  <br /><br />
                  Funciona com <strong className="text-[#FF4500]">mensagem de texto ou áudio gravado</strong>, você escolhe o que for mais fácil no momento.
                </p>
              </div>
              <div className="flex justify-center">
                <PhoneMockup images={["/print-bloco01.jpeg", "/print-bloco01b.jpeg"]} />
              </div>
            </div>

            {/* Row 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="order-2 md:order-1 flex justify-center">
                <PhoneMockup images={["/print-bloco02.jpeg", "/print-bloco02b.jpeg"]} />
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>02</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RECEBA CORREÇÃO E CONTINUE CONVERSANDO</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  O tutor identifica cada erro de gramática e vocabulário, explica em português o que estava errado e <span className="text-[#FF4500] font-bold">como corrigir.</span>
                  <br /><br />
                  Na sequência já manda a próxima pergunta para você continuar praticando. Nenhum erro passa. <span className="text-[#FF4500] font-bold">Nenhuma prática é interrompida.</span>
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
                  A correção é feita em relação à sua pronúncia e à sua gramática aplicada. Verde, amarelo ou vermelho... <span className="text-[#FF4500] font-bold">Você sabe exatamente como está.</span>
                </p>
              </div>
              <div className="flex justify-center">
                <PhoneMockup images={["/print-bloco03.jpeg", "/print-bloco03b.jpeg"]} />
              </div>
            </div>

            {/* Row 4: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="order-2 md:order-1 flex justify-center">
                <PhoneMockup images={["/print-bloco04.jpeg", "/print-bloco04b.jpeg"]} />
              </div>
              <div className="order-1 md:order-2 pt-8 md:pt-16">
                <div className="font-black text-3xl sm:text-5xl text-[#FF4500] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)" }}>04</div>
                <h4 className="font-extrabold text-black text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>QUANDO TRAVAR, O TUTOR TE AJUDA</h4>
                <p className="text-black/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
                  Não sabe como responder? Clica em &quot;Como responder?&quot; e receba <strong className="text-[#FF4500]">3 sugestões</strong> de frases prontas para continuar a conversa.
                  <br /><br />
                  Não entendeu o áudio do tutor? Clica em &quot;Traduzir áudio&quot; e receba <span className="text-[#FF4500] font-bold">a tradução na hora.</span> Sem sair do WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <a
              href="#precos"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-4xl sm:text-xl font-bold uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              QUERO O TUTOR DFN
            </a>
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
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/15 bg-black/5 text-black font-extrabold uppercase tracking-[0.15em] text-xs" style={{ fontFamily: "var(--font-headline)" }}>
              AO FINAL DE CADA SESSÃO
            </div>
            <h2 className="font-black text-xl sm:text-3xl md:text-5xl text-black mb-6 max-w-4xl mx-auto leading-normal px-2 sm:px-0" style={{ fontFamily: "var(--font-headline)" }}>
              CADA SESSÃO FECHA COM UM <span className="bg-[#FF4500] px-2 py-0.5 sm:px-3 sm:py-1 text-white inline-block mt-1 sm:mt-0">RELATÓRIO COMPLETO</span>
            </h2>
            <p className="text-black/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
              Você precisa saber o que melhorou e o que ainda precisa de atenção. Só o Tutor DFN te entrega um ciclo exclusivo de análises ao final de cada sessão.
            </p>
          </div>

          {/* Top row cards with colored top borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-2 sm:px-0">
            {/* Card Parar (Red) */}
            <div className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#DC2626] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CircleStop className="text-[#DC2626]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>PARAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Os principais erros que você repetiu na sessão, com explicação de por que está errado e como corrigir.</p>
              <div className="p-3 rounded-lg text-[#DC2626] font-bold text-xs italic" style={{ background: "rgba(186,26,26,0.08)", border: "1px solid rgba(186,26,26,0.2)" }}>
                &quot;Past tense — você disse &apos;I go yesterday&apos; mas o correto é &apos;I went yesterday&apos;&quot;
              </div>
            </div>
            {/* Card Continuar (Green) */}
            <div className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#00B046] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CircleCheck className="text-[#00B046]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>CONTINUAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>O que você está fazendo bem e deve continuar praticando para solidificar.</p>
              <div className="p-3 rounded-lg text-[#00B046] font-bold text-xs italic" style={{ background: "rgba(0,133,97,0.08)", border: "1px solid rgba(0,133,97,0.2)" }}>
                &quot;Bom uso de vocabulário variado e estrutura de frases naturais&quot;
              </div>
            </div>
            {/* Card Começar (Orange) */}
            <div className="bg-white border border-black/10 p-8 rounded-2xl border-t-8 border-t-[#FF4500] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-[#FF4500]" size={28} />
                <h4 className="font-extrabold text-xl text-black uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>COMEÇAR</h4>
              </div>
              <p className="text-black/60 font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Integração completa com os cursos da Destra for the Nations, indicando onde encontrar a aula do erro cometido.</p>
              <div className="p-3 rounded-lg text-[#FF4500] font-bold text-xs italic" style={{ background: "rgba(173,44,0,0.08)", border: "1px solid rgba(173,44,0,0.2)" }}>
                &quot;Cap. 2 - Circuito 1: Simple Past — para praticar o passado simples&quot;
              </div>
            </div>
          </div>

          {/* Banner style blocks */}
          <div className="space-y-6 px-2 sm:px-0">
            {/* Resumo da Sessao */}
            <AnimateOnScroll delay={0}>
            <div className="bg-white text-black p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-black/10 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <BarChart3 className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>RESUMO DA SESSÃO</h4>
                </div>
                <p className="text-black/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Ao encerrar cada sessão, você recebe um resumo visual com tudo que aconteceu na prática: nota geral, interações, palavras novas e tempo.</p>
              </div>
              <div className="w-full md:w-1/3 bg-black/5 p-6 rounded-xl border border-black/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-black" style={{ fontFamily: "var(--font-body)" }}>Tempo</span>
                  <CountUp end={24} suffix=" min" className="text-[#FF4500] font-bold" style={{ fontFamily: "var(--font-headline)" }} />
                </div>
                <div className="h-3 w-full bg-black/10 rounded-full overflow-hidden mb-6">
                  <AnimatedBar width="75%" className="h-full bg-[#FF4500] rounded-full" />
                </div>
                <div className="text-center font-black text-4xl text-black" style={{ fontFamily: "var(--font-headline)" }}>+<CountUp end={2.4} decimals={1} suffix="k" /></div>
                <div className="text-center text-xs text-[#FF4500] font-bold uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-body)" }}>Palavras</div>
              </div>
            </div>
            </AnimateOnScroll>

            {/* Sua Evolução */}
            <AnimateOnScroll delay={1}>
            <div className="bg-white text-black p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-black/10 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>SUA EVOLUÇÃO</h4>
                </div>
                <p className="text-black/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Acesse a qualquer momento: sequência de dias, posição no ranking do mês, horas totais de prática e conquistas desbloqueadas.</p>
              </div>
              <div className="w-full md:w-1/3 bg-black/5 p-6 rounded-xl border border-black/10 flex flex-col items-center justify-center">
                <div className="text-5xl font-black text-black" style={{ fontFamily: "var(--font-headline)" }}><CountUp end={5} suffix="h" /></div>
                <div className="text-xs uppercase mt-2 text-[#FF4500] font-bold tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Próxima Conquista</div>
              </div>
            </div>
            </AnimateOnScroll>

            {/* Revisao de Erros */}
            <AnimateOnScroll delay={2}>
            <div className="bg-white text-black p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-black/10 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <RotateCcw className="text-[#FF4500]" size={36} />
                  <h4 className="font-extrabold text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--font-headline)", lineHeight: "1.5" }}>REVISÃO DE ERROS</h4>
                </div>
                <p className="text-black/60 text-lg" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Revise cada erro individualmente: gramática, pronúncia, vocabulário e expressões. O erro só sai da fila quando você acerta.</p>
              </div>
              <div className="w-full md:w-1/3 grid grid-cols-2 gap-2">
                <span className="col-span-2 mx-auto bg-black/5 text-black/70 text-xs px-3 py-1.5 rounded-full font-medium italic border border-black/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;She don&apos;t&quot;</span>
                <span className="bg-black/5 text-black/70 text-xs px-3 py-1.5 rounded-full font-medium italic border border-black/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;I have went&quot;</span>
                <span className="bg-black/5 text-black/70 text-xs px-3 py-1.5 rounded-full font-medium italic border border-black/10 text-center" style={{ fontFamily: "var(--font-body)" }}>&quot;Pronunciation of World&quot;</span>
              </div>
            </div>
            </AnimateOnScroll>
          </div>

          <div className="mt-20 text-center space-y-8">
            <p className="text-black font-bold text-sm sm:text-base md:text-lg px-4 sm:px-0" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Você já viu algum professor passando todas essas informações tão específicas?</p>
            <a
              href="#precos"
              className="cta-btn cta-green rounded-full py-3.5 px-8 sm:py-4 sm:px-12 text-4xl sm:text-xl font-bold uppercase cursor-pointer"
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
          <h2 className="font-extrabold text-black tracking-normal mb-8 sm:mb-16 text-center md:text-left md:whitespace-nowrap" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}>
            PRATIQUE O INGLÊS QUE<br className="sm:hidden" /> VOCÊ VAI <span className="bg-[#FF4500] text-white px-2 py-0.5 sm:px-3 sm:py-1 inline-block mt-1 sm:mt-0">REALMENTE USAR</span>
          </h2>
          {/* === MOBILE: cards empilhados com efeito sticky === */}
          <div className="md:hidden" style={{ paddingBottom: "40px" }}>
            {[
              { title: "Street Talk", desc: "Gírias, expressões e o ritmo real das conversas cotidianas nas nações.", img: "/TUTOR_02.png", icon: <MessageCircle size={28} />, idx: 0 },
              { title: "Devotional", desc: "Vocabulário bíblico e teológico para pregar e orar com autoridade espiritual.", img: "/TUTOR_04.png", icon: <BookOpen size={28} />, idx: 1 },
              { title: "Boardroom", desc: "Inglês executivo para reuniões, projetos e networking profissional global.", img: "/TUTOR_03.png", icon: <Briefcase size={28} />, idx: 2 },
            ].map((card) => (
              <div key={card.title} className="sticky px-4" style={{ top: `${120 + card.idx * 20}px`, zIndex: card.idx + 1, marginBottom: "40px" }}>
                <div className="bg-white rounded-2xl overflow-hidden relative shadow-lg border border-black/5" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}>
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
              </div>
            ))}
          </div>

          {/* === DESKTOP: efeito carta descendo no hover === */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 cards-focus-group">
            {/* Street Talk */}
            <AnimateOnScroll delay={0}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "500px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
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
            </AnimateOnScroll>
            {/* Devotional */}
            <AnimateOnScroll delay={1}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "500px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
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
            </AnimateOnScroll>
            {/* Boardroom */}
            <AnimateOnScroll delay={2}>
            <div className="rounded-2xl group relative overflow-visible cursor-pointer hover:scale-110 hover:-translate-y-6 hover:z-10" style={{ height: "500px", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, z-index 0s" }}>
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 8. Tabela Comparativa (Fundo Claro) */}
      <section className="bg-[#FDFCFB] py-6 md:py-16 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-extrabold text-xl sm:text-3xl md:text-5xl text-center mb-8 sm:mb-16 tracking-normal leading-normal" style={{ fontFamily: "var(--font-headline)" }}>
            NENHUM APP, ESCOLA OU PROFESSOR<br /><span className="bg-[#FF4500] text-white px-3 py-1 inline-block mt-2">FAZ O QUE O TUTOR DFN FAZ</span>

          </h2>
          {/* === MOBILE: cards comparativos empilhados === */}
          <div className="flex flex-col gap-4 md:hidden px-2">
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

      {/* 9. Depoimentos (Fundo Escuro) */}
      <section className="bg-[#FDFCFB] dot-pattern py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-black mb-8 sm:mb-16 tracking-normal text-center" style={{ fontFamily: "var(--font-headline)" }}>
            NÃO É O QUE A GENTE DIZ.<br /><span className="text-[#FF4500]">É O QUE ELES VIVERAM.</span>
          </h2>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 10. Oferta/Pricing (Fundo Claro) */}
      <div className="relative">
      <StickySection zIndex={1} as="section" className="bg-[#FDFCFB] dot-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="lg:w-1/2 px-2 sm:px-0">
              <div className="text-center md:text-left"><span className="bg-[#FF4500]/10 text-[#FF4500] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 inline-block" style={{ fontFamily: "var(--font-label)" }}>Acesso Anual</span></div>
              <h2 className="font-extrabold tracking-normal mb-6 sm:mb-8 text-center md:text-left" style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.15rem, 4vw, 3rem)", lineHeight: "1.2" }}>
                UM ANO INTEIRO DO TUTOR DFN.<br />
                <span className="text-[#FF4500]" style={{ fontSize: "clamp(1.25rem, 4.5vw, 3.8rem)" }}>POR MENOS DO QUE UMA AULA PARTICULAR.</span>
              </h2>
              <ul className="space-y-4 text-sm sm:text-base">
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
                <p className="text-[#6B7280]/70 mb-8 font-medium whitespace-nowrap text-sm sm:text-base" style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>Ou R$ 597 à vista (economize R$ 119)</p>
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
      <section className="relative z-[2] bg-black py-24 text-white overflow-hidden">
        <div className="orange-glow" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-extrabold text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-headline)" }}>SE VOCÊ AINDA TEM ALGUMA DÚVIDA</h2>
          <div className="flex flex-col gap-4">
            <FAQItem question="Preciso ser aluno do Combo da Fluência para usar o Tutor DFN?">
              Não. O Tutor DFN é vendido separadamente e funciona de forma independente. Dito isso, quem tem o Combo aproveitará ainda mais, pois o tutor usa o currículo de 32 circuitos para indicar exatamente o que estudar com base nos seus erros reais.
            </FAQItem>
            <FAQItem question="É só um ChatGPT com outro nome?">
              Não. O Tutor DFN é movido por IA de ponta, mas foi construído com uma personalidade definida, regras específicas de feedback, integração metodológica com a DFN e um sistema de relatórios, gamificação e evolução que não existe em nenhuma ferramenta genérica.
            </FAQItem>
            <FAQItem question="Funciona para iniciantes?">
              Sim. O tutor se adapta ao seu nível, usa frases mais simples e dá mais sugestões para quem está começando, além disso você pode configurar a velocidade de fala do Tutor. Você não precisa falar bem para começar. Você começa para aprender a falar bem.
            </FAQItem>
            <FAQItem question="E se eu travar e não souber o que dizer?">
              Você clica em &quot;Como responder?&quot; e recebe 3 sugestões de frases prontas para continuar a conversa. O tutor também aceita português; se você realmente travar, pode enviar em português que ele te ajuda a construir a frase em inglês.
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
              O Tutor DFN oferece 7 dias de garantia incondicional. Se dentro desse período você decidir que não é para você, devolvemos 100% do valor sem perguntas. Após os 7 dias, a compra é definitiva — você está adquirindo uma licença de uso de 1 ano completo, não uma assinatura recorrente.
            </FAQItem>
            <FAQItem question="Posso usar o Tutor DFN em mais de um número de WhatsApp?">
              O acesso é vinculado a um único número de WhatsApp por licença. Se você quiser habilitar para um familiar ou para um segundo número seu, entre em contato com nossa equipe — temos condições especiais para esse caso e vamos te orientar sobre a melhor forma de resolver.
              <a href="#" className="block mt-4 text-[#FF4500] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors" style={{ fontFamily: "var(--font-headline)" }}>Falar com a equipe DFN</a>
            </FAQItem>
          </div>
        </div>
      </section>
      </div>{/* Fim wrapper sticky Pricing→FAQ */}

      {/* Footer */}
      <footer className="bg-black w-full py-8 sm:py-12 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          <div className="text-sm text-white/50 text-center md:text-left" style={{ fontFamily: "var(--font-body)" }}>
            &copy; 2026 Destra For The Nations. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Termos de Uso</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>Política de Privacidade</a>
            <a href="#" className="text-sm text-white/50 hover:text-[#2DD4A0] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Suporte WhatsApp</a>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/logo-tutor-dfn.png" alt="Tutor DFN" width={60} height={20} className="h-5 w-auto" />
            <Image src="/logo-dfn.png" alt="Destra For The Nations" width={60} height={20} className="h-5 w-auto" />
          </div>
        </div>
      </footer>
    </>
  );
}

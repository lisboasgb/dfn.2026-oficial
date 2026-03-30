"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="faq-item glass-card rounded-xl overflow-hidden"
      data-open={open}
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setOpen(false);
      }}
    >
      <button
        className="w-full p-4 sm:p-6 font-bold text-sm sm:text-base cursor-pointer flex justify-between items-center text-left"
        style={{ fontFamily: "var(--font-body)" }}
        onClick={() => setOpen(!open)}
      >
        {question}
        <ChevronDown className={`shrink-0 ml-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      <div className={`faq-content px-4 sm:px-6 text-white/60 text-sm sm:text-base ${open ? "!max-h-[300px] !opacity-100 pb-4 sm:pb-6" : ""}`} style={{ fontFamily: "var(--font-body)", lineHeight: "1.4" }}>
        {children}
      </div>
    </div>
  );
}

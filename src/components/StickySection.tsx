"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  zIndex: number;
  as?: "section" | "div" | "footer";
  className?: string;
  style?: React.CSSProperties;
}

export default function StickySection({
  children,
  zIndex,
  as: Tag = "section",
  className = "",
  style = {},
}: StickySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const calculate = () => {
      if (!ref.current) return;
      const contentHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      // Se conteúdo é maior que viewport, rola tudo antes de fixar
      // Se cabe na viewport, fixa direto no top: 0
      setStickyTop(Math.min(0, -(contentHeight - viewportHeight)));
    };

    calculate();

    const observer = new ResizeObserver(calculate);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener("resize", calculate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`sticky-section ${className}`}
      style={{ ...style, zIndex, position: "sticky", top: stickyTop }}
    >
      {children}
    </Tag>
  );
}

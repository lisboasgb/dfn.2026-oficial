"use client";

import { cn } from "@/lib/utils";

interface TickerProps {
  className?: string;
}

export default function Ticker({ className }: TickerProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        "py-4 sm:py-5",
        className
      )}
      style={{
        background: "linear-gradient(90deg, #FF4500, #E03D00, #FF4500)",
      }}
    >
      <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="mx-6 sm:mx-8 font-[var(--font-sans)] text-white uppercase tracking-wider"
            style={{ fontSize: "14px", letterSpacing: "0.15em" }}
          >
            Tutor DFN
          </span>
        ))}
      </div>
    </div>
  );
}
